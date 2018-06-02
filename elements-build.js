const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/helloElements/runtime.js',
        './dist/helloElements/polyfills.js',
        './dist/helloElements/scripts.js',
        './dist/helloElements/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/hello-world.js');
    await fs.copyFile('./dist/helloElements/styles.css', 'elements/styles.css')
    await fs.copy('./dist/helloElements/assets/', 'elements/assets/' )
    
})()