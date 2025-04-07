import { IEditField } from "../types/fields";

export const getItemForEdit = <T>(
  allFields: IEditField[],
  currentItem?: T,
  projectSettings?: { languages: string[]; defaultLang: string },
) => {
  const { languages, defaultLang } = projectSettings || {
    languages: ["en", "uk"],
    defaultLang: "en",
  };
  let data = allFields.reduce((acc: any, field: any) => {
    if (field.multiLanguage) {
      acc[`${field.name}__${defaultLang}`] = "";
      languages.forEach((lang) => {
        if (lang !== defaultLang) {
          acc[`${field.name}__${lang}`] = "";
        }
      });
    } else {
      acc[field.name] =
        field.type === "number"
          ? 0
          : field.type === "boolean"
            ? false
            : field.type === "select"
              ? "none"
              : field.type === "switch"
                ? false
                : field.type === "radio"
                  ? field.options[0].value
                  : field.type === "array"
                    ? []
                    : field.type === "multipleSelect"
                      ? []
                      : field.type === "textareaEditor"
                        ? ""
                        : field.type === "date"
                          ? new Date()
                          : "";
    }
    return acc;
  }, {});

  if (currentItem) {
    const dataFromServer: any = {
      ...JSON.parse(JSON.stringify(currentItem)),
    };
    allFields.forEach((field) => {
      if (field.type === "select" && dataFromServer[field.name] === null) {
        dataFromServer[field.name] = "none";
      }
      if (
        field.type === "multipleSelect" &&
        dataFromServer[field.name] &&
        dataFromServer[field.name].length
      ) {
        dataFromServer[field.name] = dataFromServer[field.name].map(
          (item: any) => (item && item.id ? item.id : item),
        );
      }
      if (field.type === "text" && dataFromServer[field.name] === null) {
        dataFromServer[field.name] = "";
      }
      if (field.type === "number" && dataFromServer[field.name] === null) {
        dataFromServer[field.name] = 0;
      }
      if (field.type === "date" && dataFromServer[field.name] === null) {
        dataFromServer[field.name] = new Date();
      } else if (
        field.type === "date" &&
        dataFromServer[field.name] &&
        typeof dataFromServer[field.name] === "string"
      ) {
        dataFromServer[field.name] = new Date(dataFromServer[field.name]);
      }

      if (field.multiLanguage) {
        if (dataFromServer.translations) {
          const fieldData = dataFromServer.translations[field.name || ""];
          if (fieldData) {
            fieldData.forEach((langData: { lang: string; value: string }) => {
              if (languages.includes(langData.lang)) {
                dataFromServer[`${field.name}__${langData.lang}`] =
                  langData.value || "";
              }
            });
          }
        }
      }
    });
    if (dataFromServer.translations) {
      delete dataFromServer.translations;
    }

    data = { ...data, ...dataFromServer };
  }

  return data;
};

export const getFieldsWithProjectSettings = (
  allFields: IEditField[],
  projectSettings: { languages: string[]; defaultLang: string },
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

  // return allFields.reduce((acc: IEditField[], field) => {
  //   if (field.multiLanguage && field.type === "text") {
  //     return {
  //       ...field,
  //       name: `${field.name}_${defaultLang}`,
  //       label: `${field.label} (${defaultLang})`,
  //     };
  //   }
  //   return acc;
  // }, [] as IEditField[]);
};
