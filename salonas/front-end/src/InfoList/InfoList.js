import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "../Info/Info.js";

const endpoint = "http://localhost:3001/info";

export default function InfoList() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => setinfo(data))
      .catch((error) => { console.log(error); });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>Sukūrimo laikas</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {info.map((info) => {
            return <Info setinfo={setinfo} Info={info} key={info._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}