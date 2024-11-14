// import React from 'react'

function pracitice() {
  // const    name = ['Raju', 'Sneha', 'Snaraju', 'Neelarapu', 'Nagaraju']
  const arr = [10,20,30,40,50,60,70]
  const filtered = arr.filter(item => item>40)
  return (
    <div>
      {
        filtered.map(item =><li> {item} </li>)
      }
    </div>
  )
}

export default pracitice;
