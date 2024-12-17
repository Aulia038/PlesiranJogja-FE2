import React from "react";

import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";

import imageOne from "../../../assets/img/RENTAL/depan.png";
import imageTwo from "../../../assets/img/RENTAL/zx.jpg";
import imageThree from "../../../assets/img/RENTAL/r1m.jpg";
import imageFour from "../../../assets/img/RENTAL/innova.jpg";
import imageFive from "../../../assets/img/RENTAL/corrola.jpg";
import imageSix from "../../../assets/img/RENTAL/m3.png";
import "../../../styles/rent.css";

import { Link, useNavigate } from "react-router-dom";

const VehicleCard = ({ image, title, category, transmission, capacity, rating, price }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleDetailClick = () => {
    navigate("/rental/rent-detail"); // Navigate to the rent-detail page
  };
  return (
    <div className="vehicle-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt={title} />
        </div>
        <div className="col-md-8">
          <div className="vehicle-info">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5>{title}</h5>
                <p className="text-muted mb-2">Category: {category}</p>
                <p className="mb-2">
                  <i className="bi bi-gear-fill me-2"></i>
                  {transmission} <i className="bi bi-people-fill ms-3 me-2"></i>
                  {capacity} Orang
                </p>
              </div>
              <div className="text-end">
                <div className="rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <span>{rating}.0</span>
                </div>
                <p className="mb-2">{price}/day</p>
              </div>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn-detail px-2 py-2" onClick={handleDetailClick}>
                Detail
              </button>
              <button className="btn-rent px-2 py-2">Rent Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const FilterSection = () => (
  <div className="filter-section">
    <h5>Type Vehicle</h5>
    {["Motorcycle", "Sedan", "SUV"].map((type) => (
      <div className="form-check" key={type}>
        <input className="form-check-input" type="checkbox" id={type.toLowerCase()} />
        <label className="form-check-label" htmlFor={type.toLowerCase()}>
          {type}
        </label>
      </div>
    ))}

    <h5 className="mt-4">Rate</h5>
    {[5, 4, 3, 2, 1].map((stars) => (
      <div className="form-check" key={stars}>
        <input className="form-check-input" type="checkbox" id={`rate${stars}`} />
        <label className="form-check-label" htmlFor={`rate${stars}`}>
          {[...Array(stars)].map((_, i) => (
            <i className="bi bi-star-fill rating" key={i}></i>
          ))}
        </label>
      </div>
    ))}
  </div>
);

const Rent = () => {
  const vehicles = [
    {
      image: imageOne,
      title: "Porsche GT4-RS",
      category: "Sedan",
      transmission: "Automatic",
      capacity: 2,
      rating: 5.0,
      price: "120k",
    },
    {
      image: imageTwo,
      title: "Kawasaki ZX-10r",
      category: "Motorcycle",
      transmission: "Manual",
      capacity: 2,
      rating: 5.0,
      price: "120k",
    },
    {
      image: imageThree,
      title: "R1m",
      category: "Motorcycle",
      transmission: "Manual",
      capacity: 2,
      rating: 5.0,
      price: "120k",
    },
    {
      image: imageFour,
      title: "Toyota Innova",
      category: "SUV",
      transmission: "Automatic",
      capacity: 4,
      rating: 5.0,
      price: "120k",
    },
    {
      image: imageFive,
      title: "Toyota Gr-Corolla",
      category: "SUV",
      transmission: "Automatic",
      capacity: 4,
      rating: 4.0,
      price: "120k",
    },
    {
      image: imageSix,
      title: "BMW M3 Touring",
      category: "SUV",
      transmission: "Automatic",
      capacity: 4,
      rating: 4.0,
      price: "120k",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container my-5 mt-5">
        <div className="row main" style={{ marginTop: "120px" }}>
          {/* Filter Section */}
          <div className="col-lg-3">
            <FilterSection />
          </div>

          {/* Vehicle Listings */}
          <div className="col-lg-9">
            <div className="mb-3">
              <p>Showing {vehicles.length} of 10</p>
            </div>

            {vehicles.map((vehicle, index) => (
              <VehicleCard key={index} {...vehicle} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rent;
