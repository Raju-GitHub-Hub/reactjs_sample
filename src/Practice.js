import React from 'react';




 function Pracitice() {
    const arr = ["React js", "Express js", "Angular js"]
  return (
    <div>
      {
        arr.map((value,index) => 
        <li key={index}>{value}</li>
        )
      }
    </div>
  )
}

export default Pracitice;
