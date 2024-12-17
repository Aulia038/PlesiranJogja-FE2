import { Link } from "react-router-dom";
import Footer from "../../../components/User/Footer";
import Navbar from "../../../components/User/Navbar";
import ProgressBar from "../../../components/User/ProgressBar";
import "../../../styles/payment/payment.css";

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

const Accordian = () => {
  return (
    <div className="accordion">
      <Link to={`/trip-tour/detail-payment-tour`} className="room-link">
        <div className="accordion-item">
          <button className="accordion-header">
            <span className="number">1.</span>
            <span className="title">Detail Reservation</span>
            {/* <i className="fas fa-caret-down"></i> */}
          </button>
        </div>
      </Link>
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

const PaymentPrambanan = () => {
  return (
    <>
      <Navbar />
      <BannerTrip />
      <ProgressBar />
      <Accordian />
      <Footer />
    </>
  );
};

export default PaymentPrambanan;
