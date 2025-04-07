# wd-ui-components

## Overview

## Installation

```sh
npm install wd-ui-components
```

## Usage

### Import Module

```tsx
//import "wd-ui-components/dist/style.css";
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

## Props

| Prop              | Type                                   | Default     | Description                                                                              |
| ----------------- | -------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `initialContent`  | `string` (optional)                    | `""`        | The initial HTML content of the editor. If not provided, the editor starts empty.        |
| `onContentChange` | `(content: string) => void` (optional) | `undefined` | Callback triggered every time the editor content updates, providing the current content. |
| `isAutosaving`    | `boolean`                              | `false`     | If `true`, shows an autosaving indicator.                                                |
| `toolbarHide`     | `boolean`                              | `false`     | If `true`, hides the editor toolbar.                                                     |
| `hideBorder`      | `boolean`                              | `false`     | If `true`, removes the editor border.                                                    |

|

## Storybook

Storybook is included to demonstrate the editor's capabilities.

### Running Storybook

```sh
npm run storybook
```

## License

MIT License.
