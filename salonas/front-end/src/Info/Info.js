import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:3001/Editinfo";
<script type="module" src="info.mjs"></script>


export default function Info({Info, setInfo }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete(`${endpoint}/${Info._id}`)
      .then(() => {
        setInfo((prev) => prev.filter((p) => p._id !== Info._id));
      })
      .catch((err) => {
        console.log(err);
        alert("Nepavyko istrinti");
      });
  }

  function handleUpdate() {
    navigate(`/edit/${Info._id}`);
  }

  return (
    <tr>
      <td>{Info.name}</td>
      <td>{Info.LastName}</td>
      <td>{Info.registrationDate.split("T")[0]}</td>
      <td>
        <button onClick={handleDelete}>Istrinti</button>
      </td>
      <td>
        <button onClick={handleUpdate}>Atnaujinti</button>
      </td>
    </tr>
  );
}