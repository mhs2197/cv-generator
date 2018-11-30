<template>
  <div id="app">
    <ul class="sidenav">
      <li><a href="#" @click.prevent="component='welcomePage'">First Sidebar Link</a></li>
      <li><a href="#" @click.prevent="component='cvInputsPage'">Second Sidebar Link</a></li>
    </ul>

    <!--<a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>-->
    <keep-alive>
      <component :is="component" style="padding-left: 300px"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:()=>({
    component:'welcomePage',
  }),
  mounted(){

  }
};
</script>
