import React, { useContext } from "react";
import "./Signup.scss";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../feature/stateContext";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

localStorage.setItem("ini",JSON.stringify([]))
const Signup = () => {
    const {state,dispatch}=useContext(stateContext);
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "september",
    "October",
    "November",
    "December",
  ];
  // let year=[1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];
  let year: any = [];
  let date = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (let i = 0; i < 50; i++) {
    let date = new Date();
    let years = date.getFullYear();
    year.push(years - i);
  }
  const initial:any=localStorage.getItem("log") || localStorage.getItem("ini");
  const user=JSON.parse(initial);
  console.log(user)
  const [signName, setLname] = useState("");
  const [signSname, setSname] = useState("");
  const [signEmail, setEname] = useState("");
  const [signPass, setPname] = useState("");
  const [signgender, setGender] = useState("");
  const [signDate, setDate] = useState("");
  const [signmonth, setMonth] = useState("");
  const [signYear, setYear] = useState("");

  const [requred, setRequred] = useState(false);

  const nava = useNavigate();

  const loginInput = (rk: any) => {
    if (rk.target.name === "name") {
      setLname(rk.target.value);
    } else if (rk.target.name === "sname") {
      setSname(rk.target.value);
    } else if (rk.target.name === "email") {
      setEname(rk.target.value);
    } else {
      setPname(rk.target.value);
    }
  };
  const logingenders = (rk: any) => {
    setGender(rk.target.value);
  };

  const dateFun = (rk: any) => {
    setDate(rk.target.value);
    console.log(rk.target.value);
  };
  const monthFun = (rk: any) => {
    setMonth(rk.target.value);
    console.log(rk.target.value);
  };
  function yearFun(rk: any) {
    setYear(rk.target.value);
    console.log(rk.target.value);
  }
  const CreateId=()=>{
    return Math.floor(Math.random()*100000);
}
  const formSubmit = (form: any) => {
    form.preventDefault();

    const logins: any = {
      id:CreateId(),
      name: signName,
      Sname: signSname,
      email: signEmail,
      passW: signPass,
      gender: signgender,
      date: signDate,
      month: signmonth,
      year: signYear,
    };

    if (
      signName === "" ||
      signSname === "" ||
      signEmail === "" ||
      signPass === "" 
      // signgender === "" ||
      // signDate === "" ||
      // signmonth === "" ||
      // signYear === ""
    ) {
      setRequred(true);

    } 
   else if(user.some((e:any)=>e.email===signEmail)){
      alert("sorry")
   }
    else {
        user.push(logins);
      nava("/");
      localStorage.setItem("log",JSON.stringify(user))
    }
    dispatch({type:"PUSH",payload:user})

  };

  return (
    <div className="container">
      <div className="img">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" ></img>
      </div>
      <form onSubmit={formSubmit}>
        <section id="login-page">
          <div className="form">
            <div className="head">
              <h1>Sign Up</h1>
              <p>It's quick and easy</p>
            </div>
            <br />
            <hr />
            <div className="row just">
              <div className="col-6">
                <div className="name">
                  <TextField
                    id="outlined-basic"
                    label="First name"
                    variant="outlined"
                    name="name"
                    onChange={loginInput}
                    value={signName}
                  />
                </div>
                {signName === "" && requred && (
                  <div className="requred"><span><PriorityHighIcon></PriorityHighIcon></span> Please inlude Name</div>
                )}
              </div>
              <div className="col-6">
                <div className="name">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    label="Surname"
                    variant="outlined"
                    name="sname"
                    onChange={loginInput}
                    value={signSname}
                  />
                </div>
                {signSname === "" && requred && (
                  <div className="requred"><span><PriorityHighIcon></PriorityHighIcon></span> Please inlude Sname </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <TextField
                type="email"
                  id="outlined-basic"
                  label="Mobile number or email address"
                  variant="outlined"
                  name="email"
                  onChange={loginInput}
                  value={signEmail}
                />
                {signEmail === "" && requred && (
                  <div className="requred"><span><PriorityHighIcon></PriorityHighIcon></span> Please inlude Email</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <TextField
                  id="outlined-basic"
                  type="password"
                  label="Password"
                  variant="outlined"
                  name="pass"
                  onChange={loginInput}
                  value={signPass}
                />
                {signPass === "" && requred && (
                  <div className="requred"><span><PriorityHighIcon></PriorityHighIcon></span> Please inlude Password </div>
                )}
              </div>
            </div>
            <p>Date of birth</p>
            <div className="row just">
              <div className="col-4">
                <select className="select" onChange={dateFun}>
                  {date.map((e: any) => (
                    <option value={e}>{e}</option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <select className="select" onChange={monthFun}>
                  {month.map((e: any) => (
                    <option value={e}>{e}</option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <select className="select" onChange={yearFun}>
                  {year.map((e: any) => (
                    <option value={e}>{e}</option>
                  ))}
                </select>
              </div>
            </div>
            <p>Gender</p>
            <div className="row just">
              <div className="col-4">
                <div className="boy">
                  <label>Boy</label>
                  <input
                    type="radio"
                    value="boy"
                    onChange={logingenders}
                    name="gender"
                    id="c"
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="boy">
                  <label>Girl</label>
                  <input
                    type="radio"
                    value="girl"
                    name="gender"
                    id="c"
                    onChange={logingenders}
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="boy">
                  <label>Custom</label>
                  <input
                    type="radio"
                    value="Custom"
                    name="gender"
                    id="c"
                    onChange={logingenders}
                  ></input>
                </div>
              </div>
            </div>
            <p>
              People who use our service may have uploaded your contact
              information to Facebook. Learn more.<br></br>
              clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy.
            </p>
            <div className="row justtwo">
              <button type="submit">Sing Up</button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Signup;
