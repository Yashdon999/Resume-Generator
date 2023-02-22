import React from "react";
import "./Css/main.css";
import styled from "styled-components";
// import backgroundImage from "./images/em1.jpg";

const Main = () => {
  // //   const backgroundImage = 'https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1625166167/1625166166.jpg';
  return (
    <Mains>
      <div className="main">
      <h1>Main Section</h1>
    </div>
    </Mains>
  );
};
export default Main;

const Mains = styled.div`
  // background-image: url('https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1625166167/1625166166.jpg'); 
  // margin-top: 0;
  // width: 800px;
  // height: 768px;
  // background-repeat: no-repeat ;


`;