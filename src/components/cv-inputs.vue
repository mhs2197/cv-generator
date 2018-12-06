<template>
 <div style="padding-left: 300px;">
   <ul class="sidenav">
     <li v-for="inputComponent in inputComponents" :class="{'active':inputComponent.tab == activeComponent.tab}">
       <a href="#" @click.prevent="setActiveComponent(inputComponent.tab)">{{inputComponent.name}}</a>
     </li>
   </ul>
   <div class="d-flex justify-content-center">
     <div class="container-wrapper my-3 w-50">
       <div class="card mb-3">
         <div class="card-body">
           <keep-alive>
             <component :is="activeComponent.component"></component>
           </keep-alive>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "cv-inputs",
  data() {
    return {
      inputComponents:[
        {tab:1,component:'selfInfoInput',name:'Basic Info'},
        {tab:2,component:'careerObjectiveInput',name:'Career Objective'},
        {tab:3,component:'experienceInput',name:'Experiences'},
        {tab:4,component:'skillsInput',name:'Skills'},
        {tab:5,component:'projectsInput',name:'Projects'},
        {tab:6,component:'educationInput',name:'Education'},
        {tab:7,component:'extraActivitiesInput',name:'Extracurricular Activities'},
        {tab:8,component:'personalInfoInput',name:'Personal Info'},
      ],
      activeComponent:[],


      academicResultInput: {
        instituteName: "",
        examOrDegreeTitle: "",
        duration: "",
        cgpa: ""
      },
      academicResults: [],

    };
  },
  created(){
    if(this.activeComponent.length==0){
      this.setActiveComponent(1);
    }
  },
  mounted() {

  },
  methods: {
    setActiveComponent(tab){
      this.activeComponent = this.inputComponents.find(function(inputComponent) {
        return inputComponent.tab == tab;
      });
    },
    addProject() {
      if (this.projectInput) {
        this.projects.push(this.projectInput);
        this.projectInput = {
          title: "",
          type: "",
          link: ""
        };
      }
    }
  }
};
</script>

