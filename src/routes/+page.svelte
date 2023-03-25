<script>
  import Button from "$lib/Button.svelte";
  import Card from "$lib/Card.svelte";
  import ImageLoader from "$lib/ImageLoader.svelte";
  import Card2 from "$lib/Card2.svelte";
  function handleClick() {
    alert('clicked +page.svelte')
  }

  let defualtImg = "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
  let bigCat = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"

</script>
<div class="p-5">
<h1>Welcome to your Svelte-UI library</h1>
<div class="flex flex-col m-5">
  <h2>Button:</h2>
  <div>
    <Button on:action={handleClick} extraClass="">Neutral</Button>
    <Button on:action={handleClick}>Primary</Button>
    <Button on:action={handleClick} extraClass="btn-secondary">Secondary</Button>
    <Button on:action={handleClick} extraClass="btn-accent">Accent</Button>
  </div>
</div>

<div class="flex flex-col m-5">
  <h2>Card2:</h2>
  <div>
    <Card2>
      <ImageLoader src="{defualtImg}" alt="nature" slot="image"></ImageLoader>
    </Card2>
  </div>
</div>
</div>

