import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";

import React from "react";
import profileImage from "../../../assets/img/profil.jpg";
import "../../../styles/profile.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <section className="info" style={{ marginTop: "150px" }}>
        <div className="Information mt-5">
          <div className="row">
            <div className="poto col-md-4 text-center">
              <img src={profileImage} alt="Profile Picture" className="rounded-circle" width="150" style={{ borderRadius: "0px !important" }} />
              <h5 className="mt-3">Aulia Gaming</h5>
            </div>
            <div className="col-md-8">
              <div className="mb-4">
                <div className="card-body">
                  <h5 className="card-title">Personal Information</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input type="text" className="form-control" id="name" defaultValue="Aulia Gaming" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dob" className="form-label">
                        Date of Birth
                      </label>
                      <input type="text" className="form-control" id="dob" defaultValue="2002-12-17" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input type="text" className="form-control" id="phone" defaultValue="081234567898" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </form>
                </div>
              </div>
              <div className="">
                <div className="card-body">
                  <h5 className="card-title">Security</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input type="email" className="form-control" id="email" defaultValue="aulingming@gmail.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input type="text" className="form-control" id="password" defaultValue="********" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input type="text" className="form-control" id="confirmPassword" defaultValue="********" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
