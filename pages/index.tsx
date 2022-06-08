import React from "react";
import type { NextPage } from "next";
import { Main } from "components/home";
import { Layout } from "layouts";

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <Main />
      </main>
    </Layout>
  );
};

export default Home;
