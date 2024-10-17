import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import FigmaCard from "../../components/figmaCard";
function HomePage() {
  return (
    <div>
      <div className="section1">
        <div className="container">
          <FigmaCard
            image="./im1.png"
            title="Variations sur un fil"
            description="VANNERIES MINIATURES"
            titleSize="h1"
            descSize="h3"
          />
        </div>
      </div>
      <div className="section2">
        <div className="container">
          <FigmaCard
            image="./im2.png"
            title="Vanneries Exploratoires"
            description="OEUVRES TEXTILES"
            titleSize="h1"
            descSize="h3"
          />
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <FigmaCard
            image="./im3.png"
            title="Collection Sand"
            description="Loïc & Monique"
            titleSize="h2"
            descSize="h4"
          />
          <FigmaCard
            image="./im4.png"
            title="Collection Chanvre"
            description="OBJETS TISSÉS"
            titleSize="h2"
            descSize="h4"
          />
          <FigmaCard
            image="./im5.png"
            title="Correspondances 1"
            description="EXPOSITION COLLECTIVE"
            titleSize="h3"
            descSize="p"
          />
          <FigmaCard
            image="./im6.png"
            title="Abris intuitifs"
            description="EXPOSITION SOLO"
            titleSize="h3"
            descSize="p"
          />
          <FigmaCard
            image="./im7.png"
            title="Correspondances 2"
            description="EXPOSITION COLLECTIVE"
            titleSize="h3"
            descSize="P"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
