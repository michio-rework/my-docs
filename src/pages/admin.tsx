import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import React, { useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import CmsConfig from "../configs/cms.config";

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
        CMS.init(CmsConfig);
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
