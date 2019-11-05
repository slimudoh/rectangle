import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faMobile, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/reset.scss";
import "../assets/styles/app.scss";
import Layout from "../components/layout/Layout";

library.add(fab, faMobile, faInfoCircle);

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
