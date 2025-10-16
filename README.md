# wd-ui-components

<!-- release: trigger patch via OIDC trusted publishing -->
## Overview

Reusable UI components and dynamic form builder for admin panels. Unifies reusable components and forms with customizable styling and validation. Supports per-microfrontend namespaced events to avoid collisions.

## Installation

```sh
npm install wd-ui-components
```

Also ensure peers are installed in your host app:

```sh
npm install react react-dom react-hook-form @hookform/resolvers yup react-select react-datepicker clsx tailwind-merge class-variance-authority texteditor-lexical lucide-react
```

## Usage

### Import Module

```tsx
// Styles (choose one):
// import "wd-ui-components/style.css";
// import "wd-ui-components/dist/style.css";
import { FormWithFieldsCompnent } from "wd-ui-components";
```

### Basic Example

```tsx
import { useCallback, useEffect, useState } from "react";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-wrapper">
      <div className="main-container"></div>
    </div>
  );
}

export default App;
```

### Styling Requirements

The editor should be placed inside a container with a defined height to properly render. It will automatically expand to fill the full width and height of the container.

```css
.main-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  overflow: hidden;
  padding: 20px;
}
.main-container * {
  box-sizing: border-box;
}
```

## Quickstart: Dynamic Form

```tsx
import { EntityForm, type IEditField, getItemForEdit } from "wd-ui-components";

const fields: IEditField[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: [
      { id: "admin", name: "Admin" },
      { id: "user", name: "User" },
    ],
  },
  { name: "isActive", label: "Active", type: "switch" },
  { name: "birth", label: "Birth date", type: "date" },
];

const currentItem = getItemForEdit(fields, { id: "1", name: "John" } as any);

export function UserForm() {
  const handleSubmit = async (data: any) => {
    // send to API
  };

  return (
    <EntityForm
      fields={fields}
      currentItem={currentItem}
      onSubmit={handleSubmit}
      mode="onSubmit"
      autosave={false}
    />
  );
}
```

## Microfrontends: Namespaced Events (channel)

To avoid collisions across multiple MFEs using this library, provide a `channel` prop for UI listeners and pass the same channel when emitting events.

Mount once per microfrontend:

```tsx
import { ParangaForViewport, Resultoutput } from "wd-ui-components";

export function AppChrome() {
  return (
    <>
      <ParangaForViewport channel="orders" />
      <Resultoutput channel="orders" />
    </>
  );
}
```

Emit events for your channel:

```tsx
import { sendMessage, setError, setSuccess } from "wd-ui-components";

sendMessage("showParange", undefined, "orders");
// ... async work
sendMessage("hideParange", undefined, "orders");

setError("Ошибка сохранения", "orders");
setSuccess("Сохранено", "orders");
```

Backward compatibility: if you omit `channel`, components behave globally and events are plain (non-wrapped) details.

## CRUD Helpers with channel (optional)

```tsx
import {
  createAnyEntity,
  updateAnyEntity,
  deleteAnyEntity,
  getAnyEntity,
  uploadImgageForAnyEntity,
  deleteImgageForAnyEntity,
} from "wd-ui-components";

await createAnyEntity(data, service, "Created", undefined, "orders");
await updateAnyEntity(id, data, service, "Updated", undefined, "orders");
await deleteAnyEntity(id, service, "Deleted", "orders");
const item = await getAnyEntity(id, service, "Loaded", "orders");
await uploadImgageForAnyEntity({
  files,
  entityValueId: id,
  fieldName: "avatar",
  service,
  message: "Uploaded",
  channel: "orders",
});
await deleteImgageForAnyEntity(imgId, service, "Deleted", "orders");
```

## Request Service (namespaced unauthorized)

```ts
import createRequestService, { ApiService } from "wd-ui-components";

const request = createRequestService({
  lskey: "auth",
  apiUrl: "https://api.example.com",
  refreshTokenUrl: "/auth/refresh",
  useRefreshToken: true,
  defaultHeaders: () => ({
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth") || "null")?.accessToken ?? ""}`,
  }),
  channel: "orders", // unauthorized event will be scoped
});

type User = { id: string; name: string };
const userService = new ApiService<User>("/users", request.sendRequest);
```

## Public API (summary)

- Components:
  - `EntityForm`/`FormWithFieldsCompnent` (dynamic form)
  - Inputs: `InputText`, `InputSwitch`, `InputRadio`, `InputDate`, `InputSelect`, `InputHTMLEditor`, `InputLabel`
  - UI: `Button`, `PrimaryButton`, `SecondaryButton`, `PrimaryTextButton`, `DangerButton`, `TertiaryButton`, `ChipsButton`, `IconButton`, `PrimaryIconButton`, `SecondaryIconButton`, `TertiaryIconButton`
  - Overlays: `ParangaForViewport` (optional `channel`), `Resultoutput` (optional `channel`)
- Types: `IEditField`, `EntityFormRef`
- Utils: `createSchema`, `getItemForEdit`, `getFieldsWithProjectSettings`, `sendMessage`, `setError`, `setSuccess`
- Services: `createRequestService`, `ApiService`

## License

MIT License.
