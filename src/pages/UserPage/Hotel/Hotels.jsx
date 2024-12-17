import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";

import hotelTentrem from "../../../assets/img/HOTEL/hotel-tentrem-yogyakarta.jpg";
import artotelSuites from "../../../assets/img/HOTEL/artotel-suites-bianti.jpg";
import elHotel from "../../../assets/img/HOTEL/el hotel yogyakarta.jpg";
import oneOOneStyle from "../../../assets/img/HOTEL/facade-1o1-style-yogyakarta.jpg";
import gaiaCosmo from "../../../assets/img/HOTEL/gaia-cosmo-hotel.jpg";
import avetaHotel from "../../../assets/img/HOTEL/our-hotel-is-located.jpg";
import neoMalioboro from "../../../assets/img/HOTEL/hotel-neo-malioboro.jpg";
import ibisStyles from "../../../assets/img/HOTEL/exterior-view.jpg";
import faveHotel from "../../../assets/img/HOTEL/favehotel-malioboro-yogyakarta.jpg";
import zestHotel from "../../../assets/img/HOTEL/zest-hotel-yogyakarta.jpg";
import kottaGo from "../../../assets/img/HOTEL/kotta go yogyakarta.jpg";
import royalMalioboro from "../../../assets/img/HOTEL/royal-malioboro-yogyakarta.jpg";

import "../../../styles/hotel.css";
import { Link } from "react-router-dom";

const Hotels = () => {
  const hotels = [
    {
      image: hotelTentrem,
      name: "Hotel Tentrem Yogyakarta",
      address: "Jl. P. Mangkubumi 72A, Yogyakarta, 55233 Indonesia",
      rating: "★★★★★",
      reviews: "3,422 Reviews",
      link: "hotel/detail-hotel",
    },
    {
      image: artotelSuites,
      name: "Artotel Suites Yogyakarta",
      address: "Jl. Urip Sumoharjo 37, Yogyakarta 55222 Indonesia",
      rating: "★★★",
      reviews: "307 Reviews",
      link: "#",
    },
    {
      image: elHotel,
      name: "éL Hotel Yogyakarta",
      address: "Jl. Dagen No 06, Yogyakarta 55271 Indonesia",
      rating: "★★★★",
      reviews: "796 Reviews",
      link: "#",
    },
    {
      image: oneOOneStyle,
      name: "1o1 Style Yogyakarta",
      address: "Jl. Gajah Mada No. 30, Yogyakarta 55166 Indonesia",
      rating: "★",
      reviews: "93 Reviews",
      link: "#",
    },
    {
      image: gaiaCosmo,
      name: "GAIA Cosmo Hotel",
      address: "Jl. Ipda Tut Harsono No. 16, Yogyakarta 55165 Indonesia",
      rating: "★★★★★",
      reviews: "1,161 Reviews",
      link: "#",
    },
    {
      image: avetaHotel,
      name: "Aveta Hotel Malioboro",
      address: "Jalan Malioboro No. 42, Yogyakarta 55213 Indonesia",
      rating: "★★",
      reviews: "138 Reviews",
      link: "#",
    },
    {
      image: neoMalioboro,
      name: "Hotel Neo Malioboro",
      address: "Jl. Pasar Kembang No. 21, Yogyakarta 55271 Indonesia",
      rating: "★★★★★",
      reviews: "1,718 Reviews",
      link: "#",
    },
    {
      image: ibisStyles,
      name: "Ibis Styles Yogyakarta",
      address: "Jl. Dagen no. 109, Yogyakarta 55271 Indonesia",
      rating: "★★★★★",
      reviews: "1,497 Reviews",
      link: "#",
    },
    {
      image: faveHotel,
      name: "Favehotel Malioboro",
      address: "Jl. I Dewa Nyoman Oka no. 30, Yogyakarta 55224 Indonesia",
      rating: "★★★",
      reviews: "349 Reviews",
      link: "#",
    },
    {
      image: zestHotel,
      name: "Zest Hotel Yogyakarta",
      address: "Jl. Gajah Mada No.28, Yogyakarta 55112 Indonesia",
      rating: "★★★",
      reviews: "312 Reviews",
      link: "#",
    },
    {
      image: kottaGo,
      name: "Kotta Go Yogyakarta",
      address: "Jl. Pangeran Diponegoro No. 87, Yogyakarta 55231 Indonesia",
      rating: "★★",
      reviews: "137 Reviews",
      link: "#",
    },
    {
      image: royalMalioboro,
      name: "Royal Malioboro Yogyakarta",
      address: "Jl. Pasar Kembang No. 29, Yogyakarta 55271 Indonesia",
      rating: "★",
      reviews: "65 Reviews",
      link: "#",
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <aside className="sidebar mb-2 p-4" style={{ marginTop: "150px", backgroundColor: "##f4efe6", borderRadius: "0px" }}>
          <h2>Where you want to go?</h2>
          <input type="text" className="form-control" placeholder="Where you want to stay" />
          <label>
            Check-in <input type="text" className="form-control" />
          </label>
          <label>
            Check-out <input type="text" className="form-control" />
          </label>
          <label>
            Room <input type="number" className="form-control" defaultValue={`1`} />
          </label>
          <label>
            Guest <input type="number" className="form-control" min="1" defaultValue="1" />
          </label>
          <button className="search-btn">Search</button>

          <h3>Stars Rating</h3>
          <div className="stars">
            <label>
              <input type="checkbox" /> ★★★★★
            </label>
            <label>
              <input type="checkbox" /> ★★★★
            </label>
            <label>
              <input type="checkbox" /> ★★★
            </label>
            <label>
              <input type="checkbox" /> ★★
            </label>
            <label>
              <input type="checkbox" /> ★
            </label>
          </div>

          <h3>Facilities</h3>
          <label>
            <input type="checkbox" /> Wi-Fi
          </label>
          <label>
            <input type="checkbox" /> Parking
          </label>
          <label>
            <input type="checkbox" /> Swimming Pool
          </label>
          <label>
            <input type="checkbox" /> Restaurant
          </label>
          <label>
            <input type="checkbox" /> Family Friendly
          </label>
        </aside>

        <section className="hotel-listings" style={{ marginTop: "130px" }}>
          <div className="sort-options">
            <label>Sort By:</label>
            <select className="form-control w-25">
              <option>Most Popular</option>
              <option>Guest Rating</option>
              <option>Name</option>
              <option>Price</option>
            </select>
          </div>

          <div className="hotels mt-4">
            {hotels.map((hotel, index) => (
              <div className="col-2 col-md-12 col-lg-12">
                <div className="hotel-card" key={index} style={{ borderRadius: "0px", border: "1px solid #D9D9D9" }}>
                  <img src={hotel.image} className="img-fluid w-100" alt={hotel.name} style={{ borderRadius: "0px" }} />
                  <Link to={`/${hotel.link}`} className="hotel-link">
                    <h3>{hotel.name}</h3>
                  </Link>
                  <p>{hotel.address}</p>
                  <div className="star-rating">{hotel.rating}</div>
                  <p>{hotel.reviews}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Hotels;
