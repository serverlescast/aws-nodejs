const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async function zipping(zipName = 'main.zip', dir=__dirname) {
    return await exec(`cd ${dir}/functions && zip -r ${zipName} './index.js' 'node_modules' 'package.json'`);
}