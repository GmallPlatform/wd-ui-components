import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../styles/globals.css";
import { useEffect, useMemo } from "react";
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
}
export interface EntityFormRef {
  submit: () => void;
}

const FormWithFieldsCompnent = forwardRef<EntityFormRef, FormProps>(
  ({ fields, currentItem, onSubmit, mode = "onSubmit" }, ref) => {
    const resolverSchema = useMemo(
      () => Yup.object().shape(createSchema(fields)),
      [fields],
    );
    const fieldsForDisplay = [];

    for (let i = 0; i < fields.length; i++) {
      if (fields[i].width === "50%") {
        fieldsForDisplay.push([fields[i], fields[i + 1]]);
        i++;
      } else {
        fieldsForDisplay.push(fields[i]);
      }
    }

    // Ensure all fields have default values
    const defaultValues = useMemo(() => {
      const values = { ...currentItem };

      // Make sure all fields have defined values
      fields.forEach((field) => {
        if (values[field.name] === undefined) {
          if (field.type === "number") {
            values[field.name] = 0;
          } else if (field.type === "boolean" || field.type === "switch") {
            values[field.name] = false;
          } else if (field.type === "select") {
            values[field.name] = "none";
          } else if (
            field.type === "radio" &&
            field.options &&
            field.options.length > 0
          ) {
            values[field.name] = field.options[0].value;
          } else if (
            field.type === "array" ||
            field.type === "multipleSelect"
          ) {
            values[field.name] = [];
          } else if (field.type === "date") {
            values[field.name] = new Date();
          } else {
            values[field.name] = "";
          }
        }
      });

      return values;
    }, [fields, currentItem]);

    const methods = useForm({
      mode: mode,
      resolver: yupResolver(resolverSchema),
      defaultValues,
    });

    const handleSubmitInner = async (data: any) => {
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
    };

    const previousItem = useRef(currentItem);

    useEffect(() => {
      if (previousItem.current !== currentItem) {
        previousItem.current = currentItem;

        methods.reset(currentItem);
      }
    }, [currentItem, methods]);

    // Экспонируем submit наружу
    useImperativeHandle(ref, () => ({
      submit: () => {
        console.log("calling submit");
        console.log("errors", methods.formState.errors); // <- это покажет, есть ли ошибки
        methods.handleSubmit(handleSubmitInner)(); // ✅
      },
    }));
    return (
      <>
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            className="flex flex-col items-start gap-8 w-full"
          >
            {fieldsForDisplay.map(
              (field: IEditField[] | IEditField, index: number) => (
                <React.Fragment key={index}>
                  {Array.isArray(field) ? (
                    <div className="flex items-start gap-4 rounded w-full">
                      {field.map((f: IEditField) => (
                        <GetInputForField
                          key={f.name}
                          currentItem={currentItem}
                          field={f}
                          control={methods.control}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-start gap-4 rounded w-full">
                      <GetInputForField
                        key={field.name}
                        currentItem={currentItem}
                        field={field}
                        control={methods.control}
                      />
                    </div>
                  )}
                </React.Fragment>
              ),
            )}
          </form>
        </FormProvider>
      </>
    );
  },
);
FormWithFieldsCompnent.displayName = "FormWithFieldsCompnent";
export default FormWithFieldsCompnent;
