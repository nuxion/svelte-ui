<script>
  export let actionFn = ()=> alert('clicked');
  function handleClick(){
    actionFn()
  }

</script>

<button on:click={handleClick}>
  <slot>Default</slot>
</button>