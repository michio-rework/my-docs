import { CmsCollection } from "netlify-cms-core";

const IntroPagesCollection: CmsCollection = {
  name: "pages",
  label: "Pages",
  publish: false,
  files: [
    {
      name: "intro",
      label: "Introduction",
      file: "docs/intro.md",
      fields: [{ name: "body", label: "Body", widget: "markdown" }],
    },
    {
      name: "app_reg",
      label: "How to setup an Application",
      file: "docs/how_to_setup_an_app.md",
      fields: [{ name: "body", label: "Body", widget: "markdown" }],
    },
  ],
};

export default IntroPagesCollection;
