import Footer from "../../../components/User/Footer";
import Navbar from "../../../components/User/Navbar";
import "../../../styles/detail-tour/detail-tour.css";
import BookingForm from "./BookingForm";

const DetailTourPrambanan = () => {
  return (
    <>
      <Navbar />
      <div className="hero-det-tour">
        <h1>Prambanan Temple</h1>
        <div className="hero-det-overlay"></div>
      </div>

      <section>
        <div className="content">
          <div className="txt-content justify-content-center">
            <h2>History</h2>
            <p>
              Prambanan Temple Compounds consist of Prambanan Temple (also called Loro Jonggrang), Sewu Temple, Bubrah Temple, and Lumbung Temple. Prambanan Temple itself is a complex consisting of 240 temples. All the mentioned temples
              form the Prambanan Archaeological Park and were built during the heyday of Sailendra’s powerful dynasty in Java in the 8th century AD. These compounds are located on the border between the two provinces of Yogyakarta and
              Central Java on Java Island.
            </p>
            <p>
              While Loro Jonggrang, dating from the 9th century, is a brilliant example of Hindu religious bas-reliefs, Sewu, with its four pairs of Dwarapala giant statues, is Indonesia’s largest Buddhist complex including the temples of
              Lumbung, Bubrah, and Asu (Gana temple). The Hindu temples are decorated with reliefs illustrating the Indonesian version of the Ramayana epic which are masterpieces of stone carvings. These are surrounded by hundreds of
              shrines that have been arranged in three parts showing high levels of stone building technology and architecture from the 8th century AD in Java. With over 500 temples, Prambanan Temple Compounds represents not only an
              architectural and cultural treasure but also a standing proof of past religious peaceful cohabitation.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="des-tour">
          <div className="txt-content">
            <h2>Tour Description - 3 Days Package</h2>
            <ul>
              <li>
                Day 1
                <ul>
                  <li>Borobudur Temple (Plant)</li>
                  <li>Svarga Earth</li>
                  <li>Gamplong Nature Studio</li>
                </ul>
              </li>
              <li>
                Day 2
                <ul>
                  <li>Indrayanti Beach</li>
                  <li>Baron Beach</li>
                  <li>Heha Ocean View</li>
                </ul>
              </li>
              <li>
                Day 3
                <ul>
                  <li>Prambanan Temple</li>
                  <li>Obelix Hills</li>
                  <li>Breccia Cliff</li>
                  <li>Malioboro</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="det-price">
          <div className="txt-content">
            <h2>Detailed Price</h2>
            <p>2-5 Participants: 4,000k/person</p>
          </div>
        </div>
      </section>

      <section>
        <div className="fees-included">
          <div className="txt-content">
            <h2>Fees Included</h2>
            <ul>
              <li>Private Transport</li>
              <li>Entrance fees</li>
            </ul>
          </div>
        </div>
      </section>
      <BookingForm />
      <Footer />
    </>
  );
};

export default DetailTourPrambanan;
