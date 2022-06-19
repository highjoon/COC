import axios from "axios";
import { useQuery } from "react-query";
import { API_WEB_TOKEN } from "lib/constants/http";
import { APIGoldPassSeason } from "types/api/goldpass";

const useGetGoldPassInfo = () => {
  return useQuery<APIGoldPassSeason>("goldpass", async () => {
    const { data }: { data: APIGoldPassSeason } = await axios.get("/coc-api/goldpass/", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${API_WEB_TOKEN}`,
      },
    });
    return data;
  });
};

export default useGetGoldPassInfo;
