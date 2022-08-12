import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPrac2 = () => {
  const [users, setUsers] = useState([]);

  const UserList = ({ users }) => {
    return (
      <div>
        {users.map((user) => {
          return <div key={user.key}>{user.name}</div>;
        })}
      </div>
    );
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);
  return <UserList users={users[0]} />;
};

export default AxiosPrac2;
