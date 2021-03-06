import * as React from "react";
import * as ReactDOM from "react-dom";

import loadDocModule from "@alicloud/console-components-lib-documenter/loadDocModule";

(async function main() {
  const docDef = {
    prodPkgName: "@alicloud/cc-demo-component",
    actualLoadPkgName: "@cc-dev-kit-test/cc-demo-component",
    actualLoadPkgVersion: "1.0.1-preview.27"
  };

  const DocComp = (await loadDocModule(docDef)).default;

  ReactDOM.render(
    <div style={{ padding: "10px 20px" }}>
      <DocComp pkgInfo={docDef} />
    </div>,
    document.querySelector(".app")
  );
})();
