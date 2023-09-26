import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = ({setIsAuthenticated,setClient}) => {
    const[userName,setUserName] = useState("")
    const[passWord,setPassWord] = useState("")
    
    
    let navigate = useNavigate()
    
    const HandleLogin = (userName,passWord)=>{
        let clients = undefined
        const url = "http://localhost:3001/clients"
        fetch(url).then((result)=> {return result.json()}).then((data)=>{clients = data
            const client = clients.filter(client => client.userName === userName && client.passWord ===passWord)[0]
            setClient(client)
            if (client) {
                setIsAuthenticated(true)
                return navigate("/homepage")   
            }else{
                return alert("user name and password dosen't match")
            }
        })
    }
    
    return ( 
        <div className="login">
            <h1 className="login-title">Login</h1>
            <div >
                {}
                <input className="input-field" type="text" name="username" placeholder="Enter here a user name " onChange={event => setUserName(event.target.value)}/>
            </div>
            <div >
                <input className="input-field" type="text" name="password" placeholder="Enter here a password " onChange={e => setPassWord(e.target.value)}/>
            </div>
            <h3><button className="login-button" onClick={() => HandleLogin(userName,passWord)}>sign in</button><br></br><br></br></h3>
            <button>sign up</button>
        </div>
     );
}
 
export default LoginPage;






















        // <form action="submit" className="login-form" onSubmit={HandleSubmit}>
        // <form className="login-form" >
        //     <div>

        //     <input type="text" name="user-name" value={userName} onChange={e => setUserName(e.target.value)}/>
        //     <input type="text" name="pass-word" value={passWord} onChange={e => setPassWord(e.target.value)}/>
        //     {/* <button className="login-button" onClick={() => HandleSubmit(userName,passWord)}>Login</button> */}
        //     <input type="submit" className="login-button" value="login"/>   
        //     {/* <Redirect to="/" state={{from: location}}/> */}
        //     </div>
        // </form>




                    /* <input type="submit" className="login-button" value="login"/>    */
            /* <Navigate to="/" state={{from: location}}/> */
            /* <form>
                <h1>Login</h1>
                <div className="login-content">
                    <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="nope"/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" autoComplete="new-password"/>
                    </div>
                    <a href="#" className="link">Forgot Your Password?</a>
                </div>
                <div className="action">
                    <button>Register</button>
                    <button>Sign in</button>
                </div>
            </form> */