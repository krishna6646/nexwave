import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { a, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './main.css';
import Home from './Home';
//import Login from './Login';

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const toggleModal =()=>{
    setModal(!modal)
  }
  const navigateToHome = () => {
    // Use the navigate function here
    navigate("/home");
  };
  const navigate = useNavigate();
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NexWave
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" to="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" to="#">
                  Pricing
                </a>
              </li>
            </ul>
            <span className="d-flex">

              <button
                data-baseweb="button"
                aria-label="Sign up to ride, drive, and get delivery"
                className="css-ljsRJZ"
                onClick={toggleModal}
              >
                <a to="/login">Login</a>
              </button>

              <button
                data-baseweb="button"
                aria-label="Sign up to ride, drive, and get delivery"
                className="css-ljsRJZ"
              >
                Sign up
              </button>
            </span>
          </div>
        </div>
      </nav>

    </div>

    {modal && <div >
      <div className='overlay'>
      <div className="modal-container " >
        <section class="h-100 gradient-form" style={{ color: "#eee" }}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-xl-10">
                <div class="card rounded-3 text-black">
                  <div class="row g-0">
                    <div class="col-lg-6">
                      <div class="card-body p-md-5 mx-md-4">

                        <div class="text-center">
                          
                          <h4 class="mt-1 mb-5 pb-1">Welcome To NexWave</h4>
                        </div>

                        <form>
                          <p>Please login to your account</p>

                          <div class="form-outline mb-4">
                            <input type="email" id="form2Example11" class="form-control"
                              placeholder="Phone number or email address" />
                            <label class="form-label" for="form2Example11">Username</label>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="password" id="form2Example22" class="form-control" />
                            <label class="form-label" for="form2Example22">Password</label>
                          </div>

                          <div class="text-center pt-1 mb-5 pb-1">
                            <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={navigateToHome}>Log
                              in</button>

                            <a class="text-muted" href="#!">Forgot password?</a>
                          </div>

                          <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Don't have an account?</p>
                            <button type="button" class="btn btn-outline-danger">Create new</button>
                          </div>

                        </form>

                      </div>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 class="mb-4">We are more than just a company</h4>
                        <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      </div>
    </div>}
    
   </>

  );
}
