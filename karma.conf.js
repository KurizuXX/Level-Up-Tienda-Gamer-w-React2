// ESM wrapper for projects with "type": "module"
// This file delegates to the CommonJS config in `karma.conf.cjs` so tools that
// call the default `karma.conf.js` still work when the project is ESM.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cjsConfig = require('./karma.conf.cjs');

export default cjsConfig;
