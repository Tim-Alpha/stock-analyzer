import React, { useState } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the form data
    const formData = {
      FirstName: firstName,
      LastName: lastName,
      Username: username,
      Email: email,
      Password: password
    };

    // Send the form data to the server
    fetch("http://localhost:5000/v2/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log("User signed up successfully!");
        // Optionally, you can redirect the user or perform other actions
      } else {
        console.error("Failed to sign up user");
      }
    })
    .catch(error => {
      console.error("Error signing up user:", error);
    });

    // Clear the form fields after submission
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className="modal-content" onSubmit={handleSubmit}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="firstName"><b>First Name</b></label>
        <input type="text" placeholder="Enter First Name" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label htmlFor="lastName"><b>Last Name</b></label>
        <input type="text" placeholder="Enter Last Name" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label htmlFor="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label htmlFor="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="signupbtn">Sign Up</button>
      </div>
    </form>
  );
}

export default SignUp;
