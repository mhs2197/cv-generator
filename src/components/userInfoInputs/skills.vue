<template>
  <div class="mb-3">
    <h5 class="mb-3">Skills</h5>
    <ul class="list-group mb-3" v-if="skills.length>0">
      <li class="list-group-item" v-for="(skill, index) in skills">{{index+1}}. {{ skill}}</li>
    </ul>
    <div class="form-row">
      <div class="col-10">
        <input type="text" class="form-control" v-model="skillInput">
      </div>
      <div class="col-2">
        <button class="btn btn-primary" @click.prevent="addSkill()">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skills',
    data(){
      return{
        skillInput: "",
        skills: [],
      }
    },
    methods:{
      addSkill() {
        if (this.skillInput) {
          this.skills.push(this.skillInput);
          this.skillInput = "";
        }
      },
    }
  };
</script>

