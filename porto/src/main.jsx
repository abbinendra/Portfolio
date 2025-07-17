import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Headers from './Headers.jsx'
import App from './App.jsx'
import Aboutme from './Aboutme.jsx'
import Projects from './Projects.jsx'
import Contactme from './contactme.jsx'
import Footer from './footer.jsx'

function RootApp() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-glow" id="custom-cursor"></div>
      <div className='all'>
        <div className='firstpage'>
          <Headers/>
          <App />
        </div>
        <Aboutme />
        <Projects />
        <Contactme/>
        <Footer/>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<RootApp />);
