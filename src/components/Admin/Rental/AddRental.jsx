import styles from './AddRental.module.css';

const AddRental = ({backToRental}) => {
  const handleCancel = () => {
    // Kembali ke halaman Rental saat tombol Cancel diklik
    backToRental();
  };
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h3>Add New Rentals</h3>
          <div className={styles.formGroup}>
            <label htmlFor="vehicle-name"> Vehicle Name </label>
            <input id="vehicle-name" placeholder="Vehicle Name" type="text" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="rental-price"> Rental Price </label>
            <input id="rental-price" placeholder="Rental Price/day" type="text" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="type-vehicle"> Type Vehicle </label>
            <input id="type-vehicle" placeholder="Type Vehicle" type="text" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="upload-image"> Upload Vehicle image here </label>
            <div className={styles.fileUpload}>
              <i className="fas fa-cloud-upload-alt"> </i>
              <span> Choose a file or drag &amp; drop it here </span>
            </div>
          </div>
          <div className={styles.formActions}>
            <button className={styles.submitBtn}>Submit</button>
            <button className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRental;
