const path = require('path');
module.exports = {
    // relative to project root
    outputDir: '../Views/App',
    // relative to output dir
    assetsDir: '../../Content',
    indexPath: 'Index.cshtml',
    configureWebpack: {
        resolve: {
            alias: {
                "Assets": path.resolve(__dirname, "src/assets"),
                "Mixins": path.resolve(__dirname, "src/mixins"),
                "Views": path.resolve(__dirname, "src/views"),
                "Components": path.resolve(__dirname, "src/components")
            }
        }
    }
}