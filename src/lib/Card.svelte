<script lang="ts">
  export let image = false
</script>
<div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
    {#if image }
    <slot name="image">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
        alt="" />
    </a>
    </slot>
    {/if}
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        <slot name="title">
        Card title
        </slot>
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        <slot name="text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </slot>
      </p>
    </div>
  </div>
</div>
