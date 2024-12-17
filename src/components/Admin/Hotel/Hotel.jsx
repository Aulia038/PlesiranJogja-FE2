import styles from "./Hotel.module.css";

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

const Hotel = ({ onAddHotelClick, updateHotel }) => {
  const handleUpdateHotel = () => {
    // Navigasi ke halaman UpdateHotel
    updateHotel();
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <h2>All Hotel</h2>
        <a
          href="#"
          className={styles.addNewBtn}
          onClick={(e) => {
            e.preventDefault(); // Mencegah reload halaman
            onAddHotelClick(); // Panggil fungsi untuk mengubah konten
          }}
        >
          <i className="fas fa-plus"> </i> Add New
        </a>
        <table>
          <thead>
            <tr>
              <th>Hotel Images</th>
              <th>Hotel Name</th>
              <th>Address</th>
              <th>Ratings</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img alt="Hotel Tentrem Yogyakarta" height="50" src={hotelTentrem} width="50" />
              </td>
              <td>Hotel Tentrem Yogyakarta</td>
              <td>Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia</td>
              <td>*****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Artotel Suites Bianti Yogyakarta" height="50" src={artotelSuites} width="50" />
              </td>
              <td>Artotel Suites Bianti Yogyakarta</td>
              <td>Jl. Urip Sumoharjo 37, Yogyakarta 55222 Indonesia</td>
              <td>***</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Hotel Plaosan Yogyakarta" height="50" src={elHotel} width="50" />
              </td>
              <td>Hotel Yogyakarta Malioboro</td>
              <td>Jl. Dagen No 06, Yogyakarta 55271 Indonesia</td>
              <td>****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="1o1 Style Yogyakarta Malioboro" height="50" src={oneOOneStyle} width="50" />
              </td>
              <td>1o1 Style Yogyakarta Malioboro</td>
              <td>Jl. Gajah Mada No. 30, Yogyakarta 55166 Indonesia</td>
              <td>*</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="GAIA Cosmo Hotel" height="50" src={gaiaCosmo} width="50" />
              </td>
              <td>GAIA Cosmo Hotel</td>
              <td>Jl. Ipda Tut Harsono No. 16, Yogyakarta 55165 Indonesia</td>
              <td>*****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Aveta Hotel Malioboro" height="50" src={avetaHotel} width="50" />
              </td>
              <td>Aveta Hotel Malioboro</td>
              <td>Jalan Malioboro No. 42, Yogyakarta 55213 Indonesia</td>
              <td>**</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Hotel Neo Malioboro" height="50" src={neoMalioboro} width="50" />
              </td>
              <td>Hotel Neo Malioboro</td>
              <td>Jl. Pasar Kembang No. 21, Yogyakarta 55271 Indonesia</td>
              <td>*****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Ibis Styles Yogyakarta" height="50" src={ibisStyles} width="50" />
              </td>
              <td>Ibis Styles Yogyakarta</td>
              <td>Jl. Dagen no. 109, Yogyakarta 55271 Indonesia</td>
              <td>*****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Favehotel Malioboro Yogyakarta" height="50" src={faveHotel} width="50" />
              </td>
              <td>Favehotel Malioboro Yogyakarta</td>
              <td>Jl. I Dewa Nyoman Oka no. 30, Yogyakarta 55224 Indonesia</td>
              <td>***</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Zest Hotel Yogyakarta" height="50" src={zestHotel} width="50" />
              </td>
              <td>Zest Hotel Yogyakarta</td>
              <td>Jl. Gajah Mada No.28, Yogyakarta 55112 Indonesia</td>
              <td>***</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Kotta Go Yogyakarta" height="50" src={kottaGo} width="50" />
              </td>
              <td>Kotta Go Yogyakarta</td>
              <td>Jl. Pangeran Diponegoro No. 87, Yogyakarta 55231 Indonesia</td>
              <td>**</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Royal Malioboro Yogyakarta" height="50" src={royalMalioboro} width="50" />
              </td>
              <td>Royal Malioboro Yogyakarta</td>
              <td>Jl. Pasar Kembang No. 29, Yogyakarta 55271 Indonesia</td>
              <td>*</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Hotel;
