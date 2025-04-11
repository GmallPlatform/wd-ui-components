export const fields = [
  {
    id: "85d00c76-4c91-4246-886d-fcc0159b2f4f",
    name: "isActive",
    type: "boolean",
    required: false,
    requiredText: "",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: false,
    label: "Доступность",
    placeholder:
      "Увімкніть, щоб зробити сутність активною, або вимкніть, щоб приховати.",
    description:
      "Увімкніть, щоб зробити сутність активною, або вимкніть, щоб приховати.",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "85d00c76-4c91-4246-886d-fcc0159b2f41",
    name: "textareaEditor",
    type: "textareaEditor",
    required: true,
    requiredText: "get text",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: false,
    label: "textArea",
    placeholder:
      "Увімкніть, щоб зробити сутність активною, або вимкніть, щоб приховати.",
    description:
      "Увімкніть, щоб зробити сутність активною, або вимкніть, щоб приховати.",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "85d00c76-4c91-4246-886d-fcc0159b2f41",
    name: "textArea",
    type: "textarea",
    required: true,
    requiredText: "get text",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: false,
    label: "textArea",
    placeholder:
      "Увімкніть, щоб зробити сутність активною, або вимкніть, щоб приховати.",
    description:
      "Увімкніть, щоб зробити сутність активною, або вимкніть, щоб приховати.",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },

  {
    id: "c77ceee2-8a2e-4870-918f-bca2bc85d1af",
    name: "specialties",
    type: "select",
    required: true,
    requiredText: "ss",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: "6c7ebfee-4028-47c9-881e-723db0180aab",
    selectType: "entity",
    multiLanguage: false,
    label: "Направление",
    placeholder: "Choose направление",
    description: "",
    displayIndex: 2,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
    options: [
      { id: "1", name: "option1" },
      { id: "2", name: "option2" },
    ],
  },
  {
    id: "73ad9485-83b5-486e-9ced-4cc30985d940",
    name: "name__uk",
    type: "text",
    required: true,
    requiredText: "enter",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Имя (uk)",
    placeholder: "enter name",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: true,
    defaultFieldName: "name",
    langCode: "uk",
    width: "50%",
  },
  {
    id: "73ad9485-83b5-486e-9ced-4cc30985d940",
    name: "name__en",
    type: "text",
    required: true,
    requiredText: "enter",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Имя (en)",
    placeholder: "enter name",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: true,
    defaultFieldName: "name",
    langCode: "en",
    width: "50%",
  },
  {
    id: "73ad9485-83b5-486e-9ced-4cc30985d940",
    name: "desc__uk",
    type: "textarea",
    required: true,
    requiredText: "enter",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Вуыс (uk)",
    placeholder: "enter вуыс",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: true,
    defaultFieldName: "desc",
    langCode: "uk",
    width: "50%",
  },
  {
    id: "73ad9485-83b5-486e-9ced-4cc30985d940",
    name: "desc__en",
    type: "textarea",
    required: true,
    requiredText: "enter",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Desc (en)",
    placeholder: "enter щпис",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: true,
    defaultFieldName: "desc",
    langCode: "en",
    width: "50%",
  },
  {
    id: "39648b72-2457-4bed-af36-71d07d196aae",
    name: "practiceAreas__uk",
    type: "textareaEditor",
    required: false,
    requiredText: "practiceAreaspracticeAreas",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "practiceAreas (uk)",
    placeholder: "practiceAreas",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: false,
    forEditPageDisabled: false,
    displayInTable: false,
    defaultFieldName: "practiceAreas",
    langCode: "uk",
    width: "50%",
  },
  {
    id: "39648b72-2457-4bed-af36-71d07d196aae",
    name: "practiceAreas__en",
    type: "textareaEditor",
    required: false,
    requiredText: "practiceAreaspracticeAreas",
    entityDefinitionId: "66bfad4a-6e28-4801-b3c2-d5b83a5c3a87",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "practiceAreas (en)",
    placeholder: "practiceAreas",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: false,
    forEditPageDisabled: false,
    displayInTable: false,
    defaultFieldName: "practiceAreas",
    langCode: "en",
    width: "50%",
  },
];
export const initFields2 = [
  {
    id: "092930c3-4963-41eb-9c61-e4b3bbe1e652",
    name: "name",
    type: "text",
    required: true,
    requiredText: 'Поле "Назва" є обов’язковим',
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Назва",
    placeholder: "Введіть назву",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: true,
  },
  {
    id: "5033e237-f2b1-4e95-950b-b2d5dcaffef0",
    name: "specialties",
    type: "multipleSelect",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: "7e8aa123-1f90-40a7-9b87-a9f6172b0b1c",
    selectType: "entity",
    multiLanguage: false,
    label: "Спеціалізації",
    placeholder: "Виберіть спеціалізації",
    description: "",
    displayIndex: 1,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "9c48722e-dce9-47d9-96e4-5641a296a293",
    name: "services",
    type: "select",
    required: true,
    requiredText: "seect some value",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: "1ccbfb03-26a7-46e9-b0e4-7289e4450ddd",
    selectType: "entity",
    multiLanguage: false,
    label: "Послуги",
    placeholder: "Виберіть послуги",
    description: "",
    displayIndex: 4,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
    isClearable: true,
    isSearchable: true,
  },
];
export const initFields = [
  {
    id: "0e36fc75-ee88-4c1d-937b-cf19640b6893",
    name: "isActive",
    type: "boolean",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: false,
    label: "Доступність",
    placeholder:
      "Увімкніть, щоб зробити сутність активною, або вимкніть, щоб приховати.",
    description:
      "Увімкніть, щоб зробити сутність активною, або вимкніть, щоб приховати.",
    displayIndex: -1,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "092930c3-4963-41eb-9c61-e4b3bbe1e652",
    name: "name",
    type: "text",
    required: true,
    requiredText: 'Поле "Назва" є обов’язковим',
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Назва",
    placeholder: "Введіть назву",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: true,
  },
  {
    id: "0160e94c-58a5-44a1-bc3c-5248a506c6a8",
    name: "image",
    type: "image",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: false,
    label: "Зображення",
    placeholder: "",
    description: "",
    displayIndex: 0,
    forCreatePage: false,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "980af1ef-57ad-4616-a223-3dcc3d57f531",
    name: "experience",
    type: "text",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Досвід роботи",
    placeholder: "Введіть досвід роботи",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "c53d1548-cca9-4e45-98fd-7da6b259b7a9",
    name: "languages",
    type: "text",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Володіння мовами",
    placeholder: "Введіть володіння мовами",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "2a775964-a3e4-4b5b-af3a-1a0a32a10a8e",
    name: "qualification",
    type: "text",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Кваліфікація",
    placeholder: "Введіть кваліфікацію",
    description: "",
    displayIndex: 0,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "5033e237-f2b1-4e95-950b-b2d5dcaffef0",
    name: "specialties",
    type: "multipleSelect",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: "7e8aa123-1f90-40a7-9b87-a9f6172b0b1c",
    selectType: "entity",
    multiLanguage: false,
    label: "Спеціалізації",
    placeholder: "Виберіть спеціалізації",
    description: "",
    displayIndex: 1,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "2a4f7bdb-1ac2-47ca-8113-045a862c6205",
    name: "categories",
    type: "multipleSelect",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: "15d68c93-37bd-4da3-8a28-d7611d50be08",
    selectType: "entity",
    multiLanguage: false,
    label: "Категорії спеціаліста",
    placeholder: "Виберіть категорії спеціаліста",
    description: "",
    displayIndex: 2,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  // {
  //   id: "599307a2-60ef-4ab5-9d0c-50da537ca220",
  //   name: "education",
  //   type: "textareaEditor",
  //   required: false,
  //   requiredText: "",
  //   entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
  //   selectorSourceId: null,
  //   selectType: null,
  //   multiLanguage: true,
  //   label: "Освіта",
  //   placeholder: "Введіть освіту",
  //   description: "",
  //   displayIndex: 3,
  //   forCreatePage: true,
  //   forEditPage: true,
  //   forEditPageDisabled: false,
  //   displayInTable: false,
  // },
  {
    id: "9c48722e-dce9-47d9-96e4-5641a296a293",
    name: "services",
    type: "select",
    required: true,
    requiredText: "ddd",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: "1ccbfb03-26a7-46e9-b0e4-7289e4450ddd",
    selectType: "entity",
    multiLanguage: false,
    label: "Послуги",
    placeholder: "Виберіть послуги",
    description: "",
    displayIndex: 4,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
    isClearable: true,
  },
  {
    id: "c71a7560-b0b1-420c-8d45-53ece406b4c7",
    name: "practiceAreas",
    type: "textareaEditor",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "Напрями діяльності",
    placeholder: "Введіть напрями діяльності",
    description: "",
    displayIndex: 5,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "e76e839f-44e5-4a8b-94b3-d7df653a5176",
    name: "linkedin_url",
    type: "text",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: false,
    label: "Linkedin url",
    placeholder: "Введіть linkedin url",
    description: "",
    displayIndex: 8,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "da9b3867-68ac-49ce-b760-fbe214f05e76",
    name: "seo_keywords",
    type: "textarea",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "SEO keywords",
    placeholder: "Введіть seo keywords",
    description: "",
    displayIndex: 8,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "9377fb97-277a-4821-9f79-58429630da6d",
    name: "seo_title",
    type: "text",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "SEO title",
    placeholder: "Введіть seo title",
    description: "",
    displayIndex: 11,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  {
    id: "146afc69-9e1f-4c94-9d45-cfc508a63e02",
    name: "seo_description",
    type: "textarea",
    required: false,
    requiredText: "",
    entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
    selectorSourceId: null,
    selectType: null,
    multiLanguage: true,
    label: "SEO description",
    placeholder: "Введіть seo description",
    description: "",
    displayIndex: 12,
    forCreatePage: true,
    forEditPage: true,
    forEditPageDisabled: false,
    displayInTable: false,
  },
  // {
  //   id: "5424e65c-07fc-4915-9407-44eaa450ef73",
  //   name: "seo_text_1",
  //   type: "textareaEditor",
  //   required: false,
  //   requiredText: "",
  //   entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
  //   selectorSourceId: null,
  //   selectType: null,
  //   multiLanguage: true,
  //   label: "SEO text 1 ",
  //   placeholder: "Введіть seo text 1 ",
  //   description: "",
  //   displayIndex: 14,
  //   forCreatePage: true,
  //   forEditPage: true,
  //   forEditPageDisabled: false,
  //   displayInTable: false,
  // },
  // {
  //   id: "0a0da7e8-72e4-41e4-bf2a-3501c3a9a839",
  //   name: "seo_text_2",
  //   type: "textareaEditor",
  //   required: false,
  //   requiredText: "",
  //   entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
  //   selectorSourceId: null,
  //   selectType: null,
  //   multiLanguage: true,
  //   label: "SEO text 2",
  //   placeholder: "Введіть seo text 2",
  //   description: "",
  //   displayIndex: 15,
  //   forCreatePage: true,
  //   forEditPage: true,
  //   forEditPageDisabled: false,
  //   displayInTable: false,
  // },
  // {
  //   id: "9b3e5594-dfa0-4913-8f2c-f00ed00f6b01",
  //   name: "seo_text_3",
  //   type: "textareaEditor",
  //   required: false,
  //   requiredText: "",
  //   entityDefinitionId: "0d59f4fc-e530-44c0-845f-52b3e1e94e67",
  //   selectorSourceId: null,
  //   selectType: null,
  //   multiLanguage: true,
  //   label: "SEO text 3",
  //   placeholder: "Введіть seo text 3",
  //   description: "",
  //   displayIndex: 16,
  //   forCreatePage: true,
  //   forEditPage: true,
  //   forEditPageDisabled: false,
  //   displayInTable: false,
  // },
];

export const currentItem = {
  id: "af87c625-69df-423b-91d5-bcb8bfcd7c14",
  createdAt: "2025-02-20T18:52:40.421Z",
  facilityId: "fcfb3264-1be8-4ab1-8b6b-adabc343b7a1",
  slug: "ahanov-samvel-stanislavovych",
  facebook_url: null,
  instagram_url: null,
  linkedin_url: "https://www.linkedin.com/in/sam-aganov/",
  foreignId: 202,
  isActive: true,
  displayIndex: 0,
  translations: {
    name: [
      {
        lang: "uk",
        value: "Аганов Самвел Станіславович",
      },
      {
        lang: "en",
        value: "Aganov Samvel Stanislavovich",
      },
    ],
    education: [
      {
        lang: "uk",
        value:
          "• Київський національний університет ім. Тараса Шевченка. Спеціальність: психологія\r\n• California Institute for Human Science, Ph.D., Clinical Pcychology\r\n• Aspen University, MBA\r\n \r\nCertificates:\r\n• Biofeedback Training Program\r\n• Neurofeedback Training Program\r\n• Advanced EEG Interpretation\r\n• qEEG Training Program",
      },
      {
        lang: "en",
        value:
          '<ul class="editor-list-ul"><li value="1" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Kyiv National Taras Shevchenko University, Major: Psychology</span></li><li value="2" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">California Institute for Human Science, Ph.D., Clinical Psychology</span></li><li value="3" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Aspen University, MBA</span></li></ul><p class="editor-paragraph"><br></p><p class="editor-paragraph" dir="ltr"><b><strong class="editor-text-bold" style="white-space: pre-wrap;">Certificates:</strong></b></p><ul class="editor-list-ul"><li value="1" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Biofeedback Training Program</span></li><li value="2" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Neurofeedback Training Program</span></li><li value="3" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Advanced EEG Interpretation</span></li><li value="4" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">qEEG Training Program</span></li></ul>',
      },
    ],
    practiceAreas: [
      {
        lang: "uk",
        value:
          "• Особисте зростання\r\n• Топ-форма (Peak Performance)\r\n• Стрес/тривожність\r\n• Розлади сну\r\n• Депресія\r\n• Вигорання (емоційне, професійне), робота з мотивацією\r\n• СДУ/СДУГ (синдром дефіциту уваги/синдром дефіциту уваги і гіперактивності)\r\n• Увага/памʼять\r\n• Посттравматичний стресовий розлад (ПТСР)\r\n• Емоційний баланс\r\n• Кризи (життєві, професійні)\r\n• Фобії та тривожні стани\r\n• Переживання горя, втрати\r\n• Міжособистісні відносини\r\n• Емоційна саморегуляція\r\n• Самооцінка/самосприйняття\r\n• Академічна і професійна карʼєра\r\n• Сексуальні розлади\r\n• Прийняття рішень\r\n• Самореалізація\r\n <br>\r\n<strong>Коучинг:</strong>\r\n• Лайф коучинг\r\n• Бізнес коучинг\r\n• Топ-форма (Peak Performance)\r\n• Навички управління лідерства\r\n• Адаптивність і креативність\r\n• Саморегуляція\r\n• Концентрація і фокус\r\n• Памʼять\r\n• IQ, EQ, AQ, SQ/WeQ\r\n• Переключення уваги\r\n• Тайм-менеджмент\r\n• Life work balance (баланс між особистим і роботою)\r\n <br>\r\n<strong>Проводить:</strong>\r\n• Індивідуальна та групова психотерапія дорослих\r\n• Сімейна психотерапія",
      },
      {
        lang: "en",
        value:
          '<ul class="editor-list-ul"><li value="1" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Personal growth</span></li><li value="2" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Peak performance </span></li><li value="3" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Stress/Anxiety </span></li><li value="4" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Sleep disorders </span></li><li value="5" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Depression </span></li><li value="6" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Burnout (emotional, professional), Motivation work</span></li><li value="7" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">ADD/ADHD (Attention Deficit Disorder/Attention Deficit Hyperactivity Disorder) </span></li><li value="8" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Attention/Memory </span></li><li value="9" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Post-Traumatic Stress Disorder (PTSD) </span></li><li value="10" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Emotional balance </span></li><li value="11" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Crises &amp; Transitions (life, professional) </span></li><li value="12" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Phobias and Anxiety states </span></li><li value="13" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Grieving, Loss </span></li><li value="14" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Interpersonal relationships </span></li><li value="15" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Emotional self-regulation </span></li><li value="16" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Self-esteem/Self-perception </span></li><li value="17" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Academic and professional career </span></li><li value="18" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Sexual disorders </span></li><li value="19" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Decision-making </span></li><li value="20" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Self-realization </span></li></ul><p class="editor-paragraph"><br></p><p class="editor-paragraph" dir="ltr"><b><strong class="editor-text-bold" style="white-space: pre-wrap;">Coaching: </strong></b></p><ul class="editor-list-ul"><li value="1" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Life Coaching </span></li><li value="2" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Business / Executive Coaching </span></li><li value="3" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Peak performance </span></li><li value="4" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Leadership management skills </span></li><li value="5" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Adaptability and creativity </span></li><li value="6" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Self-regulation </span></li><li value="7" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Concentration and focus </span></li><li value="8" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Memory </span></li><li value="9" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">IQ, EQ, AQ, SQ/WeQ </span></li><li value="10" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Attention switching </span></li><li value="11" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Time management </span></li><li value="12" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Life-work balance </span></li></ul><p class="editor-paragraph"><br></p><p class="editor-paragraph" dir="ltr"><b><strong class="editor-text-bold" style="white-space: pre-wrap;">Conducts: </strong></b></p><ul class="editor-list-ul"><li value="1" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Business / Executive Coaching</span></li><li value="2" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Life Coaching</span></li><li value="3" class="editor-listitem" dir="ltr"><span style="white-space: pre-wrap;">Individual, couples, family and group psychotherapy</span></li></ul>',
      },
    ],
    experience: [
      {
        lang: "uk",
        value: "з 1995 року",
      },
      {
        lang: "en",
        value: "since 1995",
      },
    ],
    languages: [
      {
        lang: "uk",
        value: "англійська, українська",
      },
      {
        lang: "en",
        value: "Ukrainian, English",
      },
    ],
    qualification: [
      {
        lang: "uk",
        value: "",
      },
      {
        lang: "en",
        value: "",
      },
    ],
    seo_title: [
      {
        lang: "uk",
        value: "Аганов Самвел Станіславович | Doctor Sam",
      },
      {
        lang: "en",
        value: "Aganov Samvel Stanislavovich | Doctor Sam",
      },
    ],
    seo_description: [
      {
        lang: "uk",
        value:
          "Лікарі Медичної мережі Doctor Sam займаються діагностикою, лікуванням і профілактикою захворювань. Діагностичний висновок ґрунтується на результатах уважного збору анамнезу, огляду, лабораторних та інструментальних досліджень, а схема терапії добирається індивідуально з урахуванням фізичних показників стану здоров’я кожного пацієнта.",
      },
      {
        lang: "en",
        value:
          "Doctors of the Doctor Sam Medical Network focus on the diagnosis, treatment, and prevention of diseases. The diagnostic conclusion is based on a thorough medical history collection, examination, laboratory, and instrumental studies, while the therapy plan is individually tailored, taking into account the physical health indicators of each patient.",
      },
    ],
    seo_keywords: [
      {
        lang: "uk",
        value: "",
      },
      {
        lang: "en",
        value: "",
      },
    ],
    seo_text_1: [
      {
        lang: "uk",
        value: '<p class="editor-paragraph"><br></p>',
      },
      {
        lang: "en",
        value: '<p class="editor-paragraph"><br></p>',
      },
    ],
    seo_text_2: [
      {
        lang: "uk",
        value: '<p class="editor-paragraph"><br></p>',
      },
      {
        lang: "en",
        value: '<p class="editor-paragraph"><br></p>',
      },
    ],
    seo_text_3: [
      {
        lang: "uk",
        value: '<p class="editor-paragraph"><br></p>',
      },
      {
        lang: "en",
        value: '<p class="editor-paragraph"><br></p>',
      },
    ],
  },
  categories: ["1fd28569-5cae-4f95-8e83-3bea2dc18993"],
  specialties: [
    "79985b1e-36b7-440a-a9a4-2a73f05d4af7",
    "d63e841e-02fc-43e4-a8a6-cbfccb6ee0db",
  ],
  // services: [
  //   "77bfdc94-9b7a-4d5b-97ec-18d015bcf441",
  //   "5900b33b-d2f9-40b6-9848-3f85eb422956",
  //   "c991527f-b0d5-44ad-abdf-1098a3983db0",
  //   "f790bdb0-9aad-4e09-a769-075e9a33a9a4",
  //   "f338819c-116d-4f3b-a83f-e24b6b0813da",
  // ],
  services: "480ddf71-6a04-4e91-ae45-20b0ed616913",
  image: {
    id: "ddc62c36-2006-4508-897d-db36ea372354",
    createdAt: "2025-04-04T14:09:40.992Z",
    url: "/public/kyivrespublika/specialists/ahanov-samvel-stanislavovych/images/0f1a76b8-757c-4879-9a79-372a16f3aeb0.png",
    displayIndex: 2103,
    seo_title: null,
    seo_alt: null,
  },
};
export const lists = {
  "7e8aa123-1f90-40a7-9b87-a9f6172b0b1c": "specialties",
  "15d68c93-37bd-4da3-8a28-d7611d50be08": "categories",
  "1ccbfb03-26a7-46e9-b0e4-7289e4450ddd": "services",
};
export const specialties = [
  {
    id: "da1a85bf-9095-4e57-84f3-ad00eff8752b",
    createdAt: "2025-02-06T15:43:04.196Z",
    slug: "akusherstvo-i-hinekolohiia",
    foreignId: 11,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Obstetrician-gynecologist",
        },
        {
          lang: "uk",
          value: "Акушер-гінеколог",
        },
      ],
    },
  },
  {
    id: "9f51688e-da8f-4621-810c-03c2f56d900d",
    createdAt: "2025-02-20T18:52:40.837Z",
    slug: "alerholoh-dytiachyi",
    foreignId: 13,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Алерголог дитячий",
        },
        {
          lang: "en",
          value: "Pediatric allergist",
        },
      ],
    },
  },
  {
    id: "4fd7ac2b-6ca7-41eb-9409-480816c0d1fb",
    createdAt: "2025-02-06T15:43:03.165Z",
    slug: "alerholohiia-ta-imunolohiia",
    foreignId: 12,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Allergology and immunology",
        },
        {
          lang: "uk",
          value: "Алергологія та імунологія",
        },
      ],
    },
  },
  {
    id: "2eaf52e4-3719-45a7-8f4a-99cb20a66190",
    createdAt: "2025-02-06T15:43:03.825Z",
    slug: "anesteziolohiia-ta-reanimatolohiia",
    foreignId: 15,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Anesthesiology and resuscitation",
        },
        {
          lang: "uk",
          value: "Анестезіологія та реаніматологія",
        },
      ],
    },
  },
  {
    id: "48845efd-494b-4a79-8744-ae49c3da4ab6",
    createdAt: "2025-02-20T18:52:33.034Z",
    slug: "hastroenteroloh",
    foreignId: 22,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Гастроентеролог",
        },
        {
          lang: "en",
          value: "Gastroenterologist",
        },
      ],
    },
  },
  {
    id: "9ae11c2c-fdc6-4ba4-b992-2b69a88a5102",
    createdAt: "2025-02-20T18:52:30.944Z",
    slug: "hinekoloh-dytiachyi",
    foreignId: 30,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Гінеколог дитячий",
        },
        {
          lang: "en",
          value: "Pediatric gynecologist",
        },
      ],
    },
  },
  {
    id: "7e542e07-e294-4509-81ad-2bf1ec7620df",
    createdAt: "2025-02-06T15:43:03.250Z",
    slug: "dermatolohiia",
    foreignId: 33,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дерматовенеролог",
        },
        {
          lang: "en",
          value: "Dermatovenereologist",
        },
      ],
    },
  },
  {
    id: "59d618de-d710-4590-8253-9a1b17e4c5b6",
    createdAt: "2025-02-20T18:52:27.036Z",
    slug: "dermatoveneroloh-dytiachyi",
    foreignId: 34,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дерматовенеролог дитячий",
        },
        {
          lang: "en",
          value: "Pediatric dermatovenereologist",
        },
      ],
    },
  },
  {
    id: "55211349-ec72-4f8f-afff-1d0d9ef1cb72",
    createdAt: "2025-02-06T15:43:03.419Z",
    slug: "diahnostyka-endoskopichna",
    foreignId: 36,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Endoscopic diagnostics",
        },
        {
          lang: "uk",
          value: "Діагностика ендоскопічна",
        },
      ],
    },
  },
  {
    id: "0f939aa2-93ef-46d9-a5c0-295212ef3c18",
    createdAt: "2025-02-06T15:43:03.080Z",
    slug: "endokrynolohiia",
    foreignId: 42,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Endocrinologist",
        },
        {
          lang: "uk",
          value: "Ендокринолог",
        },
      ],
    },
  },
  {
    id: "17da5bac-155e-460a-b0b8-d2fef539895a",
    createdAt: "2025-02-06T15:43:02.462Z",
    slug: "kardiolohiia",
    foreignId: 49,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кардіолог",
        },
        {
          lang: "en",
          value: "Cardiologist",
        },
      ],
    },
  },
  {
    id: "d62d8227-a151-4067-b0b8-f4a57d2b013b",
    createdAt: "2025-02-20T18:52:23.890Z",
    slug: "kardioloh-dytiachyi",
    foreignId: 50,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pediatric cardiologist",
        },
        {
          lang: "uk",
          value: "Кардіолог дитячий",
        },
      ],
    },
  },
  {
    id: "50597bd2-9e16-47b3-b5eb-4cef18e9a8bd",
    createdAt: "2025-03-18T07:03:26.057Z",
    slug: "kardiorevmatoloh-dytiachyi",
    foreignId: 176,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pediatric cardiorheumatologist",
        },
        {
          lang: "uk",
          value: "Кардіоревматолог дитячий",
        },
      ],
    },
  },
  {
    id: "79985b1e-36b7-440a-a9a4-2a73f05d4af7",
    createdAt: "2025-03-18T16:17:49.636Z",
    slug: "kouch",
    foreignId: 178,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Коуч",
        },
        {
          lang: "en",
          value: "Coach",
        },
      ],
    },
  },
  {
    id: "6480c558-7c8c-45aa-87a1-89c3a4026487",
    createdAt: "2025-03-18T07:03:26.049Z",
    slug: "diahnostyka-funktsionalna",
    foreignId: 38,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікар з функціональної діагностики",
        },
        {
          lang: "en",
          value: "Functional diagnostics",
        },
      ],
    },
  },
  {
    id: "a5911041-5e0d-4ff1-a3e0-5f56388dadab",
    createdAt: "2025-02-06T15:43:04.000Z",
    slug: "diahnostyka-ultrazvukova",
    foreignId: 37,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound doctor",
        },
        {
          lang: "uk",
          value: "Лікар УЗД",
        },
      ],
    },
  },
  {
    id: "f23ca61f-74be-4dd8-a81e-22a55be201fd",
    createdAt: "2025-04-04T06:45:02.643Z",
    slug: "mamoloh",
    foreignId: 58,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Мамолог",
        },
      ],
    },
  },
  {
    id: "0393bc5d-b472-4e8c-8fed-b822f2f5dbab",
    createdAt: "2025-02-20T18:52:36.509Z",
    slug: "masazhyst",
    foreignId: 154,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Масажист",
        },
        {
          lang: "en",
          value: "Massage therapist",
        },
      ],
    },
  },
  {
    id: "748747c7-d1e9-426b-884a-453c8fdfbc97",
    createdAt: "2025-03-18T13:10:03.403Z",
    slug: "masazhyst-dytiachyi",
    foreignId: 177,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pediatric massage therapist",
        },
        {
          lang: "uk",
          value: "Масажист дитячий",
        },
      ],
    },
  },
  {
    id: "773681b1-89c2-4c4b-8123-0dc13aa89326",
    createdAt: "2025-02-20T18:52:33.378Z",
    slug: "nevropatoloh-dytiachyi",
    foreignId: 63,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Невролог дитячий",
        },
        {
          lang: "en",
          value: "Pediatric neuropathologist",
        },
      ],
    },
  },
  {
    id: "ccb41fc3-83be-4d45-ad01-8ab5c46e907b",
    createdAt: "2025-02-20T18:52:34.834Z",
    slug: "nevropatoloh",
    foreignId: 62,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Невропатолог",
        },
        {
          lang: "en",
          value: "Neuropathologist",
        },
      ],
    },
  },
  {
    id: "008292d9-06db-4575-8034-190a0feb5179",
    createdAt: "2025-04-04T06:45:02.634Z",
    slug: "onkoloh",
    foreignId: 71,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Онколог",
        },
      ],
    },
  },
  {
    id: "fb66218a-e554-44e7-8821-bbb65ece697b",
    createdAt: "2025-02-20T18:52:25.942Z",
    slug: "ortopedtravmatoloh-dytiachyi",
    foreignId: 75,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pediatric orthopedic traumatologist",
        },
        {
          lang: "uk",
          value: "Ортопед-травматолог дитячий",
        },
      ],
    },
  },
  {
    id: "62452118-34a7-42e4-8a16-afc9d34c8304",
    createdAt: "2025-02-06T15:43:03.336Z",
    slug: "otorynolarynholohiia",
    foreignId: 76,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Otorhinolaryngologist",
        },
        {
          lang: "uk",
          value: "Оториноларинголог",
        },
      ],
    },
  },
  {
    id: "9951166a-e7c0-497b-a0e2-43e3d7258cf8",
    createdAt: "2025-02-20T18:52:39.898Z",
    slug: "otorynolarynholoh-dytiachyi",
    foreignId: 77,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Оториноларинголог дитячий",
        },
        {
          lang: "en",
          value: "Pediatric otorhinolaryngologist",
        },
      ],
    },
  },
  {
    id: "fb7d7be7-be57-40a9-a007-4a52c44bd4c2",
    createdAt: "2025-02-06T15:43:06.072Z",
    slug: "oftalmolohiia",
    foreignId: 78,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ophthalmologist",
        },
        {
          lang: "uk",
          value: "Офтальмолог",
        },
      ],
    },
  },
  {
    id: "a0db69c9-f3a0-4e5d-b9fd-fdd4839daf35",
    createdAt: "2025-02-20T18:52:25.580Z",
    slug: "oftalmoloh-dytiachyi",
    foreignId: 79,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pediatric ophthalmologist",
        },
        {
          lang: "uk",
          value: "Офтальмолог дитячий",
        },
      ],
    },
  },
  {
    id: "2c71f0a1-5d86-4d2c-b89f-200ed0fb1d29",
    createdAt: "2025-02-06T15:43:02.781Z",
    slug: "pediatriia",
    foreignId: 82,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Педіатр",
        },
        {
          lang: "en",
          value: "Pediatrician",
        },
      ],
    },
  },
  {
    id: "0015804f-d3a1-4134-8a6e-1b02369fcf40",
    createdAt: "2025-02-20T18:52:27.796Z",
    slug: "psykhiatr",
    foreignId: 90,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Психіатр",
        },
        {
          lang: "en",
          value: "Psychiatrist",
        },
      ],
    },
  },
  {
    id: "d63e841e-02fc-43e4-a8a6-cbfccb6ee0db",
    createdAt: "2025-02-20T18:52:28.921Z",
    slug: "psykholoh",
    foreignId: 92,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Psychologist",
        },
        {
          lang: "uk",
          value: "Психолог",
        },
      ],
    },
  },
  {
    id: "c45ed21d-03fa-4f7f-9632-dbad613c21de",
    createdAt: "2025-02-20T18:52:32.315Z",
    slug: "psykholoh-dytiachyi",
    foreignId: 93,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pediatric psychologist",
        },
        {
          lang: "uk",
          value: "Психолог дитячий",
        },
      ],
    },
  },
  {
    id: "4a08fbcb-a603-49c3-922d-540470eaff83",
    createdAt: "2025-02-06T15:43:04.469Z",
    slug: "radiolohiia",
    foreignId: 98,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Radiology",
        },
        {
          lang: "uk",
          value: "Радіологія",
        },
      ],
    },
  },
  {
    id: "422b29b4-37f9-41cb-b6b7-f04247ababb5",
    createdAt: "2025-02-06T15:43:04.934Z",
    slug: "sestrynska-sprava",
    foreignId: 105,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Сестра медична",
        },
        {
          lang: "en",
          value: "Nursing",
        },
      ],
    },
  },
  {
    id: "6ddd574c-00f3-4582-9299-7404c9ddaf7a",
    createdAt: "2025-02-06T15:43:05.942Z",
    slug: "zahalna-medychna-praktyka-simeina-medytsyna",
    foreignId: 46,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Сімейний лікар",
        },
        {
          lang: "en",
          value: "Family doctor",
        },
      ],
    },
  },
  {
    id: "df2db2be-c497-4f13-8b48-80f8a47063ec",
    createdAt: "2025-02-06T15:43:02.371Z",
    slug: "terapiia",
    foreignId: 115,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Терапевт",
        },
        {
          lang: "en",
          value: "Therapist",
        },
      ],
    },
  },
  {
    id: "fc915224-2635-46cc-8ea2-d9f74f35065b",
    createdAt: "2025-02-06T15:43:04.557Z",
    slug: "urolohiia",
    foreignId: 120,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Urologist",
        },
        {
          lang: "uk",
          value: "Уролог",
        },
      ],
    },
  },
  {
    id: "49f28678-17ed-42fa-b5dc-b731689bc667",
    createdAt: "2025-02-06T15:43:02.221Z",
    slug: "khirurhiia",
    foreignId: 128,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хірург",
        },
        {
          lang: "en",
          value: "Surgeon",
        },
      ],
    },
  },
  {
    id: "c2cee27a-c1de-47d4-a5cd-79daef549ffb",
    createdAt: "2025-02-20T18:52:24.367Z",
    slug: "khirurh-dytiachyi",
    foreignId: 129,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хірург дитячий",
        },
        {
          lang: "en",
          value: "Pediatric surgeon",
        },
      ],
    },
  },
  {
    id: "b22d671e-b2a6-4c1c-9d3e-7ae3361cbf96",
    createdAt: "2025-04-04T06:45:02.777Z",
    slug: "khirurh-sudynnyi",
    foreignId: 135,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хірург судинний",
        },
      ],
    },
  },
];

export const categories = [
  {
    id: "b1cc096c-67e4-489e-844e-b6a09a355c82",
    createdAt: "2025-02-21T10:01:03.496Z",
    slug: "zahalna-praktyka-simeina-medytsyna",
    foreignId: 44,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Загальна практика сімейна медицина",
        },
      ],
      seo_title: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_description: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_keywords: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_1: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_2: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_3: [
        {
          lang: "uk",
          value: null,
        },
      ],
    },
  },
  {
    id: "9576684a-14e2-4b0d-91e6-1db25ee6dbc2",
    createdAt: "2025-02-06T15:43:01.791Z",
    slug: "likari-dlya-ditei",
    foreignId: 33,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Doctors for children",
        },
        {
          lang: "uk",
          value: "Лікарі для дітей",
        },
      ],
      seo_title: [
        {
          lang: "en",
          value: "",
        },
        {
          lang: "uk",
          value: "Лікарі для дітей | Doctor Sam",
        },
      ],
      seo_description: [
        {
          lang: "en",
          value: "",
        },
        {
          lang: "uk",
          value:
            "У період активного розвитку дитини батькам необхідно бути впевненими в тому, що вони завжди можуть отримати кваліфіковану медичну допомогу і підтримку спеціалістів. Педіатри Медичної мережі Doctor Sam турбуються про здоров’я своїх пацієнтів із самого народження, що є запорукою здорового та гармонійного розвитку малюка.",
        },
      ],
      seo_keywords: [
        {
          lang: "en",
          value: "",
        },
        {
          lang: "uk",
          value: "",
        },
      ],
      seo_text_1: [
        {
          lang: "en",
          value: "",
        },
        {
          lang: "uk",
          value: "",
        },
      ],
      seo_text_2: [
        {
          lang: "en",
          value: "",
        },
        {
          lang: "uk",
          value: "",
        },
      ],
      seo_text_3: [
        {
          lang: "en",
          value: "",
        },
        {
          lang: "uk",
          value: "",
        },
      ],
    },
  },
  {
    id: "c95df175-0b65-4ad6-b94a-117ac04d6822",
    createdAt: "2025-02-06T15:43:01.747Z",
    slug: "likari-dlya-doroslih",
    foreignId: 11,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Doctors for adults",
        },
        {
          lang: "uk",
          value: "Лікарі для дорослих",
        },
      ],
      seo_title: [
        {
          lang: "en",
          value: "",
        },
        {
          lang: "uk",
          value: "Лікарі для дорослих | Doctor Sam",
        },
      ],
      seo_description: [
        {
          lang: "en",
          value: "",
        },
        {
          lang: "uk",
          value:
            "Що вирізняє будь-який бізнес, орієнтований на клієнта, з-поміж інших у своєму сегменті? Передусім – унікальні послуги, які повністю відповідають вимогам сьогодення, надаючи клієнтам зручні й прості рішення, дбаючи про здоров’я і покращуючи якість життя.",
        },
      ],
      seo_keywords: [
        {
          lang: "en",
          value: "",
        },
        {
          lang: "uk",
          value: "",
        },
      ],
      seo_text_1: [
        {
          lang: "en",
          value: '<p class="editor-paragraph"><br></p>',
        },
        {
          lang: "uk",
          value: '<p class="editor-paragraph"><br></p>',
        },
      ],
      seo_text_2: [
        {
          lang: "en",
          value: '<p class="editor-paragraph"><br></p>',
        },
        {
          lang: "uk",
          value: '<p class="editor-paragraph"><br></p>',
        },
      ],
      seo_text_3: [
        {
          lang: "en",
          value: '<p class="editor-paragraph"><br></p>',
        },
        {
          lang: "uk",
          value: '<p class="editor-paragraph"><br></p>',
        },
      ],
    },
  },
  {
    id: "a5d8e9d3-17b0-49bc-902d-dc696aa1aaed",
    createdAt: "2025-02-06T15:43:01.776Z",
    slug: "operatsiina",
    foreignId: 14,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Операційна",
        },
      ],
      seo_title: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_description: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_keywords: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_1: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_2: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_3: [
        {
          lang: "uk",
          value: null,
        },
      ],
    },
  },
  {
    id: "4a03f44f-a12c-4cb1-8a75-de038776f309",
    createdAt: "2025-02-06T15:43:01.760Z",
    slug: "poliklinika-2",
    foreignId: 12,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Поліклініка 2",
        },
      ],
      seo_title: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_description: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_keywords: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_1: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_2: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_3: [
        {
          lang: "uk",
          value: null,
        },
      ],
    },
  },
  {
    id: "1fd28569-5cae-4f95-8e83-3bea2dc18993",
    createdAt: "2025-02-21T10:01:03.468Z",
    slug: "sluzhba-psykholohichnoyi-dopomohy",
    foreignId: 55,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Психологи та Коучі",
        },
        {
          lang: "en",
          value: "Psychologists & Coaches",
        },
      ],
      seo_title: [
        {
          lang: "uk",
          value: "Психологи та коучі | Doctor Sam",
        },
        {
          lang: "en",
          value: "",
        },
      ],
      seo_description: [
        {
          lang: "uk",
          value: "",
        },
        {
          lang: "en",
          value: "",
        },
      ],
      seo_keywords: [
        {
          lang: "uk",
          value: "",
        },
        {
          lang: "en",
          value: "",
        },
      ],
      seo_text_1: [
        {
          lang: "uk",
          value: '<p class="editor-paragraph"><br></p>',
        },
        {
          lang: "en",
          value: '<p class="editor-paragraph"><br></p>',
        },
      ],
      seo_text_2: [
        {
          lang: "uk",
          value: '<p class="editor-paragraph"><br></p>',
        },
        {
          lang: "en",
          value: '<p class="editor-paragraph"><br></p>',
        },
      ],
      seo_text_3: [
        {
          lang: "uk",
          value: '<p class="editor-paragraph"><br></p>',
        },
        {
          lang: "en",
          value: '<p class="editor-paragraph"><br></p>',
        },
      ],
    },
  },
  {
    id: "0987edd8-a7ae-4a35-8509-15c044c782f3",
    createdAt: "2025-02-06T15:43:01.767Z",
    slug: "statsionar",
    foreignId: 13,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Стаціонар",
        },
      ],
      seo_title: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_description: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_keywords: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_1: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_2: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_3: [
        {
          lang: "uk",
          value: null,
        },
      ],
    },
  },
  {
    id: "24e6aad6-0435-4154-861e-5bed87885ac8",
    createdAt: "2025-02-06T15:43:01.785Z",
    slug: "dennyi-statsionar",
    foreignId: 22,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Call Center",
        },
      ],
      seo_title: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_description: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_keywords: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_1: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_2: [
        {
          lang: "uk",
          value: null,
        },
      ],
      seo_text_3: [
        {
          lang: "uk",
          value: null,
        },
      ],
    },
  },
];
export const services = [
  {
    id: "4b933444-76ab-4f5b-b2cb-bc35aab0a74a",
    createdAt: "2025-02-06T13:42:50.838Z",
    slug: "adyponektyn-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 444,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Адипонектин \\ N **",
        },
        {
          lang: "en",
          value: "Adiponectin \\ N **",
        },
      ],
    },
  },
  {
    id: "480ddf71-6a04-4e91-ae45-20b0ed616913",
    createdAt: "2025-02-06T13:42:50.358Z",
    slug: "adrenokortykotropnyi-hormon-akth",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 393,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Адренокортикотропний гормон (АКТГ) **",
        },
        {
          lang: "en",
          value: "Adrenocorticotropic hormone (ACTH) **",
        },
      ],
    },
  },
  {
    id: "1d955b05-58e8-427d-9f47-7dc72f92b941",
    createdAt: "2025-02-06T13:42:52.445Z",
    slug: "aktyvovanyi-chastkovyi-tromboplastynovyi-chas-achtch-aptt",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 656,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Активований частковий тромбопластиновий час (АЧТЧ, APTT)",
        },
        {
          lang: "en",
          value: "Activated partial thromboplastin time (APTT)",
        },
      ],
    },
  },
  {
    id: "04de2a09-3d8c-4c03-8af5-6a12bbe42e2d",
    createdAt: "2025-02-06T13:42:48.267Z",
    slug: "akusherskyi-uzd-skryninh-1-trymestru",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 350,
    onlinePrice: 0,
    foreignId: 24,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Акушерський УЗД скринінг 1 триместру",
        },
        {
          lang: "en",
          value: "Obstetric ultrasound screening 1st trimester",
        },
      ],
    },
  },
  {
    id: "4ee30200-e305-4e51-bff6-29aed7911944",
    createdAt: "2025-02-06T13:42:48.301Z",
    slug: "akusherskyi-uzd-skryninh-2-trymestru",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 400,
    onlinePrice: 0,
    foreignId: 25,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Obstetric ultrasound screening 2nd trimester",
        },
        {
          lang: "uk",
          value: "Акушерський УЗД скринінг 2 триместру",
        },
      ],
    },
  },
  {
    id: "55e3aa0d-ded8-408e-90d4-38bff4316af1",
    createdAt: "2025-02-06T13:42:53.400Z",
    slug: "alaninaminotransferaza-alt-alt",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 817,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Аланінамінотрансфераза (АЛТ) / ALT",
        },
        {
          lang: "en",
          value: "Alanine aminotransferase (ALT)",
        },
      ],
    },
  },
  {
    id: "d017e726-70f5-42d8-9665-4686967e547f",
    createdAt: "2025-02-06T13:42:48.676Z",
    slug: "alt",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 30,
    onlinePrice: 0,
    foreignId: 66,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "ALT",
        },
        {
          lang: "uk",
          value: "АЛТ",
        },
      ],
    },
  },
  {
    id: "cfb486e6-1d84-49bc-8e3e-657fc765e36b",
    createdAt: "2025-02-06T13:42:53.379Z",
    slug: "albumin",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 814,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Альбумін",
        },
        {
          lang: "en",
          value: "Albumin",
        },
      ],
    },
  },
  {
    id: "bfc6480d-1ce3-4be3-9a1d-d5d91bc28b73",
    createdAt: "2025-02-06T13:42:50.396Z",
    slug: "aldosteron",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 397,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Альдостерон",
        },
        {
          lang: "en",
          value: "Aldosterone",
        },
      ],
    },
  },
  {
    id: "ec8270b9-3797-4f18-92d1-03624696d684",
    createdAt: "2025-02-06T13:42:50.659Z",
    slug: "aldosteronreninove-spivvidnoshennia-ars-aldosteron-renin-indeks",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 424,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Альдостерон-ренінове співвідношення (АРС) (альдостерон, ренін, індекс) **",
        },
        {
          lang: "en",
          value: "Aldosterone-renin ratio (ARR) (aldosterone, renin, index) **",
        },
      ],
    },
  },
  {
    id: "99b6ba60-535b-4b2d-83cc-e3dbc530386e",
    createdAt: "2025-02-20T19:04:14.838Z",
    slug: "amplipulsterapiia-1-zona-15-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 460,
    onlinePrice: null,
    foreignId: 6387,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Amplipulse therapy (1 zone, 15 min.)",
        },
        {
          lang: "uk",
          value: "Ампліпульстерапія (1 зона, 15 хв.)",
        },
      ],
    },
  },
  {
    id: "5d8f3e01-da3c-4e88-a8f1-49646416dd67",
    createdAt: "2025-02-06T13:42:51.721Z",
    slug: "amplifikatsiia-1q213q22-cks1b-taabo-1p322-cdkn2c-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 558,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Ампліфікація 1q21.3-q22 (CKS1B) та/або 1p32.2 (CDKN2C) (FISH)",
        },
        {
          lang: "en",
          value:
            "Amplification 1q21.3-q22 (CKS1B) and/or 1p32.2 (CDKN2C) (FISH)",
        },
      ],
    },
  },
  {
    id: "996d7b66-bb60-44aa-9a99-86580dc97c4c",
    createdAt: "2025-02-06T13:42:51.468Z",
    slug: "amplifikatsiia-smet-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 525,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ампліфікація С-МЕТ (FISH)",
        },
        {
          lang: "en",
          value: "Amplification C-MET (FISH)",
        },
      ],
    },
  },
  {
    id: "e425c472-f8cf-4f96-be6b-207576616007",
    createdAt: "2025-02-06T13:42:52.098Z",
    slug: "amplifikatsiia-cdk4-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 609,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ампліфікація CDK4 (FISH)",
        },
        {
          lang: "en",
          value: "Amplification CDK4 (FISH)",
        },
      ],
    },
  },
  {
    id: "1a4c4205-7541-4003-961b-643a84920fd6",
    createdAt: "2025-02-06T13:42:50.917Z",
    slug: "amplifikatsiia-her2neu-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 454,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ампліфікація HER-2/neu (FISH)",
        },
        {
          lang: "en",
          value: "Amplification HER-2/neu (FISH)",
        },
      ],
    },
  },
  {
    id: "b43318e4-a326-4505-a392-785ac95d3f95",
    createdAt: "2025-02-06T13:42:52.144Z",
    slug: "amplifikatsiia-mdm2-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 615,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ампліфікація MDM2 (FISH)",
        },
        {
          lang: "en",
          value: "Amplification MDM2 (FISH)",
        },
      ],
    },
  },
  {
    id: "88c775da-40e3-430a-b443-db12a2d6f071",
    createdAt: "2025-02-06T13:42:50.980Z",
    slug: "amputatsiia-kintsivky-chastyny-kintsivky-pry-anhiopatiiakh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 463,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ампутація кінцівки/ частини кінцівки при ангіопатіях",
        },
        {
          lang: "en",
          value: "Limb/partial limb amputation due to angiopathies",
        },
      ],
    },
  },
  {
    id: "6a4d855b-c3c5-483e-9f68-925f522cca55",
    createdAt: "2025-02-06T13:42:51.601Z",
    slug: "amputatsiia-paltsiv-falanh-paltsiv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 542,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ампутація пальців/ фаланг пальців",
        },
        {
          lang: "en",
          value: "Finger/phalanx amputation",
        },
      ],
    },
  },
  {
    id: "4acd2481-e789-41af-a1a3-d62a33d4f88e",
    createdAt: "2025-02-06T13:42:52.408Z",
    slug: "analiz-krovi-na-retykulotsyty-z-pidrakhunkom-retykulotsytarnoho-indeksu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 651,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Blood test for reticulocytes with reticulocyte index calculation",
        },
        {
          lang: "uk",
          value:
            "Аналіз крові на ретикулоцити з підрахунком ретикулоцитарного індексу",
        },
      ],
    },
  },
  {
    id: "d6d00578-7b4f-4594-b675-24aba3ac990b",
    createdAt: "2025-02-06T13:42:52.388Z",
    slug: "analiz-krovi-na-leklityny",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 648,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Blood test for LE cells",
        },
        {
          lang: "uk",
          value: "Аналіз крові на LE-клітини",
        },
      ],
    },
  },
  {
    id: "a7908fb5-5095-48ff-a63d-394849e3914d",
    createdAt: "2025-02-06T13:42:52.985Z",
    slug: "analiz-sechi-zahalnyi-zas-mikroskopiia-osadu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 719,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Аналіз сечі загальний (ЗАС) + мікроскопія осаду",
        },
        {
          lang: "en",
          value: "General urine analysis (UA) + sediment microscopy",
        },
      ],
    },
  },
  {
    id: "6d4ca7e2-f327-4ff1-81a0-bbbf38610b30",
    createdAt: "2025-02-06T13:42:50.559Z",
    slug: "anhiotenzynperetvoriuiuchyi-ferment-apf-ace-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 412,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ангіотензинперетворюючий фермент (АПФ) / ACE \\ N **",
        },
        {
          lang: "en",
          value: "Angiotensin-converting enzyme (ACE) \\ N **",
        },
      ],
    },
  },
  {
    id: "2d3050fd-fb0b-4a95-a781-4d649d7eb6da",
    createdAt: "2025-02-06T13:42:50.130Z",
    slug: "androstendiola-hliukuronid-3alfadiol",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 363,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Androstenediol glucuronide (3-alpha-Diol)",
        },
        {
          lang: "uk",
          value: "Андростендіола глюкуронід (3-альфа-Діол)",
        },
      ],
    },
  },
  {
    id: "d799bc10-b37d-4b43-9a8f-13b164dc2c6e",
    createdAt: "2025-02-06T13:42:49.631Z",
    slug: "androstendion",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 297,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Андростендіон",
        },
        {
          lang: "en",
          value: "Androstenedione",
        },
      ],
    },
  },
  {
    id: "c167ca2b-3465-41dd-84a9-4af8ab15d040",
    createdAt: "2025-02-20T19:04:14.530Z",
    slug: "anesteziia-mistseva",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 720,
    onlinePrice: null,
    foreignId: 2697,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Анестезія місцева",
        },
        {
          lang: "en",
          value: "Local anesthesia",
        },
      ],
    },
  },
  {
    id: "be6e34b5-8046-4661-9e2b-75d8c2f91a5f",
    createdAt: "2025-02-20T19:04:15.748Z",
    slug: "anoskopiia",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 900,
    onlinePrice: null,
    foreignId: 4159,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Anoscopy",
        },
        {
          lang: "uk",
          value: "Аноскопія",
        },
      ],
    },
  },
  {
    id: "96c95472-f6bc-4592-b433-d94027594afe",
    createdAt: "2025-02-06T13:42:50.590Z",
    slug: "antydiuretychnyi-hormon-kopeptyn-adh-adh-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 416,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Antidiuretic hormone / copeptin (ADH) \\ N **",
        },
        {
          lang: "uk",
          value: "Антидіуретичний гормон / копептин (АДГ) / ADH \\ N **",
        },
      ],
    },
  },
  {
    id: "c2aaea1d-b8ae-4459-95ab-2a64608b524f",
    createdAt: "2025-02-06T13:42:49.663Z",
    slug: "antymiulleriv-hormon-amh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 301,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Anti-Müllerian hormone (AMH)",
        },
        {
          lang: "uk",
          value: "Антимюллерів гормон (АМГ)",
        },
      ],
    },
  },
  {
    id: "23115ee5-355c-44c2-a254-f8ccd14f5842",
    createdAt: "2025-02-06T13:42:52.582Z",
    slug: "antyrezusni-antytila",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 675,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Anti-Rhesus antibodies",
        },
        {
          lang: "uk",
          value: "Антирезусні антитіла",
        },
      ],
    },
  },
  {
    id: "eff96bd8-1551-422f-9d00-f147da436faa",
    createdAt: "2025-02-06T13:42:50.159Z",
    slug: "antyspermalni-antytila",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 367,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Антиспермальні антитіла",
        },
        {
          lang: "en",
          value: "Anti-sperm antibodies",
        },
      ],
    },
  },
  {
    id: "81203e07-f48e-417b-8eee-6d8576026497",
    createdAt: "2025-02-06T13:42:52.311Z",
    slug: "antystreptolizyno-aslo",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 637,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Antistreptolysin O (ASO)",
        },
        {
          lang: "uk",
          value: "Антистрептолізин-О (АСЛ-О)",
        },
      ],
    },
  },
  {
    id: "872e7826-d5ca-4dbb-8c38-c3c012746d13",
    createdAt: "2025-02-06T13:42:51.102Z",
    slug: "antytila-do-insulinovykh-retseptoriv-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 480,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Antibodies to insulin receptors \\ N",
        },
        {
          lang: "uk",
          value: "Антитіла до інсулінових рецепторів \\ N",
        },
      ],
    },
  },
  {
    id: "87dac753-1a8d-4986-b56b-3382142d9179",
    createdAt: "2025-02-06T13:42:49.403Z",
    slug: "antytila-do-peroksydazy-shchytopodibnoyi-zalozy-atpo",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 268,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Antibodies to thyroid peroxidase (TPO)",
        },
        {
          lang: "uk",
          value: "Антитіла до пероксидази щитоподібної залози (АТПО)",
        },
      ],
    },
  },
  {
    id: "8108b192-e2db-4a70-af6d-c0ca8e66c3cb",
    createdAt: "2025-02-06T13:42:49.513Z",
    slug: "antytila-do-tyreohlobulinu-atth",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 281,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Антитіла до тиреоглобуліну (АТТГ)",
        },
        {
          lang: "en",
          value: "Antibodies to thyroglobulin (TG)",
        },
      ],
    },
  },
  {
    id: "6a7253d0-0cfe-4166-b4ac-af80f49de861",
    createdAt: "2025-02-06T13:42:51.192Z",
    slug: "antytila-do-transporteru-tsynku-znt8-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 492,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Антитіла до транспортеру цинку ZnT8 \\ N",
        },
        {
          lang: "en",
          value: "Antibodies to zinc transporter ZnT8 \\ N",
        },
      ],
    },
  },
  {
    id: "2ad8a507-d7f4-406a-9fb6-9d2794432cee",
    createdAt: "2025-02-06T13:42:51.075Z",
    slug: "antytila-igg-do-insulinu-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 476,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "IgG antibodies to insulin \\ N",
        },
        {
          lang: "uk",
          value: "Антитіла IgG до інсуліну  \\ N",
        },
      ],
    },
  },
  {
    id: "aa9dbde4-5666-4d33-9838-3ef0c5f20521",
    createdAt: "2025-02-06T13:42:51.150Z",
    slug: "antytila-igg-do-ostrivtsevoho-aparatu-pidshlunkovoyi-zalozy-isa-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 486,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Антитіла IgG до острівцевого апарату підшлункової залози (ІСА) \\ N",
        },
        {
          lang: "en",
          value: "IgG antibodies to pancreatic islet cells (ICA) \\ N",
        },
      ],
    },
  },
  {
    id: "0088391b-3da6-4311-ba65-0e1eb1b023a8",
    createdAt: "2025-02-06T13:42:49.437Z",
    slug: "antytila-igg-do-retseptoriv-tyreotropnoho-hormonu-atrtth",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 272,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "IgG antibodies to TSH receptors (TRAb)",
        },
        {
          lang: "uk",
          value: "Антитіла IgG до рецепторів тиреотропного гормону (АТрТТГ)",
        },
      ],
    },
  },
  {
    id: "9ff78594-ed9a-4d3a-b8bb-a51cf4f96dfd",
    createdAt: "2025-02-06T13:42:50.966Z",
    slug: "antytila-igg-do-tyrozynfosfatazy-ta-hlutaminokysloyi-dekarboksylazy-ia2gad-screen",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 461,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "IgG antibodies to tyrosine phosphatase and glutamic acid decarboxylase (IA2-GAD Screen)",
        },
        {
          lang: "uk",
          value:
            "Антитіла IgG до тирозинфосфатази та глутамінокислої декарбоксилази (IA2-GAD Screen)",
        },
      ],
    },
  },
  {
    id: "d1ce4c36-a671-4135-a20f-3db89a8853ea",
    createdAt: "2025-02-06T13:42:52.467Z",
    slug: "antytrombin-iii-aktyvnist-at-iii-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 659,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Antithrombin III (activity) (AT III) \\ N",
        },
        {
          lang: "uk",
          value: "Антитромбін III (активність) (AT III) \\ N",
        },
      ],
    },
  },
  {
    id: "a4489e87-d1c8-48b9-9c10-947f2fa87519",
    createdAt: "2025-02-20T19:04:11.236Z",
    slug: "aparatne-vydalennia-novoutvoren-papiloma-hemanhioma-ateroma-1-novoutvorennia",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1500,
    onlinePrice: null,
    foreignId: 4073,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Hardware removal of neoplasms (papilloma, hemangioma, atheroma) (1 neoplasm)",
        },
        {
          lang: "uk",
          value:
            "Апаратне видалення новоутворень (папілома, гемангіома, атерома) (1 новоутворення)",
        },
      ],
    },
  },
  {
    id: "5d750a58-a649-459e-b9b1-bc4a6508689d",
    createdAt: "2025-02-20T19:04:13.027Z",
    slug: "aparatne-vydalennia-novoutvoren-papiloma-hemanhioma-seboreina-keratoma-do-2-mm-1-sht",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 300,
    onlinePrice: null,
    foreignId: 4258,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Апаратне видалення новоутворень (папілома, гемангіома, себорейна кератома), до 2 мм (1 шт.)",
        },
        {
          lang: "en",
          value:
            "Hardware removal of neoplasms (papilloma, hemangioma, seborrheic keratosis), up to 2 mm (1 unit)",
        },
      ],
    },
  },
  {
    id: "2956c472-357a-4259-8099-a974ddfc9577",
    createdAt: "2025-02-20T19:04:13.087Z",
    slug: "aparatne-vydalennia-novoutvoren-papiloma-hemanhioma-seboreina-keratoma-do-2-mm-bilshe-odnoho-element",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 170,
    onlinePrice: null,
    foreignId: 4260,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Апаратне видалення новоутворень (папілома, гемангіома, себорейна кератома), до 2 мм / більше одного елемента, (1 шт.)",
        },
        {
          lang: "en",
          value:
            "Hardware removal of neoplasms (papilloma, hemangioma, seborrheic keratosis), up to 2 mm / more than one element (1 unit)",
        },
      ],
    },
  },
  {
    id: "24238462-4814-4e73-afad-84ecc254587b",
    createdAt: "2025-02-20T19:04:13.119Z",
    slug: "aparatne-vydalennia-novoutvoren-papiloma-hemanhioma-seboreina-keratoma-do-5-mm-1-sht",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 700,
    onlinePrice: null,
    foreignId: 4259,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Апаратне видалення новоутворень (папілома, гемангіома, себорейна кератома), до 5 мм (1 шт.)",
        },
        {
          lang: "en",
          value:
            "Hardware removal of neoplasms (papilloma, hemangioma, seborrheic keratosis), up to 5 mm (1 unit)",
        },
      ],
    },
  },
  {
    id: "62305b53-b1ca-47ad-9115-b03872a91e46",
    createdAt: "2025-02-20T19:04:13.128Z",
    slug: "aparatne-vydalennia-novoutvoren-papiloma-hemanhioma-seboreina-keratoma-do-5-mm-bilshe-odnoho-element",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 520,
    onlinePrice: null,
    foreignId: 4261,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Hardware removal of neoplasms (papilloma, hemangioma, seborrheic keratosis), up to 5 mm / more than one element (1 unit)",
        },
        {
          lang: "uk",
          value:
            "Апаратне видалення новоутворень (папілома, гемангіома, себорейна кератома), до 5 мм / більше одного елемента (1 шт.)",
        },
      ],
    },
  },
  {
    id: "0d698aaf-4254-455e-a05b-f4c392134c02",
    createdAt: "2025-02-20T19:04:15.501Z",
    slug: "aparatne-vydalennia-trykhiazu",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 1000,
    onlinePrice: null,
    foreignId: 4078,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Апаратне видалення трихіазу",
        },
        {
          lang: "en",
          value: "Hardware removal of trichiasis",
        },
      ],
    },
  },
  {
    id: "f978f18b-1ec5-430c-892a-31b70c52fe8d",
    createdAt: "2025-02-20T19:04:11.084Z",
    slug: "aparatne-vyznachennia-refraktsiyi",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 350,
    onlinePrice: null,
    foreignId: 2599,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Hardware determination of refraction",
        },
        {
          lang: "uk",
          value: "Апаратне визначення рефракції",
        },
      ],
    },
  },
  {
    id: "519fe2a4-6317-47d3-984b-5fdd2fb2ae80",
    createdAt: "2025-02-20T19:04:15.194Z",
    slug: "aparatne-likuvannia-sukhosti-oka-1-protsedura",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 2500,
    onlinePrice: null,
    foreignId: 4070,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Hardware treatment of dry eye (1 procedure)",
        },
        {
          lang: "uk",
          value: "Апаратне лікування сухості ока (1 процедура)",
        },
      ],
    },
  },
  {
    id: "8450523a-f623-416a-8511-efcf5f0f6310",
    createdAt: "2025-02-20T19:04:15.258Z",
    slug: "aparatne-likuvannia-sukhosti-oka-kurs4-protsedury",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 8000,
    onlinePrice: null,
    foreignId: 4071,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Апаратне лікування сухості ока (курс-4 процедури)",
        },
        {
          lang: "en",
          value: "Hardware treatment of dry eye (course of 4 procedures)",
        },
      ],
    },
  },
  {
    id: "c40467cf-a7f3-4347-8e27-93fbefe797a0",
    createdAt: "2025-02-06T13:42:49.530Z",
    slug: "apendektomiia-dyvertykulektomiia-pry-zapalnykh-protsesakh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 283,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Апендектомія (дивертикулектомія) при запальних процесах",
        },
        {
          lang: "en",
          value: "Appendectomy (diverticulectomy) for inflammatory processes",
        },
      ],
    },
  },
  {
    id: "cef39212-6609-4a7b-9b5c-2f4d5974afc6",
    createdAt: "2025-02-06T13:42:49.041Z",
    slug: "apendektomiia-vidkryta",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 5000,
    onlinePrice: 0,
    foreignId: 165,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Апендектомія відкрита",
        },
        {
          lang: "en",
          value: "Open appendectomy",
        },
      ],
    },
  },
  {
    id: "269bd911-5945-4a64-9bb7-ee83bb96abf0",
    createdAt: "2025-02-20T19:04:09.517Z",
    slug: "artterapevtychna-sesiia-indyvidualna",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 1800,
    onlinePrice: null,
    foreignId: 6478,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Арт-терапевтична сесія (індивідуальна)",
        },
        {
          lang: "en",
          value: "Art therapy session (individual)",
        },
      ],
    },
  },
  {
    id: "fe74dacd-a4cd-4db5-bc3c-1d5d96593342",
    createdAt: "2025-02-06T13:42:50.313Z",
    slug: "askaridoz-ascaris-lumbricoides-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 387,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Аскарідоз (Ascaris lumBricoides), антитіла IgG",
        },
        {
          lang: "en",
          value: "Ascariasis (Ascaris lumbricoides), IgG antibodies",
        },
      ],
    },
  },
  {
    id: "fbcee18d-e72d-45fd-9cd0-2b9725fdb2e2",
    createdAt: "2025-02-06T13:42:53.406Z",
    slug: "aspartataminotransferaza-ast-ast",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 818,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Aspartate aminotransferase (AST)",
        },
        {
          lang: "uk",
          value: "Аспартатамінотрансфераза (АСТ) / AST",
        },
      ],
    },
  },
  {
    id: "ac804784-d221-40ad-9936-95b0a39c2c7a",
    createdAt: "2025-02-20T19:04:15.618Z",
    slug: "aspiratsiia-nosovoyi-porozhnyny",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 550,
    onlinePrice: null,
    foreignId: 2606,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Nasal cavity aspiration",
        },
        {
          lang: "uk",
          value: "Аспірація носової порожнини",
        },
      ],
    },
  },
  {
    id: "a25995d0-05e3-405a-86b9-768028fd59c4",
    createdAt: "2025-02-06T13:42:48.684Z",
    slug: "ast",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 30,
    onlinePrice: 0,
    foreignId: 67,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "АСТ",
        },
        {
          lang: "en",
          value: "AST",
        },
      ],
    },
  },
  {
    id: "6fcf7b61-b5fa-4216-8f8d-fd8faa6d1af6",
    createdAt: "2025-02-06T13:42:51.369Z",
    slug: "bakposiv-biolohichnykh-ridyn-sterylnykh-spynnomozkova-plevralna-synovialna-astsytychna-ridyny-navkol",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 515,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Бакпосів біологічних рідин стерильних (спинномозкова, плевральна, синовіальна, асцитична рідини, навколоплідні води, грудне молоко) - ідентифікація бактерій + чутливість до а/б (автоматизований метод)",
        },
        {
          lang: "en",
          value:
            "Bacterial culture of sterile biological fluids (cerebrospinal, pleural, synovial, ascitic fluids, amniotic fluid, breast milk) - bacterial identification + antibiotic sensitivity (automated method)",
        },
      ],
    },
  },
  {
    id: "826ade38-c35d-484f-ae3c-e62571d4374f",
    createdAt: "2025-02-06T13:42:49.093Z",
    slug: "bakposiv-vydilennia-z-rany",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 500,
    onlinePrice: 0,
    foreignId: 220,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Bacterial culture of wound discharge",
        },
        {
          lang: "uk",
          value: "Бакпосів виділення з рани",
        },
      ],
    },
  },
  {
    id: "4391b130-5b3d-416c-bb2e-8e99aeb831ed",
    createdAt: "2025-02-06T13:42:51.515Z",
    slug: "bakposiv-z-nosu-na-mikrofloru-avtomatychna-identyfikatsiia-bakterii-do-vydu-chutlyvist-do-antybiotyk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 531,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Bacterial culture from the nose for microflora. Automated bacterial identification to species. Antibiotic sensitivity by disk diffusion method (DDM)",
        },
        {
          lang: "uk",
          value:
            "Бакпосів з носу на мікрофлору. Автоматична ідентифікація бактерій до виду. Чутливість до антибіотиків ДДМ",
        },
      ],
    },
  },
  {
    id: "255813be-caa0-4f32-a3f2-a91a141fb0ac",
    createdAt: "2025-02-06T13:42:51.345Z",
    slug: "bakposiv-krovi-na-sterylnist-anaeroby-ta-aeroby-avtomatychnaidentyfikatsiia-bakterii-do-vydu-chutlyv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 512,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Blood culture for sterility (anaerobes and aerobes). Automated bacterial identification to species. Antibiotic sensitivity by DDM \\ M",
        },
        {
          lang: "uk",
          value:
            "Бакпосів крові на стерильність (анаероби та аероби). Автоматична\nідентифікація бактерій до виду. Чутливість до антибіотиків ДДМ \\\nM",
        },
      ],
    },
  },
  {
    id: "a733f8eb-16da-4804-9c83-fae00c898b59",
    createdAt: "2025-02-06T13:42:53.529Z",
    slug: "bakposiv-materialu-na-hrybkovu-floru-rid-candida-z-amh-antymikotykohramoiu-iz-eiakuliatu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 837,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Bacterial culture of material for fungal flora (Candida genus) with antifungal susceptibility testing (AMG) from ejaculate",
        },
        {
          lang: "uk",
          value:
            "Бакпосів матеріалу на грибкову флору (рід Candida) з АМГ (антимікотикограмою) із еякуляту",
        },
      ],
    },
  },
  {
    id: "34f0443e-6c58-454a-aee8-09855a99c58e",
    createdAt: "2025-02-06T13:42:53.544Z",
    slug: "bakposiv-materialu-na-hrybkovu-floru-rid-candida-z-amh-antymikotykohramoiu-iz-livoho-vukha",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 839,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Бакпосів матеріалу на грибкову флору (рід Candida) з АМГ (антимікотикограмою) із лівого вуха",
        },
        {
          lang: "en",
          value:
            "Bacterial culture of material for fungal flora (Candida genus) with antifungal susceptibility testing (AMG) from the left ear",
        },
      ],
    },
  },
  {
    id: "ec1c37a6-e451-460a-b8eb-f046b12beb16",
    createdAt: "2025-02-06T13:42:53.536Z",
    slug: "bakposiv-materialu-na-hrybkovu-floru-rid-candida-z-amh-antymikotykohramoiu-iz-pravoho-vukha",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 838,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Бакпосів матеріалу на грибкову флору (рід Candida) з АМГ (антимікотикограмою) із правого вуха",
        },
        {
          lang: "en",
          value:
            "Bacterial culture of material for fungal flora (Candida genus) with antifungal susceptibility testing (AMG) from the right ear",
        },
      ],
    },
  },
  {
    id: "c652c307-6598-4940-97d2-f8216c326f15",
    createdAt: "2025-02-06T13:42:53.515Z",
    slug: "bakposiv-materialu-na-hrybkovu-floru-rid-candida-z-amh-antymikotykohramoiu-iz-sechi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 835,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Bacterial culture of material for fungal flora (Candida genus) with antifungal susceptibility testing (AMG) from urine",
        },
        {
          lang: "uk",
          value:
            "Бакпосів матеріалу на грибкову флору (рід Candida) з АМГ (антимікотикограмою) із сечі",
        },
      ],
    },
  },
  {
    id: "4cf0da75-1f14-445f-aa7a-bf71a54c87bf",
    createdAt: "2025-02-06T13:42:53.550Z",
    slug: "bakposiv-materialu-na-hrybkovu-floru-rid-candida-z-amh-antymikotykohramoiu-iz-uretry",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 840,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Bacterial culture of material for fungal flora (Candida genus) with antifungal susceptibility testing (AMG) from the urethra",
        },
        {
          lang: "uk",
          value:
            "Бакпосів матеріалу на грибкову флору (рід Candida) з АМГ (антимікотикограмою) із уретри",
        },
      ],
    },
  },
  {
    id: "0bad4e51-fa2a-4b9e-9020-408fc7abd521",
    createdAt: "2025-02-06T13:42:53.522Z",
    slug: "bakposiv-materialu-na-hrybkovu-floru-rid-candida-z-amh-antymikotykohramoiu-mazok-z-vahiny",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 836,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Бакпосів матеріалу на грибкову флору (рід Candida) з АМГ (антимікотикограмою), мазок з вагіни",
        },
        {
          lang: "en",
          value:
            "Bacterial culture of material for fungal flora (Candida genus) with antifungal susceptibility testing (AMG), vaginal smear",
        },
      ],
    },
  },
  {
    id: "e0df4069-8590-4c1f-bf51-486cff96bd07",
    createdAt: "2025-02-06T13:42:51.414Z",
    slug: "bakposiv-rany-ta-drenazhiv-na-mikrofloru-avtomatychna-identyfikatsiia-bakterii-do-vydu-chutlyvist-do",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 519,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Bacterial culture of wound and drains for microflora. Automated bacterial identification to species. Antibiotic sensitivity by DDM",
        },
        {
          lang: "uk",
          value:
            "Бакпосів рани та дренажів на мікрофлору. Автоматична ідентифікація бактерій до виду. Чутливість до антибіотиків ДДМ",
        },
      ],
    },
  },
  {
    id: "c7bdf194-2a35-4c73-bc7a-2f9b14f03718",
    createdAt: "2025-02-06T13:42:51.482Z",
    slug: "bakposiv-sechi-na-mikrofloru-vyznachennia-stupennia-bakteriuriyi-chutlyvist-do-ab-avtomatyzovanyi-me",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 527,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Бакпосів сечі на мікрофлору (визначення ступення бактеріурії) + чутливість до а/б (автоматизований метод)",
        },
        {
          lang: "en",
          value:
            "Bacterial culture of urine for microflora (determination of bacteriuria level) + antibiotic sensitivity (automated method)",
        },
      ],
    },
  },
  {
    id: "fbd1caae-a934-498c-8dc4-d2e5da03b4c3",
    createdAt: "2025-02-06T13:42:53.557Z",
    slug: "bakteriolohichnyi-posiv-antybiotykohrama-sechi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 841,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Бактеріологічний посів + антибіотикограма сечі",
        },
        {
          lang: "en",
          value: "Bacteriological culture + antibiogram of urine",
        },
      ],
    },
  },
  {
    id: "01fea844-9b72-4094-a331-065cff0c6b78",
    createdAt: "2025-02-06T13:42:50.235Z",
    slug: "betacross-laps-ctx",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 377,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Beta-Cross Laps (β-CTx) **",
        },
        {
          lang: "uk",
          value: "Бета-Cross Laps (β-ctx) **",
        },
      ],
    },
  },
  {
    id: "595ace1e-be24-4870-b801-4fe658a0bf77",
    createdAt: "2025-02-06T13:42:53.420Z",
    slug: "bilirubin-zahalnyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 820,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Білірубін загальний",
        },
        {
          lang: "en",
          value: "Total bilirubin",
        },
      ],
    },
  },
  {
    id: "a51d19ac-c050-41dd-aea0-855ed94113af",
    createdAt: "2025-02-06T13:42:53.435Z",
    slug: "bilirubin-nepriamyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 5,
    onlinePrice: 0,
    foreignId: 822,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Indirect bilirubin",
        },
        {
          lang: "uk",
          value: "Білірубін непрямий",
        },
      ],
    },
  },
  {
    id: "5a39943b-d5d0-4595-af63-1c20b2b4d811",
    createdAt: "2025-02-06T13:42:53.427Z",
    slug: "bilirubin-priamyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 821,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Білірубін прямий",
        },
        {
          lang: "en",
          value: "Direct bilirubin",
        },
      ],
    },
  },
  {
    id: "3577faf4-a059-49b9-a671-6291d80fc358",
    createdAt: "2025-02-06T13:42:53.386Z",
    slug: "bilok-zahalnyi-syrovatka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 815,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Total protein (serum)",
        },
        {
          lang: "uk",
          value: "Білок загальний (сироватка)",
        },
      ],
    },
  },
  {
    id: "1a5e36bd-2100-424a-b91f-8b9ce7b661f1",
    createdAt: "2025-02-06T13:42:50.753Z",
    slug: "bilok3-shcho-zviazuie-insulinopodibnyi-faktor-rostu-igfbp3",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 434,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Білок-3, що зв'язує інсуліноподібний фактор росту (IGF-BP3)",
        },
        {
          lang: "en",
          value: "Insulin-like growth factor-binding protein 3 (IGF-BP3)",
        },
      ],
    },
  },
  {
    id: "d915bc89-bc9c-4bea-8fa2-6fcc09024208",
    createdAt: "2025-04-05T17:43:27.308Z",
    slug: "biomikroskopiia-ochei",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 900,
    onlinePrice: null,
    foreignId: 6714,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біомікроскопія очей",
        },
      ],
    },
  },
  {
    id: "0b1a99ee-cedf-4631-b45b-dd9ac3b8f015",
    createdAt: "2025-02-06T13:42:49.215Z",
    slug: "biopsiia-uretry",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 246,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія  уретри",
        },
        {
          lang: "en",
          value: "Urethral biopsy",
        },
      ],
    },
  },
  {
    id: "39b6ee33-adaa-47cf-b6e0-6aa094a80eca",
    createdAt: "2025-02-06T13:42:50.343Z",
    slug: "biopsiia-bronkhiv-lehen-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 391,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія бронхів, легень (з одного боку)",
        },
        {
          lang: "en",
          value: "Bronchial or lung biopsy (unilateral)",
        },
      ],
    },
  },
  {
    id: "fb29fe9e-3507-45ef-9b62-b575b62864a1",
    createdAt: "2025-02-06T13:42:50.115Z",
    slug: "biopsiia-holovnoho-i-spynnoho-mozku-ta-yikh-obolonok",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 361,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Brain and spinal cord biopsy, including their meninges",
        },
        {
          lang: "uk",
          value: "Біопсія головного і спинного мозку та їх оболонок",
        },
      ],
    },
  },
  {
    id: "60c8805c-4cf4-4b9a-a747-ae8a58c319b9",
    createdAt: "2025-02-06T13:42:49.170Z",
    slug: "biopsiia-hortani",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 240,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія гортані",
        },
        {
          lang: "en",
          value: "Laryngeal biopsy",
        },
      ],
    },
  },
  {
    id: "9e27a821-875f-430b-bb2d-91cd3bfac6c6",
    createdAt: "2025-02-06T13:42:49.132Z",
    slug: "biopsiia-endometriiu-aspiratsiinoyi-biopsiyi-vyshkribannia-polipektomiyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 235,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Endometrial biopsy (aspiration biopsy, curettage, polypectomy)",
        },
        {
          lang: "uk",
          value:
            "Біопсія ендометрію (аспіраційної біопсії, вишкрібання, поліпектомії)",
        },
      ],
    },
  },
  {
    id: "a0b2d247-476f-43c0-a494-bbec137547b0",
    createdAt: "2025-02-20T19:04:10.209Z",
    slug: "biopsiia-endometriia-paipelbiopsiia",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 1900,
    onlinePrice: null,
    foreignId: 5609,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія ендометрія (пайпель-біопсія)",
        },
        {
          lang: "en",
          value: "Endometrial biopsy (Pipelle biopsy)",
        },
      ],
    },
  },
  {
    id: "bb178af3-2270-4196-89f8-25aa17b2bbb6",
    createdAt: "2025-02-06T13:42:49.300Z",
    slug: "biopsiia-myhdalyka-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 256,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Tonsil biopsy (unilateral)",
        },
        {
          lang: "uk",
          value: "Біопсія мигдалика (з одного боку)",
        },
      ],
    },
  },
  {
    id: "ee432b94-094f-4f31-8904-99cd058cab62",
    createdAt: "2025-02-06T13:42:49.358Z",
    slug: "biopsiia-nadnyrnyka-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 263,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Adrenal gland biopsy (unilateral)",
        },
        {
          lang: "uk",
          value: "Біопсія наднирника (з одного боку)",
        },
      ],
    },
  },
  {
    id: "31df81cd-2124-4148-8a52-ed507e2b944e",
    createdAt: "2025-02-06T13:42:49.318Z",
    slug: "biopsiia-nyrky-novoutvoren-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 258,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Kidney biopsy (tumors) (unilateral)",
        },
        {
          lang: "uk",
          value: "Біопсія нирки (новоутворень) (з одного боку)",
        },
      ],
    },
  },
  {
    id: "8dd1649c-6004-41d4-ab74-3c44eacd7828",
    createdAt: "2025-02-06T13:42:51.118Z",
    slug: "biopsiia-nyrky-pry-nepukhlynnii-patolohiyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 482,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія нирки (при непухлинній патології)",
        },
        {
          lang: "en",
          value: "Kidney biopsy (non-tumor pathology)",
        },
      ],
    },
  },
  {
    id: "cc2cd089-0b91-4b3d-b7c6-6e6561a36d34",
    createdAt: "2025-02-06T13:42:52.998Z",
    slug: "biopsiia-operatsiina",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 458,
    onlinePrice: 0,
    foreignId: 721,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Surgical biopsy",
        },
        {
          lang: "uk",
          value: "Біопсія операційна",
        },
      ],
    },
  },
  {
    id: "7e805142-8cda-456e-abe1-28469dd80664",
    createdAt: "2025-02-06T13:42:51.011Z",
    slug: "biopsiia-pechinky",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 467,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Liver biopsy",
        },
        {
          lang: "uk",
          value: "Біопсія печінки",
        },
      ],
    },
  },
  {
    id: "a830f685-aa48-417c-87ef-a4defe224882",
    createdAt: "2025-02-06T13:42:50.320Z",
    slug: "biopsiia-pidshlunkovoyi-zalozy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 388,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія підшлункової залози",
        },
        {
          lang: "en",
          value: "Pancreatic biopsy",
        },
      ],
    },
  },
  {
    id: "a0ce6e38-a775-4b65-b5d4-1fe88183f513",
    createdAt: "2025-02-06T13:42:49.117Z",
    slug: "biopsiia-pikhvy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 233,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія піхви",
        },
        {
          lang: "en",
          value: "Vaginal biopsy",
        },
      ],
    },
  },
  {
    id: "194a6356-c69a-42ff-aad3-0c4349c26107",
    createdAt: "2025-02-06T13:42:50.373Z",
    slug: "biopsiia-plevry",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 395,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pleural biopsy",
        },
        {
          lang: "uk",
          value: "Біопсія плеври",
        },
      ],
    },
  },
  {
    id: "c608f7cf-9684-4ab4-a5f1-78a0f0914b62",
    createdAt: "2025-02-06T13:42:49.333Z",
    slug: "biopsiia-pukhlyny-miakykh-tkanyn",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 260,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Soft tissue tumor biopsy",
        },
        {
          lang: "uk",
          value: "Біопсія пухлини м’яких тканин",
        },
      ],
    },
  },
  {
    id: "e30839ca-aa96-4e59-9f5c-453cfdd50db4",
    createdAt: "2025-02-06T13:42:50.739Z",
    slug: "biopsiia-pukhlynnoho-utvorennia-kistky",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 432,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Bone tumor biopsy",
        },
        {
          lang: "uk",
          value: "Біопсія пухлинного утворення кістки",
        },
      ],
    },
  },
  {
    id: "b475191f-627a-40a0-b3df-e10a52b976a9",
    createdAt: "2025-02-06T13:42:49.200Z",
    slug: "biopsiia-sechovoho-mikhura",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 244,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія сечового міхура",
        },
        {
          lang: "en",
          value: "Bladder biopsy",
        },
      ],
    },
  },
  {
    id: "d83356be-525f-4744-84be-604d8f1164db",
    createdAt: "2025-02-06T13:42:49.186Z",
    slug: "biopsiia-sechovodu-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 242,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ureteral biopsy (unilateral)",
        },
        {
          lang: "uk",
          value: "Біопсія сечоводу (з одного боку)",
        },
      ],
    },
  },
  {
    id: "c8b8ced6-b3d8-4afe-9df7-0e68494c5f2d",
    createdAt: "2025-02-06T13:42:49.156Z",
    slug: "biopsiia-slyzovykh-obolonok-rotovoyi-porozhnyny-porozhnyny-ta-pazukh-nosa",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 238,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Biopsy of the mucous membranes of the oral cavity, nasal cavity, and sinuses",
        },
        {
          lang: "uk",
          value:
            "Біопсія слизових оболонок ротової порожнини, порожнини та пазух носа",
        },
      ],
    },
  },
  {
    id: "739f2629-6587-4cca-9d0f-50531ff9a088",
    createdAt: "2025-02-06T13:42:49.382Z",
    slug: "biopsiia-slynnoyi-zalozy-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 266,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія слинної залози (з одного боку)",
        },
        {
          lang: "en",
          value: "Salivary gland biopsy (unilateral)",
        },
      ],
    },
  },
  {
    id: "c908416c-4337-4000-a3d7-a86672506e8d",
    createdAt: "2025-02-06T13:42:50.200Z",
    slug: "biopsiia-stravokhodu-do-3-bioptativ-vkliuchno",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 372,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Esophageal biopsy (up to 3 samples included)",
        },
        {
          lang: "uk",
          value: "Біопсія стравоходу (до 3 біоптатів включно)",
        },
      ],
    },
  },
  {
    id: "567acd83-da53-4c32-be9d-273c935b5347",
    createdAt: "2025-02-06T13:42:49.279Z",
    slug: "biopsiia-utvorennia-cherevnoyi-porozhnyny-pozaocherevynnoho-prostoru",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 254,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Biopsy of abdominal cavity/retroperitoneal space lesion",
        },
        {
          lang: "uk",
          value:
            "Біопсія утворення черевної порожнини/ позаочеревинного простору",
        },
      ],
    },
  },
  {
    id: "98494d07-5ad3-4eb9-8e20-515b544482d7",
    createdAt: "2025-02-06T13:42:49.245Z",
    slug: "biopsiia-utvoren-povik-koniunktyvy-i-slozovykh-zaloz",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 250,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія утворень повік, кон’юнктиви і сльозових залоз",
        },
        {
          lang: "en",
          value: "Biopsy of eyelid, conjunctiva, and lacrimal gland lesions",
        },
      ],
    },
  },
  {
    id: "05285fc6-d58f-4b84-94d5-8b0616665939",
    createdAt: "2025-02-06T13:42:48.618Z",
    slug: "biopsiia-utvoren-shkiry",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 50,
    onlinePrice: 0,
    foreignId: 59,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Biopsy of skin lesions",
        },
        {
          lang: "uk",
          value: "Біопсія утворень шкіри",
        },
      ],
    },
  },
  {
    id: "879d49a6-7176-4dcd-a13c-6296cdae2c61",
    createdAt: "2025-02-06T13:42:49.101Z",
    slug: "biopsiia-shyiky-matky-ne-ekstsyziini",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 231,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cervical biopsy (non-excisional)",
        },
        {
          lang: "uk",
          value: "Біопсія шийки матки (не ексцизійні)",
        },
      ],
    },
  },
  {
    id: "91f144a8-1ad3-4845-9c49-f61e4a885c61",
    createdAt: "2025-02-20T19:04:15.275Z",
    slug: "biopsiia-shyiky-matky-protsedura",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 2100,
    onlinePrice: null,
    foreignId: 2573,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія шийки матки (процедура)",
        },
        {
          lang: "en",
          value: "Cervical biopsy (procedure)",
        },
      ],
    },
  },
  {
    id: "ae16daac-1cca-42cd-902a-d799a5755748",
    createdAt: "2025-02-06T13:42:52.992Z",
    slug: "biopsiia-shkiry-pry-buloznykh-dermatytakh-ta-autoimunnykh-urazhenniakh-shkiry-pif",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 720,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Біопсія шкіри при бульозних дерматитах та аутоімунних ураженнях шкіри (ПІФ)",
        },
        {
          lang: "en",
          value:
            "Skin biopsy for bullous dermatitis and autoimmune skin disorders (DIF)",
        },
      ],
    },
  },
  {
    id: "5bccf768-73fd-48af-8052-9174f6816105",
    createdAt: "2025-02-06T13:42:50.297Z",
    slug: "biopsiia-shlunka-do-5-bioptativ-vkliuchno",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 385,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія шлунка (до 5 біоптатів включно)",
        },
        {
          lang: "en",
          value: "Gastric biopsy (up to 5 samples included)",
        },
      ],
    },
  },
  {
    id: "55566fdc-6f0f-40ec-b211-578e0213bb5c",
    createdAt: "2025-02-06T13:42:51.283Z",
    slug: "biopsiia-shlunka-z-otsinkoiu-za-sidneiskoiu-systemoiu-systemamy-olga-ta-olgim",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 504,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Біопсія шлунка з оцінкою за Сіднейською системою, системами OLGA та OLGIM",
        },
        {
          lang: "en",
          value:
            "Gastric biopsy with evaluation according to the Sydney System, OLGA, and OLGIM systems",
        },
      ],
    },
  },
  {
    id: "9b66c583-31fe-4e1b-9ee8-4bdf1f1455ff",
    createdAt: "2025-02-06T13:42:51.089Z",
    slug: "biopsiia-iaiechka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 478,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Testicular biopsy",
        },
        {
          lang: "uk",
          value: "Біопсія яєчка",
        },
      ],
    },
  },
  {
    id: "763ab5f0-ebf6-43fd-891f-9231344d0b51",
    createdAt: "2025-02-06T13:42:50.483Z",
    slug: "biopsiia-klynopodibna-rezektsiia-iaiechnyku-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 402,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біопсія/ клиноподібна резекція яєчнику (з одного боку)",
        },
        {
          lang: "en",
          value: "Ovarian biopsy/wedge resection (unilateral)",
        },
      ],
    },
  },
  {
    id: "007c9afd-8d69-4ea8-84bb-d5f46b6e3370",
    createdAt: "2025-02-20T19:04:15.522Z",
    slug: "biofizychnyi-profil-plodu",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1600,
    onlinePrice: null,
    foreignId: 2591,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Біофізичний профіль плоду",
        },
        {
          lang: "en",
          value: "Fetal biophysical profile",
        },
      ],
    },
  },
  {
    id: "da926d8a-03f6-4e27-836f-209f473ad032",
    createdAt: "2025-02-20T19:04:14.459Z",
    slug: "blokada",
    sectionId: "1f68f141-a055-4e78-b4eb-b1807ce0113c",
    price: 690,
    onlinePrice: null,
    foreignId: 2705,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Nerve block",
        },
        {
          lang: "uk",
          value: "Блокада",
        },
      ],
    },
  },
  {
    id: "5f859d2b-46f8-4899-826d-4581f3cf3fe4",
    createdAt: "2025-02-06T13:42:50.079Z",
    slug: "borelioz-borrelia-burgdoferi-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 356,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Borreliosis (Borrelia burgdorferi), IgG antibodies",
        },
        {
          lang: "uk",
          value: "Бореліоз (Borrelia Burgdoferi), антитіла IgG",
        },
      ],
    },
  },
  {
    id: "2b9cf87e-e567-4a3c-8752-3b70505b2dc2",
    createdAt: "2025-02-06T13:42:50.122Z",
    slug: "borelioz-borrelia-burgdoferi-antytila-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 362,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Borreliosis (Borrelia burgdorferi), IgM antibodies",
        },
        {
          lang: "uk",
          value: "Бореліоз (Borrelia Burgdoferi), антитіла IgM",
        },
      ],
    },
  },
  {
    id: "900550e2-1ba4-4a5f-abb9-255622cb84fb",
    createdAt: "2025-02-20T19:04:13.079Z",
    slug: "vaktsynatsiia-beksero-gsk-italiia-meninhokokova-infektsiia-serohrupy-v",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 5900,
    onlinePrice: null,
    foreignId: 4067,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "BEXSERO" (GSK, Italy) (meningococcal infection serogroup B)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "БЕКСЕРО" (GSK, Італія) (менінгококова інфекція серогрупи В)',
        },
      ],
    },
  },
  {
    id: "1bacca4f-cf1b-4e3b-ac97-4906ffcc273b",
    createdAt: "2025-02-20T19:04:15.813Z",
    slug: "vaktsynatsiia-bustrykspolio-gsk-belhiia-dyfteriiaatseliuliarnyi-kashliuk-pravets-poliomiielit",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 1900,
    onlinePrice: null,
    foreignId: 2506,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "BOOSTRIX-POLIO" (GSK, Belgium) (diphtheria, acellular pertussis, tetanus, poliomyelitis)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "БУСТРИКС-ПОЛІО" (GSK, Бельгія) (дифтерія,ацелюлярний кашлюк, правець, поліомієліт)',
        },
      ],
    },
  },
  {
    id: "3c5fcc34-25f4-4b99-aee1-dab137d4539a",
    createdAt: "2025-02-20T19:04:15.875Z",
    slug: "vaktsynatsiia-bustryks-gsk-belhiia-dyfteriia-atseliuliarnyi-kashliukpravets",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 1500,
    onlinePrice: null,
    foreignId: 2505,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            'Вакцинація "БУСТРИКС" (GSK, Бельгія)  (дифтерія, ацелюлярний кашлюк,правець)',
        },
        {
          lang: "en",
          value:
            'Vaccination "BOOSTRIX" (GSK, Belgium) (diphtheria, acellular pertussis, tetanus)',
        },
      ],
    },
  },
  {
    id: "00f359cb-4b05-4635-be01-0006288bd4d7",
    createdAt: "2025-02-26T14:23:26.476Z",
    slug: "vaktsynatsiia-vaksihryp-tetra-aventispasteur-frantsiia-profilaktyka-hrypu-inaktyvovana-ridka-1",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 669,
    onlinePrice: null,
    foreignId: 6302,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "VAXIGRIP TETRA" (Aventis Pasteur, France) (influenza prevention, inactivated liquid)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "ВАКСІГРИП ТЕТРА" AventisPasteur, Франція (профілактика грипу, інактивована рідка)',
        },
      ],
    },
  },
  {
    id: "3e2900ee-9d30-4caf-b1e6-6d5c236052b7",
    createdAt: "2025-02-20T19:04:13.062Z",
    slug: "vaktsynatsiia-vaksihryp-tetra-aventispasteur-frantsiia-profilaktyka-hrypu-inaktyvovana-ridka",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 750,
    onlinePrice: null,
    foreignId: 2507,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "VAXIGRIP TETRA" Aventis Pasteur, France (influenza prevention, inactivated liquid)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "ВАКСІГРИП ТЕТРА" AventisPasteur, Франція (профілактика грипу, інактивована рідка)',
        },
      ],
    },
  },
  {
    id: "b9abfffc-e630-4936-8e4a-0c9465374f17",
    createdAt: "2025-02-20T19:04:15.768Z",
    slug: "vaktsynatsiia-varylryks-gsk-belhiia-vitriana-vispa",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2700,
    onlinePrice: null,
    foreignId: 2508,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination "VARILRIX" (GSK, Belgium) (varicella)',
        },
        {
          lang: "uk",
          value: 'Вакцинація "ВАРИЛРИКС" (GSK, Бельгія) (вітряна віспа)',
        },
      ],
    },
  },
  {
    id: "ee33c450-8441-401f-855c-17326f3df837",
    createdAt: "2025-02-20T19:04:15.806Z",
    slug: "vaktsynatsiia-heksaksym-sanofipaster-frantsiia-dyfteriiapravetskashliuk-poliomiielit-hepatyta-v-i-he",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2450,
    onlinePrice: null,
    foreignId: 2509,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "HEXAXIM" (Sanofi Pasteur, France) (diphtheria, tetanus, pertussis, poliomyelitis, hepatitis B, and Haemophilus influenzae)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "ГЕКСАКСИМ" (SanofiPaster, Франція) (дифтерія,правець,кашлюк, поліомієліт, гепатита В і гемофільна інфекція)',
        },
      ],
    },
  },
  {
    id: "3c138bb1-eb8a-4478-b298-e51e2731f1fe",
    createdAt: "2025-02-20T19:04:13.239Z",
    slug: "vaktsynatsiia-dzhisi-fliu-koreia-hryp-rozshcheplenyi-virion",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 700,
    onlinePrice: null,
    foreignId: 2510,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination "GC FLU" (Korea) (influenza, split virion)',
        },
        {
          lang: "uk",
          value: 'Вакцинація "ДЖІСІ ФЛЮ" (Корея) ( грип, розщеплений віріон)',
        },
      ],
    },
  },
  {
    id: "c437eb01-040f-4cc7-bb39-9f6c7e141855",
    createdAt: "2025-02-20T19:04:15.820Z",
    slug: "vaktsynatsiia-endzheryksv-gsk-belhiia-hepatyt-v-ditiam-do-19-rokiv",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 620,
    onlinePrice: null,
    foreignId: 2511,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            'Вакцинація "ЕНДЖЕРИКС-В" (GSK, Бельгія) (гепатит В) дітям до 19 років',
        },
        {
          lang: "en",
          value:
            'Vaccination "ENGERIX-B" (GSK, Belgium) (hepatitis B) for children under 19 years',
        },
      ],
    },
  },
  {
    id: "264a2289-82db-4ab7-8da2-b82dc6fffcd2",
    createdAt: "2025-02-20T19:04:15.775Z",
    slug: "vaktsynatsiia-endzheryksv-gsk-belhiia-hepatyt-v-dlia-doroslykh",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 750,
    onlinePrice: null,
    foreignId: 2512,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            'Вакцинація "ЕНДЖЕРИКС-В" (GSK, Бельгія) (гепатит В) для дорослих',
        },
        {
          lang: "en",
          value:
            'Vaccination "ENGERIX-B" (GSK, Belgium) (hepatitis B) for adults',
        },
      ],
    },
  },
  {
    id: "130e5113-3753-416b-a2cf-4b10d4377f21",
    createdAt: "2025-02-20T19:04:15.835Z",
    slug: "vaktsynatsiia-immovaks-polio-aventispaster-frantsiia-poliomiielit",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 520,
    onlinePrice: null,
    foreignId: 2513,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "IMOVAX POLIO" (Aventis Pasteur, France) (poliomyelitis)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "ІММОВАКС ПОЛІО", AventisPaster, Франція (поліомієліт)',
        },
      ],
    },
  },
  {
    id: "2766aa07-5015-49c2-82f2-115605a8c81a",
    createdAt: "2025-02-20T19:04:15.828Z",
    slug: "vaktsynatsiia-infanryks-ipv-gsk-belhiia-dyfteriia-kashliuk-pravets-poliomiielit",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2400,
    onlinePrice: null,
    foreignId: 2516,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "INFANRIX-IPV" (GSK, Belgium) (diphtheria, pertussis, tetanus, poliomyelitis)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "ІНФАНРИКС -ІПВ" (GSK, Бельгія) (дифтерія, кашлюк, правець, поліомієліт)',
        },
      ],
    },
  },
  {
    id: "6df25e94-7578-4470-96e0-5adffb2a4e86",
    createdAt: "2025-02-20T19:04:15.798Z",
    slug: "vaktsynatsiia-infanryks-heksa-gsk-belhiia-dyfteriia-kashliuk-pravets-poliomiielit-hepatyt-v-hemofiln",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2900,
    onlinePrice: null,
    foreignId: 2515,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "INFANRIX HEXA" (GSK, Belgium) (diphtheria, pertussis, tetanus, poliomyelitis, hepatitis B, Haemophilus influenzae)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "ІНФАНРИКС ГЕКСА" (GSK, Бельгія)  (дифтерія, кашлюк, правець, поліомієліт, гепатит В, гемофільна паличка)',
        },
      ],
    },
  },
  {
    id: "9a4d22fd-b72a-4301-bdef-3115011f6699",
    createdAt: "2025-02-20T19:04:13.330Z",
    slug: "vaktsynatsiia-infanryks-ipv-khib-gsk-belhiia-dyfteriiapravetskashliuk-atseliuliarnyi-komponentpoliom",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2450,
    onlinePrice: null,
    foreignId: 2517,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            'Вакцинація "ІНФАНРИКС ІПВ Хіб" (GSK, Бельгія) (дифтерія,правець,кашлюк (ацелюлярний компонент),поліомієліт, гемофільна паличка типу B)',
        },
        {
          lang: "en",
          value:
            'Vaccination "INFANRIX IPV Hib" (GSK, Belgium) (diphtheria, tetanus, pertussis (acellular component), poliomyelitis, Haemophilus influenzae type B)',
        },
      ],
    },
  },
  {
    id: "b74c76d1-1b39-46d3-b105-f60f6244e9a9",
    createdAt: "2025-02-20T19:04:15.790Z",
    slug: "vaktsynatsiia-infanryks-gsk-belhiia-dyfteriia-atseliuliarnyi-kashliuk-pravets",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 1310,
    onlinePrice: null,
    foreignId: 2514,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            'Вакцинація "ІНФАНРИКС" (GSK, Бельгія) (дифтерія, ацелюлярний кашлюк, правець)',
        },
        {
          lang: "en",
          value:
            'Vaccination "INFANRIX" (GSK, Belgium) (diphtheria, acellular pertussis, tetanus)',
        },
      ],
    },
  },
  {
    id: "cffdd683-deb8-4223-863b-30f3e5713b03",
    createdAt: "2025-02-20T19:04:11.324Z",
    slug: "vaktsynatsiia-menaktra-aventispaster-frantsiia-meninhokok-a-s-y-w135",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2540,
    onlinePrice: null,
    foreignId: 2518,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "MENACTRA" (Aventis Pasteur, France) (meningococcus A, C, Y, W-135)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "МЕНАКТРА" (AventisPaster, Франція) ( менінгокок А, С, Y, W-135)',
        },
      ],
    },
  },
  {
    id: "7a24b0d7-b755-4e66-8e69-91b3ee8f32fc",
    createdAt: "2025-02-20T19:04:15.119Z",
    slug: "vaktsynatsiia-nimenryks-pfizer-belhiia-meninhokokova-infektsiia",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2900,
    onlinePrice: null,
    foreignId: 2519,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "NIMENRIX" (Pfizer, Belgium) (meningococcal infection)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "НІМЕНРИКС" (Pfizer, Бельгія) (менінгококова інфекція)',
        },
      ],
    },
  },
  {
    id: "5a553de2-2e9f-4a9c-a3b3-1920d717f657",
    createdAt: "2025-02-20T19:04:11.687Z",
    slug: "vaktsynatsiia-pentaksym-aventispaster-frantsiia-dyfteriia-kashliuk-pravets-poliomiielit-hemofilna-pa",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2120,
    onlinePrice: null,
    foreignId: 2533,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "PENTAXIM" (Aventis Pasteur, France) (diphtheria, pertussis, tetanus, poliomyelitis, Haemophilus influenzae)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "ПЕНТАКСИМ" (AventisPaster, Франція) (дифтерія, кашлюк, правець, поліомієліт, гемофільна паличка)',
        },
      ],
    },
  },
  {
    id: "b17bd375-def2-491b-bffe-c0bf7621d752",
    createdAt: "2025-02-20T19:04:15.783Z",
    slug: "vaktsynatsiia-prevenar-13-pfizer-velyka-brytaniia-pnevmokokova-infektsiia",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 4300,
    onlinePrice: null,
    foreignId: 2520,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            'Вакцинація "ПРЕВЕНАР 13" (Pfizer, Велика Британія) (пневмококова інфекція)',
        },
        {
          lang: "en",
          value:
            'Vaccination "PREVENAR 13" (Pfizer, United Kingdom) (pneumococcal infection)',
        },
      ],
    },
  },
  {
    id: "91b0ec40-968b-44d6-8042-a2237c353a49",
    createdAt: "2025-02-20T19:04:13.155Z",
    slug: "vaktsynatsiia-prioryks-gsk-belhiia-kir-krasnukha-parotyt",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 1350,
    onlinePrice: null,
    foreignId: 2521,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            'Вакцинація "ПРІОРИКС" (GSK, Бельгія) (кір, краснуха, паротит)',
        },
        {
          lang: "en",
          value:
            'Vaccination "PRIORIX" (GSK, Belgium) (measles, rubella, mumps)',
        },
      ],
    },
  },
  {
    id: "6e7fa27d-5a02-4cf2-9cdf-4717562e299c",
    createdAt: "2025-02-20T19:04:13.246Z",
    slug: "vaktsynatsiia-rotaryks-gsk-belhiia-rotavirusna-infektsiia",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 1750,
    onlinePrice: null,
    foreignId: 2522,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Вакцинація "РОТАРИКС" (GSK, Бельгія) (ротавірусна інфекція)',
        },
        {
          lang: "en",
          value: 'Vaccination "ROTARIX" (GSK, Belgium) (rotavirus infection)',
        },
      ],
    },
  },
  {
    id: "dd3220f4-52ae-43e9-8693-617f1c177642",
    createdAt: "2025-02-20T19:04:13.302Z",
    slug: "vaktsynatsiia-sinfloryks-gsk-belhiia-pnevmokok10-hemofilna-palychka",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2500,
    onlinePrice: null,
    foreignId: 2523,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "SYNFLORIX" (GSK, Belgium) (pneumococcus-10, Haemophilus influenzae)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "СІНФЛОРИКС" (GSK, Бельгія)  (пневмокок-10, гемофільна паличка)',
        },
      ],
    },
  },
  {
    id: "4e12aaaf-5432-428e-97c1-a8d9377a6dca",
    createdAt: "2025-02-20T19:04:11.562Z",
    slug: "vaktsynatsiia-stamaryl-sanofipaster-frantsiia-profilaktyka-zhovtoyi-lykhomanky",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 1550,
    onlinePrice: null,
    foreignId: 2524,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            'Вакцинація "СТАМАРИЛ" (SanofiPaster, Франція) (профілактика жовтої лихоманки)',
        },
        {
          lang: "en",
          value:
            'Vaccination "STAMARIL" (Sanofi Pasteur, France) (yellow fever prevention)',
        },
      ],
    },
  },
  {
    id: "6e93c316-82b0-4f85-8207-78081501295e",
    createdAt: "2025-02-20T19:04:13.320Z",
    slug: "vaktsynatsiia-tvinryks-gsk-belhiia-hepatyt-a-v",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 2250,
    onlinePrice: null,
    foreignId: 2525,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination "TWINRIX" (GSK, Belgium) (hepatitis A + B)',
        },
        {
          lang: "uk",
          value: 'Вакцинація "ТВІНРИКС" (GSK, Бельгія) (гепатит А + В)',
        },
      ],
    },
  },
  {
    id: "78c1c580-43d6-4eed-9ed1-a7d1493a5e57",
    createdAt: "2025-02-20T19:04:15.884Z",
    slug: "vaktsynatsiia-tetraksym-sanofipaster-frantsiia-dyfteriia-kashliuk-pravets-poliomiielit",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 1260,
    onlinePrice: null,
    foreignId: 2526,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            'Вакцинація "ТЕТРАКСИМ" (SanofiPaster, Франція) (дифтерія, кашлюк, правець, поліомієліт)',
        },
        {
          lang: "en",
          value:
            'Vaccination "TETRAXIM" (Sanofi Pasteur, France) (diphtheria, pertussis, tetanus, poliomyelitis)',
        },
      ],
    },
  },
  {
    id: "4f4a6166-346a-4ab0-aa87-e7d059eff056",
    createdAt: "2025-02-20T19:04:15.866Z",
    slug: "vaktsynatsiia-khavryks-gsk-belhiia-hepatyt-a-ditiam",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 1400,
    onlinePrice: null,
    foreignId: 2527,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "HAVRIX" (GSK, Belgium) (hepatitis A) for children',
        },
        {
          lang: "uk",
          value: 'Вакцинація "ХАВРИКС" (GSK, Бельгія) (гепатит А) дітям',
        },
      ],
    },
  },
  {
    id: "afc42d1e-23e0-49a7-b97c-7e11841836db",
    createdAt: "2025-02-20T19:04:13.070Z",
    slug: "vaktsynatsiia-khavryks-gsk-belhiia-hepatyt-a-doroslym",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 1900,
    onlinePrice: null,
    foreignId: 2528,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Вакцинація "ХАВРИКС" (GSK, Бельгія) (гепатит А) дорослим',
        },
        {
          lang: "en",
          value: 'Vaccination "HAVRIX" (GSK, Belgium) (hepatitis A) for adults',
        },
      ],
    },
  },
  {
    id: "3223f3b6-c826-424a-8da5-a18238729297",
    createdAt: "2025-02-20T19:04:15.849Z",
    slug: "vaktsynatsiia-khiberyks-gsk-belhiia-hemofilna-palychka",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 735,
    onlinePrice: null,
    foreignId: 2529,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "HIBERIX" (GSK, Belgium) (Haemophilus influenzae)',
        },
        {
          lang: "uk",
          value: 'Вакцинація "ХІБЕРИКС" (GSK, Бельгія)  (гемофільна паличка)',
        },
      ],
    },
  },
  {
    id: "85a22bba-a8ce-448b-af25-472639f997d8",
    createdAt: "2025-02-20T19:04:15.842Z",
    slug: "vaktsynatsiia-tservariks-gsk-belhiia-papiloma-virus-16-18-typ",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 3000,
    onlinePrice: null,
    foreignId: 2530,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Vaccination "CERVARIX" (GSK, Belgium) (human papillomavirus types 16, 18)',
        },
        {
          lang: "uk",
          value:
            'Вакцинація "ЦЕРВАРІКС" (GSK, Бельгія)  (папілома вірус 16, 18 тип)',
        },
      ],
    },
  },
  {
    id: "ff7af6fd-4734-4460-9784-d0540bb26fec",
    createdAt: "2025-02-20T19:04:11.678Z",
    slug: "vaktsynatsiia-adsm-dyfteriia-pravets-dlia-doroslykh",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 200,
    onlinePrice: null,
    foreignId: 2532,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вакцинація АДС-М (дифтерія, правец) для дорослих",
        },
        {
          lang: "en",
          value: "Vaccination ADS-M (diphtheria, tetanus) for adults",
        },
      ],
    },
  },
  {
    id: "fcfac5bf-a248-4dc3-ad1e-4f2dedbebda0",
    createdAt: "2025-03-17T15:06:27.851Z",
    slug: "vaktsynatsiia-dlia-profilaktyky-papilomovirusnoyi-infektsiyi-hardasyl-9",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 7500,
    onlinePrice: null,
    foreignId: 6700,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Вакцинація для профілактики папіломовірусної інфекції (ГАРДАСИЛ 9)",
        },
        {
          lang: "en",
          value:
            "Vaccination for the prevention of human papillomavirus infection (GARDASIL 9)",
        },
      ],
    },
  },
  {
    id: "559be92e-d5a4-49f9-80c2-dfa18dc64ede",
    createdAt: "2025-02-20T19:04:14.610Z",
    slug: "vaktsynatsiia-dlia-profilaktyky-papilomovirusnoyi-infektsiyi-hardasyl",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 6000,
    onlinePrice: null,
    foreignId: 4191,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Vaccination for the prevention of human papillomavirus infection (GARDASIL)",
        },
        {
          lang: "uk",
          value:
            "Вакцинація для профілактики папіломовірусної інфекції (ГАРДАСИЛ)",
        },
      ],
    },
  },
  {
    id: "5cf43829-1187-4f94-aaf0-426412753f95",
    createdAt: "2025-02-20T19:04:10.078Z",
    slug: "vvedennia-vnutrishnomatkovoho-kontratseptyvu",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 5100,
    onlinePrice: null,
    foreignId: 4328,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Введення внутрішньоматкового контрацептиву",
        },
        {
          lang: "en",
          value: "Insertion of an intrauterine contraceptive device",
        },
      ],
    },
  },
  {
    id: "ae8d9fd1-f6fd-4d61-89f9-9080f2f35ce0",
    createdAt: "2025-02-20T19:04:10.650Z",
    slug: "vvedennia-vnutrishnomatkovoho-kontratseptyvu-bez-vartosti-vms",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 1600,
    onlinePrice: null,
    foreignId: 2576,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Insertion of an intrauterine contraceptive device (excluding the cost of the IUD)",
        },
        {
          lang: "uk",
          value:
            "Введення внутрішньоматкового контрацептиву (без вартості ВМС)",
        },
      ],
    },
  },
  {
    id: "e93b42dc-7442-40c2-9fcd-f8a1dbc8677e",
    createdAt: "2025-02-26T14:23:23.823Z",
    slug: "vvedennia-likarskykh-zasobiv-emulsiia-hidrokortyzonu-u-nyzhni-nosovi-rakovyny",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 900,
    onlinePrice: null,
    foreignId: 6579,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Введення лікарських засобів (емульсія гідрокортизону) у нижні носові раковини",
        },
        {
          lang: "en",
          value:
            "Administration of medication (hydrocortisone emulsion) into the inferior nasal turbinates",
        },
      ],
    },
  },
  {
    id: "ce92b672-2024-4833-bcff-5a035b953439",
    createdAt: "2025-02-20T19:04:10.614Z",
    slug: "vvedennia-pikhvovoho-tamponu",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 900,
    onlinePrice: null,
    foreignId: 2575,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Insertion of a vaginal tampon",
        },
        {
          lang: "uk",
          value: "Введення піхвового тампону",
        },
      ],
    },
  },
  {
    id: "91e2a5d8-9c4a-4d6e-84cd-9252dfa8e353",
    createdAt: "2025-02-06T13:42:48.570Z",
    slug: "vziattia-krovi",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 30,
    onlinePrice: 0,
    foreignId: 54,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Blood collection",
        },
        {
          lang: "uk",
          value: "Взяття крові",
        },
      ],
    },
  },
  {
    id: "b67b65fe-98fe-47aa-9bc3-6c3fce88dae9",
    createdAt: "2025-02-06T13:42:48.610Z",
    slug: "vziattia-materialu-dlia-tsytolohichnoho-doslidzhennia-z-tservikalnoho-kanalu",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 50,
    onlinePrice: 0,
    foreignId: 58,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Collection of material for cytological examination from the cervical canal",
        },
        {
          lang: "uk",
          value:
            "Взяття матеріалу для цитологічного дослідження з цервікального каналу",
        },
      ],
    },
  },
  {
    id: "223a7d2a-2574-4e99-a2b3-837b0e67ea4f",
    createdAt: "2025-02-06T13:42:48.601Z",
    slug: "vziattia-uh-ziskobu",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 50,
    onlinePrice: 0,
    foreignId: 57,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Взяття у/г зіскобу",
        },
        {
          lang: "en",
          value: "Collection of a urogenital scraping",
        },
      ],
    },
  },
  {
    id: "991fdb38-9d6b-485b-a8a4-a65e11c5b010",
    createdAt: "2025-02-06T13:42:48.591Z",
    slug: "vziattia-uh-mazka",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 50,
    onlinePrice: 0,
    foreignId: 56,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Взяття у/г мазка",
        },
        {
          lang: "en",
          value: "Collection of a urogenital smear",
        },
      ],
    },
  },
  {
    id: "a1f77e10-b09d-4461-bc87-8cccb58747c6",
    createdAt: "2025-02-06T13:42:49.575Z",
    slug: "vybir-foto-za-zapytom-kliienta-1-foto-z-pidrysunkovym-pidpysom",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 290,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Selection of a photo based on the client's request (1 photo with a caption)",
        },
        {
          lang: "uk",
          value:
            "Вибір фото за запитом клієнта (1 фото з підрисунковим підписом)",
        },
      ],
    },
  },
  {
    id: "8d8081cc-81b6-4449-b2ed-20de2ec79235",
    createdAt: "2025-02-06T13:42:49.546Z",
    slug: "vyhotovlennia-tsyfrovoho-mikropreparatu-z-mozhlyvistiu-fotodokumentatsiyi-1-histolohichne-skeltse",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 286,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Виготовлення цифрового мікропрепарату з можливістю фотодокументації (1 гістологічне скельце)",
        },
        {
          lang: "en",
          value:
            "Preparation of a digital micropreparation with the possibility of photodocumentation (1 histological slide)",
        },
      ],
    },
  },
  {
    id: "a565bbb0-9791-4b39-90ed-00f21de8f031",
    createdAt: "2025-02-06T13:42:50.909Z",
    slug: "vydalennia-apendyksa-pry-pukhlynnykh-protsesakh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 453,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення апендикса при пухлинних процесах",
        },
        {
          lang: "en",
          value: "Appendix removal for tumor processes",
        },
      ],
    },
  },
  {
    id: "3e0ccf6d-2c34-49f5-b2a0-e112086d7441",
    createdAt: "2025-02-20T19:04:15.331Z",
    slug: "vydalennia-vnutrishnoatkovoho-kontratseptyvu",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 1300,
    onlinePrice: null,
    foreignId: 2577,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Removal of an intrauterine contraceptive device",
        },
        {
          lang: "uk",
          value: "Видалення внутрішньоаткового контрацептиву",
        },
      ],
    },
  },
  {
    id: "b253cac8-3312-4875-8dd8-67689d3f91bd",
    createdAt: "2025-02-06T13:42:49.678Z",
    slug: "vydalennia-hemoroyidalnykh-vuzliv-analnykh-trishchyn",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 303,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення гемороїдальних вузлів/ анальних тріщин",
        },
        {
          lang: "en",
          value: "Removal of hemorrhoidal nodes/anal fissures",
        },
      ],
    },
  },
  {
    id: "fb5b138b-fffd-47a3-a710-00e6bc659052",
    createdAt: "2025-02-06T13:42:49.693Z",
    slug: "vydalennia-epulidu-odontohennoyi-kisty-travmatychnoyi-fibromy-slyzovoyi-obolonky-porozhnyny-rota",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 305,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Видалення епуліду/ одонтогенної кісти/ травматичної фіброми слизової оболонки порожнини рота",
        },
        {
          lang: "en",
          value:
            "Removal of an epulis/odontogenic cyst/traumatic fibroma of the oral mucosa",
        },
      ],
    },
  },
  {
    id: "b66c30e9-0810-4b7e-90a5-6e003d7f76c8",
    createdAt: "2025-02-06T13:42:49.553Z",
    slug: "vydalennia-zhovchnoho-mikhura-pry-zapalnykh-protsesakh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 287,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Gallbladder removal for inflammatory processes",
        },
        {
          lang: "uk",
          value: "Видалення жовчного міхура при запальних процесах",
        },
      ],
    },
  },
  {
    id: "8a145be1-49f3-4b3e-83ba-2e1422977f60",
    createdAt: "2025-02-06T13:42:51.522Z",
    slug: "vydalennia-zhovchnoho-mikhura-pry-pukhlynnykh-protsesakh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 532,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення жовчного міхура при пухлинних процесах",
        },
        {
          lang: "en",
          value: "Gallbladder removal for tumor processes",
        },
      ],
    },
  },
  {
    id: "05016c1c-01fd-4a5a-9ad2-840a33a3c866",
    createdAt: "2025-02-06T13:42:49.760Z",
    slug: "vydalennia-kisty-bartolinovoyi-zalozy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 314,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення кісти бартолінової залози",
        },
        {
          lang: "en",
          value: "Removal of a Bartholin gland cyst",
        },
      ],
    },
  },
  {
    id: "d30b3793-2950-422c-b6e0-4e9a45b7b1eb",
    createdAt: "2025-02-20T19:04:11.094Z",
    slug: "vydalennia-kisty-pidnebinnoyi-myhdalyny-iz-znebolennniam",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 4200,
    onlinePrice: null,
    foreignId: 2600,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Removal of a palatine tonsil cyst (with anesthesia)",
        },
        {
          lang: "uk",
          value: "Видалення кісти піднебінної мигдалини (зі знеболеннням)",
        },
      ],
    },
  },
  {
    id: "2a0b7d1f-976e-4bb1-ad24-0fdafdfe81db",
    createdAt: "2025-02-06T13:42:50.108Z",
    slug: "vydalennia-kisty-shyyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 360,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення кісти шиї",
        },
        {
          lang: "en",
          value: "Removal of a neck cyst",
        },
      ],
    },
  },
  {
    id: "500002d7-d280-404a-8ca0-cacc9474d1ec",
    createdAt: "2025-02-06T13:42:49.994Z",
    slug: "vydalennia-kistkovoho-ekzostozu-osteokhondromatoznykh-vilnykh-tilets",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 344,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Removal of a bony exostosis or osteochondromatous loose bodies",
        },
        {
          lang: "uk",
          value:
            "Видалення кісткового екзостозу, остеохондроматозних вільних тілець",
        },
      ],
    },
  },
  {
    id: "9c7e588c-c8d9-42f1-aa63-89db6d65f568",
    createdAt: "2025-02-20T19:04:14.944Z",
    slug: "vydalennia-klishcha",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 800,
    onlinePrice: null,
    foreignId: 4149,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Tick removal",
        },
        {
          lang: "uk",
          value: "Видалення кліща",
        },
      ],
    },
  },
  {
    id: "dd10da08-4e2c-4e60-b703-7e936b3d8570",
    createdAt: "2025-02-06T13:42:49.724Z",
    slug: "vydalennia-kuprykovoyi-kisty-norytsi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 309,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Removal of a tailbone cyst/fistula",
        },
        {
          lang: "uk",
          value: "Видалення куприкової кісти/ нориці",
        },
      ],
    },
  },
  {
    id: "c6dafd56-ab53-4f80-bf98-1dd5875db90a",
    createdAt: "2025-02-06T13:42:49.586Z",
    slug: "vydalennia-lipomy-za-1-utvorennia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 291,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення ліпоми (за 1 утворення)",
        },
        {
          lang: "en",
          value: "Removal of a lipoma (per 1 lesion)",
        },
      ],
    },
  },
  {
    id: "7b77edf0-029d-4709-813a-8653a3c11a1c",
    createdAt: "2025-02-06T13:42:51.897Z",
    slug: "vydalennia-matky-bez-prydatkiv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 582,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення матки без придатків",
        },
        {
          lang: "en",
          value: "Removal of the uterus without adnexa",
        },
      ],
    },
  },
  {
    id: "b51c0379-7fc3-470a-9dbc-85647eb41927",
    createdAt: "2025-02-06T13:42:52.055Z",
    slug: "vydalennia-matky-z-prydatkamy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 603,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Removal of the uterus with adnexa",
        },
        {
          lang: "uk",
          value: "Видалення матки з придатками",
        },
      ],
    },
  },
  {
    id: "18c39971-e360-4062-b7e5-d95c7c664b8a",
    createdAt: "2025-02-06T13:42:50.086Z",
    slug: "vydalennia-myhdalykiv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 357,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Tonsillectomy",
        },
        {
          lang: "uk",
          value: "Видалення мигдаликів",
        },
      ],
    },
  },
  {
    id: "30e092df-a952-4caf-b8d4-a6d490dd2d3c",
    createdAt: "2025-02-06T13:42:49.460Z",
    slug: "vydalennia-mizhkhrebtsevoho-dysku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 275,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення міжхребцевого диску",
        },
        {
          lang: "en",
          value: "Removal of an intervertebral disc",
        },
      ],
    },
  },
  {
    id: "dee53cb4-73d2-45a3-8835-d80587675511",
    createdAt: "2025-02-06T13:42:51.489Z",
    slug: "vydalennia-nadnyrnyka-adrenalektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 528,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення наднирника (адреналектомія)",
        },
        {
          lang: "en",
          value: "Adrenal gland removal (adrenalectomy)",
        },
      ],
    },
  },
  {
    id: "2186d2e5-33a6-4472-a60c-dfd1be4fd543",
    createdAt: "2025-02-06T13:42:49.430Z",
    slug: "vydalennia-nihtovoho-lozha",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 271,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення нігтьового ложа",
        },
        {
          lang: "en",
          value: "Removal of the nail bed",
        },
      ],
    },
  },
  {
    id: "fae39d7d-a2bb-46b7-8be8-09d2e16100df",
    createdAt: "2025-02-20T19:04:15.653Z",
    slug: "vydalennia-nihtovoyi-plastyny-laminektomiia",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1690,
    onlinePrice: null,
    foreignId: 2634,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення нігтьової пластини (ламінектомія)",
        },
        {
          lang: "en",
          value: "Removal of the nail plate (laminectomy)",
        },
      ],
    },
  },
  {
    id: "d4853f5f-eeff-45a0-8135-e072f78dd6e2",
    createdAt: "2025-02-20T19:04:09.534Z",
    slug: "vydalennia-nihtovoyi-plastyny-u-ditei",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 720,
    onlinePrice: null,
    foreignId: 6494,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення нігтьової пластини (у дітей)",
        },
        {
          lang: "en",
          value: "Removal of the nail plate (in children)",
        },
      ],
    },
  },
  {
    id: "25d494df-8d35-4e86-9b65-41e1ac751d48",
    createdAt: "2025-02-06T13:42:49.649Z",
    slug: "vydalennia-obolonok-iaiechkakisty-prydatku-iaiechka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 299,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення оболонок яєчка/кісти придатку яєчка",
        },
        {
          lang: "en",
          value: "Removal of the testicular tunica/cyst of the epididymis",
        },
      ],
    },
  },
  {
    id: "f6849390-7fe3-47a9-9556-178e1053a4df",
    createdAt: "2025-02-06T13:42:50.771Z",
    slug: "vydalennia-odontohennoyi-pukhlyny-pukhlyny-kistok-cherepa",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 436,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення одонтогенної пухлини, пухлини кісток черепа",
        },
        {
          lang: "en",
          value: "Removal of an odontogenic tumor or tumor of the skull bones",
        },
      ],
    },
  },
  {
    id: "00183e95-771b-4b20-a2a0-fbfce901d251",
    createdAt: "2025-02-06T13:42:51.265Z",
    slug: "vydalennia-ochnoho-iabluka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 502,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення очного яблука",
        },
        {
          lang: "en",
          value: "Eyeball removal",
        },
      ],
    },
  },
  {
    id: "f55174c3-dfb0-4c02-aadd-3de3b67433c5",
    createdAt: "2025-02-06T13:42:52.091Z",
    slug: "vydalennia-pidshlunkovoyi-zalozy-subtotalna-radykalna-rezektsiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 608,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Видалення підшлункової залози (субтотальна/ радикальна резекція)*",
        },
        {
          lang: "en",
          value: "Removal of the pancreas (subtotal/radical resection)*",
        },
      ],
    },
  },
  {
    id: "05548662-5d72-458a-97eb-a121d60c5096",
    createdAt: "2025-02-20T19:04:10.668Z",
    slug: "vydalennia-polipa-shyiky-matky-tservikalnoho-kanala-pikhvy-z-mistsevoiu-anesteziieiu",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 3100,
    onlinePrice: null,
    foreignId: 2579,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Removal of a polyp of the cervix, cervical canal, or vagina (with local anesthesia)",
        },
        {
          lang: "uk",
          value:
            "Видалення поліпа шийки матки, цервікального канала, піхви (з місцевою анестезією)",
        },
      ],
    },
  },
  {
    id: "2bcea24d-d9bf-40f7-9b8d-7aff78853996",
    createdAt: "2025-02-06T13:42:49.777Z",
    slug: "vydalennia-polipu-kisty-porozhnyny-nosa-abo-pazukhy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 316,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Removal of a polyp/cyst of the nasal cavity or sinus",
        },
        {
          lang: "uk",
          value: "Видалення поліпу/ кісти порожнини носа або пазухи",
        },
      ],
    },
  },
  {
    id: "3d3842c7-023c-4427-9195-26324294bbe3",
    createdAt: "2025-02-06T13:42:49.906Z",
    slug: "vydalennia-prydatkiv-matky-pry-nepukhlynnii-patolohiyi-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 333,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Removal of the uterine adnexa for non-tumor pathology (unilateral)",
        },
        {
          lang: "uk",
          value:
            "Видалення придатків матки при непухлинній патології (з одного боку)",
        },
      ],
    },
  },
  {
    id: "2ac410e5-3b5e-4081-9736-749fb4b4bc2c",
    createdAt: "2025-02-06T13:42:51.971Z",
    slug: "vydalennia-prydatkiv-matky-pry-pukhlynakh-iaiechnyka-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 591,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Видалення придатків матки при пухлинах яєчника (з одного боку)",
        },
        {
          lang: "en",
          value:
            "Removal of the uterine adnexa for ovarian tumors (unilateral)",
        },
      ],
    },
  },
  {
    id: "9e0d255f-a514-47fc-b322-e4524396f5b9",
    createdAt: "2025-02-06T13:42:51.633Z",
    slug: "vydalennia-pukhlyny-holovnoho-ta-spynnoho-mozku-ta-yikh-obolonok",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 546,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Removal of a tumor of the brain, spinal cord, or their meninges",
        },
        {
          lang: "uk",
          value: "Видалення пухлини головного та спинного мозку та їх оболонок",
        },
      ],
    },
  },
  {
    id: "addda44d-d0fa-44c1-a13f-97ee7af814a1",
    createdAt: "2025-02-06T13:42:52.138Z",
    slug: "vydalennia-pukhlyny-kistkysuhlobu-rezektsiia-kistky-pry-pukhlynnii-patolohiyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 614,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Видалення пухлини кістки/суглобу, резекція кістки при пухлинній патології",
        },
        {
          lang: "en",
          value:
            "Removal of a bone/joint tumor, bone resection for tumor pathology",
        },
      ],
    },
  },
  {
    id: "7bd3e18b-ebab-4a96-ae20-daa05bcafafc",
    createdAt: "2025-02-06T13:42:50.881Z",
    slug: "vydalennia-pukhlyny-miakykh-tkanyn-okrim-lipom",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 450,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Removal of a soft tissue tumor (excluding lipomas)",
        },
        {
          lang: "uk",
          value: "Видалення пухлини м’яких тканин (окрім ліпом)",
        },
      ],
    },
  },
  {
    id: "4a2b0069-80dc-41fc-bfab-8a5dbf81b646",
    createdAt: "2025-02-06T13:42:51.394Z",
    slug: "vydalennia-pukhlyny-rotovoyi-nosovoyi-porozhnyny",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 518,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення пухлини ротової/ носової порожнини",
        },
        {
          lang: "en",
          value: "Removal of a tumor of the oral/nasal cavity",
        },
      ],
    },
  },
  {
    id: "78df8609-c74c-4d31-8bfd-291039513806",
    createdAt: "2025-02-06T13:42:50.953Z",
    slug: "vydalennia-pukhlyny-seredostinnia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 459,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення пухлини середостіння",
        },
        {
          lang: "en",
          value: "Removal of a mediastinal tumor",
        },
      ],
    },
  },
  {
    id: "2c6b9597-299f-4a69-a301-bdd140ed78a9",
    createdAt: "2025-02-06T13:42:50.058Z",
    slug: "vydalennia-synovialnykh-obolonok-hanhlion-i-burs-ta-kist-sukhozhyllia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 353,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Видалення синовіальних оболонок (гангліон і бурс) та кіст сухожилля",
        },
        {
          lang: "en",
          value:
            "Removal of synovial membranes (ganglion and bursa) and tendon cysts",
        },
      ],
    },
  },
  {
    id: "c80db458-0657-43cc-8b3f-08a83fbe157c",
    createdAt: "2025-02-06T13:42:51.314Z",
    slug: "vydalennia-slynnoyi-zalozy-pry-zapalnykh-protsesakh-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 508,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Removal of a salivary gland for inflammatory processes (unilateral)",
        },
        {
          lang: "uk",
          value:
            "Видалення слинної залози  при запальних процесах (з одного боку)",
        },
      ],
    },
  },
  {
    id: "d34ddbc4-2e2e-4281-bffa-9ae0f7f6a32e",
    createdAt: "2025-02-06T13:42:50.512Z",
    slug: "vydalennia-slozovoyi-zalozy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 406,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення сльозової залози",
        },
        {
          lang: "en",
          value: "Removal of a lacrimal gland",
        },
      ],
    },
  },
  {
    id: "81fa497a-94c4-4cb9-883b-a24d2bdcbaf5",
    createdAt: "2025-02-20T19:04:15.734Z",
    slug: "vydalennia-storonnikh-til-koniuktyvyrohivky",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 1200,
    onlinePrice: null,
    foreignId: 2595,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення сторонніх тіл (кон'юктиви/рогівки)",
        },
        {
          lang: "en",
          value: "Removal of foreign bodies (conjunctiva/cornea)",
        },
      ],
    },
  },
  {
    id: "721fecc7-807b-4877-977e-5a76dd548ab1",
    createdAt: "2025-02-20T19:04:09.826Z",
    slug: "vydalennia-storonnoho-tila-shkiry-tulub-kintsivky",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 660,
    onlinePrice: null,
    foreignId: 6497,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення стороннього тіла шкіри (тулуб, кінцівки)",
        },
        {
          lang: "en",
          value: "Removal of a foreign body from the skin (trunk, limbs)",
        },
      ],
    },
  },
  {
    id: "a01eedf4-7b62-4bb9-b4f9-1d5e18f148e5",
    createdAt: "2025-02-20T19:04:15.680Z",
    slug: "vydalennia-sterzhnevoho-mozolia-stopy",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 800,
    onlinePrice: null,
    foreignId: 2637,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Removal of a plantar callus",
        },
        {
          lang: "uk",
          value: "Видалення стрижневого мозоля стопи",
        },
      ],
    },
  },
  {
    id: "bb169167-9894-4798-b709-f6e72239c5b3",
    createdAt: "2025-02-06T13:42:50.460Z",
    slug: "vydalennia-sudyny",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 399,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vessel removal",
        },
        {
          lang: "uk",
          value: "Видалення судини",
        },
      ],
    },
  },
  {
    id: "2c98d271-fa52-4d2d-869e-6d059fb186b7",
    createdAt: "2025-02-20T19:04:09.878Z",
    slug: "vydalennia-fibrom-epiteliom-malerba-tulub-kintsivky",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1200,
    onlinePrice: null,
    foreignId: 6498,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Removal of fibromas, Malherbe epitheliomas (trunk, limbs)",
        },
        {
          lang: "uk",
          value: "Видалення фібром, епітеліом Малерба (тулуб, кінцівки)",
        },
      ],
    },
  },
  {
    id: "e364f5aa-b828-4a4d-982c-3c653eb512e2",
    createdAt: "2025-02-20T19:04:15.625Z",
    slug: "vydalennia-chuzhoridnoho-tila-z-hortanohlotky",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 1320,
    onlinePrice: null,
    foreignId: 2607,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Видалення чужорідного тіла з гортаноглотки",
        },
        {
          lang: "en",
          value: "Removal of a foreign body from the laryngopharynx",
        },
      ],
    },
  },
  {
    id: "cf99de9e-54fe-4ab9-92a3-4e90186d670f",
    createdAt: "2025-02-20T19:04:11.136Z",
    slug: "vydalennia-chuzhoridnoho-tila-z-porozhnyny-nosa-zovnishnoho-slukhovoho-prokhodu-hlotky",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 2230,
    onlinePrice: null,
    foreignId: 2608,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Видалення чужорідного тіла з порожнини носа, зовнішнього слухового проходу, глотки",
        },
        {
          lang: "en",
          value:
            "Removal of a foreign body from the nasal cavity, external auditory canal, or pharynx",
        },
      ],
    },
  },
  {
    id: "30751b8d-b068-46fe-a6b6-43ed72a80212",
    createdAt: "2025-02-06T13:42:51.843Z",
    slug: "vydalennia-iaiechka-ta-ioho-prydatku-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 574,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Removal of the testis and its epididymis (unilateral)",
        },
        {
          lang: "uk",
          value: "Видалення яєчка та його придатку (з одного боку)",
        },
      ],
    },
  },
  {
    id: "5a3f77f7-737f-4cac-86ad-8c36ae8e444c",
    createdAt: "2025-02-06T13:42:53.655Z",
    slug: "vydacha-zakliuchennia-anhliiskoiu-movoiu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 855,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Issuance of a report in English",
        },
        {
          lang: "uk",
          value: "Видача заключення англійською мовою",
        },
      ],
    },
  },
  {
    id: "bcd87143-c232-4f57-b047-d78b0a875848",
    createdAt: "2025-02-06T13:42:52.600Z",
    slug: "vyznachennia-antytil-do-erytrotsytiv-za-systemoiu-av0-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 677,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Determination of antibodies to erythrocytes by the ABO system \\ N",
        },
        {
          lang: "uk",
          value: "Визначення антитіл до еритроцитів за системою АВ0 \\ N",
        },
      ],
    },
  },
  {
    id: "3c4006b8-1f00-410d-903a-14aefe27d6d5",
    createdAt: "2025-02-06T13:42:49.803Z",
    slug: "vyznachennia-minimalnoyi-rezydualnoyi-khvoroby-vstanovlennia-tsytomorfolohichnoyi-remisiyi-protochna",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 319,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Визначення мінімальної резидуальної хвороби (встановлення цитоморфологічної ремісії, проточна цитометрія за наявністю первинного фенотипу)",
        },
        {
          lang: "en",
          value:
            "Determination of minimal residual disease (confirmation of cytomorphological remission, flow cytometry based on the presence of the primary phenotype)",
        },
      ],
    },
  },
  {
    id: "a5928926-0f9d-476a-af89-80275c7104ce",
    createdAt: "2025-02-20T19:04:14.565Z",
    slug: "vyyizd-medychnoyi-sestry-na-dim-ofis-za-mezhi-mkyieva-30km-zona-bez-vartosti-protsedury",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 1200,
    onlinePrice: null,
    foreignId: 6315,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Виїзд медичної сестри на дім (офіс) за межі м.Києва (30-км зона) (без вартості процедури)",
        },
        {
          lang: "en",
          value:
            "Nurse home (office) visit outside Kyiv (30-km zone) (excluding procedure cost)",
        },
      ],
    },
  },
  {
    id: "aac2e522-dc15-46ee-8053-e017211a53f3",
    createdAt: "2025-02-20T19:04:14.557Z",
    slug: "vyyizd-medychnoyi-sestry-na-dim-ofis-mkyyiv-bez-vartosti-protsedury",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 900,
    onlinePrice: null,
    foreignId: 6314,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Nurse home (office) visit within Kyiv (excluding procedure cost)",
        },
        {
          lang: "uk",
          value:
            "Виїзд медичної сестри на дім (офіс) м.Київ (без вартості процедури)",
        },
      ],
    },
  },
  {
    id: "007492db-c568-4365-8183-1b3dc0a78505",
    createdAt: "2025-02-20T19:04:10.922Z",
    slug: "vymiriuvannia-vnutriochnoho-tysku",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 600,
    onlinePrice: null,
    foreignId: 2594,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Intraocular pressure measurement",
        },
        {
          lang: "uk",
          value: "Вимірювання внутріочного тиску",
        },
      ],
    },
  },
  {
    id: "d60e249b-a1c9-447a-bdbc-79a08b18f927",
    createdAt: "2025-02-06T13:42:49.230Z",
    slug: "vyshkribannia-tservikalnoho-kanalu-polipektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 248,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cervical canal curettage, polypectomy",
        },
        {
          lang: "uk",
          value: "Вишкрібання цервікального каналу, поліпектомія",
        },
      ],
    },
  },
  {
    id: "002cc1fd-efbe-4106-abf9-711c5c1ae0ed",
    createdAt: "2025-02-06T13:42:51.306Z",
    slug: "vyiavlennia-nosiistva-hrybiv-rodu-candida-chutlyvist-do-antymikotykiv-ddm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 507,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Detection of Candida genus fungal carriage. Sensitivity to antifungals by disk diffusion method (DDM)",
        },
        {
          lang: "uk",
          value:
            "Виявлення носійства грибів роду Candida. Чутливість до антимікотиків ДДМ",
        },
      ],
    },
  },
  {
    id: "ab4740cf-6b03-47a3-a2df-7d34c59ba803",
    createdAt: "2025-02-06T13:42:51.172Z",
    slug: "vyiavlennia-nosiistva-patohennoho-stafilokoku-staphylococcus-aureus-chutlyvist-do-antybiotykiv-ddm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 489,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Виявлення носійства патогенного стафілококу (Staphylococcus aureus). Чутливість до антибіотиків ДДМ",
        },
        {
          lang: "en",
          value:
            "Detection of pathogenic Staphylococcus aureus carriage. Sensitivity to antibiotics by DDM",
        },
      ],
    },
  },
  {
    id: "8bf9d7dc-0cb3-4390-aa71-d22478963f28",
    createdAt: "2025-02-06T13:42:51.199Z",
    slug: "vyiavlennia-nosiistva-streptokokiv-hrupy-b-streptococcus-agalactiae-chutlyvist-do-antybiotykiv-ddm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 493,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Виявлення носійства стрептококів групи B (Streptococcus agalactiae). Чутливість до антибіотиків ДДМ",
        },
        {
          lang: "en",
          value:
            "Detection of Group B Streptococcus (Streptococcus agalactiae) carriage. Sensitivity to antibiotics by DDM",
        },
      ],
    },
  },
  {
    id: "c952f5a3-9496-4e0f-93d3-ac9bfcf28f9a",
    createdAt: "2025-02-06T13:42:48.438Z",
    slug: "videoezofahohastroduodenoskopiia-vehds",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 1500,
    onlinePrice: 0,
    foreignId: 41,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Video esophagogastroduodenoscopy (EGD)",
        },
        {
          lang: "uk",
          value: "Відеоезофагогастродуоденоскопія (ВЕГДС)",
        },
      ],
    },
  },
  {
    id: "4ff21430-e0f2-4ad2-8214-89a73f956114",
    createdAt: "2025-02-20T19:04:14.373Z",
    slug: "vidsharuvannia-slyzovoyi-obolonky-nosovoyi-perehorodky",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 1500,
    onlinePrice: null,
    foreignId: 6447,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Відшарування слизової оболонки носової перегородки",
        },
        {
          lang: "en",
          value: "Detachment of the nasal septum mucosa",
        },
      ],
    },
  },
  {
    id: "04187621-5233-43bf-acc9-f0d1e0141e59",
    createdAt: "2025-02-06T13:42:53.663Z",
    slug: "vil-11o2-serolohichna-diahnostyka-z-pidtverdzhenniam-antyhen-ta-antytila",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 856,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ВІЛ 1/1о/2, серологічна діагностика з підтвердженням (антиген та антитіла)",
        },
        {
          lang: "en",
          value:
            "HIV 1/1o/2, serological diagnosis with confirmation (antigen and antibodies)",
        },
      ],
    },
  },
  {
    id: "68aa269e-fdfd-442a-ae54-c5c18391b120",
    createdAt: "2025-02-06T13:42:51.772Z",
    slug: "virus-hepatytu-a-hav-antytila-sumarni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 565,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту А (HAV), антитіла сумарні",
        },
        {
          lang: "en",
          value: "Hepatitis A virus (HAV), total antibodies",
        },
      ],
    },
  },
  {
    id: "e201e255-ddb3-4145-91b5-ff396f0a7692",
    createdAt: "2025-02-06T13:42:51.728Z",
    slug: "virus-hepatytu-a-hav-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 559,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту А (HAV), IgМ",
        },
        {
          lang: "en",
          value: "Hepatitis A virus (HAV), IgM",
        },
      ],
    },
  },
  {
    id: "1aba34fc-34f4-48eb-bbad-ec6cb2f7c5b7",
    createdAt: "2025-02-06T13:42:51.876Z",
    slug: "virus-hepatytu-b-hbv-anti-hbe-antytila-sumarni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 579,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту B (HBV), anti HBe, антитіла сумарні",
        },
        {
          lang: "en",
          value: "Hepatitis B virus (HBV), anti-HBe, total antibodies",
        },
      ],
    },
  },
  {
    id: "b428fbc8-82e0-4a53-a4f1-42758772e575",
    createdAt: "2025-02-06T13:42:51.984Z",
    slug: "virus-hepatytu-b-hbv-anti-hbs-antytila-sumarni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 593,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту B (HBV), anti HBs, антитіла сумарні",
        },
        {
          lang: "en",
          value: "Hepatitis B virus (HBV), anti-HBs, total antibodies",
        },
      ],
    },
  },
  {
    id: "d56163fc-adf3-4d63-b480-819ca5eb8fd0",
    createdAt: "2025-02-06T13:42:51.821Z",
    slug: "virus-hepatytu-b-hbv-hbcorag-antytila-sumarni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 571,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту B (HBV), HBcorAg, антитіла сумарні",
        },
        {
          lang: "en",
          value: "Hepatitis B virus (HBV), HBcAg, total antibodies",
        },
      ],
    },
  },
  {
    id: "e89f7563-3c9e-4d36-b084-beeae32acc72",
    createdAt: "2025-02-06T13:42:51.807Z",
    slug: "virus-hepatytu-b-hbv-hbcorag-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 569,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту B (HBV), HBcorAg, IgM",
        },
        {
          lang: "en",
          value: "Hepatitis B virus (HBV), HBcAg, IgM",
        },
      ],
    },
  },
  {
    id: "e1e38261-f3cd-4bad-ae01-46536f344dd2",
    createdAt: "2025-02-06T13:42:51.863Z",
    slug: "virus-hepatytu-b-hbv-hbeag",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 577,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту B (HBV), HBeAg",
        },
        {
          lang: "en",
          value: "Hepatitis B virus (HBV), HBeAg",
        },
      ],
    },
  },
  {
    id: "ff245fd3-0f38-4b90-b65e-93f874662bc3",
    createdAt: "2025-02-06T13:42:51.942Z",
    slug: "virus-hepatytu-b-hbv-hbsag",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 588,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту B (HBV), HBsAg",
        },
        {
          lang: "en",
          value: "Hepatitis B virus (HBV), HBsAg",
        },
      ],
    },
  },
  {
    id: "22d3b167-ff07-49a8-abdb-2bb38a9a5868",
    createdAt: "2025-02-06T13:42:52.020Z",
    slug: "virus-hepatytu-b-hbv-hbsag-kilkisne-vyznachennia-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 598,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Hepatitis B virus (HBV), HBsAg, quantitative determination \\ N",
        },
        {
          lang: "uk",
          value: "Вірус гепатиту B (HBV), HBsAg, кількісне визначення \\ N",
        },
      ],
    },
  },
  {
    id: "c914fe3b-b6bb-451c-9b81-360c104d57f7",
    createdAt: "2025-02-06T13:42:48.832Z",
    slug: "virus-hepatytu-b-hbcantyhen",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 85,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту B, Hbc-антиген",
        },
        {
          lang: "en",
          value: "Hepatitis B virus, HBc antigen",
        },
      ],
    },
  },
  {
    id: "eeaba8dc-cc21-4fbd-bea8-65289c81b5ae",
    createdAt: "2025-02-06T13:42:48.817Z",
    slug: "virus-hepatytu-b-hbsantyhen",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 83,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту B, Hbs-антиген",
        },
        {
          lang: "en",
          value: "Hepatitis B virus, HBs antigen",
        },
      ],
    },
  },
  {
    id: "2276dea5-1eb3-405b-8e95-db2e5ad15194",
    createdAt: "2025-02-06T13:42:48.825Z",
    slug: "virus-hepatytu-b-hbsantyhen-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 84,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Hepatitis B virus, HBs antigen, IgG antibodies",
        },
        {
          lang: "uk",
          value: "Вірус гепатиту B, Hbs-антиген, антитіла IgG",
        },
      ],
    },
  },
  {
    id: "ef06ddab-c7d6-4d53-8a4a-535a45c8fded",
    createdAt: "2025-02-06T13:42:52.116Z",
    slug: "virus-hepatytu-c-hcv-antytila-sumarni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 611,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус гепатиту C (HCV), антитіла сумарні",
        },
        {
          lang: "en",
          value: "Hepatitis C virus (HCV), total antibodies",
        },
      ],
    },
  },
  {
    id: "73741fe9-31b3-49d9-966e-a0bbac0063de",
    createdAt: "2025-02-06T13:42:48.839Z",
    slug: "virus-hepatytu-c-antytila-sumarni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 150,
    onlinePrice: 0,
    foreignId: 86,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Hepatitis C virus, total antibodies",
        },
        {
          lang: "uk",
          value: "Вірус гепатиту C, антитіла сумарні",
        },
      ],
    },
  },
  {
    id: "428b0b1b-6308-49d8-99d7-b496e01d3d3d",
    createdAt: "2025-02-06T13:42:52.298Z",
    slug: "virus-hepatytu-d-hdv-antytila-sumarni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 635,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Hepatitis D virus (HDV), total antibodies",
        },
        {
          lang: "uk",
          value: "Вірус гепатиту D (HDV), антитіла сумарні",
        },
      ],
    },
  },
  {
    id: "07f89601-fdca-42c1-b3dd-dff151e13500",
    createdAt: "2025-02-06T13:42:48.884Z",
    slug: "virus-epshteinabarr-kapsydnyi-antyhen-antytila-igg-vca",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 92,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус Епштейна-Барр, капсидний антиген, антитіла IgG (VCA)",
        },
        {
          lang: "en",
          value: "Epstein-Barr virus, capsid antigen, IgG antibodies (VCA)",
        },
      ],
    },
  },
  {
    id: "0f2f8fb8-2116-45f0-9b02-d80387b77782",
    createdAt: "2025-02-06T13:42:50.023Z",
    slug: "virus-klishchovoho-entsefalitu-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 348,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус кліщового енцефаліту, антитіла IgG",
        },
        {
          lang: "en",
          value: "Tick-borne encephalitis virus, IgG antibodies",
        },
      ],
    },
  },
  {
    id: "159f3f73-21dc-4c14-bb6d-9b538eadcb6f",
    createdAt: "2025-02-06T13:42:50.051Z",
    slug: "virus-klishchovoho-entsefalitu-antytila-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 352,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Tick-borne encephalitis virus, IgM antibodies",
        },
        {
          lang: "uk",
          value: "Вірус кліщового енцефаліту, антитіла IgM",
        },
      ],
    },
  },
  {
    id: "4585c2a1-fe91-4f71-98b1-f7babb0ea84f",
    createdAt: "2025-02-06T13:42:48.854Z",
    slug: "virus-krasnukhy-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 88,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Rubella virus, IgG antibodies",
        },
        {
          lang: "uk",
          value: "Вірус краснухи, антитіла IgG",
        },
      ],
    },
  },
  {
    id: "e48abee7-1018-4301-a7d0-7b55c3850c0f",
    createdAt: "2025-02-06T13:42:48.899Z",
    slug: "virus-prostoho-herpesa-2-typa-hsv1-plr",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 200,
    onlinePrice: 0,
    foreignId: 94,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Herpes simplex virus type 2 (HSV2), PCR",
        },
        {
          lang: "uk",
          value: "Вірус простого герпеса 2 типа (HSV1), ПЛР",
        },
      ],
    },
  },
  {
    id: "6e3877a8-5d0c-418f-864d-64eee1c4bacb",
    createdAt: "2025-02-06T13:42:52.752Z",
    slug: "virus-prostoho-herpesu-hsv-12-typiv-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 690,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус простого герпесу (HSV) 1/2 типів, IgG",
        },
        {
          lang: "en",
          value: "Herpes simplex virus (HSV) types 1/2, IgG",
        },
      ],
    },
  },
  {
    id: "a0e1a676-0465-4dbc-b360-108e48bc34f1",
    createdAt: "2025-02-06T13:42:52.823Z",
    slug: "virus-prostoho-herpesu-hsv-12-typiv-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 697,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Herpes simplex virus (HSV) types 1/2, IgM",
        },
        {
          lang: "uk",
          value: "Вірус простого герпесу (HSV) 1/2 типів, IgM",
        },
      ],
    },
  },
  {
    id: "746f3449-a271-49c2-9438-6eb2b9d8b121",
    createdAt: "2025-02-06T13:42:48.892Z",
    slug: "virus-prostoho-herpesu-1-typa-hsv1-plr",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 200,
    onlinePrice: 0,
    foreignId: 93,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус простого герпесу 1 типа (HSV1), ПЛР",
        },
        {
          lang: "en",
          value: "Herpes simplex virus type 1 (HSV1), PCR",
        },
      ],
    },
  },
  {
    id: "101f947c-2b2e-4ed1-ab2a-1c35a0da55b5",
    createdAt: "2025-02-06T13:42:48.862Z",
    slug: "virus-prostoho-herpesu-typ-1-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 89,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус простого герпесу тип 1, антитіла IgG",
        },
        {
          lang: "en",
          value: "Herpes simplex virus type 1, IgG antibodies",
        },
      ],
    },
  },
  {
    id: "286c9c7e-0d30-4e5a-aab7-ad4374eede98",
    createdAt: "2025-02-06T13:42:48.869Z",
    slug: "virus-prostoho-herpesu-typ-2-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 90,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус простого герпесу тип 2, антитіла IgG",
        },
        {
          lang: "en",
          value: "Herpes simplex virus type 2, IgG antibodies",
        },
      ],
    },
  },
  {
    id: "793c7fdd-2652-402c-8c7f-9d27333707d9",
    createdAt: "2025-02-06T13:42:52.912Z",
    slug: "virus-varicella-zoster-3-typ-herpesu-vzv-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 709,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вірус Varicella Zoster (3 тип герпесу, VZV), IgG",
        },
        {
          lang: "en",
          value: "Varicella Zoster virus (type 3 herpes, VZV), IgG",
        },
      ],
    },
  },
  {
    id: "f8703fed-62e1-42c1-b22b-04b17ac07c2e",
    createdAt: "2025-02-06T13:42:52.965Z",
    slug: "virus-varicella-zoster-3-typ-herpesu-vzv-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 716,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Varicella Zoster virus (type 3 herpes, VZV), IgM",
        },
        {
          lang: "uk",
          value: "Вірус Varicella Zoster (3 тип герпесу, VZV), IgM",
        },
      ],
    },
  },
  {
    id: "6b8caa16-1da9-4ed6-a04e-19f3690e3617",
    createdAt: "2025-02-06T13:42:51.836Z",
    slug: "vitamin-a-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 573,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vitamin A \\ N",
        },
        {
          lang: "uk",
          value: "Вітамін A \\ N",
        },
      ],
    },
  },
  {
    id: "8e786093-da7c-4fa0-aba5-d8c6c30b9a67",
    createdAt: "2025-02-06T13:42:51.856Z",
    slug: "vitamin-b1-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 576,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вітамін B1 \\ N",
        },
        {
          lang: "en",
          value: "Vitamin B1 \\ N",
        },
      ],
    },
  },
  {
    id: "39f5c00d-147b-42da-9463-c1bf4b053276",
    createdAt: "2025-02-06T13:42:51.890Z",
    slug: "vitamin-b6-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 581,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vitamin B6 \\ N",
        },
        {
          lang: "uk",
          value: "Вітамін B6 \\ N",
        },
      ],
    },
  },
  {
    id: "fb7a9b6e-717f-4d0a-822e-90b9ccc89382",
    createdAt: "2025-02-06T13:42:51.910Z",
    slug: "vitamin-c-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 584,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вітамін C \\ N **",
        },
        {
          lang: "en",
          value: "Vitamin C \\ N **",
        },
      ],
    },
  },
  {
    id: "3ed19fa8-4ebc-42db-850c-9b4c1f29626d",
    createdAt: "2025-02-06T13:42:51.933Z",
    slug: "vitamin-e-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 587,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vitamin E \\ N",
        },
        {
          lang: "uk",
          value: "Вітамін E \\ N",
        },
      ],
    },
  },
  {
    id: "712eada4-d8aa-4e93-9210-12e53b6eba71",
    createdAt: "2025-02-20T19:04:15.632Z",
    slug: "vlyvannia-v-hortan-likarskykh-zasobiv",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 750,
    onlinePrice: null,
    foreignId: 2609,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Laryngeal infusion of medications",
        },
        {
          lang: "uk",
          value: "Вливання в гортань лікарських засобів",
        },
      ],
    },
  },
  {
    id: "94168aef-103d-40f1-885d-c3bf60c251bf",
    createdAt: "2025-02-06T13:42:53.720Z",
    slug: "vnutrishnovenna-iniektsiia",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 25,
    onlinePrice: 0,
    foreignId: 880,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Intravenous injection",
        },
        {
          lang: "uk",
          value: "Внутрішньовенна ін'єкція",
        },
      ],
    },
  },
  {
    id: "e6da6b24-1777-43cc-b5f3-b5d8378a83a1",
    createdAt: "2025-02-06T13:42:48.998Z",
    slug: "vnutrishnovenna-infuziia",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 110,
    onlinePrice: 0,
    foreignId: 121,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Intravenous infusion",
        },
        {
          lang: "uk",
          value: "Внутрішньовенна інфузія",
        },
      ],
    },
  },
  {
    id: "baea5327-d120-4b6e-b379-a7af95faa35c",
    createdAt: "2025-02-20T19:04:13.053Z",
    slug: "vnutrishnovenna-krapelna-iniektsiia-sk",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 690,
    onlinePrice: null,
    foreignId: 2701,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Intravenous drip injection ",
        },
        {
          lang: "uk",
          value: "Внутрішньовенна крапельна ін’єкція (СК)",
        },
      ],
    },
  },
  {
    id: "80ae9d39-bd88-4d07-9f91-d8aa007dfc22",
    createdAt: "2025-02-20T19:04:15.726Z",
    slug: "vnutrishnovenna-strumynna-iniektsiia",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 230,
    onlinePrice: null,
    foreignId: 2700,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Intravenous bolus injection",
        },
        {
          lang: "uk",
          value: "Внутрішньовенна струминна ін’єкція",
        },
      ],
    },
  },
  {
    id: "1eaa6dc3-7ad8-4e6e-8e16-7156be03e158",
    createdAt: "2025-02-06T13:42:53.734Z",
    slug: "vnutrishnovenne-krapelne-vlyvannia",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 100,
    onlinePrice: 1000,
    foreignId: 891,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Intravenous drip infusion",
        },
        {
          lang: "uk",
          value: "Внутрішньовенне крапельне вливання",
        },
      ],
    },
  },
  {
    id: "72cd3f64-ae4b-4aab-acf3-54703e2850f2",
    createdAt: "2025-02-26T14:23:26.762Z",
    slug: "vnutrishnovohnyshcheva-terapiia",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 1800,
    onlinePrice: null,
    foreignId: 6581,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Внутрішньовогнищева ін'єкція триамцинолону",
        },
        {
          lang: "en",
          value: "Intralesional triamcinolone injection",
        },
      ],
    },
  },
  {
    id: "ae5081a7-ece4-42f0-b524-4ad2c93d87b2",
    createdAt: "2025-02-20T19:04:14.467Z",
    slug: "vnutrishnokavernozna-iniektsiia",
    sectionId: "7ba71050-3d70-4bef-b673-bb6dc2817cd9",
    price: 650,
    onlinePrice: null,
    foreignId: 2720,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Intracavernous injection",
        },
        {
          lang: "uk",
          value: "Внутрішньокавернозна ін'єкція",
        },
      ],
    },
  },
  {
    id: "6e220c71-c04c-41ac-a41e-27a260896650",
    createdAt: "2025-02-06T13:42:49.005Z",
    slug: "vnutrishnomiazova-iniektsiia",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 55,
    onlinePrice: 0,
    foreignId: 122,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Внутрішньом'язова ін'єкція",
        },
        {
          lang: "en",
          value: "Intramuscular injection",
        },
      ],
    },
  },
  {
    id: "68671b16-cb94-4281-8512-925c919eddd7",
    createdAt: "2025-02-20T19:04:15.702Z",
    slug: "vnutrishnosuhlobove-vvedennia-likarskykh-zasobiv-bez-vartosti-medykamentiv",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 740,
    onlinePrice: null,
    foreignId: 2702,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Intra-articular administration of medications (excluding the cost of medications)",
        },
        {
          lang: "uk",
          value:
            "Внутрішньосуглобове введення лікарських засобів (без вартості медикаментів)",
        },
      ],
    },
  },
  {
    id: "c20fdefa-f656-4530-b0e9-4dab2a97186d",
    createdAt: "2025-02-06T13:42:52.765Z",
    slug: "vovchakovyi-antykoahuliant-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 691,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вовчаковий антикоагулянт \\ N",
        },
        {
          lang: "en",
          value: "Lupus anticoagulant \\ N",
        },
      ],
    },
  },
  {
    id: "45ae9c11-d2f4-4fe4-9538-e5fc2eee5d8a",
    createdAt: "2025-02-20T19:04:09.497Z",
    slug: "vpravlennia-parafimozu-ruchne",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1800,
    onlinePrice: null,
    foreignId: 6492,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Вправлення парафімозу",
        },
        {
          lang: "en",
          value: "Manual reduction of paraphimosis",
        },
      ],
    },
  },
  {
    id: "c2967d46-df01-46bb-9942-88dc88f767c3",
    createdAt: "2025-02-06T13:42:49.013Z",
    slug: "vstanovlennia-kholtera-ekh-na-24-hod",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 1000,
    onlinePrice: 0,
    foreignId: 132,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Встановлення холтера (ЕКГ, на 24 год.)",
        },
        {
          lang: "en",
          value: "Holter monitor placement (ECG, 24 hours)",
        },
      ],
    },
  },
  {
    id: "b8351184-9f61-4e92-b143-46749b83e79b",
    createdAt: "2025-02-06T13:42:53.345Z",
    slug: "vstanovlennia-kholtera-ekh-na-48-hod",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 1900,
    onlinePrice: 0,
    foreignId: 794,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Встановлення холтера (ЕКГ, на 48 год.)",
        },
        {
          lang: "en",
          value: "Holter monitor placement (ECG, 48 hours)",
        },
      ],
    },
  },
  {
    id: "6dd74128-513d-42f3-9c68-3145e8ee1f70",
    createdAt: "2025-02-20T19:04:14.573Z",
    slug: "halvanizatsiia-1-zona-20-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 550,
    onlinePrice: null,
    foreignId: 6388,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Galvanization (1 zone, 20 min.)",
        },
        {
          lang: "uk",
          value: "Гальванізація (1 зона, 20 хв.)",
        },
      ],
    },
  },
  {
    id: "7e450353-2560-4057-b3b9-2e4f7cf35c5f",
    createdAt: "2025-02-20T19:04:13.164Z",
    slug: "halvanizatsiia-vakuumom-1-zona-30-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 750,
    onlinePrice: null,
    foreignId: 6394,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vacuum galvanization (1 zone, 30 min.)",
        },
        {
          lang: "uk",
          value: "Гальванізація вакуумом (1 зона, 30 хв.)",
        },
      ],
    },
  },
  {
    id: "052cfd51-cb07-4f5f-873b-9d24534d68ee",
    createdAt: "2025-02-06T13:42:53.393Z",
    slug: "hammahlutamattransferaza-hht-ggt",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 816,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Гамма-глутаматтрансфераза (ГГТ) / GGT",
        },
        {
          lang: "en",
          value: "Gamma-glutamyl transferase (GGT)",
        },
      ],
    },
  },
  {
    id: "13d1edc3-0704-4777-a29b-91345da5852c",
    createdAt: "2025-02-06T13:42:52.276Z",
    slug: "hastrektomiia-subtotalna-rezektsiia-shlunka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 632,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Gastrectomy / subtotal gastric resection*",
        },
        {
          lang: "uk",
          value: "Гастректомія / субтотальна резекція шлунка*",
        },
      ],
    },
  },
  {
    id: "c60ef896-2abf-47c1-80dc-70304014ff54",
    createdAt: "2025-02-06T13:42:49.326Z",
    slug: "hastryn-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 259,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Гастрин \\ N **",
        },
        {
          lang: "en",
          value: "Gastrin \\ N **",
        },
      ],
    },
  },
  {
    id: "b1a53e81-3e26-497e-8a98-9e7d1263ceed",
    createdAt: "2025-02-06T13:42:48.692Z",
    slug: "hht",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 30,
    onlinePrice: 0,
    foreignId: 68,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "GGT",
        },
        {
          lang: "uk",
          value: "ГГТ",
        },
      ],
    },
  },
  {
    id: "10cdef47-1552-4a7a-9aeb-eb934d07d628",
    createdAt: "2025-02-06T13:42:52.474Z",
    slug: "hemikolektomiia-esktyrpatsiia-priamoyi-kyshky-inshi-rezektsiyi-kyshky",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 660,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Hemicolectomy / rectal extirpation / other bowel resections*",
        },
        {
          lang: "uk",
          value:
            "Геміколектомія / есктирпація прямої кишки / інші резекції кишки*",
        },
      ],
    },
  },
  {
    id: "80c1f8b3-50dc-4cf7-8b9b-9ba50550307c",
    createdAt: "2025-02-06T13:42:49.602Z",
    slug: "hernioplastyka-vydalennia-kylovoho-mishku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 293,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Hernioplasty (removal of hernia sac)",
        },
        {
          lang: "uk",
          value: "Герніопластика (видалення килового мішку)",
        },
      ],
    },
  },
  {
    id: "4430e60d-ff74-466c-9198-21685a15c5de",
    createdAt: "2025-02-06T13:42:53.685Z",
    slug: "hernioplastyka-pry-kylakh-bilokh-liniyi-zhyvota-ta-pupkovii-kyli",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 15000,
    onlinePrice: 0,
    foreignId: 859,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Hernioplasty for hernias of the linea alba and umbilical hernia",
        },
        {
          lang: "uk",
          value: "Герніопластика при килах білох лінії живота та пупковій килі",
        },
      ],
    },
  },
  {
    id: "c3a53231-3ad1-4f75-ab2a-4d9447ff0452",
    createdAt: "2025-02-06T13:42:53.706Z",
    slug: "histerorezektoskopiia-likuvalna",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 15000,
    onlinePrice: 0,
    foreignId: 870,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Therapeutic hysteroresectoscopy",
        },
        {
          lang: "uk",
          value: "Гістерорезектоскопія лікувальна",
        },
      ],
    },
  },
  {
    id: "2d235546-ebcd-4cbd-8c3b-4d79e446ff07",
    createdAt: "2025-02-06T13:42:53.647Z",
    slug: "histolohichne-doslnia-materialu-iz-porozhnyny-matky-ta-ihkh-vyznachennia-cd138",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 854,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Histological examination of material from the uterine cavity with IHC determination of CD138",
        },
        {
          lang: "uk",
          value:
            "Гістологічне досл-ня матеріалу із порожнини матки та ІГХ визначення CD138",
        },
      ],
    },
  },
  {
    id: "aa0a53f8-7d1c-4d06-8cdf-983f20181c64",
    createdAt: "2025-02-06T13:42:49.375Z",
    slug: "histokhimichni-doslidzhennia-za-1-metodyku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 265,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Гістохімічні дослідження (за 1 методику)",
        },
        {
          lang: "en",
          value: "Histochemical studies (per 1 method)",
        },
      ],
    },
  },
  {
    id: "8dd6e46e-c7a3-42e1-8a0f-f8a856b2414b",
    createdAt: "2025-02-06T13:42:52.123Z",
    slug: "hliadyn-antytila-iga-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 612,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Gliadin, IgA antibodies \\ N",
        },
        {
          lang: "uk",
          value: "Гліадин, антитіла IgA \\ N",
        },
      ],
    },
  },
  {
    id: "1dd4596e-0f1f-4a40-a54f-456eef5ada45",
    createdAt: "2025-02-06T13:42:52.167Z",
    slug: "hliadyn-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 618,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Гліадин, антитіла IgG",
        },
        {
          lang: "en",
          value: "Gliadin, IgG antibodies",
        },
      ],
    },
  },
  {
    id: "9f14b3cc-3300-41c9-bcbb-c34963d7b8fd",
    createdAt: "2025-02-06T13:42:50.867Z",
    slug: "hlikovanyi-hemohlobin-hba1c",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 448,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Glycated hemoglobin (HbA1c)",
        },
        {
          lang: "uk",
          value: "Глікований гемоглобін (HBA1c)",
        },
      ],
    },
  },
  {
    id: "9381fec7-4257-40b2-93ed-215010f30748",
    createdAt: "2025-02-06T13:42:49.709Z",
    slug: "hlobulin-shcho-zviazuie-statevi-hormony-szh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 307,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Глобулін, що зв'язує статеві гормони (СЗГ)",
        },
        {
          lang: "en",
          value: "Sex hormone-binding globulin (SHBG)",
        },
      ],
    },
  },
  {
    id: "f310a2b0-6f19-48f1-8b7d-547d54d0896d",
    createdAt: "2025-02-06T13:42:48.785Z",
    slug: "hlobulin-shcho-zviazuie-statevi-hormony-shbg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 150,
    onlinePrice: 0,
    foreignId: 79,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Глобулін, що зв'язує статеві гормони (SHBG)",
        },
        {
          lang: "en",
          value: "Sex hormone-binding globulin (SHBG)",
        },
      ],
    },
  },
  {
    id: "0536e56b-e788-457d-9565-c83eb62116de",
    createdAt: "2025-02-06T13:42:48.668Z",
    slug: "hliukoza",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 50,
    onlinePrice: 0,
    foreignId: 65,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Glucose",
        },
        {
          lang: "uk",
          value: "Глюкоза",
        },
      ],
    },
  },
  {
    id: "b825fe42-de14-4224-8945-c1f63843e8e6",
    createdAt: "2025-02-06T13:42:50.888Z",
    slug: "hliukoza-dobova-secha-m-kyyiv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 451,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Glucose (daily urine), Kyiv **",
        },
        {
          lang: "uk",
          value: "Глюкоза (добова сеча), м. Київ **",
        },
      ],
    },
  },
  {
    id: "52bd7b63-6a94-409b-94e4-547fc94de4dd",
    createdAt: "2025-02-06T13:42:53.613Z",
    slug: "hliukoza-kilkisnyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 849,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Glucose (quantitative)",
        },
        {
          lang: "uk",
          value: "Глюкоза (кількісний)",
        },
      ],
    },
  },
  {
    id: "cb941045-c08e-4541-a32d-b01ca4b4bc3a",
    createdAt: "2025-02-06T13:42:50.924Z",
    slug: "hliukoza-syrovatka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 455,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Глюкоза (сироватка)",
        },
        {
          lang: "en",
          value: "Glucose (serum)",
        },
      ],
    },
  },
  {
    id: "20ae12d6-e14e-40ff-bb79-a3309a76f71d",
    createdAt: "2025-03-10T10:23:37.292Z",
    slug: "hliukoza-v-krovi",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 200,
    onlinePrice: null,
    foreignId: 4127,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Blood glucose",
        },
        {
          lang: "uk",
          value: "Глюкоза в крові",
        },
      ],
    },
  },
  {
    id: "87c1f912-1b88-4c69-98f3-312829b62fd1",
    createdAt: "2025-02-06T13:42:52.181Z",
    slug: "homotsysteyin",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 620,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Homocysteine",
        },
        {
          lang: "uk",
          value: "Гомоцистеїн",
        },
      ],
    },
  },
  {
    id: "a447381d-576d-4671-9c0e-032235fb33ee",
    createdAt: "2025-02-06T13:42:52.621Z",
    slug: "hrupa-krovi-rezus-faktor",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 680,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Група крові + резус фактор",
        },
        {
          lang: "en",
          value: "Blood group + Rh factor",
        },
      ],
    },
  },
  {
    id: "867f6fa2-98b5-467c-b784-345b73410547",
    createdAt: "2025-02-06T13:42:49.056Z",
    slug: "hrupa-krovi-ta-rezusfaktor",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 150,
    onlinePrice: 0,
    foreignId: 177,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Blood group and Rh factor",
        },
        {
          lang: "uk",
          value: "Група крові та резус-фактор",
        },
      ],
    },
  },
  {
    id: "2a40a079-bd33-4cb9-be66-6e8f2cc15def",
    createdAt: "2025-02-20T19:04:15.128Z",
    slug: "darsonvalizatsiia-1-zona-15-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 480,
    onlinePrice: null,
    foreignId: 6365,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Darsonvalization (1 zone, 15 min.)",
        },
        {
          lang: "uk",
          value: "Дарсонвалізація (1 зона, 15 хв.)",
        },
      ],
    },
  },
  {
    id: "2e40e71d-7145-4e59-83c0-ea93973d6071",
    createdAt: "2025-02-06T13:42:50.335Z",
    slug: "dehidroepiandrosteronsulfat-dheas",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 390,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дегідроепіандростерон-сульфат, ДГEА-С",
        },
        {
          lang: "en",
          value: "Dehydroepiandrosterone sulfate, DHEA-S",
        },
      ],
    },
  },
  {
    id: "962d0ec3-980d-492e-805e-a2534e475b83",
    createdAt: "2025-02-06T13:42:52.217Z",
    slug: "dezaminovani-peptydy-hliadynu-antytila-iga-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 624,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дезаміновані пептиди гліадину, антитіла IgA \\ N",
        },
        {
          lang: "en",
          value: "Deamidated gliadin peptides, IgA antibodies \\ N",
        },
      ],
    },
  },
  {
    id: "b7b9fd54-a934-4056-bc17-d7a0756a018e",
    createdAt: "2025-02-06T13:42:52.261Z",
    slug: "dezaminovani-peptydy-hliadynu-antytila-igg-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 630,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Deamidated gliadin peptides, IgG antibodies \\ N",
        },
        {
          lang: "uk",
          value: "Дезаміновані пептиди гліадину, антитіла IgG \\ N",
        },
      ],
    },
  },
  {
    id: "7200e876-fc44-48f9-8c73-24654e860b8c",
    createdAt: "2025-02-06T13:42:52.339Z",
    slug: "deletsiia-11q22-atm-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 641,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Делеція 11q22 (ATM) (FISH)",
        },
        {
          lang: "en",
          value: "Deletion 11q22 (ATM) (FISH)",
        },
      ],
    },
  },
  {
    id: "eceb7e34-b610-4e64-a1c1-85725cc59798",
    createdAt: "2025-02-06T13:42:51.691Z",
    slug: "deletsiia-13q12-rb1-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 554,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Deletion 13q12 (RB1) (FISH)",
        },
        {
          lang: "uk",
          value: "Делеція 13q12 (RB1) (FISH)",
        },
      ],
    },
  },
  {
    id: "ae7ef760-ec5f-4538-b28b-180cf1d6b4de",
    createdAt: "2025-02-06T13:42:51.610Z",
    slug: "deletsiia-17p131-tp53-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 543,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Deletion 17p13.1 (TP53) (FISH)",
        },
        {
          lang: "uk",
          value: "Делеція 17p13.1 (TP53) (FISH)",
        },
      ],
    },
  },
  {
    id: "fe175594-5fb7-4cc4-a738-dc952dacec19",
    createdAt: "2025-02-06T13:42:51.640Z",
    slug: "deletsiia-17p131-tp53-ta-11q22-atm-ta-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 547,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Делеція 17p13.1 (TP53) та 11q22 (ATM) та (FISH)",
        },
        {
          lang: "en",
          value: "Deletion 17p13.1 (TP53) and 11q22 (ATM) (FISH)",
        },
      ],
    },
  },
  {
    id: "c4cedcd1-31e1-454d-9eb7-029d509345d2",
    createdAt: "2025-02-06T13:42:52.394Z",
    slug: "deletsiia-19q13-dlia-pukhlyn-holovnoho-mozku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 649,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Делеція 19q13 для пухлин головного мозку",
        },
        {
          lang: "en",
          value: "Deletion 19q13 for brain tumors",
        },
      ],
    },
  },
  {
    id: "4efc461d-b58d-4b38-9821-90f2ea2d8157",
    createdAt: "2025-02-06T13:42:52.283Z",
    slug: "deletsiia-1r36-dlia-pukhlyn-holovnoho-mozku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 633,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Deletion 1p36 for brain tumors",
        },
        {
          lang: "uk",
          value: "Делеція 1р36 для пухлин головного мозку",
        },
      ],
    },
  },
  {
    id: "b57ceb0a-9092-46ae-9c5f-346ba44d7b37",
    createdAt: "2025-02-06T13:42:51.925Z",
    slug: "deletsiia-20q12-ptprtmybl2-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 586,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Deletion 20q12 (PTPRT/MYBL2) (FISH)",
        },
        {
          lang: "uk",
          value: "Делеція 20q12 (PTPRT/MYBL2) (FISH)",
        },
      ],
    },
  },
  {
    id: "73d7888a-27a8-4bd5-82de-6707355dd4c0",
    createdAt: "2025-02-06T13:42:51.439Z",
    slug: "deletsiia-5q312-egr15p15-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 521,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Deletion 5q31.2 (EGR1/5p15) (FISH)",
        },
        {
          lang: "uk",
          value: "Делеція 5q31.2 (EGR1/5p15) (FISH)",
        },
      ],
    },
  },
  {
    id: "ca43ec1c-736a-476f-a789-2d5acc004561",
    createdAt: "2025-02-06T13:42:51.756Z",
    slug: "deletsiia-7q-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 563,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Deletion 7q (FISH)",
        },
        {
          lang: "uk",
          value: "Делеція 7q (FISH)",
        },
      ],
    },
  },
  {
    id: "3bbdbd88-43fe-4882-babc-bcbc4eb52bca",
    createdAt: "2025-02-06T13:42:51.661Z",
    slug: "deletsiiaamplifikatsiia-6p25-rreb1-ta-6q23-myb",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 550,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Deletion/amplification 6p25 (RREB1) and 6q23 (MYB)",
        },
        {
          lang: "uk",
          value: "Делеція/ампліфікація 6p25 (RREB1) та 6q23 (MYB)",
        },
      ],
    },
  },
  {
    id: "7666b95e-2a80-4748-bef0-635f92d2926b",
    createdAt: "2025-02-20T19:04:15.709Z",
    slug: "dennyi-statsionar-perebuvannia-do-4-hodyn",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 1500,
    onlinePrice: null,
    foreignId: 2708,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Day hospital (stay up to 4 hours)",
        },
        {
          lang: "uk",
          value: "Денний стаціонар (перебування до 4 годин)",
        },
      ],
    },
  },
  {
    id: "8a1a9bca-be51-4f28-af62-ab1adf406c84",
    createdAt: "2025-02-06T13:42:49.738Z",
    slug: "dyhidrotestosteron-dht",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 311,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Dihydrotestosterone (DHT)",
        },
        {
          lang: "uk",
          value: "Дигідротестостерон (ДГТ)",
        },
      ],
    },
  },
  {
    id: "f884ee88-9ac0-4944-aee7-ad6f0882eb50",
    createdAt: "2025-02-06T13:42:48.220Z",
    slug: "dystantsiina-konsultatsiia-zoom",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 250,
    onlinePrice: 0,
    foreignId: 22,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Remote consultation (Zoom)",
        },
        {
          lang: "uk",
          value: "Дистанційна консультація (Zoom)",
        },
      ],
    },
  },
  {
    id: "48f89868-42a9-4fdd-a5c2-942a8c493c15",
    createdAt: "2025-02-20T19:04:13.420Z",
    slug: "dytiachyi-masazh-kintsivok-20-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 990,
    onlinePrice: null,
    foreignId: 2683,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дитячий масаж кінцівок *20 хв.",
        },
        {
          lang: "en",
          value: "Pediatric limb massage *20 min.",
        },
      ],
    },
  },
  {
    id: "5201a5dd-5c8b-4822-b435-8844377d3f82",
    createdAt: "2025-02-20T19:04:10.265Z",
    slug: "dytiachyi-masazh-spyny-20-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 1120,
    onlinePrice: null,
    foreignId: 2682,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дитячий масаж спини *20 хв.",
        },
        {
          lang: "en",
          value: "Pediatric back massage *20 min.",
        },
      ],
    },
  },
  {
    id: "1b5670be-9758-4409-a87e-641a83fb5d60",
    createdAt: "2025-02-20T19:04:10.069Z",
    slug: "dytiachyi-masazh-shyinokomirtsevoyi-dilianky-20-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 600,
    onlinePrice: null,
    foreignId: 2681,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pediatric neck-collar zone massage *20 min.",
        },
        {
          lang: "uk",
          value: "Дитячий масаж шийно-комірцевої ділянки *20 хв.",
        },
      ],
    },
  },
  {
    id: "92a77848-a58f-42eb-b318-4f3b056ffb9e",
    createdAt: "2025-02-06T13:42:50.193Z",
    slug: "dyfteriia-corynebacterium-diphtheriae-anatoksyn-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 371,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diphtheria (Corynebacterium diphtheriae), toxoid, IgG antibodies",
        },
        {
          lang: "uk",
          value:
            "Дифтерія (CoryneBacterium diphtheriae), анатоксин, антитіла IgG",
        },
      ],
    },
  },
  {
    id: "51eb99ce-3ced-49ef-af50-8b8de4a47ad8",
    createdAt: "2025-02-20T19:04:09.918Z",
    slug: "diahnostyka-apnoe-snu-ambulatorna-polisomnohrafiia",
    sectionId: "79a07efe-e004-4cfc-aae1-533b985b21c3",
    price: 5700,
    onlinePrice: null,
    foreignId: 6413,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Sleep apnea diagnosis (ambulatory polysomnography)",
        },
        {
          lang: "uk",
          value: "Діагностика апное сну (амбулаторна полісомнографія)",
        },
      ],
    },
  },
  {
    id: "fd94ad2d-c410-4976-b05b-dd7cb78ca77c",
    createdAt: "2025-02-06T13:42:50.137Z",
    slug: "diahnostyka-vypitnykh-ridyn-pry-metastatychnykh-protsesakh-imunotsytokhimiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 364,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of effusion fluids in metastatic processes, immunocytochemistry",
        },
        {
          lang: "uk",
          value:
            "Діагностика випітних рідин при метастатичних процесах, імуноцитохімія",
        },
      ],
    },
  },
  {
    id: "8211018c-a72f-4963-b5cf-16d57432045f",
    createdAt: "2025-02-06T13:42:52.437Z",
    slug: "diahnostyka-vysokoahresyvnoyi-vklitynnoyi-limfomy-fish-translokatsiyi-t1418-bcl2-t314-bcl6-t814-mys",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 655,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Діагностика високоагресивної В-клітинної лімфоми (FISH). Транслокації t(14;18) (BCL2), t(3;14) (BCL6), t(8;14) (MYС)",
        },
        {
          lang: "en",
          value:
            "Diagnosis of highly aggressive B-cell lymphoma (FISH). Translocations t(14;18) (BCL2), t(3;14) (BCL6), t(8;14) (MYC)",
        },
      ],
    },
  },
  {
    id: "71ab616c-3e29-4722-b9df-2a95a22ce462",
    createdAt: "2025-02-06T13:42:49.731Z",
    slug: "diahnostyka-hostrykh-leikoziv-tsytomorfolohichne-doslidzhennia-imunofenotyp-tsytokhimichne-vstanovle",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 310,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of acute leukemias (cytomorphological examination, immunophenotyping, cytochemical determination of FAB variant)",
        },
        {
          lang: "uk",
          value:
            "Діагностика гострих лейкозів (цитоморфологічне дослідження, імунофенотип, цитохімічне встановлення FAB-варіанту)",
        },
      ],
    },
  },
  {
    id: "95345238-5bdc-4bc7-bf16-4062ca5eca27",
    createdAt: "2025-02-06T13:42:49.770Z",
    slug: "diahnostyka-hostrykh-leikoziv-tsytomorfolohichne-doslidzhennia-imunofenotyp",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 315,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Діагностика гострих лейкозів (цитоморфологічне дослідження, імунофенотип)",
        },
        {
          lang: "en",
          value:
            "Diagnosis of acute leukemias (cytomorphological examination, immunophenotyping)",
        },
      ],
    },
  },
  {
    id: "9a60dbfc-00a3-4ef1-b021-12dbb56d855b",
    createdAt: "2025-02-06T13:42:52.481Z",
    slug: "diahnostyka-hostroyi-vlimfoblastnoyi-leikemiyi-fish-translokatsiyi-t922q341q112-bcrabl1-12p13-etv6-1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 661,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of acute B-lymphoblastic leukemia (FISH). Translocations t(9;22)(q34.1;q11.2) (BCR/ABL1), 12p13 (ETV6), 11q23 KMT2A (MLL)",
        },
        {
          lang: "uk",
          value:
            "Діагностика гострої В-лімфобластної лейкемії (FISH). Транслокації t(9;22)(q34.1;q11.2) (BCR/ABL1), 12p13 (ETV6), 11q23 KMT2A (MLL)",
        },
      ],
    },
  },
  {
    id: "f3f8bfb6-76b8-4136-90eb-ddee7361d365",
    createdAt: "2025-02-06T13:42:52.559Z",
    slug: "diahnostyka-hostroyi-miieloblastnoyi-leikemiyi-bazova-fish-translokatsiyi-t821-runx1runx1t1-inv16p11",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 672,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Діагностика гострої мієлобластної лейкемії (базова) (FISH). Транслокації t(8;21) (RUNX1/RUNX1T1), inv(16)(p11q22)/t(16;16) (CBFB/MYH11), 11q23 KMT2A (MLL)",
        },
        {
          lang: "en",
          value:
            "Diagnosis of acute myeloid leukemia (basic) (FISH). Translocations t(8;21) (RUNX1/RUNX1T1), inv(16)(p11q22)/t(16;16) (CBFB/MYH11), 11q23 KMT2A (MLL)",
        },
      ],
    },
  },
  {
    id: "cc8c5ac7-094c-4ee3-bbe4-984c16c12bcf",
    createdAt: "2025-02-06T13:42:52.664Z",
    slug: "diahnostyka-hostroyi-miieloblastnoyi-leikemiyi-maksymum-fish-translokatsiyi-t821runx1runx1t1-inv16p1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 683,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of acute myeloid leukemia (maximum) (FISH). Translocations t(8;21)(RUNX1/RUNX1T1), inv(16)(p11q22)/t(16;16) (CBFB/MYH11), 11q23 KMT2A (MLL), t(15;17) (PML/RARA), t(9;22) (BCR/ABL1), inv(3)(q21q26.2), t(3;3)(q21;q26.2) (GATA2/MECOM), 9q34 (NUP214)",
        },
        {
          lang: "uk",
          value:
            "Діагностика гострої мієлобластної лейкемії (максимум) (FISH). Транслокації t(8;21)(RUNX1/RUNX1T1), inv(16)(p11q22)/t(16;16) (CBFB/MYH11), 11q23 KMT2A (MLL), t(15;17) (PML/RARA), t(9;22) (BCR/ABL1), inv(3)(q21q26.2), t(3;3)(q21;q26.2) (GATA2/MECOM), 9q34 (NUP214)",
        },
      ],
    },
  },
  {
    id: "eb3f5362-c528-40a7-95bf-1a2caa064c59",
    createdAt: "2025-02-06T13:42:52.590Z",
    slug: "diahnostyka-hostroyi-miieloblastnoyi-leikemiyi-standart-fish-translokatsiyi-t821runx1runx1t1-inv16p1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 676,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Діагностика гострої мієлобластної лейкемії (стандарт) (FISH). Транслокації t(8;21)(RUNX1/RUNX1T1), inv(16)(p11q22)/t(16;16) (CBFB/MYH11), 11q23 KMT2A (MLL), t(15;17) (PML/RARA), t(9;22) (BCR/ABL1)",
        },
        {
          lang: "en",
          value:
            "Diagnosis of acute myeloid leukemia (standard) (FISH). Translocations t(8;21)(RUNX1/RUNX1T1), inv(16)(p11q22)/t(16;16) (CBFB/MYH11), 11q23 KMT2A (MLL), t(15;17) (PML/RARA), t(9;22) (BCR/ABL1)",
        },
      ],
    },
  },
  {
    id: "054f5508-4014-4a23-b8e4-1e3f2356bc41",
    createdAt: "2025-02-20T19:04:13.624Z",
    slug: "diahnostyka-dytiachobatkivskykh-stosunkiv-2-hodyny",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 2500,
    onlinePrice: null,
    foreignId: 6386,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Diagnosis of parent-child relationships (2 hours)",
        },
        {
          lang: "uk",
          value: "Діагностика дитячо-батьківських стосунків (2 години)",
        },
      ],
    },
  },
  {
    id: "8bc77d53-27f3-4c25-871d-0c4e14057518",
    createdAt: "2025-02-06T13:42:49.701Z",
    slug: "diahnostyka-limfoproliferatyvnykh-zakhvoriuvan-tsytomorfolohichne-doslidzhennia-imunofenotyp",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 306,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Діагностика лімфопроліферативних захворювань (цитоморфологічне дослідження, імунофенотип)",
        },
        {
          lang: "en",
          value:
            "Diagnosis of lymphoproliferative disorders (cytomorphological examination, immunophenotyping)",
        },
      ],
    },
  },
  {
    id: "a1709d17-203b-4ebc-bbd4-e47ff4acf11b",
    createdAt: "2025-02-06T13:42:52.741Z",
    slug: "diahnostyka-miielodysplastychnoho-syndromu-bazova-fish-deletsiia-5q-7q",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 689,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Діагностика мієлодиспластичного синдрому (базова) (FISH). Делеція 5q, 7q",
        },
        {
          lang: "en",
          value:
            "Diagnosis of myelodysplastic syndrome (basic) (FISH). Deletion 5q, 7q",
        },
      ],
    },
  },
  {
    id: "d23c7b80-4f96-4a76-bbdf-61dfb7f8d1e6",
    createdAt: "2025-02-06T13:42:52.816Z",
    slug: "diahnostyka-miielodysplastychnoho-syndromu-maksymum-fish-deletsiia-5q-7q-11q-17p-20q",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 696,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of myelodysplastic syndrome (maximum) (FISH). Deletion 5q, 7q, 11q, 17p, 20q",
        },
        {
          lang: "uk",
          value:
            "Діагностика мієлодиспластичного синдрому (максимум) (FISH). Делеція 5q, 7q, 11q, 17p, 20q",
        },
      ],
    },
  },
  {
    id: "33ebf4f8-4a83-4edd-ab84-aa718ec19c02",
    createdAt: "2025-02-06T13:42:52.786Z",
    slug: "diahnostyka-miielodysplastychnoho-syndromu-standart-fish-deletsiia-5q-7q-17p",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 693,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Діагностика мієлодиспластичного синдрому (стандарт) (FISH). Делеція 5q, 7q, 17p",
        },
        {
          lang: "en",
          value:
            "Diagnosis of myelodysplastic syndrome (standard) (FISH). Deletion 5q, 7q, 17p",
        },
      ],
    },
  },
  {
    id: "82c2a36d-d63d-4e38-9516-f62bb7c85e06",
    createdAt: "2025-02-06T13:42:52.852Z",
    slug: "diahnostyka-miielomnoyi-khvoroby-i-etap-fish-translokatsiia-14q32-igh-deletsiia-13q12-17p13-1q211p32",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 701,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of multiple myeloma (Stage I) (FISH). Translocation 14q32 (IGH), deletion 13q12, 17p13, 1q21/1p32)****",
        },
        {
          lang: "uk",
          value:
            "Діагностика мієломної хвороби (І етап) (FISH). Транслокація 14q32 (IGH), делеція 13q12, 17p13, 1q21/1p32)****",
        },
      ],
    },
  },
  {
    id: "7b703916-5258-493f-9d0d-922555e7877e",
    createdAt: "2025-02-06T13:42:52.883Z",
    slug: "diahnostyka-miielomnoyi-khvoroby-ii-etap-fish-translokatsiyi-t1420-mafbigh-t1416-mafigh-t414-fgfr3ig",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 705,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of multiple myeloma (Stage II) (FISH). Translocations t(14;20) (MAFB/IGH), t(14;16) (MAF/IGH), t(4;14) FGFR3/IGH, t(11;14) (CCND1/IGH)****",
        },
        {
          lang: "uk",
          value:
            "Діагностика мієломної хвороби (ІІ етап) (FISH). Транслокації t(14;20) (MAFB/IGH), t(14;16) (MAF/IGH), t(4;14) FGFR3/IGH, t(11;14) (CCND1/IGH)****",
        },
      ],
    },
  },
  {
    id: "19ba16f9-9b03-4ffd-9e24-0b10ea4b9672",
    createdAt: "2025-02-06T13:42:52.920Z",
    slug: "diahnostyka-miielomnoyi-khvoroby-maksymum-fish-translokatsiyi-t1420-mafbigh-t1416-mafigh-t414-fgfr3i",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 710,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of multiple myeloma (maximum) (FISH). Translocations t(14;20) (MAFB/IGH), t(14;16) (MAF/IGH), t(4;14) FGFR3/IGH, t(11;14) (CCND1/IGH), deletion 13q12, 17p13, 1q21/1p32)****",
        },
        {
          lang: "uk",
          value:
            "Діагностика мієломної хвороби (максимум) (FISH). Транслокації t(14;20) (MAFB/IGH), t(14;16) (MAF/IGH), t(4;14) FGFR3/IGH, t(11;14) (CCND1/IGH), делеція 13q12, 17p13, 1q21/1p32)****",
        },
      ],
    },
  },
  {
    id: "e601b068-faf2-4f48-ad54-2571416f38b8",
    createdAt: "2025-02-06T13:42:49.861Z",
    slug: "diahnostyka-miielomnoyi-khvoroby-tsytomorfolohichne-doslidzhennia-imunofenotyp-pidtverdzhennia-klona",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 327,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of multiple myeloma (cytomorphological examination, immunophenotyping, confirmation of clonality)",
        },
        {
          lang: "uk",
          value:
            "Діагностика мієломної хвороби (цитоморфологічне дослідження, імунофенотип, підтвердження клональності)",
        },
      ],
    },
  },
  {
    id: "b499b093-9e38-469d-bbb6-94ba4038d82d",
    createdAt: "2025-02-20T19:04:13.566Z",
    slug: "diahnostyka-tryvozhnykh-ta-depresyvnykh-staniv-u-ditei-ta-pidlitkiv-2-hodyny",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 2500,
    onlinePrice: null,
    foreignId: 6385,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Diagnosis of anxiety and depressive states in children and adolescents (2 hours)",
        },
        {
          lang: "uk",
          value:
            "Діагностика тривожних та депресивних станів у дітей та підлітків (2 години)",
        },
      ],
    },
  },
  {
    id: "c1f9d0da-b3d5-4bb0-86e6-65522fa679f8",
    createdAt: "2025-02-20T19:04:13.600Z",
    slug: "diahnostyka-trudnoshchiv-navchannia-2-hodyny",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 2500,
    onlinePrice: null,
    foreignId: 6384,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Діагностика труднощів навчання (2 години)",
        },
        {
          lang: "en",
          value: "Diagnosis of learning difficulties (2 hours)",
        },
      ],
    },
  },
  {
    id: "0cebd80c-5bd7-4735-a5f3-27c237d7b735",
    createdAt: "2025-02-06T13:42:52.516Z",
    slug: "diahnostyka-khronichnoyi-vlimfotsytarnoyi-leikemiyi-fish-deletsiyi-17p131-tp53-11q22-atm-13q12-rb1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 666,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Діагностика хронічної В-лімфоцитарної лейкемії (FISH). Делеції 17p13.1 (TP53), 11q22 (ATM), 13q12 (RB1)",
        },
        {
          lang: "en",
          value:
            "Diagnosis of chronic B-cell lymphocytic leukemia (FISH). Deletions 17p13.1 (TP53), 11q22 (ATM), 13q12 (RB1)",
        },
      ],
    },
  },
  {
    id: "6517ca15-b57a-487d-a8a0-05af12a4036a",
    createdAt: "2025-02-06T13:42:52.958Z",
    slug: "diahnostyka-shpits-nevusu-ta-melanomy-fish-4-proby-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 715,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Діагностика Шпіц невусу та меланоми, FISH (4 проби) \\ N",
        },
        {
          lang: "en",
          value: "Diagnosis of Spitz nevus and melanoma, FISH (4 probes) \\ N",
        },
      ],
    },
  },
  {
    id: "42cd1ed6-173d-4ecc-8425-bc4dbd12d187",
    createdAt: "2025-02-20T19:04:10.792Z",
    slug: "diahnostychne-vyshkribannia-kiuretazh-tservikalnoho-kanalu-protsedura",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 1800,
    onlinePrice: null,
    foreignId: 2580,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Діагностичне вишкрібання (кюретаж) цервікального каналу (процедура)",
        },
        {
          lang: "en",
          value: "Diagnostic curettage of the cervical canal (procedure)",
        },
      ],
    },
  },
  {
    id: "96ee7f45-5125-4c0c-902e-5bd35f0e9978",
    createdAt: "2025-02-20T19:04:13.346Z",
    slug: "diadynamoterapiia-1-zona-15-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 480,
    onlinePrice: null,
    foreignId: 6390,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Diadynamic therapy (1 zone, 15 min.)",
        },
        {
          lang: "uk",
          value: "Діадинамотерапія (1 зона, 15 хв.)",
        },
      ],
    },
  },
  {
    id: "26e7a514-8fb3-4dd1-9e68-0f0355c8231d",
    createdAt: "2025-02-06T13:42:51.214Z",
    slug: "dnk-virusu-epshteinbarra-ebv-cish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 495,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "ДНК вірусу Епштейн-Барра (EBV) (CISH)",
        },
        {
          lang: "en",
          value: "DNA of Epstein-Barr virus (EBV) (CISH)",
        },
      ],
    },
  },
  {
    id: "91c46e68-dd81-46fd-8512-a62f08ac3237",
    createdAt: "2025-02-20T19:04:15.580Z",
    slug: "dobovyi-monitorynh-at",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 1880,
    onlinePrice: null,
    foreignId: 2622,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Добовий моніторинг АТ",
        },
        {
          lang: "en",
          value: "24-hour blood pressure monitoring",
        },
      ],
    },
  },
  {
    id: "c22ed31a-7ce2-4ca0-a79a-75c2c361980e",
    createdAt: "2025-02-20T19:04:15.064Z",
    slug: "dobovyi-monitorynh-at-2-doby",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 3000,
    onlinePrice: null,
    foreignId: 6341,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "48-hour blood pressure monitoring",
        },
        {
          lang: "uk",
          value: "Добовий моніторинг АТ (2 доби)",
        },
      ],
    },
  },
  {
    id: "cb80b6d6-30b8-441b-b9ab-ee67d1684007",
    createdAt: "2025-02-20T19:04:15.072Z",
    slug: "dobovyi-monitorynh-at-3-doby",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 3000,
    onlinePrice: 0,
    foreignId: 6342,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "72-hour blood pressure monitoring",
        },
        {
          lang: "uk",
          value: "Добовий моніторинг АТ (3 доби)",
        },
      ],
    },
  },
  {
    id: "2954f62b-84de-4081-924c-a8daaaa621e7",
    createdAt: "2025-02-20T19:04:13.366Z",
    slug: "dobovyi-monitorynh-at-4-doby",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 4000,
    onlinePrice: 0,
    foreignId: 6369,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Добовий моніторинг АТ (4 доби)",
        },
        {
          lang: "en",
          value: "96-hour blood pressure monitoring",
        },
      ],
    },
  },
  {
    id: "8d433bd6-d13e-4dfb-8898-d9ae4cde2ecf",
    createdAt: "2025-02-20T19:04:14.364Z",
    slug: "dobovyi-monitorynh-at-5-dib",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 5000,
    onlinePrice: 0,
    foreignId: 6343,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Добовий моніторинг АТ (5 діб)",
        },
        {
          lang: "en",
          value: "120-hour blood pressure monitoring",
        },
      ],
    },
  },
  {
    id: "80b888c6-9278-4598-8ae7-cc1de81d2109",
    createdAt: "2025-02-20T19:04:15.587Z",
    slug: "dobovyi-monitorynh-at-ta-ekh",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 3000,
    onlinePrice: null,
    foreignId: 2623,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Добовий моніторинг АТ та ЕКГ",
        },
        {
          lang: "en",
          value: "24-hour blood pressure and ECG monitoring",
        },
      ],
    },
  },
  {
    id: "3cbcdf72-db92-4815-9a8c-44fd62790c64",
    createdAt: "2025-02-20T19:04:13.467Z",
    slug: "dobovyi-monitorynh-ekh",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 2400,
    onlinePrice: null,
    foreignId: 2621,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "24-hour ECG monitoring",
        },
        {
          lang: "uk",
          value: "Добовий моніторинг ЕКГ",
        },
      ],
    },
  },
  {
    id: "181bec38-af1f-4155-94ec-197015e7add9",
    createdAt: "2025-02-20T19:04:15.047Z",
    slug: "dobovyi-monitorynh-ekh-2-doby",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 3600,
    onlinePrice: null,
    foreignId: 6338,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "48-hour ECG monitoring",
        },
        {
          lang: "uk",
          value: "Добовий моніторинг ЕКГ (2 доби)",
        },
      ],
    },
  },
  {
    id: "a5ddc92b-f532-4c27-afb4-2dd3e8c45343",
    createdAt: "2025-02-20T19:04:15.056Z",
    slug: "dobovyi-monitorynh-ekh-3-doby",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 4800,
    onlinePrice: null,
    foreignId: 6339,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Добовий моніторинг ЕКГ (3 доби)",
        },
        {
          lang: "en",
          value: "72-hour ECG monitoring",
        },
      ],
    },
  },
  {
    id: "225f2bd2-8875-4680-b7db-811651d49f4a",
    createdAt: "2025-02-20T19:04:14.338Z",
    slug: "dobovyi-monitorynh-ekh-4-doby",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 6500,
    onlinePrice: null,
    foreignId: 6370,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "96-hour ECG monitoring",
        },
        {
          lang: "uk",
          value: "Добовий моніторинг ЕКГ (4 доби)",
        },
      ],
    },
  },
  {
    id: "63b06a7f-eba2-4684-a3b8-1b87bc420660",
    createdAt: "2025-02-20T19:04:14.345Z",
    slug: "dobovyi-monitorynh-ekh-5-dib",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 7500,
    onlinePrice: 0,
    foreignId: 6340,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "120-hour ECG monitoring",
        },
        {
          lang: "uk",
          value: "Добовий моніторинг ЕКГ (5 діб)",
        },
      ],
    },
  },
  {
    id: "4e71223f-7dba-4fee-a25d-22b7ddcef50f",
    createdAt: "2025-02-06T13:42:49.610Z",
    slug: "dodatkove-vyhotovlennia-bloku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 294,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Додаткове виготовлення блоку",
        },
        {
          lang: "en",
          value: "Additional block preparation",
        },
      ],
    },
  },
  {
    id: "9a6d5036-7810-4c1f-9bfb-f077bec3a12a",
    createdAt: "2025-02-06T13:42:49.656Z",
    slug: "dodatkove-vyhotovlennia-histolohichnoho-preparatu-he-z-hotovoho-bloku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 300,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Додаткове виготовлення гістологічного препарату (г/е) з готового блоку",
        },
        {
          lang: "en",
          value:
            "Additional preparation of a histological specimen (H&E) from an existing block",
        },
      ],
    },
  },
  {
    id: "49186021-af59-43b5-9be3-347c3e4c3c09",
    createdAt: "2025-02-06T13:42:49.685Z",
    slug: "dodatkove-vyhotovlennia-zriziv-na-adhezyvnomu-skli",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 304,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Додаткове виготовлення зрізів на адгезивному склі",
        },
        {
          lang: "en",
          value: "Additional preparation of sections on adhesive slides",
        },
      ],
    },
  },
  {
    id: "3f2142ee-2bd5-497a-9471-dfcd64ba5e00",
    createdAt: "2025-02-20T19:04:15.530Z",
    slug: "doplerometriia-matkovoplatsentarnoplodovoho-krovoobihu-tilky-dlia-vahitnykh",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1200,
    onlinePrice: null,
    foreignId: 2590,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Doppler study of uteroplacental-fetal blood flow (for pregnant women only)",
        },
        {
          lang: "uk",
          value:
            "Доплерометрія матково-плацентарно-плодового кровообігу (тільки для вагітних)",
        },
      ],
    },
  },
  {
    id: "0d01cdb0-d9ac-4b4d-8b86-a5c9c6540c02",
    createdAt: "2025-04-05T17:43:27.813Z",
    slug: "doplerometriia-matkovoplatsentarnoplodovoho-krovoobihu-tilky-dlia-vahitnykh-2-plody",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1700,
    onlinePrice: null,
    foreignId: 6724,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Доплерометрія матково-плацентарно-плодового кровообігу (тільки для вагітних) - 2 плоди",
        },
      ],
    },
  },
  {
    id: "d03941f9-8283-4e36-a683-0338b156a97a",
    createdAt: "2025-02-06T13:42:50.144Z",
    slug: "doslidzhennia-abortyvnoho-materialu-do-12-tyzhniv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 365,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дослідження абортивного матеріалу (до 12 тижнів)",
        },
        {
          lang: "en",
          value: "Examination of abortive material (up to 12 weeks)",
        },
      ],
    },
  },
  {
    id: "516d530d-6e8f-45f5-981e-a9a361927225",
    createdAt: "2025-02-06T13:42:50.860Z",
    slug: "doslidzhennia-mikroflory-urohenitalnoho-traktu-u-zhinok-za-kryteriiamy-hayison-ta-shkaloiu-nugent",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 447,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Дослідження мікрофлори урогенітального тракту у жінок (за критеріями Hay-Ison та шкалою Nugent)",
        },
        {
          lang: "en",
          value:
            "Examination of urogenital tract microflora in women (according to Hay-Ison criteria and Nugent scale)",
        },
      ],
    },
  },
  {
    id: "11e1e065-7b1f-4789-ae10-6596c3f3c608",
    createdAt: "2025-02-06T13:42:51.179Z",
    slug: "doslidzhennia-platsenty",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 490,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дослідження плаценти",
        },
        {
          lang: "en",
          value: "Placenta examination",
        },
      ],
    },
  },
  {
    id: "220d41b0-0a93-4110-83d4-ac8adfb06581",
    createdAt: "2025-02-06T13:42:51.749Z",
    slug: "doslidzhennia-plidnykh-obolonok-pry-odnoplidnii-vahitnosti-z-12-tyzhniv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 562,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Examination of fetal membranes (in single pregnancy, from 12 weeks)",
        },
        {
          lang: "uk",
          value:
            "Дослідження плідних оболонок (при одноплідній вагітності, з 12 тижнів)",
        },
      ],
    },
  },
  {
    id: "dbb1d690-7d4c-4481-955e-94ac63db5dda",
    createdAt: "2025-02-06T13:42:52.843Z",
    slug: "doslidzhennia-plidnykh-obolonok-dikhorionichnykh-blyzniukiv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 700,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Examination of fetal membranes of dichorionic twins",
        },
        {
          lang: "uk",
          value: "Дослідження плідних оболонок діхоріонічних близнюків",
        },
      ],
    },
  },
  {
    id: "5e3bceda-7683-4ee3-8cd7-76c0f4ad3aed",
    createdAt: "2025-02-06T13:42:50.065Z",
    slug: "doslidzhennia-preparativ-kistkovoho-mozku-ta-krovi-na-hemoblastozy-tsytomorfolohichnyi-ta-tsytokhimi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 354,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Дослідження препаратів кісткового мозку та крові на гемобластози (цитоморфологічний та цитохімічний методи)",
        },
        {
          lang: "en",
          value:
            "Examination of bone marrow and blood preparations for hematological malignancies (cytomorphological and cytochemical methods)",
        },
      ],
    },
  },
  {
    id: "df96c573-9be6-4b4c-9a43-dbf9b4e2382f",
    createdAt: "2025-02-06T13:42:50.732Z",
    slug: "doslidzhennia-sekretu-prostaty",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 431,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Prostate secretion examination",
        },
        {
          lang: "uk",
          value: "Дослідження секрету простати",
        },
      ],
    },
  },
  {
    id: "5cc7cb54-88c8-45fc-a8eb-6a107d075171",
    createdAt: "2025-02-06T13:42:49.831Z",
    slug: "doslidzhennia-surohatnykh-markeriv-mutatsiinoho-statusu-heniv-varyabelnoho-rehionu-vazhkykh-lantsiuh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 323,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Дослідження сурогатних маркерів мутаційного статусу генів вариабельного регіону важких ланцюгів імуноглобулінів (IgVH-генів)",
        },
        {
          lang: "en",
          value:
            "Examination of surrogate markers of the mutational status of immunoglobulin heavy chain variable region genes (IgVH genes)",
        },
      ],
    },
  },
  {
    id: "a507cd96-86ec-4254-b30c-9df586cbc58b",
    createdAt: "2025-02-20T19:04:13.499Z",
    slug: "drenazhnyi-masazh-dlia-ditei-pislia-respiratornykh-zakhvoriuvannia-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 900,
    onlinePrice: null,
    foreignId: 2680,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Дренажний масаж для дітей після респіраторних захворювання *30хв.",
        },
        {
          lang: "en",
          value:
            "Drainage massage for children after respiratory illnesses *30 min.",
        },
      ],
    },
  },
  {
    id: "9d888441-fbf9-49b1-ab9a-c81556f3a67f",
    createdAt: "2025-03-27T11:03:25.447Z",
    slug: "drenuvannia-kisty-bartolinovoyi-zalozy",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 990,
    onlinePrice: null,
    foreignId: 6710,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дренування кісти бартолінової залози",
        },
      ],
    },
  },
  {
    id: "199d7666-c739-4f2e-b25b-0d19fd9f201f",
    createdAt: "2025-02-20T19:04:15.449Z",
    slug: "dupleksne-skanuvannia-sudyn-shyyi",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1320,
    onlinePrice: null,
    foreignId: 2534,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Дуплексне сканування судин шиї",
        },
        {
          lang: "en",
          value: "Duplex scanning of neck vessels",
        },
      ],
    },
  },
  {
    id: "e21a8040-f0ac-4ef2-85a8-e6c66f93c016",
    createdAt: "2025-02-20T19:04:15.457Z",
    slug: "dupleksne-skanuvannia-sudyn-peryferychni-sudyny-arteriyi-abo-veny-verkhnikh-kintsivok",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1240,
    onlinePrice: null,
    foreignId: 2538,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Дуплексне сканування судин: периферичні судини (артерії або вени) верхніх кінцівок",
        },
        {
          lang: "en",
          value:
            "Duplex scanning of vessels: peripheral vessels (arteries or veins) of the upper extremities",
        },
      ],
    },
  },
  {
    id: "13e16c25-5b2a-42a6-b330-d3476abcead6",
    createdAt: "2025-02-20T19:04:15.464Z",
    slug: "dupleksne-skanuvannia-sudyn-peryferychni-sudyny-arteriyi-abo-veny-nyzhnikh-kintsivok",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1240,
    onlinePrice: null,
    foreignId: 2539,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Дуплексне сканування судин: периферичні судини (артерії або вени) нижніх кінцівок",
        },
        {
          lang: "en",
          value:
            "Duplex scanning of vessels: peripheral vessels (arteries or veins) of the lower extremities",
        },
      ],
    },
  },
  {
    id: "19792531-77c5-400d-a4ca-e464b17b57af",
    createdAt: "2025-02-20T19:04:15.479Z",
    slug: "dupleksne-transkranialne-skanuvannia-sudyn-holovy",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1320,
    onlinePrice: null,
    foreignId: 2535,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Transcranial duplex scanning of head vessels",
        },
        {
          lang: "uk",
          value: "Дуплексне транскраніальне сканування судин голови",
        },
      ],
    },
  },
  {
    id: "6f0addde-3d08-42d1-b931-4bb635440aaf",
    createdAt: "2025-02-06T13:42:48.429Z",
    slug: "ekskretorna-urohrafiia",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 1400,
    onlinePrice: 0,
    foreignId: 40,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Екскреторна урографія",
        },
        {
          lang: "en",
          value: "Excretory urography",
        },
      ],
    },
  },
  {
    id: "b707c861-eb4f-4ef8-9c5d-967596f51fe0",
    createdAt: "2025-03-10T10:23:37.300Z",
    slug: "ekspres-test-vyznachennia-hrypu-av-nazalnyi",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 650,
    onlinePrice: null,
    foreignId: 4079,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Експрес-тест визначення грипу А+В (назальний)",
        },
        {
          lang: "en",
          value: "Express test for influenza A+B detection (nasal)",
        },
      ],
    },
  },
  {
    id: "f81f5f0a-a2ba-45a5-8f5d-9f38f3046995",
    createdAt: "2025-03-10T10:23:38.020Z",
    slug: "eksprestest-vyznachennia-streptokoku-hrupy-a",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 250,
    onlinePrice: null,
    foreignId: 4133,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Express test for Group A Streptococcus detection",
        },
        {
          lang: "uk",
          value: "Експрес-тест визначення Стрептококу групи А",
        },
      ],
    },
  },
  {
    id: "1b353e77-a5a7-4788-92eb-54729ced6a5b",
    createdAt: "2025-03-10T10:23:38.000Z",
    slug: "eksprestest-dlia-vyznachennia-vahitnosti-famil",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 250,
    onlinePrice: null,
    foreignId: 4139,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Експрес-тест для визначення вагітності FAMIL",
        },
        {
          lang: "en",
          value: "Express pregnancy test FAMIL",
        },
      ],
    },
  },
  {
    id: "9daa7294-7aad-4d06-b014-9a4aaaf31efd",
    createdAt: "2025-02-20T19:04:09.602Z",
    slug: "eksprestest-kombi-covid19hryp-a-vrespiratornosyntsytialnyi-virusadenovirusmycoplasma-pneumoniae",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 810,
    onlinePrice: null,
    foreignId: 6501,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Експрес-тест комбі (Covid-19/грип А + В/респіраторно-синцитіальний вірус/аденовірус/Mycoplasma pneumoniae",
        },
        {
          lang: "en",
          value:
            "Express combo test (Covid-19/influenza A + B/respiratory syncytial virus/adenovirus/Mycoplasma pneumoniae)",
        },
      ],
    },
  },
  {
    id: "fa8f7b6f-553b-465b-ba2d-9ce40301966a",
    createdAt: "2025-03-10T10:23:37.948Z",
    slug: "eksprestest-kombinovanyi-vil-12-hepatyt-v-i-s-syfilis",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 360,
    onlinePrice: null,
    foreignId: 4137,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Експрес-тест комбінований ВІЛ 1/2, гепатит В і С, сифіліс",
        },
        {
          lang: "en",
          value:
            "Express combined test for HIV 1/2, hepatitis B and C, syphilis",
        },
      ],
    },
  },
  {
    id: "fcd8f663-ce07-4ca7-9e03-b27aa1a2025e",
    createdAt: "2025-03-10T10:23:38.009Z",
    slug: "eksprestest-na-vyznachennia-vitaminu-d-tsilna-krov",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 390,
    onlinePrice: null,
    foreignId: 4135,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Експрес-тест на визначення  вітаміну D (цільна кров)",
        },
        {
          lang: "en",
          value: "Express test for vitamin D detection (whole blood)",
        },
      ],
    },
  },
  {
    id: "f9b10cab-1de4-4e1d-be02-f26c40d6e992",
    createdAt: "2025-03-10T10:23:38.037Z",
    slug: "eksprestest-na-vyznachennia-ferytynu-syrovatka-krov",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 420,
    onlinePrice: null,
    foreignId: 4134,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Express test for ferritin detection (serum/blood)",
        },
        {
          lang: "uk",
          value: "Експрес-тест на визначення  феритину (сироватка / кров)",
        },
      ],
    },
  },
  {
    id: "26016b37-9b55-4beb-8ed7-064e09656b55",
    createdAt: "2025-03-10T10:23:35.335Z",
    slug: "eksprestest-na-vyiavlennia-antytil-do-vil-12",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 250,
    onlinePrice: null,
    foreignId: 4136,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Express test for HIV 1/2 antibody detection",
        },
        {
          lang: "uk",
          value: "Експрес-тест на виявлення антитіл до ВІЛ 1/2",
        },
      ],
    },
  },
  {
    id: "e9a0b85a-c80b-49f1-abae-8d8cb785fe48",
    createdAt: "2025-03-10T10:23:37.386Z",
    slug: "eksprestest-na-vyiavlennia-sertsevoho-troponinu-i-krov",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 230,
    onlinePrice: null,
    foreignId: 4132,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Express test for cardiac Troponin I detection (blood)",
        },
        {
          lang: "uk",
          value: "Експрес-тест на виявлення серцевого Тропоніну І (кров)",
        },
      ],
    },
  },
  {
    id: "7f3b26c4-2c3b-47ce-913a-79255b30dbb4",
    createdAt: "2025-03-10T10:23:35.424Z",
    slug: "eksprestest-na-sreaktyvnyi-bilok",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 270,
    onlinePrice: null,
    foreignId: 6285,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Express test for C-reactive protein",
        },
        {
          lang: "uk",
          value: "Експрес-тест на С-реактивний білок",
        },
      ],
    },
  },
  {
    id: "fb4a7c76-3b39-463b-9d09-90c4cb734c7f",
    createdAt: "2025-03-10T10:23:34.202Z",
    slug: "eksprestest-na-covid19-antigen-rapid-test-device",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 339,
    onlinePrice: null,
    foreignId: 4131,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Експрес-тест на Covid-19 Antigen Rapid Test Device",
        },
        {
          lang: "en",
          value: "Express test for Covid-19 Antigen Rapid Test Device",
        },
      ],
    },
  },
  {
    id: "762fba79-350a-4341-9382-403cc6bf372a",
    createdAt: "2025-03-10T10:23:37.308Z",
    slug: "eksprestest-na-covid19-virus-hrypu-a-v",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 530,
    onlinePrice: null,
    foreignId: 4130,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Express test for Covid-19, influenza A + B viruses",
        },
        {
          lang: "uk",
          value: "Експрес-тест на Covid-19, вірус грипу А + В",
        },
      ],
    },
  },
  {
    id: "ad6a9a4a-817e-4530-9f0b-a9127dfcc20e",
    createdAt: "2025-03-10T10:23:37.316Z",
    slug: "eksprestest-sechi-11-pokaznykiv",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 80,
    onlinePrice: null,
    foreignId: 4128,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Експрес-тест сечі (11 показників)",
        },
        {
          lang: "en",
          value: "Express urine test (11 parameters)",
        },
      ],
    },
  },
  {
    id: "8a94f6aa-5ae0-41ea-b800-ef210de24510",
    createdAt: "2025-03-10T10:23:37.324Z",
    slug: "eksprestest-sechi-14pokaznykiv",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 110,
    onlinePrice: null,
    foreignId: 4129,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Експрес-тест сечі (14 показників)",
        },
        {
          lang: "en",
          value: "Express urine test (14 parameters)",
        },
      ],
    },
  },
  {
    id: "17dc4d8b-3a37-446d-b462-ab9dfb85a604",
    createdAt: "2025-02-06T13:42:49.975Z",
    slug: "ekstsyziina-biopsiia-pukhlyny-shkiry-z-otsinkoiu-krayiv-rezektsiyi-za-1-lokalizatsiiu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 342,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Excisional biopsy of a skin tumor with resection margin evaluation (per 1 location)",
        },
        {
          lang: "uk",
          value:
            "Ексцизійна біопсія пухлини шкіри з оцінкою країв резекції (за 1 локалізацію)",
        },
      ],
    },
  },
  {
    id: "fecab249-e2ad-4ccb-bcc4-a2f9f80c63de",
    createdAt: "2025-02-06T13:42:51.562Z",
    slug: "ekstsyziina-biopsiiapolipektomiia-polipiv-stravokhodu-do-5-utvoren-vkliuchno",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 537,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Excisional biopsy/polypectomy of esophageal polyps (up to 5 lesions included)",
        },
        {
          lang: "uk",
          value:
            "Ексцизійна біопсія/поліпектомія поліпів стравоходу (до 5 утворень включно)",
        },
      ],
    },
  },
  {
    id: "0eee1a55-a87c-45dc-8cf2-32d0b433f078",
    createdAt: "2025-02-06T13:42:51.061Z",
    slug: "ekstsyziinia-biopsiia-limfatychnoho-vuzla-1-lokalizatsiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 474,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Excisional biopsy of a lymph node (1 location)",
        },
        {
          lang: "uk",
          value: "Ексцизійніа біопсія лімфатичного вузла (1 локалізація)",
        },
      ],
    },
  },
  {
    id: "dde404d0-d4dc-4709-8320-c619a05265fa",
    createdAt: "2025-02-06T13:42:49.891Z",
    slug: "ekstsyziia-konizatsiia-shyiky-matky",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 331,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ексцизія/конізація шийки матки",
        },
        {
          lang: "en",
          value: "Excision/conization of the cervix",
        },
      ],
    },
  },
  {
    id: "6a24f345-55f7-48bf-8209-efbdc30d15ee",
    createdAt: "2025-02-20T19:04:11.970Z",
    slug: "elastohrafiia-hrudni-zalozylimfatychni-vuzlymiaki-tkanynynyrky-ta-sechovyi-mikhurorhiny-maloho-tazum",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1200,
    onlinePrice: null,
    foreignId: 2571,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Elastography (breast/lymph nodes/soft tissues/kidneys and bladder/pelvic organs/scrotum/abdominal organs/abdominal organs and kidneys/thyroid gland/prostate, residual urine, seminal vesicles, bladder)",
        },
        {
          lang: "uk",
          value: "Еластографія при УЗД",
        },
      ],
    },
  },
  {
    id: "d383e714-0f39-4506-8d1a-4db2fce03ac5",
    createdAt: "2025-02-20T19:04:15.559Z",
    slug: "elektrokardiohrama-ekh",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 610,
    onlinePrice: null,
    foreignId: 2620,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Електрокардіограма (ЕКГ)",
        },
        {
          lang: "en",
          value: "Electrocardiogram (ECG)",
        },
      ],
    },
  },
  {
    id: "cffb7a0d-b9b8-41c0-9a60-87733a209f91",
    createdAt: "2025-02-06T13:42:48.382Z",
    slug: "elektrokardiohrafiia",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 120,
    onlinePrice: 0,
    foreignId: 34,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Electrocardiography",
        },
        {
          lang: "uk",
          value: "Електрокардіографія",
        },
      ],
    },
  },
  {
    id: "102cce82-c91d-481c-a6d9-9b49437f00b3",
    createdAt: "2025-02-20T19:04:14.291Z",
    slug: "elektromiostymuliatsiia-1-zona-30-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 640,
    onlinePrice: null,
    foreignId: 6392,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Електроміостимуляція  (1 зона, 30 хв.)",
        },
        {
          lang: "en",
          value: "Electromyostimulation (1 zone, 30 min.)",
        },
      ],
    },
  },
  {
    id: "935c6a64-1084-4cda-b034-e20b6d1a5b0e",
    createdAt: "2025-02-20T19:04:13.338Z",
    slug: "elektromiostymuliatsiia-zahalna-miazy-spyny-zhyvota-plechei-stehon-sidnychni-miazy-60-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 1800,
    onlinePrice: null,
    foreignId: 6396,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Електроміостимуляція загальна (м'язи спини, живота, плечей, стегон, сідничні м'язи) (60 хв.)",
        },
        {
          lang: "en",
          value:
            "General electromyostimulation (back, abdominal, shoulder, thigh, gluteal muscles) (60 min.)",
        },
      ],
    },
  },
  {
    id: "988e6fbf-d8e9-4a14-9bb3-271c4c5eeae5",
    createdAt: "2025-02-20T19:04:13.097Z",
    slug: "elektroforez-1-zona-20-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 550,
    onlinePrice: null,
    foreignId: 6389,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Електрофорез (1 зона, 20 хв.)",
        },
        {
          lang: "en",
          value: "Electrophoresis (1 zone, 20 min.)",
        },
      ],
    },
  },
  {
    id: "9104b2dd-001e-408e-b12a-dd2a3fae7252",
    createdAt: "2025-02-20T19:04:13.263Z",
    slug: "elektroforez-z-vakuumom-1-zona-30-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 750,
    onlinePrice: null,
    foreignId: 6395,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vacuum electrophoresis (1 zone, 30 min.)",
        },
        {
          lang: "uk",
          value: "Електрофорез з вакуумом (1 зона, 30 хв.)",
        },
      ],
    },
  },
  {
    id: "81dbc4d0-954c-4537-bd12-cfb6004b1761",
    createdAt: "2025-02-06T13:42:53.727Z",
    slug: "endovazalna-lazerna-koahuliatsiia-varykoznykh-ven",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 9999,
    onlinePrice: 0,
    foreignId: 881,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Endovascular laser coagulation of varicose veins",
        },
        {
          lang: "uk",
          value: "Ендовазальна лазерна коагуляція варикозних вен",
        },
      ],
    },
  },
  {
    id: "30516e78-14e8-4c22-93d4-10d1b66643fd",
    createdAt: "2025-02-20T19:04:15.566Z",
    slug: "endoskopichna-diahnostyka-lor-orhaniv-1-zona-vukhozivnis",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 600,
    onlinePrice: null,
    foreignId: 2601,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ендоскопічна діагностика лор органів 1 зона (вухо/зів/ніс)",
        },
        {
          lang: "en",
          value:
            "Endoscopic diagnostics of ENT organs, 1 zone (ear/throat/nose)",
        },
      ],
    },
  },
  {
    id: "68d525b0-adda-4dcb-9241-6a7f244f69cb",
    createdAt: "2025-02-20T19:04:15.573Z",
    slug: "endoskopichna-diahnostyka-lor-orhaniv-2-zony-vukhozivnis",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 900,
    onlinePrice: null,
    foreignId: 2602,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ендоскопічна діагностика лор органів 2 зони (вухо/зів/ніс)",
        },
        {
          lang: "en",
          value:
            "Endoscopic diagnostics of ENT organs, 2 zones (ear/throat/nose)",
        },
      ],
    },
  },
  {
    id: "d97b6469-7027-4482-b643-d120de51c477",
    createdAt: "2025-02-20T19:04:09.644Z",
    slug: "endoskopichna-diahnostyka-lor-orhaniv-3-zony-vukhozivnis",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 1200,
    onlinePrice: null,
    foreignId: 2603,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Endoscopic diagnostics of ENT organs, 3 zones (ear, throat, nose)",
        },
        {
          lang: "uk",
          value: "Ендоскопічна діагностика лор органів 3 зони (вухо,зів,ніс)",
        },
      ],
    },
  },
  {
    id: "76e2a4d2-28df-4901-b5f0-844f39cf4424",
    createdAt: "2025-02-06T13:42:48.446Z",
    slug: "endosonohrafiia-pankreatobiliarnoyi-zony",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 1500,
    onlinePrice: 0,
    foreignId: 42,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Endosonography of the pancreatobiliary zone",
        },
        {
          lang: "uk",
          value: "Ендосонографія панкреатобіліарної зони",
        },
      ],
    },
  },
  {
    id: "ac766fb9-6db5-48a2-b999-081895e7994a",
    createdAt: "2025-02-06T13:42:53.571Z",
    slug: "endoftalmit-vyznachennia-aerobiv-z-abch-z-mis-mhl-z-punktatu-sklovydnoho-tila",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 843,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Endophthalmitis. Identification of aerobes with antibiotic sensitivity (MIC mg/L) from vitreous body puncture",
        },
        {
          lang: "uk",
          value:
            "Ендофтальміт. Визначення аеробів з АБЧ з МІС мг/л з пунктату скловидного тіла",
        },
      ],
    },
  },
  {
    id: "ca9fb9a7-d81e-4364-a48d-d869a3fe269c",
    createdAt: "2025-02-06T13:42:53.564Z",
    slug: "endoftalmit-vyznachennia-aerobiv-z-abch-z-mis-mhl-z-sekretu-z-koniunktyvalnoho-mishka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 842,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Endophthalmitis. Identification of aerobes with antibiotic sensitivity (MIC mg/L) from conjunctival sac secretion",
        },
        {
          lang: "uk",
          value:
            "Ендофтальміт. Визначення аеробів з АБЧ з МІС мг/л з секрету з кон'юнктивального мішка",
        },
      ],
    },
  },
  {
    id: "fee9a4da-8653-4adb-9ae3-374152074501",
    createdAt: "2025-02-06T13:42:50.874Z",
    slug: "epidemichnyi-parotyt-rubalavirus-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 449,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Epidemic parotitis (Rubulavirus), IgG",
        },
        {
          lang: "uk",
          value: "Епідемічний паротит (RuBalavirus),  IgG",
        },
      ],
    },
  },
  {
    id: "1d73274a-a95e-4f4f-bca4-3310b4c02f8b",
    createdAt: "2025-02-06T13:42:50.896Z",
    slug: "epidemichnyi-parotyt-rubalavirus-antytila-igm-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 452,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Epidemic parotitis (Rubulavirus), IgM antibodies \\ N",
        },
        {
          lang: "uk",
          value: "Епідемічний паротит (Rubalavirus), антитіла IgM \\ N",
        },
      ],
    },
  },
  {
    id: "7c7a3197-d6bb-425c-8327-32118f612395",
    createdAt: "2025-02-06T13:42:52.026Z",
    slug: "erytropoetyn-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 599,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Erythropoietin \\ N",
        },
        {
          lang: "uk",
          value: "Еритропоетин \\ N",
        },
      ],
    },
  },
  {
    id: "424296c4-0530-44a4-bb59-e2a4fb1d8251",
    createdAt: "2025-02-06T13:42:48.770Z",
    slug: "estradiol",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 77,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Естрадіол",
        },
        {
          lang: "en",
          value: "Estradiol",
        },
      ],
    },
  },
  {
    id: "ed8df067-3697-434e-b696-486f8ec8fd76",
    createdAt: "2025-02-06T13:42:49.745Z",
    slug: "estradiol-e2",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 312,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Естрадіол (E2)",
        },
        {
          lang: "en",
          value: "Estradiol (E2)",
        },
      ],
    },
  },
  {
    id: "b4b197cb-127d-459a-8f09-7c3119de2669",
    createdAt: "2025-02-06T13:42:51.331Z",
    slug: "estriol-vilnyi-e3-estriol-nekoniuhovanyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 510,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Free estriol (E3; unconjugated estriol)",
        },
        {
          lang: "uk",
          value: "Естріол вільний (E3; Естріол некон'югований)",
        },
      ],
    },
  },
  {
    id: "fd3378ee-3807-4b2f-a449-77e99f821e52",
    createdAt: "2025-02-06T13:42:49.796Z",
    slug: "estron-e1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 318,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Естрон (E1)",
        },
        {
          lang: "en",
          value: "Estrone (E1)",
        },
      ],
    },
  },
  {
    id: "53b47d5d-cfc0-41dd-a2c0-f1c630edc461",
    createdAt: "2025-02-06T13:42:50.351Z",
    slug: "ekhinokokoz-echinococcus-granulosus-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 392,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Echinococcosis (Echinococcus granulosus), IgG antibodies",
        },
        {
          lang: "uk",
          value: "Ехінококоз (Echinococcus granulosus), антитіла IgG",
        },
      ],
    },
  },
  {
    id: "25e61c0d-ceb2-4140-96f6-8d6627d97f62",
    createdAt: "2025-02-06T13:42:48.333Z",
    slug: "ekhokardiohrafiia",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 500,
    onlinePrice: 0,
    foreignId: 28,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ехокардіографія",
        },
        {
          lang: "en",
          value: "Echocardiography",
        },
      ],
    },
  },
  {
    id: "9f1a3f66-7562-4f7f-a61b-df4aa3069035",
    createdAt: "2025-02-20T19:04:10.342Z",
    slug: "ekhokardiohrafiia-uzd-sertsia",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1720,
    onlinePrice: null,
    foreignId: 2560,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Echocardiography (heart ultrasound)",
        },
        {
          lang: "uk",
          value: "Ехокардіографія (УЗД серця)",
        },
      ],
    },
  },
  {
    id: "0fe48861-f8b7-4bf7-a8c5-4741cfcd6f03",
    createdAt: "2025-02-06T13:42:48.936Z",
    slug: "zhinoche-zdorovia",
    sectionId: "ea7a19d4-3932-4f72-a6ec-3ca6e0bdba9d",
    price: 1500,
    onlinePrice: 0,
    foreignId: 99,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Жіноче здоров'я",
        },
        {
          lang: "en",
          value: "Women's health",
        },
      ],
    },
  },
  {
    id: "086efa17-6ee5-42e7-8363-5af5e5fa4be6",
    createdAt: "2025-02-20T19:04:15.544Z",
    slug: "zabir-aspirata-endometriiu-protsedura",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 3000,
    onlinePrice: null,
    foreignId: 2572,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Endometrial aspiration collection (procedure)",
        },
        {
          lang: "uk",
          value: "Забір аспірата ендометрію (процедура)",
        },
      ],
    },
  },
  {
    id: "3d449cd6-6e9d-4595-8b0e-4d2300294b88",
    createdAt: "2025-02-20T19:04:15.741Z",
    slug: "zabir-biolohichnoho-materialu-vdomav-ofisi-patsiienta-v-mezhakh-mista-kyyiv",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 390,
    onlinePrice: null,
    foreignId: 2724,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Забір біологічного матеріалу вдома/в офісі пацієнта (в межах міста Київ)",
        },
        {
          lang: "en",
          value:
            "Collection of biological material at the patient's home/office (within Kyiv city limits)",
        },
      ],
    },
  },
  {
    id: "c438f0c0-35f0-4d37-b38f-a4bb7db71e3f",
    createdAt: "2025-02-20T19:04:14.522Z",
    slug: "zabir-biolohichnoho-materialu-vdomav-ofisi-patsiienta-za-mezhamy-mista-kyyiv",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 700,
    onlinePrice: null,
    foreignId: 2723,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Collection of biological material at the patient's home/office (outside Kyiv city limits)",
        },
        {
          lang: "uk",
          value:
            "Забір біологічного матеріалу вдома/в офісі пацієнта (за межами міста Київ)",
        },
      ],
    },
  },
  {
    id: "fd63e8d4-06a1-4714-9f74-17dec4f9c3ba",
    createdAt: "2025-02-20T19:04:13.197Z",
    slug: "zabir-biolohichnoho-materialu-odnorazovymy-systemamy-krov",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 90,
    onlinePrice: null,
    foreignId: 2722,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Collection of biological material using disposable systems (blood)",
        },
        {
          lang: "uk",
          value: "Забір біологічного матеріалу одноразовими системами (кров)",
        },
      ],
    },
  },
  {
    id: "02080abc-49c9-4bc6-9424-298c04f0dbb5",
    createdAt: "2025-02-20T19:04:10.282Z",
    slug: "zabir-biolohichnoho-materialu-odnorazovymy-systemamy-urohenitalnyi",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 90,
    onlinePrice: null,
    foreignId: 2726,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Забір біологічного матеріалу одноразовими системами (урогенітальний)",
        },
        {
          lang: "en",
          value:
            "Collection of biological material using disposable systems (urogenital)",
        },
      ],
    },
  },
  {
    id: "cc2263a6-288f-45ef-9526-c41c8d7f36a8",
    createdAt: "2025-02-20T19:04:11.271Z",
    slug: "zabir-sechi-kateterom",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 260,
    onlinePrice: null,
    foreignId: 2715,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Urine collection by catheter",
        },
        {
          lang: "uk",
          value: "Забір сечі катетером",
        },
      ],
    },
  },
  {
    id: "7d9e824c-ca2d-45b2-818c-be69e8c30287",
    createdAt: "2025-02-06T13:42:48.485Z",
    slug: "zahalna-anesteziia",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 800,
    onlinePrice: 0,
    foreignId: 46,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "General anesthesia",
        },
        {
          lang: "uk",
          value: "Загальна анестезія",
        },
      ],
    },
  },
  {
    id: "29cca308-e663-4051-9835-dc1a4c2c8985",
    createdAt: "2025-02-06T13:42:53.698Z",
    slug: "zahalna-anesteziia-z-blokadoiu",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 3500,
    onlinePrice: 0,
    foreignId: 869,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "General anesthesia with nerve block",
        },
        {
          lang: "uk",
          value: "Загальна анестезія з блокадою",
        },
      ],
    },
  },
  {
    id: "d603efd2-09f8-48dc-8775-a8dfd9227e75",
    createdAt: "2025-02-06T13:42:51.999Z",
    slug: "zahalna-zalizozviazuiucha-zdibnist-syrovatky-zzzs-zalizo-nzzs-zzzs",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 595,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Total iron-binding capacity of serum (TIBC) (iron, UIBC, TIBC)",
        },
        {
          lang: "uk",
          value:
            "Загальна залізозв'язуюча здібність сироватки (ЗЗЗС) (залізо, НЗЗС, ЗЗЗС)",
        },
      ],
    },
  },
  {
    id: "a86e5f55-6ed0-4371-84be-9663b469e01b",
    createdAt: "2025-02-06T13:42:48.643Z",
    slug: "zahalnyi-analiz-krovi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 80,
    onlinePrice: 0,
    foreignId: 62,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Загальний аналіз крові",
        },
        {
          lang: "en",
          value: "Complete blood count",
        },
      ],
    },
  },
  {
    id: "f7638203-a4a2-4be5-8b5a-7921f46b39c8",
    createdAt: "2025-02-20T19:04:13.311Z",
    slug: "zahalnyi-analiz-krovi-hematolohichnyi-analizator",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 250,
    onlinePrice: null,
    foreignId: 5611,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Complete blood count (hematological analyzer)",
        },
        {
          lang: "uk",
          value: "Загальний аналіз крові (гематологічний аналізатор)",
        },
      ],
    },
  },
  {
    id: "5def9827-39e2-43d2-84dc-2c5b30bb87b1",
    createdAt: "2025-02-06T13:42:52.353Z",
    slug: "zahalnyi-analiz-krovi-leikotsytarna-formula-shoe",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 643,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Complete blood count (leukocyte differential + ESR)",
        },
        {
          lang: "uk",
          value: "Загальний аналіз крові (лейкоцитарна формула + ШОЕ)",
        },
      ],
    },
  },
  {
    id: "5ea58871-74a1-4e35-995a-d4741f33d069",
    createdAt: "2025-02-06T13:42:52.367Z",
    slug: "zahalnyi-analiz-krovi-shoe-1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: null,
    foreignId: 645,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Загальний аналіз крові (ШОЕ)",
        },
      ],
    },
  },
  {
    id: "7986e0a1-1cf7-4332-9ffb-7e357a64541c",
    createdAt: "2025-02-06T13:42:48.626Z",
    slug: "zahalnyi-analiz-krovi-shoe",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 60,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Complete blood count + ESR",
        },
        {
          lang: "uk",
          value: "Загальний аналіз крові + ШОЕ",
        },
      ],
    },
  },
  {
    id: "aac4fa1c-33a8-4d97-9e6a-9ed8b92f848c",
    createdAt: "2025-02-06T13:42:48.634Z",
    slug: "zahalnyi-analiz-sechi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 50,
    onlinePrice: 0,
    foreignId: 61,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Загальний аналіз сечі",
        },
        {
          lang: "en",
          value: "General urine analysis",
        },
      ],
    },
  },
  {
    id: "42eab8bc-06d9-45f1-bd4a-94c03c3c3b87",
    createdAt: "2025-02-06T13:42:48.701Z",
    slug: "zahalnyi-bilirubin",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 30,
    onlinePrice: 0,
    foreignId: 69,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Загальний білірубін",
        },
        {
          lang: "en",
          value: "Total bilirubin",
        },
      ],
    },
  },
  {
    id: "763a8958-c889-48a6-a7e3-8ca9e2dfe40b",
    createdAt: "2025-02-20T19:04:10.320Z",
    slug: "zahalnyi-likuvalnyi-masazh-zadnia-poverkhnia-nyzhni-kintsivkystopy-spyna-ruky-80khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 2400,
    onlinePrice: null,
    foreignId: 2670,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Загальний лікувальний масаж (задня поверхня: нижні кінцівки,стопи, спина, руки) *80хв.",
        },
        {
          lang: "en",
          value:
            "General therapeutic massage (posterior surface: lower limbs, feet, back, arms) *80 min.",
        },
      ],
    },
  },
  {
    id: "78d7c552-b9e3-458c-8141-30e7f7fe2d0f",
    createdAt: "2025-02-20T19:04:14.717Z",
    slug: "zahalnyi-ozdorovchyi-masazh-zadnia-poverkhnia-nyzhni-kintsivkystopy-spyna-ruky-60khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 1700,
    onlinePrice: null,
    foreignId: 2674,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "General wellness massage (posterior surface: lower limbs, feet, back, arms) *60 min.",
        },
        {
          lang: "uk",
          value:
            "Загальний оздоровчий масаж (задня поверхня: нижні кінцівки,стопи, спина, руки) *60хв.",
        },
      ],
    },
  },
  {
    id: "2bf0b792-93d7-4be9-8a2c-e5c411b52d50",
    createdAt: "2025-02-06T13:42:53.620Z",
    slug: "zakliuchennia-fibrotestfibromaks",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 850,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "FibroTest/FibroMax report",
        },
        {
          lang: "uk",
          value: "Заключення Фібротест/Фібромакс",
        },
      ],
    },
  },
  {
    id: "3d3ce98c-ff0f-4749-b33f-e02a0daf4520",
    createdAt: "2025-02-06T13:42:51.958Z",
    slug: "zalizo-syrovatka-fe",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 590,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Залізо (сироватка) / Fe",
        },
        {
          lang: "en",
          value: "Iron (serum) / Fe",
        },
      ],
    },
  },
  {
    id: "e0d46ef2-1713-4224-92b8-59a09065a26b",
    createdAt: "2025-02-06T13:42:49.034Z",
    slug: "zdacha-spermy",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 0,
    onlinePrice: 0,
    foreignId: 154,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Semen collectionv",
        },
        {
          lang: "uk",
          value: "Здача сперми",
        },
      ],
    },
  },
  {
    id: "6850a229-5c74-492a-90df-d78606e67a9a",
    createdAt: "2025-02-20T19:04:14.198Z",
    slug: "zniattia-shviv",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 630,
    onlinePrice: null,
    foreignId: 2629,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Suture removal",
        },
        {
          lang: "uk",
          value: "Зняття швів",
        },
      ],
    },
  },
  {
    id: "69e73dbd-514a-4b7d-bd14-cda912611863",
    createdAt: "2025-02-20T19:04:11.173Z",
    slug: "zniattia-shviv-z-ran-lorlokalizatsiyi",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 600,
    onlinePrice: null,
    foreignId: 2610,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Suture removal from ENT-localized wounds",
        },
        {
          lang: "uk",
          value: "Зняття швів з ран ЛОР-локалізації",
        },
      ],
    },
  },
  {
    id: "8faf01ce-5b04-4683-8b0b-54803cf427a0",
    createdAt: "2025-02-20T19:04:11.253Z",
    slug: "ztsidzhuvannia-molochnoyi-zalozy-u-mts",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 1200,
    onlinePrice: null,
    foreignId: 2713,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Зціджування молочної залози у МЦ",
        },
        {
          lang: "en",
          value: "Breast milk expression at the medical center",
        },
      ],
    },
  },
  {
    id: "fe2e8b9f-76c1-4537-a9aa-7cb5bb2e1c7f",
    createdAt: "2025-02-20T19:04:13.355Z",
    slug: "impulsnyi-vakuum-1-zona-30-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 660,
    onlinePrice: null,
    foreignId: 6393,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Імпульсний вакуум (1 зона, 30 хв.)",
        },
        {
          lang: "en",
          value: "Pulsed vacuum (1 zone, 30 min.)",
        },
      ],
    },
  },
  {
    id: "4edf43e3-4741-4b53-9939-64201c94810d",
    createdAt: "2025-02-20T19:04:13.662Z",
    slug: "iniektsiina-terapiia-suhlobiv-1-iniektsiia",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1200,
    onlinePrice: null,
    foreignId: 5632,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Joint injection therapy (1 injection)",
        },
        {
          lang: "uk",
          value: "Ін'єкційна терапія суглобів (1 ін'єкція)",
        },
      ],
    },
  },
  {
    id: "cd4ddd00-8f3a-4122-8348-8c6c9cceb57d",
    createdAt: "2025-02-20T19:04:15.687Z",
    slug: "iniektsiia-vnutrishnomiazova-pidshkirna-vnutrishnoshkirna",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 190,
    onlinePrice: null,
    foreignId: 2699,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ін’єкція внутрішньом’язова, підшкірна, внутрішньошкірна",
        },
        {
          lang: "en",
          value: "Intramuscular, subcutaneous, intradermal injection",
        },
      ],
    },
  },
  {
    id: "3852eb5a-f6b8-4cac-b148-fa6e1fe6c36c",
    createdAt: "2025-02-06T13:42:51.362Z",
    slug: "inversiia-inv3q21q262-ta-translokatsiia-t33q21q262-gata2mecom-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 514,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Інверсія inv(3)(q21q26.2) та транслокація t(3;3)(q21;q26.2) (GATA2/MECOM) (FISH)",
        },
        {
          lang: "en",
          value:
            "Inversion inv(3)(q21q26.2) and translocation t(3;3)(q21;q26.2) (GATA2/MECOM) (FISH)",
        },
      ],
    },
  },
  {
    id: "c0b44f41-76b8-426b-b777-49ff0a805b70",
    createdAt: "2025-02-06T13:42:53.692Z",
    slug: "inhaliatsiine-vvedennia-preparatu",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 1,
    onlinePrice: 0,
    foreignId: 860,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Inhalation administration of medication",
        },
        {
          lang: "uk",
          value: "Інгаляційне введення препарату",
        },
      ],
    },
  },
  {
    id: "cfb55127-21df-42b2-8e96-ec5c58d12b2c",
    createdAt: "2025-02-06T13:42:49.824Z",
    slug: "inhibin-b-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 322,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Інгібін B \\ N",
        },
        {
          lang: "en",
          value: "Inhibin B \\ N",
        },
      ],
    },
  },
  {
    id: "71c41d58-a387-4ea7-a517-9fd982ae4a4f",
    createdAt: "2025-02-06T13:42:49.222Z",
    slug: "indeks-vilnoho-prostatspetsyfichnoho-antyhenu-psa-vilnyi-psa-zahalnyi-indeks",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 247,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Free prostate-specific antigen index (free PSA, total PSA, index)",
        },
        {
          lang: "uk",
          value:
            "Індекс вільного простат-специфічного антигену (ПСА вільний, ПСА загальний, індекс)",
        },
      ],
    },
  },
  {
    id: "255f41ac-cb21-4c5b-b1dc-55ccf0290a13",
    createdAt: "2025-02-06T13:42:50.072Z",
    slug: "indeks-vilnoho-testosteronu-zahalnyi-testosteron-szh-indeks",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 355,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Free testosterone index (total testosterone, SHBG, index)",
        },
        {
          lang: "uk",
          value:
            "Індекс вільного тестостерону (загальний тестостерон, СЗГ, Індекс)",
        },
      ],
    },
  },
  {
    id: "9a37af5c-d676-4e3c-a7f3-84fcc232a35c",
    createdAt: "2025-02-06T13:42:51.046Z",
    slug: "indeks-homa-hliukoza-insulin-indeks",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 472,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Індекс HOMA (глюкоза, інсулін, індекс)",
        },
        {
          lang: "en",
          value: "HOMA index (glucose, insulin, index)",
        },
      ],
    },
  },
  {
    id: "9119d8b3-8857-4ef1-9258-e443da7bd5af",
    createdAt: "2025-02-06T13:42:49.177Z",
    slug: "indeks-roma-sa-125-ne4-indeks",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 241,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "ROMA index (CA 125, HE4, index)",
        },
        {
          lang: "uk",
          value: "Індекс ROMA (СА 125, НЕ-4, Індекс)",
        },
      ],
    },
  },
  {
    id: "c50e95bd-d63a-494b-bf65-828f5a192088",
    createdAt: "2025-02-20T19:04:11.261Z",
    slug: "instylliatsyia-v-sechovyi-mikhur-u-zhinok",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 900,
    onlinePrice: null,
    foreignId: 2716,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Bladder instillation in women",
        },
        {
          lang: "uk",
          value: "Інстилляція в сечовий міхур у жінок",
        },
      ],
    },
  },
  {
    id: "1dcea0d0-de11-4aaa-bb20-e62e8b4f3b78",
    createdAt: "2025-02-20T19:04:14.483Z",
    slug: "instylliatsyia-v-sechovyi-mikhur-u-cholovikiv",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 900,
    onlinePrice: null,
    foreignId: 2717,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Інстилляція в сечовий міхур у чоловіків",
        },
        {
          lang: "en",
          value: "Bladder instillation in men",
        },
      ],
    },
  },
  {
    id: "7880e2be-56b4-4cad-b2df-54ae621db89f",
    createdAt: "2025-02-06T13:42:51.025Z",
    slug: "insulin",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 469,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Інсулін",
        },
        {
          lang: "en",
          value: "Insulin",
        },
      ],
    },
  },
  {
    id: "c1e34c5b-183d-4e29-b073-b4f33f4404fd",
    createdAt: "2025-02-06T13:42:50.725Z",
    slug: "insulinopodibnyi-faktor-rostu-1-somatomedyn-s-igf1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 430,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Insulin-like growth factor-1 (Somatomedin-C) / IGF-1",
        },
        {
          lang: "uk",
          value: "Інсуліноподібний фактор росту - 1 (Соматомедин - С) / ІGF-1)",
        },
      ],
    },
  },
  {
    id: "722c4917-4f46-43a7-8d2a-f1e116200272",
    createdAt: "2025-02-06T13:42:52.495Z",
    slug: "interleikin1-beta-il1-il1-beta",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 663,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Interleukin-1 beta (IL-1, IL-1 beta)",
        },
        {
          lang: "uk",
          value: "Інтерлейкін-1 бета (ІЛ-1, IL-1 beta)",
        },
      ],
    },
  },
  {
    id: "da385755-f1ef-49ce-96bd-43454479508a",
    createdAt: "2025-02-06T13:42:52.537Z",
    slug: "interleikin2-il2-il2-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 669,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Інтерлейкін-2 (ІЛ-2, IL-2) \\ N",
        },
        {
          lang: "en",
          value: "Interleukin-2 (IL-2, IL-2) \\ N",
        },
      ],
    },
  },
  {
    id: "6e72e205-b694-4ac9-ab07-1d54802608e3",
    createdAt: "2025-02-06T13:42:52.575Z",
    slug: "interleikin6-il6-il6",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 674,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Інтерлейкін-6 (ІЛ-6, IL-6)",
        },
        {
          lang: "en",
          value: "Interleukin-6 (IL-6, IL-6)",
        },
      ],
    },
  },
  {
    id: "2c28f4b2-678b-4035-b042-014dc2343fc0",
    createdAt: "2025-02-06T13:42:49.411Z",
    slug: "intraoperatsiine-doslidzhennia-za-pershyi-etap",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 269,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Інтраопераційне дослідження (за перший етап)",
        },
        {
          lang: "en",
          value: "Intraoperative examination (for the first stage)",
        },
      ],
    },
  },
  {
    id: "ed3be010-eebd-4cfd-863c-27c905862ef9",
    createdAt: "2025-02-06T13:42:50.266Z",
    slug: "intsyziina-biopsiia-invazyvnykh-neoplazii-shlunka-do-3-lokalizatsii-biopsiyi-vkliuchno",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 381,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Інцизійна біопсія інвазивних неоплазій шлунка (до 3 локалізацій біопсії включно)",
        },
        {
          lang: "en",
          value:
            "Incisional biopsy of invasive gastric neoplasms (up to 3 biopsy sites included)",
        },
      ],
    },
  },
  {
    id: "2190bb0e-604c-49fc-a3c0-06b0ca87f592",
    createdAt: "2025-02-06T13:42:49.491Z",
    slug: "intsyziina-panch-ta-radiokhvylovia-biopsiia-shkiry-do-3-utvoren-vkliuchno-pry-dobroiakisnykh-pukhlyn",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 279,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Інцизійна, панч та радіохвильовіа біопсія шкіри (до 3 утворень включно) (при доброякісних пухлинних та пухлиноподібних процесах)",
        },
        {
          lang: "en",
          value:
            "Incisional, punch, and radiofrequency biopsy of the skin (up to 3 lesions included) (for benign tumor and tumor-like processes)",
        },
      ],
    },
  },
  {
    id: "6f6bc2fa-0b18-4aca-83db-6c6c612df420",
    createdAt: "2025-02-06T13:42:49.810Z",
    slug: "inshi-patomorfolohichni-doslidzhennia-ii-katehoriyi-skladnosti",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 320,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Інші патоморфологічні дослідження II категорії складності",
        },
        {
          lang: "en",
          value: "Other pathomorphological studies, Category II complexity",
        },
      ],
    },
  },
  {
    id: "917de50b-fb31-4e0e-91f6-d0b9df016ae1",
    createdAt: "2025-02-06T13:42:50.651Z",
    slug: "inshi-patomorfolohichni-doslidzhennia-iii-katehoriyi-skladnosti",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 423,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Інші патоморфологічні дослідження III категорії складності",
        },
        {
          lang: "en",
          value: "Other pathomorphological studies, Category III complexity",
        },
      ],
    },
  },
  {
    id: "2644bd1a-6160-4297-8fd7-87f94e495846",
    createdAt: "2025-02-06T13:42:51.918Z",
    slug: "inshi-patomorfolohichni-doslidzhennia-iv-katehoriyi-skladnosti",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 585,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Other pathomorphological studies, Category IV complexity",
        },
        {
          lang: "uk",
          value: "Інші патоморфологічні дослідження IV категорії складності",
        },
      ],
    },
  },
  {
    id: "ba8a6d16-ed79-4354-b106-01fc3e79561b",
    createdAt: "2025-02-06T13:42:52.890Z",
    slug: "inshi-patomorfolohichni-doslidzhennia-v-katehoriyi-skladnosti",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 706,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Інші патоморфологічні дослідження V категорії складності",
        },
        {
          lang: "en",
          value: "Other pathomorphological studies, Category V complexity",
        },
      ],
    },
  },
  {
    id: "de246324-4ded-4cb7-a3b7-68d478f3d8c8",
    createdAt: "2025-02-06T13:42:52.937Z",
    slug: "iod-secha-napivkilkisne-vyznachennia-m-kyyiv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 712,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Iodine (urine), semi-quantitative determination, Kyiv **",
        },
        {
          lang: "uk",
          value: "Йод (сеча), напівкількісне визначення, м. Київ **",
        },
      ],
    },
  },
  {
    id: "3a114719-0f0d-467f-b488-067c46b654e0",
    createdAt: "2025-02-06T13:42:52.836Z",
    slug: "kalii-dobova-secha-k-m-kyyiv-m-lviv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 699,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Potassium (daily urine) / K, Kyiv, Lviv **",
        },
        {
          lang: "uk",
          value: "Калій (добова сеча) / К, м. Київ, м. Львів**",
        },
      ],
    },
  },
  {
    id: "7901a151-5210-48de-b139-189c0482961f",
    createdAt: "2025-02-06T13:42:49.367Z",
    slug: "kaltsytonin",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 264,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Calcitonin **",
        },
        {
          lang: "uk",
          value: "Кальцитонін **",
        },
      ],
    },
  },
  {
    id: "2807c740-e33b-47d2-9575-7295e34c0f57",
    createdAt: "2025-02-06T13:42:53.501Z",
    slug: "kaltsii",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 833,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кальцій",
        },
        {
          lang: "en",
          value: "Calcium",
        },
      ],
    },
  },
  {
    id: "21328636-4ab7-4d5b-8ad6-eae247a1304a",
    createdAt: "2025-02-06T13:42:52.952Z",
    slug: "kaltsii-zahalnyi-secha-ca",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 714,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Total calcium (urine) / Ca",
        },
        {
          lang: "uk",
          value: "Кальцій загальний (сеча) / Ca",
        },
      ],
    },
  },
  {
    id: "1cdbc837-5920-48fd-98cc-198359b95774",
    createdAt: "2025-02-06T13:42:53.508Z",
    slug: "kaltsii-u-sechi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 834,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кальцій у сечі",
        },
        {
          lang: "en",
          value: "Calcium in urine",
        },
      ],
    },
  },
  {
    id: "2a75d2f7-d87d-4c75-8597-4c7f2d821a62",
    createdAt: "2025-02-06T13:42:49.537Z",
    slug: "kandidoz-candida-albicans-antytila-iga",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 284,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Candidiasis (Candida albicans), IgA antibodies",
        },
        {
          lang: "uk",
          value: "Кандідоз (Candida albicans), антитіла IgA",
        },
      ],
    },
  },
  {
    id: "4d3b3a86-afcf-41a1-b91a-5bf20f5d5566",
    createdAt: "2025-02-06T13:42:49.561Z",
    slug: "kandidoz-candida-albicans-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 288,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Candidiasis (Candida albicans), IgG antibodies",
        },
        {
          lang: "uk",
          value: "Кандідоз (Candida albicans), антитіла IgG",
        },
      ],
    },
  },
  {
    id: "aa7d23e1-4ae6-4f68-92ff-ff2dcacc54ec",
    createdAt: "2025-02-06T13:42:49.593Z",
    slug: "kandidoz-candida-albicans-antytila-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 292,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Candidiasis (Candida albicans), IgM antibodies",
        },
        {
          lang: "uk",
          value: "Кандідоз (Candida albicans), антитіла IgM",
        },
      ],
    },
  },
  {
    id: "ebda3f6b-b737-441c-b357-fe515db7666c",
    createdAt: "2025-02-06T13:42:52.829Z",
    slug: "kardiolipin-antytila-igg-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 698,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cardiolipin, IgG antibodies \\ N",
        },
        {
          lang: "uk",
          value: "Кардіоліпін, антитіла IgG \\ N",
        },
      ],
    },
  },
  {
    id: "7df317f0-2666-41b2-a312-fc81b1ae5b73",
    createdAt: "2025-02-06T13:42:52.876Z",
    slug: "kardiolipin-antytila-igm-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 704,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cardiolipin, IgM antibodies \\ N",
        },
        {
          lang: "uk",
          value: "Кардіоліпін, антитіла IgM \\ N",
        },
      ],
    },
  },
  {
    id: "41d71725-131c-4d45-815a-643376157aac",
    createdAt: "2025-02-20T19:04:15.515Z",
    slug: "kardiotokohrafiia-plodu-kth",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 730,
    onlinePrice: null,
    foreignId: 2589,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Fetal cardiotocography (CTG)",
        },
        {
          lang: "uk",
          value: "Кардіотокографія плоду (КТГ)",
        },
      ],
    },
  },
  {
    id: "0fe9cbf5-49ac-4120-b8c0-c16844ecb0b8",
    createdAt: "2025-04-05T17:43:27.784Z",
    slug: "kardiotokohrafiia-plodu-kth-dva-plody",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 760,
    onlinePrice: null,
    foreignId: 6723,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кардіотокографія плоду (КТГ) - два плоди",
        },
      ],
    },
  },
  {
    id: "effe7ab3-17b5-4f2b-825c-b5aa56c88cd2",
    createdAt: "2025-02-20T19:04:10.086Z",
    slug: "kateteryzatsiia-obokh-slukhovykh-trub-i-vvedennia-likarskykh-zasobiv",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 2300,
    onlinePrice: null,
    foreignId: 6479,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Catheterization of both auditory tubes (with administration of medications)",
        },
        {
          lang: "uk",
          value:
            "Катетеризація обох слухових труб (і введення лікарських засобів)",
        },
      ],
    },
  },
  {
    id: "0061d7dd-0cd1-411e-a1da-fba23269bf63",
    createdAt: "2025-02-20T19:04:11.192Z",
    slug: "kateteryzatsiia-odniieyi-slukhovoyi-truby-i-vvedennia-likarskykh-zasobiv",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 1800,
    onlinePrice: null,
    foreignId: 2611,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Катетеризація однієї слухової труби (і введення лікарських засобів)",
        },
        {
          lang: "en",
          value:
            "Catheterization of one auditory tube (with administration of medications)",
        },
      ],
    },
  },
  {
    id: "1089a7ac-46eb-401c-aaf7-19e53a8f4ebd",
    createdAt: "2025-02-20T19:04:14.505Z",
    slug: "kateteryzatsiia-sechovoho-mikhura-u-zhinok",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 770,
    onlinePrice: null,
    foreignId: 2719,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Bladder catheterization in women",
        },
        {
          lang: "uk",
          value: "Катетеризація сечового міхура у жінок",
        },
      ],
    },
  },
  {
    id: "fe9f0af8-dfe0-486d-bf71-f0b3386aa9d6",
    createdAt: "2025-02-20T19:04:14.491Z",
    slug: "kateteryzatsiia-sechovoho-mikhura-u-cholovikiv",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 800,
    onlinePrice: null,
    foreignId: 2718,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Катетеризація сечового міхура у чоловіків",
        },
        {
          lang: "en",
          value: "Bladder catheterization in men",
        },
      ],
    },
  },
  {
    id: "b7e03248-2ef6-4474-9c3a-badc9477249a",
    createdAt: "2025-02-06T13:42:51.950Z",
    slug: "kationnyi-proteyin-eozynofiliv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 589,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Катіонний протеїн еозинофілів",
        },
        {
          lang: "en",
          value: "Eosinophil cationic protein",
        },
      ],
    },
  },
  {
    id: "186b7261-cc7e-4945-8a38-105cd2e5325f",
    createdAt: "2025-02-06T13:42:50.746Z",
    slug: "kashliuk-bordetella-pertussis-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 433,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кашлюк (Bordetella pertussis), IgG",
        },
        {
          lang: "en",
          value: "Pertussis (Bordetella pertussis), IgG",
        },
      ],
    },
  },
  {
    id: "5d2a96c9-8fee-448e-af4a-6887e1da4996",
    createdAt: "2025-02-06T13:42:50.763Z",
    slug: "kashliuk-bordetella-pertussis-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 435,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кашлюк (Bordetella pertussis), IgM",
        },
        {
          lang: "en",
          value: "Pertussis (Bordetella pertussis), IgM",
        },
      ],
    },
  },
  {
    id: "bce66bf1-f7a1-4263-877a-74b9577ae9e3",
    createdAt: "2025-02-06T13:42:50.813Z",
    slug: "kir-morbillivirus-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 441,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кір (MorBillivirus), антитіла IgG",
        },
        {
          lang: "en",
          value: "Measles (Morbillivirus), IgG antibodies",
        },
      ],
    },
  },
  {
    id: "df56a03f-0b88-4b0e-a0f1-b33fb86284dd",
    createdAt: "2025-02-06T13:42:50.846Z",
    slug: "kir-morbillivirus-antytila-igm-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 445,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кір (MorBillivirus), антитіла IgM \\ N",
        },
        {
          lang: "en",
          value: "Measles (Morbillivirus), IgM antibodies \\ N",
        },
      ],
    },
  },
  {
    id: "500eebb0-0736-483d-aaa7-514c787ded13",
    createdAt: "2025-02-06T13:42:49.883Z",
    slug: "klasychnyi-paptest-skryninhove-doslidzhennia-mazka-shyiky-matky",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 330,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Classic PAP test (screening examination of cervical smear)",
        },
        {
          lang: "uk",
          value:
            "Класичний ПАП-тест (скринінгове дослідження мазка шийки матки)",
        },
      ],
    },
  },
  {
    id: "12827080-5b14-410b-bf3d-13b2467536da",
    createdAt: "2025-02-06T13:42:53.599Z",
    slug: "klirens-endohennoho-kreatyninu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 150,
    onlinePrice: 0,
    foreignId: 847,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кліренс ендогенного креатиніну",
        },
        {
          lang: "en",
          value: "Endogenous creatinine clearance",
        },
      ],
    },
  },
  {
    id: "24fc5985-9250-4724-af4f-b3f959236659",
    createdAt: "2025-02-06T13:42:53.592Z",
    slug: "klirens-kreatyninu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 846,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Creatinine clearance",
        },
        {
          lang: "uk",
          value: "Кліренс креатиніну",
        },
      ],
    },
  },
  {
    id: "df665907-eab2-478d-aebb-75cfe3eae1fe",
    createdAt: "2025-02-06T13:42:50.716Z",
    slug: "klishchi-rodu-demodeks-brovy-viyi-vmist-papul-epitelialnyi-zishkrib",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 429,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Кліщі роду демодекс (брови, вії, вміст папул, епітеліальний зішкріб)",
        },
        {
          lang: "en",
          value:
            "Demodex mites (eyebrows, eyelashes, papule contents, epithelial scraping)",
        },
      ],
    },
  },
  {
    id: "8e9f5099-fa74-4b5d-b81e-9cb061458326",
    createdAt: "2025-02-06T13:42:48.660Z",
    slug: "koahulohrama",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 60,
    onlinePrice: 0,
    foreignId: 64,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Coagulogram",
        },
        {
          lang: "uk",
          value: "Коагулограма",
        },
      ],
    },
  },
  {
    id: "9c744b21-2415-4155-b397-1444dfd89e43",
    createdAt: "2025-02-06T13:42:52.567Z",
    slug: "koahulohrama-na-avtomatychnomu-analizatori-pch-za-kvikom-mnv-achtch-fibrynohen-tch",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 673,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Коагулограма на автоматичному аналізаторі (ПЧ, % за Квіком, МНВ, АЧТЧ, Фібриноген, ТЧ)",
        },
        {
          lang: "en",
          value:
            "Coagulogram on an automated analyzer (PT, % by Quick, INR, APTT, Fibrinogen, TT)",
        },
      ],
    },
  },
  {
    id: "5900b33b-d2f9-40b6-9848-3f85eb422956",
    createdAt: "2025-02-20T19:04:10.606Z",
    slug: "kohnityvna-otsinka-mozkovoyi-diialnosti-z-vykorystanniam-brain-gange-30-khv-sam-aganov-phd",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 600,
    onlinePrice: null,
    foreignId: 4172,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Cognitive assessment of brain activity using Brain Gauge (30 min.) (Sam Aganov, Ph.D.)",
        },
        {
          lang: "uk",
          value:
            "Когнітивна оцінка мозкової діяльності з використанням Brain Gange (30 хв.) (Sam Aganov, Ph.D)",
        },
      ],
    },
  },
  {
    id: "b6222c83-2cc4-4ee7-8956-3353a31f89bd",
    createdAt: "2025-02-06T13:42:48.454Z",
    slug: "kolonoskopiia",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 1800,
    onlinePrice: 0,
    foreignId: 43,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Colonoscopy",
        },
        {
          lang: "uk",
          value: "Колоноскопія",
        },
      ],
    },
  },
  {
    id: "2e785657-791d-42bb-a134-b16becdfb6b9",
    createdAt: "2025-02-20T19:04:15.187Z",
    slug: "kolposkopiia",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 720,
    onlinePrice: null,
    foreignId: 2578,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Colposcopy",
        },
        {
          lang: "uk",
          value: "Кольпоскопія",
        },
      ],
    },
  },
  {
    id: "1d530c67-2bff-4e31-82aa-4cf95dc5658d",
    createdAt: "2025-02-20T19:04:11.332Z",
    slug: "kompleks-vidnovliuiuchoyi-terapiyi-1-protsedura",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 4500,
    onlinePrice: null,
    foreignId: 6316,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Комплекс відновлюючої терапії (1 процедура)",
        },
        {
          lang: "en",
          value: "Complex restorative therapy (1 procedure)",
        },
      ],
    },
  },
  {
    id: "d9452f17-094d-4503-ba9e-8fda5b1bb047",
    createdAt: "2025-02-06T13:42:53.366Z",
    slug: "kompleks-3-biokhimiia-krovi-bazova",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 500,
    onlinePrice: 0,
    foreignId: 803,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Комплекс № 3 "Біохімія крові базова"',
        },
        {
          lang: "en",
          value: 'Complex No. 3 "Basic Blood Biochemistry"',
        },
      ],
    },
  },
  {
    id: "4a2a94bb-a0f5-454c-b9e9-331e83d38d86",
    createdAt: "2025-02-06T13:42:53.373Z",
    slug: "kompleks-7-pechinkovi-proby",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 550,
    onlinePrice: 0,
    foreignId: 804,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Комплекс № 7 "Печінкові проби"',
        },
        {
          lang: "en",
          value: 'Complex No. 7 "Liver Function Tests"',
        },
      ],
    },
  },
  {
    id: "99c4be0b-a8bb-4ca1-92ad-67aa7f529412",
    createdAt: "2025-02-06T13:42:49.817Z",
    slug: "kompleks-49-diahnostyka-urohenitalnykh-infektsii-chlamydia-trachomatis-neisseria-gonorrhoeae-trichom",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 321,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Complex No. 49 "Diagnosis of Urogenital Infections" (Chlamydia trachomatis, Neisseria gonorrhoeae, Trichomonas vaginalis, Mycoplasma hominis, Mycoplasma genitalium, Ureaplasma urealyticum / Ureaplasma parvum (qualitative determination, PCR)) \\ N',
        },
        {
          lang: "uk",
          value:
            'Комплекс №49 "Діагностика урогенітальних інфекцій" (Chlamydia trachomatis, Neisseria gonorrhoeae, Trichomonas vaginalis, Mycoplasma hominis, Mycoplasma genitalium, Ureaplasma urealyticum / Ureaplasma parvum (якісне визначення, ПЛР)) \\ N',
        },
      ],
    },
  },
  {
    id: "e913ed97-0ea0-4531-9eef-0efd2c77f64f",
    createdAt: "2025-02-06T13:42:50.037Z",
    slug: "kompleks-54-klasychnyi-paptest-skryninhove-doslidzhennia-mazka-shyiky-matky-doslidzhennia-mikroflory",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 350,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Комплекс №54 Класичний ПАП-тест (скринінгове дослідження мазка шийки матки) + Дослідження мікрофлори урогенітального тракту у жінок (за критеріями Hay-Ison та шкалою Nugent) \\ N",
        },
        {
          lang: "en",
          value:
            "Complex No. 54 Classic PAP test (screening examination of cervical smear) + Examination of urogenital tract microflora in women (according to Hay-Ison criteria and Nugent scale) \\ N",
        },
      ],
    },
  },
  {
    id: "f795e440-72d7-409c-bac3-ad23e88be526",
    createdAt: "2025-02-06T13:42:50.001Z",
    slug: "kompleks-55-ridynna-tsytolohiia-paptest-doslidzhennia-mikroflory-urohenitalnoho-traktu-u-zhinok-za-k",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 345,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Complex No. 55 Liquid-based cytology PAP test + Examination of urogenital tract microflora in women (according to Hay-Ison criteria and Nugent scale) \\ N",
        },
        {
          lang: "uk",
          value:
            "Комплекс №55 Рідинна цитологія ПАП-тест + Дослідження мікрофлори урогенітального тракту у жінок (за критеріями Hay-Ison та шкалою Nugent) \\ N",
        },
      ],
    },
  },
  {
    id: "23632b1b-b4ac-4980-8a86-0cb9c92ecd7b",
    createdAt: "2025-02-06T13:42:49.983Z",
    slug: "kompleks-56-ridynna-tsytolohiia-paptest-plr-virus-papilomy-liudyny-14-typiv-vkr-cobas-hpv-test-zatve",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 343,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Комплекс №56 Рідинна цитологія ПАП-тест + ПЛР. Вірус папіломи людини (14 типів ВКР) (Cobas HPV тест затверджений FDA), якісне визначення з генотипуванням 16, 18 та групи з 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, 68 типів (у/г зішкріб) \\ N",
        },
        {
          lang: "en",
          value:
            "Complex No. 56 Liquid-based cytology PAP test + PCR. Human papillomavirus (14 high-risk types) (Cobas HPV test approved by FDA), qualitative determination with genotyping of 16, 18, and group including 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, 68 types (urogenital scraping) \\ N",
        },
      ],
    },
  },
  {
    id: "11a71987-1724-4ede-b66b-b51307a22fbe",
    createdAt: "2025-02-06T13:42:49.952Z",
    slug: "kompleks-57-ridynna-tsytolohiia-paptest-plr-virus-papilomy-liudyny-14-typiv-vkr-cobas-hpv-test-zatve",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 339,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Complex No. 57 Liquid-based cytology PAP test + PCR. Human papillomavirus (14 high-risk types) (Cobas HPV test approved by FDA), qualitative determination with genotyping of 16, 18, and group including 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, 68 types (urogenital scraping) + STI 7 - sexually transmitted infections \\ N",
        },
        {
          lang: "uk",
          value:
            "Комплекс №57 Рідинна цитологія ПАП-тест + ПЛР. Вірус папіломи людини (14 типів ВКР) (Cobas HPV тест затверджений FDA), якісне визначення з генотипуванням 16, 18 та групи з 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, 68 типів (у/г зішкріб) + STI 7 - інфекції, що передаються статевим шляхом \\ N",
        },
      ],
    },
  },
  {
    id: "81ff20e5-d709-4c30-8c95-4b3d00d9c06f",
    createdAt: "2025-02-06T13:42:51.675Z",
    slug: "komplement-s3-komponent-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 552,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Комплемент (С3 компонент) \\ N",
        },
        {
          lang: "en",
          value: "Complement (C3 component) \\ N",
        },
      ],
    },
  },
  {
    id: "bd16ae0f-7317-4e26-b241-048a9f08d65e",
    createdAt: "2025-02-06T13:42:51.706Z",
    slug: "komplement-s4-komponent-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 556,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Complement (C4 component) \\ N",
        },
        {
          lang: "uk",
          value: "Комплемент (С4 компонент) \\ N",
        },
      ],
    },
  },
  {
    id: "99af2ef9-db40-4b32-ab7d-16bcba1f3c21",
    createdAt: "2025-02-06T13:42:48.413Z",
    slug: "kompiuterna-tomohrafiia-holovy",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 1500,
    onlinePrice: 0,
    foreignId: 38,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Компьютерна томографія голови",
        },
        {
          lang: "en",
          value: "Computed tomography of the head",
        },
      ],
    },
  },
  {
    id: "2a12ae20-2e12-4e98-b8df-b3ce93c5b257",
    createdAt: "2025-02-06T13:42:48.421Z",
    slug: "kompiuterna-tomohrafiia-holovy-s-pokhmillia",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 1700,
    onlinePrice: 0,
    foreignId: 39,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Computed tomography of the head with contrast",
        },
        {
          lang: "uk",
          value: "Компьютерна томографія голови с похмілля",
        },
      ],
    },
  },
  {
    id: "5a47f557-d6f9-4a43-8ca5-d3f0584875a8",
    createdAt: "2025-02-20T19:04:09.905Z",
    slug: "konsultatsiinyi-chekap-hlybynnyi",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 0,
    onlinePrice: null,
    foreignId: 6558,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультаційний чекап Глибинний",
        },
        {
          lang: "en",
          value: "Consultative check-up (in-depth)",
        },
      ],
    },
  },
  {
    id: "1b3e85c8-62f8-4e31-8065-02d4c64ef68e",
    createdAt: "2025-02-20T19:04:09.627Z",
    slug: "konsultatsiinyi-chekap-minimalnyi",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 0,
    onlinePrice: null,
    foreignId: 6556,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультаційний чекап Мінімальний",
        },
        {
          lang: "en",
          value: "Consultative check-up (minimal)",
        },
      ],
    },
  },
  {
    id: "f9951d3c-8e7b-47df-b375-0b11e5ce4e1c",
    createdAt: "2025-02-20T19:04:09.714Z",
    slug: "konsultatsiinyi-chekap-rozshyrenyi",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 0,
    onlinePrice: null,
    foreignId: 6557,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultative check-up (extended)",
        },
        {
          lang: "uk",
          value: "Консультаційний чекап Розширений",
        },
      ],
    },
  },
  {
    id: "50443fcb-058a-4f23-90c9-b33faf58e70a",
    createdAt: "2025-02-20T19:04:09.568Z",
    slug: "konsultatsiia-akusherahinekoloha-1",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1550,
    onlinePrice: 1300,
    foreignId: 2462,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація акушера-гінеколога",
        },
        {
          lang: "en",
          value: "Consultation with an obstetrician-gynecologist",
        },
      ],
    },
  },
  {
    id: "97ef06da-0c88-4f86-9351-67dc69c55e32",
    createdAt: "2025-02-06T13:42:48.125Z",
    slug: "konsultatsiia-akusherahinekoloha",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 250,
    onlinePrice: 0,
    foreignId: 12,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with an obstetrician-gynecologist",
        },
        {
          lang: "uk",
          value: "Консультація акушера-гінеколога",
        },
      ],
    },
  },
  {
    id: "eeb7defe-f3f0-496d-b62d-402e5bd66e37",
    createdAt: "2025-02-20T19:04:09.845Z",
    slug: "konsultatsiia-akusherahinekoloha-osvitnia",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: null,
    onlinePrice: 900,
    foreignId: 6294,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with an obstetrician-gynecologist (educational)",
        },
        {
          lang: "uk",
          value: "Консультація акушера-гінеколога  (освітня)",
        },
      ],
    },
  },
  {
    id: "71cd21b9-15b2-4fca-884a-2354f259a185",
    createdAt: "2025-02-06T13:42:48.179Z",
    slug: "konsultatsiia-alerholoha",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 200,
    onlinePrice: 0,
    foreignId: 18,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with an allergist",
        },
        {
          lang: "uk",
          value: "Консультація алерголога",
        },
      ],
    },
  },
  {
    id: "e30bce62-63a0-401e-8790-bdd12cc8d88a",
    createdAt: "2025-02-20T19:04:10.256Z",
    slug: "konsultatsiia-alerholoha-1",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: null,
    foreignId: 2461,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with an allergist",
        },
        {
          lang: "uk",
          value: "Консультація алерголога",
        },
      ],
    },
  },
  {
    id: "b1e1363f-7d24-4635-8783-f51880285f9c",
    createdAt: "2025-02-20T19:04:10.451Z",
    slug: "konsultatsiia-hastroenteroloha",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: null,
    foreignId: 2464,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація гастроентеролога",
        },
        {
          lang: "en",
          value: "Consultation with a gastroenterologist",
        },
      ],
    },
  },
  {
    id: "cbcf91c2-5e93-45d7-bf71-f859555e6a82",
    createdAt: "2025-02-20T19:04:09.744Z",
    slug: "konsultatsiia-hinekoloha-dytiachoho-ta-pidlitkovoho-viku",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1550,
    onlinePrice: null,
    foreignId: 2496,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація гінеколога дитячого та підліткового віку",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric and adolescent gynecologist",
        },
      ],
    },
  },
  {
    id: "72bbe1a1-1d25-42d5-8008-ef115d37cf23",
    createdAt: "2025-02-20T19:04:14.423Z",
    slug: "konsultatsiia-hinekolohaonkoloha",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1340,
    onlinePrice: null,
    foreignId: 2466,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with an oncologist-gynecologist",
        },
        {
          lang: "uk",
          value: "Консультація гінеколога-онколога",
        },
      ],
    },
  },
  {
    id: "a3bbde8a-db67-4827-8a99-6c67934dbd2b",
    createdAt: "2025-02-20T19:04:11.111Z",
    slug: "konsultatsiia-dermatoveneroloha",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: 1200,
    foreignId: 2467,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a dermatovenereologist",
        },
        {
          lang: "uk",
          value: "Консультація дерматовенеролога",
        },
      ],
    },
  },
  {
    id: "cf6172b9-16d8-4ad0-b1ae-16a3d4134401",
    createdAt: "2025-02-20T19:04:13.633Z",
    slug: "konsultatsiia-dermatoveneroloha-providnoho-spetsialista",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1800,
    onlinePrice: 1500,
    foreignId: 6287,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дерматовенеролога (провідного спеціаліста)",
        },
        {
          lang: "en",
          value:
            "Consultation with a dermatovenereologist (leading specialist)",
        },
      ],
    },
  },
  {
    id: "6776eb48-5387-46e9-b7be-2e637dcd002b",
    createdAt: "2025-02-06T13:42:48.209Z",
    slug: "konsultatsiia-dermatoloha",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 200,
    onlinePrice: 0,
    foreignId: 21,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дерматолога",
        },
        {
          lang: "en",
          value: "Consultation with a dermatologist",
        },
      ],
    },
  },
  {
    id: "305a2715-30cd-4fb4-b140-5a3cd924cd38",
    createdAt: "2025-02-20T19:04:15.413Z",
    slug: "konsultatsiia-dytiachoho-alerholoha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1440,
    onlinePrice: null,
    foreignId: 2490,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a pediatric allergist",
        },
        {
          lang: "uk",
          value: "Консультація дитячого алерголога",
        },
      ],
    },
  },
  {
    id: "76fe8d63-acfa-4aa5-85d5-082436279e74",
    createdAt: "2025-02-20T19:04:09.782Z",
    slug: "konsultatsiia-dytiachoho-hastroenteroloha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1320,
    onlinePrice: 0,
    foreignId: 2503,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого гастроентеролога",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric gastroenterologist",
        },
      ],
    },
  },
  {
    id: "c688dea8-851a-4749-9320-02376012747d",
    createdAt: "2025-02-20T19:04:09.790Z",
    slug: "konsultatsiia-dytiachoho-dermatoloha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1440,
    onlinePrice: null,
    foreignId: 2504,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a pediatric dermatologist",
        },
        {
          lang: "uk",
          value: "Консультація дитячого дерматолога",
        },
      ],
    },
  },
  {
    id: "6eccac2f-60d2-42f9-8a00-1b6aaa1eba2c",
    createdAt: "2025-02-20T19:04:09.615Z",
    slug: "konsultatsiia-dytiachoho-dermatoloha-providnoho-spetsialista",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1800,
    onlinePrice: 1800,
    foreignId: 6299,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого дерматолога (провідного спеціаліста)",
        },
        {
          lang: "en",
          value:
            "Consultation with a pediatric dermatologist (leading specialist)",
        },
      ],
    },
  },
  {
    id: "7cd560a3-0c05-4e14-a8a1-759555921978",
    createdAt: "2025-02-20T19:04:15.442Z",
    slug: "konsultatsiia-dytiachoho-endokrynoloha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1440,
    onlinePrice: null,
    foreignId: 2497,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого ендокринолога",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric endocrinologist",
        },
      ],
    },
  },
  {
    id: "16dff582-ce12-4de9-88d9-b7fa4e3dff31",
    createdAt: "2025-02-20T19:04:15.366Z",
    slug: "konsultatsiia-dytiachoho-kardioloha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1550,
    onlinePrice: null,
    foreignId: 2499,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого кардіолога",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric cardiologist",
        },
      ],
    },
  },
  {
    id: "7cf085ff-8ffb-4b7d-8d96-a8acfc2ede48",
    createdAt: "2025-02-20T19:04:15.235Z",
    slug: "konsultatsiia-dytiachoho-kardiorevmatoloha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1550,
    onlinePrice: 1200,
    foreignId: 4092,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a pediatric cardiorheumatologist",
        },
        {
          lang: "uk",
          value: "Консультація дитячого кардіоревматолога",
        },
      ],
    },
  },
  {
    id: "08d37284-3876-4e46-9c89-c1bade67c48f",
    createdAt: "2025-02-20T19:04:15.420Z",
    slug: "konsultatsiia-dytiachoho-nevroloha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1440,
    onlinePrice: 1300,
    foreignId: 2491,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого невролога",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric neurologist",
        },
      ],
    },
  },
  {
    id: "1f1a2608-d7db-41b2-b602-74d7b7c4af23",
    createdAt: "2025-02-20T19:04:15.428Z",
    slug: "konsultatsiia-dytiachoho-ortopedatravmatoloha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1630,
    onlinePrice: null,
    foreignId: 2492,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого ортопеда-травматолога",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric orthopedic traumatologist",
        },
      ],
    },
  },
  {
    id: "e0abcb46-7a98-432d-88a2-e527ab17b036",
    createdAt: "2025-02-20T19:04:09.755Z",
    slug: "konsultatsiia-dytiachoho-otolarynholoha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1440,
    onlinePrice: null,
    foreignId: 2500,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a pediatric otolaryngologist",
        },
        {
          lang: "uk",
          value: "Консультація дитячого отоларинголога",
        },
      ],
    },
  },
  {
    id: "8c3eed76-a5d9-490e-b0ba-77a435f9506e",
    createdAt: "2025-02-20T19:04:09.764Z",
    slug: "konsultatsiia-dytiachoho-oftalmoloha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1440,
    onlinePrice: 1200,
    foreignId: 2501,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого офтальмолога",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric ophthalmologist",
        },
      ],
    },
  },
  {
    id: "45083467-dc00-49fb-8700-95437ff0d625",
    createdAt: "2025-02-20T19:04:15.226Z",
    slug: "konsultatsiia-dytiachoho-oftalmoloha-z-kompleksnym-oftalmolohichnym-obstezhenniam",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 2400,
    onlinePrice: null,
    foreignId: 4069,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Consultation with a pediatric ophthalmologist with comprehensive ophthalmological examination",
        },
        {
          lang: "uk",
          value:
            "Консультація дитячого офтальмолога з комплексним офтальмологічним обстеженням",
        },
      ],
    },
  },
  {
    id: "be04a1a1-9d59-448b-a0d7-3ef785c0efa5",
    createdAt: "2025-02-20T19:04:15.164Z",
    slug: "konsultatsiia-dytiachoho-psykholoha",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 1600,
    onlinePrice: null,
    foreignId: 4066,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого психолога",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric psychologist",
        },
      ],
    },
  },
  {
    id: "59783212-e305-41b5-9767-6dedb4c38754",
    createdAt: "2025-02-20T19:04:09.735Z",
    slug: "konsultatsiia-dytiachoho-uroloha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1320,
    onlinePrice: null,
    foreignId: 2495,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого уролога",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric urologist",
        },
      ],
    },
  },
  {
    id: "33fbf8a7-cf30-4a89-bbae-d7e7f3ef69e2",
    createdAt: "2025-02-20T19:04:15.435Z",
    slug: "konsultatsiia-dytiachoho-khirurha",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1440,
    onlinePrice: null,
    foreignId: 2494,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація дитячого хірурга",
        },
        {
          lang: "en",
          value: "Consultation with a pediatric surgeon",
        },
      ],
    },
  },
  {
    id: "b99df4a3-89ba-4409-86f1-04a255cc0c06",
    createdAt: "2025-02-20T19:04:12.172Z",
    slug: "konsultatsiia-endokrynoloha-1",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: 1200,
    foreignId: 2481,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація ендокринолога",
        },
        {
          lang: "en",
          value: "Consultation with an endocrinologist",
        },
      ],
    },
  },
  {
    id: "cd8b1722-f7d9-4ae0-89ef-c721466a325e",
    createdAt: "2025-02-06T13:42:48.187Z",
    slug: "konsultatsiia-endokrynoloha",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 250,
    onlinePrice: 0,
    foreignId: 19,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація ендокринолога",
        },
        {
          lang: "en",
          value: "Consultation with an endocrinologist",
        },
      ],
    },
  },
  {
    id: "acacad42-fada-4f1f-9261-cd25bcd2c48f",
    createdAt: "2025-02-06T13:42:48.151Z",
    slug: "konsultatsiia-kardioloha",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 200,
    onlinePrice: 0,
    foreignId: 15,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація кардіолога",
        },
        {
          lang: "en",
          value: "Consultation with a cardiologist",
        },
      ],
    },
  },
  {
    id: "b72c3407-cf9e-4711-b3a3-009636f4d016",
    createdAt: "2025-02-20T19:04:10.180Z",
    slug: "konsultatsiia-kardioloha-1",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1550,
    onlinePrice: null,
    foreignId: 2468,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a cardiologist",
        },
        {
          lang: "uk",
          value: "Консультація кардіолога",
        },
      ],
    },
  },
  {
    id: "9b6aa710-1e79-4391-9d14-e95f762f43f2",
    createdAt: "2025-02-20T19:04:12.955Z",
    slug: "konsultatsiia-kardioloha-na-vyyizdi",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 4200,
    onlinePrice: null,
    foreignId: 2470,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a cardiologist (on-site visit)",
        },
        {
          lang: "uk",
          value: "Консультація кардіолога на виїзді",
        },
      ],
    },
  },
  {
    id: "96508f44-fee7-4486-a540-e10e46d18724",
    createdAt: "2025-02-20T19:04:13.528Z",
    slug: "konsultatsiia-mamoloha",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: null,
    foreignId: 2483,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація мамолога",
        },
        {
          lang: "en",
          value: "Consultation with a mammologist",
        },
      ],
    },
  },
  {
    id: "e2102908-cefe-410e-8c91-531b6f54bd82",
    createdAt: "2025-02-20T19:04:09.837Z",
    slug: "konsultatsiia-nevropatoloha",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: 1300,
    foreignId: 2471,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a neurologist",
        },
        {
          lang: "uk",
          value: "Консультація невропатолога",
        },
      ],
    },
  },
  {
    id: "30da9cf6-6726-4b08-87b8-f2d356fb9b76",
    createdAt: "2025-02-20T19:04:13.285Z",
    slug: "konsultatsiia-nevropatoloha-na-vyyizdi",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 3900,
    onlinePrice: null,
    foreignId: 2472,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація невропатолога на виїзді",
        },
        {
          lang: "en",
          value: "Consultation with a neurologist (on-site visit)",
        },
      ],
    },
  },
  {
    id: "2afc5027-16a3-472d-b020-44ce95465513",
    createdAt: "2025-04-05T17:43:27.597Z",
    slug: "konsultatsiia-onkoloha",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1500,
    onlinePrice: null,
    foreignId: 6721,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація онколога",
        },
      ],
    },
  },
  {
    id: "3884ad78-0967-4013-826c-19dc8b73d91a",
    createdAt: "2025-02-06T13:42:48.133Z",
    slug: "konsultatsiia-otolarynholoha",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 200,
    onlinePrice: 0,
    foreignId: 13,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація отоларинголога",
        },
        {
          lang: "en",
          value: "Consultation with an otolaryngologist",
        },
      ],
    },
  },
  {
    id: "2eff0b16-335e-443b-b690-9019d8856f04",
    createdAt: "2025-02-20T19:04:11.211Z",
    slug: "konsultatsiia-otolarynholoha-1",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: 1200,
    foreignId: 2474,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація отоларинголога",
        },
        {
          lang: "en",
          value: "Consultation with an otolaryngologist",
        },
      ],
    },
  },
  {
    id: "a96824d0-7ddd-4bba-b80f-ec800daee6e2",
    createdAt: "2025-02-20T19:04:13.438Z",
    slug: "konsultatsiia-otolarynholoha-eksperta-napriamku",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1700,
    onlinePrice: 0,
    foreignId: 2475,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with an otolaryngologist (expert in the field)",
        },
        {
          lang: "uk",
          value: "Консультація отоларинголога експерта напрямку",
        },
      ],
    },
  },
  {
    id: "554a4f03-5ff9-476a-b40f-b609e15cd19f",
    createdAt: "2025-02-20T19:04:13.457Z",
    slug: "konsultatsiia-otolarynholoha-na-vyyizdi",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 3200,
    onlinePrice: null,
    foreignId: 2476,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with an otolaryngologist (on-site visit)",
        },
        {
          lang: "uk",
          value: "Консультація отоларинголога на виїзді",
        },
      ],
    },
  },
  {
    id: "eeb53030-6a10-4ffd-9794-de9b9302dea2",
    createdAt: "2025-02-20T19:04:15.405Z",
    slug: "konsultatsiia-oftalmohenetyka",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 3300,
    onlinePrice: null,
    foreignId: 2502,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with an ophthalmogeneticist",
        },
        {
          lang: "uk",
          value: "Консультація офтальмогенетика",
        },
      ],
    },
  },
  {
    id: "347beb7c-08f3-44bd-bb18-d7eac65c65c9",
    createdAt: "2025-02-20T19:04:15.267Z",
    slug: "konsultatsiia-oftalmoloha-1",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: 1200,
    foreignId: 2477,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація офтальмолога",
        },
        {
          lang: "en",
          value: "Consultation with an ophthalmologist",
        },
      ],
    },
  },
  {
    id: "27dbddab-4629-4960-b5a7-957f904c2acd",
    createdAt: "2025-02-06T13:42:48.171Z",
    slug: "konsultatsiia-oftalmoloha",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 200,
    onlinePrice: 0,
    foreignId: 17,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with an ophthalmologist",
        },
        {
          lang: "uk",
          value: "Консультація офтальмолога",
        },
      ],
    },
  },
  {
    id: "fa29f497-558a-4b3d-9b3b-304c451e373a",
    createdAt: "2025-02-20T19:04:15.209Z",
    slug: "konsultatsiia-oftalmoloha-z-kompleksnym-oftalmolohichnym-obstezhenniam",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 2400,
    onlinePrice: null,
    foreignId: 4068,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Консультація офтальмолога з комплексним офтальмологічним обстеженням",
        },
        {
          lang: "en",
          value:
            "Consultation with an ophthalmologist with comprehensive ophthalmological examination",
        },
      ],
    },
  },
  {
    id: "c29c2c4a-7393-4484-93ab-a36421a74ee5",
    createdAt: "2025-02-06T13:42:53.316Z",
    slug: "konsultatsiia-oftalmoloha-z-pidborom-kontaktnykh-linz-precision",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 190,
    onlinePrice: 0,
    foreignId: 781,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Consultation with an ophthalmologist with fitting of Precision contact lenses",
        },
        {
          lang: "uk",
          value:
            "Консультація офтальмолога з підбором контактних лінз Precision",
        },
      ],
    },
  },
  {
    id: "a5351f02-cc7e-41a1-83f8-8151f7eb9e01",
    createdAt: "2025-02-06T13:42:53.323Z",
    slug: "konsultatsiia-oftalmoloha-z-pidborom-kontaktnykh-linz-pure-vision",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 200,
    onlinePrice: 0,
    foreignId: 782,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Консультація офтальмолога з підбором контактних лінз Pure Vision",
        },
        {
          lang: "en",
          value:
            "Consultation with an ophthalmologist with fitting of Pure Vision contact lenses",
        },
      ],
    },
  },
  {
    id: "fc36a959-1819-4328-bb87-30279d4d7445",
    createdAt: "2025-02-20T19:04:09.959Z",
    slug: "konsultatsiia-pediatra-1",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1440,
    onlinePrice: 1200,
    foreignId: 2486,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a pediatrician",
        },
        {
          lang: "uk",
          value: "Консультація педіатра",
        },
      ],
    },
  },
  {
    id: "45e242bb-7ed5-4634-801a-4a7cfc02a305",
    createdAt: "2025-02-06T13:42:48.197Z",
    slug: "konsultatsiia-pediatra",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 200,
    onlinePrice: 0,
    foreignId: 20,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a pediatrician",
        },
        {
          lang: "uk",
          value: "Консультація педіатра",
        },
      ],
    },
  },
  {
    id: "4be7adc8-af5c-4b3f-931f-9aa7ec0bb9df",
    createdAt: "2025-02-20T19:04:15.094Z",
    slug: "konsultatsiia-pediatra-providnoho-spetsialista",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1800,
    onlinePrice: 1300,
    foreignId: 2488,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація педіатра (провідного спеціаліста)",
        },
        {
          lang: "en",
          value: "Consultation with a pediatrician (leading specialist)",
        },
      ],
    },
  },
  {
    id: "518aeee7-ffaf-4f85-8459-16cc63664f04",
    createdAt: "2025-02-20T19:04:10.437Z",
    slug: "konsultatsiia-pediatra-druhoyi-dytyny-u-mezhakh-odnoho-pryiomu",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1630,
    onlinePrice: null,
    foreignId: 2489,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Consultation with a pediatrician for a second child (within the same visit)",
        },
        {
          lang: "uk",
          value: "Консультація педіатра другої дитини (у межах одного прийому)",
        },
      ],
    },
  },
  {
    id: "cd271add-00ae-4375-b4a4-8cfc1551cc7b",
    createdAt: "2025-02-20T19:04:15.109Z",
    slug: "konsultatsiia-pediatra-eksperta-napriamku",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1500,
    onlinePrice: 0,
    foreignId: 2487,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a pediatrician (expert in the field)",
        },
        {
          lang: "uk",
          value: "Консультація педіатра експерта напрямку",
        },
      ],
    },
  },
  {
    id: "ad2b99ef-d592-42b3-ba11-3911252445c2",
    createdAt: "2025-02-20T19:04:11.282Z",
    slug: "konsultatsiia-pediatra-vdoma-1-km-zona",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 2400,
    onlinePrice: null,
    foreignId: 6317,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація педіатра за межами МЦ (1 км. зона)",
        },
        {
          lang: "en",
          value:
            "Consultation with a pediatrician outside the medical center (1 km zone)",
        },
      ],
    },
  },
  {
    id: "72311bd6-5266-4a69-99a4-e0a5150e7aa8",
    createdAt: "2025-02-20T19:04:12.915Z",
    slug: "konsultatsiia-pediatra-na-vyyizdi-mkyyiv",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 300,
    onlinePrice: null,
    foreignId: 4158,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація педіатра на виїзді, м.Київ",
        },
        {
          lang: "en",
          value: "Consultation with a pediatrician (on-site visit, Kyiv)",
        },
      ],
    },
  },
  {
    id: "a6b0b52f-4df5-4239-a3a6-da02bd4ba109",
    createdAt: "2025-02-20T19:04:15.085Z",
    slug: "konsultatsiia-pediatra-po-dohliadu-za-novonarodzhenym",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1200,
    onlinePrice: null,
    foreignId: 6380,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація педіатра по догляду за новонародженим",
        },
        {
          lang: "en",
          value: "Consultation with a pediatrician on newborn care",
        },
      ],
    },
  },
  {
    id: "9b1cd2d1-6251-43a2-ac33-c155191758a7",
    createdAt: "2025-02-20T19:04:15.375Z",
    slug: "konsultatsiia-proktoloha",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: null,
    foreignId: 2478,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація проктолога",
        },
        {
          lang: "en",
          value: "Consultation with a proctologist",
        },
      ],
    },
  },
  {
    id: "aac8d338-ecbd-4af0-b9e5-703398e8aee6",
    createdAt: "2025-02-20T19:04:15.359Z",
    slug: "konsultatsiia-psykhiatra",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 2070,
    onlinePrice: null,
    foreignId: 2473,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація психіатра",
        },
        {
          lang: "en",
          value: "Consultation with a psychiatrist",
        },
      ],
    },
  },
  {
    id: "0964a9e8-47d1-40a9-956d-8043635ff0e5",
    createdAt: "2025-02-20T19:04:10.190Z",
    slug: "konsultatsiia-psykholoha",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 1100,
    onlinePrice: 1600,
    foreignId: 4103,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація психолога",
        },
        {
          lang: "en",
          value: "Consultation with a psychologist",
        },
      ],
    },
  },
  {
    id: "77bfdc94-9b7a-4d5b-97ec-18d015bcf441",
    createdAt: "2025-02-20T19:04:10.547Z",
    slug: "konsultatsiia-psykholoha-sam-aganov-phd",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 3500,
    onlinePrice: null,
    foreignId: 4169,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація психолога (Sam Aganov, Ph.D.)",
        },
        {
          lang: "en",
          value: "Consultation with a psychologist (Sam Aganov, Ph.D.)",
        },
      ],
    },
  },
  {
    id: "56616da9-d0b7-4c57-96f3-599f1acf7b4b",
    createdAt: "2025-02-20T19:04:15.282Z",
    slug: "konsultatsiia-psykholoha-hrupova",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 1200,
    onlinePrice: null,
    foreignId: 4051,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Group consultation with a psychologist",
        },
        {
          lang: "uk",
          value: "Консультація психолога групова",
        },
      ],
    },
  },
  {
    id: "f790bdb0-9aad-4e09-a769-075e9a33a9a4",
    createdAt: "2025-02-20T19:04:15.243Z",
    slug: "konsultatsiia-psykholoha-z-biofidbek-ta-neirofidbek-sam-aganov-phd",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 7000,
    onlinePrice: null,
    foreignId: 4170,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Консультація психолога з біо-фідбек та нейро-фідбек (Sam Aganov, Ph.D.)",
        },
        {
          lang: "en",
          value:
            "Consultation with a psychologist with biofeedback and neurofeedback (Sam Aganov, Ph.D.)",
        },
      ],
    },
  },
  {
    id: "823a780e-efd7-43d1-b46a-9d697d08e36b",
    createdAt: "2025-02-20T19:04:10.538Z",
    slug: "konsultatsiia-psykholoha-indyvidualna",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 1600,
    onlinePrice: null,
    foreignId: 4048,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація психолога індивідуальна",
        },
        {
          lang: "en",
          value: "Individual consultation with a psychologist",
        },
      ],
    },
  },
  {
    id: "6f00d932-407e-496e-b31e-1b0967a95d8a",
    createdAt: "2025-02-20T19:04:13.585Z",
    slug: "konsultatsiia-psykholoha-parnasimeina-15-hodyny",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 2400,
    onlinePrice: null,
    foreignId: 4050,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Couple/family consultation with a psychologist (1.5 hours)",
        },
        {
          lang: "uk",
          value: "Консультація психолога парна/сімейна (1,5 години)",
        },
      ],
    },
  },
  {
    id: "502891dd-9db0-4152-81a4-de05c9fd5485",
    createdAt: "2025-02-20T19:04:10.309Z",
    slug: "konsultatsiia-psykholoha-laifkouchynh-nada-havish",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: null,
    onlinePrice: 4000,
    foreignId: 4106,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "консультація психолога, лайф-коучинг (Нада Гавіш)",
        },
        {
          lang: "en",
          value:
            "Consultation with a psychologist, life coaching (Nada Gavish)",
        },
      ],
    },
  },
  {
    id: "c06b67c2-2567-42d9-8641-6f4fcf4bdf3d",
    createdAt: "2025-02-20T19:04:15.216Z",
    slug: "konsultatsiia-simeinoho-likaria",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 0,
    onlinePrice: 1100,
    foreignId: 4108,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація сімейного лікаря",
        },
        {
          lang: "en",
          value: "Consultation with a family doctor",
        },
      ],
    },
  },
  {
    id: "06d7ad94-81a3-4338-b2c7-8acc99e15041",
    createdAt: "2025-02-20T19:04:15.147Z",
    slug: "konsultatsiia-simeinoho-likaria-dlia-ditei",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 1300,
    onlinePrice: 1200,
    foreignId: 2458,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація сімейного лікаря (для дітей)",
        },
        {
          lang: "en",
          value: "Consultation with a family doctor (for children)",
        },
      ],
    },
  },
  {
    id: "e8124a71-8bc8-45e7-97fa-8bd04ad3073e",
    createdAt: "2025-02-20T19:04:09.586Z",
    slug: "konsultatsiia-simeinoho-likaria-dlia-ditei-vdoma-1-km-zona",
    sectionId: "294648de-cbdc-4b3f-b295-ce8c919b0135",
    price: 2400,
    onlinePrice: null,
    foreignId: 6319,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Консультація сімейного лікаря (для дітей) за межами МЦ (1 км. зона)",
        },
        {
          lang: "en",
          value:
            "Consultation with a family doctor (for children) outside the medical center (1 km zone)",
        },
      ],
    },
  },
  {
    id: "79e23f3c-414a-409a-9f3b-370e6530057a",
    createdAt: "2025-02-20T19:04:09.774Z",
    slug: "konsultatsiia-simeinoho-likaria-dlia-doroslykh",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1300,
    onlinePrice: 1200,
    foreignId: 2457,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a family doctor (for adults)",
        },
        {
          lang: "uk",
          value: "Консультація сімейного лікаря (для дорослих)",
        },
      ],
    },
  },
  {
    id: "c2e4985c-98fe-4aa9-81f0-2e279388578d",
    createdAt: "2025-02-20T19:04:12.218Z",
    slug: "konsultatsiia-simeinoho-likaria-vdoma-1-km-zona",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 2400,
    onlinePrice: null,
    foreignId: 6318,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація сімейного лікаря за межами МЦ (1 км. зона)",
        },
        {
          lang: "en",
          value:
            "Consultation with a family doctor outside the medical center (1 km zone)",
        },
      ],
    },
  },
  {
    id: "b3af891c-52e9-4dda-ba4a-c703177c905b",
    createdAt: "2025-03-10T10:23:32.170Z",
    slug: "konsultatsiia-simeinoho-likaria-na-vyyizdi-mkyyiv",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 3400,
    onlinePrice: null,
    foreignId: 6699,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a family doctor (on-site visit, Kyiv)",
        },
        {
          lang: "uk",
          value: "Консультація сімейного лікаря на виїзді, м.Київ",
        },
      ],
    },
  },
  {
    id: "3fd2bb07-f37c-4366-b905-50611692148a",
    createdAt: "2025-02-20T19:04:10.247Z",
    slug: "konsultatsiia-spetsializovana",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1500,
    onlinePrice: null,
    foreignId: 2459,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Specialized consultation",
        },
        {
          lang: "uk",
          value: "Консультація спеціалізована",
        },
      ],
    },
  },
  {
    id: "e8538546-571c-41a0-b6a5-322db5649881",
    createdAt: "2025-02-20T19:04:15.351Z",
    slug: "konsultatsiia-spetsializovana-konsultantekspert",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1900,
    onlinePrice: null,
    foreignId: 2460,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Specialized consultation (consultant-expert)",
        },
        {
          lang: "uk",
          value: "Консультація спеціалізована (консультант-експерт)",
        },
      ],
    },
  },
  {
    id: "1001e9bb-032a-471e-b098-7c54493ade43",
    createdAt: "2025-02-20T19:04:14.542Z",
    slug: "konsultatsiia-spetsialista-z-hrudnoho-vyhodovuvannia-u-mts",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1400,
    onlinePrice: null,
    foreignId: 5621,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація спеціаліста з грудного вигодовування (у МЦ)",
        },
        {
          lang: "en",
          value:
            "Consultation with a breastfeeding specialist (at the medical center)",
        },
      ],
    },
  },
  {
    id: "bf93a056-a744-4c21-b6b7-6357297700e5",
    createdAt: "2025-02-20T19:04:15.383Z",
    slug: "konsultatsiia-sudynnoho-khirurha",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: null,
    foreignId: 2480,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація судинного хірурга",
        },
        {
          lang: "en",
          value: "Consultation with a vascular surgeon",
        },
      ],
    },
  },
  {
    id: "757fb3a3-675b-417d-8196-b9ab52b9c453",
    createdAt: "2025-02-06T13:42:48.106Z",
    slug: "konsultatsiia-terapevta",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 200,
    onlinePrice: 0,
    foreignId: 11,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація терапевта",
        },
        {
          lang: "en",
          value: "Consultation with a therapist",
        },
      ],
    },
  },
  {
    id: "c55df86a-592a-4a66-9eac-466505a3a04b",
    createdAt: "2025-02-20T19:04:15.155Z",
    slug: "konsultatsiia-terapevta-1",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1400,
    onlinePrice: 1200,
    foreignId: 2451,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація терапевта",
        },
        {
          lang: "en",
          value: "Consultation with a therapist",
        },
      ],
    },
  },
  {
    id: "c4ac760d-3a6c-45fc-9ec5-6a13b356a1c5",
    createdAt: "2025-02-20T19:04:15.342Z",
    slug: "konsultatsiia-terapevta-eksperta-napriamku-dlia-doroslykh",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1700,
    onlinePrice: null,
    foreignId: 2452,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація терапевта (експерта напрямку)",
        },
        {
          lang: "en",
          value:
            "Consultation with a therapist (expert in the field) for adults",
        },
      ],
    },
  },
  {
    id: "dc120446-5329-40e6-bc93-d3cab9f98e3b",
    createdAt: "2025-02-26T14:23:23.998Z",
    slug: "konsultatsiia-terapevta-za-mezhamy-mts-1-km-zona",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 2400,
    onlinePrice: null,
    foreignId: 6578,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Consultation with a therapist outside the medical center (1 km zone)",
        },
        {
          lang: "uk",
          value: "Консультація терапевта за межами МЦ (1 км. зона)",
        },
      ],
    },
  },
  {
    id: "48d5885e-1bed-486d-8ad3-949e6ad2b168",
    createdAt: "2025-02-20T19:04:14.760Z",
    slug: "konsultatsiia-terapevta-na-vyyizdi-za-mezhamy-mkyyiv-30-km-zona",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 3900,
    onlinePrice: null,
    foreignId: 2454,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Consultation with a therapist (on-site visit, outside Kyiv, 30 km zone)",
        },
        {
          lang: "uk",
          value:
            "Консультація терапевта на виїзді, за межами м.Київ (30 км. зона)",
        },
      ],
    },
  },
  {
    id: "5534732e-9c7d-4f4e-b4d1-cfbd094774af",
    createdAt: "2025-02-20T19:04:14.747Z",
    slug: "konsultatsiia-terapevta-na-vyyizdi-mkyyiv",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 3400,
    onlinePrice: null,
    foreignId: 2453,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація терапевта на виїзді, м.Київ",
        },
        {
          lang: "en",
          value: "Consultation with a therapist (on-site visit, Kyiv)",
        },
      ],
    },
  },
  {
    id: "64d5b63c-284e-4c66-b4ac-8df48a2c6f1e",
    createdAt: "2025-02-20T19:04:15.392Z",
    slug: "konsultatsiia-uroloha-1",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: null,
    foreignId: 2484,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a urologist",
        },
        {
          lang: "uk",
          value: "Консультація уролога",
        },
      ],
    },
  },
  {
    id: "a42004b8-2564-42a9-918e-72add48e2930",
    createdAt: "2025-02-06T13:42:48.163Z",
    slug: "konsultatsiia-uroloha",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 250,
    onlinePrice: null,
    foreignId: 16,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація уролога",
        },
      ],
    },
  },
  {
    id: "41647a7a-ee92-4852-ab51-31d585ce615a",
    createdAt: "2025-02-20T19:04:09.799Z",
    slug: "konsultatsiia-khirurha-1",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: 1440,
    onlinePrice: null,
    foreignId: 2479,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Consultation with a surgeon",
        },
        {
          lang: "uk",
          value: "Консультація хірурга",
        },
      ],
    },
  },
  {
    id: "28b4e762-5647-42a3-aaf5-97ff4d7d84d8",
    createdAt: "2025-02-06T13:42:48.142Z",
    slug: "konsultatsiia-khirurha",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 200,
    onlinePrice: 0,
    foreignId: 14,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Консультація хірурга",
        },
        {
          lang: "en",
          value: "Consultation with a surgeon",
        },
      ],
    },
  },
  {
    id: "02eb9f37-9682-43ae-bdff-84d9ab149351",
    createdAt: "2025-02-06T13:42:53.239Z",
    slug: "kontaktni-linzy-acuvue-oasys",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1200,
    onlinePrice: 0,
    foreignId: 770,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Контактні лінзи Acuvue Oasys",
        },
        {
          lang: "en",
          value: "Contact lenses Acuvue Oasys",
        },
      ],
    },
  },
  {
    id: "f47f92be-b2a2-440e-b1ec-887f3b85c109",
    createdAt: "2025-02-06T13:42:53.246Z",
    slug: "kontaktni-linzy-air-optix-night-day-aqua",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1300,
    onlinePrice: 0,
    foreignId: 771,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Contact lenses Air Optix Night & Day Aqua",
        },
        {
          lang: "uk",
          value: "Контактні лінзи Air Optix Night & Day Aqua",
        },
      ],
    },
  },
  {
    id: "a6e22e73-acbe-4182-98fd-926d50eacb89",
    createdAt: "2025-02-06T13:42:53.253Z",
    slug: "kontaktni-linzy-air-optix-plus-hydraglyde",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1400,
    onlinePrice: 0,
    foreignId: 772,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Контактні лінзи Air Optix plus HydraGlyde",
        },
        {
          lang: "en",
          value: "Contact lenses Air Optix plus HydraGlyde",
        },
      ],
    },
  },
  {
    id: "2bcbd52c-a6e8-4f38-86c9-12b1fe651262",
    createdAt: "2025-02-06T13:42:53.259Z",
    slug: "kontaktni-linzy-biofinity",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1500,
    onlinePrice: 0,
    foreignId: 773,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Contact lenses Biofinity",
        },
        {
          lang: "uk",
          value: "Контактні лінзи Biofinity",
        },
      ],
    },
  },
  {
    id: "8cb2c430-7eb1-4e82-9881-5118fc3e25bd",
    createdAt: "2025-02-06T13:42:53.266Z",
    slug: "kontaktni-linzy-biofinity-toric",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1600,
    onlinePrice: 0,
    foreignId: 774,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Contact lenses Biofinity toric",
        },
        {
          lang: "uk",
          value: "Контактні лінзи Biofinity toric",
        },
      ],
    },
  },
  {
    id: "c662f0fd-9608-47c4-a255-56b2b2d3af81",
    createdAt: "2025-02-06T13:42:53.273Z",
    slug: "kontaktni-linzy-biofinity-xr",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1500,
    onlinePrice: 0,
    foreignId: 775,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Contact lenses Biofinity XR",
        },
        {
          lang: "uk",
          value: "Контактні лінзи Biofinity XR",
        },
      ],
    },
  },
  {
    id: "273d5e77-7a7c-4f44-ad42-f897189f4176",
    createdAt: "2025-02-06T13:42:53.280Z",
    slug: "kontaktni-linzy-dailies-aquacomfort-plus",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1400,
    onlinePrice: 0,
    foreignId: 776,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Contact lenses Dailies AquaComfort Plus",
        },
        {
          lang: "uk",
          value: "Контактні лінзи Dailies AquaComfort Plus",
        },
      ],
    },
  },
  {
    id: "a6ed6304-eb8b-429a-bcc7-f00ba2d0b4f6",
    createdAt: "2025-02-06T13:42:53.288Z",
    slug: "kontaktni-linzy-dailies-total",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1300,
    onlinePrice: 0,
    foreignId: 777,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Контактні лінзи Dailies Total",
        },
        {
          lang: "en",
          value: "Contact lenses Dailies Total",
        },
      ],
    },
  },
  {
    id: "8486a9b6-3c63-4eea-ae82-cc746da84204",
    createdAt: "2025-02-06T13:42:53.294Z",
    slug: "kontaktni-linzy-optima-fw",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1200,
    onlinePrice: 0,
    foreignId: 778,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Контактні лінзи Optima FW",
        },
        {
          lang: "en",
          value: "Contact lenses Optima FW",
        },
      ],
    },
  },
  {
    id: "467f5ff7-6027-4ab2-b2f5-8247191dadc7",
    createdAt: "2025-02-06T13:42:53.303Z",
    slug: "kontaktni-linzy-precision",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1300,
    onlinePrice: 0,
    foreignId: 779,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Контактні лінзи Precision",
        },
        {
          lang: "en",
          value: "Contact lenses Precision",
        },
      ],
    },
  },
  {
    id: "cecb1bf7-81f2-4298-ae1b-567df0c25ded",
    createdAt: "2025-02-06T13:42:53.310Z",
    slug: "kontaktni-linzy-purevision",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1400,
    onlinePrice: 1000,
    foreignId: 780,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Contact lenses PureVision",
        },
        {
          lang: "uk",
          value: "Контактні лінзи PureVision",
        },
      ],
    },
  },
  {
    id: "2add3429-8c30-4aa7-b514-d9745ba65877",
    createdAt: "2025-02-20T19:04:13.576Z",
    slug: "korektsiia-povedinkovykh-porushen-40-khv",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 900,
    onlinePrice: null,
    foreignId: 6382,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Behavioral disorder correction (40 min.)",
        },
        {
          lang: "uk",
          value: "Корекція поведінкових порушень (40 хв.)",
        },
      ],
    },
  },
  {
    id: "8edffe2c-3e1c-471e-915f-06ba54bffadb",
    createdAt: "2025-02-06T13:42:53.606Z",
    slug: "koronavirus-sarscov2-covid19-rnk-metodom-rtplriakisnyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 848,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Коронавірус (SARS-Cov-2), COVID-19, РНК методом RT-ПЛР-якісний",
        },
        {
          lang: "en",
          value:
            "Coronavirus (SARS-CoV-2), COVID-19, RNA by RT-PCR - qualitative",
        },
      ],
    },
  },
  {
    id: "811dcf6e-432a-4432-83fe-522cceb64e47",
    createdAt: "2025-02-06T13:42:50.243Z",
    slug: "koronavirus-sarscov2-covid19-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 378,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Coronavirus SARS-CoV-2 (COVID-19), IgG antibodies",
        },
        {
          lang: "uk",
          value: "Коронавірус SARS-CoV-2 (COVID-19), антитіла IgG",
        },
      ],
    },
  },
  {
    id: "bc015df4-41df-44db-b619-61311782c321",
    createdAt: "2025-02-06T13:42:50.273Z",
    slug: "koronavirus-sarscov2-covid19-antytila-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 382,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Coronavirus SARS-CoV-2 (COVID-19), IgM antibodies",
        },
        {
          lang: "uk",
          value: "Коронавірус SARS-CoV-2 (COVID-19), антитіла IgM",
        },
      ],
    },
  },
  {
    id: "4cd94e3b-7468-4cb9-9b09-0b0fb6eea935",
    createdAt: "2025-02-06T13:42:52.676Z",
    slug: "kortyzol-secha-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 684,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кортизол (сеча) \\ N",
        },
        {
          lang: "en",
          value: "Cortisol (urine) \\ N",
        },
      ],
    },
  },
  {
    id: "994fe580-2d80-4b11-b46b-ad9acaa47df8",
    createdAt: "2025-02-06T13:42:50.497Z",
    slug: "kortyzol-syrovatka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 404,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кортизол (сироватка)",
        },
        {
          lang: "en",
          value: "Cortisol (serum)",
        },
      ],
    },
  },
  {
    id: "eb951380-1bc7-4902-9483-04e1356fb4aa",
    createdAt: "2025-02-06T13:42:50.527Z",
    slug: "kortyzol-slyna-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 408,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Кортизол (слина) \\ N",
        },
        {
          lang: "en",
          value: "Cortisol (saliva) \\ N",
        },
      ],
    },
  },
  {
    id: "4ddd7ecd-d370-4794-aa39-c13e5af8e69f",
    createdAt: "2025-02-20T19:04:15.202Z",
    slug: "kouchynh",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 1900,
    onlinePrice: null,
    foreignId: 4105,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Коучинг",
        },
        {
          lang: "en",
          value: "Coaching",
        },
      ],
    },
  },
  {
    id: "f338819c-116d-4f3b-a83f-e24b6b0813da",
    createdAt: "2025-02-20T19:04:15.290Z",
    slug: "kouchynh-sam-aganov-phd",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 4500,
    onlinePrice: null,
    foreignId: 4171,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Coaching (Sam Aganov, Ph.D.)",
        },
        {
          lang: "uk",
          value: "Коучинг (Sam Aganov, Ph.D.)",
        },
      ],
    },
  },
  {
    id: "c991527f-b0d5-44ad-abdf-1098a3983db0",
    createdAt: "2025-02-20T19:04:15.171Z",
    slug: "kouchynh-z-biofidbek-ta-neirofidbek-sam-aganov-phd",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 8000,
    onlinePrice: null,
    foreignId: 2619,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Коучинг з біо-фідбек та нейро-фідбек (Sam Aganov, Ph.D.)",
        },
        {
          lang: "en",
          value:
            "Coaching with biofeedback and neurofeedback (Sam Aganov, Ph.D.)",
        },
      ],
    },
  },
  {
    id: "ffff41af-e592-43be-86cf-dae1faf5bd42",
    createdAt: "2025-02-20T19:04:09.507Z",
    slug: "kraiova-rezektsiia-nihtovoyi-plastyny-u-ditei",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 900,
    onlinePrice: null,
    foreignId: 6493,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Marginal resection of the nail plate (in children)",
        },
        {
          lang: "uk",
          value: "Крайова резекція нігтьової пластини (у дітей)",
        },
      ],
    },
  },
  {
    id: "4d6e9c66-29fe-47a0-9ad0-7f838ad38c2b",
    createdAt: "2025-02-20T19:04:15.672Z",
    slug: "kraiova-rezektsiia-nihtovoyi-plastyny-pry-vroslomu-nihti",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 3800,
    onlinePrice: null,
    foreignId: 2635,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Marginal resection of the nail plate for ingrown toenail",
        },
        {
          lang: "uk",
          value: "Крайова резекція нігтьової пластини при врослому нігті",
        },
      ],
    },
  },
  {
    id: "21460afe-4d36-4ce7-b4fa-76214d6aaf3a",
    createdAt: "2025-02-06T13:42:49.072Z",
    slug: "kreatynin",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 198,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Креатинін",
        },
        {
          lang: "en",
          value: "Creatinine",
        },
      ],
    },
  },
  {
    id: "3fa34881-421e-494b-bc07-5fa91228520f",
    createdAt: "2025-02-06T13:42:52.776Z",
    slug: "kreatynin-dobova-secha",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 692,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Креатинін (добова сеча)",
        },
        {
          lang: "en",
          value: "Creatinine (daily urine)",
        },
      ],
    },
  },
  {
    id: "fd543156-3068-425a-98fb-93ee7af81be3",
    createdAt: "2025-02-06T13:42:52.720Z",
    slug: "kreatynin-secha",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 687,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Креатинін (сеча)",
        },
        {
          lang: "en",
          value: "Creatinine (urine)",
        },
      ],
    },
  },
  {
    id: "3047edca-8b49-401e-837c-4bffc24a50df",
    createdAt: "2025-02-06T13:42:53.578Z",
    slug: "kreatynin-krovi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 844,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Creatinine (blood)",
        },
        {
          lang: "uk",
          value: "Креатинін крові",
        },
      ],
    },
  },
  {
    id: "6adf5442-d422-4c9f-b35f-83b54d4432c3",
    createdAt: "2025-02-06T13:42:53.585Z",
    slug: "kreatynin-sechi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 845,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Креатинін сечі",
        },
        {
          lang: "en",
          value: "Creatinine (urine)",
        },
      ],
    },
  },
  {
    id: "369b5bf8-c97e-489e-a501-e975b9ea7520",
    createdAt: "2025-02-20T19:04:09.486Z",
    slug: "kriodestruktsiia-ridkym-azotom-vydalennia-virusnoyi-borodavky-do-2-mm-1-sht",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 300,
    onlinePrice: null,
    foreignId: 6471,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Cryodestruction with liquid nitrogen (removal of viral wart), up to 2 mm (1 unit)",
        },
        {
          lang: "uk",
          value:
            "Кріодеструкція рідким азотом (видалення вірусної бородавки), до 2 мм (1 шт.)",
        },
      ],
    },
  },
  {
    id: "63ef3a77-4e90-4470-be42-bb09fa6da745",
    createdAt: "2025-02-20T19:04:09.653Z",
    slug: "kriodestruktsiia-ridkym-azotom-vydalennia-virusnoyi-borodavky-do-2-mm-bilshe-odnoho-elementa-1-sht",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 150,
    onlinePrice: null,
    foreignId: 6475,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Кріодеструкція рідким азотом (видалення вірусної бородавки), до 2 мм / більше одного елемента, (1 шт.)",
        },
        {
          lang: "en",
          value:
            "Cryodestruction with liquid nitrogen (removal of viral wart), up to 2 mm / more than one element (1 unit)",
        },
      ],
    },
  },
  {
    id: "bc79f24f-b298-48c6-9350-8520d7d7158d",
    createdAt: "2025-02-20T19:04:09.678Z",
    slug: "kriodestruktsiia-ridkym-azotom-vydalennia-virusnoyi-borodavky-do-5-mm-1-sht",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 500,
    onlinePrice: null,
    foreignId: 6474,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Cryodestruction with liquid nitrogen (removal of viral wart), up to 2 mm / more than one element (1 unit)",
        },
        {
          lang: "uk",
          value:
            "Кріодеструкція рідким азотом (видалення вірусної бородавки), до 5 мм (1 шт.)",
        },
      ],
    },
  },
  {
    id: "fd9b402d-655d-4e52-905b-be43e68106b6",
    createdAt: "2025-02-20T19:04:09.670Z",
    slug: "kriodestruktsiia-ridkym-azotom-vydalennia-virusnoyi-borodavky-do-5-mm-bilshe-odnoho-elementa-1-sht",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 360,
    onlinePrice: null,
    foreignId: 6476,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Кріодеструкція рідким азотом (видалення вірусної бородавки), до 5 мм / більше одного елемента, (1 шт.)",
        },
        {
          lang: "en",
          value:
            "Cryodestruction with liquid nitrogen (removal of viral wart), up to 5 mm / more than one element (1 unit)",
        },
      ],
    },
  },
  {
    id: "d897edef-2f56-4719-924c-e0abc27524ef",
    createdAt: "2025-03-10T10:23:34.211Z",
    slug: "kurs-neirofidbek-biofidbek-6-protsedur",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 7200,
    onlinePrice: null,
    foreignId: 6597,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: " Course of neurofeedback/biofeedback (6 sessions)",
        },
        {
          lang: "uk",
          value: "Курс нейро-фідбек / біо-фідбек (6 процедур)",
        },
      ],
    },
  },
  {
    id: "54c39e8c-16f1-4a43-8655-684a87f5c220",
    createdAt: "2025-02-20T19:04:13.144Z",
    slug: "vazotomiia-nyzhnikh-nosovykh-rakovyn-aparatnym-metodom",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 10500,
    onlinePrice: null,
    foreignId: 6435,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vasotomy of the inferior nasal turbinates (hardware method)",
        },
        {
          lang: "uk",
          value: "Лазерна вазотомія нижніх носових раковин",
        },
      ],
    },
  },
  {
    id: "8a30c159-2f96-454f-945d-a2d0f425ac84",
    createdAt: "2025-03-27T11:03:26.892Z",
    slug: "lazerna-vazotomiia-nyzhnikh-nosovykh-rakovyn-z-vykorystanniam-krovozupyniaiuchykh-splintkateteriv",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 12000,
    onlinePrice: null,
    foreignId: 6713,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Лазерна вазотомія нижніх носових раковин з використанням кровозупиняючих сплінт-катетерів",
        },
      ],
    },
  },
  {
    id: "21834da2-a9d1-4c80-84fd-25f7a6bbd6ca",
    createdAt: "2025-02-20T19:04:09.578Z",
    slug: "lazerna-korektsiia-pidnebinnykh-myhdalykiv",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 17100,
    onlinePrice: null,
    foreignId: 6472,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Laser correction of palatine tonsils",
        },
        {
          lang: "uk",
          value: "Лазерна корекція піднебінних мигдаликів",
        },
      ],
    },
  },
  {
    id: "a9ac78e6-231c-4fa8-9427-ec4e1e43702a",
    createdAt: "2025-02-20T19:04:09.896Z",
    slug: "lazerna-korektsiia-iazychnoho-myhdalyka",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 9900,
    onlinePrice: null,
    foreignId: 6473,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лазерна корекція язичного мигдалика",
        },
        {
          lang: "en",
          value: "Laser correction of lingual tonsil",
        },
      ],
    },
  },
  {
    id: "bae3cd38-b2e3-4ddc-84e4-c55d9f2ab898",
    createdAt: "2025-02-20T19:04:09.703Z",
    slug: "lazerne-vydalennia-hranuloznykh-rozrostan-zadnoyi-stinky-hlotky",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 6500,
    onlinePrice: null,
    foreignId: 6477,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Лазерне видалення гранульозних розростань задньої стінки глотки",
        },
        {
          lang: "en",
          value:
            "Laser removal of granulomatous growths on the posterior pharyngeal wall",
        },
      ],
    },
  },
  {
    id: "e51a11e5-b474-4873-ad15-8062ae8751c9",
    createdAt: "2025-02-20T19:04:09.465Z",
    slug: "lazerne-vydalennia-hranuloznykh-rozrostan-pidnebinnoyi-duzhky",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 6500,
    onlinePrice: null,
    foreignId: 6567,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Laser removal of granular growths on the palatine arch",
        },
        {
          lang: "uk",
          value: "Лазерне видалення гранульозних розростань піднебінної дужки",
        },
      ],
    },
  },
  {
    id: "1c2f8868-1ae8-45ba-8975-18d97c5f79b1",
    createdAt: "2025-02-20T19:04:09.554Z",
    slug: "lazerne-vydalennia-papilom-papilomatoznykh-nevusiv-keratozu-u-ditei",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 3600,
    onlinePrice: null,
    foreignId: 6490,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Лазерне видалення папілом, папіломатозних невусів, кератозу (у дітей)",
        },
        {
          lang: "en",
          value:
            "Laser removal of papillomas, papillomatous nevi, and keratosis (in children)",
        },
      ],
    },
  },
  {
    id: "b1f2a658-df16-4cfb-85fb-4872c214bfaf",
    createdAt: "2025-02-26T14:23:26.697Z",
    slug: "lazerne-vyparovuvannia-rozshyrenykh-sudyn-kisselbakhova-spletinnia",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 6500,
    onlinePrice: null,
    foreignId: 6580,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Лазерне випаровування розширених судин Кіссельбахова сплетіння",
        },
        {
          lang: "en",
          value:
            "Laser vaporization of dilated vessels in the Kiesselbach plexus",
        },
      ],
    },
  },
  {
    id: "dc030c8f-b7bd-49b8-b050-20598793cefe",
    createdAt: "2025-02-20T19:04:09.938Z",
    slug: "lazerne-likuvannia-ronkhopatiyi-pidnebinnoho-khropinnia-ta-apnoe-z-uvulopalatoplastykoiu",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 19500,
    onlinePrice: null,
    foreignId: 6468,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Лазерне лікування ронхопатії (піднебінного хропіння) та апное (з увулопалатопластикою)",
        },
        {
          lang: "en",
          value:
            "Laser treatment of rhonchopathy (palatal snoring) and apnea (with uvulopalatoplasty)",
        },
      ],
    },
  },
  {
    id: "c8d2032b-c2eb-470b-8122-01fe4ed1e48d",
    createdAt: "2025-02-06T13:42:51.475Z",
    slug: "laminektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 526,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Laminectomy",
        },
        {
          lang: "uk",
          value: "Ламінектомія",
        },
      ],
    },
  },
  {
    id: "d4718f6a-ea9f-4a8f-9e95-49ce06a91212",
    createdAt: "2025-02-06T13:42:53.713Z",
    slug: "laparoskopiia-diahnostychna",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 10000,
    onlinePrice: 0,
    foreignId: 871,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лапароскопія діагностична",
        },
        {
          lang: "en",
          value: "Diagnostic laparoscopy",
        },
      ],
    },
  },
  {
    id: "6f5c7c5c-88a9-43e2-8a79-ba4bc512fc35",
    createdAt: "2025-02-06T13:42:51.135Z",
    slug: "leptyn-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 484,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Leptin \\ N",
        },
        {
          lang: "uk",
          value: "Лептин \\ N",
        },
      ],
    },
  },
  {
    id: "f46f1995-ed8a-4933-9c12-c32bd37603ec",
    createdAt: "2025-02-06T13:42:49.064Z",
    slug: "lizhkoden-u-statsionari",
    sectionId: "70f3c530-541f-465a-8ad8-a02bfe3c2162",
    price: 2500,
    onlinePrice: 0,
    foreignId: 187,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Bed-day in the hospital",
        },
        {
          lang: "uk",
          value: "Ліжко-день у стаціонарі",
        },
      ],
    },
  },
  {
    id: "fedaad81-7c9e-4b26-8355-174c28dadf18",
    createdAt: "2025-02-20T19:04:10.099Z",
    slug: "likuvalnyi-masazh-vzdovzh-khrebta-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 1000,
    onlinePrice: null,
    foreignId: 2665,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж вздовж хребта *30хв.",
        },
        {
          lang: "en",
          value: "Therapeutic massage along the spine *30 min.",
        },
      ],
    },
  },
  {
    id: "a1f3fbfe-01e2-4aff-a72f-84250087a3d8",
    createdAt: "2025-02-20T19:04:10.329Z",
    slug: "likuvalnyi-masazh-holovy-volosianoyi-chastyny-ta-shyyi-20khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 600,
    onlinePrice: null,
    foreignId: 2676,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж голови (волосяної частини) та шиї *20хв.",
        },
        {
          lang: "en",
          value: "Therapeutic massage of the head (scalp) and neck *20 min.",
        },
      ],
    },
  },
  {
    id: "beea2c5c-d6ab-4858-9d12-7bf543f36394",
    createdAt: "2025-02-20T19:04:10.108Z",
    slug: "likuvalnyi-masazh-hrudnoho-viddilu-20khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 600,
    onlinePrice: null,
    foreignId: 2663,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Therapeutic massage of the thoracic region *20 min.",
        },
        {
          lang: "uk",
          value: "Лікувальний масаж грудного відділу *20хв.",
        },
      ],
    },
  },
  {
    id: "2d3e4793-3bf1-4b59-85b8-d13c544c7a3c",
    createdAt: "2025-02-20T19:04:10.366Z",
    slug: "likuvalnyi-masazh-dlia-ditei-vid-17-rokiv-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 990,
    onlinePrice: null,
    foreignId: 2678,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Therapeutic massage for children aged 1-7 years *30 min.",
        },
        {
          lang: "uk",
          value: "Лікувальний масаж для дітей від 1-7 років *30хв.",
        },
      ],
    },
  },
  {
    id: "fcbe9031-2170-4b68-b56d-a6789ad0aaf6",
    createdAt: "2025-02-20T19:04:10.414Z",
    slug: "likuvalnyi-masazh-dlia-ditei-vid-718-rokiv-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 1200,
    onlinePrice: null,
    foreignId: 2679,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж для дітей від 7-18 років *30хв.",
        },
        {
          lang: "en",
          value: "Therapeutic massage for children aged 7-18 years *30 min.",
        },
      ],
    },
  },
  {
    id: "5d53d1b9-62c9-4947-b41c-6ab6e846023f",
    createdAt: "2025-02-20T19:04:14.739Z",
    slug: "likuvalnyi-masazh-dlia-doroslykh-1-masazhna-zona-20-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 600,
    onlinePrice: null,
    foreignId: 2675,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж для дорослих (1 масажна зона) *20 хв.",
        },
        {
          lang: "en",
          value: "Therapeutic massage for adults (1 massage zone) *20 min.",
        },
      ],
    },
  },
  {
    id: "19c2cf8f-5cf5-467b-b3d0-41553a7548f8",
    createdAt: "2025-02-20T19:04:14.813Z",
    slug: "likuvalnyi-masazh-zhyvota-20-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 660,
    onlinePrice: null,
    foreignId: 4269,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж живота (20 хв.)",
        },
        {
          lang: "en",
          value: "Therapeutic abdominal massage (20 min.)",
        },
      ],
    },
  },
  {
    id: "fa8e80ab-a72a-4e60-8700-84bcb950163e",
    createdAt: "2025-02-20T19:04:14.328Z",
    slug: "likuvalnyi-masazh-zapiastia-ta-peredplichchia-20-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 550,
    onlinePrice: null,
    foreignId: 4267,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж зап'ястя та передпліччя (20 хв.)",
        },
        {
          lang: "en",
          value: "Therapeutic wrist and forearm massage (20 min.)",
        },
      ],
    },
  },
  {
    id: "37dd0f0e-b517-4293-b053-0bc028609491",
    createdAt: "2025-02-20T19:04:12.238Z",
    slug: "likuvalnyi-masazh-obokh-verkhnikh-kintsivok-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 900,
    onlinePrice: null,
    foreignId: 2669,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Therapeutic massage of both upper limbs (30 min.)",
        },
        {
          lang: "uk",
          value: "Лікувальний масаж обох верхніх кінцівок *30хв.",
        },
      ],
    },
  },
  {
    id: "92e73353-6cf7-4d46-9b83-e1a15ed8d6ef",
    createdAt: "2025-02-20T19:04:10.273Z",
    slug: "likuvalnyi-masazh-obokh-nyzhnikh-kintsivok-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 990,
    onlinePrice: null,
    foreignId: 2667,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж обох нижніх кінцівок *30хв.",
        },
        {
          lang: "en",
          value: "Therapeutic massage of both lower limbs (30 min.)",
        },
      ],
    },
  },
  {
    id: "f0da9e20-652a-4f27-a982-27e8f4b2c924",
    createdAt: "2025-02-20T19:04:13.228Z",
    slug: "likuvalnyi-masazh-odniieyi-verkhnoyi-kintsivky-20khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 600,
    onlinePrice: null,
    foreignId: 2668,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Therapeutic massage of one upper limb (20 min.)",
        },
        {
          lang: "uk",
          value: "Лікувальний масаж однієї верхньої кінцівки *20хв.",
        },
      ],
    },
  },
  {
    id: "21392633-f731-4b9c-9098-e4cc168bc8a8",
    createdAt: "2025-02-20T19:04:09.859Z",
    slug: "likuvalnyi-masazh-odniieyi-nyzhnoyi-kintsivky-20khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 800,
    onlinePrice: null,
    foreignId: 2666,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Therapeutic massage of one lower limb (20 min.)",
        },
        {
          lang: "uk",
          value: "Лікувальний масаж однієї нижньої кінцівки *20хв.",
        },
      ],
    },
  },
  {
    id: "72f16fa2-d8e5-4406-9bc9-d2ddc8dcc7e0",
    createdAt: "2025-02-20T19:04:14.299Z",
    slug: "likuvalnyi-masazh-plecha-nadplichchia-ta-shyyi-20-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 600,
    onlinePrice: null,
    foreignId: 4266,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж плеча, надпліччя та шиї (20 хв.)",
        },
        {
          lang: "en",
          value:
            "Therapeutic massage of the shoulder, upper shoulder, and neck (20 min.)",
        },
      ],
    },
  },
  {
    id: "83655241-9488-411f-8ece-bd512fec8213",
    createdAt: "2025-02-20T19:04:10.854Z",
    slug: "likuvalnyi-masazh-poperykovokryzhovoho-viddilu-20khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 630,
    onlinePrice: null,
    foreignId: 2664,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж попериково-крижового відділу *20хв.",
        },
        {
          lang: "en",
          value: "Therapeutic massage of the lumbar-sacral region (20 min.)",
        },
      ],
    },
  },
  {
    id: "a83e7a6d-fca4-4ed2-9391-03954a81c486",
    createdAt: "2025-02-20T19:04:10.840Z",
    slug: "likuvalnyi-masazh-spyny-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 1320,
    onlinePrice: null,
    foreignId: 2661,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Therapeutic back massage (30 min.)",
        },
        {
          lang: "uk",
          value: "Лікувальний масаж спини *30хв.",
        },
      ],
    },
  },
  {
    id: "fb3fc692-42a7-4a42-899a-900b87dac08d",
    createdAt: "2025-02-20T19:04:14.308Z",
    slug: "likuvalnyi-masazh-stop-ta-homilok-20-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 600,
    onlinePrice: null,
    foreignId: 4268,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Therapeutic massage of the feet and calves (20 min.)",
        },
        {
          lang: "uk",
          value: "Лікувальний масаж стоп та гомілок (20 хв.)",
        },
      ],
    },
  },
  {
    id: "86f629d1-15ac-4e2f-9a14-a2efef785cf0",
    createdAt: "2025-02-20T19:04:10.975Z",
    slug: "likuvalnyi-masazh-ta-himnastyka-dlia-ditei-vikom-vid-25-misiatsi-do-1-roku-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 960,
    onlinePrice: null,
    foreignId: 2677,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Лікувальний масаж та гімнастика для дітей віком від 2,5 місяці до 1 року *30хв.",
        },
        {
          lang: "en",
          value:
            "Therapeutic massage and gymnastics for children aged 2.5 months to 1 year (30 min.)",
        },
      ],
    },
  },
  {
    id: "877ad76f-bdf0-4cc8-984b-f18f30116fa6",
    createdAt: "2025-02-20T19:04:10.201Z",
    slug: "likuvalnyi-masazh-shyinokomirtsevoyi-zony-20khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 630,
    onlinePrice: null,
    foreignId: 2662,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лікувальний масаж шийно-комірцевої зони *20хв.",
        },
        {
          lang: "en",
          value: "Therapeutic massage of the cervical-collar zone (20 min.)",
        },
      ],
    },
  },
  {
    id: "577c4242-6d3f-4402-b878-f09667db08ae",
    createdAt: "2025-02-06T13:42:49.484Z",
    slug: "limfodysektsiia-vartovoho-limfovuzla-pry-melanomi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 278,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Sentinel lymph node lymph dissection for melanoma",
        },
        {
          lang: "uk",
          value: "Лімфодисекція вартового лімфовузла при меланомі",
        },
      ],
    },
  },
  {
    id: "999c0a89-3469-4f8e-9987-29ee154e7f21",
    createdAt: "2025-02-20T19:04:14.821Z",
    slug: "limfodrenadnyi-masazh-zahalnyi-80-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 2300,
    onlinePrice: null,
    foreignId: 4264,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "General lymphatic drainage massage (80 min.)",
        },
        {
          lang: "uk",
          value: "Лімфодренадний масаж загальний (80 хв.)",
        },
      ],
    },
  },
  {
    id: "d09569f7-26f4-43b0-8197-3f55b13896b5",
    createdAt: "2025-02-20T19:04:09.887Z",
    slug: "limfodrenazhnyi-masazh-oblychchia-30-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 1090,
    onlinePrice: null,
    foreignId: 4263,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лімфодренажний масаж обличчя (30 хв.)",
        },
        {
          lang: "en",
          value: "Lymphatic drainage massage of the face (30 min.)",
        },
      ],
    },
  },
  {
    id: "301e76f9-fc82-4c0b-ab1f-ac55982b63c8",
    createdAt: "2025-02-06T13:42:51.764Z",
    slug: "lipoproteyidy-duzhe-nyzkoyi-shchilnosti-lpdnshch-vldl-tryhlitserydy-lndnshch",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 564,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Very low-density lipoproteins (VLDL) / VLDL (triglycerides, LDL)",
        },
        {
          lang: "uk",
          value:
            "Ліпопротеїди дуже низької щільності (ЛПДНЩ) / VLDL (тригліцериди, ЛНДНЩ)",
        },
      ],
    },
  },
  {
    id: "ea1a17ae-27d9-4746-ac63-39f3c73487a3",
    createdAt: "2025-02-06T13:42:51.742Z",
    slug: "lipoproteyidy-nyzkoyi-shchilnosti-lpnshch-ldlc",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 561,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Low-density lipoproteins (LDL) / LDLC",
        },
        {
          lang: "uk",
          value: "Ліпопротеїди низької щільності (ЛПНЩ) / LDLC",
        },
      ],
    },
  },
  {
    id: "b1cdea88-aef7-4fcb-a6d8-fc4f3eddcc6e",
    createdAt: "2025-02-06T13:42:51.780Z",
    slug: "lipoproteyin-a-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 566,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Lipoprotein (a) / N",
        },
        {
          lang: "uk",
          value: "Ліпопротеїн (а) \\ N",
        },
      ],
    },
  },
  {
    id: "4c711526-431e-4c55-82d4-9e079386da15",
    createdAt: "2025-02-06T13:42:52.231Z",
    slug: "lobektomiia-pulmonektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 626,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лобектомія / пульмонектомія*",
        },
        {
          lang: "en",
          value: "Lobectomy / pneumonectomy*",
        },
      ],
    },
  },
  {
    id: "d1f13df0-fda4-4fe8-b14a-73df1d0de604",
    createdAt: "2025-02-06T13:42:50.853Z",
    slug: "lobektomiia-shchytopodibnoyi-zalozy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 446,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лобектомія щитоподібної залози",
        },
        {
          lang: "en",
          value: "Thyroid lobectomy",
        },
      ],
    },
  },
  {
    id: "3b60d9aa-36a1-4b11-bfd0-b94aa31ba9e1",
    createdAt: "2025-02-06T13:42:48.727Z",
    slug: "luzhna-fosfataza",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 30,
    onlinePrice: 0,
    foreignId: 72,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Alkaline phosphatase",
        },
        {
          lang: "uk",
          value: "Лужна фосфатаза",
        },
      ],
    },
  },
  {
    id: "3c28f0cd-56ba-45eb-b7f0-e767fe4b832a",
    createdAt: "2025-02-06T13:42:53.414Z",
    slug: "luzhna-fosfataza-lf-alp",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 819,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Alkaline phosphatase (ALP) / ALP",
        },
        {
          lang: "uk",
          value: "Лужна фосфатаза (ЛФ) / ALP",
        },
      ],
    },
  },
  {
    id: "7c67f3db-f8b4-439b-912a-d6897e229cda",
    createdAt: "2025-02-06T13:42:49.838Z",
    slug: "liuteyinizuiuchyi-hormon-lh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 324,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лютеїнізуючий гормон (ЛГ)",
        },
        {
          lang: "en",
          value: "Luteinizing hormone (LH)",
        },
      ],
    },
  },
  {
    id: "d796eb24-9855-4dd1-9221-fbf54a831255",
    createdAt: "2025-02-06T13:42:50.380Z",
    slug: "liamblioz-giardia-antytila-sumarni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 396,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Лямбліоз (Giardia), антитіла сумарні",
        },
        {
          lang: "en",
          value: "Giardiasis (Giardia), total antibodies",
        },
      ],
    },
  },
  {
    id: "26b64265-e688-40fa-b581-327211a3cb53",
    createdAt: "2025-02-06T13:42:49.876Z",
    slug: "makroprolaktyn-kilkisne-vyznachennia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 329,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Macroprolactin, quantitative determination",
        },
        {
          lang: "uk",
          value: "Макропролактин, кількісне визначення",
        },
      ],
    },
  },
  {
    id: "1844daa1-b396-488f-b2c3-c39a8437ce76",
    createdAt: "2025-02-20T19:04:09.635Z",
    slug: "mala-operatsiia-pid-mistsevoiu-anesteziieiu-1-katehoriia-skladnosti",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1800,
    onlinePrice: null,
    foreignId: 6469,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Мала операція під місцевою анестезією (1 категорія складності)",
        },
        {
          lang: "en",
          value: "Minor surgery under local anesthesia (Category 1 complexity)",
        },
      ],
    },
  },
  {
    id: "00e1d0d3-e6e3-4d16-a781-941f953fd8e2",
    createdAt: "2025-02-20T19:04:09.807Z",
    slug: "mala-operatsiia-pid-mistsevoiu-anesteziieiu-2-katehoriia-skladnosti",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 3600,
    onlinePrice: null,
    foreignId: 6470,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Minor surgery under local anesthesia (Category 2 complexity)",
        },
        {
          lang: "uk",
          value:
            "Мала операція під місцевою анестезією (2 категорія складності)",
        },
      ],
    },
  },
  {
    id: "245dc821-79d8-45d8-a91b-c8d2d40209f1",
    createdAt: "2025-02-20T19:04:13.392Z",
    slug: "masazh-zadnoyi-stinky-hlotky",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 390,
    onlinePrice: null,
    foreignId: 6446,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Масаж задньої стінки глотки",
        },
        {
          lang: "en",
          value: "Massage of the posterior pharyngeal wall",
        },
      ],
    },
  },
  {
    id: "060778da-1d89-4c40-b1c0-5a4fcd46ba34",
    createdAt: "2025-02-20T19:04:13.255Z",
    slug: "masazh-meibiievykh-zaloz-1-zaloza",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 500,
    onlinePrice: null,
    foreignId: 2596,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Massage of the Meibomian glands (1 gland)",
        },
        {
          lang: "uk",
          value: "Масаж мейбієвих залоз (1 залоза)",
        },
      ],
    },
  },
  {
    id: "7accd141-eb37-4684-a4f2-39be115bb7cf",
    createdAt: "2025-02-06T13:42:50.804Z",
    slug: "melatonin-syrovatka-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 440,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Мелатонін (сироватка) \\ N **",
        },
        {
          lang: "en",
          value: "Melatonin (serum) / N **",
        },
      ],
    },
  },
  {
    id: "e40498d0-4114-44ba-bb79-b26326855008",
    createdAt: "2025-02-06T13:42:50.623Z",
    slug: "metanefryny-normetanefryny-plazma-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 420,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Metanephrines, normetanephrines (plasma) / N **",
        },
        {
          lang: "uk",
          value: "Метанефрини, норметанефрини (плазма) \\ N **",
        },
      ],
    },
  },
  {
    id: "8da12586-1b34-4569-8fea-34104ff511a5",
    createdAt: "2025-02-06T13:42:51.591Z",
    slug: "mikolohichne-doslidzhennia-krovi-chutlyvist-do-antymikotykiv-ddm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 541,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Мікологічне дослідження крові. Чутливість до антимікотиків ДДМ",
        },
        {
          lang: "en",
          value: "Mycological blood test. Sensitivity to antimycotics (DDM)",
        },
      ],
    },
  },
  {
    id: "c6eef2cc-d7c4-4329-a61a-0862787e7627",
    createdAt: "2025-02-06T13:42:51.654Z",
    slug: "mikolohichne-doslidzhennia-shkiry-volossia-nihtiv-na-dermatomitsety-chutlyvist-do-antymikotykiv-ddm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 549,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Mycological examination of skin, hair, and nails for dermatophytes. Sensitivity to antimycotics (DDM)",
        },
        {
          lang: "uk",
          value:
            "Мікологічне дослідження шкіри, волосся, нігтів на дерматоміцети. Чутливість до антимікотиків ДДМ",
        },
      ],
    },
  },
  {
    id: "6c30dea3-e44a-4393-9e96-21f202077d5b",
    createdAt: "2025-02-06T13:42:51.053Z",
    slug: "mikoplazmoz-mycoplasma-pneumoniae-iga",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 473,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Mycoplasmosis (Mycoplasma pneumoniae), IgA",
        },
        {
          lang: "uk",
          value: "Мікоплазмоз (Mycoplasma pneumoniae), IgA",
        },
      ],
    },
  },
  {
    id: "32a93064-1048-42ec-bc6a-d70451862902",
    createdAt: "2025-02-06T13:42:51.082Z",
    slug: "mikoplazmoz-mycoplasma-pneumoniae-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 477,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Мікоплазмоз (Mycoplasma pneumoniae), IgG",
        },
        {
          lang: "en",
          value: "Mycoplasmosis (Mycoplasma pneumoniae), IgG",
        },
      ],
    },
  },
  {
    id: "5a5495d9-b456-4c78-91d7-34652bd3808c",
    createdAt: "2025-02-06T13:42:51.109Z",
    slug: "mikoplazmoz-mycoplasma-pneumoniae-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 481,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Mycoplasmosis (Mycoplasma pneumoniae), IgM",
        },
        {
          lang: "uk",
          value: "Мікоплазмоз (Mycoplasma pneumoniae), IgM",
        },
      ],
    },
  },
  {
    id: "aeded3b2-7ec3-4790-ae0e-76da9e98d7f0",
    createdAt: "2025-02-06T13:42:52.972Z",
    slug: "mikroalbuminuriia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 717,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Microalbuminuria",
        },
        {
          lang: "uk",
          value: "Мікроальбумінурія",
        },
      ],
    },
  },
  {
    id: "0604f218-9d81-4639-8410-c71f031a8ea8",
    createdAt: "2025-02-06T13:42:51.454Z",
    slug: "mikrobiolohichne-doslidzhennia-tsentralnykh-kateteriv-avtomatychna-identyfikatsiia-bakterii-do-vydu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 523,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Мікробіологічне дослідження центральних катетерів. Автоматична ідентифікація бактерій до виду. Чутливість до антибіотиків ДДМ",
        },
        {
          lang: "en",
          value:
            "Microbiological examination of central catheters. Automatic bacterial identification to species level. Sensitivity to antibiotics (DDM)",
        },
      ],
    },
  },
  {
    id: "469e7b06-1809-420e-bd08-0c48649881e8",
    createdAt: "2025-02-06T13:42:49.453Z",
    slug: "mikrohrafichna-khirurhiia-mohs-slow-mohs-za-pershyi-etap",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 274,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Мікрографічна хірургія (Mohs, Slow Mohs) (за перший етап)",
        },
        {
          lang: "en",
          value: "Micrographic surgery (Mohs, Slow Mohs) (for the first stage)",
        },
      ],
    },
  },
  {
    id: "4cfcf227-89da-4819-b33c-fcb69bd0d46e",
    createdAt: "2025-02-20T19:04:15.716Z",
    slug: "mikroklizma-rektalna-bez-vartosti-preparatu-1-protsedura",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 210,
    onlinePrice: null,
    foreignId: 2711,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Мікроклізма ректальна (без вартості препарату)  (1 процедура)",
        },
        {
          lang: "en",
          value:
            "Rectal microenema (excluding the cost of the medication) (1 procedure)",
        },
      ],
    },
  },
  {
    id: "7cb9c1f4-a70f-48de-9c70-942042f0909e",
    createdAt: "2025-02-06T13:42:49.869Z",
    slug: "mikrokulturalne-doslidzhennia-af-genital-diahnostyka-urohenitalnoyi-patohennoyi-flory-z-chutlyvistiu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 328,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Microcultural examination AF Genital. Diagnosis of urogenital pathogenic flora with sensitivity to antibiotics",
        },
        {
          lang: "uk",
          value:
            "Мікрокультуральне дослідження AF Genital. Діагностика урогенітальної патогенної флори з чутливістю до антибіотиків.",
        },
      ],
    },
  },
  {
    id: "7aafef28-7284-4e71-8d2b-217365f006bf",
    createdAt: "2025-02-20T19:04:09.662Z",
    slug: "mikroskleroterapiia-1-kintsivka-1-seans",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 3900,
    onlinePrice: null,
    foreignId: 6458,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Мікросклеротерапія / 1 кінцівка (1 сеанс)",
        },
        {
          lang: "en",
          value: "Microsclerotherapy / 1 limb (1 session)",
        },
      ],
    },
  },
  {
    id: "c34351a0-b5b9-4d00-ae22-0c2a8080a95a",
    createdAt: "2025-02-20T19:04:09.870Z",
    slug: "mikroskleroterapiia-1-kintsivka-3-seansy",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 5100,
    onlinePrice: null,
    foreignId: 6460,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Microsclerotherapy / 1 limb (3 sessions)",
        },
        {
          lang: "uk",
          value: "Мікросклеротерапія / 1 кінцівка (3 сеанси)",
        },
      ],
    },
  },
  {
    id: "c48b0c04-f413-499b-a98a-a223488eaa17",
    createdAt: "2025-02-20T19:04:09.816Z",
    slug: "mikroskleroterapiia-2-kintsivky-1-seans",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 4900,
    onlinePrice: null,
    foreignId: 6459,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Мікросклеротерапія / 2 кінцівки (1 сеанс)",
        },
        {
          lang: "en",
          value: "Microsclerotherapy / 2 limbs (1 session)",
        },
      ],
    },
  },
  {
    id: "38c8bf6c-337f-43a1-a6bd-a02210f21be0",
    createdAt: "2025-02-20T19:04:09.930Z",
    slug: "mikroskleroterapiia-2-kintsivky-3-seansy",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 9000,
    onlinePrice: null,
    foreignId: 6461,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Microsclerotherapy / 2 limbs (3 sessions)",
        },
        {
          lang: "uk",
          value: "Мікросклеротерапія / 2 кінцівки (3 сеанси)",
        },
      ],
    },
  },
  {
    id: "281450cb-15e3-49a6-a586-efb74a5a8ddb",
    createdAt: "2025-02-06T13:42:51.554Z",
    slug: "mikroskopichne-doslidzhennia-zrazkiv-shkiry-volossia-ta-nihtiv-metodom-svitlovoyi-ta-liuminestsentno",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 536,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Мікроскопічне дослідження зразків шкіри, волосся та нігтів методом світлової та люмінесцентної мікроскопії.",
        },
        {
          lang: "en",
          value:
            "Microscopic examination of skin, hair, and nail samples using light and fluorescence microscopy",
        },
      ],
    },
  },
  {
    id: "d32145ef-b7c4-41d0-8f9e-ef258780db7f",
    createdAt: "2025-02-06T13:42:50.828Z",
    slug: "mikroskopichnyi-analiz-vydilen-iz-uretry-bakterioskopiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 443,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Мікроскопічний аналіз виділень із уретри (бактеріоскопія)",
        },
        {
          lang: "en",
          value: "Microscopic analysis of urethral discharge (bacterioscopy)",
        },
      ],
    },
  },
  {
    id: "370d8c73-4b51-43ec-bc85-a0c1c9c8aed0",
    createdAt: "2025-02-06T13:42:52.131Z",
    slug: "miohlobin-kilkisnyi-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 613,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Міоглобін (кількісний) \\ N",
        },
        {
          lang: "en",
          value: "Myoglobin (quantitative) / N",
        },
      ],
    },
  },
  {
    id: "fbcfec9b-54aa-4cb0-a336-6f0c2e121fc6",
    createdAt: "2025-02-06T13:42:49.928Z",
    slug: "miomektomiia-vydalennia-miomatoznykh-vuzliv-matky",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 336,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Myomectomy (removal of uterine fibroid nodes)",
        },
        {
          lang: "uk",
          value: "Міомектомія (видалення міоматозних вузлів матки)",
        },
      ],
    },
  },
  {
    id: "b5301a0e-bfdc-4dcc-b949-7ec138104cc0",
    createdAt: "2025-02-06T13:42:48.471Z",
    slug: "mistseva-anesteziia",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 400,
    onlinePrice: 0,
    foreignId: 45,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Місцева анестезія",
        },
        {
          lang: "en",
          value: "Local anesthesia",
        },
      ],
    },
  },
  {
    id: "6a4906b6-1a50-4af0-a754-53be086c26c1",
    createdAt: "2025-02-20T19:04:15.662Z",
    slug: "mistseva-aplikatsiina-anesteziia-katedzheliem",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 720,
    onlinePrice: null,
    foreignId: 2633,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Місцева аплікаційна анестезія катеджелєм",
        },
        {
          lang: "en",
          value: "Local application anesthesia with Cathejell",
        },
      ],
    },
  },
  {
    id: "84b547c9-6d42-4b56-bc26-29983109304f",
    createdAt: "2025-02-20T19:04:15.319Z",
    slug: "mistseva-infiltratsiina-anesteziia",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 720,
    onlinePrice: null,
    foreignId: 2632,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Місцева інфільтраційна анестезія",
        },
        {
          lang: "en",
          value: "Local infiltration anesthesia",
        },
      ],
    },
  },
  {
    id: "d54a1443-c724-4e83-8899-02423cff1d63",
    createdAt: "2025-02-06T13:42:49.521Z",
    slug: "morfometrychne-doslidzhennia-kilkisnyi-pokaznyk-za-1-pokaznyk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 282,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Морфометричне дослідження (кількісний показник) за 1 показник",
        },
        {
          lang: "en",
          value: "Morphometric study (quantitative indicator) per 1 indicator",
        },
      ],
    },
  },
  {
    id: "1f6bb54d-205f-418c-8a36-32a2c20bbf3e",
    createdAt: "2025-02-20T19:04:12.870Z",
    slug: "nadannia-nevidkladnoyi-medychnoyi-dopomohy-1-katehoriia",
    sectionId: "95b447c3-1369-4169-bf42-7cb000d82a9a",
    price: 1500,
    onlinePrice: null,
    foreignId: 5643,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Надання невідкладної медичної допомоги (1 категорія)",
        },
        {
          lang: "en",
          value: "Provision of emergency medical care (Category 1)",
        },
      ],
    },
  },
  {
    id: "99c12b34-2a1f-43ca-b4f7-d1be11efd968",
    createdAt: "2025-02-20T19:04:12.858Z",
    slug: "nadannia-nevidkladnoyi-medychnoyi-dopomohy-2-katehoriia",
    sectionId: "95b447c3-1369-4169-bf42-7cb000d82a9a",
    price: 1800,
    onlinePrice: null,
    foreignId: 5644,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Provision of emergency medical care (Category 2)",
        },
        {
          lang: "uk",
          value: "Надання невідкладної медичної допомоги (2 категорія)",
        },
      ],
    },
  },
  {
    id: "32d5ba90-24d6-4db8-a828-0d1858e238a9",
    createdAt: "2025-02-20T19:04:12.843Z",
    slug: "nadannia-nevidkladnoyi-medychnoyi-dopomohy-3-katehoriia",
    sectionId: "95b447c3-1369-4169-bf42-7cb000d82a9a",
    price: 2100,
    onlinePrice: null,
    foreignId: 5645,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Provision of emergency medical care (Category 3)",
        },
        {
          lang: "uk",
          value: "Надання невідкладної медичної допомоги (3 категорія)",
        },
      ],
    },
  },
  {
    id: "31de23a6-ee2f-4600-9b95-799adc1c1bd7",
    createdAt: "2025-02-20T19:04:15.179Z",
    slug: "nakladannia-imobilizatsiinoyi-poviazky",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 600,
    onlinePrice: null,
    foreignId: 2712,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Application of an immobilization bandage",
        },
        {
          lang: "uk",
          value: "Накладання імобілізаційної пов'язки",
        },
      ],
    },
  },
  {
    id: "a00a4cbb-dee1-4c81-ba53-ae7c9eb132d9",
    createdAt: "2025-02-20T19:04:14.190Z",
    slug: "nakladannia-shviv-ne-bilshe-5",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 900,
    onlinePrice: null,
    foreignId: 2628,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Suturing (up to 5 stitches)",
        },
        {
          lang: "uk",
          value: "Накладання швів (не більше 5)",
        },
      ],
    },
  },
  {
    id: "5e0a1c5d-f5a5-492c-bd97-dd2a8e9ae703",
    createdAt: "2025-02-06T13:42:52.860Z",
    slug: "natrii-dobova-secha-na-m-kyyiv-mlviv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 702,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Натрій (добова сеча) / Na, м. Київ, м.Львів **",
        },
        {
          lang: "en",
          value: "Sodium (24-hour urine) / Na, Kyiv, Lviv **",
        },
      ],
    },
  },
  {
    id: "41aedf53-29bc-48cd-8459-28b1e4b5b520",
    createdAt: "2025-02-20T19:04:13.277Z",
    slug: "neirofidbek-biofidbek-6-protsedur",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 1300,
    onlinePrice: null,
    foreignId: 6400,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Neurofeedback / biofeedback (1 procedure)",
        },
        {
          lang: "uk",
          value: "Нейро-фідбек / біо-фідбек (1 процедура)",
        },
      ],
    },
  },
  {
    id: "545d5fc2-d30d-42ea-9085-ad21165828a9",
    createdAt: "2025-02-20T19:04:13.558Z",
    slug: "neirokorektsiia-40-khv",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 900,
    onlinePrice: null,
    foreignId: 6381,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Neurocorrection (40 min.)",
        },
        {
          lang: "uk",
          value: "Нейрокорекція (40 хв.)",
        },
      ],
    },
  },
  {
    id: "8baf1a02-598f-4033-a293-6d7dfc35d5fe",
    createdAt: "2025-02-20T19:04:15.312Z",
    slug: "neirostymuliatsiia-z-vykorystanniam-pure-purr-5-khv",
    sectionId: "1f68f141-a055-4e78-b4eb-b1807ce0113c",
    price: 200,
    onlinePrice: null,
    foreignId: 4173,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Нейростимуляція з використанням Pure -Purr (5 хв)",
        },
        {
          lang: "en",
          value: "Neurostimulation using Pure-Purr (5 min.)",
        },
      ],
    },
  },
  {
    id: "56941a12-c8fd-4132-9127-5e1e08c44a61",
    createdAt: "2025-02-06T13:42:52.013Z",
    slug: "nenasychena-zalizozviazuiucha-zdibnist-syrovatky-nzzs",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 597,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ненасичена залізозв'язуюча здібність сироватки (НЗЗС)",
        },
        {
          lang: "en",
          value: "Unsaturated iron-binding capacity of serum (UIBC)",
        },
      ],
    },
  },
  {
    id: "10b7a29c-217f-4101-9a7d-858977458eac",
    createdAt: "2025-02-06T13:42:48.719Z",
    slug: "nepriamyi-bilirubin",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 30,
    onlinePrice: 0,
    foreignId: 71,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Indirect bilirubin",
        },
        {
          lang: "uk",
          value: "Непрямий білірубін",
        },
      ],
    },
  },
  {
    id: "dbe08c61-dac7-46dd-8fbe-e89999e58f64",
    createdAt: "2025-02-06T13:42:52.653Z",
    slug: "nefrektomiia-v-tomu-chysli-z-adrenalektomiieiu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 682,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Нефректомія (в тому числі з адреналектомією)*",
        },
        {
          lang: "en",
          value: "Nephrectomy (including with adrenalectomy)*",
        },
      ],
    },
  },
  {
    id: "94c6ff19-0116-4d75-b384-7a6dbce4167a",
    createdAt: "2025-02-06T13:42:53.011Z",
    slug: "nyrkovi-proby",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 200,
    onlinePrice: 0,
    foreignId: 727,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Renal function tests",
        },
        {
          lang: "uk",
          value: "Ниркові проби",
        },
      ],
    },
  },
  {
    id: "f2879d52-2803-4ef3-97f9-240b73ceacd9",
    createdAt: "2025-02-06T13:42:48.929Z",
    slug: "obstezhennia-cholovika",
    sectionId: "09dc0e1b-a3f1-400c-9c15-6b5b38fc54fe",
    price: 500,
    onlinePrice: 0,
    foreignId: 98,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Обстеження чоловіка",
        },
        {
          lang: "en",
          value: "Male health examination",
        },
      ],
    },
  },
  {
    id: "6281018f-03a6-4dcb-91ce-827feaf215ea",
    createdAt: "2025-02-06T13:42:49.049Z",
    slug: "ohliad-anestezioloha-pered-operatsiieiu",
    sectionId: "d8c58843-b9ae-4894-b9f4-85fbe8d9ad8e",
    price: 300,
    onlinePrice: 0,
    foreignId: 176,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Огляд анестезіолога перед операцією",
        },
        {
          lang: "en",
          value: "Anesthesiologist consultation before surgery",
        },
      ],
    },
  },
  {
    id: "8bb7f021-43a3-4bc8-a75d-1706fa66554f",
    createdAt: "2025-02-20T19:04:15.537Z",
    slug: "ohliad-ochnoho-dna-oftalmoskopiia",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 630,
    onlinePrice: null,
    foreignId: 2592,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Огляд очного дна (офтальмоскопія)",
        },
        {
          lang: "en",
          value: "Fundus examination (ophthalmoscopy)",
        },
      ],
    },
  },
  {
    id: "9322ba26-9bff-4f39-ba4c-cbf949223d52",
    createdAt: "2025-02-06T13:42:48.974Z",
    slug: "ozdorovlennia-vsoho-orhanizmu",
    sectionId: "09dc0e1b-a3f1-400c-9c15-6b5b38fc54fe",
    price: 990,
    onlinePrice: 0,
    foreignId: 113,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Full-body wellness treatment",
        },
        {
          lang: "uk",
          value: "Оздоровлення всього організму",
        },
      ],
    },
  },
  {
    id: "307bf35b-4f50-4340-adb7-6fae202490dd",
    createdAt: "2025-02-20T19:04:14.830Z",
    slug: "ozdorovchyi-masazh-zahalnyi-60-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 1700,
    onlinePrice: null,
    foreignId: 4265,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "General wellness massage (60 min.)",
        },
        {
          lang: "uk",
          value: "Оздоровчий масаж загальний (60 хв.)",
        },
      ],
    },
  },
  {
    id: "8e47babb-bd7b-4254-b517-26715ed4e685",
    createdAt: "2025-02-20T19:04:13.009Z",
    slug: "ozdorovchyi-masazh-oblychchia-30-khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 1100,
    onlinePrice: null,
    foreignId: 4262,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Оздоровчий масаж обличчя (30 хв.)",
        },
        {
          lang: "en",
          value: "Facial wellness massage (30 min.)",
        },
      ],
    },
  },
  {
    id: "f729e5a4-d9cd-4d36-8fc3-1d0492aefd0b",
    createdAt: "2025-02-20T19:04:12.015Z",
    slug: "ozdorovchyi-masazh-obokh-verkhnikh-kintsivok-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 900,
    onlinePrice: null,
    foreignId: 6295,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Оздоровчий масаж обох верхніх кінцівок *30хв.",
        },
        {
          lang: "en",
          value: "Wellness massage of both upper limbs (30 min.)",
        },
      ],
    },
  },
  {
    id: "0216e217-78e4-47e7-b271-63f0e7a2ec1c",
    createdAt: "2025-02-20T19:04:12.080Z",
    slug: "ozdorovchyi-masazh-obokh-nyzhnikh-kintsivok-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 990,
    onlinePrice: null,
    foreignId: 6296,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Оздоровчий масаж обох нижніх кінцівок *30хв.",
        },
        {
          lang: "en",
          value: "Wellness massage of both lower limbs (30 min.)",
        },
      ],
    },
  },
  {
    id: "68b331d2-ab61-4b90-a1b3-9e3318e3ee8f",
    createdAt: "2025-02-20T19:04:13.507Z",
    slug: "ozdorovchyi-masazh-poperykovokryzhovoho-viddilu-20khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 630,
    onlinePrice: null,
    foreignId: 2673,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Оздоровчий масаж попериково-крижового відділу *20хв.",
        },
        {
          lang: "en",
          value: "Wellness massage of the lumbar-sacral region (20 min.)",
        },
      ],
    },
  },
  {
    id: "333a800e-9e8b-480d-baac-e4196e5cb8bb",
    createdAt: "2025-02-20T19:04:13.515Z",
    slug: "ozdorovchyi-masazh-spyny-30khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 1320,
    onlinePrice: null,
    foreignId: 2671,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Оздоровчий масаж спини *30хв.",
        },
        {
          lang: "en",
          value: "Wellness back massage (30 min.)",
        },
      ],
    },
  },
  {
    id: "e9936d87-4aa3-4209-b0b3-442af072a49a",
    createdAt: "2025-02-20T19:04:10.144Z",
    slug: "ozdorovchyi-masazh-shyinohrudnoho-viddilu-20khv",
    sectionId: "e9d2abf7-a5fd-45fb-91e2-321879fbef3a",
    price: 600,
    onlinePrice: null,
    foreignId: 2672,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Оздоровчий масаж шийно-грудного відділу *20хв.",
        },
        {
          lang: "en",
          value: "Wellness massage of the cervical-thoracic region (20 min.)",
        },
      ],
    },
  },
  {
    id: "a29d4289-407f-4fff-b681-a18e134a1ea0",
    createdAt: "2025-02-06T13:42:49.109Z",
    slug: "onkomarker-molochnoyi-zalozy-sa-153",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 232,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Онкомаркер молочної залози (СА 15-3)",
        },
        {
          lang: "en",
          value: "Breast cancer marker (CA 15-3)",
        },
      ],
    },
  },
  {
    id: "7c6ebe9b-7a39-440e-bde7-9c539ac4c731",
    createdAt: "2025-02-06T13:42:49.125Z",
    slug: "onkomarker-pidshlunkovoyi-zalozy-zhovchnoho-mikhura-sa-199",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 234,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pancreatic and gallbladder cancer marker (CA 19-9)",
        },
        {
          lang: "uk",
          value: "Онкомаркер підшлункової залози, жовчного міхура (СА 19-9)",
        },
      ],
    },
  },
  {
    id: "02d135f0-cd6a-4731-95c1-cd1412e06888",
    createdAt: "2025-02-06T13:42:49.139Z",
    slug: "onkomarker-shkt-sa-242",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 236,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Онкомаркер ШКТ (СА 242)",
        },
        {
          lang: "en",
          value: "Gastrointestinal cancer marker (CA 242)",
        },
      ],
    },
  },
  {
    id: "a3df4d80-5042-4a38-8ccd-10ffb47306c9",
    createdAt: "2025-02-06T13:42:49.147Z",
    slug: "onkomarker-shlunka-sa-724",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 237,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Онкомаркер шлунка (СА 72-4)",
        },
        {
          lang: "en",
          value: "Stomach cancer marker (CA 72-4)",
        },
      ],
    },
  },
  {
    id: "0a184d92-a6e8-4ce1-a077-2ad3654a4ca4",
    createdAt: "2025-02-06T13:42:49.163Z",
    slug: "onkomarker-iaiechnykiv-sa-125",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 239,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Онкомаркер яєчників (СА 125)",
        },
        {
          lang: "en",
          value: "Ovarian cancer marker (CA 125)",
        },
      ],
    },
  },
  {
    id: "53c01f62-d816-42cd-b39f-dea07227ee57",
    createdAt: "2025-02-06T13:42:50.468Z",
    slug: "opistorkhoz-opisthorchis-felineus-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 400,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Opisthorchiasis (Opisthorchis felineus), IgG antibodies",
        },
        {
          lang: "uk",
          value: "Опісторхоз (Opisthorchis felineus), антитіла IgG",
        },
      ],
    },
  },
  {
    id: "089574a6-18f5-4459-b544-070df41e4bc4",
    createdAt: "2025-02-06T13:42:53.351Z",
    slug: "orenda-kysnevoho-kontsentratora-1-doba",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 1000,
    onlinePrice: 0,
    foreignId: 795,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Оренда кисневого концентратора (1 доба)",
        },
        {
          lang: "en",
          value: "Oxygen concentrator rental (1 day)",
        },
      ],
    },
  },
  {
    id: "b263d8db-7ece-496b-8ee1-40fd4959b026",
    createdAt: "2025-02-06T13:42:53.358Z",
    slug: "orenda-mylyts-1-doba",
    sectionId: "79f18d1e-1d15-4ecd-b7e3-ff6000cdf7a0",
    price: 89,
    onlinePrice: 0,
    foreignId: 796,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Оренда милиць (1 доба)",
        },
        {
          lang: "en",
          value: "Crutch rental (1 day)",
        },
      ],
    },
  },
  {
    id: "84896789-bc8f-4177-a8f2-6163d0f4cc72",
    createdAt: "2025-02-06T13:42:50.281Z",
    slug: "ostaza-kistkovoluzhna-fosfataza-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 383,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ostase (bone alkaline phosphatase) / N",
        },
        {
          lang: "uk",
          value: "Остаза (кістково-лужна фосфатаза) \\ N",
        },
      ],
    },
  },
  {
    id: "47778463-2ec9-4e1c-80b0-36acfceae787",
    createdAt: "2025-02-06T13:42:50.250Z",
    slug: "osteokaltsyn",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 379,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Остеокальцин **",
        },
        {
          lang: "en",
          value: "Osteocalcin **",
        },
      ],
    },
  },
  {
    id: "8538114e-f3df-4a74-84bc-ef431165ce33",
    createdAt: "2025-02-06T13:42:52.107Z",
    slug: "otsinka-nasychennia-transferynu-zalizom-zalizo-transferyn-nasychennia-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 610,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Assessment of transferrin saturation with iron (iron, transferrin, % saturation) / N",
        },
        {
          lang: "uk",
          value:
            "Оцінка насичення трансферину залізом (залізо, трансферин, % насичення) \\ N",
        },
      ],
    },
  },
  {
    id: "e6529e43-265f-4647-aa37-2d72de64d089",
    createdAt: "2025-02-06T13:42:52.930Z",
    slug: "pankreatoduodenalna-rezektsiia-1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 711,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pancreato-duodenal resection",
        },
        {
          lang: "uk",
          value: "Панкреато-дуоденальна резекція",
        },
      ],
    },
  },
  {
    id: "89861287-248d-4f29-9310-3158f764c4d7",
    createdAt: "2025-02-06T13:42:49.079Z",
    slug: "pankreatoduodenalna-rezektsiia",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 50000,
    onlinePrice: 0,
    foreignId: 209,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pancreato-duodenal resection",
        },
        {
          lang: "uk",
          value: "Панкреатодуоденальна резекція",
        },
      ],
    },
  },
  {
    id: "c243e815-3f21-454d-af06-41ab0d2bc390",
    createdAt: "2025-02-06T13:42:51.039Z",
    slug: "panchbiopsiia-abo-inshi-vydy-biopsiyi-shkiry-pry-zapalnykh-dermatozakh-ta-alopetsiiakh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 471,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Панч-біопсія або інші види біопсії шкіри при запальних дерматозах та алопеціях",
        },
        {
          lang: "en",
          value:
            "Punch biopsy or other types of skin biopsy for inflammatory dermatoses and alopecia",
        },
      ],
    },
  },
  {
    id: "771464ef-02de-4851-9bf2-640ed2519239",
    createdAt: "2025-02-20T19:04:13.403Z",
    slug: "parabulbarna-iniektsiia-medychnoho-preparatu-1-okobez-vartosti-medykamentiv",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 530,
    onlinePrice: null,
    foreignId: 2597,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Парабульбарна ін’єкція медичного препарату (1 око)(без вартості медикаментів)",
        },
        {
          lang: "en",
          value:
            "Parabulbar injection of a medical drug (1 eye) (excluding the cost of medication)",
        },
      ],
    },
  },
  {
    id: "06c4a802-4fa8-4005-9cf2-10bb3474e416",
    createdAt: "2025-02-06T13:42:50.182Z",
    slug: "parathormon-pth",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 370,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Паратгормон (ПТГ) **",
        },
        {
          lang: "en",
          value: "Parathyroid hormone (PTH) **",
        },
      ],
    },
  },
  {
    id: "5f95ea80-db1d-4d1f-a6a4-ebf53a5308be",
    createdAt: "2025-02-06T13:42:48.914Z",
    slug: "patohistolohichne-doslidzhennia-shkiry",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 200,
    onlinePrice: 0,
    foreignId: 96,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Патогістологічне дослідження шкіри",
        },
        {
          lang: "en",
          value: "Pathohistological examination of the skin",
        },
      ],
    },
  },
  {
    id: "6438dd54-544d-4136-9b94-2329478d4628",
    createdAt: "2025-02-06T13:42:50.787Z",
    slug: "penektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 438,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Penectomy",
        },
        {
          lang: "uk",
          value: "Пенектомія",
        },
      ],
    },
  },
  {
    id: "200d9957-40a4-4b4a-ad72-805c3466a6cf",
    createdAt: "2025-02-20T19:04:15.603Z",
    slug: "pervynna-khirurhichna-obrobka-rany",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1700,
    onlinePrice: null,
    foreignId: 2626,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Primary surgical wound treatment",
        },
        {
          lang: "uk",
          value: "Первинна хірургічна обробка рани",
        },
      ],
    },
  },
  {
    id: "cb840149-7fde-48fe-8039-42b6af5d171e",
    createdAt: "2025-02-20T19:04:09.695Z",
    slug: "pervynna-khirurhichna-obrobka-rany-u-ditei",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 990,
    onlinePrice: null,
    foreignId: 6496,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Первинна хірургічна обробка рани (у дітей)",
        },
        {
          lang: "en",
          value: "Primary surgical wound treatment (in children)",
        },
      ],
    },
  },
  {
    id: "592d4a05-a6ee-430e-80dc-17ad6df61edb",
    createdAt: "2025-02-06T13:42:48.512Z",
    slug: "pereviazka-1-katehoriyi-skladnosti",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 150,
    onlinePrice: 0,
    foreignId: 49,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Dressing, Category 1 complexity",
        },
        {
          lang: "uk",
          value: "Перев'язка 1 категорії складності",
        },
      ],
    },
  },
  {
    id: "39b0516a-21b2-4c24-8a9d-bf4f5b38e880",
    createdAt: "2025-02-06T13:42:48.535Z",
    slug: "pereviazka-2-katehoriyi-skladnosti",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 180,
    onlinePrice: 0,
    foreignId: 50,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Перев'язка 2 категорії складності",
        },
        {
          lang: "en",
          value: "Dressing, Category 2 complexity",
        },
      ],
    },
  },
  {
    id: "3690ea0a-923d-483b-beef-7fd4f87f4ccd",
    createdAt: "2025-02-20T19:04:15.611Z",
    slug: "pereviazka-prosta",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 770,
    onlinePrice: null,
    foreignId: 2630,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Simple dressing",
        },
        {
          lang: "uk",
          value: "Перев'язка проста",
        },
      ],
    },
  },
  {
    id: "bd7d9444-91e5-458a-b481-c5b0470af5d2",
    createdAt: "2025-02-20T19:04:14.206Z",
    slug: "pereviazka-skladna",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 990,
    onlinePrice: null,
    foreignId: 2631,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Перев'язка складна",
        },
        {
          lang: "en",
          value: "Complex dressing",
        },
      ],
    },
  },
  {
    id: "a82aa180-989f-472e-89fa-da6cf846711e",
    createdAt: "2025-02-06T13:42:48.744Z",
    slug: "peroksydaza-shchytovydnoyi-zalozy-antytila-atpo",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 74,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Thyroid peroxidase antibodies (ATPO)",
        },
        {
          lang: "uk",
          value: "Пероксидаза щитовидної залози, антитіла (ATPO)",
        },
      ],
    },
  },
  {
    id: "faa3b698-b062-4536-82ef-a0ab38ca6c85",
    createdAt: "2025-02-06T13:42:53.678Z",
    slug: "peroralnyi-pryiom-preparatu",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 1,
    onlinePrice: 0,
    foreignId: 858,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Пероральний прийом препарату",
        },
        {
          lang: "en",
          value: "Oral medication administration",
        },
      ],
    },
  },
  {
    id: "26c99a8e-4a76-4076-92cc-ccd4c5cb8444",
    createdAt: "2025-02-06T13:42:48.922Z",
    slug: "pechinkovi-proby",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 97,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Печінкові проби",
        },
        {
          lang: "en",
          value: "Liver function tests",
        },
      ],
    },
  },
  {
    id: "c7c422f1-12ec-4b11-95cc-fdb7ac83d26d",
    createdAt: "2025-02-20T19:04:10.896Z",
    slug: "pidbir-okuliariv-ta-linz",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 450,
    onlinePrice: null,
    foreignId: 2593,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Підбір окулярів та лінз",
        },
        {
          lang: "en",
          value: "Eyeglass and lens fitting",
        },
      ],
    },
  },
  {
    id: "7a131370-e316-4b0c-9fe7-9e8e8f8a792b",
    createdAt: "2025-02-20T19:04:10.483Z",
    slug: "pidtrymka-spetsialista-z-hrudnoho-vyhodovuvannia-15-khv-protiahom-1ho-tyzhnia",
    sectionId: "548396f8-ef02-4713-8000-c83a77856032",
    price: null,
    onlinePrice: 1300,
    foreignId: 5622,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Breastfeeding specialist support (15 min. during the first week)",
        },
        {
          lang: "uk",
          value:
            "Підтримка спеціаліста з грудного вигодовування () 15 хв. (протягом 1-го тижня)",
        },
      ],
    },
  },
  {
    id: "4ab95b79-8011-41fd-a9c0-5013816a8110",
    createdAt: "2025-02-20T19:04:10.013Z",
    slug: "plazmoterapiia-prp-v-dermatolohiyi-1-zona",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 3900,
    onlinePrice: null,
    foreignId: 4251,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Platelet-rich plasma (PRP) therapy in dermatology (1 area)",
        },
        {
          lang: "uk",
          value: "Плазмотерапія (PRP) в дерматології (1 зона)",
        },
      ],
    },
  },
  {
    id: "e0b727c2-e753-482f-8e24-e4c30a6c3800",
    createdAt: "2025-02-20T19:04:09.725Z",
    slug: "plazmoterapiia-prp-v-trykholohiyi",
    sectionId: "98b42347-445b-4d81-8a2b-70ea740f90f5",
    price: 2300,
    onlinePrice: null,
    foreignId: 4252,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Platelet-rich plasma (PRP) therapy in trichology",
        },
        {
          lang: "uk",
          value: "Плазмотерапія (PRP) в трихології",
        },
      ],
    },
  },
  {
    id: "0811f953-e8ad-40a8-b687-d08b061815e0",
    createdAt: "2025-02-20T19:04:13.374Z",
    slug: "plazmoterapiia-v-oftalmolohiyi",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 1100,
    onlinePrice: null,
    foreignId: 6513,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Плазмотерапія в офтальмології",
        },
        {
          lang: "en",
          value: "Platelet-rich plasma (PRP) therapy in ophthalmology",
        },
      ],
    },
  },
  {
    id: "3eda0e05-efef-4e8d-8f79-987bf0082a95",
    createdAt: "2025-02-06T13:42:51.352Z",
    slug: "platsentarnyi-laktohen",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 513,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Плацентарний лактоген",
        },
        {
          lang: "en",
          value: "Placental lactogen",
        },
      ],
    },
  },
  {
    id: "c5e6f950-073d-43c9-b746-36f0317084a7",
    createdAt: "2025-02-06T13:42:51.376Z",
    slug: "platsentarnyi-faktor-rostu-plgf-marker-preeklampsiyi-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 516,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Placental growth factor (PLGF), preeclampsia marker / N",
        },
        {
          lang: "uk",
          value: "Плацентарний фактор росту (PLGF), маркер прееклампсії \\ N",
        },
      ],
    },
  },
  {
    id: "4d0c6abf-2086-4c07-bec1-1996e122b4fa",
    createdAt: "2025-02-06T13:42:51.789Z",
    slug: "plr-virus-hepatytu-a-hav-iakisne-vyznachennia-krov-plazma",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 567,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Вірус гепатиту А (HAV), якісне визначення (кров, плазма)",
        },
        {
          lang: "en",
          value:
            "PCR. Hepatitis A virus (HAV), qualitative determination (blood, plasma)",
        },
      ],
    },
  },
  {
    id: "b3e922e0-1cb0-4012-905c-aad5ab008315",
    createdAt: "2025-02-06T13:42:52.077Z",
    slug: "plr-virus-hepatytu-b-hbv-kilkisne-vyznachennia-krov-plazma",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 606,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Hepatitis B virus (HBV), quantitative determination (blood, plasma)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Вірус гепатиту B (HBV), кількісне визначення (кров, плазма)",
        },
      ],
    },
  },
  {
    id: "9ac1d407-05c5-42a3-9052-a9671b1e5e08",
    createdAt: "2025-02-06T13:42:52.041Z",
    slug: "plr-virus-hepatytu-b-hbv-iakisne-vyznachennia-krov-plazma",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 601,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Hepatitis B virus (HBV), qualitative determination (blood, plasma)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Вірус гепатиту B (HBV), якісне визначення (кров, плазма)",
        },
      ],
    },
  },
  {
    id: "dfbc2fd5-c2f3-413a-9016-b3d8ef84cad5",
    createdAt: "2025-02-06T13:42:52.195Z",
    slug: "plr-virus-hepatytu-c-hcv-kilkisne-vyznachennia-krov-plazma",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 622,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Hepatitis C virus (HCV), quantitative determination (blood, plasma)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Вірус гепатиту C (HCV), кількісне визначення (кров, плазма)",
        },
      ],
    },
  },
  {
    id: "25922f6a-ffe9-4d94-9d87-1317160061a9",
    createdAt: "2025-02-06T13:42:52.152Z",
    slug: "plr-virus-hepatytu-c-hcv-iakisne-vyznachennia-krov-plazma",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 616,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Вірус гепатиту C (HCV), якісне визначення (кров, плазма)",
        },
        {
          lang: "en",
          value:
            "PCR. Hepatitis C virus (HCV), qualitative determination (blood, plasma)",
        },
      ],
    },
  },
  {
    id: "803371be-c8c8-446c-921c-4501efa011cf",
    createdAt: "2025-02-06T13:42:52.253Z",
    slug: "plr-virus-hepatytu-c-hcv-iakisne-vyznachennia-henotypiv-krov-plazma",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 629,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Hepatitis C virus (HCV), qualitative genotyping (blood, plasma)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Вірус гепатиту C (HCV), якісне визначення генотипів (кров, плазма)",
        },
      ],
    },
  },
  {
    id: "31e80e3b-51b8-4b82-af9b-586c8e97e411",
    createdAt: "2025-02-06T13:42:52.346Z",
    slug: "plr-virus-hepatytu-d-hdv-iakisne-vyznachennia-krov-plazma",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 642,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Вірус гепатиту D (HDV), якісне визначення (кров, плазма)",
        },
        {
          lang: "en",
          value:
            "PCR. Hepatitis D virus (HDV), qualitative determination (blood, plasma)",
        },
      ],
    },
  },
  {
    id: "c9120dca-6574-4cd3-974a-c1b363bc80ac",
    createdAt: "2025-02-06T13:42:52.401Z",
    slug: "plr-virus-hepatytu-g-hgv-gbvc-pegivirus-a-iakisne-vyznachennia-krov-plazma",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 650,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Вірус гепатиту G (HGV, GBV-C, Pegivirus A), якісне визначення (кров, плазма)",
        },
        {
          lang: "en",
          value:
            "PCR. Hepatitis G virus (HGV, GBV-C, Pegivirus A), qualitative determination (blood, plasma)",
        },
      ],
    },
  },
  {
    id: "bcda1c33-5c3a-4119-8911-03f416d9146f",
    createdAt: "2025-02-06T13:42:49.968Z",
    slug: "plr-virus-papilomy-liudyny-28-typiv-vkr-ta-nkr-henotypuvannia-napivkilkisne-vyznachennia-histolohich",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 341,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Human papillomavirus (28 HPV types, high-risk and low-risk), genotyping, semi-quantitative determination (histological material)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Вірус папіломи людини (28 типів ВКР та НКР), генотипування, напівкількісне визначення (гістологічний матеріал)",
        },
      ],
    },
  },
  {
    id: "80fcad68-a69c-4fb2-84dd-9ea1d702ca4c",
    createdAt: "2025-02-06T13:42:49.936Z",
    slug: "plr-virus-papilomy-liudyny-28-typiv-vkr-ta-nkr-henotypuvannia-napivkilkisne-vyznachennia-uh-zishkrib",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 337,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Human papillomavirus (28 HPV types, high-risk and low-risk), genotyping, semi-quantitative determination (urogenital swab)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Вірус папіломи людини (28 типів ВКР та НКР), генотипування, напівкількісне визначення (у/г зішкріб)",
        },
      ],
    },
  },
  {
    id: "2a3b435a-83d2-4e60-97ec-af94809ec2be",
    createdAt: "2025-02-06T13:42:52.869Z",
    slug: "plr-virus-prostoho-herpesu-1-ta-2-typu-hsv-12-iakisne-vyznachennia-typiv-krov-plazma-likvor-uh-zishk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 703,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Herpes simplex virus types 1 and 2 (HSV 1/2), qualitative typing (blood, plasma, cerebrospinal fluid, urogenital swab, saliva, prostate secretion)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Вірус простого герпесу 1 та 2 типу (HSV 1/2), якісне визначення типів (кров, плазма, ліквор, у/г зішкріб, слина, секрет простати)",
        },
      ],
    },
  },
  {
    id: "d7aa2506-7744-47f8-9e8e-81dd5a3b0660",
    createdAt: "2025-02-06T13:42:49.671Z",
    slug: "plr-kandydoz-candida-parapsilosis-candida-tropicalis-iakisne-vyznachennia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 302,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Кандидоз (Candida parapsilosis / Candida tropicalis), якісне визначення",
        },
        {
          lang: "en",
          value:
            "PCR. Candidiasis (Candida parapsilosis / Candida tropicalis), qualitative determination",
        },
      ],
    },
  },
  {
    id: "172521ce-6d01-4b03-baaa-96f88a25bd8e",
    createdAt: "2025-02-06T13:42:49.642Z",
    slug: "plr-kandidoz-candida-krusei-candida-glabrata-iakisne-vyznachennia-uh-zishkrib",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 1,
    foreignId: 298,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Candidiasis (Candida krusei / Candida glabrata), qualitative determination, urogenital swab",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Кандідоз (Candida krusei / Candida glabrata), якісне визначення, у/г зішкріб",
        },
      ],
    },
  },
  {
    id: "f5cba5b0-518b-4bef-abe0-df98188a169e",
    createdAt: "2025-02-06T13:42:52.688Z",
    slug: "plr-tsytomehalovirus-virus-herpesu-5-typu-cmv-hhv5-kilkisne-vyznachennia-krov-plazma-likvor-uh-zishk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 685,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Cytomegalovirus (herpesvirus type 5, CMV, HHV-5), quantitative determination (blood, plasma, cerebrospinal fluid, urogenital swab, saliva, prostate secretion)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Цитомегаловірус (вірус герпесу 5 типу, CMV, HHV-5), кількісне визначення (кров, плазма, ліквор, у/г зішкріб, слина, секрет простати)",
        },
      ],
    },
  },
  {
    id: "5022fe53-379c-4ef0-8e29-c51d1c60ca2d",
    createdAt: "2025-02-06T13:42:52.615Z",
    slug: "plr-tsytomehalovirus-virus-herpesu-5-typu-cmv-hhv5-iakisne-vyznachennia-krov-plazma-likvor-uh-zishkr",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 679,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Цитомегаловірус (вірус герпесу 5 типу, CMV, HHV-5), якісне визначення (кров, плазма, ліквор, у/г зішкріб, слина, секрет простати)",
        },
        {
          lang: "en",
          value:
            "PCR. Cytomegalovirus (herpesvirus type 5, CMV, HHV-5), qualitative determination (blood, plasma, cerebrospinal fluid, urogenital swab, saliva, prostate secretion)",
        },
      ],
    },
  },
  {
    id: "70c0c53f-d2db-4453-a9fc-8eacb31e32a5",
    createdAt: "2025-02-06T13:42:50.779Z",
    slug: "plr-bordetella-species-b-pertussis-ta-b-parapertussis-kashliuk-iakisne-vyznachennia-vydiv-zishkrib-r",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 437,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Bordetella species (B. pertussis та B. parapertussis) (кашлюк), якісне визначення видів (зішкріб р/г, змиви з бронхів)",
        },
        {
          lang: "en",
          value:
            "PCR. Bordetella species (B. pertussis and B. parapertussis) (whooping cough), qualitative species determination (oropharyngeal swab, bronchial washings)",
        },
      ],
    },
  },
  {
    id: "88465465-2661-4b4f-8161-f2a9ba288e93",
    createdAt: "2025-02-06T13:42:50.151Z",
    slug: "plr-borrelia-burgdorferi-borelioz-iakisne-vyznachennia-krov-plazma-likvor",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 366,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Borrelia burgdorferi (Lyme disease), qualitative determination (blood, plasma, cerebrospinal fluid)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Borrelia burgdorferi (бореліоз), якісне визначення  (кров, плазма, ліквор)",
        },
      ],
    },
  },
  {
    id: "78360329-c1c3-491b-b207-7ae2c7595394",
    createdAt: "2025-02-06T13:42:49.624Z",
    slug: "plr-candida-albicans-kandydoz-iakisne-vyznachennia-uh-zishkrib-sekret-prostaty",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 296,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Candida albicans (кандидоз), якісне визначення (у/г зішкріб, секрет простати)",
        },
        {
          lang: "en",
          value:
            "PCR. Candida albicans (candidiasis), qualitative determination (urogenital swab, prostate secretion)",
        },
      ],
    },
  },
  {
    id: "b58838b0-6748-4697-852c-064e66660e8a",
    createdAt: "2025-02-06T13:42:49.846Z",
    slug: "plr-candida-species-c-albicans-c-krusei-c-glabrata-c-parapsilosis-c-tropicalis-c-dubliniensis-c-lusi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 325,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Candida species (C. albicans, C. krusei, C. glabrata, C. parapsilosis, C. tropicalis, C. dubliniensis, C. lusitaniae) (кандидоз), якісне визначення видів (у/г зішкріб, секрет простати)",
        },
        {
          lang: "en",
          value:
            "PCR. Candida species (C. albicans, C. krusei, C. glabrata, C. parapsilosis, C. tropicalis, C. dubliniensis, C. lusitaniae) (candidiasis), qualitative species determination (urogenital swab, prostate secretion)",
        },
      ],
    },
  },
  {
    id: "e146aa6a-8eb4-421b-a0ef-ac8e1fd48eea",
    createdAt: "2025-02-06T13:42:51.018Z",
    slug: "plr-chlamydophila-pneumoniae-chlamydia-pneumoniae-pnevmoniia-iakisne-vyznachennia-mokrotynnia-plevra",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 468,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Chlamydophila pneumoniae (Chlamydia pneumoniae, пневмонія), якісне визначення (мокротиння, плевральна рідина, змиви з бронхів, \nзішкріб р/г)",
        },
        {
          lang: "en",
          value:
            "PCR. Chlamydophila pneumoniae (Chlamydia pneumoniae, pneumonia), qualitative determination (sputum, pleural fluid, bronchial washings, oropharyngeal swab)",
        },
      ],
    },
  },
  {
    id: "2ff06d5e-f9c4-4ffd-9a1a-dd3f74304fa0",
    createdAt: "2025-02-06T13:42:50.670Z",
    slug: "plr-helicobacter-pylori-helikobakter-pilori-iakisne-vyznachennia-kal-slyna-shlunkovyi-sik",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 425,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Helicobacter pylori (Гелікобактер пілорі), якісне визначення (кал, слина, шлунковий сік)",
        },
        {
          lang: "en",
          value:
            "PCR. Helicobacter pylori (Helicobacter pylori), qualitative determination (stool, saliva, gastric juice)",
        },
      ],
    },
  },
  {
    id: "4226390a-61be-4bc3-8ab2-155fa66ac0de",
    createdAt: "2025-02-06T13:42:49.349Z",
    slug: "plr-mycoplasma-hominis-mikoplazmoz-iakisne-vyznachennia-uh-zishkrib-sekret-prostaty",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 262,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Mycoplasma hominis (mycoplasmosis), qualitative determination (urogenital swab, prostate secretion)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Mycoplasma hominis (мікоплазмоз), якісне визначення (у/г зішкріб, секрет простати)",
        },
      ],
    },
  },
  {
    id: "f8fb8b9b-1f8a-4903-a9ce-5ff60876654b",
    createdAt: "2025-02-06T13:42:51.143Z",
    slug: "plr-mycoplasma-pneumoniae-pnevmoniia-iakisne-vyznachennia-mokrotynnia-plevralna-ridyna-zmyvy-z-bronk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 485,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Mycoplasma pneumoniae (пневмонія), якісне визначення (мокротиння, плевральна рідина, змиви з бронхів, \nзішкріб р/г)",
        },
        {
          lang: "en",
          value:
            "PCR. Mycoplasma pneumoniae (pneumonia), qualitative determination (sputum, pleural fluid, bronchial washings, oropharyngeal swab)",
        },
      ],
    },
  },
  {
    id: "c991cc7b-7aad-4640-b218-c33986f56716",
    createdAt: "2025-02-06T13:42:49.717Z",
    slug: "plr-neisseria-gonorrhoeae-honoreia-iakisne-vyznachennia-uh-zishkrib-sekret-prostaty",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 308,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Neisseria gonorrhoeae (gonorrhea), qualitative determination (urogenital swab, prostate secretion)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Neisseria gonorrhoeae (гонорея), якісне визначення (у/г зішкріб, секрет простати)",
        },
      ],
    },
  },
  {
    id: "dbf6c323-9db8-4adb-a025-118de2d99eba",
    createdAt: "2025-02-06T13:42:49.502Z",
    slug: "plr-treponema-pallidum-syfilis-iakisne-vyznachennia-uh-zishkrib-sekret-prostaty",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 280,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Treponema pallidum (syphilis), qualitative determination (urogenital swab, prostate secretion)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Treponema pallidum (сифіліс), якісне визначення (у/г зішкріб, секрет простати)",
        },
      ],
    },
  },
  {
    id: "58fa74e9-37e2-49e0-98df-e2c975aecb0b",
    createdAt: "2025-02-06T13:42:49.787Z",
    slug: "plr-trichomonas-vaginalis-trykhomoniaz-iakisne-vyznachennia-uh-zishkrib-sekret-prostaty",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 317,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Trichomonas vaginalis (трихомоніаз), якісне визначення (у/г зішкріб, секрет простати)",
        },
        {
          lang: "en",
          value:
            "PCR. Trichomonas vaginalis (trichomoniasis), qualitative determination (urogenital swab, prostate secretion)",
        },
      ],
    },
  },
  {
    id: "c51e5a71-7e9d-4a90-a4fc-a26e605cd7c6",
    createdAt: "2025-02-06T13:42:49.391Z",
    slug: "plr-ureaplasma-species-ureaplazmoz-iakisne-vyznachennia-uh-zishkrib-sekret-prostaty",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 267,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PCR. Ureaplasma species (ureaplasmosis), qualitative determination (urogenital swab, prostate secretion)",
        },
        {
          lang: "uk",
          value:
            "ПЛР. Ureaplasma species (уреаплазмоз), якісне визначення (у/г зішкріб, секрет простати)",
        },
      ],
    },
  },
  {
    id: "3a5029fe-8215-4e0d-884e-3ba2d8289c5c",
    createdAt: "2025-02-06T13:42:49.421Z",
    slug: "plr-ureaplasma-urealyticumparvum-ureaplazmoz-iakisne-vyznachennia-vydiv-uh-zishkrib-sekret-prostaty",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 270,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "ПЛР. Ureaplasma urealyticum/parvum (уреаплазмоз), якісне визначення видів (у/г зішкріб, секрет простати)",
        },
        {
          lang: "en",
          value:
            "PCR. Ureaplasma urealyticum/parvum (ureaplasmosis), qualitative species determination (urogenital swab, prostate secretion)",
        },
      ],
    },
  },
  {
    id: "d79872b2-16e5-4fc2-a519-415565e20f5e",
    createdAt: "2025-02-20T19:04:13.448Z",
    slug: "pnevmomasazh-barabannykh-peretynok",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 300,
    onlinePrice: null,
    foreignId: 6559,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Pneumatic massage of the eardrums",
        },
        {
          lang: "uk",
          value: "Пневмомасаж барабанних перетинок",
        },
      ],
    },
  },
  {
    id: "89fdce40-a1dc-4132-b876-5b846a2ac5e6",
    createdAt: "2025-02-06T13:42:48.463Z",
    slug: "polipektomiia",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 300,
    onlinePrice: 0,
    foreignId: 44,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Polypectomy",
        },
        {
          lang: "uk",
          value: "Поліпектомія",
        },
      ],
    },
  },
  {
    id: "bdb0a83a-7f3b-4980-b854-16d3022645a8",
    createdAt: "2025-02-06T13:42:49.853Z",
    slug: "polifokalna-trepanbiopsiia-peredmikhurovoyi-zalozy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 326,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Multifocal transrectal prostate biopsy",
        },
        {
          lang: "uk",
          value: "Поліфокальна трепан-біопсія передміхурової залози",
        },
      ],
    },
  },
  {
    id: "42ddc4e9-9767-4579-a993-3fd147ecb700",
    createdAt: "2025-02-06T13:42:51.626Z",
    slug: "posiv-biolohichnykh-ridyn-na-drizhzhepodibni-ta-mitseliarni-hryby-plevralna-spynnomozkova-ridyna-kha",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 545,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Culture of biological fluids for yeast-like and mycelial fungi (pleural fluid, cerebrospinal fluid, sputum, bronchoalveolar lavage). Sensitivity to antimycotics (DDM)",
        },
        {
          lang: "uk",
          value:
            "Посів біологічних рідин на дріжжеподібні та міцеліарні гриби (плевральна, спинномозкова рідина, харкотиння, бронхоальвеолярний лаваж). Чутливість до антимікотиків ДДМ.",
        },
      ],
    },
  },
  {
    id: "96070c68-bf94-43ef-93af-9769256768fb",
    createdAt: "2025-02-06T13:42:51.528Z",
    slug: "posiv-na-mikoplazmu-ta-ureaplazmu-mycoplasma-hominisureaplasma-urealyticum-z-chutlyvistiu-do-antybio",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 533,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Посів на мікоплазму та уреаплазму (Mycoplasma hominis/Ureaplasma urealyticum) з чутливістю до антибіотиків.",
        },
        {
          lang: "en",
          value:
            "Culture for Mycoplasma and Ureaplasma (Mycoplasma hominis/Ureaplasma urealyticum) with sensitivity to antibiotics",
        },
      ],
    },
  },
  {
    id: "60aaa992-a0cb-4df5-b2c3-e1ac4b9d3573",
    createdAt: "2025-02-20T19:04:11.202Z",
    slug: "posluhy-pervynnoyi-medychnoyi-dopomohy",
    sectionId: "88fe570d-0cb4-444f-af03-684670653a4e",
    price: 0,
    onlinePrice: 0,
    foreignId: 4323,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Послуги первинної медичної допомоги",
        },
        {
          lang: "en",
          value: "Primary healthcare services",
        },
      ],
    },
  },
  {
    id: "19d34bdc-a7a8-4475-90d9-67ad748e28a6",
    createdAt: "2025-02-20T19:04:15.695Z",
    slug: "postanovka-vnutrishnovennoho-katetera",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 240,
    onlinePrice: null,
    foreignId: 2707,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Intravenous catheter placement",
        },
        {
          lang: "uk",
          value: "Постановка внутрішньовенного катетера",
        },
      ],
    },
  },
  {
    id: "6bf58d9d-c3c2-4d4f-b207-3dd906154224",
    createdAt: "2025-02-20T19:04:15.639Z",
    slug: "postanovka-krapelnytsi-na-domu-m-kyyiv",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 1280,
    onlinePrice: null,
    foreignId: 2706,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Постановка крапельниці на дому м. Київ",
        },
        {
          lang: "en",
          value: "IV drip administration at home, Kyiv",
        },
      ],
    },
  },
  {
    id: "068aca26-655a-4f93-aac7-f4575febe16c",
    createdAt: "2025-02-20T19:04:14.514Z",
    slug: "postanovka-ochysnoyi-klizmy-dlia-doroslykh",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 510,
    onlinePrice: null,
    foreignId: 2721,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Administration of a cleansing enema for adults",
        },
        {
          lang: "uk",
          value: "Постановка очисної клізми для дорослих",
        },
      ],
    },
  },
  {
    id: "a7ca61b4-c1e3-4510-a1b4-9672c0521eb9",
    createdAt: "2025-02-06T13:42:50.221Z",
    slug: "pravets-clostridium-tetani-anatoksyn-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 375,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Правець (Clostridium tetani), анатоксин антитіла IgG",
        },
        {
          lang: "en",
          value: "Tetanus (Clostridium tetani), toxoid IgG antibodies",
        },
      ],
    },
  },
  {
    id: "8b502bae-b28f-4bfe-ad45-e76fa29caf3e",
    createdAt: "2025-02-06T13:42:53.634Z",
    slug: "prenatalnyi-skryninh-i-trymestru-rarra-khhl-komirtsevyi-prostir",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 852,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Пренатальний скринінг І триместру, РАРР-А, ХГЛ, комірцевий простір",
        },
        {
          lang: "en",
          value:
            "Prenatal screening of the first trimester, PAPP-A, hCG, nuchal translucency",
        },
      ],
    },
  },
  {
    id: "d7d7fdbc-94e2-43cc-9069-d2dd16281b1e",
    createdAt: "2025-02-06T13:42:48.580Z",
    slug: "pryiom-materialu-dlia-doslidzhennia",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 0,
    onlinePrice: 0,
    foreignId: 55,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Collection of material for testing",
        },
        {
          lang: "uk",
          value: "Прийом матеріалу для дослідження",
        },
      ],
    },
  },
  {
    id: "d8298d42-3d7f-44da-911d-08b9fdfc4e76",
    createdAt: "2025-02-20T19:04:09.451Z",
    slug: "pryiom-psykholoha-znaiomstvo",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 1,
    onlinePrice: null,
    foreignId: 6523,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Прийом психолога (знайомство)",
        },
        {
          lang: "en",
          value: "Psychologist consultation (initial meeting)",
        },
      ],
    },
  },
  {
    id: "e436bb80-1f31-456e-ba2e-d9f45e64b248",
    createdAt: "2025-02-20T19:04:12.850Z",
    slug: "provedennia-diahnostychnoyi-alerhichnoyi-proby-metodom-priktestu-1-alerhen",
    sectionId: "a8df1a0e-363f-4b01-9a6f-c654ca35233b",
    price: 300,
    onlinePrice: null,
    foreignId: 5623,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Проведення діагностичної алергічної проби методом прік-тесту (1 алерген)",
        },
        {
          lang: "en",
          value:
            "Diagnostic allergy testing using the prick test method (1 allergen)",
        },
      ],
    },
  },
  {
    id: "2ce79001-86cb-4d39-b885-e5fa45e3dc23",
    createdAt: "2025-02-06T13:42:49.914Z",
    slug: "prohesteron",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 334,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Progesterone",
        },
        {
          lang: "uk",
          value: "Прогестерон",
        },
      ],
    },
  },
  {
    id: "c5f2b37a-600e-49c3-97aa-8963c92a0853",
    createdAt: "2025-02-20T19:04:10.953Z",
    slug: "prohrama-bezpechnyi-sport-bazova",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 3240,
    onlinePrice: null,
    foreignId: 6398,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: '"Safe Sports" Program (Basic)',
        },
        {
          lang: "uk",
          value: 'Програма "Безпечний спорт" (Базова)',
        },
      ],
    },
  },
  {
    id: "3a26f32f-f8bb-4275-9f71-0d1409e6b33e",
    createdAt: "2025-02-20T19:04:14.549Z",
    slug: "prohrama-bezpechnyi-sport-rozshyrena",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 10200,
    onlinePrice: null,
    foreignId: 6399,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: '"Safe Sports" Program (Extended)',
        },
        {
          lang: "uk",
          value: 'Програма "Безпечний спорт" (Розширена)',
        },
      ],
    },
  },
  {
    id: "16474c18-7d29-4d44-b2ba-b0f45ba3bd3e",
    createdAt: "2025-02-20T19:04:12.901Z",
    slug: "prohrama-sposterezhennia-vahitnosti",
    sectionId: "09d13108-eb32-40c6-b418-abddf00d825e",
    price: 51000,
    onlinePrice: null,
    foreignId: 4230,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Програма "Спостереження вагітності"',
        },
        {
          lang: "en",
          value: '"Pregnancy Monitoring" Program',
        },
      ],
    },
  },
  {
    id: "3c8681fa-5b0d-43c8-8dda-37395c5aa2c8",
    createdAt: "2025-02-20T19:04:12.814Z",
    slug: "prohrama-richna-pediatrychne-sposterezhennia-dytyny-vid-narodzhennia-do-1-roku",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 15530,
    onlinePrice: null,
    foreignId: 4214,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'Annual Program "Pediatric Monitoring of a Child from Birth to 1 Year"',
        },
        {
          lang: "uk",
          value:
            'Програма (річна) "Педіатричне спостереження дитини від народження до 1 року"',
        },
      ],
    },
  },
  {
    id: "a4ee391e-68ee-41e9-b3e8-ca75cfdbed5c",
    createdAt: "2025-02-06T13:42:53.640Z",
    slug: "prohrama-112-lipidnyi-kompleks",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 853,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Program 112 "Lipid Complex"',
        },
        {
          lang: "uk",
          value: 'Програма 112 "Ліпідний комплекс"',
        },
      ],
    },
  },
  {
    id: "d9811ef0-39ca-4e6c-9b84-2d061b56e78d",
    createdAt: "2025-02-20T19:04:11.183Z",
    slug: "produvannia-slukhovoyi-truby-po-polittseru",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 490,
    onlinePrice: null,
    foreignId: 2612,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Продування слухової труби по Політцеру",
        },
        {
          lang: "en",
          value: "Eustachian tube insufflation by Politzer method",
        },
      ],
    },
  },
  {
    id: "8527c686-5fa9-4b2c-805e-99257a3a9b9b",
    createdAt: "2025-02-06T13:42:51.165Z",
    slug: "proinsulin-m-kyyiv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 488,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Proinsulin, Kyiv **",
        },
        {
          lang: "uk",
          value: "Проінсулін, м. Київ **",
        },
      ],
    },
  },
  {
    id: "e470cbb8-7c52-48d4-b953-975551c8689b",
    createdAt: "2025-02-06T13:42:52.290Z",
    slug: "prokaltsytonin-pct",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 634,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Procalcitonin (PCT)",
        },
        {
          lang: "uk",
          value: "Прокальцитонін (PCT)",
        },
      ],
    },
  },
  {
    id: "a48c038c-776d-45fa-8997-c2c1c2d7c010",
    createdAt: "2025-02-06T13:42:48.794Z",
    slug: "prolaktyn",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 80,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Пролактин",
        },
        {
          lang: "en",
          value: "Prolactin",
        },
      ],
    },
  },
  {
    id: "b9bd3b3a-8f8d-4ae4-bfac-8146fe9ee4fd",
    createdAt: "2025-02-06T13:42:49.945Z",
    slug: "prolaktyn-prl",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 338,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Пролактин (ПРЛ)",
        },
        {
          lang: "en",
          value: "Prolactin (PRL)",
        },
      ],
    },
  },
  {
    id: "b6e720b3-18dd-4222-a132-607c78edde43",
    createdAt: "2025-02-06T13:42:49.960Z",
    slug: "prolaktyn-monomernyi-postpeh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 340,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Monomeric prolactin (post-PEG)",
        },
        {
          lang: "uk",
          value: "Пролактин мономерний (пост.-ПЕГ)",
        },
      ],
    },
  },
  {
    id: "09d1f229-8267-4944-b838-4880be7f97da",
    createdAt: "2025-02-20T19:04:13.040Z",
    slug: "promyvannia-zovnishnikh-slukhovykh-prokhodiv",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 600,
    onlinePrice: null,
    foreignId: 2613,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Irrigation of the external auditory canals",
        },
        {
          lang: "uk",
          value: "Промивання зовнішніх слухових проходів",
        },
      ],
    },
  },
  {
    id: "5415b38e-94a2-44ea-9494-f6ecbbc83514",
    createdAt: "2025-02-20T19:04:12.832Z",
    slug: "promyvannia-lakun-pidnebinnykh-myhdalykiv",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 990,
    onlinePrice: null,
    foreignId: 2614,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Промивання лакун піднебінних мигдаликів",
        },
        {
          lang: "en",
          value: "Irrigation of the tonsillar crypts",
        },
      ],
    },
  },
  {
    id: "84b17aa3-36cf-4047-ab40-9231c8143947",
    createdAt: "2025-02-20T19:04:11.026Z",
    slug: "promyvannia-nososliznoho-kanalu",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 950,
    onlinePrice: null,
    foreignId: 2598,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Промивання носослізного каналу",
        },
        {
          lang: "en",
          value: "Irrigation of the nasolacrimal duct",
        },
      ],
    },
  },
  {
    id: "c54c1e2a-8410-4b1e-b8fe-4222bdd25cd6",
    createdAt: "2025-02-20T19:04:11.290Z",
    slug: "promyvannia-prydatkovykh-pazukh-nosa-metodom-peremishchennia",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 900,
    onlinePrice: null,
    foreignId: 2615,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Промивання придаткових пазух носа методом переміщення",
        },
        {
          lang: "en",
          value:
            "Irrigation of the paranasal sinuses using the displacement method",
        },
      ],
    },
  },
  {
    id: "71bcc735-c12d-4930-b6ab-86ffe935029b",
    createdAt: "2025-02-06T13:42:49.207Z",
    slug: "prostatspetsyfichnyi-antyhen-zahalnyi-psa",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 245,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Простат-специфічний антиген загальний, ПСА",
        },
        {
          lang: "en",
          value: "Prostate-specific antigen total, PSA",
        },
      ],
    },
  },
  {
    id: "713aa5bf-4921-4795-9ebc-2bec8461464e",
    createdAt: "2025-02-06T13:42:49.193Z",
    slug: "prostatychna-kysla-fosfataza-rar",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 243,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Простатична кисла фосфатаза (РАР) **",
        },
        {
          lang: "en",
          value: "Prostatic acid phosphatase (PAP) **",
        },
      ],
    },
  },
  {
    id: "7eba582b-30b4-4e6f-8595-3874b76a0f9d",
    createdAt: "2025-02-06T13:42:52.945Z",
    slug: "proteyin-s-aktyvnist-n-1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 713,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Protein C (activity) / N",
        },
        {
          lang: "uk",
          value: "Протеїн С (активність) \\ N",
        },
      ],
    },
  },
  {
    id: "752e4f09-c2a3-4ff5-b680-b1e6bbef6cbd",
    createdAt: "2025-02-06T13:42:52.897Z",
    slug: "proteyin-s-aktyvnist-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 707,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Протеїн S (активність) \\ N",
        },
        {
          lang: "en",
          value: "Protein S (activity) / N",
        },
      ],
    },
  },
  {
    id: "ba450752-fd87-4b46-b6af-197597d7ab33",
    createdAt: "2025-02-06T13:42:52.488Z",
    slug: "protrombinovyi-test-pch-za-kvikom-mnv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 662,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Протромбіновий тест (ПЧ, % за Квіком, МНВ)",
        },
        {
          lang: "en",
          value: "Prothrombin test (PT, % by Quick, INR)",
        },
      ],
    },
  },
  {
    id: "e824f8fb-9888-47fd-8f99-9ced24281de6",
    createdAt: "2025-02-20T19:04:15.595Z",
    slug: "protsedura-zroshennia-nosohlotky-inhaliatsiia",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 530,
    onlinePrice: null,
    foreignId: 2605,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Nasopharyngeal irrigation procedure (inhalation)",
        },
        {
          lang: "uk",
          value: "Процедура зрошення носоглотки (інгаляція)",
        },
      ],
    },
  },
  {
    id: "f33a35a0-743d-4384-9c66-9ffd1e5e138d",
    createdAt: "2025-02-06T13:42:52.608Z",
    slug: "priama-proba-kumbsa",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 678,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Direct Coombs test",
        },
        {
          lang: "uk",
          value: "Пряма проба Кумбса",
        },
      ],
    },
  },
  {
    id: "c0ef78be-9867-4303-87c1-3e741b844850",
    createdAt: "2025-02-06T13:42:48.709Z",
    slug: "priamyi-bilirubin",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 30,
    onlinePrice: 0,
    foreignId: 70,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Прямий білірубін",
        },
        {
          lang: "en",
          value: "Direct bilirubin",
        },
      ],
    },
  },
  {
    id: "338fc9b7-73f9-431b-8e79-91c23cf44974",
    createdAt: "2025-02-20T19:04:13.593Z",
    slug: "psykholohichna-pidtrymka-ta-korektsiia-50-khv",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 1600,
    onlinePrice: null,
    foreignId: 6383,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Психологічна підтримка та корекція (50 хв.)",
        },
        {
          lang: "en",
          value: "Psychological support and correction (50 min.)",
        },
      ],
    },
  },
  {
    id: "e8886b71-0f49-449b-8d84-47aa66f65d5a",
    createdAt: "2025-02-20T19:04:10.886Z",
    slug: "punktsiina-biopsiia-hrudnoyi-zalozy-bez-vartosti-tsytolohichnoho-doslidzhennia",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 2730,
    onlinePrice: null,
    foreignId: 2583,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Puncture biopsy of the breast (excluding the cost of cytological examination)",
        },
        {
          lang: "uk",
          value:
            "Пункційна біопсія грудної залози (без вартості цитологічного дослідження)",
        },
      ],
    },
  },
  {
    id: "3c39df79-758e-451d-8213-f7346197a747",
    createdAt: "2025-02-20T19:04:11.219Z",
    slug: "punktsiia-i-promyvannia-odniieyi-haimorovoyi-pazukhy",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 2670,
    onlinePrice: null,
    foreignId: 2616,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Puncture and irrigation of one maxillary sinus",
        },
        {
          lang: "uk",
          value: "Пункція і промивання однієї гайморової пазухи",
        },
      ],
    },
  },
  {
    id: "04459991-57e3-458c-83c8-3794708242ed",
    createdAt: "2025-02-20T19:04:11.228Z",
    slug: "punktsiia-i-promyvannia-odniieyi-haimorovoyi-pazukhy-z-vvedenniam-katetera",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 2670,
    onlinePrice: null,
    foreignId: 2617,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Пункція і промивання однієї гайморової пазухи з введенням катетера",
        },
        {
          lang: "en",
          value:
            "Puncture and irrigation of one maxillary sinus with catheter insertion",
        },
      ],
    },
  },
  {
    id: "9eb95c0e-5764-4ebd-b33b-ef6c7e98656a",
    createdAt: "2025-02-20T19:04:15.646Z",
    slug: "punktsiia-ridynnoho-utvorennia-miakykh-tkanynhematomy",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1500,
    onlinePrice: null,
    foreignId: 2636,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Пункція рідинного утворення м'яких тканин,гематоми",
        },
        {
          lang: "en",
          value: "Puncture of a fluid formation in soft tissues or hematoma",
        },
      ],
    },
  },
  {
    id: "bb6b5740-b2cc-4c07-9216-f5e056078a33",
    createdAt: "2025-02-20T19:04:14.450Z",
    slug: "punktsiia-suhloba",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 990,
    onlinePrice: null,
    foreignId: 2703,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Joint puncture",
        },
        {
          lang: "uk",
          value: "Пункція суглоба",
        },
      ],
    },
  },
  {
    id: "8ef6cf5e-7ea0-4420-ab0f-3e23aa75aded",
    createdAt: "2025-02-06T13:42:52.318Z",
    slug: "radykalna-prostatektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 638,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Радикальна простатектомія",
        },
        {
          lang: "en",
          value: "Radical prostatectomy",
        },
      ],
    },
  },
  {
    id: "3bd2eeb7-c646-4e14-9476-92f40c722a81",
    createdAt: "2025-02-06T13:42:52.174Z",
    slug: "radykalna-rezektsiia-hrudnoyi-zalozy-mastektomiia-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 619,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Radical resection of the breast / mastectomy (unilateral)*",
        },
        {
          lang: "uk",
          value:
            "Радикальна резекція грудної залози / мастектомія (з одного боку)*",
        },
      ],
    },
  },
  {
    id: "542c3b36-fcc7-431e-97ec-9d496008a481",
    createdAt: "2025-02-06T13:42:48.494Z",
    slug: "radiokhvylova-koahuliatsiia-patolohiyi-shyiky-matky-bez-vartosti-anesteziyi",
    sectionId: "82d60763-739b-4b69-9239-78b438099ef5",
    price: 900,
    onlinePrice: 0,
    foreignId: 47,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Radiofrequency coagulation of cervical pathology (excluding the cost of anesthesia)",
        },
        {
          lang: "uk",
          value:
            "Радіохвильова коагуляція патології шийки матки (без вартості анестезії)",
        },
      ],
    },
  },
  {
    id: "6418aab1-fa3d-49ea-9cdc-25c6ded24568",
    createdAt: "2025-02-06T13:42:49.237Z",
    slug: "rakovoembrionalnyi-antyhen-rea",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 249,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Раково-ембріональний антиген (РЕА)",
        },
        {
          lang: "en",
          value: "Carcinoembryonic antigen (CEA)",
        },
      ],
    },
  },
  {
    id: "12c4d775-f18e-40fe-b350-781fe19a81a6",
    createdAt: "2025-02-06T13:42:52.332Z",
    slug: "revmatoyidnyi-faktor-rf",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 640,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Rheumatoid factor (RF)",
        },
        {
          lang: "uk",
          value: "Ревматоїдний фактор (РФ)",
        },
      ],
    },
  },
  {
    id: "300b41e1-cd1f-47f0-a747-3f976c89e248",
    createdAt: "2025-02-06T13:42:52.381Z",
    slug: "revmatoyidnyi-faktor-iga-igg-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 647,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Rheumatoid factor, IgA / IgG / IgM",
        },
        {
          lang: "uk",
          value: "Ревматоїдний фактор, IgA / IgG /IgM",
        },
      ],
    },
  },
  {
    id: "9cde444b-2322-47b0-ad5a-e2c4866a6447",
    createdAt: "2025-02-06T13:42:50.167Z",
    slug: "rezektsiia-hrudnoyi-zalozy-pry-hinekomastiyi-mastytakh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 368,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Breast resection for gynecomastia or mastitis",
        },
        {
          lang: "uk",
          value: "Резекція грудної залози при гінекомастії, маститах",
        },
      ],
    },
  },
  {
    id: "02c2b380-4c12-4e4f-97a1-696c92314105",
    createdAt: "2025-02-06T13:42:50.574Z",
    slug: "rezektsiia-kistky-pry-artropatiiakh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 414,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Резекція кістки при артропатіях",
        },
        {
          lang: "en",
          value: "Bone resection for arthropathies",
        },
      ],
    },
  },
  {
    id: "bb88e123-8c75-4f6a-9a0b-95f7ad32e9bb",
    createdAt: "2025-02-06T13:42:51.714Z",
    slug: "rezektsiia-nyrky",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 557,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Kidney resection",
        },
        {
          lang: "uk",
          value: "Резекція нирки",
        },
      ],
    },
  },
  {
    id: "5e01ce06-c9aa-458d-817c-197ed94d7700",
    createdAt: "2025-02-06T13:42:52.523Z",
    slug: "rezektsiia-pechinky-hemihepatektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 667,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Резекція печінки / гемігепатектомія",
        },
        {
          lang: "en",
          value: "Liver resection / hemihepatectomy",
        },
      ],
    },
  },
  {
    id: "2007d0fa-a38a-42b6-a7c6-f614e889ffc5",
    createdAt: "2025-02-06T13:42:51.446Z",
    slug: "rezektsiia-sechovoho-mikhura",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 522,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Резекція сечового міхура",
        },
        {
          lang: "en",
          value: "Bladder resection",
        },
      ],
    },
  },
  {
    id: "ea4ecf2f-c947-4125-b5c6-0270cb2b5ca7",
    createdAt: "2025-02-06T13:42:50.821Z",
    slug: "rezektsiia-slyzovoyi-obolonky-ta-endoskopichna-pidslyzova-dysektsiia-emr-esd",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 442,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Mucosal resection and endoscopic submucosal dissection (EMR, ESD)",
        },
        {
          lang: "uk",
          value:
            "Резекція слизової оболонки та ендоскопічна підслизова дисекція (EMR, ESD)",
        },
      ],
    },
  },
  {
    id: "8fed2ab6-d3bc-4244-8f91-7510e4198d43",
    createdAt: "2025-02-06T13:42:52.430Z",
    slug: "rezektsiia-stravokhodu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 654,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Esophagus resection*",
        },
        {
          lang: "uk",
          value: "Резекція стравоходу*",
        },
      ],
    },
  },
  {
    id: "095a533a-e1c8-4a46-82c3-e7ccab55b020",
    createdAt: "2025-02-06T13:42:50.475Z",
    slug: "renin-aktyvnyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 401,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Ренін активний **",
        },
        {
          lang: "en",
          value: "Active renin **",
        },
      ],
    },
  },
  {
    id: "ef8c98a9-e81d-4255-a3db-42c643b03b29",
    createdAt: "2025-02-06T13:42:48.397Z",
    slug: "renthenohrafiia-ohk-v-dvokh-proiektsiiakh",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 250,
    onlinePrice: 0,
    foreignId: 36,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Chest X-ray in two projections",
        },
        {
          lang: "uk",
          value: "Рентгенографія ОГК в двох проєкціях",
        },
      ],
    },
  },
  {
    id: "718a0324-0101-4d9e-8349-4a6d36551382",
    createdAt: "2025-02-06T13:42:48.404Z",
    slug: "renthenohrafiia-tazostehnovoho-suhlobu-v-dvokh-proiektsiiakh",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 250,
    onlinePrice: 0,
    foreignId: 37,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Рентгенографія тазостегнового суглобу в двох проєкціях",
        },
        {
          lang: "en",
          value: "Hip joint X-ray in two projections",
        },
      ],
    },
  },
  {
    id: "67f0c7e4-08bc-4f44-b396-4049ce6caed4",
    createdAt: "2025-02-06T13:42:50.504Z",
    slug: "ridynna-tsytolohiia-bronkhoalveoliarnoho-lavazhu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 405,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Рідинна цитологія бронхоальвеолярного лаважу",
        },
        {
          lang: "en",
          value: "Liquid cytology of bronchoalveolar lavage",
        },
      ],
    },
  },
  {
    id: "69004ba1-cd4e-4631-9835-4c2de7e7339c",
    createdAt: "2025-02-06T13:42:50.365Z",
    slug: "ridynna-tsytolohiia-paptest",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 394,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Liquid-based PAP test cytology",
        },
        {
          lang: "uk",
          value: "Рідинна цитологія ПАП-тест",
        },
      ],
    },
  },
  {
    id: "1728ea4d-1d43-43ef-8d80-9832bb0bdb19",
    createdAt: "2025-02-06T13:42:50.175Z",
    slug: "ridynna-tsytolohiia-sechi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 369,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Рідинна цитологія сечі",
        },
        {
          lang: "en",
          value: "Urine liquid cytology",
        },
      ],
    },
  },
  {
    id: "b54dbe95-6503-4bdc-8e85-d421b6e05fd9",
    createdAt: "2025-02-06T13:42:50.328Z",
    slug: "ridynna-tsytolohiia-tonkoholkovykh-punktsiinykh-biopsii-1-lokalizatsiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 389,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Liquid cytology of fine-needle aspiration biopsies (1 site)",
        },
        {
          lang: "uk",
          value:
            "Рідинна цитологія тонкоголкових пункційних біопсій (1 локалізація)",
        },
      ],
    },
  },
  {
    id: "9942cd4b-f85b-4f4c-9f43-96d2571fad9e",
    createdAt: "2025-02-20T19:04:10.810Z",
    slug: "roziednannia-synekhii-malykh-statevykh-hub",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 1600,
    onlinePrice: null,
    foreignId: 2582,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Separation of labial synechiae of the labia minora",
        },
        {
          lang: "uk",
          value: "Роз'єднання синехій малих статевих губ",
        },
      ],
    },
  },
  {
    id: "489cfe9e-d724-4786-95f5-51c556026712",
    createdAt: "2025-02-20T19:04:10.802Z",
    slug: "rozkryttia-abstsesu-bartolinovoyi-zalozy",
    sectionId: "055d3bf2-bafd-47b2-9edc-3ab394f0ba00",
    price: 6300,
    onlinePrice: null,
    foreignId: 2581,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Розкриття абсцесу бартолінової залози",
        },
        {
          lang: "en",
          value: "Incision of a Bartholin gland abscess",
        },
      ],
    },
  },
  {
    id: "b0a37606-df99-42df-a50c-2f02f5ddbcd4",
    createdAt: "2025-02-20T19:04:09.686Z",
    slug: "rozkryttia-ta-drenuvannia-abstsesiv-tulub-kintsivky",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1900,
    onlinePrice: null,
    foreignId: 6491,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Розкриття та дренування абсцесів (тулуб, кінцівки)",
        },
        {
          lang: "en",
          value: "Incision and drainage of abscesses (trunk, limbs)",
        },
      ],
    },
  },
  {
    id: "03ba6204-761f-456f-be74-135bc8fec826",
    createdAt: "2025-02-20T19:04:09.544Z",
    slug: "rozkryttia-ta-drenuvannia-panarytsiiu-paronikhiyi-u-ditei",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 990,
    onlinePrice: null,
    foreignId: 6495,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Incision and drainage of felon or paronychia (in children)",
        },
        {
          lang: "uk",
          value: "Розкриття та дренування панарицію, пароніхії (у дітей)",
        },
      ],
    },
  },
  {
    id: "2c07e157-530b-4921-b764-4d6baaa69bfa",
    createdAt: "2025-02-20T19:04:10.464Z",
    slug: "rozkryttia-furunkula",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 3300,
    onlinePrice: null,
    foreignId: 5610,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Incision of a furuncle",
        },
        {
          lang: "uk",
          value: "Розкриття фурункула",
        },
      ],
    },
  },
  {
    id: "163342d7-5ae6-43b7-956b-adbc72310720",
    createdAt: "2025-02-06T13:42:52.238Z",
    slug: "rozryv-henu-etv6-12p13-dlia-pidtverdzhennia-translokatsiyi-ntrk3etv6-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 627,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Розрив гену ETV6 (12p13) для підтвердження транслокації NTRK3/ETV6 (FISH)",
        },
        {
          lang: "en",
          value:
            "ETV6 gene break (12p13) for confirmation of NTRK3/ETV6 translocation (FISH)",
        },
      ],
    },
  },
  {
    id: "51b1338f-6ac5-4ae4-98f0-46c4d535e8fb",
    createdAt: "2025-02-06T13:42:48.503Z",
    slug: "roztyn-panaritsiiu",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 400,
    onlinePrice: 0,
    foreignId: 48,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Розтин панаріцію",
        },
        {
          lang: "en",
          value: "Incision of a felon",
        },
      ],
    },
  },
  {
    id: "927512af-3abb-454e-ab75-a937b6397891",
    createdAt: "2025-02-06T13:42:53.338Z",
    slug: "rozshyfrovka-zapysiv-kholtera-ekh",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 1200,
    onlinePrice: 0,
    foreignId: 793,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Interpretation of Holter monitor (ECG) recordings",
        },
        {
          lang: "uk",
          value: "Розшифровка записів холтера (ЕКГ)",
        },
      ],
    },
  },
  {
    id: "e20b4ad3-a518-47ec-aa08-43a870865f2e",
    createdAt: "2025-02-06T13:42:50.995Z",
    slug: "speptyd",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 465,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "C-peptide",
        },
        {
          lang: "uk",
          value: "С-пептид",
        },
      ],
    },
  },
  {
    id: "5d8ca5b9-e9fa-4a93-8134-bcb26bad5b4a",
    createdAt: "2025-02-20T19:04:15.297Z",
    slug: "sanatsiia-lororhaniv",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 900,
    onlinePrice: null,
    foreignId: 2604,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Sanitization of ENT organs",
        },
        {
          lang: "uk",
          value: "Санація ЛОР-органів",
        },
      ],
    },
  },
  {
    id: "621ec3da-8165-4700-9232-6fd7c015f1af",
    createdAt: "2025-02-06T13:42:50.694Z",
    slug: "sektoralna-rezektsiia-lampektomiia-hrudnoyi-zalozy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 426,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Sectoral resection / lumpectomy of the breast",
        },
        {
          lang: "uk",
          value: "Секторальна резекція / лампектомія грудної залози",
        },
      ],
    },
  },
  {
    id: "66e15084-3bc6-4785-b816-c4b1a15a3aaf",
    createdAt: "2025-02-06T13:42:50.545Z",
    slug: "septoplastyka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 410,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Септопластика",
        },
        {
          lang: "en",
          value: "Septoplasty",
        },
      ],
    },
  },
  {
    id: "ca41820b-48ce-42c8-a156-81e5d5b39d65",
    createdAt: "2025-02-06T13:42:49.307Z",
    slug: "serotonin-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 257,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Серотонін \\ N",
        },
        {
          lang: "en",
          value: "Serotonin / N",
        },
      ],
    },
  },
  {
    id: "69766800-f067-4218-bbfb-3af0202d3f7c",
    createdAt: "2025-02-06T13:42:52.806Z",
    slug: "sechova-kyslota-dobova-secha",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 695,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Uric acid (24-hour urine)",
        },
        {
          lang: "uk",
          value: "Сечова кислота (добова сеча)",
        },
      ],
    },
  },
  {
    id: "a9d3a31a-4efd-4344-8b7b-3fa4a2bb8f77",
    createdAt: "2025-02-06T13:42:53.005Z",
    slug: "sechovyna-krovi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 50,
    onlinePrice: 0,
    foreignId: 726,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Blood urea",
        },
        {
          lang: "uk",
          value: "Сечовина крові",
        },
      ],
    },
  },
  {
    id: "2c0a2031-be1b-4e57-9360-78a4740d239b",
    createdAt: "2025-02-06T13:42:49.468Z",
    slug: "syfilis-reahinovi-antytila-rpr-v-rozvedenni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 276,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Syphilis (reagin antibodies – RPR, in dilution)",
        },
        {
          lang: "uk",
          value: "Сифіліс (реагінові антитіла – RPR, в розведенні)",
        },
      ],
    },
  },
  {
    id: "4ac56783-a077-4007-923f-dd6c79a645b5",
    createdAt: "2025-02-06T13:42:49.446Z",
    slug: "syfilis-treponema-pallidum-antytila-sumarni",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 273,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Сифіліс (Treponema pallidum), антитіла сумарні",
        },
        {
          lang: "en",
          value: "Syphilis (Treponema pallidum), total antibodies",
        },
      ],
    },
  },
  {
    id: "7652c272-8feb-4e66-a38b-ee4a7db8a01e",
    createdAt: "2025-02-06T13:42:51.228Z",
    slug: "skryninh-na-medykamentoznu-rezystentnist-vyiavlennia-shtamiv-metytsylinrezystentnoho-staphylococcus",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 497,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Скринінг на медикаментозну резистентність (виявлення штамів метицилінрезистентного Staphylococcus aureus), м. Київ",
        },
        {
          lang: "en",
          value:
            "Screening for drug resistance (detection of methicillin-resistant Staphylococcus aureus strains), Kyiv",
        },
      ],
    },
  },
  {
    id: "2ac1fb7c-78a2-4cfe-ac5c-e31a91ab4d9b",
    createdAt: "2025-02-06T13:42:51.235Z",
    slug: "skryninh-na-medykamentoznu-rezystentnist-vyiavlennia-shtamiv-iaki-produkuiut-karbopenemazy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 498,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Скринінг на медикаментозну резистентність (виявлення штамів, які продукують карбопенемази)",
        },
        {
          lang: "en",
          value:
            "Screening for drug resistance (detection of carbapenemase-producing strains)",
        },
      ],
    },
  },
  {
    id: "127724aa-0503-48f4-8ad9-cd7fd209b584",
    createdAt: "2025-02-06T13:42:51.257Z",
    slug: "skryninh-na-medykamentoznu-rezystentnist-vyiavlennia-shtamiv-iaki-produkuiut-laktamazy-rozshyrenoho",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 501,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Screening for drug resistance (detection of extended-spectrum β-lactamase-producing strains)",
        },
        {
          lang: "uk",
          value:
            "Скринінг на медикаментозну резистентність (виявлення штамів, які продукують β-лактамази розширеного типу)",
        },
      ],
    },
  },
  {
    id: "df196ea0-0c85-4300-8c00-783f2877a452",
    createdAt: "2025-02-06T13:42:50.709Z",
    slug: "somatotropnyi-hormon-sth-hgh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 428,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Somatotropic hormone (STH / HGH) **",
        },
        {
          lang: "uk",
          value: "Соматотропний гормон СТГ/ ( HGH) **",
        },
      ],
    },
  },
  {
    id: "0ae79604-ad09-4f64-a1e2-3e551d896f7e",
    createdAt: "2025-02-06T13:42:49.027Z",
    slug: "spermohrama",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 300,
    onlinePrice: 0,
    foreignId: 143,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Спермограма",
        },
        {
          lang: "en",
          value: "Semen analysis (spermogram)",
        },
      ],
    },
  },
  {
    id: "adbd6b78-fa63-466b-84cb-131638828e35",
    createdAt: "2025-02-06T13:42:53.671Z",
    slug: "spermohrama-rozhornuta",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 857,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Спермограма розгорнута",
        },
        {
          lang: "en",
          value: "Extended semen analysis",
        },
      ],
    },
  },
  {
    id: "184fb421-7915-4d4b-a2b7-d27f5b6e91f8",
    createdAt: "2025-02-06T13:42:48.389Z",
    slug: "spirohrafiia",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 100,
    onlinePrice: 0,
    foreignId: 35,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Спірографія",
        },
        {
          lang: "en",
          value: "Spirography",
        },
      ],
    },
  },
  {
    id: "3f2d4310-0a8b-4dd0-811b-0d7f2a1163a2",
    createdAt: "2025-02-20T19:04:10.119Z",
    slug: "spirometriia",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 770,
    onlinePrice: null,
    foreignId: 2624,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Спірометрія",
        },
        {
          lang: "en",
          value: "Spirometry",
        },
      ],
    },
  },
  {
    id: "8b50c8f1-db7a-4aa8-94a2-c5a35c82523a",
    createdAt: "2025-02-20T19:04:10.775Z",
    slug: "spirometriia-z-bronkhodyliatatsiinym-testom",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 1120,
    onlinePrice: null,
    foreignId: 4250,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Спірометрія з бронходилятаційним тестом",
        },
        {
          lang: "en",
          value: "Spirometry with bronchodilation test",
        },
      ],
    },
  },
  {
    id: "c127ba88-ae6d-447f-8c92-3d8021b56f07",
    createdAt: "2025-02-06T13:42:51.206Z",
    slug: "splenektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 494,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Splenectomy",
        },
        {
          lang: "uk",
          value: "Спленектомія",
        },
      ],
    },
  },
  {
    id: "ae8a0e68-78ed-48bd-bdb4-b8546edf3541",
    createdAt: "2025-02-20T19:04:09.946Z",
    slug: "tematychna-lektsiia",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 900,
    onlinePrice: null,
    foreignId: 6545,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тематична лекція",
        },
        {
          lang: "en",
          value: "Thematic lecture",
        },
      ],
    },
  },
  {
    id: "3f1baa33-6b1c-4b6f-8159-70752eff8593",
    createdAt: "2025-03-27T11:03:26.845Z",
    slug: "tematychna-lektsiia-na-vyyizdi",
    sectionId: "b5a5e2f1-1cb4-4efd-a3e8-fe424d4925ac",
    price: 3000,
    onlinePrice: null,
    foreignId: 6711,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тематична лекція (на виїзді)",
        },
      ],
    },
  },
  {
    id: "7b15164f-4a8e-4033-b929-3a920b31ab61",
    createdAt: "2025-03-10T10:23:38.028Z",
    slug: "test-dlia-vyiavlennia-navkoloplidnykh-vod-actim-prom",
    sectionId: "b4c71144-c164-4a0a-b31e-b1fcaa15d597",
    price: 1200,
    onlinePrice: null,
    foreignId: 4138,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Test for detecting amniotic fluid ACTIM PROM",
        },
        {
          lang: "uk",
          value: "Тест для виявлення навколоплідних вод ACTIM PROM",
        },
      ],
    },
  },
  {
    id: "5c626dfe-3cc9-4b49-aed7-19de2e7c39af",
    createdAt: "2025-02-06T13:42:53.442Z",
    slug: "testova-neisnuiucha-posluha",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 825,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Test (non-existent) service",
        },
        {
          lang: "uk",
          value: "Тестова (неіснуюча) послуга",
        },
      ],
    },
  },
  {
    id: "24f5cdaa-5be3-4398-bf13-6176d4b1f726",
    createdAt: "2025-02-06T13:42:48.778Z",
    slug: "testosteron",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 78,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Testosterone",
        },
        {
          lang: "uk",
          value: "Тестостерон",
        },
      ],
    },
  },
  {
    id: "5ff82d5a-3ffb-44fd-a9b0-3467a11badf3",
    createdAt: "2025-02-06T13:42:50.016Z",
    slug: "testosteron-vilnyi-syrovatka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 347,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тестостерон вільний (сироватка)",
        },
        {
          lang: "en",
          value: "Free testosterone (serum)",
        },
      ],
    },
  },
  {
    id: "d81a073c-c673-4b07-8387-7bbf9acbc099",
    createdAt: "2025-02-06T13:42:50.044Z",
    slug: "testosteron-zahalnyi-syrovatka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 351,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тестостерон загальний (сироватка)",
        },
        {
          lang: "en",
          value: "Total testosterone (serum)",
        },
      ],
    },
  },
  {
    id: "40319085-2c8d-4048-9d31-9006b80cde3e",
    createdAt: "2025-02-06T13:42:50.008Z",
    slug: "testosteron-zahalnyi-slyna-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 346,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Total testosterone (saliva) / N",
        },
        {
          lang: "uk",
          value: "Тестостерон загальний (слина) \\ N",
        },
      ],
    },
  },
  {
    id: "ce943e04-cd32-4f12-8f0c-60f2db91083a",
    createdAt: "2025-02-06T13:42:49.341Z",
    slug: "tymidynkinaza-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 261,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Thymidine kinase / N",
        },
        {
          lang: "uk",
          value: "Тимідинкіназа \\ N",
        },
      ],
    },
  },
  {
    id: "fb952f2e-508b-49de-b4bc-921a4876e140",
    createdAt: "2025-02-06T13:42:49.476Z",
    slug: "tyreohlobulin-th",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 277,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тиреоглобулін (ТГ)",
        },
        {
          lang: "en",
          value: "Thyroglobulin (TG)",
        },
      ],
    },
  },
  {
    id: "25854c28-01aa-49ba-9da6-834ce22aa85e",
    createdAt: "2025-02-06T13:42:52.006Z",
    slug: "tyreoyidektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 596,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Thyroidectomy*",
        },
        {
          lang: "uk",
          value: "Тиреоїдектомія*",
        },
      ],
    },
  },
  {
    id: "d1cac87d-cdd9-4e74-a95e-e8e66141982c",
    createdAt: "2025-02-06T13:42:48.735Z",
    slug: "tyreotropnyi-hormon-tth",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 285,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тиреотропний гормон (ТТГ)",
        },
        {
          lang: "en",
          value: "Thyroid-stimulating hormone (TSH)",
        },
      ],
    },
  },
  {
    id: "7cc942d7-936c-4fd2-aab9-5a31e2e3a9e7",
    createdAt: "2025-02-06T13:42:53.449Z",
    slug: "tyreotropnyi-hormon-tth-iz-syrovatky-vk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 826,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Thyroid-stimulating hormone (TSH) from venous serum",
        },
        {
          lang: "uk",
          value: "Тиреотропний гормон (ТТГ) із сироватки ВК",
        },
      ],
    },
  },
  {
    id: "b7796f3c-ad75-4080-a6eb-4195c4599cc7",
    createdAt: "2025-02-06T13:42:53.456Z",
    slug: "tyreotropnyi-hormon-tth-iz-syrovatky-kk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 827,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Thyroid-stimulating hormone (TSH) from capillary serum",
        },
        {
          lang: "uk",
          value: "Тиреотропний гормон (ТТГ) із сироватки КК",
        },
      ],
    },
  },
  {
    id: "b89477ff-2b37-473c-9ed9-8582c2a76182",
    createdAt: "2025-02-06T13:42:48.751Z",
    slug: "tyroksyn-t4",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 75,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тироксин (T4)",
        },
        {
          lang: "en",
          value: "Thyroxine (T4)",
        },
      ],
    },
  },
  {
    id: "f0cedce8-ddd3-4403-b6d5-8f0838391b81",
    createdAt: "2025-02-06T13:42:53.484Z",
    slug: "tyroksyn-vilnyi-t4-viln-iz-syrovatky-vk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 831,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тироксин вільний (Т4 вільн.) із сироватки ВК",
        },
        {
          lang: "en",
          value: "Free thyroxine (T4 free) from venous serum",
        },
      ],
    },
  },
  {
    id: "4aca9539-14b8-49d6-b093-8b40e7a546f1",
    createdAt: "2025-02-06T13:42:53.493Z",
    slug: "tyroksyn-vilnyi-t4-viln-iz-syrovatky-kk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 832,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Free thyroxine (T4 free) from capillary serum",
        },
        {
          lang: "uk",
          value: "Тироксин вільний (Т4 вільн.) із сироватки КК",
        },
      ],
    },
  },
  {
    id: "85563ae3-c7cd-4565-b95d-7d088196f510",
    createdAt: "2025-02-06T13:42:49.568Z",
    slug: "tyroksyn-vilnyi-t4-vilnyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 289,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Free thyroxine (T4 free)",
        },
        {
          lang: "uk",
          value: "Тироксин вільний (T4 вільний)",
        },
      ],
    },
  },
  {
    id: "81d8e071-2c60-4af1-a0a8-e3478d641a86",
    createdAt: "2025-02-06T13:42:52.305Z",
    slug: "tkanynna-transhlutaminaza-antytila-iga-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 636,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тканинна трансглутаміназа, антитіла IgA \\ N",
        },
        {
          lang: "en",
          value: "Tissue transglutaminase, IgA antibodies / N",
        },
      ],
    },
  },
  {
    id: "7c1e7887-d9b7-44b1-9c6f-99f5b304043e",
    createdAt: "2025-02-06T13:42:52.360Z",
    slug: "tkanynna-transhlutaminaza-antytila-igg-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 644,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Tissue transglutaminase, IgG antibodies / N",
        },
        {
          lang: "uk",
          value: "Тканинна трансглутаміназа, антитіла IgG \\ N",
        },
      ],
    },
  },
  {
    id: "124aaf28-d772-4634-99ea-4938c3fa6629",
    createdAt: "2025-02-06T13:42:49.252Z",
    slug: "tkanynnyi-polipeptydnyi-antyhen-frahmenty-tsytokeratynu-81819-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 251,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Тканинний поліпептидний антиген (фрагменти цитокератину 8,18,19) \\ N",
        },
        {
          lang: "en",
          value:
            "Tissue polypeptide antigen (fragments of cytokeratins 8, 18, 19) / N",
        },
      ],
    },
  },
  {
    id: "113b7116-c3c4-4a78-9c9f-b1ecdef2f13e",
    createdAt: "2025-02-06T13:42:50.490Z",
    slug: "toksokaroz-toxocara-canis-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 403,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Токсокароз (Toxocara canis), антитіла IgG",
        },
        {
          lang: "en",
          value: "Toxocariasis (Toxocara canis), IgG antibodies",
        },
      ],
    },
  },
  {
    id: "c6a0179d-5b18-4130-b5ef-0e7e13bfd3cc",
    createdAt: "2025-02-20T19:04:10.230Z",
    slug: "tonkoholkova-aspiratsiina-punktsiina-biopsiia-hrudnoyi-zalozy-pid-kontrolem-uzd",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 3000,
    onlinePrice: null,
    foreignId: 4141,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Тонкоголкова аспіраційна пункційна біопсія грудної залози (під контролем УЗД)",
        },
        {
          lang: "en",
          value:
            "Fine-needle aspiration biopsy of the breast (under ultrasound guidance)",
        },
      ],
    },
  },
  {
    id: "dcac5e6c-4c66-4f38-b547-cf43e7fb95dc",
    createdAt: "2025-02-20T19:04:11.916Z",
    slug: "tonkoholkova-aspiratsiina-punktsiina-biopsiia-limfatychnykh-vuzliv-pid-kontrolem-uzd",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1700,
    onlinePrice: null,
    foreignId: 4147,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Fine-needle aspiration biopsy of lymph nodes (under ultrasound guidance)",
        },
        {
          lang: "uk",
          value:
            "Тонкоголкова аспіраційна пункційна біопсія лімфатичних вузлів (під контролем УЗД)",
        },
      ],
    },
  },
  {
    id: "fa67eb44-e5bf-4b66-8cf3-5f31e8457a85",
    createdAt: "2025-02-20T19:04:10.555Z",
    slug: "tonkoholkova-aspiratsiina-punktsiina-biopsiia-shchytopodibnoyi-zalozy-pid-kontrolem-uzd",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 3000,
    onlinePrice: null,
    foreignId: 4140,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Тонкоголкова аспіраційна пункційна біопсія щитоподібної залози (під контролем УЗД)",
        },
        {
          lang: "en",
          value:
            "Fine-needle aspiration biopsy of the thyroid gland (under ultrasound guidance)",
        },
      ],
    },
  },
  {
    id: "6f871068-a209-4aa3-8080-f342ba729d18",
    createdAt: "2025-02-20T19:04:10.568Z",
    slug: "tonkoholkova-punktsiina-aspiratsiina-biopsiia-miakykh-tkanyn-pid-kontrolem-uzd",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1200,
    onlinePrice: null,
    foreignId: 4142,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Fine-needle aspiration biopsy of soft tissues (under ultrasound guidance)",
        },
        {
          lang: "uk",
          value:
            "Тонкоголкова пункційна аспіраційна біопсія м'яких тканин (під контролем УЗД)",
        },
      ],
    },
  },
  {
    id: "f0213558-eb82-4b14-995f-bd81de15bf98",
    createdAt: "2025-02-06T13:42:52.796Z",
    slug: "totalna-vulvektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 694,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тотальна вульвектомія",
        },
        {
          lang: "en",
          value: "Total vulvectomy",
        },
      ],
    },
  },
  {
    id: "bf2f6c7c-5da3-4577-9a2d-a4c7a8c81de3",
    createdAt: "2025-02-06T13:42:52.730Z",
    slug: "totalna-larynhektomiia-rezektsiia-hortani",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 688,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тотальна ларингектомія / резекція  гортані*",
        },
        {
          lang: "en",
          value: "Total laryngectomy / laryngeal resection*",
        },
      ],
    },
  },
  {
    id: "27787cc0-4dcf-4853-8842-4503eb0c4be8",
    createdAt: "2025-02-06T13:42:48.359Z",
    slug: "transkranialna-doplerohrafiia-mahistralnykh-sudyn-mozku",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 200,
    onlinePrice: 0,
    foreignId: 31,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Transcranial Doppler ultrasound of the brain's major vessels",
        },
        {
          lang: "uk",
          value: "Транскраніальна доплерографія магістральних судин мозку",
        },
      ],
    },
  },
  {
    id: "b5adb2b1-7936-4ddd-b673-a163d64e243d",
    createdAt: "2025-02-06T13:42:51.291Z",
    slug: "translokatsiia-11q23-kmt2a-mll-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 505,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Translocation 11q23 KMT2A (MLL) (FISH)",
        },
        {
          lang: "uk",
          value: "Транслокація 11q23 KMT2A (MLL) (FISH)",
        },
      ],
    },
  },
  {
    id: "e3c25bb8-2cea-49d7-8548-ac02b86df6df",
    createdAt: "2025-02-06T13:42:52.325Z",
    slug: "translokatsiia-12p13-etv6-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 639,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація 12p13 (ETV6) (FISH)",
        },
        {
          lang: "en",
          value: "Translocation 12p13 (ETV6) (FISH)",
        },
      ],
    },
  },
  {
    id: "9623773a-0df2-4421-8da9-6e1a0b0c16a4",
    createdAt: "2025-02-06T13:42:51.386Z",
    slug: "translokatsiia-9q34-nup214-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 517,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація 9q34 (NUP214) (FISH)",
        },
        {
          lang: "en",
          value: "Translocation 9q34 (NUP214) (FISH)",
        },
      ],
    },
  },
  {
    id: "0050b9af-386f-4a08-833f-50e5d1129513",
    createdAt: "2025-02-06T13:42:51.496Z",
    slug: "translokatsiia-alk-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 529,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Translocation ALK (FISH)",
        },
        {
          lang: "uk",
          value: "Транслокація ALK (FISH)",
        },
      ],
    },
  },
  {
    id: "7650ab71-09ff-449f-83c6-91e2bb8e3f84",
    createdAt: "2025-02-06T13:42:52.188Z",
    slug: "translokatsiia-braf-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 621,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація BRAF (FISH)",
        },
        {
          lang: "en",
          value: "Translocation BRAF (FISH)",
        },
      ],
    },
  },
  {
    id: "141f4afc-0fae-4371-b7d7-b8c620376026",
    createdAt: "2025-02-06T13:42:51.977Z",
    slug: "translokatsiia-ewsr1-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 592,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація EWSR1 (FISH)",
        },
        {
          lang: "en",
          value: "Translocation EWSR1 (FISH)",
        },
      ],
    },
  },
  {
    id: "778dde54-0c72-4c54-8a38-5b9c173916a7",
    createdAt: "2025-02-06T13:42:51.096Z",
    slug: "translokatsiia-igh-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 479,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Translocation IGH (FISH)",
        },
        {
          lang: "uk",
          value: "Транслокація IGH (FISH)",
        },
      ],
    },
  },
  {
    id: "9de8faa6-6771-45b1-8f8b-c28a56b6281a",
    createdAt: "2025-02-06T13:42:51.275Z",
    slug: "translokatsiia-inv16p11q22t1616-cbfbmyh11-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 503,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація inv(16)(p11q22)/t(16;16) (CBFB/MYH11) (FISH)",
        },
        {
          lang: "en",
          value: "Translocation inv(16)(p11q22)/t(16;16) (CBFB/MYH11) (FISH)",
        },
      ],
    },
  },
  {
    id: "8b000f59-22d7-4079-85b7-bdf39ec4e8e2",
    createdAt: "2025-02-06T13:42:51.032Z",
    slug: "translokatsiia-mys-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 470,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація MYС (FISH)",
        },
        {
          lang: "en",
          value: "Translocation MYC (FISH)",
        },
      ],
    },
  },
  {
    id: "d8c3af05-0a3e-4bf8-9eb5-27b4a6c60689",
    createdAt: "2025-02-06T13:42:51.157Z",
    slug: "translokatsiia-pdgfrb-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 487,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація PDGFRB (FISH)",
        },
        {
          lang: "en",
          value: "Translocation PDGFRB (FISH)",
        },
      ],
    },
  },
  {
    id: "fefc28ac-b1ac-4f49-870a-4ccc6ec04523",
    createdAt: "2025-02-06T13:42:51.186Z",
    slug: "translokatsiia-ros1-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 491,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація ROS1 (FISH)",
        },
        {
          lang: "en",
          value: "Translocation ROS1 (FISH)",
        },
      ],
    },
  },
  {
    id: "26c4eff7-947d-4e67-8ede-0cc0d0efd5a6",
    createdAt: "2025-02-06T13:42:52.063Z",
    slug: "translokatsiia-syt-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 604,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація SYT (FISH)",
        },
        {
          lang: "en",
          value: "Translocation SYT (FISH)",
        },
      ],
    },
  },
  {
    id: "485331a4-34d9-40f1-aab2-a805e788ac13",
    createdAt: "2025-02-06T13:42:51.126Z",
    slug: "translokatsiia-t1114q133q323-ccnd1igh-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 483,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація t(11;14)(q13.3;q32.3) (CCND1/IGH) (FISH)",
        },
        {
          lang: "en",
          value: "Translocation t(11;14)(q13.3;q32.3) (CCND1/IGH) (FISH)",
        },
      ],
    },
  },
  {
    id: "79eebfa5-d4c3-4c4b-a7e9-89ac6c30f454",
    createdAt: "2025-02-06T13:42:51.068Z",
    slug: "translokatsiia-t1118-birc3api2-malt1-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 475,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Translocation t(11;18) BIRC3(API2)/MALT1 (FISH)",
        },
        {
          lang: "uk",
          value: "Транслокація t(11;18) BIRC3(API2)/ MALT1 (FISH)",
        },
      ],
    },
  },
  {
    id: "0ef52dd1-21ba-472a-bfda-ae0e77967ee4",
    createdAt: "2025-02-06T13:42:51.870Z",
    slug: "translokatsiia-t1416q323q23-mafigh-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 578,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Translocation t(14;16)(q32.3;q23) (MAF/IGH) (FISH)",
        },
        {
          lang: "uk",
          value: "Транслокація t(14;16)(q32.3;q23) (MAF/IGH) (FISH)",
        },
      ],
    },
  },
  {
    id: "2a77757d-029f-472b-a559-ef8aba2b2fbd",
    createdAt: "2025-02-06T13:42:50.973Z",
    slug: "translokatsiia-t1418-bcl2-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 462,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Translocation t(14;18) (BCL2) (FISH)",
        },
        {
          lang: "uk",
          value: "Транслокація t(14;18) (BCL2) (FISH)",
        },
      ],
    },
  },
  {
    id: "58e0db19-5204-4a27-b7bf-cd8900cc92e9",
    createdAt: "2025-02-06T13:42:51.991Z",
    slug: "translokatsiia-t1420q323q12-mafbigh-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 594,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Translocation t(14;20)(q32.3;q12) (MAFB/IGH) (FISH)",
        },
        {
          lang: "uk",
          value: "Транслокація t(14;20)(q32.3;q12) (MAFB/IGH) (FISH)",
        },
      ],
    },
  },
  {
    id: "f0221777-24d4-4614-801e-11a52127e951",
    createdAt: "2025-02-06T13:42:50.946Z",
    slug: "translokatsiia-t1517q22q12-pmlrara-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 458,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація t(15;17)(q22;q12) (PML/RARA) (FISH)",
        },
        {
          lang: "en",
          value: "Translocation t(15;17)(q22;q12) (PML/RARA) (FISH)",
        },
      ],
    },
  },
  {
    id: "a2c2dfe4-cd16-4c5a-baa0-631a9dc6283d",
    createdAt: "2025-02-06T13:42:51.004Z",
    slug: "translokatsiia-t314-bcl6-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 466,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація t(3;14) (BCL6) (FISH)",
        },
        {
          lang: "en",
          value: "Translocation t(3;14) (BCL6) (FISH)",
        },
      ],
    },
  },
  {
    id: "e0bb13d0-17b7-4d1d-ac76-8379c35b8ea7",
    createdAt: "2025-02-06T13:42:51.577Z",
    slug: "translokatsiia-t414p163q323-fgfr3igh-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 539,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Транслокація t(4;14)(p16.3;q32.3) FGFR3/IGH (FISH)",
        },
        {
          lang: "en",
          value: "Translocation t(4;14)(p16.3;q32.3) FGFR3/IGH (FISH)",
        },
      ],
    },
  },
  {
    id: "eec49f50-0b63-4ed2-a686-a3a06cd217bf",
    createdAt: "2025-02-06T13:42:51.546Z",
    slug: "translokatsiia-t814-ighmyc-fish-pry-limfomakh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 535,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Translocation t(8;14) (IGH/MYC) (FISH) in lymphomas",
        },
        {
          lang: "uk",
          value: "Транслокація t(8;14) (IGH/MYC) (FISH) при лімфомах",
        },
      ],
    },
  },
  {
    id: "3b61b8e8-624d-46ba-9c19-9415ad407ce0",
    createdAt: "2025-02-06T13:42:51.242Z",
    slug: "translokatsiia-t821q22q22-runx1runx1t1-aml1eto-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 499,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Транслокація t(8;21)(q22;q22) RUNX1/RUNX1T1 (AML1/ETO) (FISH)",
        },
        {
          lang: "en",
          value:
            "Translocation t(8;21)(q22;q22) RUNX1/RUNX1T1 (AML1/ETO) (FISH)",
        },
      ],
    },
  },
  {
    id: "5f567343-7ada-4d45-8179-8e5eff682e29",
    createdAt: "2025-02-06T13:42:49.086Z",
    slug: "transplantatsiia-nyrky",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 100000,
    onlinePrice: 0,
    foreignId: 210,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Kidney transplantation",
        },
        {
          lang: "uk",
          value: "Трансплантація нирки",
        },
      ],
    },
  },
  {
    id: "140412a9-afbb-478b-9128-4201cece7a10",
    createdAt: "2025-02-06T13:42:50.939Z",
    slug: "transuretralna-rezektsiia-prostaty-sechovoho-mikhura",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 457,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Transurethral resection of the prostate / bladder",
        },
        {
          lang: "uk",
          value: "Трансуретральна резекція простати / сечового міхура",
        },
      ],
    },
  },
  {
    id: "6ef99fc1-37e5-4953-b6b9-9e94efa590a0",
    createdAt: "2025-02-06T13:42:52.033Z",
    slug: "transferyn-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 600,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Трансферин \\ N",
        },
        {
          lang: "en",
          value: "Transferrin / N",
        },
      ],
    },
  },
  {
    id: "dfec299b-823c-47db-8ff1-4c20fd06d986",
    createdAt: "2025-02-06T13:42:51.338Z",
    slug: "trakhelektomiia-vydalennia-kuksy-shyiky-matky",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 511,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Trachelectomy / removal of the cervical stump",
        },
        {
          lang: "uk",
          value: "Трахелектомія / видалення кукси шийки матки",
        },
      ],
    },
  },
  {
    id: "41f631b3-d68b-4de2-9190-247d143d5f99",
    createdAt: "2025-02-20T19:04:15.552Z",
    slug: "tredmiltest",
    sectionId: "b4b9a9f6-1392-4293-b3d6-b2512ee5e642",
    price: 2250,
    onlinePrice: null,
    foreignId: 2625,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Treadmill test",
        },
        {
          lang: "uk",
          value: "Тредміл-тест",
        },
      ],
    },
  },
  {
    id: "8929c56b-6cd6-45ac-8884-2635d4775535",
    createdAt: "2025-02-06T13:42:49.262Z",
    slug: "trepanbiopsiia-hrudnoyi-zalozy-z-odnoho-boku",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 252,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Трепан-біопсія грудної залози (з одного боку)",
        },
        {
          lang: "en",
          value: "Core needle biopsy of the breast (unilateral)",
        },
      ],
    },
  },
  {
    id: "1a451a85-6bb3-4b43-9fa6-d06636a77b7f",
    createdAt: "2025-02-06T13:42:51.682Z",
    slug: "trepanbiopsiia-kistkovoho-mozku-vkl-neobkhidni-histokhimichni-zabarvlennia-na-vybir-patoloha",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 553,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Core needle biopsy of the bone marrow (including necessary histochemical stains at the pathologist’s discretion)",
        },
        {
          lang: "uk",
          value:
            "Трепан-біопсія кісткового мозку (враховуючи необхідні гістохімічні забарвлення на вибір патолога)",
        },
      ],
    },
  },
  {
    id: "f0725833-2408-4fdd-9769-f5ab81960481",
    createdAt: "2025-02-06T13:42:50.030Z",
    slug: "trepanbiopsiia-limfovuzliv-za-1-lokalizatsiiu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 349,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Трепан-біопсія лімфовузлів (за 1 локалізацію)",
        },
        {
          lang: "en",
          value: "Core needle biopsy of lymph nodes (per 1 site)",
        },
      ],
    },
  },
  {
    id: "4d5cd5f2-98ac-4961-9437-febfdc9a59dd",
    createdAt: "2025-02-06T13:42:50.605Z",
    slug: "trepanbiopsiia-seredostinnia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 418,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Core needle biopsy of the mediastinum",
        },
        {
          lang: "uk",
          value: "Трепан-біопсія середостіння",
        },
      ],
    },
  },
  {
    id: "8b6eda21-7746-4af9-b4db-79b3e62c007f",
    createdAt: "2025-02-06T13:42:51.797Z",
    slug: "tryhlitserydy",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 568,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Triglycerides",
        },
        {
          lang: "uk",
          value: "Тригліцериди",
        },
      ],
    },
  },
  {
    id: "272aa197-42ce-465d-a0fb-a3bbc08c5f44",
    createdAt: "2025-02-06T13:42:48.762Z",
    slug: "tryiodtyronin-t3",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 76,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Triiodothyronine (T3)",
        },
        {
          lang: "uk",
          value: "Трийодтиронін (T3)",
        },
      ],
    },
  },
  {
    id: "d1a2d6ee-675d-449d-949a-fbdd2b482d68",
    createdAt: "2025-02-06T13:42:53.463Z",
    slug: "tryiodtyronin-vilnyi-t3-viln-iz-syrovatky-vk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 828,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Free triiodothyronine (T3 free) from venous serum",
        },
        {
          lang: "uk",
          value: "Трийодтиронін вільний (Т3 вільн.) із сироватки ВК",
        },
      ],
    },
  },
  {
    id: "31f72eba-ba95-4f01-a1c6-4ff91275cd08",
    createdAt: "2025-02-06T13:42:53.477Z",
    slug: "tryiodtyronin-vilnyi-t3-viln-iz-syrovatky-vk2",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 830,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Трийодтиронін вільний (Т3 вільн.) із сироватки ВК-2",
        },
        {
          lang: "en",
          value: "Free triiodothyronine (T3 free) from venous serum-2",
        },
      ],
    },
  },
  {
    id: "64fae077-1f10-433a-8acf-bd10ac77204a",
    createdAt: "2025-02-06T13:42:53.470Z",
    slug: "tryiodtyronin-vilnyi-t3-viln-iz-syrovatky-kk",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 829,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Free triiodothyronine (T3 free) from capillary serum",
        },
        {
          lang: "uk",
          value: "Трийодтиронін вільний (Т3 вільн.) із сироватки КК",
        },
      ],
    },
  },
  {
    id: "a0faa54d-6ed1-4920-9e6f-c0996b3d8625",
    createdAt: "2025-02-06T13:42:49.617Z",
    slug: "tryiodtyronin-vilnyi-t3-vilnyi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 295,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Free triiodothyronine (T3 free)",
        },
        {
          lang: "uk",
          value: "Трийодтиронін вільний (T3 вільний)",
        },
      ],
    },
  },
  {
    id: "c7c681ed-aac4-4dc2-9db0-d64478545f50",
    createdAt: "2025-02-06T13:42:50.519Z",
    slug: "trykhineloz-trichinella-spiralis-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 407,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Trichinellosis (Trichinella spiralis), IgG antibodies",
        },
        {
          lang: "uk",
          value: "Трихінельоз (Trichinella spiralis), антитіла IgG",
        },
      ],
    },
  },
  {
    id: "c74cbbe0-f0d4-481e-99da-bcc45274d484",
    createdAt: "2025-02-06T13:42:49.753Z",
    slug: "trykhomonada-trichomonas-vaginalis-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 313,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Trichomonas (Trichomonas vaginalis), IgG",
        },
        {
          lang: "uk",
          value: "Трихомонада (Trichomonas vaginalis), IgG",
        },
      ],
    },
  },
  {
    id: "52aa7ba8-3b1e-4381-89f2-6361421f4fa0",
    createdAt: "2025-02-06T13:42:52.509Z",
    slug: "trombinovyi-chas-tch",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 665,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Thrombin time (TT)",
        },
        {
          lang: "uk",
          value: "Тромбіновий час (ТЧ)",
        },
      ],
    },
  },
  {
    id: "832d98b3-183d-444c-906a-77904f3d14a6",
    createdAt: "2025-02-06T13:42:52.208Z",
    slug: "troponin-i-kilkisne-vyznachennia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 623,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Тропонін I, кількісне визначення",
        },
        {
          lang: "en",
          value: "Troponin I, quantitative determination",
        },
      ],
    },
  },
  {
    id: "8031cd9b-1bdb-4a09-b2f7-61084a928c76",
    createdAt: "2025-02-20T19:04:13.382Z",
    slug: "tualet-zovnishnikh-slukhovykh-prokhodiv",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 500,
    onlinePrice: null,
    foreignId: 6514,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Туалет зовнішніх слухових проходів",
        },
        {
          lang: "en",
          value: "Cleaning of the external auditory canals",
        },
      ],
    },
  },
  {
    id: "3524d356-82ab-4ac3-b620-7f8c4c108921",
    createdAt: "2025-02-20T19:04:15.857Z",
    slug: "tuberkulinodiahnostyka-proba-mantu-tuberkulin",
    sectionId: "afeb68b7-8aa1-4c59-8b02-a4e5abf64357",
    price: 290,
    onlinePrice: null,
    foreignId: 2531,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Tuberculin diagnostics (Mantoux test) "Tuberculin"',
        },
        {
          lang: "uk",
          value: 'Туберкулінодіагностика (Проба Манту) "Туберкулін"',
        },
      ],
    },
  },
  {
    id: "2164d811-59c7-492c-a132-c292b5a98938",
    createdAt: "2025-02-06T13:42:48.375Z",
    slug: "uzd-1-suhlobu",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 120,
    onlinePrice: 0,
    foreignId: 33,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД 1 суглобу",
        },
        {
          lang: "en",
          value: "Ultrasound of 1 joint",
        },
      ],
    },
  },
  {
    id: "9be2aa1d-273b-4fef-9b7b-33dd5881827c",
    createdAt: "2025-02-20T19:04:10.039Z",
    slug: "uzd-hrudnykh-zaloz",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1050,
    onlinePrice: null,
    foreignId: 2555,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД грудних залоз",
        },
        {
          lang: "en",
          value: "Ultrasound of the breasts",
        },
      ],
    },
  },
  {
    id: "52ba00f5-92ea-42e2-a71d-70a39cc6c011",
    createdAt: "2025-02-20T19:04:14.656Z",
    slug: "uzd-zhovchnoho-mikhura",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1050,
    onlinePrice: null,
    foreignId: 2570,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД жовчного міхура",
        },
        {
          lang: "en",
          value: "Ultrasound of the gallbladder",
        },
      ],
    },
  },
  {
    id: "761adc5d-8542-489a-ba40-ee567b0563ed",
    createdAt: "2025-02-20T19:04:15.494Z",
    slug: "uzd-kyvalnykh-miaziv",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 900,
    onlinePrice: null,
    foreignId: 2543,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the sternocleidomastoid muscles",
        },
        {
          lang: "uk",
          value: "УЗД кивальних м'язів",
        },
      ],
    },
  },
  {
    id: "a1a1904a-98a1-4f59-b30d-0a94e44212d5",
    createdAt: "2025-02-20T19:04:13.608Z",
    slug: "uzd-kulshovykh-suhlobiv-u-ditei",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1120,
    onlinePrice: null,
    foreignId: 2558,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД кульшових суглобів у дітей",
        },
        {
          lang: "en",
          value: "Ultrasound of the hip joints in children",
        },
      ],
    },
  },
  {
    id: "f3dc4fe8-edc9-423f-a7fd-1fc052a2434a",
    createdAt: "2025-02-20T19:04:14.847Z",
    slug: "uzd-lytkovoho-miazu",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 990,
    onlinePrice: null,
    foreignId: 5654,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД литкового м'язу",
        },
        {
          lang: "en",
          value: "Ultrasound of the calf muscle",
        },
      ],
    },
  },
  {
    id: "5b57fe19-405e-4a50-a4c2-9e7b42300189",
    createdAt: "2025-02-20T19:04:14.665Z",
    slug: "uzd-limfatychnykh-vuzliv-odna-zona",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 870,
    onlinePrice: null,
    foreignId: 2551,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД лімфатичних вузлів (одна зона)",
        },
        {
          lang: "en",
          value: "Ultrasound of lymph nodes (one area)",
        },
      ],
    },
  },
  {
    id: "04ee4b39-acc2-4e91-8b6c-220d496ffdd2",
    createdAt: "2025-02-20T19:04:09.477Z",
    slug: "uzd-lonnoho-zchlenuvannia",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 900,
    onlinePrice: null,
    foreignId: 6534,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the pubic symphysis",
        },
        {
          lang: "uk",
          value: "УЗД лонного зчленування",
        },
      ],
    },
  },
  {
    id: "192aa96a-3b93-44ae-abc8-df5a13e0a240",
    createdAt: "2025-02-20T19:04:15.472Z",
    slug: "uzd-miakykh-tkanyn",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 870,
    onlinePrice: null,
    foreignId: 2556,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД м`яких тканин",
        },
        {
          lang: "en",
          value: "Ultrasound of soft tissues",
        },
      ],
    },
  },
  {
    id: "000096d3-eec3-49e9-889e-039e2fdafa45",
    createdAt: "2025-02-20T19:04:15.487Z",
    slug: "uzd-nadnyrnykiv",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 900,
    onlinePrice: null,
    foreignId: 2545,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД наднирників",
        },
        {
          lang: "en",
          value: "Ultrasound of the adrenal glands",
        },
      ],
    },
  },
  {
    id: "9f08c518-5129-4d20-b8cd-8d102c9022e1",
    createdAt: "2025-02-06T13:42:48.349Z",
    slug: "uzd-nyrok",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 150,
    onlinePrice: 0,
    foreignId: 30,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД нирок",
        },
        {
          lang: "en",
          value: "Ultrasound of the kidneys",
        },
      ],
    },
  },
  {
    id: "18903253-615c-42a0-8a1e-6e56d68d2b6f",
    createdAt: "2025-02-20T19:04:10.585Z",
    slug: "uzd-nyrok-1",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 990,
    onlinePrice: null,
    foreignId: 2544,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the kidneys",
        },
        {
          lang: "uk",
          value: "УЗД нирок",
        },
      ],
    },
  },
  {
    id: "6a0fe556-4a42-4d9f-98d3-9d36cb63d382",
    createdAt: "2025-02-20T19:04:10.057Z",
    slug: "uzd-nyrok-ta-sechovoho-mikhura",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1120,
    onlinePrice: null,
    foreignId: 2561,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД нирок та сечового міхура",
        },
        {
          lang: "en",
          value: "Ultrasound of the kidneys and bladder",
        },
      ],
    },
  },
  {
    id: "6d7c7f76-4233-4a62-a3e8-445c764d8e6c",
    createdAt: "2025-02-20T19:04:14.798Z",
    slug: "uzd-orhaniv-kalytky",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1050,
    onlinePrice: null,
    foreignId: 2565,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the scrotal organs",
        },
        {
          lang: "uk",
          value: "УЗД органів калитки",
        },
      ],
    },
  },
  {
    id: "9ae580f1-97cd-4f6a-92bc-f9f730419149",
    createdAt: "2025-02-06T13:42:48.316Z",
    slug: "uzd-orhaniv-maloho-tazu",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 250,
    onlinePrice: 0,
    foreignId: 26,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the pelvic organs",
        },
        {
          lang: "uk",
          value: "УЗД органів малого тазу",
        },
      ],
    },
  },
  {
    id: "49078a2f-8e7b-4990-9801-8c9aef957753",
    createdAt: "2025-02-20T19:04:09.978Z",
    slug: "uzd-orhaniv-maloho-tazu-transabdominalno",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1240,
    onlinePrice: null,
    foreignId: 2563,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД органів малого тазу трансабдомінально",
        },
        {
          lang: "en",
          value: "Transabdominal ultrasound of the pelvic organs",
        },
      ],
    },
  },
  {
    id: "e0649919-9c2a-4122-90e6-855d828d6e17",
    createdAt: "2025-02-20T19:04:11.299Z",
    slug: "uzd-orhaniv-maloho-tazu-transvahinalno",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1240,
    onlinePrice: null,
    foreignId: 2564,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Transvaginal ultrasound of the pelvic organs",
        },
        {
          lang: "uk",
          value: "УЗД органів малого тазу трансвагінально",
        },
      ],
    },
  },
  {
    id: "963010fd-8d9d-4c31-af68-b5f920b16e68",
    createdAt: "2025-02-20T19:04:11.128Z",
    slug: "uzd-orhaniv-maloho-tazu-transrektalno",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1240,
    onlinePrice: null,
    foreignId: 2562,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД органів малого тазу трансректально",
        },
        {
          lang: "en",
          value: "Transrectal ultrasound of the pelvic organs",
        },
      ],
    },
  },
  {
    id: "4b2830fa-d0c1-44b4-8677-732ce742bf21",
    createdAt: "2025-02-06T13:42:48.228Z",
    slug: "uzd-orhaniv-cherevnoyi-porozhnyny",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 250,
    onlinePrice: null,
    foreignId: 23,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД органів черевної порожнини",
        },
      ],
    },
  },
  {
    id: "767cdccd-84de-467e-b050-a5bfbdb524c6",
    createdAt: "2025-02-20T19:04:10.354Z",
    slug: "uzd-orhaniv-cherevnoyi-porozhnyny-1",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1240,
    onlinePrice: null,
    foreignId: 2547,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the abdominal organs",
        },
        {
          lang: "uk",
          value: "УЗД органів черевної порожнини",
        },
      ],
    },
  },
  {
    id: "dc532ca1-9083-4ada-9f6e-392b0f1f6ec2",
    createdAt: "2025-02-20T19:04:11.244Z",
    slug: "uzd-orhaniv-cherevnoyi-porozhnyny-ta-nyrok",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1500,
    onlinePrice: null,
    foreignId: 2548,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД органів черевної порожнини та нирок",
        },
        {
          lang: "en",
          value: "Ultrasound of the abdominal organs and kidneys",
        },
      ],
    },
  },
  {
    id: "7d00f43f-0240-4f66-bd81-81beff536455",
    createdAt: "2025-02-20T19:04:13.172Z",
    slug: "uzd-orhaniv-cherevnoyi-porozhnynynyrok-ta-sechovoho-mikhura",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1800,
    onlinePrice: null,
    foreignId: 2549,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the abdominal organs, kidneys, and bladder",
        },
        {
          lang: "uk",
          value: "УЗД органів черевної порожнини,нирок та сечового міхура",
        },
      ],
    },
  },
  {
    id: "4ebf1f44-55b3-4f7b-8926-073c449303af",
    createdAt: "2025-02-20T19:04:14.862Z",
    slug: "uzd-prostaty-i-sechovoho-mikhura",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1230,
    onlinePrice: null,
    foreignId: 4325,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the prostate and bladder",
        },
        {
          lang: "uk",
          value: "УЗД передміхурова залоза і сечового міхура",
        },
      ],
    },
  },
  {
    id: "0cde933b-0643-4c75-ab18-166e3119be6b",
    createdAt: "2025-02-20T19:04:13.110Z",
    slug: "uzd-peredmikhurovoyi-zalozy",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1230,
    onlinePrice: null,
    foreignId: 2566,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД передміхурової залози",
        },
        {
          lang: "en",
          value: "Ultrasound of the prostate gland",
        },
      ],
    },
  },
  {
    id: "621b9ec2-dbd6-42e3-9345-51f3e9143f4a",
    createdAt: "2025-02-20T19:04:09.988Z",
    slug: "uzd-peredmikhurovoyi-zalozy-vostatochnoyi-sechi-simianykh-mikhurtsiv-sechovoho-mikhura",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1500,
    onlinePrice: null,
    foreignId: 2567,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Ultrasound of the prostate gland, residual urine volume, seminal vesicles, and bladder",
        },
        {
          lang: "uk",
          value:
            "УЗД передміхурової залози, V-остаточної сечі, сім`яних міхурців, сечового міхура",
        },
      ],
    },
  },
  {
    id: "085e91dd-aa1c-43b7-8f74-a840a9393e5d",
    createdAt: "2025-02-20T19:04:11.037Z",
    slug: "uzd-peryferychnykh-nerviv-verkhnikh-kintsivok",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 900,
    onlinePrice: null,
    foreignId: 4326,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД периферичних нервів (верхніх кінцівок)",
        },
        {
          lang: "en",
          value: "Ultrasound of peripheral nerves (upper extremities)",
        },
      ],
    },
  },
  {
    id: "18fe421c-0b19-4910-9f40-68ec0a8c478d",
    createdAt: "2025-02-20T19:04:14.356Z",
    slug: "uzd-peryferychnykh-nerviv-nyzhnikh-kintsivok",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 900,
    onlinePrice: null,
    foreignId: 4327,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of peripheral nerves (lower extremities)",
        },
        {
          lang: "uk",
          value: "УЗД периферичних нервів (нижніх кінцівок)",
        },
      ],
    },
  },
  {
    id: "cc318cbd-5023-4717-8370-c99e7165a02a",
    createdAt: "2025-02-20T19:04:10.495Z",
    slug: "uzd-plevralnykh-porozhnyn",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 790,
    onlinePrice: null,
    foreignId: 6284,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД плевральних порожнин",
        },
        {
          lang: "en",
          value: "Ultrasound of the pleural cavities",
        },
      ],
    },
  },
  {
    id: "2b6d9485-1e3a-49ea-9dcf-5cf035df5cea",
    createdAt: "2025-03-17T15:06:31.200Z",
    slug: "uzd-plevralnykh-porozhnyn-1",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 870,
    onlinePrice: null,
    foreignId: 2554,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the pleural cavities",
        },
        {
          lang: "uk",
          value: "УЗД плевральних порожнин",
        },
      ],
    },
  },
  {
    id: "e9deab6c-8631-4847-9f6b-cf4c93bb578f",
    createdAt: "2025-02-20T19:04:10.131Z",
    slug: "uzd-plodu-z-doplerometriieiu-bahatoplidna-vahitnist",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 2330,
    onlinePrice: null,
    foreignId: 2585,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the fetus with Doppler (multiple pregnancy)",
        },
        {
          lang: "uk",
          value: "УЗД плоду з доплерометрією (багатоплідна вагітність)",
        },
      ],
    },
  },
  {
    id: "2cf5a903-8919-4d91-941d-406b4c0e961c",
    createdAt: "2025-02-20T19:04:10.031Z",
    slug: "uzd-plodu-z-doplerometriieiu-odyn-plid",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1780,
    onlinePrice: null,
    foreignId: 2584,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД плоду з доплерометрією (один плід)",
        },
        {
          lang: "en",
          value: "Ultrasound of the fetus with Doppler (single fetus)",
        },
      ],
    },
  },
  {
    id: "ab6c044a-805e-4901-9547-9292db4edfe0",
    createdAt: "2025-02-20T19:04:13.545Z",
    slug: "uzd-plodu-z-doplerometriieiu-odyn-plidprovidnyi-spetsialist",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 2330,
    onlinePrice: null,
    foreignId: 2586,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Ultrasound of the fetus with Doppler (single fetus) (leading specialist)",
        },
        {
          lang: "uk",
          value: "УЗД плоду з доплерометрією (один плід)(провідний спеціаліст)",
        },
      ],
    },
  },
  {
    id: "a6a1c8fd-7916-4b30-b833-048b2ef9c043",
    createdAt: "2025-02-20T19:04:14.773Z",
    slug: "uzd-plodu-z-doplerometriieiu-pry-bahatoplidnii-vahitnosti-providnyi-spetsialist",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 2530,
    onlinePrice: null,
    foreignId: 2587,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Ultrasound of the fetus with Doppler in multiple pregnancy (leading specialist)",
        },
        {
          lang: "uk",
          value:
            "УЗД плоду з доплерометрією при багатоплідній вагітності (провідний спеціаліст)",
        },
      ],
    },
  },
  {
    id: "42339ef5-d0ee-4cad-810c-5be9a6537c51",
    createdAt: "2025-02-06T13:42:48.324Z",
    slug: "uzd-prostaty-transrektalne",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 250,
    onlinePrice: 0,
    foreignId: 27,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Transrectal ultrasound of the prostate",
        },
        {
          lang: "uk",
          value: "УЗД простати трансректальне",
        },
      ],
    },
  },
  {
    id: "2fa8ba5d-f647-4583-b7ac-505aa70b02de",
    createdAt: "2025-02-20T19:04:14.781Z",
    slug: "uzd-sechovoho-mikhura-z-vyznachenniam-obiemu-zalyshkovoyi-sechi",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 870,
    onlinePrice: null,
    foreignId: 2550,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Ultrasound of the bladder with residual urine volume measurement",
        },
        {
          lang: "uk",
          value: "УЗД сечового міхура з визначенням обєму залишкової сечі",
        },
      ],
    },
  },
  {
    id: "a8cb1754-ffff-4c00-b56a-e53ec29b4618",
    createdAt: "2025-02-20T19:04:14.855Z",
    slug: "uzd-slynnykh-zaloz",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 870,
    onlinePrice: null,
    foreignId: 4324,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД слинних залоз",
        },
        {
          lang: "en",
          value: "Ultrasound of the salivary glands",
        },
      ],
    },
  },
  {
    id: "125a7e11-fcf4-48c4-974d-0ecc6ac35c5e",
    createdAt: "2025-02-20T19:04:12.257Z",
    slug: "uzd-suhlobiv-odna-antomichna-dilianka",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1050,
    onlinePrice: null,
    foreignId: 2568,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of joints (one anatomical region)",
        },
        {
          lang: "uk",
          value: "УЗД суглобів (одна антомічна ділянка)",
        },
      ],
    },
  },
  {
    id: "39e60c72-9abd-4ece-911e-9aaf0e1c073b",
    createdAt: "2025-02-06T13:42:48.342Z",
    slug: "uzd-sudyn-nyzhnikh-kintsivok",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 400,
    onlinePrice: 0,
    foreignId: 29,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the lower extremity vessels",
        },
        {
          lang: "uk",
          value: "УЗД судин нижніх кінцівок",
        },
      ],
    },
  },
  {
    id: "928b0afe-cff9-40bc-a5cb-9cc152d8e187",
    createdAt: "2025-02-20T19:04:10.290Z",
    slug: "uzd-follikulometriia",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 690,
    onlinePrice: null,
    foreignId: 2553,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД фоллікулометрія",
        },
        {
          lang: "en",
          value: "Ultrasound folliculometry",
        },
      ],
    },
  },
  {
    id: "cc8a2f4c-dbb3-48b3-98d5-3e43591dfb49",
    createdAt: "2025-02-20T19:04:13.536Z",
    slug: "uzd-funktsiyi-zhovchnoho-mikhura-z-zhovchohinnym-snidankom",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 1300,
    onlinePrice: null,
    foreignId: 2569,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД функції жовчного міхура з жовчогінним сніданком",
        },
        {
          lang: "en",
          value:
            "Ultrasound of gallbladder function with a choleretic breakfast",
        },
      ],
    },
  },
  {
    id: "5dee76ff-22e5-45de-93a7-35fdfd8fde50",
    createdAt: "2025-03-27T11:03:26.857Z",
    slug: "uzd-chotyryholovoho-miaza-stehna",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 990,
    onlinePrice: null,
    foreignId: 6712,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД чотириголового м'яза стегна",
        },
      ],
    },
  },
  {
    id: "4d75dead-1dbe-4f1d-850d-9e2b6ffddfc7",
    createdAt: "2025-02-20T19:04:10.049Z",
    slug: "uzd-shchytopodibnoyi-zalozy-1",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 990,
    onlinePrice: null,
    foreignId: 2546,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД щитоподібної залози",
        },
        {
          lang: "en",
          value: "Ultrasound of the thyroid gland",
        },
      ],
    },
  },
  {
    id: "b9acdc77-8bfe-4a77-917d-6c386ebcacd1",
    createdAt: "2025-02-06T13:42:48.367Z",
    slug: "uzd-shchytopodibnoyi-zalozy",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 200,
    onlinePrice: 0,
    foreignId: 32,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound of the thyroid gland",
        },
        {
          lang: "uk",
          value: "УЗД щитоподібної залози",
        },
      ],
    },
  },
  {
    id: "f41e1ee8-5138-4489-bb83-823d5374d82a",
    createdAt: "2025-02-20T19:04:11.046Z",
    slug: "uzdtservikometriia-pry-vahitnosti",
    sectionId: "0219e4b1-4efa-49d8-8596-583f901b07f0",
    price: 720,
    onlinePrice: null,
    foreignId: 2588,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "УЗД-Цервікометрія при вагітності",
        },
        {
          lang: "en",
          value: "Ultrasound cervicometry during pregnancy",
        },
      ],
    },
  },
  {
    id: "d027d0f5-345a-4fa2-9d33-462a07dc309e",
    createdAt: "2025-02-20T19:04:13.294Z",
    slug: "ultrazvukova-terapiia-fonoforez-1-zona15-khv",
    sectionId: "5c32c70d-fc93-4cf3-9079-712126e78d4a",
    price: 550,
    onlinePrice: null,
    foreignId: 6391,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ultrasound therapy (phonophoresis) (1 area, 15 min.)",
        },
        {
          lang: "uk",
          value: "Ультразвукова терапія (Фонофорез) (1 зона,15 хв.)",
        },
      ],
    },
  },
  {
    id: "3dd23178-6051-4c57-ba74-23de22b76fd9",
    createdAt: "2025-02-06T13:42:49.271Z",
    slug: "faktor-nekrozu-pukhlyny-tumornekrotychnyi-faktor-fnp-tnf-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 253,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Фактор некрозу пухлини (α-тумор-некротичний фактор, ФНП, α-ТNF) / N **",
        },
        {
          lang: "en",
          value:
            "Tumor necrosis factor (α-tumor necrosis factor, TNF, α-TNF) / N **",
        },
      ],
    },
  },
  {
    id: "d2c29313-8036-4a17-896a-94b9908ce50c",
    createdAt: "2025-02-06T13:42:52.530Z",
    slug: "faktor-fon-villebranda-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 668,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Von Willebrand factor / N",
        },
        {
          lang: "uk",
          value: "Фактор фон Віллебранда \\ N",
        },
      ],
    },
  },
  {
    id: "bf29e15d-b897-4129-9eaf-3a09f58efab8",
    createdAt: "2025-02-06T13:42:52.048Z",
    slug: "ferytyn",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 602,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Ferritin",
        },
        {
          lang: "uk",
          value: "Феритин",
        },
      ],
    },
  },
  {
    id: "d3e3e695-c3f3-4370-aa81-0312cb5689bf",
    createdAt: "2025-02-06T13:42:52.552Z",
    slug: "fibrynohen",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 671,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Fibrinogen",
        },
        {
          lang: "uk",
          value: "Фібриноген",
        },
      ],
    },
  },
  {
    id: "1286b5b6-858f-4896-9a33-300e1eab1b5b",
    createdAt: "2025-02-06T13:42:53.627Z",
    slug: "fibromaks",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 851,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Фібромакс",
        },
        {
          lang: "en",
          value: "FibroMax",
        },
      ],
    },
  },
  {
    id: "cd1c3002-ecb1-477e-ad4d-512bd865086a",
    createdAt: "2025-02-06T13:42:52.070Z",
    slug: "foliieva-kyslota-vitamin-b9",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 605,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Фолієва кислота (вітамін B9)",
        },
        {
          lang: "en",
          value: "Folic acid (vitamin B9)",
        },
      ],
    },
  },
  {
    id: "d5da6b3d-0180-4b8c-a399-6084b9e143ae",
    createdAt: "2025-02-06T13:42:50.094Z",
    slug: "folikulostymuliuiuchyi-hormon-fsh",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 358,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Follicle-stimulating hormone (FSH)",
        },
        {
          lang: "uk",
          value: "Фолікулостимулюючий гормон (ФСГ)",
        },
      ],
    },
  },
  {
    id: "544e4cec-8f01-40b0-8398-f3c721a623e5",
    createdAt: "2025-02-06T13:42:52.978Z",
    slug: "fosfolipidy-antytila-igg-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 718,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Phospholipids, IgG antibodies / N",
        },
        {
          lang: "uk",
          value: "Фосфоліпіди, антитіла IgG N",
        },
      ],
    },
  },
  {
    id: "f0a59959-a725-4f41-b188-2b076159ea23",
    createdAt: "2025-02-06T13:42:51.221Z",
    slug: "fruktozamin-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 496,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Fructosamine / N",
        },
        {
          lang: "uk",
          value: "Фруктозамін \\ N",
        },
      ],
    },
  },
  {
    id: "96999c20-2c10-4c82-9445-99bb1b1a4ac3",
    createdAt: "2025-02-20T19:04:12.878Z",
    slug: "khirurhichna-korektsiia-vuzdechky-iazyka-frenulotomiia-u-ditei",
    sectionId: "2ec4193c-c08d-4f76-bd7a-4c089980b042",
    price: 1800,
    onlinePrice: null,
    foreignId: 6300,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Surgical correction of the lingual frenulum (frenulotomy) in children",
        },
        {
          lang: "uk",
          value: "Хірургічна корекція вуздечки язика (френулотомія) у дітей",
        },
      ],
    },
  },
  {
    id: "b50174f0-8d30-4d20-bb9f-90771502c101",
    createdAt: "2025-02-20T19:04:14.474Z",
    slug: "khirurhichne-vydalennia-ksantelazmy-1ho-stupeniu-skladnosti",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 1000,
    onlinePrice: null,
    foreignId: 4075,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Surgical removal of xanthelasma (1st degree of complexity)",
        },
        {
          lang: "uk",
          value: "Хірургічне видалення ксантелазми (1-го ступеню складності)",
        },
      ],
    },
  },
  {
    id: "e6bebbac-b17e-4467-8ded-f809d649f57d",
    createdAt: "2025-02-20T19:04:15.399Z",
    slug: "khirurhichne-vydalennia-ksantelazmy-2ho-stupeniu-skladnosti",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 1500,
    onlinePrice: null,
    foreignId: 4076,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хірургічне видалення ксантелазми (2-го ступеню складності)",
        },
        {
          lang: "en",
          value: "Surgical removal of xanthelasma (2nd degree of complexity)",
        },
      ],
    },
  },
  {
    id: "7acbdf9f-7059-4e65-b66f-7583ef395560",
    createdAt: "2025-02-20T19:04:15.508Z",
    slug: "khirurhichne-vydalennia-ksantelazmy-3ho-stupeniu-skladnosti",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 2300,
    onlinePrice: null,
    foreignId: 4077,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Surgical removal of xanthelasma (3rd degree of complexity)",
        },
        {
          lang: "uk",
          value: "Хірургічне видалення ксантелазми (3-го ступеню складності)",
        },
      ],
    },
  },
  {
    id: "b3c5d717-6980-469e-84e9-beba90567780",
    createdAt: "2025-02-20T19:04:09.968Z",
    slug: "khirurhichne-vydalennia-melanomotsytarnykh-nevusiv-tulub-kintsivky",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 3900,
    onlinePrice: null,
    foreignId: 6499,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Хірургічне видалення меланомоцитарних невусів (тулуб, кінцівки)",
        },
        {
          lang: "en",
          value: "Surgical removal of melanocytic nevi (trunk, limbs)",
        },
      ],
    },
  },
  {
    id: "6303db13-b9f3-4e96-8ca8-9ca8c9886817",
    createdAt: "2025-02-20T19:04:15.250Z",
    slug: "khirurhichne-vydalennia-novoutvoren-papiloma-hemanhioma-ateroma-1-novoutvorennia",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 2050,
    onlinePrice: null,
    foreignId: 4072,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Surgical removal of neoplasms (papilloma, hemangioma, atheroma) (1 neoplasm)",
        },
        {
          lang: "uk",
          value:
            "Хірургічне видалення новоутворень (папілома, гемангіома, атерома) (1 новоутворення)",
        },
      ],
    },
  },
  {
    id: "9f33e760-5cd0-4a39-b06a-e026dee5ef62",
    createdAt: "2025-02-20T19:04:11.313Z",
    slug: "khirurhichne-vydalennia-khaliaziona",
    sectionId: "beefd3ab-941a-46b5-8b3e-66a90b0e21a5",
    price: 5200,
    onlinePrice: null,
    foreignId: 4074,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хірургічне видалення халязіона",
        },
        {
          lang: "en",
          value: "Surgical removal of chalazion",
        },
      ],
    },
  },
  {
    id: "bbf505c1-fae3-43e6-b8be-2da21e9bffb2",
    createdAt: "2025-02-06T13:42:48.546Z",
    slug: "khirurhichne-vtruchannia-1-katehoriyi-skladnosti",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 800,
    onlinePrice: 0,
    foreignId: 51,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хірургічне втручання 1 категорії складності",
        },
        {
          lang: "en",
          value: "Surgical intervention, Category 1 complexity",
        },
      ],
    },
  },
  {
    id: "a3ecc5e3-3810-4861-9441-7320af560615",
    createdAt: "2025-02-06T13:42:48.553Z",
    slug: "khirurhichne-vtruchannia-2-katehoriyi-skladnosti",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 2500,
    onlinePrice: 0,
    foreignId: 52,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хірургічне втручання 2 категорії складності",
        },
        {
          lang: "en",
          value: "Surgical intervention, Category 2 complexity",
        },
      ],
    },
  },
  {
    id: "21460204-a048-4e9e-a381-fbb87a7dbee5",
    createdAt: "2025-02-06T13:42:48.560Z",
    slug: "khirurhichne-vtruchannia-3-katehoriyi-skladnosti",
    sectionId: "96fda263-eb61-4615-a852-729a933a088a",
    price: 5000,
    onlinePrice: 0,
    foreignId: 53,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Surgical intervention, Category 3 complexity",
        },
        {
          lang: "uk",
          value: "Хірургічне втручання 3 категорії складності",
        },
      ],
    },
  },
  {
    id: "2b2ba3d4-add0-486b-b450-c65cdbcbc1a4",
    createdAt: "2025-02-20T19:04:12.886Z",
    slug: "khirurhichne-likuvannia-vrosloho-nihtia-i-katehoriia-skladnosti",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1100,
    onlinePrice: null,
    foreignId: 4247,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хірургічне лікування врослого нігтя (І категорія складності)",
        },
        {
          lang: "en",
          value:
            "Surgical treatment of ingrown toenail (Category 1 complexity)",
        },
      ],
    },
  },
  {
    id: "0c0c2bf8-fc2e-4773-a72f-82d51524940d",
    createdAt: "2025-02-20T19:04:09.996Z",
    slug: "khirurhichne-likuvannia-vrosloho-nihtia-ii-katehoriia-skladnosti",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 1500,
    onlinePrice: null,
    foreignId: 4248,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Хірургічне лікування врослого нігтя (ІІ категорія складності)",
        },
        {
          lang: "en",
          value:
            "Surgical treatment of ingrown toenail (Category 2 complexity)",
        },
      ],
    },
  },
  {
    id: "84ef5829-bbcc-4458-ab66-fa51325176fd",
    createdAt: "2025-02-20T19:04:10.023Z",
    slug: "khirurhichne-likuvannia-vrosloho-nihtia-iii-katehoriia-skladnosti",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 2100,
    onlinePrice: null,
    foreignId: 4249,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Surgical treatment of ingrown toenail (Category 3 complexity)",
        },
        {
          lang: "uk",
          value:
            "Хірургічне лікування врослого нігтя (ІІІ категорія складності)",
        },
      ],
    },
  },
  {
    id: "4a18195d-a0fc-49af-9bac-e0194792784e",
    createdAt: "2025-02-06T13:42:50.932Z",
    slug: "khlamidioz-chlamydia-pneumoniae-iga",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 456,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хламідіоз (Chlamydia pneumoniae), IgA",
        },
        {
          lang: "en",
          value: "Chlamydia (Chlamydia pneumoniae), IgA",
        },
      ],
    },
  },
  {
    id: "aa857ee2-8634-4b76-972b-4866ac275e78",
    createdAt: "2025-02-06T13:42:50.960Z",
    slug: "khlamidioz-chlamydia-pneumoniae-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 460,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Chlamydia (Chlamydia pneumoniae), IgG",
        },
        {
          lang: "uk",
          value: "Хламідіоз (Chlamydia pneumoniae), IgG",
        },
      ],
    },
  },
  {
    id: "a2f7bae4-5493-4176-9e93-bf4829be2fe0",
    createdAt: "2025-02-06T13:42:50.987Z",
    slug: "khlamidioz-chlamydia-pneumoniae-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 464,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Chlamydia (Chlamydia pneumoniae), IgM",
        },
        {
          lang: "uk",
          value: "Хламідіоз (Chlamydia pneumoniae), IgM",
        },
      ],
    },
  },
  {
    id: "d8f76254-98f8-44ff-b151-55b831f6ea0e",
    createdAt: "2025-02-06T13:42:52.905Z",
    slug: "khlor-dobova-secha-cl-m-kyyiv-mlviv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 708,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Chloride (24-hour urine) / Cl, Kyiv, Lviv **",
        },
        {
          lang: "uk",
          value: "Хлор (добова сеча) / Cl, м. Київ, м. Львів **",
        },
      ],
    },
  },
  {
    id: "d5d7f1ed-0947-44e6-ae70-f72d102ff1bf",
    createdAt: "2025-02-06T13:42:51.814Z",
    slug: "kholesteryn",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 570,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cholesterol",
        },
        {
          lang: "uk",
          value: "Холестерин",
        },
      ],
    },
  },
  {
    id: "b238966b-1efb-4dbe-b2a9-949f1ac4bc48",
    createdAt: "2025-02-06T13:42:49.020Z",
    slug: "kholterivskyi-monitorynh-ekh-1-doba",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 3000,
    onlinePrice: 0,
    foreignId: 133,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Холтерівський моніторинг ЕКГ (1 доба)",
        },
        {
          lang: "en",
          value: "Holter ECG monitoring (1 day)",
        },
      ],
    },
  },
  {
    id: "cac908b6-eba2-4c54-a2bb-cc25734646e8",
    createdAt: "2025-02-06T13:42:53.330Z",
    slug: "kholterivskyi-monitorynh-ekh-2-doby",
    sectionId: "50f854e8-20b7-45d7-9e72-5b730b966840",
    price: 5000,
    onlinePrice: 0,
    foreignId: 792,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Холтерівський моніторинг ЕКГ (2 доби)",
        },
        {
          lang: "en",
          value: "Holter ECG monitoring (2 days)",
        },
      ],
    },
  },
  {
    id: "e41e2f59-42a1-44a6-bb7e-84240063dc29",
    createdAt: "2025-02-06T13:42:48.802Z",
    slug: "khoryonychnyi-honadotropin-khhch",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 81,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Human chorionic gonadotropin (hCG)",
        },
        {
          lang: "uk",
          value: "Хорионичний гонадотропін (ХГЧ)",
        },
      ],
    },
  },
  {
    id: "ba872d26-f076-4672-ad39-3fd762f22134",
    createdAt: "2025-02-06T13:42:49.286Z",
    slug: "khromohranin-a-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 255,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Хромогранін А \\ N",
        },
        {
          lang: "en",
          value: "Chromogranin A / N",
        },
      ],
    },
  },
  {
    id: "a14ceeff-619d-48ac-8feb-c4eed0af25ec",
    createdAt: "2025-02-06T13:42:52.415Z",
    slug: "tsyklichnyi-tsytrulinovyi-peptyd-accp-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 652,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cyclic citrullinated peptide (anti-CCP), IgG antibodies",
        },
        {
          lang: "uk",
          value: "Циклічний цитруліновий пептид (A-CCP), антитіла IgG",
        },
      ],
    },
  },
  {
    id: "95b285b3-b6b2-4510-a61b-004994827bb5",
    createdAt: "2025-02-06T13:42:50.642Z",
    slug: "tsyrkumtsyzio-vydalennia-krainoyi-ploti",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 422,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Циркумцизіо (видалення крайньої плоті)",
        },
        {
          lang: "en",
          value: "Circumcision (removal of the foreskin)",
        },
      ],
    },
  },
  {
    id: "e9ad510e-7ef1-4606-af97-2f0815567536",
    createdAt: "2025-02-06T13:42:52.224Z",
    slug: "tsystatin-s-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 625,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cystatin C / N",
        },
        {
          lang: "uk",
          value: "Цистатін С / N",
        },
      ],
    },
  },
  {
    id: "3dc1a8b5-da86-4ea7-9609-de87cb7216f1",
    createdAt: "2025-02-06T13:42:52.374Z",
    slug: "tsystektomiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 646,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Цистектомія",
        },
        {
          lang: "en",
          value: "Cystectomy",
        },
      ],
    },
  },
  {
    id: "1ba69075-b3d3-4860-af96-e2c293a648b0",
    createdAt: "2025-02-06T13:42:50.795Z",
    slug: "tsytolohichne-doslidzhennia-aspiratu-iz-porozhnyny-matky",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 439,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cytological examination of aspirate from the uterine cavity",
        },
        {
          lang: "uk",
          value: "Цитологічне дослідження аспірату із порожнини матки",
        },
      ],
    },
  },
  {
    id: "b12a0da6-475b-4449-ab37-d6da6234383f",
    createdAt: "2025-02-06T13:42:50.538Z",
    slug: "tsytolohichne-doslidzhennia-bronkhoalveoliarnoho-lavazhu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 409,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cytological examination of bronchoalveolar lavage",
        },
        {
          lang: "uk",
          value: "Цитологічне дослідження бронхоальвеолярного лаважу",
        },
      ],
    },
  },
  {
    id: "96d677db-77e5-48f0-baa1-7a03cf9c4943",
    createdAt: "2025-02-06T13:42:50.613Z",
    slug: "tsytolohichne-doslidzhennia-vydilen-iz-soska-hrudnykh-zaloz-1-lokalizatsiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 419,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Цитологічне дослідження виділень із соска грудних залоз (1 локалізація)",
        },
        {
          lang: "en",
          value:
            "Cytological examination of nipple discharge from the breast (1 site)",
        },
      ],
    },
  },
  {
    id: "83e6898c-39c9-4123-bf8b-1007a5713a5e",
    createdAt: "2025-02-06T13:42:50.702Z",
    slug: "tsytolohichne-doslidzhennia-vypitnykh-ridyn-z-vyhotovlenniam-tsytoblokiv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 427,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Цитологічне дослідження випітних рідин з виготовленням цитоблоків",
        },
        {
          lang: "en",
          value:
            "Cytological examination of effusion fluids with cyt-block preparation",
        },
      ],
    },
  },
  {
    id: "bf201943-fcfd-4f78-bb7e-c3035ae6e6a5",
    createdAt: "2025-02-06T13:42:50.207Z",
    slug: "tsytolohichne-doslidzhennia-vidbytkiv-ta-punktativ-kistkovoho-mozku-1-lokalizatsiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 373,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Cytological examination of imprints and bone marrow aspirates (1 site)",
        },
        {
          lang: "uk",
          value:
            "Цитологічне дослідження відбитків та пунктатів кісткового мозку (1 локалізація)",
        },
      ],
    },
  },
  {
    id: "903c4166-fda0-427b-b072-b75dc24d4014",
    createdAt: "2025-02-06T13:42:50.289Z",
    slug: "tsytolohichne-doslidzhennia-vidbytkiv-ta-punktativ-limfovuzliv-1-lokalizatsiiahrupa",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 384,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Цитологічне дослідження відбитків та пунктатів лімфовузлів (1 локалізація/група)",
        },
        {
          lang: "en",
          value:
            "Cytological examination of imprints and lymph node aspirates (1 site/group)",
        },
      ],
    },
  },
  {
    id: "336575c0-ad62-453e-a0dc-8a71bbbd55ab",
    createdAt: "2025-02-06T13:42:50.101Z",
    slug: "tsytolohichne-doslidzhennia-mazka-krovi",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 359,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Цитологічне дослідження мазка крові",
        },
        {
          lang: "en",
          value: "Cytological examination of a blood smear",
        },
      ],
    },
  },
  {
    id: "5c8db6f9-4b3a-464a-af10-1a028397830a",
    createdAt: "2025-02-06T13:42:50.257Z",
    slug: "tsytolohichne-doslidzhennia-materialu-zi-shlunkovokyshkovoho-traktu",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 380,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Цитологічне дослідження матеріалу зі шлунково-кишкового тракту",
        },
        {
          lang: "en",
          value:
            "Cytological examination of material from the gastrointestinal tract",
        },
      ],
    },
  },
  {
    id: "c4a5d154-277c-425d-b691-3282984782d7",
    createdAt: "2025-02-06T13:42:50.228Z",
    slug: "tsytolohichne-doslidzhennia-materialu-zishkribu-zi-shkiry-slyzovykh-obolonok",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 376,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Цитологічне дослідження матеріалу зішкрібу зі шкіри, слизових оболонок",
        },
        {
          lang: "en",
          value:
            "Cytological examination of material from skin or mucosal scrapings",
        },
      ],
    },
  },
  {
    id: "521dc2ef-f796-402e-8126-267c3f1c64dd",
    createdAt: "2025-02-06T13:42:50.567Z",
    slug: "tsytolohichne-doslidzhennia-pry-provedenni-brashbiopsiyi-bronkhiv-do-6-skelets",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 413,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Цитологічне дослідження при проведенні браш-біопсії бронхів (до 6 скелець)",
        },
        {
          lang: "en",
          value:
            "Cytological examination during bronchial brush biopsy (up to 6 slides)",
        },
      ],
    },
  },
  {
    id: "06c2d8ee-e7c5-405b-8221-d4a6b957427c",
    createdAt: "2025-02-06T13:42:49.921Z",
    slug: "tsytolohichne-doslidzhennia-punktativ-kistoznykh-utvoren-1-lokalizatsiia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 335,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Цитологічне дослідження пунктатів кістозних утворень (1 локалізація)",
        },
        {
          lang: "en",
          value: "Cytological examination of cystic lesion aspirates (1 site)",
        },
      ],
    },
  },
  {
    id: "29b352cd-1df8-4c3c-b568-322776c7e2e8",
    createdAt: "2025-02-06T13:42:50.443Z",
    slug: "tsytolohichne-doslidzhennia-tonkoholkovykh-punktsiinykh-biopsii-shchytopodibnoyi-zalozy-do-8-skelets",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 398,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Цитологічне дослідження тонкоголкових пункційних біопсій щитоподібної залози (до 8 скелець)",
        },
        {
          lang: "en",
          value:
            "Cytological examination of fine-needle aspiration biopsies of the thyroid gland (up to 8 slides)",
        },
      ],
    },
  },
  {
    id: "67543348-a379-43fc-af19-9e95ac32a474",
    createdAt: "2025-02-06T13:42:52.453Z",
    slug: "tsytomehalovirus-cmv-avidnist-igg-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 657,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Цитомегаловірус (CMV), авідність IgG / N",
        },
        {
          lang: "en",
          value: "Cytomegalovirus (CMV), IgG avidity / N",
        },
      ],
    },
  },
  {
    id: "56dc87e6-25c3-43a9-bf58-bb54f94c4927",
    createdAt: "2025-02-06T13:42:52.545Z",
    slug: "tsytomehalovirus-cmv-igm",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 670,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Цитомегаловірус (CMV), IgМ",
        },
        {
          lang: "en",
          value: "Cytomegalovirus (CMV), IgM",
        },
      ],
    },
  },
  {
    id: "12e892c0-ae0a-4329-942f-bc0bf6482878",
    createdAt: "2025-02-06T13:42:52.502Z",
    slug: "tsytomehalovirus-cmv-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 664,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cytomegalovirus (CMV), IgG",
        },
        {
          lang: "uk",
          value: "Цитомегаловірус (CMV), IgG",
        },
      ],
    },
  },
  {
    id: "2049ac99-95a1-4766-ac7e-d4fd6d6a6308",
    createdAt: "2025-02-06T13:42:48.877Z",
    slug: "tsytomehalovirus-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 91,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cytomegalovirus, IgG antibodies",
        },
        {
          lang: "uk",
          value: "Цитомегаловірус, антитіла IgG",
        },
      ],
    },
  },
  {
    id: "4708dfe3-64a0-46d1-98ca-1f9ad268be53",
    createdAt: "2025-02-06T13:42:52.460Z",
    slug: "tsytrulovanyi-vimentyn-mcv-antytila-igg-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 658,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Citrullinated vimentin (MCV), IgG antibodies / N",
        },
        {
          lang: "uk",
          value: "Цитрульований віментин (MCV), антитіла IgG / N",
        },
      ],
    },
  },
  {
    id: "ba87b91c-53c5-4f50-b3ae-f6182456018a",
    createdAt: "2025-02-06T13:42:52.084Z",
    slug: "tsianokobalamin-vitamin-b12",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 607,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Cyanocobalamin (vitamin B12)",
        },
        {
          lang: "uk",
          value: "Ціанокобаламін (вітамін B12)",
        },
      ],
    },
  },
  {
    id: "c7d4192e-ea9b-4eb4-86db-cfd4cafbde4b",
    createdAt: "2025-02-06T13:42:48.652Z",
    slug: "shvydkist-osidannia-erytrotsytiv",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 50,
    onlinePrice: 0,
    foreignId: 63,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Швидкість осідання еритроцитів",
        },
        {
          lang: "en",
          value: "Erythrocyte sedimentation rate",
        },
      ],
    },
  },
  {
    id: "49cbc88b-f131-4e3b-aec1-665e7ca18fb3",
    createdAt: "2025-02-20T19:04:10.985Z",
    slug: "shkola-batkivstva-1-zaniattia",
    sectionId: "974a0f21-3e06-4d79-a29b-6de5af68b4af",
    price: 1000,
    onlinePrice: null,
    foreignId: 6297,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Школа батьківства (1 заняття)",
        },
        {
          lang: "en",
          value: "Parenting school (1 session)",
        },
      ],
    },
  },
  {
    id: "5a3264a8-5a7e-4fe4-8542-8e8144fb078e",
    createdAt: "2025-02-20T19:04:11.069Z",
    slug: "shkola-batkivstva-prohrama-iz-3kh-zaniat",
    sectionId: "974a0f21-3e06-4d79-a29b-6de5af68b4af",
    price: 2400,
    onlinePrice: null,
    foreignId: 6298,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Parenting school (program of 3 sessions)",
        },
        {
          lang: "uk",
          value: "Школа батьківства (програма із 3-х занять)",
        },
      ],
    },
  },
  {
    id: "d3af05fa-2ff1-4428-b39e-34dbfbc4403b",
    createdAt: "2025-02-06T13:42:53.149Z",
    slug: "shcheplennia-vaktsynoiu-bustryks-polio",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 1500,
    onlinePrice: 0,
    foreignId: 755,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Boostrix Polio"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Бустрикс Поліо"',
        },
      ],
    },
  },
  {
    id: "d6065517-082b-4efa-9c7c-ba22a45b7be8",
    createdAt: "2025-02-06T13:42:53.157Z",
    slug: "shcheplennia-vaktsynoiu-bustryks",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 1300,
    onlinePrice: 0,
    foreignId: 756,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Бустрикс"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Boostrix"',
        },
      ],
    },
  },
  {
    id: "85c96508-0107-4aba-ab09-4687465018d5",
    createdAt: "2025-02-06T13:42:53.126Z",
    slug: "shcheplennia-vaktsynoiu-vaksyhryp",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 800,
    onlinePrice: 0,
    foreignId: 752,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Ваксигрип"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Vaxigrip"',
        },
      ],
    },
  },
  {
    id: "40b04382-e694-47c2-9859-a166fd5f9519",
    createdAt: "2025-02-06T13:42:53.101Z",
    slug: "shcheplennia-vaktsynoiu-varilryks",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2000,
    onlinePrice: 0,
    foreignId: 749,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Varilrix"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Варілрикс"',
        },
      ],
    },
  },
  {
    id: "608f02f5-10f6-4f28-9f78-17dd6527184a",
    createdAt: "2025-02-06T13:42:53.115Z",
    slug: "shcheplennia-vaktsynoiu-hardasyl",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 6000,
    onlinePrice: 0,
    foreignId: 751,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Гардасил"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Gardasil"',
        },
      ],
    },
  },
  {
    id: "84d34a38-fb6f-47ee-b338-ce2a35d60772",
    createdAt: "2025-02-06T13:42:53.163Z",
    slug: "shcheplennia-vaktsynoiu-heksaksym",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2300,
    onlinePrice: 0,
    foreignId: 757,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Hexaxim"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Гексаксим"',
        },
      ],
    },
  },
  {
    id: "d78d957d-4d09-4471-b8d0-404031d91c0d",
    createdAt: "2025-02-06T13:42:53.051Z",
    slug: "shcheplennia-vaktsynoiu-endzheryksb",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 3000,
    onlinePrice: 0,
    foreignId: 742,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Енджерикс-B"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Engerix-B"',
        },
      ],
    },
  },
  {
    id: "2e0b9d6d-f9b2-4b4b-b041-99bd1ab9f7e1",
    createdAt: "2025-02-06T13:42:53.045Z",
    slug: "shcheplennia-vaktsynoiu-euvaks-b",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2500,
    onlinePrice: 0,
    foreignId: 741,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Еувакс B"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Euvax B"',
        },
      ],
    },
  },
  {
    id: "564296f9-ee1f-4c12-b41e-9bd35045f9b8",
    createdAt: "2025-02-06T13:42:53.018Z",
    slug: "shcheplennia-vaktsynoiu-imovaks-polio",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2500,
    onlinePrice: 0,
    foreignId: 737,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Imovax Polio"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Імовакс поліо"',
        },
      ],
    },
  },
  {
    id: "5b1b1296-6562-4f1f-86b6-8c72ee0dc1a0",
    createdAt: "2025-02-06T13:42:53.198Z",
    slug: "shcheplennia-vaktsynoiu-infanriks-heksa",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2500,
    onlinePrice: 0,
    foreignId: 762,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Інфанрікс Гекса"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Infanrix Hexa"',
        },
      ],
    },
  },
  {
    id: "88d01b30-180f-4689-8587-9a2ea01995f9",
    createdAt: "2025-02-06T13:42:53.177Z",
    slug: "shcheplennia-vaktsynoiu-infanriks-ipv-khib",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2500,
    onlinePrice: 0,
    foreignId: 759,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Infanrix IPV Hib"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Інфанрікс Іпв Хіб"',
        },
      ],
    },
  },
  {
    id: "4aa5452f-2d7f-4a02-95bb-f62c709ffcdf",
    createdAt: "2025-02-06T13:42:53.170Z",
    slug: "shcheplennia-vaktsynoiu-infanriks-ipv",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2000,
    onlinePrice: 0,
    foreignId: 758,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Інфанрікс Іпв"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Infanrix IPV"',
        },
      ],
    },
  },
  {
    id: "d8bf69de-7cb0-44df-b087-dd78172869ab",
    createdAt: "2025-02-06T13:42:53.135Z",
    slug: "shcheplennia-vaktsynoiu-influvak",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 800,
    onlinePrice: 0,
    foreignId: 753,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Influvac"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Інфлувак"',
        },
      ],
    },
  },
  {
    id: "2600977e-d379-47a6-b2dc-ddfcd452e770",
    createdAt: "2025-02-06T13:42:53.031Z",
    slug: "shcheplennia-vaktsynoiu-mmrvakspro",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 3500,
    onlinePrice: 0,
    foreignId: 739,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "М-М-Рвакспро"',
        },
        {
          lang: "en",
          value: 'Vaccination with "M-M-Rvaxpro"',
        },
      ],
    },
  },
  {
    id: "9b4a298d-a30b-43d1-afac-4fe801fe64da",
    createdAt: "2025-02-06T13:42:53.087Z",
    slug: "shcheplennia-vaktsynoiu-menaktra",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2000,
    onlinePrice: 0,
    foreignId: 747,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Менактра"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Menactra"',
        },
      ],
    },
  },
  {
    id: "e6c484c5-1753-4157-8cc4-fd918751a447",
    createdAt: "2025-02-06T13:42:53.094Z",
    slug: "shcheplennia-vaktsynoiu-nimenryks",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2500,
    onlinePrice: 0,
    foreignId: 748,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Nimenrix"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Німенрикс"',
        },
      ],
    },
  },
  {
    id: "4463016f-adda-4946-8329-c02c54f26300",
    createdAt: "2025-02-06T13:42:53.184Z",
    slug: "shcheplennia-vaktsynoiu-pentaksym",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 1800,
    onlinePrice: 0,
    foreignId: 760,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Пентаксим"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Pentaxim"',
        },
      ],
    },
  },
  {
    id: "f547e8fe-383a-4236-8d19-0dc0ec8bfa8c",
    createdAt: "2025-02-06T13:42:53.025Z",
    slug: "shcheplennia-vaktsynoiu-polio-sabin",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2000,
    onlinePrice: 0,
    foreignId: 738,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Поліо Сабін"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Polio Sabin"',
        },
      ],
    },
  },
  {
    id: "41520921-448b-4b78-9df3-b10ef1c751ae",
    createdAt: "2025-02-06T13:42:53.065Z",
    slug: "shcheplennia-vaktsynoiu-prevenar",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 3500,
    onlinePrice: 0,
    foreignId: 744,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Prevenar"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Превенар"',
        },
      ],
    },
  },
  {
    id: "8ccbffb0-ad8b-4deb-bc40-1c1b9f182cc1",
    createdAt: "2025-02-06T13:42:53.058Z",
    slug: "shcheplennia-vaktsynoiu-rotaryks",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 1500,
    onlinePrice: 0,
    foreignId: 743,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Rotarix"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Ротарикс"',
        },
      ],
    },
  },
  {
    id: "9d0a3f8e-0fff-47fa-9671-3d10409da817",
    createdAt: "2025-02-06T13:42:53.143Z",
    slug: "shcheplennia-vaktsynoiu-rotatek",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 1500,
    onlinePrice: 0,
    foreignId: 754,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Ротатек"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Rotateq"',
        },
      ],
    },
  },
  {
    id: "495d4427-204d-4c5d-b881-0f7aedb2df72",
    createdAt: "2025-02-06T13:42:53.072Z",
    slug: "shcheplennia-vaktsynoiu-synfloryks",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2000,
    onlinePrice: 0,
    foreignId: 745,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Синфлорикс"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Synflorix"',
        },
      ],
    },
  },
  {
    id: "2939eb80-538f-4172-8142-354dec42ee04",
    createdAt: "2025-02-06T13:42:53.191Z",
    slug: "shcheplennia-vaktsynoiu-tetraksym",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 1500,
    onlinePrice: 0,
    foreignId: 761,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Tetraxim"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Тетраксим"',
        },
      ],
    },
  },
  {
    id: "648b3faa-14e6-4b20-8343-eeac97aeec3e",
    createdAt: "2025-02-06T13:42:53.080Z",
    slug: "shcheplennia-vaktsynoiu-khiberyks",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 3000,
    onlinePrice: 0,
    foreignId: 746,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Щеплення вакциною "Хіберикс"',
        },
        {
          lang: "en",
          value: 'Vaccination with "Hiberix"',
        },
      ],
    },
  },
  {
    id: "071f13c2-ac25-4aab-aa74-6e6070d4bdff",
    createdAt: "2025-02-06T13:42:53.108Z",
    slug: "shcheplennia-vaktsynoiu-tservaryks",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 2500,
    onlinePrice: 0,
    foreignId: 750,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Vaccination with "Cervarix"',
        },
        {
          lang: "uk",
          value: 'Щеплення вакциною "Церварикс"',
        },
      ],
    },
  },
  {
    id: "3e0c8866-0e4d-4909-9574-3ca985e857d8",
    createdAt: "2025-02-06T13:42:53.205Z",
    slug: "shcheplennia-vaktsynoiu-adp",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 800,
    onlinePrice: 0,
    foreignId: 763,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vaccination with DTP",
        },
        {
          lang: "uk",
          value: "Щеплення вакциною АДП",
        },
      ],
    },
  },
  {
    id: "aed104a2-16a0-4b83-9df1-6934a1db85a4",
    createdAt: "2025-02-06T13:42:53.211Z",
    slug: "shcheplennia-vaktsynoiu-adpm",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 800,
    onlinePrice: 0,
    foreignId: 764,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Щеплення вакциною АДП-М",
        },
        {
          lang: "en",
          value: "Vaccination with DTaP-M",
        },
      ],
    },
  },
  {
    id: "48c62a39-d53a-446a-9358-22f1a30d58cf",
    createdAt: "2025-02-06T13:42:53.219Z",
    slug: "shcheplennia-vaktsynoiu-akdp",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 800,
    onlinePrice: 0,
    foreignId: 765,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vaccination with DTwP",
        },
        {
          lang: "uk",
          value: "Щеплення вакциною АКДП",
        },
      ],
    },
  },
  {
    id: "ae61e90d-2c11-4e09-a573-271b2a602254",
    createdAt: "2025-02-06T13:42:53.038Z",
    slug: "shcheplennia-vaktsynoiu-btszh",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 800,
    onlinePrice: 0,
    foreignId: 740,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vaccination with BCG",
        },
        {
          lang: "uk",
          value: "Щеплення вакциною БЦЖ",
        },
      ],
    },
  },
  {
    id: "73269848-c730-4993-8d0b-3da3be2ec510",
    createdAt: "2025-02-06T13:42:53.226Z",
    slug: "shcheplennia-vaktsynoiu-ipv",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 800,
    onlinePrice: 0,
    foreignId: 766,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Щеплення вакциною ІПВ",
        },
        {
          lang: "en",
          value: "Vaccination with IPV",
        },
      ],
    },
  },
  {
    id: "01eda2cb-1c5f-4475-9468-76f339af9d36",
    createdAt: "2025-02-06T13:42:53.232Z",
    slug: "shcheplennia-vaktsynoiu-kpk",
    sectionId: "9fdf7a9b-bf97-41c4-a33a-be6cbee71da3",
    price: 800,
    onlinePrice: 0,
    foreignId: 767,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Vaccination with MMR",
        },
        {
          lang: "uk",
          value: "Щеплення вакциною КПК",
        },
      ],
    },
  },
  {
    id: "d4f79638-f218-4cf2-84fe-d63bfee5dc71",
    createdAt: "2025-02-20T19:04:15.304Z",
    slug: "btorynna-khirurhichna-obrobka-rany",
    sectionId: "218a194c-b6f5-4c50-9dfa-36f426e8297b",
    price: 900,
    onlinePrice: null,
    foreignId: 2627,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Bторинна хірургічна обробка рани",
        },
        {
          lang: "en",
          value: "Secondary surgical wound treatment",
        },
      ],
    },
  },
  {
    id: "53d82ef9-71a5-405c-a039-79c6d32e5ad1",
    createdAt: "2025-02-06T13:42:51.321Z",
    slug: "bcrabl1-filadelfiiska-khromosoma-t922q341q112-fish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 509,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            'BCR-ABL1 "Philadelphia chromosome" t(9;22)(q34.1;q11.2) (FISH)',
        },
        {
          lang: "uk",
          value:
            'BCR-ABL1 "Філадельфійська хромосома" t(9;22)(q34.1;q11.2) (FISH)',
        },
      ],
    },
  },
  {
    id: "520dc6ea-0dfc-4a8b-889c-4038a30b1269",
    createdAt: "2025-02-06T13:42:52.269Z",
    slug: "creaktyvnyi-bilok-srb",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 631,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "C-реактивний білок (СРБ)",
        },
        {
          lang: "en",
          value: "C-reactive protein (CRP)",
        },
      ],
    },
  },
  {
    id: "0db57c5c-8a95-4c3f-9135-fd68fb592896",
    createdAt: "2025-02-06T13:42:52.246Z",
    slug: "creaktyvnyi-bilok-vysokochutlyvyi-srb",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 628,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "High-sensitivity C-reactive protein (hs-CRP)",
        },
        {
          lang: "uk",
          value: "C-реактивний білок високочутливий (СРБ)",
        },
      ],
    },
  },
  {
    id: "71421012-3bf3-4480-bf65-ae61f62e65b6",
    createdAt: "2025-02-20T19:04:10.510Z",
    slug: "checkup-zdorovia-zhinky",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 11240,
    onlinePrice: null,
    foreignId: 4225,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Check-up "Women\'s Health"',
        },
        {
          lang: "uk",
          value: 'Check-up "Здоров\'я жінки"',
        },
      ],
    },
  },
  {
    id: "85935c70-2bda-42d2-8456-af9332f1f59f",
    createdAt: "2025-02-20T19:04:15.755Z",
    slug: "checkup-zdorovia-zakhysnykiv-dlia-zhinok",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 11629,
    onlinePrice: null,
    foreignId: 4152,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Check-up “Здоров’я ЗАХИСНИКІВ” (для жінок)",
        },
        {
          lang: "en",
          value: 'Check-up "Defenders\' Health" (for women)',
        },
      ],
    },
  },
  {
    id: "1f0a049e-9398-41a9-8462-651de90b4135",
    createdAt: "2025-02-20T19:04:12.800Z",
    slug: "checkup-zdorovia-zakhysnykiv-dlia-cholovikiv",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 10278,
    onlinePrice: null,
    foreignId: 4151,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Check-up "Defenders\' Health" (for men)',
        },
        {
          lang: "uk",
          value: "Check-up “Здоров’я ЗАХИСНИКІВ” (для чоловіків)",
        },
      ],
    },
  },
  {
    id: "795ed3b2-b854-4e36-a56e-7c5be5c61614",
    createdAt: "2025-02-20T19:04:10.576Z",
    slug: "checkup-zdorovia-cholovika",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 10480,
    onlinePrice: null,
    foreignId: 4224,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Check-up "Men\'s Health"',
        },
        {
          lang: "uk",
          value: 'Check-up "Здоров\'я чоловіка"',
        },
      ],
    },
  },
  {
    id: "0895291d-576f-483b-a967-60ca8391d04d",
    createdAt: "2025-02-20T19:04:12.823Z",
    slug: "checkup-sadochok",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 3300,
    onlinePrice: null,
    foreignId: 4330,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: 'Check-up "Kindergarten"',
        },
        {
          lang: "uk",
          value: 'Check-up "Садочок"',
        },
      ],
    },
  },
  {
    id: "2a3ebc4a-5b3f-4908-a531-6e55185b9a09",
    createdAt: "2025-02-20T19:04:10.904Z",
    slug: "checkup-shkoliaryk",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 4500,
    onlinePrice: null,
    foreignId: 4331,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Check-up "Школярик"',
        },
        {
          lang: "en",
          value: 'Check-up "Schoolchild"',
        },
      ],
    },
  },
  {
    id: "7d62d00e-70f1-4474-9f7f-3571c195ba0e",
    createdAt: "2025-02-20T19:04:11.004Z",
    slug: "checkup-lab-zdorovia-zhinky",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 3050,
    onlinePrice: null,
    foreignId: 6293,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Check-up Lab "Здоров\'я жінки"',
        },
        {
          lang: "en",
          value: 'Check-up Lab "Women\'s Health"',
        },
      ],
    },
  },
  {
    id: "95eae2ab-72d6-4ebe-9800-96abd9dd214b",
    createdAt: "2025-02-20T19:04:10.711Z",
    slug: "checkup-lab-zdorovia-cholovika",
    sectionId: "4960480f-b8fd-49e3-8dd8-bba7daf1b2dc",
    price: 2950,
    onlinePrice: null,
    foreignId: 6292,
    isActive: true,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: 'Check-up Lab "Здоров\'я чоловіка"',
        },
        {
          lang: "en",
          value: 'Check-up Lab "Men\'s Health"',
        },
      ],
    },
  },
  {
    id: "28598a41-41f2-4548-994e-85b8fac8079a",
    createdAt: "2025-02-06T13:42:48.907Z",
    slug: "chlamydia-trachomatis-plr",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 200,
    onlinePrice: 0,
    foreignId: 95,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "Chlamydia trachomatis, ПЛР",
        },
        {
          lang: "en",
          value: "Chlamydia trachomatis, PCR",
        },
      ],
    },
  },
  {
    id: "c1c24c53-1c1b-480e-ad7c-a56612fe511f",
    createdAt: "2025-02-06T13:42:52.423Z",
    slug: "ddymer",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 653,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "D-Димер",
        },
        {
          lang: "en",
          value: "D-Dimer",
        },
      ],
    },
  },
  {
    id: "cfa05e38-51f6-4d1a-8d75-337d87517b80",
    createdAt: "2025-02-06T13:42:51.829Z",
    slug: "ekspresiia-mrnk-imunohlobuliniv-kapa-i-liambda-igkigl-cish",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 572,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Eкспресія мРНК імуноглобулінів капа і лямбда (IgK/IgL) (CISH)",
        },
        {
          lang: "en",
          value:
            "Expression of kappa and lambda immunoglobulin mRNA (IgK/IgL) (CISH)",
        },
      ],
    },
  },
  {
    id: "7fb09d05-746e-459a-b1f7-055c58e14bce",
    createdAt: "2025-02-06T13:42:50.552Z",
    slug: "helicobacter-pylori-bilok-caga-antytila-iga",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 411,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "HelicoBacter pylori (білок CagA), антитіла IgA",
        },
        {
          lang: "en",
          value: "Helicobacter pylori (CagA protein), IgA antibodies",
        },
      ],
    },
  },
  {
    id: "8a2afce0-b93c-4f22-b93b-9842448bb046",
    createdAt: "2025-02-06T13:42:50.598Z",
    slug: "helicobacter-pylori-antyhen-u-kali-iakisne-vyznachennia",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 417,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "HelicoBacter pylori, антиген у калі (якісне визначення)",
        },
        {
          lang: "en",
          value:
            "Helicobacter pylori, antigen in stool (qualitative determination)",
        },
      ],
    },
  },
  {
    id: "0013d397-6649-4bc0-afe8-10292e8a25b9",
    createdAt: "2025-02-06T13:42:50.631Z",
    slug: "helicobacter-pylori-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 421,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "HelicoBacter pylori, антитіла IgG",
        },
        {
          lang: "en",
          value: "Helicobacter pylori, IgG antibodies",
        },
      ],
    },
  },
  {
    id: "6e398c2c-40ed-4dec-95ef-03ddf2ad4829",
    createdAt: "2025-02-06T13:42:50.583Z",
    slug: "helicobacter-pylori-sumarni-antytila-igaigmigg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 415,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Helicobacter pylori, total antibodies IgA/IgM/IgG",
        },
        {
          lang: "uk",
          value: "HelicoBacter pylori, сумарні антитіла IgA/IgM/IgG",
        },
      ],
    },
  },
  {
    id: "09133154-07d5-4e7d-a089-047532d09d0e",
    createdAt: "2025-02-06T13:42:49.899Z",
    slug: "highrisk-hpv-dna-test-dnk-vpl-vysokoho-kantserohennoho-ryzyku-16-18-31-33-35-39-45-51-52-56-58-59-68",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 332,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "High-Risk HPV DNA test (ДНК ВПЛ високого канцерогенного ризику (16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 68 типів) кількісне визначення",
        },
        {
          lang: "en",
          value:
            "High-Risk HPV DNA test (quantitative determination of high-risk HPV DNA types 16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 68)",
        },
      ],
    },
  },
  {
    id: "263c6d1b-16fb-4098-bd12-4e575025db15",
    createdAt: "2025-02-06T13:42:51.617Z",
    slug: "horizon-27-skryninh-na-nosiistvo-spadkovykh-mutatsii-27-zakhvoriuvan-z-autosomnoretsesyvnym-ta-xzche",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 544,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Horizon 27 (скринінг на носійство спадкових мутацій, 27 захворювань з аутосомно-рецесивним та X-зчепленим успадкуванням, кров, NGS) \\ N",
        },
        {
          lang: "en",
          value:
            "Horizon 27 (carrier screening for hereditary mutations, 27 autosomal recessive and X-linked inherited disorders, blood, NGS) / N",
        },
      ],
    },
  },
  {
    id: "afaae446-a57c-4a9d-ad63-edb2a7a0ff76",
    createdAt: "2025-02-06T13:42:51.647Z",
    slug: "horizon-274-skryninh-na-nosiistvo-spadkovykh-mutatsii-274-zakhvoriuvan-z-autosomnoretsesyvnym-ta-xzc",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 548,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Horizon 274 (carrier screening for hereditary mutations, 274 autosomal recessive and X-linked inherited disorders, blood, NGS) / N",
        },
        {
          lang: "uk",
          value:
            "Horizon 274 (скринінг на носійство спадкових мутацій, 274 захворювань з аутосомно-рецесивним та X-зчепленим успадкуванням, кров, NGS) \\ N",
        },
      ],
    },
  },
  {
    id: "0ce2ad1e-9e99-4909-9cfe-a0a04e204edf",
    createdAt: "2025-02-06T13:42:51.584Z",
    slug: "horizon-4-skryninh-na-nosiistvo-spadkovykh-mutatsii-mukovistsydoz-khlamka-khromosoma-spynalnomiazova",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 540,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "Horizon 4 (carrier screening for hereditary mutations: cystic fibrosis, fragile X syndrome, spinal muscular atrophy, Duchenne muscular dystrophy, blood, NGS) / N",
        },
        {
          lang: "uk",
          value:
            "Horizon 4 (скринінг на носійство спадкових мутацій: муковісцидоз, Х-ламка хромосома, спинально-м'язова атрофія, дистрофія Дюшена, кров, NGS) \\ N",
        },
      ],
    },
  },
  {
    id: "4eaedf0c-3eec-4496-ad39-22e83664a69d",
    createdAt: "2025-02-06T13:42:51.903Z",
    slug: "ige-zahalnyi-syrovatka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 583,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "IgЕ загальний (сироватка)",
        },
        {
          lang: "en",
          value: "Total IgE (serum)",
        },
      ],
    },
  },
  {
    id: "3e5618bf-0d09-4ad9-9533-6d7c3b22010b",
    createdAt: "2025-02-06T13:42:51.883Z",
    slug: "igm-syrovatka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 580,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "IgM (serum)",
        },
        {
          lang: "uk",
          value: "IgМ (сироватка)",
        },
      ],
    },
  },
  {
    id: "f29f1d86-e128-41b1-be98-108e9e50904f",
    createdAt: "2025-02-06T13:42:51.735Z",
    slug: "iga-syrovatka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 560,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "IgA (сироватка)",
        },
        {
          lang: "en",
          value: "IgA (serum)",
        },
      ],
    },
  },
  {
    id: "a6f21042-9954-49d2-b511-983fd38235b2",
    createdAt: "2025-02-06T13:42:51.849Z",
    slug: "igg-syrovatka",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 575,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "IgG (serum)",
        },
        {
          lang: "uk",
          value: "IgG (сироватка)",
        },
      ],
    },
  },
  {
    id: "d030cf91-fac8-465f-96f1-808e408b5d27",
    createdAt: "2025-02-06T13:42:52.160Z",
    slug: "ntprobnp-natriiuretychnoho-hormonu-v-typu-nkintsevyi-polipeptyd",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 617,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "NT-proBNP (N-terminal pro-B-type natriuretic peptide)",
        },
        {
          lang: "uk",
          value:
            "NT-proBNP (натрійуретичного гормону В типу N-кінцевий поліпептид)",
        },
      ],
    },
  },
  {
    id: "664af10b-195d-4ab5-b244-04bc6c149cb3",
    createdAt: "2025-02-06T13:42:51.699Z",
    slug: "panorama-nipt-dlia-odnoplidnoyi-vahitnosti-aneuployidiia-21-18-13-xy-tryployidiia-fenomen-znykaiucho",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 555,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "PANORAMA, NIPT, (для одноплідної вагітності (анеуплоїдія 21, 18, 13, XY, триплоїдія, феномен зникаючого близнюка + 5 мікроделецій) \\ N",
        },
        {
          lang: "en",
          value:
            "PANORAMA, NIPT (for singleton pregnancy: aneuploidy 21, 18, 13, XY, triploidy, vanishing twin phenomenon + 5 microdeletions) / N",
        },
      ],
    },
  },
  {
    id: "e7b4cba5-3210-424a-b140-3fc22af8f0e4",
    createdAt: "2025-02-06T13:42:51.461Z",
    slug: "panorama-nipt-dlia-bahatoplidnoyi-vahitnosti-aneuploidiia-21-18-13-xy-vyznachennia-zyhotnosti-dlia-d",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 524,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PANORAMA, NIPT (for multiple pregnancy: aneuploidy 21, 18, 13, XY + zygosity determination for dichorionic twins) / N",
        },
        {
          lang: "uk",
          value:
            "PANORAMA, NIPT, для багатоплідної вагітності (анеуплоідія 21, 18, 13, XY+ визначення зиготності для дихоріальної двійні) \\ N",
        },
      ],
    },
  },
  {
    id: "a7bd22c8-add3-45bd-9bf0-0021b3761de9",
    createdAt: "2025-02-06T13:42:51.570Z",
    slug: "panorama-nipt-dlia-monokhorialnoyi-dviini-aneuploidiia-21-18-13-xy-tryploidiia-fenomen-znykaiuchoho",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 538,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PANORAMA, NIPT (for monochorionic twins: aneuploidy 21, 18, 13, XY, triploidy, vanishing twin phenomenon + DiGeorge syndrome (del22q11.2)) / N",
        },
        {
          lang: "uk",
          value:
            "PANORAMA, NIPT, для монохоріальної двійні (анеуплоідія 21, 18, 13, XY, триплоідія, феномен зникаючого близнюка + синдром Ді Джорджі (del22q 11.2)) \\ N",
        },
      ],
    },
  },
  {
    id: "7e92ed28-7ec4-429c-bdb2-3826b183525f",
    createdAt: "2025-02-06T13:42:51.536Z",
    slug: "panorama-nipt-dlia-odnoplidnoyi-vahitnosti-aneuploidiia-21-18-13-xy-tryploidiia-fenomen-znykaiuchoho-1",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 534,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PANORAMA, NIPT (for singleton pregnancy: aneuploidy 21, 18, 13, XY, triploidy, vanishing twin phenomenon + DiGeorge syndrome (del22q11.2)) / N",
        },
        {
          lang: "uk",
          value:
            "PANORAMA, NIPT, для одноплідної вагітності (анеуплоідія 21, 18, 13, XY, триплоідія, феномен зникаючого близнюка + синдром Ді Джорджі (del22q 11.2)) \\ N",
        },
      ],
    },
  },
  {
    id: "30e29c83-e40b-446c-9308-190fefdd3b5f",
    createdAt: "2025-02-06T13:42:51.431Z",
    slug: "panorama-nipt-dlia-odnoplidnoyi-vahitnosti-aneuploidiia-21-18-13-xy-tryploidiia-fenomen-znykaiuchoho",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 520,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value:
            "PANORAMA, NIPT (for singleton pregnancy: aneuploidy 21, 18, 13, XY, triploidy, vanishing twin phenomenon) / N",
        },
        {
          lang: "uk",
          value:
            "PANORAMA, NIPT, для одноплідної вагітності (анеуплоідія 21, 18, 13, XY, триплоідія, феномен зникаючого близнюка) \\ N",
        },
      ],
    },
  },
  {
    id: "b81506de-d22f-406a-86e1-760b1673b2fc",
    createdAt: "2025-02-06T13:42:51.507Z",
    slug: "panorama-nipt-dlia-odnoplidnoyi-surohatnoyi-vahitnosti-abo-odnoplidnoyi-vahitnosti-z-donoroskoyi-iai",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 530,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "PANORAMA, NIPT, для одноплідної сурогатної вагітності або одноплідної вагітності з донороської яйцеклітини (анеуплоідія 21, 18, 13, XY) \\ N",
        },
        {
          lang: "en",
          value:
            "PANORAMA, NIPT (for singleton surrogate pregnancy or singleton pregnancy with donor egg: aneuploidy 21, 18, 13, XY) / N",
        },
      ],
    },
  },
  {
    id: "d564d43f-3ad4-431c-9249-e0b40eea9ba2",
    createdAt: "2025-02-06T13:42:51.249Z",
    slug: "pappa-proteyina-plazmy-asotsiiovanyi-z-vahitnistiu-8-tyzh-0-dn-13-tyzh-6-dn",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 500,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "PAPP-A (Протеїн-А плазми, асоційований з вагітністю), 8 тиж. + 0 дн. - 13 тиж.+ 6 дн.",
        },
        {
          lang: "en",
          value:
            "PAPP-A (Pregnancy-associated plasma protein-A), 8 weeks + 0 days to 13 weeks + 6 days",
        },
      ],
    },
  },
  {
    id: "efdb564b-7fe3-46d1-b1aa-d105975a4cf8",
    createdAt: "2025-02-06T13:42:48.846Z",
    slug: "toxoplasma-gondii-antytila-igg",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 87,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "Toxoplasma gondii, IgG antibodies",
        },
        {
          lang: "uk",
          value: "Toxoplasma gondii, антитіла IgG",
        },
      ],
    },
  },
  {
    id: "7c0ab0db-8c60-4f61-ad68-16d8d7048042",
    createdAt: "2025-02-06T13:42:51.668Z",
    slug: "vistara-25-zakhvoriuvan-autosomnodominantni-ta-xzchepleni-spadkovi-zakhvoriuvannia-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 551,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "Vistara (25 захворювань: аутосомно-домінантні та X-зчеплені спадкові захворювання)\\ N",
        },
        {
          lang: "en",
          value:
            "Vistara (25 disorders: autosomal dominant and X-linked inherited diseases) / N",
        },
      ],
    },
  },
  {
    id: "8fc16418-1adf-4bb5-b456-bf103155acab",
    createdAt: "2025-02-06T13:42:48.809Z",
    slug: "fetoproteyin-afp",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 120,
    onlinePrice: 0,
    foreignId: 82,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "α-фетопротеїн (АФП)",
        },
        {
          lang: "en",
          value: "α-fetoprotein (AFP)",
        },
      ],
    },
  },
  {
    id: "0695db3f-446e-4bf9-ab9f-11a46b57799d",
    createdAt: "2025-02-06T13:42:52.636Z",
    slug: "2hlikoproteyid-i-antytila-igg-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 681,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value: "β-2-глікопротеїд I, антитіла IgG \\ N",
        },
        {
          lang: "en",
          value: "β-2-glycoprotein I, IgG antibodies / N",
        },
      ],
    },
  },
  {
    id: "da0d6f33-acbc-4844-afad-5b7a674661ec",
    createdAt: "2025-02-06T13:42:52.706Z",
    slug: "2hlikoproteyid-i-antytila-igm-n",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 686,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "en",
          value: "β-2-glycoprotein I, IgM antibodies / N",
        },
        {
          lang: "uk",
          value: "β-2-глікопротеїд I, антитіла IgM \\ N",
        },
      ],
    },
  },
  {
    id: "f98b1ba4-b102-48e5-ab3d-cc3bee7e51c8",
    createdAt: "2025-02-06T13:42:51.299Z",
    slug: "khhl-vilnyi-khorionichnyi-honadotropin-viln-prenatalna-diahnostyka-8-tyzh-0-dn-13-tyzh-6-dn",
    sectionId: "bf0823fe-ee27-43ad-b7af-27365d37bcc2",
    price: 100,
    onlinePrice: 0,
    foreignId: 506,
    isActive: false,
    displayIndex: 0,
    translations: {
      name: [
        {
          lang: "uk",
          value:
            "β-ХГЛ вільний (хоріонічний гонадотропін вільн., пренатальна діагностика) (8 тиж. + 0 дн. - 13 тиж. + 6 дн.)",
        },
        {
          lang: "en",
          value:
            "Free β-hCG (free human chorionic gonadotropin, prenatal diagnostics) (8 weeks + 0 days to 13 weeks + 6 days)",
        },
      ],
    },
  },
];
