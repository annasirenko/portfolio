<template lang="pug">
  .app
    .login-page
      .login-page__form
        login-form
    .inner-page
      .inner-page__panel
        header.header
          .header__avatar
            img.header__image(src="../images/content/user1.jpg")
          .header__content
            .header__username Анна Сиренко
            .header__title Панель администрирования
            a.header__exit-link Выйти
        .inner-page__navbar
          .tabs
            - var tabs = ['Обо мне', 'Работы', 'Отзывы'];
              each tab, i in tabs
                a.tabs__item(class=`${i === 0 ? 'tabs__item_active' : ''}`) #{tab}
      .inner-page__content
        .about-page
          .about-page__header
            h1.page-title Блок "Обо мне"
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
                    form.skills-card__header.skills-form.skill-form--name 
                      input( required placeholder="Название новой группы" value=skillGroup.title).skill-name.skill-name--editing-title

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
        .works-page
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
                    button(type = "submit").button.button--submit.button--edit-submit сохранить
              .edited-blocks
                button.button.button--add-card
                  input.inputfile(type="file" required name="file" id="file")
                  label.inputfile__label(for="file")
                    .button__pic +
                    p.button__name Добавить #[br] работу
                  
                .section-block.edited-card
                  .edited-card__picture-box
                    img(src='../images/content/1.jpg').edited-card__picture
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
                    img(src='../images/content/2.jpg').edited-card__picture
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
                    img(src='../images/content/3.jpg').edited-card__picture
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
                    img(src='../images/content/4.jpg').edited-card__picture
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
                    img(src='../images/content/5.jpg').edited-card__picture
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
        .feedback-page
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
                    button(type = "submit").button.button--submit.button--edit-submit сохранить

              .edited-blocks
                button.button.button--add-card
                  input.inputfile(type="file" required name="file" id="file")
                  label.inputfile__label(for="file")
                    .button__pic +
                    p.button__name Добавить #[br] работу
                .section-block.edited-card.edited-card--feedback
                  .edited-card__speaker-info
                    .edited-card__speaker-picture-box
                      img(src='../images/content/s.jpg').edited-card__speaker-picture
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
                      img(src='../images/content/k.jpg').edited-card__speaker-picture
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
                      img(src='../images/content/s.jpg').edited-card__speaker-picture
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
                      img(src='../images/content/k.jpg').edited-card__speaker-picture
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
import Icon from './components/Icon.vue';
import LoginForm from './components/LoginForm.vue';
export default {
  components: {
    Icon,
    LoginForm
  }
}
</script>

<style lang="postcss">
@import './styles/main.pcss';
@import '../styles/mixins.pcss';


</style>