import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import MockDetails from "../components/MockDetails";
import SliderMock from "../components/SliderMock";
import MockInfo from "../components/MockInfo";
import BookMockData from "../components/BookMockData";

const MockTest = () => {
  return (
    <Layout pageTitle="Fortune Education | Mock Test">
      <NavOne />
      {/* <PageHeader title="Mock Test" /> */}
      {/* <SliderMock /> */}
      <MockInfo />
      <MockDetails />
      <BookMockData />
      <Footer />
    </Layout>
  );
};
export default MockTest;
