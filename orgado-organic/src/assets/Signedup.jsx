import React, { useEffect, useState } from "react";
import "../assets/style/signedup.css";

function Signedup() {
  const [firstnameup, setfirstnameup] = useState("");
  const [secondnameup, setsecondnameup] = useState("");
  const [emailup, setemailup] = useState("");
  const [numberup, setnumberup] = useState(0);
  const [passwordup, setpasswordup] = useState("");
  const [register, setregister] = useState("");

  useEffect(() => {
    const client = localStorage.getItem("client");

    if (client) {
      setregister(true);
    }
  }, []);

  // register
  const registering = () => {
    if (
      firstnameup === "" ||
      secondnameup === "" ||
      emailup === " " ||
      numberup === " " ||
      passwordup === " " ||
      register === " "
    ) {
      alert("Please enter your values..!");
      return;
    }

    const clientData = {
      firstnameup,
      secondnameup,
      emailup,
      numberup,
      passwordup,
    };
    localStorage.setItem("client", JSON.stringify(clientData));
    setregister("true");
  };

  return (
    <div className="marleft">
      {register ? (
        <> </>
      ) : (
        <>
          <form>
            <div className="gaps">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstnameup}
                  onChange={(e) => setfirstnameup(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Second name"
                  value={secondnameup}
                  onChange={(e) => setsecondnameup(e.target.value)}
                />{" "}
                <br />
              </div>
              <div>
                <input
                  type="Email"
                  placeholder="Enter your Email"
                  value={emailup}
                  onChange={(e) => setemailup(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone number "
                  value={numberup}
                  onChange={(e) => setnumberup(e.target.value)}
                />{" "}
                <br />
              </div>
              <input
                type="password"
                placeholder="Enter your 6 charactor password "
                value={passwordup}
                onChange={(e) => setpasswordup (e.target.value)}
              />
              <select className="inputboxes" id="">
                <option value="Select">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <br />
            </div>
            <div>
              <input style={{ marginLeft: "15px" }} type="checkbox" /> Accept
              the terms and Privacy Policy
            </div>
            <button className="buttt" onClick={registering} routerLink="/">Register Now</button>
            <div className="alre">
              Already Have an Account?{" "}
              <a style={{ color: "black" }} href="/">
                Log In
              </a>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Signedup;
