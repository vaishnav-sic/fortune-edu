import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import AdminPage from "../components/AdminPage";
import AdminPageMock from "../components/AdminPageMock";

const Admin = () => {
  return (
    <Layout pageTitle="Fortune | Admin">
      <NavOne />
      <PageHeader title="Admin" />
      <AdminPage />
      <AdminPageMock />
      <Footer />
    </Layout>
  );
};
export default Admin;
