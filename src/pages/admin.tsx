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
            const entry_collection = entry.get("collection");

            if (entry_collection === "blog") {
              const github_user = JSON.parse(
                localStorage.getItem("netlify-cms-user")
              );
              const github_username =
                github_user?.name ?? github_user?.login ?? "Deriv User";

              const github_url =
                github_user?.html_url ?? "https://github.com/binary-com";

              const avatar_url =
                github_user?.avatar_url ??
                "https://avatars.githubusercontent.com/u/93753441?v=4";

              const authors = [
                {
                  name: github_username,
                  title: "Front-End Developer",
                  url: github_url,
                  image_url: avatar_url,
                },
              ];

              return entry.get("data").set("authors", authors);
            }
          },
        });
        const init_options: InitOptions = { ...CmsConfig };

        // HINT: to test the collections setup we use the test-repo, nothing will be pushed to github and if you refresh the page
        // all the changes and added items will be removed.
        if (process.env.NODE_ENV === "development") {
          // init_options.config.backend.name = "test-repo";
          init_options.config.local_backend = true;
        }
        CMS.init(init_options);
      });
    }
  });
  return (
    <BrowserOnly>
      {() => {
        // HINT: netlify-cms will be rendered inside this div :|
        return <div id="nc-root" />;
      }}
    </BrowserOnly>
  );
};

export default CMS;
