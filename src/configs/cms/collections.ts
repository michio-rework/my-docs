import { CmsCollection } from "netlify-cms-core";

const blog_post_collection: CmsCollection = {
  create: true,
  delete: true,
  name: "blog",
  label: "blog",
  folder: "blog",
  identifier_field: "title",
  extension: "md",
  publish: true,
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
    {
      name: "authors",
      label: "Authors",
      widget: "hidden",
      fields: [
        { name: "name", label: "Name", widget: "string" },
        { name: "title", label: "Title", widget: "string" },
        { name: "url", label: "URL", widget: "string" },
        { name: "image_url", label: "ImageURL", widget: "string" },
      ],
    },
  ],
};

const cms_collections: CmsCollection[] = [blog_post_collection];

export default cms_collections;
