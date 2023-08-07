import React, { useEffect, useRef } from 'react';
import './Calculator.css';
const Calculator = () => {
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
    var i;
    const host = 'api.frankfurter.app';
    function FetchData(){
    fetch(`https://${host}/currencies`)
        .then((data) => data.json())
        .then((data) => {
            const entries = Object.entries(data);
            for (i = 0; i < entries.length; i++) {
                ref1.current.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
                ref2.current.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
            }
        });
    }
    useEffect(()=>{
        FetchData()
    },[])
    function Converter(){
          var input=ref3.current.value;
          if(ref1.current.value !== ref2.current.value)
          {
            const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${input}&from=${ref1.current.value}&to=${ref2.current.value}`)
        .then((val) => val.json())
        .then((val) => {
            ref4.current.value= Object.values(val.rates)[0]
        });
          }
    }
    function Reset(e){
           e.preventDefault();
           ref1.current.value='';
           ref2.current.value='';
           ref3.current.value=0;
           ref4.current.value=0;
    }
    return (
        <div className='Calculator-Container' style={{width:"100%"}}>
        <div className="Row" >
            <h1>Convert Currency</h1>
            <div className="Col">
                <select className="currency" ref={ref1}>
                    <option>Select</option>
                </select>
                <input type="text" id='input_currency' name='' ref={ref3}/>
            </div>
            <div className="Col">
                <select className="currency" ref={ref2}>
                    <option>Select</option>
                </select>
                <input type="text" id='output_currency' disabled name='' ref={ref4}/>
            </div>
            <button onClick={Converter}>Convert</button>
            <button onClick={Reset} type='reset'>Reset</button>
        </div>
        <div className="Calculator-img">
            <img src={require('./SM.png')} alt='icon'/>
        </div>
        </div>
    )
}

export default Calculator