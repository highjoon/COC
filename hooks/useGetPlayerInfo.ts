import axios from "axios";
import { useQuery } from "react-query";
import { API_WEB_TOKEN } from "lib/constants/http";
import { APIPlayer } from "types/api/players";

const useGetPlayerInfo = (value: string) => {
  return useQuery<APIPlayer>("players", async () => {
    const { data }: { data: APIPlayer } = await axios.get(`/coc-api/players/${encodeURIComponent(value)}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${API_WEB_TOKEN}`,
      },
    });
    return data;
  });
};

export default useGetPlayerInfo;
