import type { NextPage } from "next";
import { Header, Footer, Title } from "components/index";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Title />
      </main>
      <Footer />
    </>
  );
};

export default Home;
