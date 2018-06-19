const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/chuckNorrisElement/runtime.js',
        './dist/chuckNorrisElement/polyfills.js',
        './dist/chuckNorrisElement/scripts.js',
        './dist/chuckNorrisElement/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/chuck-norris.js');
    await fs.copyFile('./dist/chuckNorrisElement/styles.css', 'elements/styles.css')
    await fs.copy('./dist/chuckNorrisElement/assets/', 'elements/assets/' )
    
})()