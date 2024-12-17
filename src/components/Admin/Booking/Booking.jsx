import styles from './Booking.module.css';

const Booking = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h2>All Bookings</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Type</th>
                <th>Title</th>
                <th>Price</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dony Benaya Dinova</td>
                <td>Tour Packages</td>
                <td>Prambanan Temple Tour</td>
                <td>2.000.000 IDR</td>
                <td>10 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Marudut Dearman Damanik</td>
                <td>Rental</td>
                <td>Porsche GT4-RS</td>
                <td>120.000 IDR</td>
                <td>11 Nov, 2024</td>
                <td>
                  <span className={styles.canceled}> Canceled </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Rega Nurcahya</td>
                <td>Hotel</td>
                <td>Hotel Tentrem Yogyakarta</td>
                <td>7.047.560 IDR</td>
                <td>12 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Siti Aisyah</td>
                <td>Tour Packages</td>
                <td>Obelix Sea View Tour</td>
                <td>2.500.000 IDR</td>
                <td>13 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Siti Aulia Rahmahadi</td>
                <td>Rental</td>
                <td>Kawasaki ZX-10r</td>
                <td>120.000 IDR</td>
                <td>14 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Hotel</td>
                <td>Marriott Hotel</td>
                <td>5.000.000 IDR</td>
                <td>15 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Tour Packages</td>
                <td>Borobudur Sunrise Tour</td>
                <td>3.000.000 IDR</td>
                <td>16 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Michael Johnson</td>
                <td>Rental</td>
                <td>BMW M3</td>
                <td>150.000 IDR</td>
                <td>17 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Emily Davis</td>
                <td>Hotel</td>
                <td>Hilton Hotel</td>
                <td>6.000.000 IDR</td>
                <td>18 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Chris Brown</td>
                <td>Tour Packages</td>
                <td>Mount Bromo Tour</td>
                <td>4.000.000 IDR</td>
                <td>19 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Jessica Wilson</td>
                <td>Rental</td>
                <td>Mercedes-Benz S-className</td>
                <td>200.000 IDR</td>
                <td>20 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>David Martinez</td>
                <td>Hotel</td>
                <td>Hyatt Regency</td>
                <td>7.500.000 IDR</td>
                <td>21 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Sarah Lee</td>
                <td>Tour Packages</td>
                <td>Komodo Island Tour</td>
                <td>5.500.000 IDR</td>
                <td>22 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>James Anderson</td>
                <td>Rental</td>
                <td>Audi R8</td>
                <td>180.000 IDR</td>
                <td>23 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
              <tr>
                <td>Linda Thompson</td>
                <td>Hotel</td>
                <td>Ritz-Carlton</td>
                <td>8.000.000 IDR</td>
                <td>24 Nov, 2024</td>
                <td>
                  <span className={styles.reserved}> Reserved </span>
                </td>
                <td className={styles.action}>
                  <a href="#"> Delete </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Booking;
