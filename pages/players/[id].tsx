import React from "react";
import { useGetPlayerInfo } from "hooks";
import { GetServerSideProps } from "next";

const PlayerSummary = ({ id }: { id?: string }) => {
  const { data, isLoading, isSuccess } = useGetPlayerInfo(id as string);

  if (!id || isLoading) {
    return <div>로딩중 ... </div>;
  }

  if (isSuccess) {
    console.log(data);
    return <div>{id}</div>;
  }
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
