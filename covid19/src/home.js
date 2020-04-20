import React, { Component } from "react";
import Axios from "axios";
import { MDBDataTable, MDBCol, MDBContainer, MDBRow ,MDBBtn} from "mdbreact";
import {Link} from 'react-router-dom'
import './home.css'

class home extends Component {
  state = {
    all: {},
    countrywise: [],
    Row: [],
    downloaded:false,
  
  };

  componentDidMount = async () => {
    let res = await Axios.get("https://corona.lmao.ninja/v2/all");
    let res2 = await Axios.get("https://corona.lmao.ninja/v2/countries");
    
    
    let Row = [];
    res2.data.map(obj => {
      let row = {
        country: "",
        cases: "",
        todayCases: "",
        deaths: "",
        todayDeaths: "",
        recovered: "",
        active: "",
        critical: "",
        recoveryrate:0,
        deathrate:0,
        History:""
      };

      row.country = obj.country.toString()
      row.cases = obj.cases.toString();
      row.todayCases = obj.todayCases.toString();
      row.deaths = obj.deaths.toString();
      row.todayDeaths = (
        <h4 style={{ fontWeight: "bold", color: "red" }}>{obj.todayDeaths.toString()}</h4>
      );
      row.recovered = obj.recovered.toString();
      row.active = obj.active.toString();
      row.critical = obj.critical.toString();
      row.recoveryrate= <h4 style={{ fontWeight: "bold", color: "green" }}>{((parseFloat(obj.recovered.toString())/parseFloat(obj.cases.toString()))*100).toFixed(2) + '%'}</h4>
      row.deathrate=<h4 style={{ fontWeight: "bold", color: "red" }}>{((parseFloat(obj.deaths.toString())/parseFloat(obj.cases.toString()))*100).toFixed(2) +'%'}</h4>
      row.History=<Link to={{pathname:'/charts',Props:{lbl:obj.country}}}><MDBBtn color="default" rounded size="sm" >HISTORY</MDBBtn></Link>;
      Row.push(row);
    });
    // this.setState({ Row: Row });
    this.data.rows=Row
    this.data.cols=this.cols
    // this.setState({downloaded:true})
    this.setState({ all: res.data, countrywise: res2.data });
    
  };
  cols = [
    {
      label: "Country",
      field: "country",
      sort: "asc",
      width: 150
    },
    {
      label: "Total Cases",
      field: "cases",
      sort: "asc",
      width: 150
    },
    {
      label: "Cases Today",
      field: "todayCases",
      sort: "asc",
      width: 150
    },
    {
      label: "Total Deaths",
      field: "deaths",
      sort: "asc",
      width: 150
    },
    {
      label: "Deaths Today",
      field: "todayDeaths",
      sort: "asc",
      width: 150
    },
    {
      label: "Recovered",
      field: "recovered",
      sort: "asc",
      width: 150
    },
    {
      label: "Active",
      field: "active",
      sort: "asc",
      width: 150
    },
    {
      label: "Critical",
      field: "critical",
      sort: "asc",
      width: 150
    },
    {
      label: "Death Rate",
      field: "deathrate",
      sort: "asc",
      width: 150
    },
    {
      label: "Recovery Rate",
      field: "recoveryrate",
      sort: "asc",
      width: 150
    },
    {
      label: "Historical Data",
      field: "History",
      sort: "asc",
      width: 150
    }
  ];
   data={
    rows:[],
    cols:[]
  }
  componentDidUpdate=()=>{
     setTimeout(async() => {
      // 
      
    let res = await Axios.get("https://corona.lmao.ninja/v2/all");
    let res2 = await Axios.get("https://corona.lmao.ninja/v2/countries");
    
    
    let Row = [];
    res2.data.map(obj => {
      let row = {
        country: "",
        cases: "",
        todayCases: "",
        deaths: "",
        todayDeaths: "",
        recovered: "",
        active: "",
        critical: "",
        recoveryrate:0,
        deathrate:0,
        History:""
      };

      row.country = obj.country.toString()
      row.cases = obj.cases.toString();
      row.todayCases = obj.todayCases.toString();
      row.deaths = obj.deaths.toString();
      row.todayDeaths = (
        <h4 style={{ fontWeight: "bold", color: "red" }}>{obj.todayDeaths.toString()}</h4>
      );
      row.recovered = obj.recovered.toString();
      row.active = obj.active.toString();
      row.critical = obj.critical.toString();
      // row.recoveryrate=obj.recovered.toString()
      // console.log(row.recoveryrate)
      row.recoveryrate= <h4 style={{ fontWeight: "bold", color: "green" }}>{((parseFloat(obj.recovered.toString())/parseFloat(obj.cases.toString()))*100).toFixed(2) + '%'}</h4>
      row.deathrate=<h4 style={{ fontWeight: "bold", color: "red" }}>{((parseFloat(obj.deaths.toString())/parseFloat(obj.cases.toString()))*100).toFixed(2) +'%'}</h4>
      row.History=<Link to={{pathname:'/charts',Props:{lbl:obj.country}}}><MDBBtn color="default" rounded size="sm" >HISTORY</MDBBtn></Link>;
      Row.push(row);
    });
    // this.setState({ Row: Row });
    this.data.rows=Row
    this.data.cols=this.cols
    // this.setState({downloaded:true})
    this.setState({ all: res.data, countrywise: res2.data });
    }, 60000);

  
  }
  render() {
    // console.log(this.state)
   
    // console.log(this.data)
    return (
      
      <div className="container">
        {this.state.countrywise.length===0?
        (<div><div class="loader">Loading...</div>
        <h4 style={{textAlign:"center"}}>Fetching data. Please wait.</h4></div>):
        (<div><br></br>
        <h1 style={{color:"Red",fontWeight:"bold" , textAlign:"center"}}>COVID19</h1>
        <hr style={{}}></hr>
        <br></br>
        
          <title>COVID-19</title>
          <div className="div2">
          <h1>Total Cases: <span style={{ fontWeight: "bold" ,color:"Blue"}}> {this.state.all.cases}</span> </h1>
          <h1>Total Deaths: <span style={{ fontWeight: "bold",color:"Red" }}> {this.state.all.deaths}</span> </h1>
          <h1>Total Recovered: <span style={{ fontWeight: "bold",color:"Green"}}> {this.state.all.recovered}</span> </h1>
          </div>
          <div className="div1"> 
          <MDBRow>
            <MDBCol size="4">
              {" "}
              <h1 style={{ textAlign: "center" }}>Total Cases </h1>
            </MDBCol>
            <MDBCol size="4">
              <h1 style={{ textAlign: "center" }}>Total Deaths </h1>
            </MDBCol>
            <MDBCol size="4">
              <h1 style={{ textAlign: "center" }}>Total Recovered </h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="4">
              {" "}
              <h1 style={{ textAlign: "center", fontWeight: "bold" ,color:"Blue"}}>
                {" "}
                {this.state.all.cases}
              </h1>
            </MDBCol>
            <MDBCol size="4">
              <h1 style={{ textAlign: "center", fontWeight: "bold" ,color:"Red"}}>
                {this.state.all.deaths}
              </h1>
            </MDBCol>
            <MDBCol size="4">
              <h1 style={{ textAlign: "center", fontWeight: "bold",color:"Green" }}>
                {this.state.all.recovered}
              </h1>
            </MDBCol>
          </MDBRow>
          </div>
          <hr></hr>
          <MDBDataTable
            responsive
            striped
            sortable={false}
            bordered
            small
            data={{columns:this.data.cols, rows:this.data.rows}}
          />
    </div>)}
      </div>
    )}
}

export default home;
