<script lang="ts">
  export let imageEnabled = true
  export let bgColor = "bg-neutral-800"
  let defualtImg = "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"

</script>

<div class="card card-compact w-96 {bgColor} shadow-xl">
  {#if imageEnabled }
  <slot name="image">
  <figure>
    <img src="{defualtImg}" alt="default img" />
  </figure>
  </slot>
  {/if}
  <div class="card-body">
    <h2 class="card-title"><slot name="title">Shoes!</slot></h2>
    <slot name="body">
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </slot>
    <slot name="actions">
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </slot>
  </div>
</div>