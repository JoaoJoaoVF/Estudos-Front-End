import { useContext } from "react";
// import React, { Component } from 'react';
import AuthContext, {AuthProvider} from "../context/AuthContext";
// import { AuthProvider } from "../context/AuthContext";

/*
class LoginPage extends React.Component {
  // const {loginUser}  = useContext(AuthContext);
  const current_context  = useContext(AuthContext);
  // const loginUser  = useContext(AuthProvider);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    // username.length > 0 && AuthProvider.loginUser(username.toString(), password.toString());
    username.length > 0 && loginUser(username.toString(), password.toString());
  };


  console.log(this.context);

  render() {return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  )};
};
*/

// /*
const LoginPage = () => {
  

  return (
    <AuthProvider>
      <LoginPageCore />
    </AuthProvider>
  );
};
// */
export default LoginPage;

// /*
export const LoginPageCore = () => {
  console.log(AuthContext)
  const {loginUser}  = useContext(AuthContext);
  // const current_context  = useContext(AuthContext);
  // console.log(current_context)
  // const loginUser  = useContext(AuthProvider);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    // username.length > 0 && AuthProvider.loginUser(username.toString(), password.toString());
    username.length > 0 && loginUser(username.toString(), password.toString());
  };



  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};
// */



