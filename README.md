# UI Components

This repository is a collection of reusable React components styled with Tailwind CSS and built with Vite. It serves as a personal library of common UI elements that can be easily integrated into other projects.

## Tech Stack

- **Framework:** [React](https://reactjs.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Data Fetching:** [TanStack React Query](https://tanstack.com/query/v5)
- **Linting:** [ESLint](https://eslint.org/)

## Available Components

The project includes the following components:

- **Accordion:** A standard accordion component.
- **Controlled Accordion:** An accordion group where only one item can be open at a time.
- **Dropdown:** A dropdown menu component.
- **Image Slider:** A simple image carousel.
- **Modal:** A modal dialog component.
- **Multi-Language Support:** A component demonstrating language switching.
- **Nested Comments:** A component to display nested comments.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or later)
- npm

### Installation

1.  Clone the repo:
    ```bash
    git clone https://github.com/abvsng/ui-comps.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd ui-comps
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Serves the production build locally.

## Folder Structure

```
/src
|-- /assets
|-- /Components
|   |-- /Accordion.jsx
|   |-- /Controlled Accordion
|   |-- /dropdown
|   |-- /imageSlider
|   |-- /Modal.jsx
|   |-- /multi lang
|   `-- /nestedComments
|-- /Pages
|   |-- /AccordionPage.jsx
|   |-- /ControlledAccPage.jsx
|   |-- /DropdownPage.jsx
|   |-- /ImageSliderPage.jsx
|   |-- /ModalPage.jsx
|   |-- /MultiLangPage.jsx
|   `-- /NestedCommentsPage.jsx
|-- /Store
|   |-- /Slices
|   `-- /store.jsx
|-- App.css
|-- App.jsx
|-- index.css
`-- main.jsx
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

