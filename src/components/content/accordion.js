import React, { useState } from "react";
import Banner from "./Banner";
import Device from "./Device";
import iphoneDetails from "../../util/iphone";
import samsungDetails from "../../util/samsung";
import nexusDetails from "../../util/nexus";

function Accordion() {
  const [iphone, setIphone] = useState(true);
  const [samsung, setSamsung] = useState(false);
  const [nexus, setNexus] = useState(false);
  const [iphoneArr, setIphoneArr] = useState([...iphoneDetails]);

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

  const displayIphone = index => {
    if (iphoneArr[index].display === 0) {
      const newArr = [...iphoneArr];
      newArr[index].display = 1;
      setIphoneArr([...newArr]);
    } else if (iphoneArr[index].display === 1) {
      const newArr = [...iphoneArr];
      newArr[index].display = 0;
      setIphoneArr([...newArr]);
    }
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
          {iphoneArr.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displayIphone(index);
                }}
              >
                <Banner name={item.name} dimension="360x640" />
              </div>
              <div
                style={
                  item.display === 1 ? { display: "flex" } : { display: "none" }
                }
              >
                <Device
                  dimensions={item.dimensions}
                  colors={item.colors}
                  views={item.views}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {samsung ? (
        <div className="accordion__body">
          {samsungDetails.map((item, index) => {
            return (
              <div key={index}>
                {/* <Banner name={item.name} dimension="360x640" />
                <div
                  style={
                    item.display === 1
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Device phone={item.image} alt={item.name} />
                </div> */}
              </div>
            );
          })}
        </div>
      ) : null}

      {nexus ? (
        <div className="accordion__body">
          {nexusDetails.map((item, index) => {
            return (
              <div key={index}>
                {/* <Banner name={item.name} dimension="360x640" />
                <div
                  style={
                    item.display === 1
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Device phone={item.image} alt={item.name} />
                </div> */}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;
