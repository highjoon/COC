import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Layout } from "layouts";
import { SearchResult, SearchResultTab } from "components/Search";
import Loading from "components/Loading";
import { useGetPlayerInfo } from "hooks";

const PlayerSummary: React.FC = ({ id }: { id?: string }) => {
  const router = useRouter();
  const hall = router.query?.hall;
  const { data, isLoading, isSuccess } = useGetPlayerInfo(id as string);

  useEffect(() => {
    if (hall !== "builderBase" && hall !== "capital") {
      router.replace(`${encodeURIComponent(id as string)}/?hall=home`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center w-full h-[550px] py-9 bg-homeBackground bg-no-repeat bg-center bg-cover">
        {(isLoading || !data) && <Loading />}
        {isSuccess && data && (
          <div className="flex flex-col items-center justify-start w-[900px] h-full space-y-2 bg-layout/90 px-2 rounded-md">
            <SearchResultTab id={id} />
            <SearchResult data={data} isPlayer={true} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PlayerSummary;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  return {
    props: {
      id,
    },
  };
};
