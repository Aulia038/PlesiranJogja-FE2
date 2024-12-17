import { Link } from "react-router-dom";
import Footer from "../../../components/User/Footer";
import Navbar from "../../../components/User/Navbar";
import ProgressBar from "../../../components/User/ProgressBar";

const BannerTrip = () => {
  return (
    <section className="hero-det-tour">
      <div className="hero-det-overlay"></div>
      <div className="hero-text">
        <h1>TRIP INFOTMATION</h1>
        <p>
          <i className="fas fa-info-circle"></i> Payment Information
        </p>
      </div>
    </section>
  );
};
const ReservationDetail = () => {
  return (
    <div className="reservation-detail">
      <div className="detail-header">
        <span className="number">1.</span>
        <h2>Detail Reservation</h2>
        <span className="price">5.782.000 IDR</span>
      </div>
      <div className="detail-body">
        <h3>Executive Suite - 2 Adults</h3>
        <p>Date Reservation: 10 November 2024 to 11 November 2024</p>
        <p>Check-in from: 3:00 PM</p>
        <p>Check-in before: 12:00 PM</p>

        <h4>Room Detail</h4>
        <p>Executive Suite King</p>
        <p>Bedding Options: King</p>
        <p>Breakfast included: Tentrem Breakfast</p>
      </div>
      <Link className="next-button" to={`/trip-tour/detail-payment-tour-2`} style={{ textDecoration: "none" }}>
        Next
      </Link>
    </div>
  );
};

const Accordian = () => {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">2.</span>
          <span className="title">Personal Data</span>
          {/* <i className="fas fa-caret-down"></i> */}
        </button>
      </div>
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">3.</span>
          <span className="title">Payment</span>
          {/* <i className="fas fa-caret-down"></i> */}
        </button>
      </div>
    </div>
  );
};

const DetailPaymentTour = () => {
  return (
    <>
      <Navbar />
      <BannerTrip />
      <ProgressBar />
      <ReservationDetail />
      <Accordian />
      <Footer />
    </>
  );
};

export default DetailPaymentTour;
