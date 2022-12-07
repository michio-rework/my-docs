import { InitOptions } from "netlify-cms-core";

const CmsConfig: InitOptions = {
  config: {
    backend: {
      name: "github",
      repo: "michio-rework/my-docs",
      branch: "main",
      base_url: "https://vercel-learn-navy.vercel.app",
      auth_endpoint: "api/begin",
      auth_scope: "repo",
      open_authoring: true,
      cms_label_prefix: "content/",
    },
    media_folder: "static/img",
    public_folder: "/img/",
    publish_mode: "editorial_workflow",
    collections: [
      {
        name: "blog",
        label: "blog",
        folder: "blog",
        identifier_field: "title",
        extension: "md",
        publish: false,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        fields: [
          {
            name: "title",
            label: "Title",
            widget: "string",
          },
          { name: "body", label: "Body", widget: "markdown" },
          { name: "slug", label: "Slug", widget: "string" },
          { name: "tags", label: "Tags", widget: "list" },
        ],
      },
    ],
  },
};

export default CmsConfig;
