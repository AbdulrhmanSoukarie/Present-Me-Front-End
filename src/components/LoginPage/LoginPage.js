import React from "react";
import "./LoginPage.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";



export const LoginPage = () => {
  

  return (
    <div>
      
      <form >
        <div className="logincontainer">
          <div className="logincontainer1">
            <h2>Login Page</h2>
            <div className="loginicon">
              <PersonIcon className="loginiconz" />
              <input
                type="email"
                placeholder="Enter your email"
                className="loginemail"
                name="adminemail"
                id="adminemail"
                
               
                required
              />
            </div>
            <div className="loginicon">
              <LockIcon className="loginiconz" />
              <input
                type="Password"
                placeholder="Enter your password"
                className="loginpassword"
                name="adminpassword"
                id="adminpassword"
                
                
                required
              />
            </div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};
