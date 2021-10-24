import React, { Component } from 'react';
class SalarySystem extends React.Component {
    state={
        Basic: 0,
        Gross: 0,
        Net:0,
        Calc:'T',
        Present:'active',
        Adhoc:0,
        Med:0
    }
    
    txt1={
        width:"290px",
        height:"40px",
        fontSize:"20",
        margin:"10px",
       
    }
    fun1=(e)=>
    {
        let x= e.target.value;

        if(x == "HOD")
        {
            document.getElementById('Med').value=5000
            this.setState({Med:5000})
        }
        else if(x=="Officer")
        {
            document.getElementById('Med').value=3000
            this.setState({Med:3000})
        }
        else
        {
            document.getElementById('Med').value=2000
            this.setState({Med:2000})
        }
    }

    fun2=(e)=>
    {
         let x= parseInt(document.getElementById('adh').value);
         x=  x / 100
         this.setState({Adhoc:this.state.Basic*x})
       
    }
    Calc=()=>
    {
        let x = this.state.Basic + this.state.Med + this.state.Adhoc
        if(this.state.Present == "Active")
        {
            this.setState({Gross: x})
        }
        else
        {
            this.setState({Gross: x/2})
        }

        let y = parseInt(document.getElementById('Itax').value)
        y= y / 100
        
        this.setState({Net: this.state.Gross - (this.state.Gross*y)})

    }
   
    render() { 
        return <>
        <div style={{margin:"50px", background:"#E6E6E6", width:"620px"}}>
            <hr/>
            <h1 style={this.txt1}>Salary System</h1>
            <div>
                <input style={this.txt1} type="text" placeholder="Enter Basic Salary" onChange={(e)=> this.setState({Basic: parseInt(e.target.value)})}/>
                <select style={this.txt1} onChange={this.fun1}>
                    <option >Employee</option>
                    <option >Officer</option>
                    <option >HOD</option>
                </select>
            </div>
            <div>
                <input type="text" style={this.txt1} placeholder="Adhoc 2021 in percentage" onChange={this.fun2} id="adh"/>
                <input type="text" style={this.txt1} placeholder="Medical Allowance" id='Med'/>
            </div>
            <div onChange={(e)=> this.setState({Present: e.target.value})}>
                <label style={this.txt1}><input type="radio" name="r1" value="Retired" />Retired</label>
                <label style={this.txt1}><input type="radio" name="r1" value="Active" />Active</label>
            </div>
            <div>
                <hr/>
                <h1 style={this.txt1}>Deduction</h1>
                <input  style={this.txt1} type="text" placeholder="Income Tax Percentage" id="Itax"/>
                <button style={this.txt1} onClick={this.Calc}>Calculate</button>

            </div>
            
            <hr/>
            <h1 style={this.txt1}>Basic: {this.state.Basic}</h1>
            <h1 style={this.txt1}>Medical: {this.state.Med}</h1>
            <h1 style={this.txt1}>Adhoc 2021: {this.state.Adhoc}</h1>
            <h1 style={this.txt1}>Status: {this.state.Present}</h1>
            <h1 style={this.txt1}>Gross: {this.state.Gross}</h1>
            <h1 style={this.txt1}>Net : {this.state.Net}</h1>

        </div>
        </>
    }
}
 
export default SalarySystem;