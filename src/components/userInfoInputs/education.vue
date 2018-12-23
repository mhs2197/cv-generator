<template>
  <div>
    <h5 class="mb-3">Projects</h5>
    <div class="shadow-sm p-3 mb-2 bg-white rounded" v-if="academicResults.length>0"  v-for="(academicResult, index) in academicResults">
      {{ academicResult.instituteName }}
    </div>
    <div class="form-row shadow-sm p-3 rounded">
      <div class="col-12 mb-3">
        <label for="project-title">Title</label>
        <input
          id="project-title"
          type="text"
          class="form-control"
          v-model="academicResultInput.instituteName"
        >
      </div>
      <div class="col">
        <label for="project-type">Type</label>
        <input
          id="project-type"
          type="text"
          class="form-control"
          v-model="academicResultInput.examOrDegreeTitle"
          placeholder="Ex: Personal / Academic / Professional"
        >
      </div>
      <div class="col">
        <label for="project-link">Link</label>
        <input id="project-link" type="text" class="form-control" v-model="academicResultInput.cgpa">
      </div>
      <div class="col-12 mt-3">
        <button class="btn btn-primary" @click.prevent="addAcademicResult()">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'education',
    data(){
      return{
        academicResultInput: {
          instituteName: "",
          examOrDegreeTitle: "",
          duration: {
            from:'',
            to:'',
          },
          cgpa: ""
        },
        academicResults: [],
      }
    },
    methods:{
      addAcademicResult(){
        if (this.academicResultInput) {
          this.academicResults.push(this.academicResultInput);
          this.academicResultInput = {
            instituteName: "",
              examOrDegreeTitle: "",
              duration: {
              from:'',
                to:'',
            },
            cgpa: ""
          }
        }
      }
    }
  };
</script>

