import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  useMemo,
} from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchema } from "../../utils/createSchema";
import { removeNoneOptions } from "../../utils/removeNoneOptions";
import GetInputForField from "../GetInputForField/GetInputForField";
import { IEditField } from "../../types/fields";

interface IItem {
  id?: string;
  name: string;
  createdAt: string;
  [key: string]: any;
}
interface FormProps {
  fields: IEditField[];
  currentItem: IItem;
  mode?: "onSubmit" | "onTouched";
  onSubmit: (data: any) => Promise<void>;
  autosave?: boolean;
  savingText?: string;
  savedText?: string;
}
export interface EntityFormRef {
  submit: () => void;
}

const FormWithFieldsCompnent = forwardRef<EntityFormRef, FormProps>(
  (
    {
      fields,
      currentItem,
      onSubmit,
      mode = "onSubmit",
      autosave,
      savingText = "Сохраняется...",
      savedText = "Сохранено",
    },
    ref,
  ) => {
    const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">(
      "idle",
    );

    const resolverSchema = useMemo(
      () => Yup.object().shape(createSchema(fields)),
      [fields],
    );

    const methods = useForm({
      mode,
      resolver: yupResolver(resolverSchema),
      defaultValues: {}, // временно пустой, будет обновлён через reset
    });

    const previousDataRef = useRef<any>({});
    const previousItem = useRef<IItem | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const syncFormWithItem = useCallback(() => {
      previousItem.current = currentItem;

      const values = { ...currentItem };
      fields.forEach((field) => {
        if (values[field.name] === undefined) {
          if (field.type === "number") values[field.name] = 0;
          else if (field.type === "boolean" || field.type === "switch")
            values[field.name] = false;
          else if (field.type === "select") values[field.name] = "none";
          else if (field.type === "radio" && field.options?.length)
            values[field.name] = field.options[0].value;
          else if (field.type === "array" || field.type === "multipleSelect")
            values[field.name] = [];
          else if (field.type === "date") values[field.name] = new Date();
          else values[field.name] = "";
        }
      });

      methods.reset(values);
      previousDataRef.current = values;
    }, [currentItem, fields, methods]);

    useEffect(() => {
      if (previousItem.current !== currentItem) {
        syncFormWithItem();
      }
    }, [currentItem, syncFormWithItem]);

    const handleSubmitInner = useCallback(
      async (data: any) => {
        console.log(data, "data");

        let cleanData = removeNoneOptions(data, fields);

        fields.forEach((field) => {
          if (field.multiLanguage && field.defaultFieldName) {
            if (!cleanData[field.defaultFieldName]) {
              cleanData[field.defaultFieldName] = [];
            }

            cleanData[field.defaultFieldName].push({
              lang: field.langCode,
              value: cleanData[field.name],
            });
            delete cleanData[field.name];
          }
        });

        await onSubmit(cleanData);
        previousDataRef.current = data;
      },
      [fields, onSubmit],
    );

    const handleAutosaveFieldChange = useCallback(
      async (name: string, value: any) => {
        if (!currentItem?.id) return;
        setSaveStatus("saving");

        const updatedField = { [name]: value, id: currentItem.id };

        await onSubmit(updatedField);

        previousDataRef.current[name] = value;
        setSaveStatus("saved");

        setTimeout(() => setSaveStatus("idle"), 1000);
      },
      [currentItem?.id, onSubmit],
    );

    useImperativeHandle(ref, () => ({
      submit: () => {
        methods.handleSubmit(handleSubmitInner)();
      },
    }));

    useEffect(() => {
      if (!autosave) return undefined;

      const subscription = methods.watch((value, { name }) => {
        if (!name) return;

        const newValue = value[name];
        const oldValue = previousDataRef.current?.[name];

        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);

          timeoutRef.current = setTimeout(() => {
            handleAutosaveFieldChange(name, newValue);
          }, 700);
        }
      });

      return () => {
        subscription.unsubscribe?.();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, [autosave, methods, handleAutosaveFieldChange]);

    const fieldsForDisplay = useMemo(() => {
      const out: (IEditField | IEditField[])[] = [];

      for (let i = 0; i < fields.length; i++) {
        if (fields[i].width === "50%") {
          out.push([fields[i], fields[i + 1]]);
          i++;
        } else {
          out.push(fields[i]);
        }
      }
      return out;
    }, [fields]);

    return (
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="flex flex-col items-start gap-8 w-full"
        >
          {autosave && (
            <div className="absolute top-0 right-0 text-xs text-gray-500 px-2 py-1">
              {saveStatus === "saving" && savingText}
              {saveStatus === "saved" && savedText}
            </div>
          )}
          {fieldsForDisplay.map((field, index) => (
            <React.Fragment key={index}>
              {Array.isArray(field) ? (
                <div className="flex items-start gap-4 w-full">
                  {field.map((f) => (
                    <GetInputForField
                      key={f.name}
                      currentItem={currentItem}
                      field={f}
                      control={methods.control}
                      formState={methods.formState}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex items-start gap-4 w-full">
                  <GetInputForField
                    key={field.name}
                    currentItem={currentItem}
                    field={field}
                    control={methods.control}
                    formState={methods.formState}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </form>
      </FormProvider>
    );
  },
);

FormWithFieldsCompnent.displayName = "FormWithFieldsCompnent";
export default FormWithFieldsCompnent;
