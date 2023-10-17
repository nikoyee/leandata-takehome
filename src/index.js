import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// trade offs
/**
 * Data
 * - If we had a Backend app, we can leverage render data to be more backend driven
 * We can opt to set form field data in the BE and have modal consume all its render data (e.g. title, forms fields, text) from BE.
 * This will strongly couple how we build the BE/FE components and updates to the FE might end of effecting BE and vice versa
 * but the benefit is we can be more dynamic about the content shown in the modal and where data comes from.
 *
 *
 *  UI/UX
 * - Could have use a warning modal before deleting a user to prevent accidental deletion
 */

root.render(
  <StrictMode>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossOrigin="anonymous"
    />
    <App />
  </StrictMode>
);
