import React, { Component } from "react";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import VideoTwo from "../components/VideoTwo";
import CountdownKipso from "../components/CountdownKipso";
import CourseCatOne from "../components/CourseCatOne";
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BlogTwo from "../components/BlogTwo";
import CallToActionFour from "../components/CallToActionFour";
import SubscribeOne from "../components/SubscribeOne";
import GovtEngineering from "../components/GovtEngineering";
import PvtEngineering from "../components/PvtEngineering";
import EngineeringInfo from "../components/EngineeringInfo";
const medicalCollege = () => {
  const colleges1 = [
    {
      name: "APJ Engineering College",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 2,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 3,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 4,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 5,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 6,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 7,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 8,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 9,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 10,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
  ];
  const colleges2 = [
    {
      name: "APJ Engineering College",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 2,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 3,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 4,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 5,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 6,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 7,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 8,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 9,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 10,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
  ];
  return (
    <Layout pageTitle="Fortune | Engineering Colleges">
      {/* <Topbar /> */}
      <NavOne />
      {/* <SliderOne /> */}
      {/* <AboutTwo /> */}
      {/* <MedicalCollege /> */}
      <EngineeringInfo />
      <GovtEngineering colleges={colleges1} />
      <PvtEngineering colleges={colleges2} />
      {/* <VideoTwo /> */}
      {/* <CountdownKipso /> */}
      {/* <CourseCatOne /> */}
      {/* <CallToActionThree /> */}
      {/* <BrandsTwo /> */}
      {/* <BlogTwo /> */}
      {/* <CallToActionFour /> */}
      {/* <SubscribeOne /> */}
      <Footer />
    </Layout>
  );
};
export default medicalCollege;
