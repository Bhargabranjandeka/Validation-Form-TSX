import React, { useState } from "react";
import Submitted from "./Submitted";

export default function Form() {
  const [error, setError] = useState(false);
  const [errorMsg, setErrormsg] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [password, setpassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issubmitted, setSubmitted] = useState(false);

  const handleConfirm = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      password !== confirmpassword &&
      password.length >= 8 &&
      confirmpassword.length >= 8
    ) {
      setError(true);
      setErrormsg("password does not match");
    } else {
      setName("");
      setEmail("");
      setpassword("");
      setConfirmpassword("");
      setErrormsg("");
      setSubmitted(true);
    }
  };

  if (issubmitted) return <Submitted />;

  return (
    <form onSubmit={(e) => handleConfirm(e)} className="wrapper">
      <div className="input">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="^[a-zA-Z\s]+$"
          title="Please include letters only"
          className="input-element"
        />
      </div>

      <div className="input">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-element"
        />
      </div>

      <div className="input">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          required
          type="text"
          value={password}
          minLength={8}
          onChange={(e) => setpassword(e.target.value)}
          className="input-element"
        />
      </div>

      <div className="input">
        <label htmlFor="password-confirm">Confirm Password</label>
        <input
          name="password-confirm"
          required
          type="text"
          minLength={8}
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          className="input-element"
        />
      </div>
      {error && <p className="errormsg">{errorMsg}</p>}
      <button className="btn">Submit</button>
    </form>
  );
}
