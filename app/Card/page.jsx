import React from "react";
import Cards from "./cards/page";

const token = "64bebc1e2c6d3f056a8c85b7";
const NEXT_API = "https://green-shop-backend.onrender.com/api";
const Card = async () => {
  const res = await axios.get(
    `${NEXT_API}/flower/category/house-plants?access_token=${token}`
  );
  const data = await res.data.data;
  console.log(data);

  return (
    <div>
      <Cards data={data} />;
    </div>
  );
};

export default Card;
