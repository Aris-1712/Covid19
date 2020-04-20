import React, { Component } from "react";
import Axios from "axios";
import { Line } from "react-chartjs-2";
import { MDBDataTable, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import {withRouter,Redirect} from 'react-router-dom'
import './charts.css'

class charts extends Component {
    state={
        chart:{},
        chart2:{},
        chart3:{}
    }
    componentDidMount=async()=>{
        try{
        let res = await Axios.get("https://corona.lmao.ninja/v2/historical/"+this.props.location.Props.lbl);
        // console.log(res.data)
        let label=Object.keys(res.data.timeline.cases)
        let dt=[]
        let data=label.map((obj)=>{
            dt.push(res.data.timeline.cases[obj])

        })
        let label2=Object.keys(res.data.timeline.deaths)
        let dt2=[]
        let data2=label2.map((obj)=>{
            dt2.push(res.data.timeline.deaths[obj])

        })
        // let label3=Object.keys(res.data.timeline.recovered)
        // let dt3=[]
        // let data3=label3.map((obj)=>{
        //     dt3.push(res.data.timeline.recovered[obj])

        // })
        // this.setState({label:label,data:dt})
        let chart = {
            dataLine: {
              labels:label,
              datasets: [
                {
                  label: "Cases",
                  fill: true,
                  lineTension: 0.3,
                  backgroundColor: "rgba(225, 204,230, .3)",
                  borderColor: "rgb(205, 130, 158)",
                  borderCapStyle: "butt",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgb(205, 130,1 58)",
                  pointBackgroundColor: "rgb(255, 255, 255)",
                  pointBorderWidth: 10,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgb(0, 0, 0)",
                  pointHoverBorderColor: "rgba(220, 220, 220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: dt
                }
              ]
            }
          };
          let chart2 = {
            dataLine: {
              labels:label2,
              datasets: [
                {
                  label: "Deaths",
                  fill: true,
                  lineTension: 0.3,
                  backgroundColor: "rgba(225, 204,230, .3)",
                  borderColor: "rgb(205, 130, 158)",
                  borderCapStyle: "butt",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgb(205, 130,1 58)",
                  pointBackgroundColor: "rgb(255, 255, 255)",
                  pointBorderWidth: 10,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgb(0, 0, 0)",
                  pointHoverBorderColor: "rgba(220, 220, 220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: dt2
                }
              ]
            }
          };
          // let chart3 = {
          //   dataLine: {
          //     labels:label3,
          //     datasets: [
          //       {
          //         label: "Recovered",
          //         fill: true,
          //         lineTension: 0.3,
          //         backgroundColor: "rgba(225, 204,230, .3)",
          //         borderColor: "rgb(205, 130, 158)",
          //         borderCapStyle: "butt",
          //         borderDash: [],
          //         borderDashOffset: 0.0,
          //         borderJoinStyle: "miter",
          //         pointBorderColor: "rgb(205, 130,1 58)",
          //         pointBackgroundColor: "rgb(255, 255, 255)",
          //         pointBorderWidth: 10,
          //         pointHoverRadius: 5,
          //         pointHoverBackgroundColor: "rgb(0, 0, 0)",
          //         pointHoverBorderColor: "rgba(220, 220, 220,1)",
          //         pointHoverBorderWidth: 2,
          //         pointRadius: 1,
          //         pointHitRadius: 10,
          //         data: dt3
          //       }
          //     ]
          //   },chart3:chart3.dataLine
          // };
          this.setState({chart:chart.dataLine,chart2:chart2.dataLine})
        }
        catch(err){
            alert("Select a country to view the data")
        }
    }
    componentDidUpdate=()=>{
      //  console.log(this.state)
      }
    render(){
      let key=Object.keys(this.state.chart)
        // console.log(this.props)
return(

<div>
  {key.length===0?(<div><div class="loader">Loading...</div>
        <h4 style={{textAlign:"center"}}>Fetching data. Please wait.</h4></div>):(<MDBContainer>
    {this.props.location.Props!==undefined?<h1 className="mt-5" style={{color:"Red",fontWeight:"bold"}}>{this.props.location.Props.lbl}<span style={{fontWeight:"lighter"}}>(Daily data)</span></h1>: <Redirect to="/" />}
    <h2 style={{fontWeight:"bold"}}>Total Cases</h2>
    <Line data={this.state.chart} options={{ responsive: true }} />
    <hr></hr>
    <h2 style={{fontWeight:"bold"}}>Total Deaths</h2>
    <Line data={this.state.chart2} options={{ responsive: true }} />
    <br></br>
    <br></br>
    {/* <hr></hr>
    <h2 style={{fontWeight:"bold"}}>Recovered</h2>
    <Line data={this.state.chart3} options={{ responsive: true }} /> */}
  </MDBContainer>)}
</div>
)
    }
}
export default withRouter(charts)