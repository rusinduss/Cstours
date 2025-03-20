import React, { useState } from 'react'
import "./form.css"
import  CsToursLogo from '../assets/CsToursLogo.jpeg'
import Calendar from "react-calendar";
import DatePicker from "react-date-picker"
import "react-date-picker/dist/DatePicker.css";

function Form() {
    const[fromdate,setFromDate]=useState(new Date());
    const[todate,setToDate]=useState(new Date());
    const[name,setName]=useState("");
    const[number,setNumber]=useState("");
    const[country,setCountry]=useState("");
    const[persons,setPersons]=useState(0);
const handlesubmit=(e)=>{
    e.preventDefault();

    const formData={
        name,
        country,
        number,
        persons,
        fromdate: fromdate.toDateString(),
        todate: todate.toDateString(),

    };
    alert(formData);
}

  return (
    <div className='form'>
        <div className="form-wrapper">
            <div className="form-left">
                <div className="form-logo">
                    <img src={CsToursLogo}/>
                <div className="form-desc">
                    fill the form and enjoy the tour</div>    
                </div>
            </div>
            <div className="form-right">
                <form>
                <div className="form-info">
                <label>Name</label>
                    <input placeholder='Name' onChange={(e)=>setName(e.target.value)} type='text' name='name'/><br/>
                <label>Country</label>
                    <input placeholder='country' onChange={(e)=>setCountry(e.target.value)} type='text' name='country'/><br/>
                <label>Date </label><br/>
                <label>From</label>
                <DatePicker onChange={setFromDate} value={fromdate}/><br/>
                <label>To</label>
                <DatePicker onChange={(e)=>setToDate(e.target.value)} value={todate}/><br/>
                <label>Whatsapp Number</label>
                    <input placeholder='Whatsapp number' onChange={(e)=>setNumber(e.target.value)} type='text' name='Whatsapp number'/><br/>
                 <label>How many persons</label>
                    <select name="option" onChange={(e)=>setPersons(e.target.value)}>    
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="family">family</option>
                    <option value="group">group(more than 5)</option>
                    </select><br/>
                    <button className='form-btn' type="submit">Submit</button>
                </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Form;