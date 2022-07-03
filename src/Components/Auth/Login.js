import React, { useState } from "react";
import logo from "../../Images/JohFun3.jpg";
import googleIcon from "../../Images/google-icon.png";
import { auth } from "../../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  // const googleRegister = (e) => {
  //   e.preventDefault();
  //   auth.signInWithPopup(provider)then(result => {

  //   })

  // }

  return (
    <div className="h-screen pt-24 flex flex-col items-center">
      {/* <img className="w-52" src={logo} alt="Logo" /> */}
      <main className="border border-pink-600 w-2/5 mx-auto rounded-sm mt-6 p-4">
        <form>
          <h1 className="text-2xl font-semibold">Sign-In</h1>
          <label>Email Address</label> <br />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mt-1 pl-2 focus:outline-none w-full pr-2 border-2 border-pink-400"
          />
          <br />
          <br />
          <label>Password</label> <br />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 mt-1 pl-2 focus:outline-none w-full pr-2 border-2 border-pink-400"
          />
        </form>

        <button
          onClick={login}
          className="bg-pink-500 text-c mt-8 mb-4 w-full p-2 rounded-sm font-bold hover:bg-pink-600"
        >
          {" "}
          Login{" "}
        </button>
        <p className="text-sm mb-2">
          By signing-in you agree to the JohFun Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookie Notice and our Interest-Based Ads
          Notice
        </p>

        <button
          onClick={register}
          className="border border-pink-500 text-c  w-full p-2 rounded-sm font-bold hover:bg-pink-600 duration-150"
        >
          {" "}
          Create Account{" "}
        </button>

        <span
          onClick={""}
          className="flex items-center justify-center text-white mx-auto font-bold w-full bg-blue-500 hover:bg-blue-600  rounded-sm cursor-pointer mt-4"
        >
          <img src={googleIcon} className="w-12" alt="" />
          <h3 className="text-white ">Continue with Google </h3>
        </span>
      </main>
    </div>
  );
};

export default Login;
