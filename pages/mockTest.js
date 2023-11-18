import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import MockDetails from "../components/MockDetails";
import SliderMock from "../components/SliderMock";

const MockTest = () => {
    return (
        <Layout pageTitle="Fortune Education | Mock Test">
            <NavOne />
            <PageHeader title="Mock Test" />
            <SliderMock />
            <MockDetails />
            <Footer />
        </Layout>
    );
};
export default MockTest;
