import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import xIcon from "./assets/xIcon.svg";

export default function ParticipationForm() {
  const [people, setPeople] = useState([{ name: "" }]);
  const [loading, setLoading] = useState(false);
  const [dietReq, setDietReq] = useState();
  const [answer, setAnswer] = useState();

  console.log(answer);

  useEffect(() => {
    emailjs.init("Zg2tNKDovVnq2BsGd");
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedPeople = [...people];
    updatedPeople[index][field] = value;
    setPeople(updatedPeople);
  };

  const addPerson = () => {
    setPeople((prevPeople) => [...prevPeople, { name: "" }]);
  };
  const removePerson = (index) => {
    setPeople((prevPeople) => prevPeople.filter((_, i) => i !== index));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const serviceId = "service_40jonz5";
  //   const templateId = "template_m3968ex";

  //   try {
  //     setLoading(true);
  //     await emailjs.send(serviceId, templateId, {
  //       guests: people,
  //       recipient: "karinagbr2000@gmail.com",
  //     });
  //     alert("Email successfully sent. Check inbox.");
  //   } catch (error) {
  //     console.error("Email sending failed:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_40jonz5";
    const templateId = "template_m3968ex";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        guests: people,
        dietReq: dietReq || "N / A",
        answer: answer,
        recipient: "karinagbr2000@gmail.com",
      });
      alert("Answer sent successfully");
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="formCard">
      <h4 className="form-subtitle">Vei participa?</h4>
      <p>
        Vă așteptăm cu drag! <br />
        <br />
        Avem deosebita plăcere de a vă invita să fiți alături de noi în ziua în
        care sufletele noastre se vor uni.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        {people.map((person, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "start",
            }}
          >
            <label htmlFor="name">Full name</label>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexWrap: "noWrap",
                marginBottom: "20px",
                justifyContent: "space-between",
              }}
            >
              <input
                id="name"
                type="text"
                placeholder="Full name"
                value={person.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                required
                className="inputField"
              />
              {index > 0 && (
                <button
                  onClick={() => removePerson(index)}
                  style={{ background: "none", border: "none" }}
                >
                  <img src={xIcon} alt="Close Icon" height={26} width={26} />
                </button>
              )}
            </div>
          </div>
        ))}
        <button type="button" onClick={addPerson} className="normalButton">
          Adauga inca o persoana
        </button>
        {/* New Attendance Options */}
        <div style={{ marginTop: "16px", marginBottom: "16px" }}>
          <p style={{ marginBottom: "8px" }}>Attendance Confirmation:</p>
          <label style={{ marginRight: "16px" }}>
            <input
              onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="attendance"
              value="Yes"
              required
            />{" "}
            Da
          </label>
          <label>
            <input
              onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="attendance"
              value="No"
              required
            />
            Nu
          </label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "start",
          }}
        >
          <label htmlFor="dietReq">Diet Requirements</label>
          <textarea
            id="dietReq"
            placeholder="Any dietary requirements or allergies? Please specify per person."
            value={dietReq}
            onChange={(e) => setDietReq(e.target.value)}
            className="messageInput"
          />
        </div>
        <button className="submitButton" type="submit" disabled={loading}>
          {loading ? "Se trimite..." : "Trimite raspuns"}
        </button>
      </form>
    </section>
  );
}
