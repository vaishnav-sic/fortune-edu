import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutOne from "../components/AboutOne";
import Footer from "../components/Footer";
import TeamOne from "../components/TeamOne";
import VideoOne from "../components/VideoOne";
import BrandsTwo from "../components/BrandsTwo";
import TestimonialOne from "../components/TestimonialOne";
import CallToActionOne from "../components/CallToActionOne";
import AboutUs from "../components/AboutUs";

const AboutPage = () => {
    return (
        <Layout pageTitle="Fortune Education | About">
            <NavOne />
            <PageHeader title="About" />
            <AboutOne />
            <TeamOne />
            <VideoOne />
            <AboutUs />
            <BrandsTwo />
            <TestimonialOne />
            <CallToActionOne />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
