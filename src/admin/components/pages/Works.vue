<template lang="pug">
.works-page
  .works-page__title
    page-title
  .works-page__content    
    section.section--works
      form.section-block.edit-card.edit-card--works
        h2.edit-card__name Редактирование работы
        .edit-card__download-area
          input.inputfile(type="file" required name="file" id="file") 
          label.inputfile__label(for="file")
            .inputfile__text Перетащите или нажмите для загрузки изображения
            .button.button--submit загрузить
        .edit-card__content
          label(data-text="Название").edit-card__label 
            input( required placeholder = "" value = "Сайт для авто салона Porsche").edit-card__input
          label(data-text="Ссылка").edit-card__label 
            input(required placeholder = "" value = "https://www.porsche-pulkovo.ru").edit-card__input
          label(data-text="Описание").edit-card__label 
            textarea( rows="5" required placeholder = "" ).edit-card__textarea Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
          label(data-text="Добавление тега").edit-card__label 
            input(required placeholder = "" value = "HTML").edit-card__input
          ul.edit-card__taglist
            li.edit-card__tag
              p.edit-card__description HTML
              button(type="button").button.edit-card__cross 
            li.edit-card__tag
              p.edit-card__description CSS
              button(type="button").button.edit-card__cross 
            li.edit-card__tag
              p.edit-card__description Javascript
              button(type="button").button.edit-card__cross 
          .edit-card__buttons
            button(type = "reset").edit-card__reset Отмена
            button(type = "submit").button--edit-submit сохранить
      .edited-blocks
        button.button.button--add-card
          input.inputfile(type="file" required name="file" id="file")
          label.inputfile__label(for="file")
            .button__pic +
            p.button__name Добавить #[br] работу
          
        .section-block.edited-card
          .edited-card__picture-box
            img(src='../../../images/content/1.jpg').edited-card__picture
            ul.edit-card__taglist-markers
              li.edit-card__tag
                p.edit-card__description HTML
                
              li.edit-card__tag
                p.edit-card__description CSS
                
              li.edit-card__tag
                p.edit-card__description Javascript
              
          .edited-card__description
            .edited-card__name Сайт школы образования
            .edited-card__text Сайт сделан в рамках обучения
            a(href="#").edited-card__link https://www.porsche-pulkovo.ru
            .edited-card__buttons
              button(type="button").button.button--edit-edited Править
              button(type="button").button.button--delete-edited Удалить
        .section-block.edited-card
          .edited-card__picture-box
            img(src='../../../images/content/2.jpg').edited-card__picture
            ul.edit-card__taglist-markers
              li.edit-card__tag
                p.edit-card__description HTML
                
              li.edit-card__tag
                p.edit-card__description CSS
                
              li.edit-card__tag
                p.edit-card__description Javascript
          .edited-card__description
            .edited-card__name Сайт школы образования
            .edited-card__text Сайт сделан в рамках обучения
            a(href="#").edited-card__link https://www.porsche-pulkovo.ru
            .edited-card__buttons
              button(type="button").button.button--edit-edited Править
              button(type="button").button.button--delete-edited Удалить
        .section-block.edited-card
          .edited-card__picture-box
            img(src='../../../images/content/3.jpg').edited-card__picture
            ul.edit-card__taglist-markers
              li.edit-card__tag
                p.edit-card__description HTML
                
              li.edit-card__tag
                p.edit-card__description CSS
                
              li.edit-card__tag
                p.edit-card__description Javascript
          .edited-card__description
            .edited-card__name Сайт школы образования
            .edited-card__text Сайт сделан в рамках обучения
            a(href="#").edited-card__link https://www.porsche-pulkovo.ru
            .edited-card__buttons
              button(type="button").button.button--edit-edited Править
              button(type="button").button.button--delete-edited Удалить
        .section-block.edited-card
          .edited-card__picture-box
            img(src='../../../images/content/4.jpg').edited-card__picture
            ul.edit-card__taglist-markers
              li.edit-card__tag
                p.edit-card__description HTML
                
              li.edit-card__tag
                p.edit-card__description CSS
                
              li.edit-card__tag
                p.edit-card__description Javascript
          .edited-card__description
            .edited-card__name Сайт школы образования
            .edited-card__text Сайт сделан в рамках обучения
            a(href="#").edited-card__link https://www.porsche-pulkovo.ru
            .edited-card__buttons
              button(type="button").button.button--edit-edited Править
              button(type="button").button.button--delete-edited Удалить
        .section-block.edited-card
          .edited-card__picture-box
            img(src='../../../images/content/5.jpg').edited-card__picture
            ul.edit-card__taglist-markers
              li.edit-card__tag
                p.edit-card__description HTML
                
              li.edit-card__tag
                p.edit-card__description CSS
                
              li.edit-card__tag
                p.edit-card__description Javascript
          .edited-card__description
            .edited-card__name Сайт школы образования
            .edited-card__text Сайт сделан в рамках обучения
            a(href="#").edited-card__link https://www.porsche-pulkovo.ru
            .edited-card__buttons
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
.works-page{
  padding: 60px;
  

  @include desktop {
    padding: 50px 30px;
  }

  @include tablets {
    padding: 40px 0;
  }
}
.edit-card {
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-rows: 0.5fr 3fr 2fr;
   grid-template-areas: 
   "name name"
  "download content"
  ". content";  
  grid-column-gap: 20px;
  @include desktop {
  padding: 16px 6.875rem;
  grid-template-columns: 1fr; 
  grid-template-rows: auto auto 2fr;
  grid-template-areas: 
  "name"
  "download"
  "content"
}
@include tablets{
  padding: 0 0.875rem;
}
}

