# Task project

### Task project is a web project developed in React, utilizing various JasaScript functionalities.

## About
The primary purpose of the application is task management.<br/>
This was my first project where I used Javascript functionalities in a React project.

## Technical Details
- **Technologies Used:** React (useState hook), Javascript (map, filter, Object.entries, push, replace, ...), SASS.
- **Dependencies:** "react-icons", "sass"

## Features
- **Administration Page:** On this page, users can view, create, edit and delete tasks via a table. Add and Edit buttons will open a modal with form. Also you can search by task status via tab buttons.
- **Main Page:** On this page, users can view tasks via cards. Tasks are sorted in columns by a task status. Every task status has different color. Additionaly, there is a search option by task name.
- **Toggle between Pages:** Using the useState hook, switching between the Administrator and Main pages is facilitated.

## Additional Implementation Details
- **Props Drilling:** Props drilling is utilized throughout the application to pass data from parent components to nested child components, enabling a seamless flow of data between different parts of the application.
- **Conditional Rendering:** Conditional rendering techniques are employed to dynamically display content based on various conditions or states within the application, enhancing user experience and interface responsiveness.
- **useState Hook:** The useState hook is extensively used for managing component-level state, enabling dynamic updates and re-renders based on user interactions and data changes.

- ## Installation
1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Run the application: `npm start`
