# minimal-config-repo

## Project setup
```
npm install
```
## Issue
Building in development mode yields unpredictable output results when using a config file.
Steps to reproduce:
- Build in production mode `npm run build`
  - You should now have two directories outside of this directory, Views\App and Content. Views\App is where ASP.NET will look for the CSHTML file. Content is the directory ASP.NET exposes publicly for content delivery.
- Build in development mode `npm run dev-build`
  - You will not have the same thing as above. In my particular case (using vue CLI 3.1.1), I get:
    - Views\App:
        - app.js - No content hash on the name
        - Index.cshtml - OK
        - favicon.ico - OK
    - Content:
        - img\
            - logo.png - Has content hash



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
