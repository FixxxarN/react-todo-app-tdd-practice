# react-todo-app-tdd-practice

<details>
  <summary>Show UX</summary>

  ![todo-ux](./assets/todo-ux.png)
</details>

## Dependencies
- @emotion/react
- @emotion/styled
- @mui/icons-material
- @mui/material
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- react
- react-dom
- react-scripts

## Research
Localstorage will be used to save the todos in the browser.

```js
// Set value
localStorage.setItem("key", "value");
```

```js
// Get value
const item = localStorage.getItem("key");
```

```js
// Remove value
localStorage.removeItem("key");
```

### Components
- Header (HeaderTitle)
- HeaderTitle (Typography)
- Body (List)
- List ([Scrollable] EditableListItems)
- EditableListItem (Checkbox, Typography or Textfield, ListItemButtons)
- ListItemButton
- Footer (FooterButtons, TodoTextfield)
- TodoTextfield
- FooterButton