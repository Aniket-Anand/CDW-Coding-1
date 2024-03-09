import React from 'react';
import './userList.css';

function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.email} className="user">
          <h3>{user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
