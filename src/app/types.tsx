export interface RadioLiveShow {
  name: string;
  starts: string;
  url: string;
  ends: string;
  description: string;
}

export interface LiveRadioData {
  currentShow: RadioLiveShow[];
  nextShow: RadioLiveShow[];
}

export interface RadioApiShow {
  host?: string;
  tags: string[];
  slug: string;
  tracklist?: string;
  mixcloud_url: string;
  profile_picture: string;
}

export interface RadioShow {
  host?: string;
  tags: string[];
  data: string;
  name: string;
  tracklist?: string;
  mixcloud_url: string;
}

export interface ApiProfile {
  id: number;
  host: string;
  slug: string;
  description: string;
  tags: string[];
  picture: string;
  links: string[];
  shows?: RadioApiShow[];
}

export interface ApiProfilesList {
  results: ApiProfile[];
}

export interface LatestShowsData {
  results: RadioApiShow[];
}

export interface AirtimeShow {
  start_timestamp: string;
  end_timestamp: string;
  name: string;
  description: string;
  id: number;
  instance_id: number;
  instance_description: string;
  url: string;
  starts: string;
  ends: string;
}

export interface WeekInfo {
  monday: AirtimeShow[];
  tuesday: AirtimeShow[];
  wednesday: AirtimeShow[];
  thursday: AirtimeShow[];
  friday: AirtimeShow[];
  saturday: AirtimeShow[];
  sunday: AirtimeShow[];
  nextmonday: AirtimeShow[];
  nexttuesday: AirtimeShow[];
  nextwednesday: AirtimeShow[];
  nextthursday: AirtimeShow[];
  nextfriday: AirtimeShow[];
  nextsaturday: AirtimeShow[];
  nextsunday: AirtimeShow[];
}
