import dayjs from "dayjs"
import type { WeatherDescription } from "weather-app"

export const weatherIcon = (weather: WeatherDescription, currentTime: number | string): string => {
  console.log(weather.main);
  let icon: string = ''
  const time = dayjs(currentTime)

  if (time.hour() > 6 && time.hour() < 18) {
    icon = 'sun'
  } else {
    icon = 'moon'
  }

  if (weather.main.toLowerCase() === 'clouds') {
    icon += '_cloud'
  }

  if (weather.main.toLowerCase() === 'clouds') {
    icon += '_cloud'
  }

  console.log(icon)
  
  return `${icon}.png`
}