import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosPrac() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://13.125.225.34:3300/api/korail/stations')
      .then((response) => {
        setData(response.data);
      });
  }, []);
  // return (
  //   <div>
  //     <ul>
  //       {users.map((user) => (
  //         <li key={user.id}>{user.id}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      {data && <div>{JSON.stringify(data.data[0].station_name, null, 5)}</div>}
    </div>
  );
}

export default AxiosPrac;
