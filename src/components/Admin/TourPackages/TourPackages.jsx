import styles from './TourPackages.module.css';

const TourPackages = ({onAddTourClick, updateTour}) => {
  const handleUpdateTour = () => {
    // Navigasi ke halaman UpdateTourPackage
    updateTour();
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <h2>All Tour Packages</h2>
        <a
          href="#"
          className={styles.addNewBtn}
          onClick={(e) => {
            e.preventDefault(); // Mencegah reload halaman
            onAddTourClick(); // Panggil fungsi untuk mengubah konten
          }}>
          <i className="fas fa-plus"> </i> Add New
        </a>
        <table>
          <thead>
            <tr>
              <th>Tour Images</th>
              <th>Tour Name</th>
              <th>Price</th>
              <th>No. Of Days</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img alt="Prambanan Temple Tour" height="50" src="https://storage.googleapis.com/a1aa/image/34PS0veW4n0KFyuenQAk0eo0fJFWe87NnMbXe7ZHB6svG197E.jpg" width="50" />
              </td>
              <td>Prambanan Temple Tour</td>
              <td>2.000.000 IDR</td>
              <td>3 days</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateTour}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Obelix Sea View Tour" height="50" src="https://storage.googleapis.com/a1aa/image/XE3TywkxVU7cKZRNgpL2UxbGVxO2mTNint7D7urzKlbH197E.jpg" width="50" />
              </td>
              <td>Obelix Sea View Tour</td>
              <td>2.500.000 IDR</td>
              <td>4 days</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateTour}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Plaosan Temple Tour" height="50" src="https://storage.googleapis.com/a1aa/image/G6i6rFi0pcabDBdHprfYKMME025zEP4fRS7ydo9ugH4jU3vTA.jpg" width="50" />
              </td>
              <td>Plaosan Temple Tour</td>
              <td>2.000.000 IDR</td>
              <td>2 days</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateTour}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Parangtritis Beach Tourism" height="50" src="https://storage.googleapis.com/a1aa/image/Bsms8dMXl3Z6Ft6Y9Qps2kIv6FiP7Hw9z52dPYAbNXDI197E.jpg" width="50" />
              </td>
              <td>Parangtritis Beach Tourism</td>
              <td>3.000.000 IDR</td>
              <td>3 days</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateTour}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Brekis Cliff Tour" height="50" src="https://storage.googleapis.com/a1aa/image/Ez8ojp2nSa7vI930ARd5iapQe03fDzuV7ts5JY246PUeoufOB.jpg" width="50" />
              </td>
              <td>Brekis Cliff Tour</td>
              <td>4.000.000 IDR</td>
              <td>3 days</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateTour}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Ratu Boko Tourism" height="50" src="https://storage.googleapis.com/a1aa/image/WheGyLfieCMfgS4g3ggYyRCyHwfWOFXV1g7KjHmcmG1hk6e7E.jpg" width="50" />
              </td>
              <td>Ratu Boko Tourism</td>
              <td>3.500.000 IDR</td>
              <td>4 days</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateTour}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Borobudur Temple Tour" height="50" src="https://storage.googleapis.com/a1aa/image/NNeeVuuJEeR1FJe5nHf2DjKTxiS84c5BoRlyxmxJKJdNk6e7E.jpg" width="50" />
              </td>
              <td>Borobudur Temple Tour</td>
              <td>4.500.000 IDR</td>
              <td>5 days</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateTour}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Obelix Hills Tour" height="50" src="https://storage.googleapis.com/a1aa/image/cpL9acmFoXLUHZkydgoSEoKDJ8XUhvTyrpctds6axaeNq73JA.jpg" width="50" />
              </td>
              <td>Obelix Hills Tour</td>
              <td>3.000.000 IDR</td>
              <td>3 days</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateTour}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Mendut Temple Tour" height="50" src="https://storage.googleapis.com/a1aa/image/4QVw01K2YGLsDFwOlJACatbCqtYvOBcQm1gQ52SlmwXG197E.jpg" width="50" />
              </td>
              <td>Mendut Temple Tour</td>
              <td>2.000.000 IDR</td>
              <td>2 days</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateTour}></i>
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

export default TourPackages;
