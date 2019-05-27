<template>
  <div class="footer-actions">
      <div class="footer-action">
        <a class="plain-link el-icon-arrow-left circle" @click="changeSlide('prev')" :href="prevSection" />
      </div>
      <div class="footer-action">
        <a class="plain-link circle" @click="changeSlide('next')" :href="nextSection" >
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
      indexCurrentSection: 0,
      sections: [
        '#g1',
        '#g2',
        '#g3',
        '#g4',
        '#g5',
        '#g6',
        '#g7',
        '#g8'
      ]
    }
  },
  mounted () {
    // Set inViewPort watcher
    setInterval(this.updateSectionButtons, 200)
  },
  methods: {
    changeSlide (direction) {
      console.log('Click, direction:' + direction)
      console.log('On event, next:' + this.nextSection)
      if (direction === 'next' && this.indexCurrentSection < 8) {
        this.prevSection = this.sections[this.indexCurrentSection]
        this.indexCurrentSection++
        this.currentSection = this.sections[this.indexCurrentSection]
        this.nextSection = this.sections[this.indexCurrentSection + 1]
      } else if (direction === 'prev' && this.indexCurrentSection > 0) {
        this.nextSection = this.sections[this.indexCurrentSection]
        this.indexCurrentSection--
        this.currentSection = this.sections[this.indexCurrentSection]
        this.prevSection = this.sections[this.indexCurrentSection - 1]
      }
    },
    updateSectionButtons () {
      console.log('Update section buttons: ' + this.currentSection)
      for (let i = 0; i < this.sections.lenght; i++) {
        // Get the first section in the viewport
        if (this.isInViewport(window.getElementById(this.sections[i]))) {
          this.currentSection = this.sections[i]
        }
        if (this.currentSection === this.sections[i]) {
          if (i > 0 && i < (this.sections.length - 1)) {
            this.prevSection = this.sections[i - 1]
            this.nextSection = this.sections[i + 1]
          } else if (i === 0) {
            this.prevSection = this.sections[this.sections.length - 1]
            this.nextSection = this.sections[i + 1]
          } else if (i === this.sections.length) {
            this.prevSection = this.sections[i - 1]
            this.nextSection = this.sections[0]
          }
          this.indexCurrentSection = i
          return
        }
      }
    },
    isInViewport (elem) {
      var bounding = elem.getBoundingClientRect()
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  },
  mounted () {
    if ("onhashchange" in window) { // event supported?
      console.log('Hash change event supported')
      window.onhashchange = function () {
        this.updateSectionButtons(window.location.hash)
      }
    }
    else { // event not supported:
      var storedHash = window.location.hash;
      window.setInterval(function () {
        if (window.location.hash != storedHash) {
          storedHash = window.location.hash
          hashChanged(storedHash)
        }
      }, 100);
    }
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
