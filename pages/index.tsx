import React from "react";
import type { NextPage } from "next";
import { Header, Main } from "components";
import Layout from "layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Main />
      </main>
    </Layout>
  );
};

export default Home;
