#

Opika Task 1 - React.js Single Page Application
This project is a single-page application (SPA) developed using React.js. It interacts with a mock backend API to demonstrate basic CRUD (Create, Read, Update, Delete) operations. The application allows users to submit data and retrieve information from the backend API in a user-friendly interface.

Functionality
The application consists of the following main components:

Form Component: Allows users to submit new data to the backend API. The form includes fields for entering the title and completion status of an item.

Data Table Component: Displays a table of data retrieved from the backend API. Each row in the table represents an item with its ID, title, and completion status. Users can click on a row to view detailed information about the item.

Data Dialog Component: Shows detailed information about a selected item in a dialog box. Users can close the dialog box to return to the main view.

Usage
To use the application:

Clone the repository to your local machine:

bash
Copy code

Navigate to the project directory:

bash
Copy code
cd opika-task-1
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
# Open your browser and navigate to http://localhost:3000 to view the application.

Use the form to submit new data to the backend API. The table will update automatically to display the new data.

Click on a row in the table to view detailed information about the selected item in the dialog box.

Close the dialog box to return to the main view.

Folder Structure
components: Contains React components for the form, data table, and data dialog.
services: Includes utility functions for fetching and submitting data to the backend API.
styles: Contains CSS files for styling the application.
Dependencies
React.js: A JavaScript library for building user interfaces.
Axios: A promise-based HTTP client for making requests to the backend API.
Author
This project was created by Kumarpintoo417@gmail.com.