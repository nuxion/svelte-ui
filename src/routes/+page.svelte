<script>
  import Button from "$lib/Button.svelte";
  import Card from "$lib/Card.svelte";
  import ImageLoader from "$lib/ImageLoader.svelte";
  function handleClick() {
    alert('clicked +page.svelte')
  }

  let defualtImg = "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
  let bigCat = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"

</script>
<div class="p-5">

<h1>Welcome to your Svelte-UI library</h1>

<div class="flex flex-col">
  <h2>Button:</h2>
  <div>
    <Button actionFn={handleClick}>Example</Button>
  </div>
</div>

<div class="flex flex-col">
  <h2>Card:</h2>
  <div>
    <Card image={false}>
      <span slot="title">Example</span>
      <span slot="text">Text card example</span>
    </Card>
  </div>
</div>

<div class="flex flex-col">
  <h2>Card 2:</h2>
  <div>
    <Card image={true}>
    <ImageLoader src="{defualtImg}" alt="nature" slot="image"></ImageLoader>
    </Card>
  </div>
</div>

<div class="flex flex-col">
  <h2>Card 3:</h2>
  <div>
    <Card image={true}>
    <ImageLoader src="{bigCat}" alt="nature" slot="image"></ImageLoader>
    </Card>
  </div>
</div>
<!--

<div class="flex flex-col">
  <h2>ImageLoader:</h2>
  <div>
    <ImageLoader src="{defualtImg}" alt="nature"></ImageLoader>

  </div>
</div>

-->
</div>