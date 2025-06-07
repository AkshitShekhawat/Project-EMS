import './App.css';
import SignupComponent from './Components/SignupComponent';
import AboutComponent from './Components/AboutComponent';
import EmployeeComponent from './Components/EmployeeComponent';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
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
              <ListEmployeeComponent />
              <FooterComponent />
            </>
          }
        />
        <Route
          path='/add-employee'
          element={
            <>
              <HeaderComponent />
              <EmployeeComponent />
              <FooterComponent />
            </>
          }
        />
        <Route
          path='/edit-employee/:id'
          element={
            <>
              <HeaderComponent />
              <EmployeeComponent />
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
              <AboutComponent />
              <FooterComponent />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <>
              <HeaderComponent />
              <SignupComponent />
              <FooterComponent />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
