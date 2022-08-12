import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPrac3 = () => {
  const [data, setData] = useState(null);
  const ToString = ({ users }) => {
    return <div>{users && <div>{JSON.stringify(users, null, 2)}</div>}</div>;
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setData(response.data);
    });
  }, []);

  return <ToString users={data}></ToString>;
};

export default AxiosPrac3;
