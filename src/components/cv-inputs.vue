<template>
<div>
  <div class="container my-3">
    <div class="form-row mb-3">
      <h5 class="col-12 mb-3">Self information</h5>
      <div class="col">
        <div class="form-row mb-3">
          <div class="col">
            <label for="first-name">First name</label>
            <input id="first-name" type="text" class="form-control">
          </div>
          <div class="col">
            <label for="last-name">Last name</label>
            <input id="last-name" type="text" class="form-control">
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="col">
            <label for="role">Role</label>
            <input id="role" type="text" class="form-control" placeholder="Ex: Full stack ASP.net web developer">
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="col">
            <label for="email">Email</label>
            <input id="email" type="text" class="form-control">
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="col">
            <label for="phone">Phone No.</label>
            <input id="phone" type="text" class="form-control">
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="col">
            <label for="address">Address</label>
            <textarea id="address" type="text" class="form-control"></textarea>
          </div>
        </div>
      </div>
      <!--<div class="col">-->
        <!--<img src="http://mindandculture.org/wordpress6/wp-content/uploads/2018/06/Fotolia_188161178_XS-4-300x300.jpg" alt="">-->
      <!--</div>-->
    </div>
    <div class="form-row mb-3">
      <h5 class="col-12 mb-3">Career Objective</h5>
      <div class="col">
        <textarea id="career-objective" type="text" class="form-control"></textarea>
        <small> {{careerObjPlaceHolder}}</small>
      </div>
    </div>
    <div class="mb-3">
      <h5 class="mb-3">Experience</h5>
      <ul class="list-group"  v-if="experiences.length>0">
        <li class="list-group-item" v-for="experience in experiences">
          <strong> {{ experience.designation }}</strong> - {{experience.companyName}} [{{experience.startTime}} - {{experience.endTime}}]</li>
      </ul>
      <div class="form-row mb-3">
        <div class="col">
          <label for="company-name">Company Name</label>
          <input id="company-name" type="text" class="form-control" v-model="experienceInput.companyName">
        </div>
        <div class="col">
          <label for="designation">Designation</label>
          <input id="designation" type="text" class="form-control" v-model="experienceInput.designation">
        </div>
      </div>
      <div class="form-row mb-3">
       <div class="col">
         <label for="startDate">Start date</label>
         <input id="startDate" type="date" class="form-control" v-model="experienceInput.startTime">
       </div>
       <div class="col">
         <label for="endDate">End date</label>
         <input id="endDate" type="date" class="form-control" v-model="experienceInput.endTime">
       </div>
      </div>
      <button class="btn btn-primary" @click.prevent="addExperience()">Add</button>
    </div>

    <div class="mb-3">
      <h5 class="mb-3">Skills</h5>
      <ul class="list-group mb-3"  v-if="skills.length>0">
        <li class="list-group-item" v-for="(skill, index) in skills">
          {{index+1}}.  {{ skill}}
        </li>
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

    <div class="mb-3">
      <h5 class="mb-3">Projects</h5>
      <ul class="list-group mb-3"  v-if="skills.length>0">
        <li class="list-group-item" v-for="(skill, index) in skills">
          {{index+1}}.  {{ skill}}
        </li>
      </ul>
      <div class="form-row">
        <div class="col-10">
          <input type="text" class="form-control" v-model="skillInput">
        </div>
        <div class="col">
          <button class="btn btn-primary" @click.prevent="addSkill()">Add</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'cv-inputs',
    data(){
      return {
        experienceInput:{
          companyName:'',
          designation:'',
          startTime:'',
          endTime:''
        },
        experiences:[],
        skillInput:'',
        skills:[],

        projectInput:{
          title:'',
          type:'',
          link:'',
        },
        projects:[],
        careerObjPlaceHolder:"Example: I am very passionate about computer and programming since my university life." +
          " I dream to be an expert software engineer so that I can build professional and useful software that has business value." +
          " I am looking for a senior software engineer position in a reputed software company that can help me to achieve my goal."
      }
    },
    mounted(){

    },
    methods:{
      addExperience(){
        if(this.experienceInput.companyName && this.experienceInput.designation && this.experienceInput.startTime && this.experienceInput.endTime)
        {
          this.experiences.push(this.experienceInput);
          this.experienceInput= {
            companyName:'',
            designation:'',
            startTime:'',
            endTime:''
          };
        }
      },
      addSkill(){
        if(this.skillInput)
        {
          this.skills.push(this.skillInput);
          this.skillInput = '';
        }
      }
    }
  };
</script>

