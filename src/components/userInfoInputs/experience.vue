<template>
  <div class="mb-3">
    <h5 class="mb-3">Experience</h5>
    <ul class="list-group" v-if="experiences.length>0">
      <li class="list-group-item" v-for="experience in experiences">
        <strong>{{ experience.designation }}</strong>
        - {{experience.companyName}} [{{experience.startTime}} - {{experience.endTime}}]
      </li>
    </ul>
    <div class="form-row mb-3">
      <div class="col">
        <label for="company-name">Company Name</label>
        <input
          id="company-name"
          type="text"
          class="form-control"
          v-model="experienceInput.companyName"
        >
      </div>
      <div class="col">
        <label for="designation">Designation</label>
        <input
          id="designation"
          type="text"
          class="form-control"
          v-model="experienceInput.designation"
        >
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col">
        <label for="startDate">Start date</label>
        <input
          id="startDate"
          type="date"
          class="form-control"
          v-model="experienceInput.startTime"
        >
      </div>
      <div class="col">
        <label for="endDate">End date</label>
        <input
          id="endDate"
          type="date"
          class="form-control"
          v-model="experienceInput.endTime"
        >
      </div>
    </div>
    <button class="btn btn-primary" @click.prevent="addExperience()">Add</button>
  </div>
</template>

<script>
  export default {
    name: 'experienceInput',
    data(){
      return{
        experienceInput: {
          companyName: "",
          designation: "",
          startTime: "",
          endTime: ""
        },
        experiences: [],
      }
    },
    methods:{
      addExperience() {
        if (
          this.experienceInput.companyName &&
          this.experienceInput.designation &&
          this.experienceInput.startTime &&
          this.experienceInput.endTime
        ) {
          this.experiences.push(this.experienceInput);
          this.experienceInput = {
            companyName: "",
            designation: "",
            startTime: "",
            endTime: ""
          };
        }
      },
    }
  };
</script>
