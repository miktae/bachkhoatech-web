import React, { useState, useEffect } from "react";
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
    'pH': 'Loading...',
    'id': 'Loading...'
  }]);

  const usersCollectionRef = collection(db, "iot_datas");
  const Title = ['Name', 'Temperature', 'Humidity', 'pH'];

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
              <td className="text-center">{data.id}</td>
              <td className="text-center">{data.temp}</td>
              <td className="text-center">{data.hum}</td>
              <td className="text-center">{data.pH}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center flex-wrap chart-container">
        <Line
          options={
            {
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                  align: "start",
                  labels: {
                    usePointStyle: true,
                  },
                },
                tooltips: {
                  mode: 'index',
                  intersect: false,
                },
               hover: {
                  mode: 'nearest',
                  intersect: true
                },
                title: {
                  display: true,
                  text: 'Temperature Chart',
                },
              },
            }
          }

          data={
            {
              labels: iotData.map((data) => data.id),
              datasets: [{
                label: 'Temperature',
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
                text: 'Humidity Chart',
              },
            },
          }
        }
          data={
            {
              labels: iotData.map((data) => data.id),
              datasets: [{
                label: 'Humidity',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: iotData.map((data) => data.hum),
              }]
            }
          } />
          <Line
        options={
          {
            responsive: true,
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
                text: 'pH Chart',
              },
            },
          }
        }
          data={
            {
              labels: iotData.map((data) => data.id),
              datasets: [{
                label: 'pH',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: iotData.map((data) => data.pH),
              }]
            }
          } />
      </div>
    </div>
  )
}

export default Home