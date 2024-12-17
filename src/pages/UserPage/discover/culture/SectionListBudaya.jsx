import sekaten from "../../../../assets/img/BUDAYA/upacara-sekaten.jpg";
import sendratariRamayana from "../../../../assets/img/BUDAYA/sendra-tari-ramayana.png";
import karawitan from "../../../../assets/img/BUDAYA/karawitan-jogja.jpg";
import wayangKulit from "../../../../assets/img/BUDAYA/wayang-kulit.jpg";
import upacaraLabuhan from "../../../../assets/img/BUDAYA/upacara-labuhan.jpg";
import seniTari from "../../../../assets/img/BUDAYA/seni-tari-jogjakarta.jpg";
import { Link } from "react-router-dom";

const SectionListBudaya = () => {
  return (
    <section className="culture py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100 shadow">
              <img src={sekaten} className="card-img-top h-auto" alt="Sekatenan" />
              <div className="card-body p-3">
                <h3 className="card-title mt-0">Sekatenan</h3>
                <p className="card-text mt-2 p-0">A traditional celebration held to commemorate the birth of the Prophet Muhammad SAW and is a legacy of the Yogyakarta and Surakarta Sultanates</p>
                <Link to={`/discover/detail-budaya`} className="btn stretched-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <img src={sendratariRamayana} className="card-img-top h-auto" alt="Sendratari Ramayana" />
              <div className="card-body p-3">
                <h3 className="card-title mt-0">Sendratari Ramayana</h3>
                <p className="card-text mt-2 p-0">A dance performance that tells the story of the epic Ramayana. The dancers rely on body movements and expressions to tell the story.</p>
                <a href="" className="btn stretched-link mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <img src={karawitan} className="card-img-top h-auto" alt="Karawitan" />
              <div className="card-body p-3">
                <h3 className="card-title mt-0">Karawitan</h3>
                <p className="card-text mt-2 p-0">The art of playing gamelan which is typical of Java, involving various traditional musical instruments such as gongs, drums, saron and bonang</p>
                <Link to={`/discover/detail-budaya`} className="btn stretched-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <img src={wayangKulit} className="card-img-top h-auto" alt="Wayang Kulit" />
              <div className="card-body p-3">
                <h3 className="card-title mt-0">Wayang Kulit</h3>
                <p className="card-text mt-2 p-0">A shadow puppet show projected on a white screen, played by puppeteers who control the leather puppets</p>
                <a href="" className="btn stretched-link mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <img src={upacaraLabuhan} className="card-img-top h-auto" alt="Upacara Labuhan" />
              <div className="card-body p-3">
                <h3 className="card-title mt-0">Upacara Labuhan</h3>
                <p className="card-text mt-2 p-0">Offering ritual carried out by the Yogyakarta Palace and the community to ask for safety and prosperity.</p>
                <Link to={`/discover/detail-budaya`} className="btn stretched-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <img src={seniTari} className="card-img-top h-auto" alt="Seni Tari" />
              <div className="card-body p-3">
                <h3 className="card-title mt-0">Seni Tari</h3>
                <p className="card-text mt-2 p-0">Yogyakarta has a variety of traditional dances, ranging from classical palace dances such as Bedhaya and Serimpi.</p>
                <Link to={`/discover/detail-budaya`} className="btn stretched-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionListBudaya;
