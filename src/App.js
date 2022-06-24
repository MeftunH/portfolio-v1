import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route path='/' exact component={Home}/>
     <Route path='/projects' exact component={Projects}/>
     <Route path='/courses' exact component={Courses}/>
     <Route path='/contact' exact component={Contact}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
