import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
// import Contact from "../components/Contact";
import ContactUs from "../components/ContactUs"
const GalleryPage = () => {
    return (
        <Layout pageTitle="Fortune Education | Contact">
            <NavOne />
            <PageHeader title="Contact" />
            <ContactUs />
            <Footer />
        </Layout>
    );
};
export default GalleryPage;
