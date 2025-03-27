import axios from "axios";
import React from "react";
import CardDetail from "./[id]";
const token = "64bebc1e2c6d3f056a8c85b7";
const NEXT_API = "https://green-shop-backend.onrender.com/api";
const Cards = async () => {
  const res = await axios.get(
    `${NEXT_API}/flower/category/house-plants?access_token=${token}`
  );
  const data = await res.data.data;
  console.log(data);
  return (
    <div>
      <h1>hello cards</h1>
      <CardDetail data={data} />;
    </div>
  );
};

export default Cards;
