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

const PersonalData = () => {
  return (
    <div className="personal-data">
      <div className="data-header">
        <span className="number">2.</span>
        <h2>Personal Data</h2>
      </div>
      <div className="data-body">
        <form>
          <label for="name">Full Name :</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email Address :</label>
          <input type="email" id="email" name="email" required />

          <label for="phone">Phone Number :</label>
          <input type="tel" id="phone" name="phone" required />

          <Link className="next-button" type="submit" to={`/trip-tour/detail-payment-tour-3`} style={{ textDecoration: "none" }}>
            Next
          </Link>
        </form>
      </div>
    </div>
  );
};

const Accordian = () => {
  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <button className="accordion-header">
            <span className="number">1.</span>
            <span className="title">Detail Reservation</span>
            {/* <i className="fas fa-caret-down"></i> */}
          </button>
        </div>
      </div>
      <PersonalData />
      <div className="accordion">
        <div className="accordion-item">
          <button className="accordion-header">
            <span className="number">3.</span>
            <span className="title">Payment</span>
            {/* <i className="fas fa-caret-down"></i> */}
          </button>
        </div>
      </div>
    </>
  );
};

const DetailPaymentTour2 = () => {
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

export default DetailPaymentTour2;
