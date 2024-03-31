import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NeetScoreAnalysis from "../components/NeetScorAnalysis"
import Nridoc from "../components/Nridoc"
import OneToOneCons from "../components/OneToOneCons"
import Registration from "../components/Registration"
import Documentation from "../components/Documentation"
import AdmissionAlert from "../components/AdmissionAlert"
import AdmissionFormFilling from "../components/AdmissionFormFilling"
import AdmissionGuidance from "../components/AdmissionGuidance"
import CollegeChoicePref from "../components/CollegeChoicePref"
import InstituteLevelManagement from '../components/InstituteLevelManagement';
import AdmissionInMaharashtraStateAndCenterQuota from '../components/AdmissionInMaharashtraStateAndCenterQuota';
import SpecialAssureAdmissionGuidance from '../components/SpecialAssureAdmissionGuidance';
const Service = () => {
    return (
        <Layout pageTitle="Fortune | Service">
            <NavOne />
            <PageHeader title="Service" />
            <AdmissionInMaharashtraStateAndCenterQuota />
            <InstituteLevelManagement />
            <SpecialAssureAdmissionGuidance />
            <AdmissionGuidance />
            <Registration />
            <Documentation />
            <AdmissionFormFilling />
            <NeetScoreAnalysis />
            <CollegeChoicePref />
            <OneToOneCons />
            <AdmissionAlert />
            <Nridoc />
            <Footer />
        </Layout>
    );
};
export default Service;