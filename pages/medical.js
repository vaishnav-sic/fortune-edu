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
import ClgSeatTable from "../components/ClgSeatTable";
import MedicalInfo from "../components/MedicalInfo";
import CollegeListIconA from "../components/CollegeListIconA";
import CollegeListIconB from "../components/CollegeListIconB";
import CollegeListIconC from "../components/CollegeListIconC";

const medicalCollege = () => {
  const colleges1 = [
    {
      name: "Grant Government Medical College and Sir J.J. Group of Hospitals, Mumbai",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Seth GS Medical College - [GSMC], Mumbai",
      ranking: 2,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Byramjee Jeejeebhoy Government Medical College - [BJMC], Pune",
      ranking: 3,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Lokmanya Tilak Municipal Medical College-[LTMMC], Mumbai",
      ranking: 4,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Government Medical College and Hospital, Aurangabad",
      ranking: 5,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Vilasrao Deshmukh Government Medical College, Latur",
      ranking: 6,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Topiwala National Medical College - [TNMC], Mumbai",
      ranking: 7,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Government Medical College - [GMC], Nagpur",
      ranking: 8,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Dr Vaishampayan Memorial Government Medical College, Solapur",
      ranking: 9,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Government Medical College - [GMC], Miraj",
      ranking: 10,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
  ];
  const colleges2 = [
    {
      name: "Smt. Kashibai Navale Medical College and General Hospital, Pune",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "K.J Somaiya Medical College, Mumbai",
      ranking: 2,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Dr. VasantRao Pawar Medical College Hospital and Research Center, Nasik",
      ranking: 3,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Terna Medical College, Navi Mumbai",
      ranking: 4,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Maharashtra Institute of Medical Science and Research, Latur",
      ranking: 5,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Ashwini Rural Medical College, Hospital and Research Centre, Kumbhari, Solapur",
      ranking: 6,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Dr. Ulhas Patil Medical College and Hospital, Jalgaon",
      ranking: 7,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Dr. Vithalrao Vikhe Patil Foundation's Medical College and Hospital, Ahmednagar",
      ranking: 8,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "B.K.L Walawalkar Rural Medical College, Ratnagiri",
      ranking: 9,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Prakash Institute of Medical Science and Research, Sangli",
      ranking: 10,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
  ];
  const colleges3 = [
    {
      name: "Krishna Institute of Medical Sciences, Karad",
      ranking: 1,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Bharati Vidyapeeth Medical College, Pune",
      ranking: 2,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Mahatma Gandhi Mission Medical College, Navi Mumbai",
      ranking: 3,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Rural Medical College & Pravara Institute of Medical Sciences, Loni",
      ranking: 4,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Bharati Vidyapeeth Medical College & Hospital, Sangli",
      ranking: 5,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "Jawaharlal Nehru Medical College, Wardha",
      ranking: 6,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "D.Y. Patil Medical College, Navi Mumbai",
      ranking: 7,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "D.Y. Patil Medical College, Pune",
      ranking: 8,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "MGM Medical College, Aurangabad",
      ranking: 9,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
    {
      name: "D.Y. Patil Medical College, Kolhapur",
      ranking: 10,
      logo: "/assets/images/logo/logo1-1.jpeg",
    },
  ];

  return (
    <Layout pageTitle="Top 10 Engineering Colleges">
      <Topbar />
      <NavOne />
      {/* <SliderOne /> */}
      {/* <AboutTwo /> */}
      {/* <MedicalCollege /> */}
      <MedicalInfo />
      <ClgSeatTable />

      <CollegeListIconA colleges={colleges1} />
      <CollegeListIconB colleges={colleges2} />
      <CollegeListIconC colleges={colleges3} />
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
