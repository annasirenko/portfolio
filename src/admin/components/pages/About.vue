<template lang="pug">
.about-page
  .about-page__header
    page-title
    .about-page__add-group
      button.basic-button.basic-button_small.basic-button_flat.basic-button_circle.basic-button_primary
        .basic-button__icon-wrapper
          icon.basic-button__icon(name="plus")
        .basic-button__text Добавить группу
  .about-page__content
    section.section--skills
      -
        var skillGroups = [
          { title: '', skills: [] },
          { title: 'Workflow', skills: [['Git', 50], ['Terminal', 30], ['Gulp', 40], ['Webpack', 50] ]},
          { title: 'Frontend', skills: [['HTML', 50], ['CSS', 30], ['', 40, 'edit'], ['jQuery и Vue.js', 50] ]},
        ];
      each skillGroup in skillGroups            
        .skills-card.section-block 
            form(@submit.prevent ="addNewCategory").skills-card__header.skills-form.skill-form--name 
              input( v-model ="title" required placeholder="Название новой группы" value=skillGroup.title).skill-name.skill-name--editing-title

              .form-yesno-buttons
                button(type="submit").button.button--green 
                button(type="reset").button.button--cross 
            .skills-card__skills                       
                each skill in skillGroup.skills 
                  form.skills-form.skills-form--oldskill  
                    if skill[2]
                      input(required placeholder="Навык" value=skill[0] ).skill-name--editing.old-skill
                      input(required type="number" placeholder=`${skill[1]}  %` ).skill-value.skill-value--editing
                    else                       
                      input(required placeholder="Навык" value=skill[0] readonly).skill-name--edited.old-skill
                      input(required type="number" placeholder=`${skill[1]}  %` readonly).skill-value.skill-value--edited
                    if skill[2]
                      .form-yesno-buttons
                        button(type="submit").button.button--green 
                        button(type="reset").button.button--cross 
                    else
                      .form-yesno-buttons
                        button(type="submit").button.button--edit
                        button(type="button").button.button--delete
        

            form.skills-card__new-skill.skills-form--newskill.skills-form  
              input(required placeholder="Новый навык").new-skill
              input(required type="number" placeholder="100  %").skill-value--new
              button(type="submit").basic-button_flat.basic-button_circle.basic-button_primary
                .basic-button__icon-wrapper
                  icon.basic-button__icon(name="plus") 

</template>

<script>
import { mapActions } from "vuex";
export default{
  components:{
    PageTitle: () => import("../PageTitle.vue"),
    Icon: () => import("../Icon.vue")
  },
  data: () => ({
    title: ""
  }),
  methods: {
    ...mapActions("categories", ["addCategory"]),
    addNewCategory(){
      this.addNewCategory(this.title)
    }
  }
}

</script>

<style lang="postcss" scoped>
@import '../../../styles/mixins.pcss';

.about-page {
  padding: 60px;
  

  @include desktop {
    padding: 50px 30px;
  }

  @include tablets {
    padding: 40px 0;
  }

  &__header {
    display: flex;
    align-items: center;

    @include tablets {
      padding: 0 20px;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__add-group {
    margin-left: 60px;
    @include tablets{
      margin-left: 0;
      margin-top: 32px;
    }
  }

  &__content {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px; */
    margin-top: 60px;

    @include desktop {
      margin-top: 48px;
      /* grid-gap: 20px; */
    }

    /* @include tablets {
      grid-template-columns: 1fr;
    } */
  }

  }


</style>