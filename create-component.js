const fs = require("fs");
const componentName = process.argv[2] || "Test";

const COMPONENT_ROOT = `./src/components/App/components/${componentName}`;

fs.mkdirSync(`${COMPONENT_ROOT}/assets/css`, {
  recursive: true
});

fs.writeFileSync(`${COMPONENT_ROOT}/assets/css/index.css`, "");

fs.writeFileSync(`${COMPONENT_ROOT}/index.js`, "");
