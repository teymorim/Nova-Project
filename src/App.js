import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import BlogDetail from './Pages/BlogDetail/BlogDetail';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/blogCourse/:idName' element={<BlogDetail />} />
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
