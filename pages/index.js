import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import MainPage from "../components/MainPage";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import VideoTwo from "../components/VideoTwo";
import BookCounselling from "../components/BookCounselling";
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BlogTwo from "../components/BlogTwo";
import CallToActionFour from "../components/CallToActionFour";
import SubscribeOne from "../components/SubscribeOne";
import NumberAni from "../components/NumberAni";
import AboutUs from "../components/AboutUs";
import NeetScoreAnalysis from "../components/NeetScorAnalysis";
import Nridoc from "../components/Nridoc";
import OneToOneCons from "../components/OneToOneCons";
import Registration from "../components/Registration";
import Documentation from "../components/Documentation";
import AdmissionAlert from "../components/AdmissionAlert";
import AdmissionFillingForm from "../components/AdmissionFillingForm";
import Admissionguidance from "../components/Admissionguidance";
import CollegeChoicePref from "../components/CollegeChoicePref";
import CoursesHome from "../components/CoursesHome";
import ProblemSolution from "../components/ProblemSolution";
import { app, db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useEffect } from "react";
import NewsFlash from "../components/NewsFlash";
const HomePage = () => (
  useEffect(() => {
     collection(db, 'notes');
  },[]),
  <Layout pageTitle="Fortune Education Services">
    {/* <Topbar /> */}
    <NewsFlash />
    <NavOne />
    <MainPage />
    <CoursesHome />
    {/* <SliderOne /> */}
    {/* <CourseOne /> */}
    <ProblemSolution />
    <AboutTwo />
    {/* <VideoTwo /> */}
    <BookCounselling />
    {/* <CallToActionThree /> */}
    {/* <AboutUs /> */}
    {/* <BrandsTwo /> */}
    {/* <BlogTwo /> */}
    {/* <CallToActionFour />
      <SubscribeOne /> */}
    <Footer />
    {/* <NumberAni num="16784" name = "Students Admitted"/> */}
  </Layout>
);
export default HomePage;
/* start  */
