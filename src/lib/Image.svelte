<script lang="ts">
  export let src: string
  export let alt: string
  export let failedPlaceHolder: string = "https://via.placeholder.com/800x400"
  export let cssClass  = "rounded-t-lg object-contain self-center"
  import { onMount } from 'svelte'
  let loaded = false
  let thisImage: HTMLImageElement
  let failed = false
  onMount(() => {
    thisImage.onload = () => {
      loaded = true
    }
    thisImage.onerror = () => {
      failed = true
      loaded = true
    } 
  }) 
</script>

<style>
  img {
    opacity: 0;
    transition: opacity 1s ease-out; 
    -webkit-transition: opacity 1s ease-out;  
    -moz-transition: opacity 1s ease-in-out;   
  }
  img.loaded {
    opacity: 1;
  }
</style>

{#if failed !== true }
<img {src} {alt} class:loaded bind:this={thisImage}  class="{cssClass}" loading="lazy" />
{:else }
<img src="{failedPlaceHolder}" {alt} class:loaded bind:this={thisImage} class={cssClass} loading="lazy" />
{/if }