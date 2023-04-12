import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarBoot from './component/navbar';
import Login from './component/login';
import UserRegistration from './component/userRegistration';
import OrganisationRegister from './component/organisationRegister';
import AdminHome from './component/adminHome';
import AddPost from './component/addPost';
function App() {
  return (
    <div className="App">
      <NavbarBoot/>
      <Router>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/user/registration" element={<UserRegistration/>}/>
        <Route path="/admin/home" element={<AdminHome/>}/>
        <Route path="/admin/organisation/register" element={<OrganisationRegister/>}/>
        <Route path="/organisation/id/add/post" element={<AddPost/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
