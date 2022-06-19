import React from "react";
import Image from "next/image";
import Loading from "components/Loading";
import { useGetGoldPassInfo } from "hooks";
import { getDate } from "lib/utils";
import { GoldPassBadge } from "public/assets/images/season";

const GoldPass = () => {
  const { data, isLoading } = useGetGoldPassInfo();

  if (isLoading || !data)
    return (
      <section className="flex justify-center items-center w-full h-full py-4 px-2">
        <Loading />
      </section>
    );

  const [startDate, today, endDate] = [getDate(data.startTime), new Date(), getDate(data.endTime)];
  const duration = endDate.getTime() - today.getTime();

  const diffDay = Math.floor(duration / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return (
    <section className="flex justify-center items-center w-full h-full py-4 px-2">
      <div className="flex flex-col w-full sm:w-[450px] md:w-[550px] h-full gap-1 sm:gap-4">
        <div className="flex justify-center items-center text-xl sm:text-3xl gap-2">
          <div className="w-9 h-9 sm:w-12 sm:h-12 relative">
            <Image src={GoldPassBadge} layout={"fill"} objectFit={"contain"} alt={"goldPass"} />
          </div>
          GoldPass
          <div className="w-9 h-9 sm:w-12 sm:h-12 relative">
            <Image src={GoldPassBadge} layout={"fill"} objectFit={"contain"} alt={"goldPass"} />
          </div>
        </div>
        <div className="flex justify-center sm:justify-between items-center w-full text-xl sm:text-2xl">
          <p className="hidden sm:block sm:text-2xl">{startDate.getMonth() + 1} / 1</p>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <p className="text-2xl sm:text-3xl">
              {diffDay}
              <span className="text-lg sm:text-xl">&nbsp;Day&nbsp;</span>
            </p>
            <p className="text-2xl sm:text-3xl">
              {diffHour}
              <span className="text-lg sm:text-xl">&nbsp;Hours Left</span>
            </p>
          </div>
          <p className="hidden sm:block sm:text-2xl">{endDate.getMonth() + 1} / 1</p>
        </div>
      </div>
    </section>
  );
};

export default GoldPass;
