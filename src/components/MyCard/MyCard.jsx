import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { applicationContext } from "../../context";
import "./myCard.css";
const Mycard = ({ image, show }) => {
  const { setSingleMovie } = useContext(applicationContext);
  const navigate = useNavigate();
  const imgOnClick = (show) => {
    setSingleMovie(show);
    navigate("singleshow");
  };

  return (
    <img
      className="carouselCard"
      onClick={() => imgOnClick(show)}
      src={image}
      alt=""
    />
  );
};

export default Mycard;
