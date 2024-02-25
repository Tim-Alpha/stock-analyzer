import React from "react";

function SignUp() {
  return (
    <form className="modal-content" action="/action_page.php">
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
        
        <label>
          <input type="checkbox" checked="checked" name="remember" style={{marginBottom: "15px"}} /> Remember me
        </label>
        <button style={{color: "dodgerblue", background: "none", border: "none", cursor: "pointer"}}>Terms & Privacy</button>

        <div className="clearfix">
          <button type="button" className="cancelbtn">Cancel</button>
          <button type="submit" className="signupbtn">Sign Up</button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;