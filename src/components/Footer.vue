<template>
  <div class="footer-actions">
      <div class="footer-action">
        <a class="plain-link el-icon-arrow-left circle" @click="updateSectionButtons()" :href="'#' + prevSection" />
      </div>
      <div class="footer-action">
        <a class="plain-link circle" @click="updateSectionButtons()" :href="'#' + nextSection" >
          <div class="el-icon-arrow-right" style="{ vertical-align: 'middle' }"></div>
        </a>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      nextSection: '',
      prevSection: '',
      currentSection: '',
      sections: [
        'g1',
        'g2',
        'g3',
        'g4',
        'g5',
        'g6',
        'g7'
      ]
    }
  },
  methods: {
    updateSectionButtons () {
      // console.log('Current section: ' + this.currentSection)
      for (let i = 0; i < this.sections.length; i++) {
        // Get the first section in the viewport
        if (this.isInViewport(document.getElementById(this.sections[i])) && this.currentSection !== this.sections[i]) {
          // Save as current section
          this.currentSection = this.sections[i]
          // Update next and prev, circular
          if (i > 0 && i < (this.sections.length - 1)) {
            this.prevSection = this.sections[i - 1]
            this.nextSection = this.sections[i + 1]
          } else if (i === 0) {
            this.prevSection = this.sections[this.sections.length - 1]
            this.nextSection = this.sections[i + 1]
          } else if (i === (this.sections.length - 1)) {
            this.prevSection = this.sections[i - 1]
            this.nextSection = this.sections[0]
          }
          // console.log('Updated section: ' + this.currentSection)
        }
      }
    },
    isInViewport (elem) {
      var bounding = elem.getBoundingClientRect()
      return (
        bounding.top >= -document.documentElement.clientHeight &&
        bounding.left >= -document.documentElement.clientWidth &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  },
  mounted () {
    // Set inViewPort watcher
    setInterval(this.updateSectionButtons, 200)
    // Initialize variables
    this.prevSection = this.sections[this.sections.length - 1]
    this.currentSection = this.sections[0]
    this.nextSection = this.sections[1]
  }
}
</script>

<style>
  .footer-actions {
    position: fixed;
    bottom: 0;
    margin: auto;
    width:100%;
    z-index: 998;
  }

  .footer-action {
    padding: 15px 0;
    display: inline-block;
  }

  .plain-link {
    text-decoration: none;
    vertical-align: middle;
  }
</style>
