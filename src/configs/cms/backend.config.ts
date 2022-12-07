import { CmsBackend } from "netlify-cms-core";

const cms_backend: CmsBackend = {
  name: "github",
  repo: "michio-rework/my-docs",
  branch: "main",
  base_url: "https://vercel-learn-navy.vercel.app",
  auth_endpoint: "api/begin",
  auth_scope: "repo",
  open_authoring: true,
  cms_label_prefix: "content/",
};

export default cms_backend;
