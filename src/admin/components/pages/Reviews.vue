<template lang="pug">
.feedback-page
  .feedback-page__title
    page-title
  .feedback-page__content
    section.section--feedback
      form.section-block.edit-card--feedback
        h2.edit-card__name Добавить отзыв
        .edit-card__download-area--feedback
          input.inputfile(type="file" required name="file" id="userpic") 
          label.feedback-upload(for="userpic")
            .feedback-upload__photo
              icon.userpic-svg(name="user")
          
            .feedback-upload__button.button.button--link Добавить  фото
        .edit-card__content
          .edit-card__row
            label(data-text="Имя автора").edit-card__label.edit-card__label--feedback 
              input( required placeholder = "" value = "Ковальчук Дмитрий").edit-card__input.edit-card__input--feedback
            label(data-text="Титул").edit-card__label.edit-card__label--feedback 
              input(required placeholder ="" value = "Основатель LoftSchool").edit-card__input.edit-card__input--feedback
          label(data-text="Отзыв").edit-card__label
            textarea( rows="5" required placeholder = "" ).edit-card__textarea.edit-card__textarea--feedback Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        
          .edit-card__buttons
            button(type = "reset").edit-card__reset Отмена
            button(type = "submit").button--edit-submit сохранить

      .edited-blocks
        button.button.button--add-card
          input.inputfile(type="file" required name="file" id="file")
          label.inputfile__label(for="file")
            .button__pic +
            p.button__name Добавить #[br] работу
        .section-block.edited-card.edited-card--feedback
          .edited-card__speaker-info
            .edited-card__speaker-picture-box
              img(src='../../../images/content/s.jpg').edited-card__speaker-picture
            .edited-card__speaker-textinfo
              p.edited-card__speaker-name Владимир Сабанцев
              p.edited-card__speaker-position Преподаватель
          
        
          .edited-card__description--feedback
          
            .edited-card__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
          
          .edited-card__buttons--feedback
            button(type="button").button.button--edit-edited Править
            button(type="button").button.button--delete-edited Удалить
        .section-block.edited-card.edited-card--feedback
          .edited-card__speaker-info
            .edited-card__speaker-picture-box
              img(src='../../../images/content/k.jpg').edited-card__speaker-picture
            .edited-card__speaker-textinfo
              p.edited-card__speaker-name Дмитрий Ковальчук 
              p.edited-card__speaker-position Основатель Loftschool
          
        
          .edited-card__description--feedback
          
            .edited-card__text Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          
          .edited-card__buttons--feedback
            button(type="button").button.button--edit-edited Править
            button(type="button").button.button--delete-edited Удалить
        .section-block.edited-card.edited-card--feedback
          .edited-card__speaker-info
            .edited-card__speaker-picture-box
              img(src='../../../images/content/s.jpg').edited-card__speaker-picture
            .edited-card__speaker-textinfo
              p.edited-card__speaker-name Владимир Сабанцев
              p.edited-card__speaker-position Преподаватель
          
        
          .edited-card__description--feedback
          
            .edited-card__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
          .edited-card__buttons--feedback
            button(type="button").button.button--edit-edited Править
            button(type="button").button.button--delete-edited Удалить

        .section-block.edited-card.edited-card--feedback
          .edited-card__speaker-info
            .edited-card__speaker-picture-box
              img(src='../../../images/content/k.jpg').edited-card__speaker-picture
            .edited-card__speaker-textinfo
              p.edited-card__speaker-name Дмитрий Ковальчук 
              p.edited-card__speaker-position Основатель Loftschool
          
        
          .edited-card__description--feedback
          
            .edited-card__text Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          
          .edited-card__buttons--feedback
            button(type="button").button.button--edit-edited Править
            button(type="button").button.button--delete-edited Удалить


</template>

<script>
export default{
  components:{
    PageTitle: () => import("../PageTitle.vue"),
    Icon: () => import("../Icon.vue")
  }
}

</script>

<style lang="postcss" scoped>
@import '../../../styles/mixins.pcss';

.feedback-page{
  padding: 60px;
  

  @include desktop {
    padding: 50px 30px;
  }

  @include tablets {
    padding: 40px 0;
  }
}
.edit-card--feedback {
  display: grid;
  grid-template-columns: 1fr 2fr;
  
  grid-template-areas:
      "name name"
      "download content"
      "link content";
  
  @include desktop {
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 
  "name name"
  "download content"
  ". content"
}
  @include tablets {
    grid-template-columns: 1fr; 
    grid-template-areas:
   "name"
  "download"
  "content"}
}

.edit-card__download-area--feedback {
  padding: 10px;   
  justify-self: center;
}

.feedback-upload{
  display: flex;
  flex-direction: column;
  align-items: center;
  &__photo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    overflow: hidden;
    background: #dee4ed; 
    padding: 100px 50px; 
    text-align: center;
    border-radius: 50%;

  }
}

.userpic-bg {
  cursor: pointer;
  background: #dee4ed;
  height: 200px; 
  width: 200px;
  border-radius: 50%;
  margin: 0 auto; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.userpic-svg {
height: 100px;
width: 100px;
fill: #fff;
top: 20px;
}




.edit-card__row {
  display: flex; 
  width: 100%; 
  justify-content: space-between;
  @include desktop {
    flex-direction: column
  }
}

.edit-card__label--feedback {
width: 48%;
 @include desktop {
   width: 100%
  }
}

.edit-card__input--feedback {
  padding-left: 0
}
.edit-card__textarea--feedback {
  margin-left: 0;
   margin-right: 0;
  }


.edited-card--feedback {
  padding: 15px;
  display: flex;
  flex-direction: column;

}

.edited-card__speaker-info {
  display: flex; 
  padding-bottom: 15px; 
  border-bottom: 1px solid #b9bdc5;
   align-items: center; 
   justify-content: flex-start;
   margin-left: 20px;
  margin: 0 1.25rem;
  margin-top: 20px;
  }

  .edited-card__speaker-picture-box {
    border-radius: 50%;
    overflow: hidden; 
    height: 50px;
    width: 50px; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    position: relative;
    
  }

  .edited-card__speaker-picture {
    position: absolute;
    top: 0;
    max-width: 200%;
    max-height: 200%;
    object-fit: cover;
    object-position: center center;
  }

  .edited-card__speaker-textinfo {
    margin-left: 20px;
  }

  .edited-card__speaker-name {
    font-weight: 700;
    font-size: 18px;
  }

  .edited-card__description--feedback {
    padding: 2.5625rem 1.9375rem;
  }

  .edited-card__speaker-position{    
opacity: 0.5;
color: $dark;
font-size: 16px;
font-weight: 400;
line-height: 30px;
  }
  .edited-card__buttons--feedback{
    width: 100%; 
  display: flex; 
  justify-content: space-between; 
  color: #a0a5b1;
   margin-top: auto;
   margin-bottom: 0;   
   padding: 2.5625rem 1.9375rem;

  }

</style>