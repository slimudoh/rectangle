import React from "react";
import Device from "../../content/Device";
import androidDetailsLandscape from "../../../util/landscape/android";

function AndroidLandscape(props) {
  console.log(props);
  console.log("heheh");
  return (
    <div className="phones">
      <div className="phones__container">
        {androidDetailsLandscape.map((item, index) => (
          <Device
            dimensions={item.dimensions}
            name={item.name}
            size={item.size}
            key={index}
            index={index}
            url={props.url}
          />
        ))}
      </div>
    </div>
  );
}

export default AndroidLandscape;
