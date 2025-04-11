import { InputText } from "../inputs/InputText";
import { InputSwitch } from "../inputs/InputSwitch";
import { InputRadio } from "../inputs/InputRadio";
import { IEditField } from "../../types/fields";
import { InputDate } from "../inputs/InputDate";
import { InputSelect } from "../inputs/Select";
import { InputEditor } from "../inputs/InputEditor";

const GetInputForField = ({
  field,
  control,
  currentItem,
  formState,
}: {
  field: IEditField;
  control: any;
  currentItem: any;
  formState: any;
}) => {
  return (
    <>
      {field.type === "textareaEditor" ? (
        <InputEditor
          formState={formState}
          {...field}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
          currentItem={currentItem}
        />
      ) : field.type === "select" ? (
        <InputSelect
          {...field}
          formState={formState}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
          options={field.options || []}
        />
      ) : field.type === "switch" || field.type === "boolean" ? (
        <InputSwitch
          {...field}
          formState={formState}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
        />
      ) : field.type === "radio" ? (
        <InputRadio
          {...field}
          formState={formState}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
        />
      ) : field.type === "multipleSelect" ? (
        <InputSelect
          {...field}
          formState={formState}
          isMulti={true}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
          options={field.options || []}
        />
      ) : field.type === "date" ? (
        <InputDate
          {...field}
          formState={formState}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
        />
      ) : (
        <InputText
          formState={formState}
          control={control}
          {...field}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
        />
      )}
    </>
  );
};

export default GetInputForField;
