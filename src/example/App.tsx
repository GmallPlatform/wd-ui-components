import "./App.css";
import { useMemo, useRef } from "react";
import "../styles/globals.css";
import {
  currentItem,
  initFields,
  //initFields2,
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
import { IEditField } from "@/types/fields";
import React from "react";
import ImageUploadComponent from "@/components/uploadComponent/ImageUploadComponent";
import { PrimaryButton } from "@/components/ui/buttons/Buttons";
import Resultoutput from "@/components/resultoutput/Resultuotput";
import ParangaForViewport from "@/components/parangaForViewport/ParangaForViewport";
// import { sendRequest } from "./service/request";
// import { ApiService } from "@/services/apiService";
// import {
//   setCurrentFacilityLS,
//   setCurrentProjectLS,
//   setUser,
// } from "./service/localStorage";
//import { sendMessage, setError, setSuccess } from "@/utils/sendMessage";
//import { IconButtonShowcase } from "@/components/ui/buttons/IconButtons";
//import ButtonShowcase from "@/components/ui/buttons/Buttons";

const initFields2 = initFields.filter(
  (field: IEditField) =>
    field.type !== "image" && field.type !== "file" && field.type !== "gallery",
);
const filesFields = initFields.filter(
  (field: IEditField) =>
    field.type === "image" || field.type === "file" || field.type === "gallery",
);
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

  const allFieldsWithLangs = getFieldsWithProjectSettings(
    initFields2,
    settings,
  );
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

  const item = useMemo(
    () => getItemForEdit(initFields2, currentItem, settings),
    [currentItem],
  );
  const itemsService = {
    getItems: () => Promise.resolve([]),
    createItem: () => Promise.resolve({}),
    updateItem: () => Promise.resolve({}),
    deleteItem: () => Promise.resolve({}),
    uploadImgage: () => Promise.resolve({}),
    deleteImgage: () => Promise.resolve({}),
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setError(
  //       "test фдылва фдылвоа фдывлоа фдылвоа фдылвоа фжывдлао фывдла ыдвлоа ыдлвоа ыдлвао фжылдвоа фыдлвоа фдылвоа жфылва до ",
  //     );
  //     setSuccess(
  //       "test ,,d,dkalsdkjflskjdf asldkfjlskdjflaskdjfalsdkfj alskdfjasldjkf l",
  //     );
  //   }, 1000);
  // }, []);
  // console.log(sendRequest, "sendRequest");
  // const entity = {
  //   url: "/api/entity-definitions",
  //   tableName: "entity-definitions",
  // };
  // const itemsService = new ApiService(entity.url, sendRequest, {
  //   update: `reloadItems${entity.tableName}`,
  //   create: `reloadItems${entity.tableName}`,
  //   delete: `reloadItems${entity.tableName}`,
  // });
  // useEffect(() => {
  //   setCurrentFacilityLS("4358f47a-cbac-4bf2-8b07-273230c54042");
  //   setCurrentProjectLS("06903955-7865-4d69-86ca-e7019e78e479");
  //   setUser({
  //     accessToken:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3MGQyMjRmNy02NjgzLTQzNzMtOTcyYS01ZDA1YjFjZDgwYjYiLCJlbWFpbCI6Imlob3JjaHVndXJvdkBnbWFpbC5jb20iLCJpYXQiOjE3NDQyOTQ2MzgsImV4cCI6MTc0NDI5ODIzOCwiYXVkIjoiMTI3LjAuMC4xOjMyMDIiLCJpc3MiOiIxMjcuMC4wLjE6MzIwMiJ9.mHpQh3Awe3VMgb8joLNKRE0Wy8f8_d9fiSnIXMHmiBg",
  //     exp: 1744298238,
  //     refreshToken:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3MGQyMjRmNy02NjgzLTQzNzMtOTcyYS01ZDA1YjFjZDgwYjYiLCJyZWZyZXNoVG9rZW5JZCI6IjUzN2I1ZWU4LTQ3ZDctNGM0NC04MjY0LTA0OGYwYjgxYjUzZiIsImlhdCI6MTc0NDI5NDYzOCwiZXhwIjoxNzQ0MzgxMDM4LCJhdWQiOiIxMjcuMC4wLjE6MzIwMiIsImlzcyI6IjEyNy4wLjAuMTozMjAyIn0.8qkYDiMzRCl7OTMPwXFJ_rCTyxM0qAJ9-5ZWri_9Rbc",
  //     email: "ihorchugurov@gmail.com",
  //   });
  //   setTimeout(() => {
  //     itemsService.getMany().then((res) => {
  //       console.log(res, "res");
  //     });
  //   }, 2000);
  // }, []);
  console.log(currentItem, "currentItem");
  console.log(item);

  return (
    <>
      <Resultoutput />
      <ParangaForViewport />
      <div className="main-wrapper">
        <div className="main-container">
          {/* <IconButtonShowcase />
          <ButtonShowcase /> */}
          <div>
            <PrimaryButton
              onClick={() => {
                console.log(formRef.current, "formRef");
                if (formRef.current) {
                  formRef.current.submit();
                }
              }}
            >
              Submit
            </PrimaryButton>
          </div>

          {item && (
            <EntityForm
              ref={formRef}
              fields={allFieldsWithLangs}
              currentItem={item}
              onSubmit={handleSubmit}
              autosave={true}
            />
          )}
          {filesFields.map((field) => {
            return (
              <React.Fragment key={field.name}>
                {currentItem.id && (
                  <ImageUploadComponent
                    key={field.name}
                    field={field}
                    currentItem={currentItem}
                    itemsService={itemsService}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
