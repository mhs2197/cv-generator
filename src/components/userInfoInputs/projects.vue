<template>
  <div>
    <h5 class="mb-3">Projects</h5>
    <ul class="list-group mb-3" v-if="projects.length>0">
      <li class="list-group-item" v-for="(project, index) in projects">
        {{ index+1 +'. '+ project.title +' [ '+ project.type + ' ] - ' + project.link}}
        <a href="#" class="float-right btn btn-outline-danger px-2 py-0"  @click.prevent="removeProject(index)">x</a>
      </li>
    </ul>
    <div class="form-row">
      <div class="col-12 mb-3">
        <label for="project-title">Title</label>
        <input
          id="project-title"
          type="text"
          class="form-control"
          v-model="projectInput.title"
        >
      </div>
      <div class="col">
        <label for="project-type">Type</label>
        <input
          id="project-type"
          type="text"
          class="form-control"
          v-model="projectInput.type"
          placeholder="Ex: Personal / Academic / Professional"
        >
      </div>
      <div class="col">
        <label for="project-link">Link</label>
        <input id="project-link" type="text" class="form-control" v-model="projectInput.link">
      </div>
      <div class="col-12 mt-3">
        <button class="btn btn-primary" @click.prevent="addProject()">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'projects',
    data(){
      return{
        projectInput: {
          title: "",
          type: "",
          link: ""
        },
        projects: [],
      }
    },
    methods:{
      addProject() {
        if (this.projectInput) {
          this.projects.push(this.projectInput);
          this.projectInput = {
            title: "",
            type: "",
            link: ""
          };
        }
      },
      removeProject(index)
      {
        this.projects.splice(index,1);
      }
    }
  };
</script>

