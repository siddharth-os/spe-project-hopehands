import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarBoot from './component/navbar';
import Login from './component/login';
import UserRegistration from './component/userRegistration';
import OrganisationRegister from './component/organisationRegister';
import AdminHome from './component/adminHome';
import AddPost from './component/addPost';
import OrganInfoCard from './component/organInfoCard';
import Footer from './component/footer';
import OrganHome from './component/organHome';
import OrganPost from './component/organPost';
import UserHome from './component/userHome';
import Logout from './component/logout';
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
        <Route path="/admin/organisation/:id" element={<OrganInfoCard/>}/>
        <Route path="/organisation/home" element={<OrganHome/>}/>
        <Route path="/organisation/add/post" element={<AddPost/>}/>
        <Route path="/organisation/post/:id" element={<OrganPost/>}/>
        <Route path="/user/home" element={<UserHome/>}/>
        <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </Router>
      <Footer/> 
    </div>
  );
}

export default App;
