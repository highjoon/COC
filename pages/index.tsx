import React from "react";
import type { NextPage } from "next";
import { Header } from "components/Common";
import { Main } from "components/home";
import { Layout } from "layouts";

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
