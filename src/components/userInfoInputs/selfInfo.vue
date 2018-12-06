<template>
   <div class="form-row">
    <h5 class="col-12 mb-3">Basic Information</h5>
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
          <input
            id="role"
            type="text"
            class="form-control"
            placeholder="Ex: Full stack ASP.net web developer"
          >
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

  </div>
</template>

<script>
  export default {

  };
</script>

