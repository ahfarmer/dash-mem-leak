
// This script adds two console log statements to FactoryMaker.js so we can see
// the singleton count going up every time we create a new dash player
// (and not going down when we reset/destroy a dash player).
const fs = require('fs');
const factoryMakerPath = __dirname + "/../node_modules/dashjs/build/es5/src/core/FactoryMaker.js";

const content = fs.readFileSync(factoryMakerPath, 'utf8');
if (content.includes("console.log")) {
  console.log('Console log lines already added. Aborting.');
  process.exit(0);
}

const logLine = "console.log(`Adding another entry to singletonContexts. Current length:${singletonContexts.length}`)"
const updatedContent = content.replace(/singletonContexts\.push/g, `${logLine}; singletonContexts.push`);
fs.writeFileSync(factoryMakerPath, updatedContent);


