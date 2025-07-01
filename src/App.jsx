import React, { useEffect, useRef, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import locationIcon from "./assets/locationIcon.svg";
import clockIcon from "./assets/clockIcon.svg";
import mapIcon from "./assets/mapIcon.svg";
import ParticipationForm from "./ParticipationForm";

export default function App() {
  const detailsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up
    };
  }, []);

  return (
    <>
      <header>
        <div className="overlay" />
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 className="nameTitle">Karina & Jafer</h1>
          <h5 className="headerDate">24 Mai 2026 - Bucuresti</h5>
        </div>
      </header>
      <div
        ref={detailsRef}
        style={{ marginTop: 70, paddingRight: 30, paddingLeft: 30 }}
      >
        <img
          src="./wedding-invite/usImage.jpg"
          alt="Wedding Invitation"
          className={`wedding-image ${inView && "slide-in"}`}
        />
        <div className={`wedding-image-text ${inView && "slide-in"}`}>
          <h4 className="wedding-image-subtitle">Iubirea noastră</h4>
          <h3 className="wedding-image-title">Împărtășită cu voi.</h3>
          <p>
            Sunt momente în viață pe care le aștepți cu sufletul la gură și cu
            fluturași în stomac, iar acesta, pentru noi, este unul dintre ele.
          </p>
          <p>
            Începând cu această zi vom păși spre viitor cu planuri ambițioase,
            cu visuri mărețe și cu forțe proaspete, unite.
          </p>
          <p>
            Avem deosebita plăcere de a vă invita să fiți alături de noi în ziua
            în care sufletele noastre se vor uni.
          </p>
          <p>Vă așteptăm cu drag!</p>
        </div>
      </div>
      <div className="eventDate">
        <div className="overlay" />
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 className="nameTitle">Va asteptam sa fiti alaturi de noi!</h1>
          <h5 className="headerDate">24 Mai 2026</h5>
          <CountdownTimer targetDate="2026-05-24T17:00:00" />
        </div>
      </div>

      <h4 className="wedding-image-subtitle" style={{ marginLeft: 30 }}>
        Locație
      </h4>
      <div className="locationCard">
        <img
          src="./wedding-invite/p7.jpg"
          alt="Wedding Invitation"
          height={213}
          style={{ objectFit: "cover" }}
        />
        <div className="locationCardText">
          <span style={{ fontSize: "21px", textTransform: "uppercase" }}>
            Bokaa
          </span>
          <div className="iconText">
            <img
              src={locationIcon}
              alt="Location Icon"
              height={16}
              width={16}
            />
            <span>Aleea Cu Brazi 3-5, Buftea 070000, Romania</span>
          </div>
          <div className="iconText">
            <img src={clockIcon} alt="Clock Icon" height={16} width={16} />
            <span>24 Mai 2026, 17:00</span>
          </div>
          <a
            href="https://maps.app.goo.gl/qwjXZC6S1M968pwB9"
            target="_blank"
            rel="noopener noreferrer"
            className="iconText"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <img src={mapIcon} alt="Map Icon" height={16} width={16} />
            <span>Vezi harta</span>
          </a>
        </div>
      </div>
      <div className="formCardImage">
        <div className="overlay" />
        <ParticipationForm />
      </div>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 className="footerTitle">Karina & Jafer</h1>
        <h5 className="footerDate">24 Mai 2026 - Bucuresti</h5>
      </div>
    </>
  );
}
