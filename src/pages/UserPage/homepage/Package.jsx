import React from "react";
import { FaClock, FaMapMarkerAlt, FaCar, FaHotel, FaTag } from "react-icons/fa";
import imgPackage from "../../../assets/img/img-package.png";
import trip1 from "../../../assets/img/trip1.jpg";
import trip3 from "../../../assets/img/trip3.jpg";
import { Link } from "react-router-dom";

const Package = () => {
  return (
    <section className="package-hmpg text-center mt-4">
      <div className="container">
        <h1 className="txt-choice">
          Choice Your <span className="txt-pkg">Package</span>
        </h1>
        <div className="row mt-4 row-margin">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 card-spacing">
            <div className="card">
              <img src={imgPackage} className="card-img-top" alt="Yogyakarta Cultural Tour" />
              <div className="card-bodypckg">
                <h5 className="card-title mt-2">Yogyakarta Cultural Tour</h5>
                <hr className="line-title mt-2" />
                <ul className="list-unstyled text-start mt-2 mx-4">
                  <li>
                    <FaClock className="color-ikon mx-2" size={20} /> 3 Days
                  </li>
                  <li>
                    <FaMapMarkerAlt className="color-ikon mx-2" size={20} /> 5 Destinations
                  </li>
                  <li>
                    <FaCar className="color-ikon mx-2" size={20} /> Include
                  </li>
                  <li>
                    <FaHotel className="color-ikon mx-2" size={20} /> 4 Star
                  </li>
                  <li>
                    <FaTag className="color-ikon mx-2" size={20} /> Rp. 2.000.000
                  </li>
                </ul>
                <hr className="line-list mb-2" />
                <div className="d-flex justify-content-between ms-2 me-2">
                  <Link to={`/trip-tour/prambanan-temple`} className="btn-pkg1 mt-2 mb-3">
                    Choose
                  </Link>
                  <a href="#" className="btn-pkg2 mt-2 mb-3">
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 card-spacing">
            <div className="card">
              <img src={trip1} className="card-img-top" alt="Yogyakarta Adventure" />
              <div className="card-bodypckg">
                <h5 className="card-title mt-2">Yogyakarta Adventure</h5>
                <hr className="line-title mt-2" />
                <ul className="list-unstyled text-start mt-2 mx-4">
                  <li>
                    <FaClock className="color-ikon mx-2" size={20} /> 5 Days
                  </li>
                  <li>
                    <FaMapMarkerAlt className="color-ikon mx-2" size={20} /> 15 Destinations
                  </li>
                  <li>
                    <FaCar className="color-ikon mx-2" size={20} /> Include
                  </li>
                  <li>
                    <FaHotel className="color-ikon mx-2" size={20} /> 3 Star
                  </li>
                  <li>
                    <FaTag className="color-ikon mx-2" size={20} /> Rp. 550.000
                  </li>
                </ul>
                <hr className="line-list mb-2" />
                <div className="d-flex justify-content-between ms-2 me-2">
                  <Link to={`/trip-tour/prambanan-temple`} className="btn-pkg1 mt-2 mb-3">
                    Choose
                  </Link>
                  <a href="#" className="btn-pkg2 mt-2 mb-3">
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 card-spacing">
            <div className="card">
              <img src={trip3} className="card-img-top" alt="Family Tour" />
              <div className="card-bodypckg">
                <h5 className="card-title mt-2">Family Tour</h5>
                <hr className="line-title mt-2" />
                <ul className="list-unstyled text-start mt-2 mx-4">
                  <li>
                    <FaClock className="color-ikon mx-2" size={20} /> 7 Days
                  </li>
                  <li>
                    <FaMapMarkerAlt className="color-ikon mx-2" size={20} /> 25 Destinations
                  </li>
                  <li>
                    <FaCar className="color-ikon mx-2" size={20} /> Include
                  </li>
                  <li>
                    <FaHotel className="color-ikon mx-2" size={20} /> 5 Star
                  </li>
                  <li>
                    <FaTag className="color-ikon mx-2" size={20} /> Rp. 4.500.000
                  </li>
                </ul>
                <hr className="line-list mb-2" />
                <div className="d-flex justify-content-between ms-2 me-2">
                  <Link to={`/trip-tour/prambanan-temple`} className="btn-pkg1 mt-2 mb-3">
                    Choose
                  </Link>
                  <a href="#" className="btn-pkg2 mt-2 mb-3">
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
