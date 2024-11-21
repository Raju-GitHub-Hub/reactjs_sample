// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import { response } from 'express';
import { Link } from 'react-router-dom';

const Home = () => {
  // const [data, setData] = useState([]);

// useEffect(()=>{
//   axios.get("https://jsonplaceholder.typicode.com/todos").then(
//     response => setData(response.data)
//   )
// },[])

  return (
    <div>
      <center>
      <ul>
        <Link to="/"><li> Home </li></Link>
        <Link to="/Navbar"><li> Navbar </li></Link>
        <Link to="/footer"><li> Footer </li></Link>
        <Link to="/header" ><li>Header</li></Link>
      </ul>
       {/* {data.map(item => <li key={item.id} >{item.title}</li> )} */}
       
      </center>
    </div>
  )
}

// laboriosam mollitia et enim quasi adipisci quia provident illum

export default Home;
