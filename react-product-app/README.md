Build the App

To build the app for production, run the following command:

npm run build
After the build is complete, the compiled files will be available in the build/ directory.

Start the Server

To run the app in development mode:

npm start
The app will be available at http://localhost:3001/.

Check the Compiled Files

The compiled JavaScript files are located in the build/static/js/ directory:

main.js: This is the main compiled JavaScript file, which will be named with a hash (e.g., main.7a8bb08c.js).
source maps: A .map file will be generated for debugging purposes (e.g., main.7a8bb08c.js.map).
asset-manifest.json: This file contains the correct paths to all assets, including the main.js file.
Example content of asset-manifest.json:

{
  "files": {
    "main.js": "/static/js/main.7a8bb08c.js",
    "index.html": "/index.html",
    "main.7a8bb08c.js.map": "/static/js/main.7a8bb08c.js.map"
  },
  "entrypoints": [
    "static/js/main.7a8bb08c.js"
  ]
}
Test the Web Component

The web component <product-display> is now ready to be used in another app. Ensure that the compiled main.js is accessible from the main-app.