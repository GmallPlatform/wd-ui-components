import "./App.css";
import { useRef } from "react";

import {
  currentItem,
  initFields,
  initFields2,
  lists,
  specialties,
  categories,
  services,
} from "./data/fields";

import EntityForm, {
  EntityFormRef,
} from "../components/formComponent/FormComponent";
import { getFieldsWithProjectSettings } from "../utils/getFieldsWithProjectSettings";
import { getItemForEdit } from "../utils/getItemForEdit";

// Define types for our data structures
type ListsType = Record<string, string>;
type ListsWithItemsType = Record<string, any[]>;

export const App: React.FC = () => {
  const formRef = useRef<EntityFormRef>(null);
  const handleSubmit = async (data: any) => {
    console.log(data);
  };
  const settings = {
    languages: ["en", "uk"],
    defaultLang: "uk",
  };

  // Type assertions for our data
  const typedLists = lists as ListsType;
  const listsWithItems: ListsWithItemsType = {
    specialties,
    categories,
    services,
  };

  const allFieldsWithLangs = getFieldsWithProjectSettings(initFields, settings);
  allFieldsWithLangs.map((field) => {
    if (field.selectorSourceId && typedLists[field.selectorSourceId]) {
      const listKey = typedLists[field.selectorSourceId];
      if (listKey && listsWithItems[listKey]) {
        field.options = listsWithItems[listKey].map((option: any) => {
          if (
            option.translations &&
            option.translations.name &&
            option.translations.name.length &&
            settings.defaultLang
          ) {
            const d = option.translations.name.find(
              (t: any) => t.lang === settings.defaultLang,
            );
            option.name = d?.value || option.name || "???";
          }
          return option;
        });
      }
    }
    return field;
  });

  const item = getItemForEdit(initFields2, currentItem, settings);
  //console.log(item);

  return (
    <div className="main-wrapper">
      <div className="main-container">
        <button
          onClick={() => {
            console.log(formRef.current, "formRef");
            if (formRef.current) {
              formRef.current.submit();
            }
          }}
        >
          Submit
        </button>
        <EntityForm
          ref={formRef}
          fields={allFieldsWithLangs}
          currentItem={item}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;
