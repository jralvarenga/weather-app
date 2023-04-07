<script lang="ts">
  import dayjs from 'dayjs'
  import {onMount} from 'svelte'
  import type {FiveDaysForecast} from 'weather-app'
    import { weatherIcon } from '../utils/weatherIcon'

  export let userLocation: GeolocationPosition
  let fiveDaysForecast: FiveDaysForecast

  /**
   * Handles get 5 days forecast
  */
  onMount(async () => {
    const res = await fetch(
      `${import.meta.env.VITE_OPEN_WEATHER_URL}/data/2.5/forecast?lat=${
        userLocation.coords.latitude
      }&lon=${userLocation.coords.longitude}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`
    )
    fiveDaysForecast = await res.json()
  })
</script>

<div class="h-40 bg-white/30 backdrop-blur-xl rounded-2xl p-2 flex gap-1">
  {#if fiveDaysForecast}
    {#each fiveDaysForecast.list.slice(0, 5) as element, i (element)}
      <div class="flex-1 h-full flex flex-col">
        <div class="flex justify-center">
          <span class="text-xs">{dayjs(element.dt_txt).format('ddd H:mm')}</span
          >
        </div>
        <div class="flex-1 items-center justify-center flex">
          <img class="grow-0" src={`assets/icons/${weatherIcon(element.weather[0], element.dt)}`} alt="test" />
        </div>
        <div class="flex justify-center">
          <span class="text-xs"
            >{(element.main.temp - 273.15).toFixed(1)} °C</span
          >
        </div>
      </div>
    {/each}
  {/if}
</div>
