<template lang="pug">
  .login-form
    .login-form__title Авторизация
    button.login-form__close(@click="exitFromAdmin")
      icon(name="remove")
    form.login-form__body(@submit.prevent="signIn")
      .login-form__control
        basic-input(
          v-model="name"
          icon="user"
          label="Логин"
          :error-message="validation.firstError('name')"
        )
      .login-form__control
        basic-input(
          v-model="password"
          icon="key"
          label="Пароль"
          type="password"
          :error-message="validation.firstError('password')"
        )
      .login-form__button
        basic-button(
          type="submit"
          :disabled="isLoading"
        ) ОТПРАВИТЬ
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import SimpleVueValidation from 'simple-vue-validator';
import BasicInput from './BasicInput.vue';
import BasicButton from './BasicButton.vue';
import Icon from './Icon.vue';

Vue.use(SimpleVueValidation);
const Validator = SimpleVueValidation.Validator;

export default {
  components: {
    BasicInput,
    BasicButton,
    Icon,
  },
  mixins: [SimpleVueValidation.mixin],
  data() {
    return {
      name: '',
      password: '',
      isLoading: false,
    };
  },
  validators: { 
    name: function(value) {
    return Validator.value(value).required('Заполните имя');
  },
  password: function(value) {
    return Validator.value(value).required('Введите пароль').minLength(4,'Минимум 4 символа');
  },
  }, 
  methods: {
    signIn() {
      this.$validate().then(success => {
        if (success) {
          this.login();
    }
  });
     
  },
  login(){
    this.isLoading = true;
      axios 
        .post('https://webdev-api.loftschool.com/login', { 
          name: this.name, 
          password: this.password 
          })
        .then(() =>{
          alert('Ok!');
        })
        
       .catch (e => {
          alert(e.response.data.error);
       }); 
      this.password = '';
      this.isLoading = false;
  },
    exitFromAdmin() {
      location.href = 'https://annasirenko.github.io/portfolio';
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.login-form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 563px;
  width: 100vw;
  padding: 2.75rem 78px;
  background-color: white;

  @include phones {
    height: 100vh;
    padding: 30px;
  }

  &__close {
    position: absolute;
    top: 30px;
    right: 30px;
    background: none;
    fill: $dark;
    width: 20px;
    height: 20px;
    padding: 0;
    outline: none;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.3;
    }
  }

  &__body {
    @include phones {
      align-self: stretch;
    }
  }

  &__title {
    color: $dark;
    font-size: 36px;
    font-weight: 700;

    @include phones {
      font-size: 30px;
    }
  }

  &__control {
    margin-top: 2.75rem;
  }

  &__button {
    margin-top: 40px;
  }
}



</style>