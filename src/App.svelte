<script lang="ts">
  import './app.css'
  import type {WeatherInCoords} from 'weather-app'

  // components
  import Topbar from './lib/Topbar.svelte'
  import Main from './lib/Main.svelte'
  import Footer from './lib/Footer.svelte'
  import {onMount} from 'svelte'
  import Snackbar from './lib/Snackbar.svelte'

  // types
  import type {SnackbarTypes} from './lib/Snackbar.svelte'

  // variables
  let userLocation: GeolocationPosition | null = null
  let openSnackbar = false
  let snackbarProps: SnackbarTypes = {
    description: '',
    type: ''
  }

  /**
   * Handles getting user current location
   */
  const getGeoLocationHandle = async (geolocation: GeolocationPosition) => {
    userLocation = geolocation
  }

  const onGetLocationError = (error: GeolocationPositionError) => {
    snackbarProps = {
      description: error.message,
      type: 'error'
    }
    openSnackbar = true
  }

  onMount(async () => {
    navigator.geolocation.getCurrentPosition(
      getGeoLocationHandle,
      onGetLocationError,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    )
  })
</script>

<main class="font-main">
  <!-- Background -->
  <div class="w-full h-screen flex items-center justify-center">
    <!-- Frame -->
    <div class="w-[390px] h-[750px] rounded-3xl shadow-2xl flex">
      <!-- content adding and bg -->
      <div class="flex-1 bg-purple-200 p-5 rounded-3xl flex flex-col gap-2">
        <Topbar />
        {#if userLocation}
          <Main {userLocation} />
          <Footer {userLocation} />
        {/if}
      </div>
    </div>
  </div>

  <Snackbar
    open={openSnackbar}
    onClose={() => (openSnackbar = !openSnackbar)}
    description={snackbarProps.description}
    type={snackbarProps.type}
  />
</main>
