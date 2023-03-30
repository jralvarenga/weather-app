<script lang="ts">
  import './app.css';
  import Topbar from './lib/Topbar.svelte';
  import Main from './lib/Main.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<main class="font-main">
  <!-- Background -->
  <div class="w-full h-screen flex items-center justify-center">
    <!-- Frame -->
    <div class="w-[390px] h-[750px] rounded-3xl shadow-2xl flex">
      <!-- content adding and bg -->
      <div class="flex-1 bg-purple-200 p-5 rounded-3xl flex flex-col gap-2">
        <Topbar />
        <Main />
        <Footer />
      </div>
    </div>
  </div>
</main>
