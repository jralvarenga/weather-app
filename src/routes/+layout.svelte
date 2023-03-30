<script>
  import "../app.css";
</script>

<div class="w-full h-screen flex items-center justify-center font-poppins">
  <div class="w-[400px] h-[750px] flex shadow-2xl rounded-3xl">
    <div class="p-6 flex-1 bg-red-100 rounded-3xl">
      <slot />
    </div>
  </div>
</div>