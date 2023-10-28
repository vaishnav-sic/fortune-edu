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
import MedicalCollege from "../components/MedicalCollege";
import Clg1 from "../components/Clg1";
import Clg2 from "../components/Clg2";
import Clg3 from "../components/Clg3";
const medicalCollege = () => {
  const colleges = [
    {
      name: 'Harvard University',
      location: 'Cambridge, MA',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
    {
      name: 'Stanford University',
      location: 'Stanford, CA',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
    {
      name: 'Massachusetts Institute of Technology (MIT)',
      location: 'Cambridge, MA',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
    {
      name: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
    {
      name: 'Princeton University',
      location: 'Princeton, NJ',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
    {
      name: 'Yale University',
      location: 'New Haven, CT',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
    {
      name: 'California Institute of Technology (Caltech)',
      location: 'Pasadena, CA',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
    {
      name: 'University of Chicago',
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
    {
      name: 'Columbia University',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
    {
      name: 'University of Michigan, Ann Arbor',
      location: 'Ann Arbor, MI',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', // Image file path
    },
  ];
  const colleges1 = [
    {
      name: 'College 1',
      location: 'Location 1',
      image: 'college1.jpg',
    },
    {
      name: 'College 2',
      location: 'Location 2',
      image: 'college2.jpg',
    },
    {
      name: 'College 3',
      location: 'Location 3',
      image: 'college3.jpg',
    },
    {
      name: 'College 4',
      location: 'Location 4',
      image: 'college4.jpg',
    },
    {
      name: 'College 5',
      location: 'Location 5',
      image: 'college5.jpg',
    },
    {
      name: 'College 6',
      location: 'Location 6',
      image: 'college6.jpg',
    },
    {
      name: 'College 7',
      location: 'Location 7',
      image: 'college7.jpg',
    },
    {
      name: 'College 8',
      location: 'Location 8',
      image: 'college8.jpg',
    },
    {
      name: 'College 9',
      location: 'Location 9',
      image: 'college9.jpg',
    },
    {
      name: 'College 10',
      location: 'Location 10',
      image: 'college10.jpg',
    },
    {
      name: 'College 11',
      location: 'Location 11',
      image: 'college11.jpg',
    },
    {
      name: 'College 12',
      location: 'Location 12',
      image: 'college12.jpg',
    },
    {
      name: 'College 13',
      location: 'Location 13',
      image: 'college13.jpg',
    },
    {
      name: 'College 14',
      location: 'Location 14',
      image: 'college14.jpg',
    },
    {
      name: 'College 15',
      location: 'Location 15',
      image: 'college15.jpg',
    },
  ];
  return (
    <Layout pageTitle="Top 10 Medical Colleges">
      <Topbar />
      <NavOne />
      {/* <SliderOne /> */}
      {/* <AboutTwo /> */}
      {/* <MedicalCollege /> */}
      <Clg1 colleges={colleges} />
      <Clg2 colleges={colleges} />
      <Clg3 colleges1={colleges1} />
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
/* start  */
