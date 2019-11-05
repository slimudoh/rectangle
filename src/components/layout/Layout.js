import React from "react";
import Header from "./../content/Header";
import Sidebar from "./../content/Sidebar";
import Portrait from "./../content/Portrait";
import Landscape from "./../content/Landscape";

function Layout() {
  return (
    <div>
      <Header />
      <Portrait />
      <Landscape />
      <Sidebar />
    </div>
  );
}

export default Layout;
