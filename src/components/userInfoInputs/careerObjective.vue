<template>
  <div class="form-row mb-3">
    <h5 class="col-12 mb-3">Career Objective</h5>
    <div class="col">
      <textarea id="career-objective" type="text" class="form-control"></textarea>
      <small>{{careerObjPlaceHolder}}</small>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        careerObjPlaceHolder:
          "Example: I am very passionate about computer and programming since my university life." +
          " I dream to be an expert software engineer so that I can build professional and useful software that has business value." +
          " I am looking for a senior software engineer position in a reputed software company that can help me to achieve my goal."
      }
    },
  };
</script>
