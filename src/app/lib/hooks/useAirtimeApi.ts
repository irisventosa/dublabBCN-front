import { LiveRadioData, WeekInfo } from "@/app/types";
import axios from "axios";

const streamingData = "https://dublabbcn.airtime.pro/api/live-info";
const weekInfo = "https://dublabbcn.airtime.pro/api/week-info";

const useAirtimeApi = () => {
  const getWeekInfo = async () => {
    const { data: schedule } = await axios.get<WeekInfo>(weekInfo);
    return schedule;
  };

  const getLiveRadioData = async () => {
    try {
      const { data: onAirRadio } = await axios.get<LiveRadioData>(
        streamingData
      );
      return onAirRadio;
    } catch (error: unknown) {
      const message = "show not programmed";
      throw new Error(message);
    }
  };

  return { getWeekInfo, getLiveRadioData };
};

export default useAirtimeApi;
