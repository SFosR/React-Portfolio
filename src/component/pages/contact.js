import React from "react";

function Contact() {
    return (
      <div className="contact-info">
        
        <form className="px-4 pt-3 vh-100 was-validated">

          <div className="form-group my-3">
            <label for="nameInput">Name:</label>
            <input type="text" class="form-control mt-1" id="nameInput" aria-describedby="emailHelp" placeholder="Enter Name" required></input>
          </div>

          <div className="form-group my-3">
            <label for="userEmail">Email:</label>
            <input type="email" class="form-control mt-1" id="userEmail" aria-describedby="emailHelp" placeholder="Enter Email" required></input>
          </div>

          <div className="form-group my-3">
            <label for="userMessage">Message:</label>
            <textarea type="textarea" class="form-control mt-1" id="userMessage" placeholder="Enter Message here" required></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>

        </form>
      </div>
    );
  }
  
  export default Contact;
  