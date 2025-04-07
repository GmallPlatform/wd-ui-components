import { IEditField } from "@/types/fields";

export const getFieldsWithProjectSettings = (
  allFields: IEditField[],
  projectSettings?: { languages: string[]; defaultLang: string },
): IEditField[] => {
  const { languages, defaultLang } = projectSettings || {
    languages: ["en"],
    defaultLang: "en",
  };
  const data = allFields.reduce((acc, field) => {
    if (field.multiLanguage) {
      acc.push({
        ...field,
        defaultFieldName: field.name,
        langCode: defaultLang,
        name: `${field.name}__${defaultLang}`,
        label: `${field.label} (${defaultLang})`,
        width: "50%",
      });
      languages.forEach((lang) => {
        if (lang !== defaultLang) {
          acc.push({
            ...field,
            defaultFieldName: field.name,
            langCode: lang,
            name: `${field.name}__${lang}`,
            label: `${field.label} (${lang})`,
            width: "50%",
          });
        }
      });
    } else {
      acc.push(field);
    }
    return acc;
  }, [] as IEditField[]);
  return data;
};
