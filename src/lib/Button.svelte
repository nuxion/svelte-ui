<script>
  import {createEventDispatcher} from 'svelte';
  export let extraClass = "btn-primary"
  const dispatch = createEventDispatcher();

  const onAction = () => {
    dispatch('action');
  };
</script>

<button class="btn {extraClass}" on:click={onAction} >
  <slot>Default</slot>
</button>