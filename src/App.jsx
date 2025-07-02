import React, { useEffect, useRef, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import locationIcon from "./assets/locationIcon.svg";
import clockIcon from "./assets/clockIcon.svg";
import mapIcon from "./assets/mapIcon.svg";
import ParticipationForm from "./ParticipationForm";
import usImage from "./assets/usImage.jpg";
import p7 from "./assets/p7.jpg";
import connectionImage from "./assets/connectionImage.png";

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
          <h5 className="headerDate">24 Mai 2026 - București</h5>
        </div>
      </header>
      <img
        src={connectionImage}
        alt="Connection"
        width="150px"
        height="auto"
        style={{
          objectFit: "contain",
          display: "block",
          margin: "0 auto",
        }}
      />
      <div
        ref={detailsRef}
        style={{ marginTop: 0, paddingRight: 30, paddingLeft: 30 }}
      >
        <img
          src={usImage}
          alt="Wedding Invitation"
          className={`wedding-image ${inView && "slide-in"}`}
        />
        <div className={`wedding-image-text ${inView && "slide-in"}`}>
          <h4 className="wedding-image-subtitle">Iubirea noastră</h4>
          <h3 className="wedding-image-title">Împărtășită cu voi.</h3>
          <p>
            Sunt momente în viață care ating inima cu o intensitate aparte —
            clipe care ne umplu sufletul de emoție și ne dau curajul să visăm
            mai departe. Pentru noi, această zi marchează începutul unei povești
            scrise în doi, cu iubire, încredere și speranță.
          </p>
          <p>
            Cu pași siguri, pornim împreună pe drumul vieții, ghidați de iubirea
            care ne leagă și de dorința de a clădi un viitor comun.
          </p>
          <p>
            Cu multă emoție și bucurie, vă invităm să fiți alături de noi în
            ziua în care sufletele noastre își unesc destinele.
          </p>
        </div>
      </div>
      <div className="eventDate">
        <div className="overlay" />
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 className="nameTitle">Vă așteptăm să fiți alături de noi!</h1>
          <h5 className="headerDate">24 Mai 2026</h5>
        </div>
      </div>

      <h4 className="wedding-image-subtitle" style={{ marginLeft: 30 }}>
        Locație
      </h4>
      <div className="locationCard">
        <img
          src={p7}
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
            <span>Aleea Cu Brazi 3-5, Buftea 070000, România</span>
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
      <div style={{ textAlign: "center", padding: "0 2rem 2rem 2rem" }}>
        <img
          src={connectionImage}
          alt="Connection"
          width="150px"
          height="auto"
          style={{
            objectFit: "contain",
          }}
        />
        <h1 className="footerTitle">Karina & Jafer</h1>
        <h5 className="footerDate">24 Mai 2026 - București</h5>
      </div>
    </>
  );
}
