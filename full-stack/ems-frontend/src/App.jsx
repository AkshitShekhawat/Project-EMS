import './App.css';
import SignupComponent from './Components/SignupComponent';
import AboutComponent from './Components/AboutComponent';
import EmployeeComponent from './Components/EmployeeComponent';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModernContactComponent from './Components/ModernContactComponent';
import LoginComponent from './Components/LoginComponent';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          {/* // https://localhost:3000 */}
        {/* HomePage WITHOUT the default HeaderComponent */}
          <Route path='/' element={<HomePage />} />

          {/* Employee-related routes with HeaderComponent */}
          <Route
            path='/employees'
            element={
              <>
                <HeaderComponent />
                <div className="content-wrap"><ListEmployeeComponent /></div>
                <FooterComponent />
              </>
            }
          />
          <Route
            path='/add-employee'
            element={
              <>
                <HeaderComponent />
                <div className="content-wrap"><EmployeeComponent /></div>
                <FooterComponent />
              </>
            }
          />
          <Route
            path='/edit-employee/:id'
            element={
              <>
                <HeaderComponent />
                <div className="content-wrap"><EmployeeComponent /></div>
                <FooterComponent />
              </>
            }
          />

          {/* Other pages with HeaderComponent */}
          <Route
            path='/about'
            element={
              <>
                <HeaderComponent />
                <div className="content-wrap"><AboutComponent /></div>
                <FooterComponent />
              </>
            }
          />
          <Route
            path='/contact'
            element={
              <>
                <HeaderComponent />
                <div className="content-wrap"><ModernContactComponent /></div>
                <FooterComponent />
              </>
            }
          />
          <Route
            path='/signup'
            element={
              <>
                <HeaderComponent />
                <div className="content-wrap"><SignupComponent /></div>
                <FooterComponent />
              </>
            }
          />

          <Route
            path='/login'
            element={
              <>
                <HeaderComponent />
                <div className="content-wrap"><LoginComponent/></div>
                <FooterComponent />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
