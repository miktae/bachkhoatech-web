import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import {
  collection,
  onSnapshot
} from "firebase/firestore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Home.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  const [iotData, setIotData] = useState([{
    'temp': 'Loading...',
    'hum': 'Loading...',
    'id': 'Loading...'
  }]);

  const usersCollectionRef = collection(db, "iot_datas");
  const Title = ['Tên trạm', 'Nhiệt độ(°C)', 'Độ ẩm(%)'];

  useEffect(() => onSnapshot(usersCollectionRef, (snapshot) => {
    setIotData(snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })))
  }), []);

  return (
    <div className="container-fluid p-2">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {Title.map((title, index) => (
              <th className="text-center" key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {iotData.map((data, index) => (
            <tr key={index}>
              <td className="text-center">
                <Link className="text-dark text-decoration-none link-hover"
                 to={data.id}>{data.id}</Link>
              </td>
              <td className="text-center">{data.temp}</td>
              <td className="text-center">{data.hum}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center flex-wrap chart-container">
        <Line
          options={
            {
              responsive: true,
              interaction: {
                mode: "index",
                intersect: false,
              },
              tooltips: {
                mode: 'index',
                intersect: false,
              },
              hover: {
                mode: 'nearest',
                intersect: true
              },
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                  align: "start",
                  labels: {
                    usePointStyle: true,
                  },
                },
                title: {
                  display: true,
                  text: 'Biểu đồ nhiệt độ',
                },
              },
            }
          }

          data={
            {
              labels: iotData.map((data) => data.id),
              datasets: [{
                label: 'Nhiệt độ',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: iotData.map((data) => data.temp),
              }]
            }
          } />
        <Line
          options={
            {
              responsive: true,
              interaction: {
                mode: "index",
                intersect: false,
              },
              tooltips: {
                mode: 'index',
                intersect: false,
              },
              hover: {
                mode: 'nearest',
                intersect: true
              },
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                  align: "start",
                  labels: {
                    usePointStyle: true,
                  },
                },
                title: {
                  display: true,
                  text: 'Biểu đồ độ ẩm',
                },
              },
            }
          }
          data={
            {
              labels: iotData.map((data) => data.id),
              datasets: [{
                label: 'Độ ẩm',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: iotData.map((data) => data.hum),
              }]
            }
          } />
      </div>
    </div>
  )
}

export default Home