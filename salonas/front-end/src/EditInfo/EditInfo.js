import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const endpoint = "http://localhost:3002/Info";

export default function Editinfo() {
  const [name, setName] = useState("SetName");
  const [secondName, setSecondName] = useState("SecondName");
  const [registrationDate, setRegistrationDate] = useState("Registration Date");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${endpoint}/${id}`).then(({ data }) => {
      console.log(data.registrationDate);
      setName(data.name);
      setName(data.secondName);
      setRegistrationDate(data.registrationDate.split("T")[0]);
    });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`${endpoint}/${id}`, {
        name,
        secondName,
        registrationDate,
      })
      .then(() => {
        navigate("/");
      })
      .catch(() => alert("Ivyko klaida"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <label htmlFor="text">Second Name</label>
        <input type="date" value={Date} onChange={(e) => setRegistrationDate(e.target.value)} /> <br />
        <label htmlFor="date">Registration Date</label>
        <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
        <br />
        <label htmlFor="">Registration date</label>
        <input
          type="date"
          value={registrationDate}
          onChange={(e) => setRegistrationDate(e.target.value)}
        />
        <br />
        <button type="submit">Prisiregistruoti</button>
      </form>
    </div>
  );
}