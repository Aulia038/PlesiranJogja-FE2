import React, { useState } from "react";
import styles from "./Discover.module.css";

import Sradananimg from "../../../assets/img/sadranan-pantai.jpg";
import Sundakimg from "../../../assets/img/sundak-beach.jpg";
import Krakalimg from "../../../assets/img/krakal.jpg";
import Wediomboimg from "../../../assets/img/wediombo.jpg";
import Depokimg from "../../../assets/img/depokbeach.png";
import Kukupimg from "../../../assets/img/kukup.jpg";

import Gudeg from "../../../assets/img/Kuliner/Gudeg.png";
import dawet from "../../../assets/img/Kuliner/es dawet ayu.png";
import kopi from "../../../assets/img/Kuliner/kopi joss.png";
import wajik from "../../../assets/img/Kuliner/wajik.png";

import Sekaten from "../../../assets/img/BUDAYA/upacara-sekaten.jpg";
import Sendratari from "../../../assets/img/BUDAYA/sendra-tari-ramayana.png";
import Karawitan from "../../../assets/img/BUDAYA/karawitan-jogja.jpg";
import WayangKulit from "../../../assets/img/BUDAYA/wayang-kulit.jpg";

const Discover = ({ onAddDiscoverClick }) => {
  const [activeMenu, setActiveMenu] = useState("Destination");
  const destinations = [
    {
      id: 1,
      name: "Sadranan Beach",
      image: Sradananimg,
      alt: "Sadranan",
    },
    {
      id: 2,
      name: "Sundak Beach",
      image: Sundakimg,
      alt: "Sundak Beach",
    },
    {
      id: 3,
      name: "Krakal Beach",
      image: Krakalimg,
      alt: "Krakal Beach",
    },
    {
      id: 4,
      name: "Wedi Ombo Beach",
      image: Wediomboimg,
      alt: "Wediombo Beach",
    },
    {
      id: 5,
      name: "Depok Beach",
      image: Depokimg,
      alt: "Depok Beach",
    },
    {
      id: 6,
      name: "Kukup Beach",
      image: Kukupimg,
      alt: "Kukup Beach",
    },
  ];

  const culinary = [
    {
      id: 1,
      name: "Gudeg",
      description: "Gudeg is a traditional Yogyakarta dish made from young jackfruit cooked with coconut milk and various spices.",
      image: Gudeg,
      alt: "Gudeg",
    },
    {
      id: 2,
      name: "Dawet Ayu Ice",
      description: "Yogyakarta's typical ice dawet ayu is a refreshing traditional drink, consisting of green cendol, coconut milk and liquid brown sugar, served with shaved ice or ice cubes. Even though it originates from...",
      image: dawet,
      alt: "Dawet Ayu",
    },
    {
      id: 3,
      name: "Joss Coffee",
      description: "Joss coffee is a unique black coffee from Yogyakarta because it is served by inserting hot charcoal into a coffee cup. The 'joss' sound when the charcoal is put into the coffee....",
      image: kopi,
      alt: "Joss Coffee",
    },
    {
      id: 4,
      name: "Wajik",
      description: "Wajik is a processed food made from boiled sticky rice and mixed with coconut milk and coconut sugar, coconut. In Javanese traditional ceremonies, for example the nikahwajik",
      image: wajik,
      alt: "Wajik",
    },
  ];

  const culture = [
    {
      id: 1,
      name: "Sekatenan",
      description: "a traditional celebration held to commemorate the birth of the Prophet Muhammad SAW and is a legacy of the Yogyakarta and Surakarta Sultanates",
      image: Sekaten,
      alt: "Sekatenan",
    },
    {
      id: 2,
      name: "Sendratari Ramayana",
      description: "a dance performance that tells the story of the epic Ramayana. Performed without dialogue, the dancers rely on body movements and expressions to tell the story.",
      image: Sendratari,
      alt: "Sendratari Ramayana",
    },
    {
      id: 3,
      name: "Karawitan",
      description: "the art of playing gamelan which is typical of Java, involving various traditional musical instruments such as gongs, drums, saron and bonang",
      image: Karawitan,
      alt: "Karawitan",
    },
    {
      id: 4,
      name: "Wayang Kulit",
      description: "a shadow puppet show projected on a white screen, played by puppeteers who control the leather puppets",
      image: WayangKulit,
      alt: "Wayang Kulit",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3>Discover</h3>
        <ul>
          <li className={activeMenu === "Destination" ? styles.active : null} onClick={() => setActiveMenu("Destination")}>
            Destination
          </li>
          <li className={activeMenu === "Culinary" ? styles.active : null} onClick={() => setActiveMenu("Culinary")}>
            Culinary
          </li>
          <li className={activeMenu === "Culture" ? styles.active : null} onClick={() => setActiveMenu("Culture")}>
            Culture
          </li>
        </ul>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h2>{activeMenu}</h2>
          <button className={styles.addButton} onClick={() => onAddDiscoverClick(activeMenu)}>
            Add New +
          </button>
        </div>
        <div className={styles.grid}>
          {activeMenu === "Destination" ? (
            <>
              {destinations.map((_) => (
                <div key={_.id} className={styles.card}>
                  <img src={_.image} alt={_.name} />
                  <h3 className={styles.cardTitle}>{_.name}</h3>
                  <button>Edit Destination</button>
                </div>
              ))}
            </>
          ) : null}
          {activeMenu === "Culinary" ? (
            <>
              {culinary.map((_) => (
                <div key={_.id} className={styles.card}>
                  <img src={_.image} alt={_.name} />
                  <h3 className={styles.cardTitle}>{_.name}</h3>
                  <p className={styles.cardContent}>{_.description}</p>
                  <button>Edit Culinary</button>
                </div>
              ))}
            </>
          ) : null}
          {activeMenu === "Culture" ? (
            <>
              {culture.map((_) => (
                <div key={_.id} className={styles.card}>
                  <img src={_.image} alt={_.name} />
                  <h3 className={styles.cardTitle}>{_.name}</h3>
                  <p className={styles.cardContent}>{_.description}</p>
                  <button>Edit Culture</button>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Discover;
