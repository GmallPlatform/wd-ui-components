const enLang = {
  delete: "Delete",
  cancel: "Cancel",
  update: "Update",
  edit: "Edit",
  upload: "Upload",
  uploadImage: "Upload Image",
  deleteImage: "Delete Image",
  dropFilesToUploadOr: "Drop files to upload or",
  selectFiles: "Select files",
  create: "Create",
  searchFor: "Search for",
  new: "New",
  createNew: "Create New",
  infoFor: "Info for",
  infoText: "Manage your facility info.",
  loading: "Loading...",
  features: "Features",
  save: "Save",
  back: "Back",
  informAbout: "Inform about",
  informText: "Manage settings and info about",
  confirmDelete: "Confirm deleting",
  confirmDeleteText1: "Are you sure you want to delete",
  confirmDeleteText2: "? This action cannot be undone.",
  noSearchResult: "No search results for",
  forEmptyList1: "You have no",
  forEmptyList2: "s",
  forEmptyList3: "that you create will end up here.",
  forEmptyList4: "Add a",
  forEmptyList5: "to get started.",
};
const ukLang = {
  delete: "Видалити",
  cancel: "Скасувати",
  update: "Оновити",
  edit: "Редагувати",
  upload: "Завантажити",
  uploadImage: "Завантажити зображення",
  deleteImage: "Видалити зображення",
  dropFilesToUploadOr: "Перетягніть файли для завантаження або",
  selectFiles: "Виберіть файли",
  create: "Створити",
  searchFor: "Пошук для",
  new: "Новий",
  createNew: "Створити новий",
  infoFor: "Інформація для",
  infoText: "Керуйте інформацією про свій об'єкт.",
  loading: "Завантаження...",
  features: " ",
  save: "Зберегти зміни",
  back: "Повернутись",
  informAbout: "Інформація про",
  informText: "Керуйте налаштуваннями та інформацією про",
  confirmDelete: "Підтвердіть видалення",
  confirmDeleteText1: "Ви впевнені, що хочете видалити",
  confirmDeleteText2: "? Цю дію неможливо відмінити.",
  noSearchResult: "Немає результатів пошуку для",
  forEmptyList1: "У вас немає",
  forEmptyList2: "",
  forEmptyList3: "які ви створюєте, будуть відображені тут.",
  forEmptyList4: "Додайте",
  forEmptyList5: "щоб розпочати.",
};

export const getLangData = (lang: string) => {
  if (lang === "en") {
    return enLang;
  } else if (lang === "uk") {
    return ukLang;
  } else {
    return enLang;
  }
};