.edit-card__name {
  border-bottom: 1px solid #dedee0;
  padding-bottom: 20px;
  margin-bottom: 20px; 
  grid-area: name;
  font-size: 18px;
font-weight: 700;
line-height: 34px;
  }

  .edit-card__download-area {
  align-self: center;
  background: #dee4ed; 
  left: 0;
  border: #a1a1a1 .125rem dashed;
  padding: 100px 50px; 
  text-align: center;
  grid-area: download;
  width: 100%; 
  justify-self: center;
}


.inputfile {
  visibility: hidden; 
  position: absolute;
  z-index: -1;
}
.inputfile__text {
  margin-bottom: 20px;
  color: #b9c0cd;
  font-size: 18px;
}

.edit-card__content {
  grid-area: content;
   display: flex; 
   flex-direction: column;
    font-weight: 600;
    @include desktop{
      width: 92%;
      padding-top: 40px;
    }
  }



.edit-card__label {
  display: flex;
  flex-direction: column;
   margin-bottom: 20px;
   &:before{
      content: attr(data-text);
      display: block;
      font-size: 1rem;
      font-weight: 600;
      opacity: 0.5;
      color: #414c63;
      margin-bottom: 10px;
  }
   
  }
.edit-card__input {
  padding: 10px;
  border-bottom: 1px solid #414c63;
  font-size: 16px;
  color: #414c63;  
    font-weight: 600;  
  

}

.edit-card__taglist {
  display: flex;
  &-markers{
    display: flex;
    position: absolute;
    margin-bottom: .625rem;
    margin-right: .625rem;
    bottom: .625rem;
    right: .625rem;
  }
}
.edited-card__picture-box{
  position: relative;
}


.edit-card__tag {
  margin-right: 10px;
  background: #f4f4f4;
  padding: 10px 15px;
  border-radius: 30px;
  display: flex; 
  align-items: center
    }

.edit-card__cross {
  height: .9375rem; 
  width: .9375rem;
  background: svg-load('remove.svg', fill = #414c63, width = 100%, height = 100% ) no-repeat center;
  margin-left: 10px;
}

.edit-card__buttons {
  margin-top: 30px;
  display: flex; 
  justify-content: flex-end;
  @include desktop {
    justify-content:center;
    margin-bottom: 20px;
  }
}

.edit-card__reset {
  color: $orange;
  background: transparent;
}




.edited-blocks {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  @include desktop {
    grid-template-columns:1fr 1fr
  }
  @include tablets {
    grid-template-columns: 1fr
  } 
}

.edited-card { 
  padding: 0 0;
}
.edited-card__picture{
  max-width: 100%
}
.edited-card__description{
  padding: 2.5625rem 1.9375rem;
  
}
.edited-card__buttons {
  width: 100%; 
  display: flex; 
  justify-content: space-between; 
  color: #a0a5b1;
   margin-top: auto;
   margin-bottom: 0;
   margin-top: 30px;
   /* padding: 2.5625rem 1.9375rem; */
}



  
  .edited-card__name {
    font-weight: 700;
    font-size: 20px;
    
  }

  .edited-card__text {
    color: #414c63;
    font-weight: 600;
    margin-top: 20px;
    line-height: 30px;
    font-size: 16px;
    margin-bottom: 10px;
    }

.edited-card__link {
  color: #4548d2;
   margin-top: 20px;
   font-size: 16px;
}

.edit-card__textarea{
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #414c63;
  color: #414c63;
  padding: 10px;
  &:focus{
    border: 1px solid $orange;
  }
}
</style>