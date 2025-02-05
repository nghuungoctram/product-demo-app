Main App
Description
The main-app is a React app that dynamically loads the product-app's web component <product-display> from a remote server (via a script tag).

Setup
Clone the Repository

Clone the main-app repository to your local machine.

Install Dependencies

To run the main-app in development mode:

This will start the app on http://localhost:3000/.

How the App Works

The main-app dynamically loads the product-app's main.js file from http://localhost:3001/static/js/.
Once the script is loaded, it renders the web component <product-display> inside the main-app.
Check the Loaded Script

Open the Developer Tools in your browser (press F12 or Cmd+Option+I on Mac) and go to the Network tab to see the script request. Make sure the correct main.js file (e.g., main.7a8bb08c.js) from product-app is being loaded.