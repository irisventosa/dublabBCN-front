export interface DropdownItem {
  label: string;
  route: string;
}

export const firstNavLabels = [
  //{ label: "Latest", route: "/latest" },
  { label: "Calendari", route: "/calendari" },
];

export const lastNavLabels: DropdownItem[] = [
  { label: "Info", route: "/info" },
];

export const programesDropDown: DropdownItem[] = [
  { label: "shows", route: "/shows" },
  { label: "b-sides", route: "/b-sides" },
];

export const dublabSisters: DropdownItem[] = [
  { label: "Dublab.com", route: "https://www.dublab.com/" },
  { label: "Dublab.jp", route: "https://dublab.jp/" },
  { label: "Dublab.br", route: "https://dublab.com.br/2022/" },
];
