<script lang="ts">
  export let src: string
  export let alt: string
  // export let cssClass: string = "rounded-t-lg object-contain self-center"
  
  import IntersectionObserver from './IntersectionObserver.svelte'
  import Image from './Image.svelte'
  let nativeLoading = false
  // Determine whether to bypass our intersecting check
  // onMount(() => {
  //   if ('loading' in HTMLImageElement.prototype) {
  //     nativeLoading = true
  //   }
  // })
  
</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
  {#if intersecting || nativeLoading}
    <Image {alt} {src} />
  {/if}
</IntersectionObserver> 