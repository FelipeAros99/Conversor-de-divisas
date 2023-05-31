import React from 'react'
import ExportToExcel from './Excel';
import CurrencyFormat from 'react-currency-format';
import {useState} from 'react'
import axios from 'axios'


const Result = (props) => {

  const [jsonData, setJsonData] = useState([]);
  var vars = [];
  const fetchData = () => {
    fetch('http://localhost:8000/select')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.log(error));
  };
  fetchData();

  


  return (
    <>
        <label>Monto Conversión: {props.uf} UF</label><br/>
        <label>Fecha Conversión: {props.ufDate} </label><br/>
        <label>valor moneda <CurrencyFormat value={props.ufPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></label><br/>
        <label>Monto: <CurrencyFormat value={props.totalAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} /></label><br/>
        {
          window.localStorage.getItem('SessionType')==="admin" ? <ExportToExcel jsonData={jsonData} fileName="data"/>:<></>

       
        }
        
    </>
  )
}

export default Result