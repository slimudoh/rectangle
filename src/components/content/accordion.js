import React, { useState } from "react";
import Banner from "./Banner";
import Device from "./Device";
import iphoneDetails from "../../util/iphone";
import samsungDetails from "../../util/samsung";
import lgDetails from "../../util/lg";
import nexusDetails from "../../util/nexus";
import blackberryDetails from "../../util/blackberry";
import htcDetails from "../../util/htc";
import lenovoDetails from "../../util/lenovo";
import lumiaDetails from "../../util/lumia";
import sonyDetails from "../../util/sony";
import xiaomiDetails from "../../util/xiaomi";
import zteDetails from "../../util/zte";

function Accordion() {
  const [iphone, setIphone] = useState(true);
  const [samsung, setSamsung] = useState(false);
  const [lg, setLg] = useState(false);
  const [nexus, setNexus] = useState(false);
  const [blackberry, setBlackberry] = useState(false);
  const [htc, setHtc] = useState(false);
  const [lenovo, setLenovo] = useState(false);
  const [lumia, setLumia] = useState(false);
  const [sony, setSony] = useState(false);
  const [xiaomi, setXiaomi] = useState(false);
  const [zte, setZte] = useState(false);

  const [iphoneArr, setIphoneArr] = useState([...iphoneDetails]);
  const [samsungArr, setSamsungArr] = useState([...samsungDetails]);
  const [lgArr, setLgArr] = useState([...lgDetails]);
  const [nexusArr, setNexusArr] = useState([...nexusDetails]);
  const [bbArr, setBBArr] = useState([...blackberryDetails]);
  const [htcArr, setHtcArr] = useState([...htcDetails]);
  const [lenovoArr, setLenovoArr] = useState([...lenovoDetails]);
  const [lumiaArr, setLumiaArr] = useState([...lumiaDetails]);
  const [sonyArr, setSonyArr] = useState([...sonyDetails]);
  const [xiaomiArr, setXiaomiArr] = useState([...xiaomiDetails]);
  const [ztcArr, setZtcArr] = useState([...zteDetails]);

  const showIphone = () => {
    setIphone(true);
    setSamsung(false);
    setNexus(false);
    setLg(false);
    setBlackberry(false);
    setHtc(false);
    setLenovo(false);
    setLumia(false);
    setSony(false);
    setXiaomi(false);
    setZte(false);
  };

  const showSamsung = () => {
    setIphone(false);
    setSamsung(true);
    setNexus(false);
    setLg(false);
    setBlackberry(false);
    setHtc(false);
    setLenovo(false);
    setLumia(false);
    setSony(false);
    setXiaomi(false);
    setZte(false);
  };

  const showNexus = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(true);
    setLg(false);
    setBlackberry(false);
    setHtc(false);
    setLenovo(false);
    setLumia(false);
    setSony(false);
    setXiaomi(false);
    setZte(false);
  };

  const showLg = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(false);
    setLg(true);
    setBlackberry(false);
    setHtc(false);
    setLenovo(false);
    setLumia(false);
    setSony(false);
    setXiaomi(false);
    setZte(false);
  };

  const showBlackberry = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(false);
    setLg(false);
    setBlackberry(true);
    setHtc(false);
    setLenovo(false);
    setLumia(false);
    setSony(false);
    setXiaomi(false);
    setZte(false);
  };

  const showHtc = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(false);
    setLg(false);
    setBlackberry(false);
    setHtc(true);
    setLenovo(false);
    setLumia(false);
    setSony(false);
    setXiaomi(false);
    setZte(false);
  };

  const showLenovo = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(false);
    setLg(false);
    setIphone(false);
    setSamsung(false);
    setNexus(false);
    setLg(false);
    setBlackberry(false);
    setHtc(false);
    setLenovo(true);
    setLumia(false);
    setSony(false);
    setXiaomi(false);
    setZte(false);
  };

  const showLumia = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(false);
    setLg(false);
    setBlackberry(false);
    setHtc(false);
    setLenovo(false);
    setLumia(true);
    setSony(false);
    setXiaomi(false);
    setZte(false);
  };

  const showSony = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(false);
    setLg(false);
    setBlackberry(false);
    setHtc(false);
    setLenovo(false);
    setLumia(false);
    setSony(true);
    setXiaomi(false);
    setZte(false);
  };

  const showXiaomi = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(false);
    setLg(false);
    setBlackberry(false);
    setHtc(false);
    setLenovo(false);
    setLumia(false);
    setSony(false);
    setXiaomi(true);
    setZte(false);
  };

  const showZte = () => {
    setIphone(false);
    setSamsung(false);
    setNexus(false);
    setLg(false);
    setBlackberry(false);
    setHtc(false);
    setLenovo(false);
    setLumia(false);
    setSony(false);
    setXiaomi(false);
    setZte(true);
  };

  const displayIphone = index => {
    for (let num in iphoneArr) {
      iphoneArr[num].display = 0;
    }

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

  const displaySamsung = index => {
    for (let num in samsungArr) {
      samsungArr[num].display = 0;
    }

    if (samsungArr[index].display === 0) {
      const newArr = [...samsungArr];
      newArr[index].display = 1;
      setSamsungArr([...newArr]);
    } else if (samsungArr[index].display === 1) {
      const newArr = [...samsungArr];
      newArr[index].display = 0;
      setSamsungArr([...newArr]);
    }
  };

  const displayLg = index => {
    for (let num in lgArr) {
      lgArr[num].display = 0;
    }

    if (lgArr[index].display === 0) {
      const newArr = [...lgArr];
      newArr[index].display = 1;
      setLgArr([...newArr]);
    } else if (lgArr[index].display === 1) {
      const newArr = [...lgArr];
      newArr[index].display = 0;
      setLgArr([...newArr]);
    }
  };

  const displayNexus = index => {
    for (let num in nexusArr) {
      nexusArr[num].display = 0;
    }

    if (nexusArr[index].display === 0) {
      const newArr = [...nexusArr];
      newArr[index].display = 1;
      setNexusArr([...newArr]);
    } else if (nexusArr[index].display === 1) {
      const newArr = [...nexusArr];
      newArr[index].display = 0;
      setNexusArr([...newArr]);
    }
  };

  const displayBB = index => {
    for (let num in bbArr) {
      bbArr[num].display = 0;
    }

    if (bbArr[index].display === 0) {
      const newArr = [...bbArr];
      newArr[index].display = 1;
      setBBArr([...newArr]);
    } else if (bbArr[index].display === 1) {
      const newArr = [...bbArr];
      newArr[index].display = 0;
      setBBArr([...newArr]);
    }
  };

  const displayHtc = index => {
    for (let num in htcArr) {
      htcArr[num].display = 0;
    }

    if (htcArr[index].display === 0) {
      const newArr = [...htcArr];
      newArr[index].display = 1;
      setHtcArr([...newArr]);
    } else if (htcArr[index].display === 1) {
      const newArr = [...htcArr];
      newArr[index].display = 0;
      setHtcArr([...newArr]);
    }
  };

  const displayLenovo = index => {
    for (let num in lenovoArr) {
      lenovoArr[num].display = 0;
    }

    if (lenovoArr[index].display === 0) {
      const newArr = [...lenovoArr];
      newArr[index].display = 1;
      setLenovoArr([...newArr]);
    } else if (lenovoArr[index].display === 1) {
      const newArr = [...lenovoArr];
      newArr[index].display = 0;
      setLenovoArr([...newArr]);
    }
  };

  const displayLumia = index => {
    for (let num in lumiaArr) {
      lumiaArr[num].display = 0;
    }

    if (lumiaArr[index].display === 0) {
      const newArr = [...lumiaArr];
      newArr[index].display = 1;
      setLumiaArr([...newArr]);
    } else if (lumiaArr[index].display === 1) {
      const newArr = [...lumiaArr];
      newArr[index].display = 0;
      setLumiaArr([...newArr]);
    }
  };

  const displaySony = index => {
    for (let num in sonyArr) {
      sonyArr[num].display = 0;
    }

    if (sonyArr[index].display === 0) {
      const newArr = [...sonyArr];
      newArr[index].display = 1;
      setSonyArr([...newArr]);
    } else if (sonyArr[index].display === 1) {
      const newArr = [...sonyArr];
      newArr[index].display = 0;
      setSonyArr([...newArr]);
    }
  };

  const displayXiaomi = index => {
    for (let num in xiaomiArr) {
      xiaomiArr[num].display = 0;
    }

    if (xiaomiArr[index].display === 0) {
      const newArr = [...xiaomiArr];
      newArr[index].display = 1;
      setXiaomiArr([...newArr]);
    } else if (xiaomiArr[index].display === 1) {
      const newArr = [...xiaomiArr];
      newArr[index].display = 0;
      setXiaomiArr([...newArr]);
    }
  };

  const displayZte = index => {
    for (let num in ztcArr) {
      ztcArr[num].display = 0;
    }

    if (ztcArr[index].display === 0) {
      const newArr = [...ztcArr];
      newArr[index].display = 1;
      setZtcArr([...newArr]);
    } else if (ztcArr[index].display === 1) {
      const newArr = [...ztcArr];
      newArr[index].display = 0;
      setZtcArr([...newArr]);
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
        <div
          onClick={showLg}
          style={lg ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          LG
        </div>
        <div
          onClick={showBlackberry}
          style={
            blackberry ? { backgroundColor: "#ccc", color: "#ffffff" } : null
          }
        >
          BLACKBERRY
        </div>
        <div
          onClick={showHtc}
          style={htc ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          HTC
        </div>
        <div
          onClick={showLenovo}
          style={lenovo ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          LENOVO
        </div>
        <div
          onClick={showLumia}
          style={lumia ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          LUMIA
        </div>
        <div
          onClick={showSony}
          style={sony ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          SONY
        </div>
        <div
          onClick={showXiaomi}
          style={xiaomi ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          XIAOMI
        </div>
        <div
          onClick={showZte}
          style={zte ? { backgroundColor: "#ccc", color: "#ffffff" } : null}
        >
          ZTE
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
                <Banner name={item.name} size={item.size} />
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
          {samsungDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displaySamsung(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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

      {lg ? (
        <div className="accordion__body">
          {lgDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displayLg(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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

      {nexus ? (
        <div className="accordion__body">
          {nexusDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displayNexus(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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

      {blackberry ? (
        <div className="accordion__body">
          {blackberryDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displayBB(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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

      {htc ? (
        <div className="accordion__body">
          {htcDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displayHtc(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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

      {lenovo ? (
        <div className="accordion__body">
          {lenovoDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displayLenovo(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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

      {lumia ? (
        <div className="accordion__body">
          {lumiaDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displayLumia(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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

      {sony ? (
        <div className="accordion__body">
          {sonyDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displaySony(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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

      {xiaomi ? (
        <div className="accordion__body">
          {xiaomiDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displayXiaomi(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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

      {zte ? (
        <div className="accordion__body">
          {zteDetails.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  displayZte(index);
                }}
              >
                <Banner name={item.name} size={item.size} />
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
    </div>
  );
}

export default Accordion;
