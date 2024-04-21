export interface SingleDayResponse {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

interface Wind {
  deg: number;
  speed: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Coord {
  lat: number;
  lon: number;
}

interface Clouds {
  all: number;
}
