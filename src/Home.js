import React, { useState } from 'react'

const Home = () => {
    const [data, setData] = useState({
        usdrname: '',
        password: '',
    })
    const {username,password} = data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(data)
    }
    return (
        <div>
            <center>
                <h1>Sample Login Form</h1> <br/>
                <form>
                    <input type="text" name="username" value={username} onChange={changeHandler} />  <br/>
                    <input type='password' name='password' value={password} onChange={changeHandler} /><br/>
                    <input type='submit' name='submit' onSubmit={submitHandler} />
                </form>
            </center>
        </div>
    )
}

export default Home
