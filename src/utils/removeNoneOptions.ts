import { IEditField } from "../types/fields";

export const removeNoneOptions = (obj: any, allFields: IEditField[]) => {
  //console.log(obj, allFields);
  allFields.forEach((field) => {
    if (field.type === "select" && obj[field.name] === "none") {
      delete obj[field.name];
    }
    if (
      (field.type === "switch" || field.type === "boolean") &&
      typeof obj[field.name] === "string"
    ) {
      if (obj[field.name] === "false") obj[field.name] = false;
      if (obj[field.name] === "true") obj[field.name] = true;
    }
  });
  return { ...obj };
};
