import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import MainPage from "../components/MainPage";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import BookCounselling from "../components/BookCounselling";
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
