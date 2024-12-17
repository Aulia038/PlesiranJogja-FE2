import Footer from "../../../components/User/Footer";
import Navbar from "../../../components/User/Navbar";
import "../../../styles/tour/tour.css";

import React from "react";

import tourImage from "../../../assets/img/TOUR/1.jpg";
import tourImage2 from "../../../assets/img/TOUR/3.jpg";
import tourImage3 from "../../../assets/img/TOUR/9.jpg";
import tourImage4 from "../../../assets/img/TOUR/6.jpg";
import tourImage5 from "../../../assets/img/TOUR/7.jpg";
import tourImage6 from "../../../assets/img/TOUR/8.jpg";
import tourImage7 from "../../../assets/img/TOUR/11.webp";
import tourImage8 from "../../../assets/img/TOUR/5.jpg";
import tourImage9 from "../../../assets/img/TOUR/13.jpg";
import { Link } from "react-router-dom";

const Hero = () => (
  <div className="hero-trip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="hero-overlay"></div>
        </div>
      </div>
    </div>
  </div>
);

const HeroContentTrip = () => (
  <section className="hero-contenttrip text-white">
    <h1 className="text-jdl pt-0 text-center">
      All Tours <br />
      Destinations on offer, all with guaranteed departure dates!
    </h1>
  </section>
);

const TourCard = ({ image, title, days, destinations, price }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card tour-card rounded-4 border">
      <img src={image} className="card-img-top" alt="Tour" />
      <div className="card-body p-0 pb-3">
        <h5 className="card-title-tour text-center">{title}</h5>
        <hr className="line-tour" />
        <p className="card-text-ikon">
          <i className="fa-regular fa-clock"></i> {days}
        </p>
        <p className="card-text-ikon">
          <i className="fa-solid fa-map-location-dot"></i> {destinations}
        </p>
        <p className="card-text-ikon">
          <i className="fa-solid fa-car"></i> Includes
        </p>
        <p className="card-text-ikon">
          <i className="fa-solid fa-hotel"></i>
          <i className="fa-solid fa-star no-padding" style={{ color: "#ffd43b" }}></i>
          <i className="fa-solid fa-star no-padding" style={{ color: "#ffd43b" }}></i>
          <i className="fa-solid fa-star no-padding" style={{ color: "#ffd43b" }}></i>
          <i className="fa-solid fa-star no-padding" style={{ color: "#ffd43b" }}></i>
        </p>
        <p className="card-text-ikon">
          <i className="fa-solid fa-tag"></i> {price}
        </p>
        <hr className="line-tour" />
        <Link to={`/trip-tour/prambanan-temple`} className="btn w-20 btn-tour">
          Choose
        </Link>
        &nbsp;
        <Link to={`/trip-tour/prambanan-temple`} className="btn w-20 text-black">
          Details
        </Link>
      </div>
    </div>
  </div>
);

const ToursList = () => {
  const tours = [
    {
      title: "Prambanan Temple Tour",
      days: "3 days",
      destinations: "5 Destinations",
      price: "IDR 2,000,000",
      image: tourImage,
    },
    {
      title: "Obelix Sea View Tour",
      days: "4 days",
      destinations: "5 Destinations",
      price: "IDR 2,500,000",
      image: tourImage2,
    },
    {
      title: "Plaosan Temple tour",
      days: "2 days",
      destinations: "5 Destinations",
      price: "IDR 2,000,000",
      image: tourImage3,
    },
    {
      title: "Parangtritis Beach Tourism",
      days: "1 days",
      destinations: "5 Destinations",
      price: "IDR 3,000,000",
      image: tourImage4,
    },
    {
      title: "Breksi Cliff Tour",
      days: "3 days",
      destinations: "5 Destinations",
      price: "IDR 4,000,000",
      image: tourImage5,
    },
    {
      title: "Ratu Boko Tourism",
      days: "3 days",
      destinations: "5 Destinations",
      price: "IDR 3,500,000",
      image: tourImage6,
    },
    {
      title: "WiBorobudur Temple Tour",
      days: "3 days",
      destinations: "5 Destinations",
      price: "IDR 4,500,000",
      image: tourImage7,
    },
    {
      title: "Obelix Hills Tour",
      days: "3 days",
      destinations: "5 Destinations",
      price: "IDR 3,000,000",
      image: tourImage8,
    },
    {
      title: "Mendut Temple Tour",
      days: "2 days",
      destinations: "5 Destinations",
      price: "IDR 2,000,000",
      image: tourImage9,
    },
  ];

  return (
    <div className="list-tour">
      <div className="container my-5">
        <div className="row">
          {tours.map((tour, index) => (
            <TourCard key={index} title={tour.title} days={tour.days} destinations={tour.destinations} price={tour.price} image={tour.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TripTour = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroContentTrip />
      <ToursList />
      <Footer />
    </>
  );
};

export default TripTour;
