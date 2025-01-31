/**
 * Entry point for the React application.
 * 
 * This file sets up the root of the React application and renders the main component
 * within a StrictMode wrapper to help identify potential problems in the application.
 * 
 * Imports:
 * - StrictMode: A wrapper component that activates additional checks and warnings for its descendants.
 * - createRoot: A function from 'react-dom/client' to create a root to render the React application.
 * - RouterProvider: A component from 'react-router-dom' that provides routing capabilities.
 * - './index.css': The main stylesheet for the application.
 * - router: The router configuration for the application.
 * 
 * The application is rendered into the DOM element with the id 'root'.
 */

import { StrictMode } from 'react'; // Import StrictMode to enable additional checks for potential issues
import { createRoot } from 'react-dom/client'; // Import createRoot to create a root for the app to be rendered into
import { RouterProvider } from 'react-router-dom'; // Import RouterProvider to set up routing in the app
import './index.css'; // Import the main stylesheet for the application

// Importing router configuration from the 'routes' file
import router from './routes'; 

// Rendering the application inside the DOM element with id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider wraps the app and provides routing functionality */}
    <RouterProvider router={router} />
  </StrictMode>
);
