import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import React, { useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import CmsConfig from "../configs/cms.config";

const CMS = () => {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      import("netlify-cms-app").then((cms) => {
        cms.default.init(CmsConfig);
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
