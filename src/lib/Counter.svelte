<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="bg-indigo-500" on:click={increment}>
  count is {count}
</button>
