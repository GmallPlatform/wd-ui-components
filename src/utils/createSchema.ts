import * as Yup from "yup";
import { IEditField } from "../types/fields";
function hasRealTextContent(htmlString: string) {
  if (!htmlString) return false;

  // Удаляем все HTML-теги
  const textOnly = htmlString.replace(/<[^>]*>/g, "");

  // Проверяем, остался ли какой-то текст после удаления тегов и пробелов
  return textOnly.trim().length > 0;
}
export const createSchema = (allFields: IEditField[]) => {
  return allFields.reduce<Record<string, Yup.AnySchema>>((schema, field) => {
    const t = field.type === "multipleSelect" ? "array" : field.type;
    let validator = getValidator(t);

    if (field.required) {
      const message = field.requiredText || "This field is required";

      // Apply specific validations based on the field type
      switch (field.type) {
        case "array":
          // Safely use `min()` only for arrays
          validator = (validator as Yup.ArraySchema<any, any>).min(1, message);
          break;
        // case "select":
        //   validator = (validator as Yup.ArraySchema<any, any>).notOneOf(
        //     ["none"],
        //     message,
        //   );
        //   break;
        case "email":
          // Apply email validation
          validator = (validator as Yup.StringSchema)
            .email("Invalid email format")
            .required(message);
          break;
        case "password":
          // Apply password validation
          validator = (validator as Yup.StringSchema)
            .min(8, "Password must be at least 8 characters")
            .required(message);
          break;
        case "textareaEditor":
          // Специальная валидация для HTML-редактора
          validator = (validator as Yup.StringSchema)
            .test("required", message, (value) => {
              console.log(value, "value");
              return hasRealTextContent(value as string);
            })
            .required(message);
          break;
        default:
          validator = validator.required(message);
          break;
      }
    }

    schema[field.name] = validator;
    return schema;
  }, {});

  function getValidator(type: string) {
    switch (type) {
      case "number":
        return Yup.number();
      case "switch":
        return Yup.boolean();
      case "date":
        return Yup.date();
      case "array":
        return Yup.array();
      case "email":
        return Yup.string().email("Invalid email format");
      case "password":
        return Yup.string().min(8, "Password must be at least 8 characters");
      default:
        return Yup.string();
    }
  }
};
