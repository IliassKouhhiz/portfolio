<template>
  <div id="backgroundParticles">
    <div id="particles-js"></div>
  </div>
</template>

<script>
/* eslint-disable */

import particles from 'particles.js'

export default {
  name: 'backgroundParticles',
  props: ["backColor"],
  computed: {
    color: {
      get() {
        if(this.backColor === "orange") { return "#f27649" } else { return "#f2b950" }
      }
    }
  },
  mounted(){
  console.log('mounted');
  particlesJS('backgroundParticles', {
    
    "particles": {
      "number": {
        "value": 12,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": this.color
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 20,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
    });
  }
}

</script>



<style lang="scss">

canvas {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0%;
}

/*  MEDIA QUERIES  */
@media only screen and (max-width: 500px) {
  canvas {
    visibility: hidden;
    width: 0px;
    height: 0px;
  }
}

</style>
