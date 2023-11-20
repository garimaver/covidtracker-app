import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
  const [data, setData] = useState([])


  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section className="">
        <h1 > 🔴 LIVE</h1>
        <h2> COVID-19 CORONAVIRUS TRACKER </h2>
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3  justify-center max-w-6xl px-4 py-4 mx-auto h-30 shadow-md  lg:py-0">
          <li className="card bg-blue-600  ">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>OUR</span>COUNTRY
                </p>
                <p className="card-total card-small">INDIA</p>
              </div>
            </div>
          </li>
          <li className="card bg-green-500">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>TOTAL</span>RECOVERED
                </p>
                <p className="card-total card-small">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card bg-yellow-300">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>TOTAL</span>CONFIRMED
                </p>
                <p className="card-total card-small">{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className="card bg-orange-600">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>TOTAL</span>DEATH
                </p>
                <p className="card-total card-small">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card bg-blue-900">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>TOTAL</span>ACTIVE
                </p>
                <p className="card-total card-small">{data.active}</p>
              </div>
            </div>
          </li>
       
          <li className="card bg-pink-500">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>LAST</span>UPDATED
                </p>
                <p className="card-total card-small">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
