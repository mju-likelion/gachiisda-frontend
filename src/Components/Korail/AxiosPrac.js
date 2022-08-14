import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosPrac() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://15.164.225.225:3300/api/korail/stations')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);
  // return (
  //   <div>
  //     {/* <ul>
  //       {data.data[0].map((user) => (
  //         <li key={user.id}>{user.id}</li>
  //       ))}
  //     </ul> */}
  //     {data}
  //   </div>
  // );

  return <div>{data && <div>{JSON.stringify(data, null, 5)}</div>}</div>;
}

export default AxiosPrac;
