
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './app/components/footer/footer';
import NavBar from './app/components/navbar/navbar';
import HomePage from './app/pages/homepage/homepage';
import Projects from './app/pages/projects/projects';
import FrontEndPage from './app/pages/frontendpage/frontend';
import Blog from './app/pages/blogpage/blogpage';
import AdminPanel from './app/pages/admin/admin';
import Contacts from './app/pages/contacts/contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/frontend' element={<FrontEndPage />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
