<script context="module" lang="ts">
  export type SnackbarTypes = {
    description: string;
    type: 'error' | 'success' | '';
  };
</script>

<script lang="ts">
  import {onMount} from 'svelte';

  // variables
  export let description: SnackbarTypes['description'];
  export let type: SnackbarTypes['type'];
  export let open: boolean = false;
  export let onClose: () => void;

  /**
   * Handles close snackbar
  */
  onMount(async () => {
    setTimeout(() => {
      onClose();
    }, 7000);
  });
</script>

{#if open}
  <div class="fixed z-10 top-2 right-2">
    <div
      class={`p-2 ${
        type === 'error' ? 'bg-red-400' : 'bg-green-400'
      } items-center text-white leading-none lg:rounded-full flex lg:inline-flex`}
      role="alert"
    >
      <span
        class={`flex rounded-full ${
          type === 'error' ? 'bg-red-700' : 'bg-green-700'
        } uppercase px-2 py-1 text-xs font-bold mr-3`}>{type}</span
      >
      <span class="mr-2 text-left flex-auto text-sm">{description}</span>
    </div>
  </div>
{/if}
