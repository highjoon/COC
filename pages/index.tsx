import type { NextPage } from "next";
import { Header, Main } from "components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
      </main>
    </>
  );
};

export default Home;
