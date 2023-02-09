import {
  Container,
  createTheme,
  Input,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

function Output() {
  const [ruc, setruc] = useState("");

  const [inf, setinf] = useState([]);
  const [color, setcolor] = useState("primary");
  const [valid, setvalid] = useState(false);

  useEffect(() => {
    setruc(ruc);
  }, [ruc]);

  const getValues = async (rucValue) => {
    const url = `https://dniruc.apisperu.com/api/v1/ruc/${rucValue}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hcnRpbm11bmF5Y28xMjNAaG90bWFpbC5jb20ifQ.gHfpBC84Z3Vbi-NmwHiDjRYI6NzbK3-I9KTjlYj7op8`;
    const response = await fetch(url);
    const data = await response.json();
    setinf(data);
  };

  const buscar = (value) => {
    if (value.length === 11) {
      getValues(value);
      setvalid(true);
    } else {
      setvalid(false);
      alert("Invalid Ruc");
    }
  };

  return (
    <div className="app__container">
      <Link to="/ruc-find/" className="btn__back">Back</Link>
      <h1 className="app__title">Let's search</h1>
      <input
        className="app__input"
        margin="normal"
        id="standard-basic"
        placeholder="Ruc"
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setruc(e.target.value);
            buscar(e.target.value);
          }
        }}
      />

      {valid > 0 ? (
        <ul className="list__container">
          <h3 className="list__title">Inf. from: {ruc}</h3>
          <li className="list__item">
            <p className="list__item-title">Razón Social:</p> {inf.razonSocial}
          </li>
          <li className="list__item">
            <p className="list__item-title">Ruc: </p>
            {inf.ruc}
          </li>
          <li className="list__item">
            <p className="list__item-title">Estado: </p>
            {inf.estado}
          </li>
          <li className="list__item">
            <p className="list__item-title">Condición: </p>
            {inf.condicion}
          </li>
          <li className="list__item">
            <p className="list__item-title">Dirección: </p>
            {inf.direccion !== null ? inf.direccion : "-No registrado-"}
          </li>
          <li className="list__item">
            <p className="list__item-title">Despartamento:</p>{" "}
            {inf.departamento !== null ? inf.departamento : "-No registrado-"}
          </li>
          <li className="list__item">
            <p className="list__item-title">Provincia: </p>
            {inf.provincia !== null ? inf.provincia : "-No registrado-"}
          </li>
          <li className="list__item">
            <p className="list__item-title">Distrito: </p>
            {inf.distrito !== null ? inf.distrito : "-No registrado-"}
          </li>
          <li className="list__item">
            <p className="list__item-title">Sis. de Emisión: </p>
            {inf.sistEmsion !== null ? inf.sistEmsion : "-No registrado-"}
          </li>
          <li className="list__item">
            <p className="list__item-title">Sis. de Contabilidad: </p>
            {inf.sistContabilidad !== null
              ? inf.sistContabilidad
              : "-No registrado-"}
          </li>
        </ul>
      ) : (
        <h3 className="list__title">Empty</h3>
      )}
    </div>
  );
}

export default Output;
