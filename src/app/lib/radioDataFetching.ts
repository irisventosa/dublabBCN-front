import axios from "axios";
import { LiveRadioData } from "../types";

const streamingData = "https://dublabbcn.airtime.pro/api/live-info";

const getLiveRadioData = async () => {
  debugger;
  const { data: onAirRadio } = await axios.get<LiveRadioData>(streamingData);

  return onAirRadio;
};

export default getLiveRadioData;
