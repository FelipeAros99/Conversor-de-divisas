import React, { useEffect } from 'react'
import ExportToExcel from './Excel';
import CurrencyFormat from 'react-currency-format';
import {useState} from 'react'



const Result = (props) => {

  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/select')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.log(error));
  },[]);


  


  return (
    <>
        <label>Monto Conversión: {props.uf} UF</label><br/>
        <label>Fecha Conversión: {props.ufDate} </label><br/>
        <label>valor moneda <CurrencyFormat value={props.ufPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></label><br/>
        <label>Monto: <CurrencyFormat value={props.totalAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} /></label><br/>
        {
          window.localStorage.getItem('SessionType')==="admin" ? <ExportToExcel jsonData={jsonData} fileName="Registro-Datos"/>:<></>

       
        }
        
    </>
  )
}

export default Result