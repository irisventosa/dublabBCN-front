export interface RadioLiveShow {
  name: string;
  starts: string;
  ends: string;
  description: string;
}

export interface LiveRadioData {
  currentShow: RadioLiveShow[];
  nextShow: RadioLiveShow[];
}

export interface RadioApiShow {
  host?: string;
  tags: String[];
  slug: string;
  tracklist?: string;
  mixcloud_url: string;
  profile_picture: string;
}

export interface RadioShow {
  host?: string;
  tags: String[];
  data: string;
  name: string;
  tracklist?: string;
  mixcloud_url: string;
}

export interface ApiProfileShow {
  host: string;
  description: string;
  picture: string;
  links: string[];
}

export interface LatestShowsData {
  results: RadioApiShow[];
}
