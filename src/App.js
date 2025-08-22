import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer';
import { Contact } from './components/main/Contact';
import { Navbar } from './components/navbar';
import { SampleProject } from './components/sampleProject';
import { Certifications } from './pages/certifications';
import { Contacts } from './pages/contacts';
import { Gallery } from './pages/gallery';
import { Main } from './pages/main';
import { Projects } from './pages/projects';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/sample-project' element={<SampleProject />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
