export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://www.google.com/imgres?q=the%20boysbackground%20image&imgurl=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7543834.jpg&imgrefurl=https%3A%2F%2Fwallpapercave.com%2Fthe-boys-amazon-wallpapers&docid=B9Orltoqm3LsHM&tbnid=d0HYLUnMwbgmGM&vet=12ahUKEwjk7p_ro_eGAxUOsVYBHSvNC6wQM3oECC8QAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwjk7p_ro_eGAxUOsVYBHSvNC6wQM3oECC8QAA";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;