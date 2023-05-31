import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Result from "./Result";
import Moment from "moment";
import axios from "axios";


const Converter = () => {
  const [trigger, setTrigger] = useState(false);
  const [uf, setUf] = useState(0);
  const [ufDate, setUfDate] = useState("");
  const [ufPrice, setUfPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  
  const handleChange = (e) => {
    const handleInsert = (uf,fecha,valorMoneda,total)=>{
      let iduser = window.localStorage.getItem("SessionId");
      axios
      .get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/insert`, {
        params: {
          uf: uf,
          fecha: fecha,
          valorMoneda: valorMoneda,
          total: total,
          id: iduser,
        },
      })
      .then((response) => {

      });
    }
    let fecha1 = e.target.value.toString();
    let fecha1Formateada = Moment(fecha1, "YYYY-MM-DD").format("DD-MM-YYYY");
    let valorMoneda;
    let total;
    setUfDate(e.target.value);
    axios
      .get(`https://mindicador.cl/api/uf/` + fecha1Formateada, {})
      .then((response) => {
        valorMoneda = response.data.serie[0].valor
        total = Math.round(valorMoneda * parseFloat(uf))
        setUfPrice(valorMoneda)
        setTotalAmount(total)
        
        handleInsert(uf,fecha1,valorMoneda,total)
      });
      
    
    if (trigger) {
      setTrigger(trigger);
    } else {
      setTrigger(!trigger);
    }
  };
  const handleChangeUf = (e) => {
    setUf(e.target.value);
  };
  return (
    <Box>
      <Typography component="h1" variant="h5">
        Conversor de divisas
      </Typography>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <InputLabel>Ingrese UF</InputLabel>
        <Input
          type="number"
          step="0.01"
          fullWidth
          id="UF"
          onChange={handleChangeUf}
          placeholder="1.0"
          name="UF"
          autoFocus
        />
        <InputLabel>Para decimales utilizar "."</InputLabel>
      </Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <InputLabel>Ingrese fecha de UF</InputLabel>
        <Input
          type="date"
          onChange={handleChange}
          fullWidth
          id="date"
          placeholder="Ingrese fecha de UF"
          name="date"
        />
      </Box>
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        {trigger ? (
          <Result
            uf={uf}
            ufDate={ufDate}
            ufPrice={ufPrice}
            totalAmount={totalAmount}
          />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default Converter;
