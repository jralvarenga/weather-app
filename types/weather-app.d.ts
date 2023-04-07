declare module 'weather-app' {

  type WeatherCoords = {
    lat: number
    lon: number
  }

  type WeatherClouds = {
    all: number
  }

  type WeatherMain = {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }

  export type WeatherDescription = {
    description: string
    icon: string
    id: number
    main: string
  }

  type WeatherWind = {
    deg: number
    gust: number
    speed: number
  }

  export type WeatherInCoords = {
    base: string
    clouds: WeatherClouds
    cod: number
    coords: WeatherCoords
    dt: number
    id: number
    main: WeatherMain
    name: string
    sys: {
      country: string
      id: number
      sunrise: number
      sunset: number
      type: number
    }
    timezone: number
    visibility: number
    weather: WeatherDescription[]
    wind: WeatherWind
  }

  export type FiveDaysForecast = {
    city: {
      coords: WeatherCoords
      country: string
      id: number
      name: string
      population: number
      sunrise: number
      sunset: number
      timezone: number
    }
    cnt: 40
    cod: string
    message: number | string
    list: {
      clouds: WeatherClouds
      dt: number
      dt_txt: string
      main: WeatherMain
      pop: number
      sys: {
        pod: string
      }
      visibility: number
      weather: WeatherDescription[]
      wind: WeatherWind
    }[]
  }
}