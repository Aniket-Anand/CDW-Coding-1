import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import Card from './components/cards/Card';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  const [administrators, setAdministrators] = useState([]);

  useEffect(() => {
    axios.get('https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098')
      .then(response => {
        const data = response.data;
        const admins = data.filter(member => member.role === 'admin');
        const members = data.filter(member => member.role === 'member');
        setAdministrators(admins);
        setMembers(members);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h2 className="heading">Administrators</h2>
        <div className="card-container">
          {administrators.map(member => (
            <Card key={member.email} member={member} />
          ))}
        </div>

        <h2 className='heading'>Members</h2>
        <div className="card-container">
          {members.map(member => (
            <Card key={member.email} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
