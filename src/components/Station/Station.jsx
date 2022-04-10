import React, { useState, useEffect } from 'react'
import './Station.css'
import Toggle from './Toggle'
import Statistic from './Statistic'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Station(props) {
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
    <div className="d-flex flex-column container-fluid station">
      <h1>{props.name}</h1>
      <div className="d-flex flex-wrap vmc">
        <div className="d-flex flex-column viewmode">
          <div className="view">
            <label htmlFor="temp">Nhiệt độ</label> <br />
            <input type="number" value={20.3}
              className="text-center" readOnly={true} />
            &ensp; &#8451; <br />
            <label htmlFor="temp">Độ ẩm </label> <br />
            <input type="number" value={80}
              className="text-center" readOnly={true} />
            &ensp; %
          </div>
          <div className="mode">
            <h5>Mode</h5>
            <div className="d-flex ">
              <div className="auto">
                <label htmlFor="auto">
                  Auto
                </label>
                &ensp;
                <input type="radio"
                  name="mode" id="auto" />
              </div>
              <div className="manual">
                <label htmlFor="manual">
                  Manual
                </label> &ensp;
                <input type="radio"
                  name="mode" id="manual" />
              </div>
            </div>
            <br /> <br />
            <div className="fan">
              <Toggle name="Quạt" icon="fa-solid fa-fan" />
              <Toggle name="Phun sương" icon="fa-solid fa-lightbulb" />
            </div>
          </div>
        </div>
        <div className="chart">
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
                datasets: [
                  {
                    label: 'Nhiệt độ',
                    borderColor: 'red',
                    backgroundColor: 'red',
                    data: iotData.map((data) => data.temp),
                  },
                  {
                    label: 'Độ ẩm',
                    borderColor: 'blue',
                    backgroundColor: 'blue',
                    data: iotData.map((data) => data.hum),
                  },
                ]
              }
            } />
        </div>
      </div>
      <Statistic />
    </div>
  )
}

export default Station