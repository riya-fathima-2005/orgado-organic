import { useNavigate } from "react-router-dom";
import "../assets/style/Signedin.css";
import React, { useEffect, useState } from "react";

function Signedin() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [login, setlogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setlogin(true);
      const parsedUser = JSON.parse(user);
      setname(parsedUser.name);
      navigate("/");
    }
  }, []);

  // login

  const logedin = () => {
    if (name === "" || password === "") {
      alert("Please enter your user name and password");

      
      return;
    }

    const userData = {
      name,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    setlogin("true");
  };

  // logout

  //   const logout = () => {
  //     localStorage.removeItem("user");
  //     setname("");
  //     setpassword("");
  //     setlogin(false);
  //   };

  return (
    <div>
      {login ? (
        <></>
      ) : (
        <>
          {" "}
          <form className="formone">
            <input
              type="text"
              className="inputsignedin"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your Email ID"
            />
            <br />
            <input
              type="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="inputsignedin"
              placeholder=" Password  (Atleast 6 charactors)"
            />
            <br />
            <input
              type="checkbox"
              style={{ marginLeft: "450px", marginTop: "20px" }}
            />
            <span>Remember me</span>
            <br />



            <button className="bt" onClick={logedin}  > <a href="/"  className="deco" >
              Submit </a>
            </button>
     




            <br />
            <div style={{ marginLeft: "450px", marginTop: "20px" }}>
              Not registered? <a style={{color:"black"}} href="/signedup">Signed Up</a>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Signedin;
