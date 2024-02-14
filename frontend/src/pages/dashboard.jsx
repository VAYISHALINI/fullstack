import "../assets/css/dashboard.css"
// import dash1 from "../assets/images/dash1.jpg"
import { CgAlbum } from "react-icons/cg"
import { FiCheckCircle } from "react-icons/fi"
import { FiBookOpen } from "react-icons/fi"
import { FiAward } from "react-icons/fi"
import { Link } from "react-router-dom"
// import { BarChart } from '@mui/x-charts/BarChart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Paper } from '@mui/material';

// import  React from 'react';
// import dashtext from "../assets/images/dashtext.png"

// const style = {
//   width: 120,
//   display: 'inline-block',
//   marginRight: 10
// };
// import { Table, Button } from 'rsuite';
// import { mockUsers } from './mock';

// const { Column, HeaderCell, Cell } = Table;
// const data = mockUsers(20);

const Dashboard=()=>{
  const data = [
    { course: 'Course A', enrollmentCount: 50 },
    { course: 'Course B', enrollmentCount: 80 },
    { course: 'Course C', enrollmentCount: 30 },
    { course: 'Course D', enrollmentCount: 60 },
  ];
    return(
        <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
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
                <h5 style={{marginTop:"-20px"}}>Dashboard</h5>
                <i className="fa fa-users" style={{marginLeft:"-150px",marginTop:"40px"}} ></i> 
                <h5 style={{marginTop:"-20px"}}><Link to='/userlist'>Users</Link></h5>
                <i className="fa fa-comments" style={{marginLeft:"-150px",marginTop:"40px"}} />

                <h5 style={{marginTop:"-20px"}}>Contact info</h5>
                <i className="fa fa-book" style={{marginLeft:"-150px",marginTop:"40px"}} />
                <h5 style={{marginTop:"-20px"}}>Records</h5>
                <i className="fa fa-bar-chart" style={{marginLeft:"-150px",marginTop:"40px"}} />
                <i className="fa fa-folder"  ></i>
                <h5 style={{marginTop:"-20px"}}>Invoices</h5>
               
          </div>
          <div className="item"></div>
          </div>
         
          
        </div>
        {/* <i style={{marginLeft:"100px"}} className="fa fa-home"/> */}
          <h3 className="dash" style={{marginTop:"-700px",marginLeft:"400px"}}>Welcome to your Dashboard !!</h3>
          {/* <img style={{marginTop:"-1400px",marginLeft:"400px"}}src={dashtext}></img> */}
          <div className="container">
     
      <main>
       
        <section className="card__wrapper" >
          <div className="card" >
          {/* <img src={dash1} style={{width:"50px",
    height: "46px",
    // border-radius: 50%;
    overflow:"hidden"}}></img> */}
    <CgAlbum  style={{width:"60px",height:"50px",overflow:"hidden",marginLeft:"-100px"}}/>
            <h3 style={{marginLeft:"50px"}}>10,000</h3>
            <h5>students enrolled</h5>
          </div>
          <div className="card">
          <FiCheckCircle  style={{width:"60px",height:"50px",overflow:"hidden",marginLeft:"-100px"}}/>
            <h3 style={{marginLeft:"50px"}}>3000</h3>
            <h5>Institutions</h5>
          </div>
          <div className="card">
          <FiAward style={{width:"60px",height:"50px",overflow:"hidden",marginLeft:"-100px"}}/>
            <h3 style={{marginLeft:"50px"}}>30,000</h3>
            <h5>Courses</h5>
          </div>
          <div className="card">
          <FiBookOpen style={{width:"60px",height:"50px",overflow:"hidden",marginLeft:"-100px"}}/>

            <h3 style={{marginLeft:"50px"}}>8000</h3>
            <h5>Enrolled Courses</h5>
          </div>
        </section>
      </main>
    </div>
    <></>
   <br></br><br></br>
    <Paper elevation={0.3} style={{ padding: '20px', marginBottom: '20px' ,marginLeft:'24%',width:"100%"}}>
      <Typography variant="h6" gutterBottom>
        Enrollment Statistics Bar Chart
      </Typography>
      <ResponsiveContainer width="50%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 70, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="course" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="enrollmentCount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
   

   {/* <div className="tab">
   <Table
      height={400}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={60} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={150}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={150}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={100}>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey="gender" />
      </Column>

      <Column width={100}>
        <HeaderCell>Age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column width={150}>
        <HeaderCell>Postcode</HeaderCell>
        <Cell dataKey="postcode" />
      </Column>

      <Column width={300}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>

        <Cell style={{ padding: '6px' }}>
          {rowData => (
            <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
              Edit
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
   </div> */}
      </>
      
    );
}

export default Dashboard;