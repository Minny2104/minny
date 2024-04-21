import React, { lazy, useEffect,useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router';
import { Line,Pie } from 'react-chartjs-2';


const Dashboard = () => {

  const history = useHistory();
  
  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if(flag != "true"){
      history.push(`/Login`);
    }
}, );

  // Graph data and options
  const graphData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  // Pie chart data and options
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  return (
    <>
    <div class="Container">
    <div class="card">
      <div>
        <div class="numbers">2442</div>
        <div class="cardName">Views</div>
        <div class="iconBox">
        <img src="/image/eye.png"
        style={{
            width: "60px",
            height: "60px",
          }} />
        </div>
        </div>
      </div>
    <div class="card">
      <div>
        <div class="numbers">945</div>
        <div class="cardName">Orders</div>
        <div class="iconBox">
        <img src="/image/cart.png"
        style={{
            width: "90px",
            height: "90px",
          }} />
        </div>
      </div>
    </div>
    <div class="card">
      <div>
        <div class="numbers">345</div>
        <div class="cardName">Employee</div>
        <div class="iconBox">
        <img src="/image/people.png"
        style={{
            width: "80px",
            height: "80px",
          }} />
        </div>
      </div>
    </div>
    <div class="card">
      <div>
        <div class="numbers">$7200</div>
        <div class="cardName">Earnings</div>
        <div class="iconBox">
        <img src="/image/earning.png"
        style={{
            width: "80px",
            height: "80px",
          }} />
        </div>
      </div>
    </div>
    </div>

    <div className="container">
      <div className="graph-container">
        <Line data={graphData} />
      </div>
      <div className="pie-chart-container">
        <Pie data={pieData} />
      </div>
    </div>
    </>
  );
};

export default Dashboard
