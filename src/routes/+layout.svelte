<script>
  import "../app.postcss";
  import Drawer from "$lib/Drawer.svelte";
  import Navbar from "$lib/Navbar.svelte";
</script>
<Drawer>
  <Navbar slot="navbar"></Navbar>
  <div class="p-5" slot="content">
    <slot />
  </div>
</Drawer>