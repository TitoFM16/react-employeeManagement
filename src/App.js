import './App.css';
import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate, useParams} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';



function App() {
  return (
    <div>
      
      <Router>

          <HeaderComponent/>
          <div className="container">
            <Routes>
              <Route path="/" exact element={<ListEmployeeComponent/>}/>
              <Route path="/employees" element={<ListEmployeeComponent/>}/>
              <Route path="/add-employee" element={<CreateEmployeeComponent/>}/>
            </Routes>
          </div>
          <FooterComponent/>
      
      </Router>
    </div>
  );
}

export default (App);
