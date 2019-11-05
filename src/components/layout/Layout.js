import React from "react";
import Header from "./../content/Header";
import Sidebar from "./../content/Sidebar";
import Container from "./../content/Container";

function Layout() {
  return (
    <div>
      <Header />
      <Container />
      <Sidebar />
    </div>
  );
}

export default Layout;
