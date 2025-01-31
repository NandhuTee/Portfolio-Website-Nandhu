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
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
//import App from './App.jsx'
import router from './routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
//RouterProvider is the central component for integrating routing in your React application.