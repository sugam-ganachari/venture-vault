import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import Transaction from "./Transaction";
import { iconsImgs } from "../utils/images";
import { Link } from "react-router-dom";
import Collection from "./Collection";
import Cards from "./Cards";
import Userinfo from "./Userinfo";

export default function Dashboard() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [purchaseDetails, setPurchaseDetails] = useState([]);

  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/login");
    }
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/authorization/fetchPurchases",
          {
            headers: {
              "auth-token": localStorage.getItem("token"),
              "Content-Type": "application/json",
            },
          }
        );

        setData(response.data);
        setLoading(false);

        fetchPurchaseDetails(response.data.purchArr);
      } catch (error) {
        console.error("Error making the request:", error);
        setLoading(false);
      }
    }

    async function fetchPurchaseDetails(ids) {
      const purchaseDetailsArray = [];
      if (!ids) {
        nav("/ventures");
        return;
      }
      for (let i = 0; i < ids.length; i++) {
        console.log(ids[i].venture_id);
        const id = ids[i].venture_id;
        // console.log(ids[i])
        try {
          const response = await axios.get(
            `http://localhost:5000/api/authorization/fetchVentures/${id}`
          );

          if (response.data.success) {
            purchaseDetailsArray.push(response.data.data);
          } else {
            console.error(
              `Error fetching data for ${id}:`,
              response.data.message
            );
          }
        } catch (error) {
          console.error(`Error making the request for ${id}:`, error);
        }
      }
      setPurchaseDetails(purchaseDetailsArray);
    }
    fetchData();
  }, [nav]);

  console.log(data);
  //   console.log(purchaseDetails);
  purchaseDetails.forEach((innerArray) => {
    const data1Array = innerArray[0].data1;
    console.log(data1Array[0]);
  });

  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <>
      {!loading && (
        <div className="main-content-holder">
          <div
            className="dashboard-header"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to="/">
              <img src="backicon-grey.png" alt="back.img" />
            </Link>
            <div className="date">
              <h4>TODAY IS</h4>
              <p>{currentDate}</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "30px 0",
            }}
          >
            <img src={iconsImgs.user} alt="img" />
            <h1>DASHBOARD</h1>
          </div>
          <div className="content-grid-one">
            <Cards />
            <Cards />
            <Userinfo />
          </div>
          <div className="content-grid-two">
            <Transaction />
            <Collection />
          </div>
        </div>
      )}
      {loading && <Spinner />}
    </>
  );
}
