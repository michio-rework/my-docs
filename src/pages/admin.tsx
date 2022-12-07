import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import React, { useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import CmsConfig from "../configs/cms";
import { InitOptions } from "netlify-cms-core";

const CMS = () => {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      import("netlify-cms-app").then(({ default: CMS }) => {
        CMS.registerEventListener({
          name: "preSave",
          handler: ({ entry }) => {
            const author = JSON.parse(
              localStorage.getItem("netlify-cms-user")
            ).name;
            return entry.get("data").set("author", author);
          },
        });
        const init_options: InitOptions = { ...CmsConfig };

        // HINT: to test the collections setup we use the test-repo, nothing will be pushed to github and if you refresh the page
        // all the changes and added items will be removed.
        if (process.env.NODE_ENV === "development") {
          init_options.config.backend.name = "test-repo";
        }
        CMS.init(init_options);
      });
    }
  });
  return (
    <BrowserOnly>
      {() => {
        return <div id="nc-root" />;
      }}
    </BrowserOnly>
  );
};

export default CMS;
