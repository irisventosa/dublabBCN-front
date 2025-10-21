import { LiveRadioData, WeekInfo } from "@/app/types";

const streamingData = "https://dublabbcn.airtime.pro/api/live-info";
const weekInfo = "https://dublabbcn.airtime.pro/api/week-info";

const useAirtimeApi = () => {
  const getWeekInfo = async (): Promise<WeekInfo> => {
    const res = await fetch(weekInfo);
    if (!res.ok) {
      throw new Error(`Failed to fetch week info: ${res.statusText}`);
    }
    return res.json();
  };

  const getLiveRadioData = async (): Promise<LiveRadioData> => {
    try {
      const res = await fetch(streamingData);
      if (!res.ok) {
        throw new Error("Failed to fetch live radio data");
      }
      return res.json();
    } catch {
      throw new Error("Show not programmed");
    }
  };

  return { getWeekInfo, getLiveRadioData };
};

export default useAirtimeApi;
