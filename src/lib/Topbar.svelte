<script>
  import dayjs from 'dayjs';

  let time = dayjs();
</script>

<div class="w-full flex items-center justify-between text-sm">
  <div class="p-2 px-4 backdrop-blur-lg bg-white/30 rounded-full">
    <span>{time.format('HH:mm a')}</span>
  </div>

  <div>
    <button class="p-3 backdrop-blur-lg bg-white/30 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </div>
</div>
