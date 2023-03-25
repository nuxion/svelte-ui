<script lang="ts">
  export let drawerId = "my-drawer"
  export let banner = "/banner.svg"
  export let bannerAlt = "algorinfo's logo"
  export let imgSize = "32"

</script>
<div class="drawer">
  <input id="{ drawerId }" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <slot name="navbar">
      <label for="{ drawerId }" class="btn btn-primary drawer-button">Open drawer</label>
    </slot>
    <slot name="content">
      <!-- Page content here -->
    </slot>
  </div> 
  <div class="drawer-side">
    <label for="{ drawerId }" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
      <div class="flex mb-4">
        <a href="/" class="normal-case font-serif text-2xl text-white">
          <img alt="{bannerAlt}" src="{banner}" class="w-{imgSize}"/>
        </a>
      </div>
      <slot name="sidebar">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </slot>
    </ul>
  </div>
</div>
