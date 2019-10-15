import React from "react";
import Banner from "./banner";

function Accordion() {
  return (
    <div className="accordion">
      <div className="accordion__header">
        <div>IPHONE</div>
        <div>SAMSUNG</div>
        <div>NEXUS</div>
      </div>
      <div className="accordion__body">
        <div>
          <Banner />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Accordion;
