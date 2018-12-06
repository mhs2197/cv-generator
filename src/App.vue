<template>
  <div id="app">
    <ul class="nav nav-pills p-2 border-bottom" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" href="#" @click.prevent="loadComponent('welcomePage')">Page 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" href="#" @click.prevent="loadComponent('cvInputsPage')">Inputs</a>
      </li>
    </ul>
    <!--<nav>-->
      <!--<div class="nav nav-tabs" id="nav-tab" role="tablist">-->
        <!--<a class="nav-item nav-link active" data-toggle="tab" href="#" role="tab" @click.prevent="loadComponent('welcomePage')">Page 1</a>-->
        <!--<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" role="tab" href="#"  @click.prevent="loadComponent('cvInputsPage')">Inputs</a>-->
      <!--</div>-->
    <!--</nav>-->

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

  },
  methods:{
    loadComponent(name)
    {
      this.component = name;
      // $(".nav .nav-item .nav-link").click(function(){
      //   $(this).siblings().removeClass('active');
      //   $(this).stop().animate();
      //   $(this).addClass('active');
      // });
    }
  }
};
</script>
