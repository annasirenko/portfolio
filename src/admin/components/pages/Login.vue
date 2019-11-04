<template lang="pug">
  .login-page
    .login-page__form
      login-form

</template>

<script>
export default {
  components: {
    LoginForm: () => import("../LoginForm.vue")
  }
};
</script>

<style lang="postcss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: rgb(45, 60, 78, 0.9);
}
</style>