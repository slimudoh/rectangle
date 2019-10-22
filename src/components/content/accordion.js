import React, { useState } from "react";
import Banner from "./banner";

function Accordion() {
  const [iphone, setIphone] = useState(true);
  const [samsung, setSamsung] = useState(false);
  const [nexus, setNexus] = useState(false);

  const showIphone = () => {
    setIphone(true);
    setSamsung(false);
    setNexus(false);
  };

  const showSamsung = () => {
    setIphone(false);
    setSamsung(true);
    setNexus(false);
  };

  const showNexus = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(true);
  };

  return (
    <div className="accordion">
      <div className="accordion__header">
        <div
          onClick={showIphone}
          style={iphone ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          IPHONE
        </div>
        <div
          onClick={showSamsung}
          style={samsung ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          SAMSUNG
        </div>
        <div
          onClick={showNexus}
          style={nexus ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          NEXUS
        </div>
      </div>
      {iphone ? (
        <div className="accordion__body">
          <div>
            <Banner name="iphone 4" dimension="320x480" />
          </div>
        </div>
      ) : null}

      {samsung ? (
        <div className="accordion__body">
          <div>
            <Banner name="Galaxy Note 3" dimension="360x640" />
          </div>
        </div>
      ) : null}

      {nexus ? (
        <div className="accordion__body">
          <div>
            <Banner name="Nexus 4" dimension="384x640" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;
