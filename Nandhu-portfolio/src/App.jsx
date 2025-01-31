// src/App.jsx
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders the child routes */}
      </main>
      <Footer />
    </>
  );
};

export default App;
