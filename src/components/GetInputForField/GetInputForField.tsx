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
}: {
  field: IEditField;
  control: any;
  currentItem: any;
}) => {
  return (
    <>
      {field.type === "textareaEditor" ? (
        <InputEditor
          {...field}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
          currentItem={currentItem}
        />
      ) : field.type === "select" ? (
        <InputSelect
          {...field}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
          options={field.options || []}
        />
      ) : field.type === "switch" || field.type === "boolean" ? (
        <InputSwitch
          {...field}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
        />
      ) : field.type === "radio" ? (
        <InputRadio
          {...field}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
        />
      ) : field.type === "multipleSelect" ? (
        <InputSelect
          {...field}
          isMulti={true}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
          options={field.options || []}
        />
      ) : field.type === "date" ? (
        <InputDate
          {...field}
          control={control}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
        />
      ) : (
        <InputText
          control={control}
          {...field}
          disabled={Boolean(currentItem.id && field.forEditPageDisabled)}
        />
      )}
    </>
  );
};

export default GetInputForField;
