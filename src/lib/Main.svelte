<script lang="ts">
    import { onMount } from 'svelte'
  import type {WeatherInCoords} from 'weather-app'

  export let userLocation: GeolocationPosition
  let currentWeather: WeatherInCoords

  onMount(async () => {
    const res = await fetch(
      `${import.meta.env.VITE_OPEN_WEATHER_URL}/data/2.5/weather?lat=${
        userLocation.coords.latitude
      }&lon=${userLocation.coords.longitude}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`
    )
    currentWeather = await res.json()
  })
</script>

<div class="flex-1 flex flex-col justify-end gap-1">
  {#if currentWeather}
  <span class="font-main-bold text-lg"
    >{currentWeather.name}, {currentWeather.sys.country}</span
  >
  <span class="capitalize"
    >{currentWeather.weather[0].description}, feels like {(
      currentWeather.main.feels_like - 273.15
    ).toFixed(1)}°</span
  >
  <span class="text-8xl font-main-bold"
    >{(currentWeather.main.temp - 273.15).toFixed(1)}°</span
  >
  {/if}
</div>
