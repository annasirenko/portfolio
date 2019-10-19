import Vue from 'vue';

const skill = {
  template: "#skill",
  props: {    
      skillName: String,
      skillPercent: Number
  },
  methods: {
      drawCircle(value) {
          const circle = this.$refs['color-circle']; 
          const dashOffset = parseInt(getComputedStyle(circle).getPropertyValue('stroke-dasharray'));
          const percent = (dashOffset / 100) * (100 - value);
          circle.style.strokeDashoffset = percent;
      },
      onIntersecting(entries) {
          entries.forEach((entry) => {
              if (entry.target === this.$el) {
                  const value = entry.isIntersecting ? this.skillPercent : 0;                    
                  this.drawCircle(value);
              }
          });
      },
  },
  mounted() { 
      this.drawCircle();    
      
      const observer = new IntersectionObserver(this.onIntersecting);
      observer.observe(this.$el);
  },
};


const skillsRow = {
  template: "#skills-row",
  components: { 
      skill
  },
  props: {    
      skill: Object
  }
}

new Vue ({
  el: "#skills-component",   
  template: "#skills-list",  
  components: {  
      skillsRow
  },
  data: () => ({
    skills: []
  }),
  created() { 
      const data = require("../data/skills.json");
      this.skills = data;
  }
})