import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Career from './pages/Career';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './stylesheets/home.css';
import './stylesheets/header-footer.css';
import './stylesheets/carousel.css';
import './stylesheets/career-courses.css';
import './stylesheets/contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 500,

});
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route path='/' exact component={Home}/>
     <Route path='/career' exact component={Career}/>
     <Route path='/courses' exact component={Courses}/>
     <Route path='/contact' exact component={Contact}/>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
