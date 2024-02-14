import { useState, useEffect } from 'react';
// import "../assets/css/user.css";
import { userList } from '../services/user';
// import instance from '../services/axios';
import { Link } from 'react-router-dom';
// import AdminNav from '../components/AdminNav';
// import CustomSidebar from '../components/CustomSidebar';
import { deleteuser } from '../services/user';
import  AdminNavbar from '../components/Adminnav';
import '../assets/css/userlist.css'

// import { Link } from "react-router-dom"
const GetUserDetails = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    userList()
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = (userId) => {
    deleteuser(userId)
    .then(response => {
        console.log(response.data.data+"user deleted successfully");
        fetchUsers(); 
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
    
  };

  return (
   
    
    <>
      <header>
          <AdminNavbar/>
      </header>
     <div className="profile created-by-anniedotexe" style={{marginLeft:"-10px"}}>
          <div className="profile-pic">
            <div className="header-color" />
            <img
              src="https://anniedotexe.github.io/hosted-assets/dailyui/dailyui006/profile-pic.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="title">
            <h1>Eloise</h1>
            
          </div>
          <div className="description" >
          <div className="item" >
            <i style={{marginLeft:"-150px",marginTop:"40px"}} className="fa fa-home"/>
                <h5 style={{marginTop:"-20px"}}><Link to='/dashboard'>Dashboard</Link></h5>
                <i className="fa fa-users" style={{marginLeft:"-150px",marginTop:"40px"}} ></i> 
                <h5 style={{marginTop:"20px"}}><Link to='/userlist'>Users</Link></h5>
                <i className="fa fa-comments" style={{marginLeft:"-150px",marginTop:"40px"}} />

                <h5 style={{marginTop:"20px"}}>Contact info</h5>
                <i className="fa fa-book" style={{marginLeft:"-150px",marginTop:"40px"}} />
                <h5 style={{marginTop:"20px"}}>Records</h5>
                <i className="fa fa-bar-chart" style={{marginLeft:"-150px",marginTop:"40px"}} />
                <i className="fa fa-folder"  ></i>
                <h5 style={{marginTop:"20px"}}>Invoices</h5>
               
          </div>
          <div className="item"></div>
          </div>
         
          
        </div>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        {/* <div style={{ width: '250px', flexShrink: 0 }}>
            <CustomSidebar style={{height: '100%'}} />
        </div> */}
    <div className="user-details-container" style={{marginLeft:"600px",marginTop:"-800px"}}>
      <h1 className="user-list-title">User Details</h1>
      <table className="user-table">
        <thead className='user-table-head'>
          <tr>
            <th className="user-id-header">User ID</th>
            <th className="username-header">Username</th>
            <th className="email-header">Email</th>
            <th className="role-header">Role</th>
            <th className="delete-header">Actions</th> {/* Added delete action header */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            // Check if user's role is not 'ADMIN' before rendering
            user.role !== 'ADMIN' && (
              <tr key={user.id} className="user-row">
                <td className="user-id">{user.id}</td>
                <td className="username">{user.name}</td>
                <td className="email">{user.email}</td>
                <td className="role">{user.role}</td>
                <td className="delete-action">
                  <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button> 
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
</>
  );
};

export default GetUserDetails;