import DiscoverNav from "../../../../components/User/DiscoverNav";
import Navbar from "../../../../components/User/Navbar";
import Footer from "../../../../components/User/Footer";

const DetailBudaya = () => {
  return (
    <>
      <Navbar />
      <div className="hero-culture">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-overlay"></div>
            </div>
          </div>
          <DiscoverNav />
        </div>
      </div>
      <section className="discover text-center py-3">
        <h2>Information</h2>
        <hr className="dashed-line" />
      </section>
      <section id="Culture-info mb-3" className="Culture-info container">
        <h2>Ramayana Ballet Information</h2>
        <p>
          Prambanan Ramayana Ballet is a performance that combines dance and drama without dialogue, based on the Ramayana story and performed near Prambanan Temple on the island of Java, Indonesia. The Prambanan Ramayana Ballet is the
          ballet that has most regularly performed the Ramayana Ballet since 1961.The Ramayana story is based on the Hindu epic adapted to Javanese culture, making the Ramayana Ballet a unique dance. More than 200 professional dancers and
          local musicians participated in the Ramayana Ballet which took place on an open stage with Prambanan Temple as a backdrop. The Ramayana Ballet also tells about the reliefs at the Shiva Temple.The Ramayana story is Rama's journey
          to save his wife Sita (in Java, usually called Sinta) who was kidnapped by the king of Alengka, Ravana. The Prambanan Ramayana Ballet is usually held every Tuesday, Thursday and Saturday, performances on an open stage (Open Stage)
          only during the dry month, outside of that performances are held on a closed stage (Trimurti Stage).
        </p>
      </section>
      <Footer />
    </>
  );
};

export default DetailBudaya;
