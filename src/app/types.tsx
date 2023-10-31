export interface RadioShow {
  name: "string";
  starts: "string";
  ends: "string";
  description: "string";
}

export interface LiveRadioData {
  currentShow: RadioShow[];
  nextShow: RadioShow[];
}
