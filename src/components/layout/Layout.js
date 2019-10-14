import React from "react";
import Header from "./../content/Header";
import Sidebar from "./../content/Sidebar";
import Container from "./../content/Container";
import Footer from "./../content/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <Container />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Layout;
