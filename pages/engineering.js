import React, { Component } from "react";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import VideoTwo from "../components/VideoTwo";
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
      name: "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-1.png",
    },
    {
      name: "Institute of Chemical Technology - [ICT], Mumbai",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-2.png",
    },
    {
      name: "Veermata Jijabai Technological Institute, Mumbai",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-3.png",
    },
    {
      name: "Visvesvaraya National Institute of Technology - [VNIT], Nagpur",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-4.png",
    },
    {
      name: "College of Engineering - [COEP], Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-5.png",
    },
    {
      name: "Pune Institute of Computer Technology- [PICT], Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-6.png",
    },
    {
      name: "Yeshwantrao Chavan College of Engineering - [YCCE], Nagpur",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-7.png",
    },
    {
      name: "Walchand College of Engineering - [WCE], Sangli",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-8.png",
    },
    {
      name: "Bharati Vidyapeeth Deemed University - [BVDU], Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-9.png",
    },
    {
      name: "MIT World Peace University - [MIT-WPU], Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-10.png",
    },
    {
      name: "Vishwakarma Institute of Information Technology - [VIIT], Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-11.png",
    },
    {
      name: "Pimpri Chinchwad College of Engineering - [PCCOE], Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-12.png",
    },
    {
      name: "MKSSS's Cummins College of Engineering for Women, Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-13.png",
    },
    {
      name: "Vishwakarma Institute of Technology, Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-14.png",
    },
    {
      name: "Symbiosis Institute of Technology - [SIT], Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-15.png",
    },
    {
      name: "MIT Academy of Engineering - [MITAOE], Pune",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-16.png",
    },
    {
      name: "GS Mandal's Marathwada Institute of Technology - [MIT], Aurangabad",
      ranking: 1,
      logo: "/assets/images/logo/e-logo1-17.png",
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
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "APJ Engineering College",
      ranking: 1,
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
      {/* <EngineeringInfo /> */}
      <EngineeringInfo />
      <GovtEngineering colleges={colleges1} />
      {/* <PvtEngineering colleges={colleges2} /> */}
      {/* <VideoTwo /> */}
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
