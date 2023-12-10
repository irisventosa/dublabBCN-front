import { LiveRadioData, WeekInfo } from "@/app/types";
import axios from "axios";
import { useCallback } from "react";

const streamingData = "https://dublabbcn.airtime.pro/api/live-info";
const weekInfo = "https://dublabbcn.airtime.pro/api/week-info";

const useAirtimeApi = () => {
  const getWeekInfo = useCallback(async () => {
    try {
      const { data: schedule } = await axios.get<WeekInfo>(weekInfo);
      return schedule;
    } catch (error) {
      const message = "Error al conectar a la API de airtime";
      throw new Error(message);
    }
  }, []);

  const getLiveRadioData = useCallback(async () => {
    try {
      const { data: onAirRadio } = await axios.get<LiveRadioData>(
        streamingData
      );
      return onAirRadio;
    } catch (error) {
      const message = "Error al conectar a la API de airtime";
      throw new Error(message);
    }
  }, []);

  return { getWeekInfo, getLiveRadioData };
};

export default useAirtimeApi;
