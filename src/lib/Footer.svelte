<script lang="ts">
    import { onMount } from "svelte"
    import type { FiveDaysForecast } from "weather-app"

  export let userLocation: GeolocationPosition
  let fiveDaysForecast: FiveDaysForecast

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

<div
  class="h-40 bg-white/30 backdrop-blur-xl rounded-2xl p-2 flex items-center justify-between gap-1"
>
  {#each [0, 1, 2, 3, 4, 5] as element, i (element)}
    <div class="flex-1 h-full flex flex-col">
      <div class="flex justify-center">
        <span class="text-xs">Now</span>
      </div>
      <div class="flex-1 items-center justify-center flex">
        <img src="assets/icons/test.png" alt="test" />
      </div>
      <div class="flex justify-center">
        <span class="text-xs">26</span>
      </div>
    </div>
  {/each}
</div>
