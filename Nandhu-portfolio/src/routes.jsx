// Importing necessary components from 'react-router-dom' for routing
import { createBrowserRouter } from 'react-router-dom';

// Importing all the components that will be used in routing
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

// Create a new router using `createBrowserRouter` method from 'react-router-dom'
const router = createBrowserRouter([ 
  {
    
    path: '/', 
    element: <App />, 
      children: [
      { 
        // When the user navigates to '/', render the Home component
        path: '/', 
        element: <Home /> 
      },
      { 
        // When the user navigates to '/about', render the About component
        path: 'about', 
        element: <About /> 
      },
      { 
        // When the user navigates to '/projects', render the Projects component
        path: 'projects', 
        element: <Projects /> 
      },
      { 
        // When the user navigates to '/contact', render the Contact component
        path: 'contact', 
        element: <Contact /> 
      },
      { 
        // For any other path not defined, render the NotFound component (catch-all route)
        path: '*', 
        element: <NotFound /> 
      },
    ],
  },
]);

// Export the router to be used in other parts of the application
export default router;
