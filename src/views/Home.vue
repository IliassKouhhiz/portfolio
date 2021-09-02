<template>
  <div class="home">
    <backgroundParticles backColor="orange"></backgroundParticles>
    <header class="header">
      <a href="/"
        ><img
          src="@\assets\media\logo_orange_S.svg"
          alt="Logo"
          class="logo"
          @click="home()"
      /></a>
      <nav-bar nav-color="orange" :pageId="id"></nav-bar>
    </header>
    <img
      src="@\assets\media\logo_yellow_S.svg"
      alt=""
      class="background-logo"
    />
    <h1 class="h1">Iliass Kouhhiz</h1>
    <p class="p1">
      an architect turned into a <strong>web developer</strong>. I love to
      reinvent myself and face new challenges. I'm fascinated by everything
      related to web design, from the <strong>research</strong> and
      <strong>design</strong> part, to the <strong>development</strong> aspect.
      I love to see my ideas come to life and become realities that can
      <strong>help others</strong>.
    </p>
    <links-bar links-color="orange"></links-bar>
    <div class="arrow-cont">
      <img src="@\assets\media\arrow-down.svg" alt="arrow" class="arrow" />
    </div>
    <section class="circle">
      <h2 class="h2">Skills</h2>
    </section>

    <div class="skills-cont">
      <ul class="skills">
        <p>Html5</p>
        <p>Css</p>
        <p>Sass</p>
        <p>Javascript</p>
        <p>VueJs</p>
        <p>Adobe Xd</p>
        <p>Photoshop</p>
        <p>Illustrator</p>
        <p>After Effects</p>
        <p>InDesign</p>
        <p>Google Analytics</p>
      </ul>
    </div>
    <section class="circle" id="projects">
      <h2 class="h2">Projects</h2>
    </section>
    <div class="weather">
      <h3 class="h3">Weather Now</h3>
      <div class="img-cont">
        <img src="@\assets\media\weather_logo.svg" alt="weather logo" />
      </div>
      <p class="description">
        A simple weather forecast web application, developed using vue.js
      </p>
      <div class="link-cont">
        <p>Design & Development</p>
        <a
          href="https://iliasskouhhiz.github.io/weather-now/#/"
          class="link"
          target="blank"
          >Visit the website ></a
        >
      </div>
    </div>
    <div class="portfolio">
      <h3 class="h3">Portfolio</h3>
      <div class="img-cont">
        <img src="@\assets\media\logo_blue_S.svg" alt="portfolio logo" />
      </div>
      <p class="description">Personal website, developed using vue.js</p>
      <div class="link-cont">
        <p>Design & Development</p>
      </div>
    </div>
    <section class="coming-soon">
      <div class="circle">
        <h2 class="h2">Coming soon</h2>
      </div>
      <h3 class="h3">Air pollution</h3>
      <p>
        A React application that shows info about cities air quality and
        pollution.
      </p>
      <h3 class="h3">E-commerce website</h3>
      <p>An e-commerce website using Angular, with a database.</p>
    </section>
    <div class="circle-s"></div>
    <div class="circle-xs"></div>
    <section class="f-msg">
      <h2 class="h2">
        I'm always interested in new challenges. Let's create something amazing
        together!
      </h2>
    </section>
    <footer-item links-color="blue" back-color="orange"></footer-item>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LinksBar from "@/components/LinksBar.vue";
import FooterItem from "@/components/FooterItem.vue";
import BackgroundParticles from "@/components/BackgroundParticles.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    LinksBar,
    FooterItem,
    BackgroundParticles,
  },
  data() {
    return {
      id: "homepage",
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss">
$p-grey: #eeeeea;
$p-orange: #f27649;
$p-blue: #0e3b50;
$p-yellow: #f2b950;
$t-bold: "Gilroy Extra Bold";
$t-regular: "Gilroy light";
$h1: 90px;
$h2: 70px;
$h3: 40px;
$p: 25px;

@mixin font-size($multiplier) {
  .h1 {
    font-size: $h1 * $multiplier;
  }
  .h2 {
    font-size: $h2 * $multiplier;
  }
  .h3 {
    font-size: $h3 * $multiplier;
  }
  p {
    font-size: $p * $multiplier;
  }
}

body {
  background-color: $p-grey;
}

.header {
  display: flex;
  height: 10vh;
  margin: 2em auto 2em auto;
  width: 80%;
  justify-content: space-between;
  align-items: center;

  .logo {
    min-height: 50px;
    width: auto;
    cursor: pointer;
  }
}

p {
  font: 25px $t-regular;
}

.p1 {
  width: 90%;
  color: $p-blue;
  margin: 20px auto 0px auto;
  text-align: center;

  strong {
    color: $p-orange;
  }
}

.h1 {
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0px auto 0px auto;
  font: 90px $t-bold;
  color: $p-blue;
  text-align: center;
  line-height: 70px;
}

.arrow-cont {
  width: 100%;
  height: 60px;

  .arrow {
    transform: scale(2);
    margin: 2% calc(50% - 12px);
    animation: arrow-movement 3s;
    animation-iteration-count: infinite;
  }
}

@keyframes arrow-movement {
  0% {
    margin-top: calc(2% - 15px);
    transition: all ease-in;
  }

  50% {
    margin-top: calc(2% + 15px);
    transition: all ease-in;
  }

  100% {
    margin-top: calc(2% - 15px);
    transition: all ease-in;
  }
}

.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -30px;

  p {
    color: $p-blue;
    margin-top: 25px;
  }
}

.h2 {
  font: 70px $t-bold;
  color: $p-blue;
}

.weather {
  margin-top: 80px;

  .img-cont {
    margin: 20px auto;
    width: 200px;
    height: 200px;
    background-color: $p-yellow;
    border-radius: 175px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      transform: scale(0.6);
    }
  }
}

.h3 {
  font: 40px $t-bold;
  color: $p-orange;
  text-align: center;
  text-decoration: underline;
}

.link-cont {
  margin: 20px calc(50% - 150px);
  width: 300px;
  text-align: center;

  p {
    color: darkslategrey;
    margin-bottom: 10px;
  }

  .link {
    font: $p $t-regular;
    color: $p-orange;
    font-weight: 900;
  }
}

.portfolio {
  .h3 {
    margin-top: 80px;
  }

  .img-cont {
    margin: 20px auto;
    width: 200px;
    height: 200px;
    background-color: $p-yellow;
    border-radius: 175px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      transform: scale(0.6);
    }
  }
}

.description {
  width: 80%;
  margin: 20px auto 50px auto;
  text-align: center;
  color: $p-blue;
}

.circle {
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: $p-orange;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .h2 {
    text-align: center;
  }
}

.coming-soon {
  .h3 {
    margin-top: 80px;
  }

  p {
    color: $p-blue;
    margin-bottom: 10px;
    text-align: center;
    width: 80%;
    margin: 20px auto;
  }
}

.circle-s {
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: $p-orange;
  margin: 50px auto 0px calc(70% - 35px);
}

.circle-xs {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: $p-orange;
  margin: 20px auto 0px calc(30% - 20px);
}

.f-msg {
  margin: 50px auto 100px;
  width: 100%;

  .h2 {
    text-align: center;
  }
}

.background-logo {
  visibility: hidden;
  width: 0px;
  height: 0px;
  overflow: hidden;
}

/*  MEDIA QUERIES  */
@media only screen and (min-width: 1024px) {
  .background-logo {
    position: absolute;
    visibility: visible;
    width: 92px;
    height: 50px;
    transform: scale(15);
    z-index: -2;
    top: 50%;
    opacity: 50%;
    overflow: hidden;
  }
}

@media only screen and (min-width: 500px) and (max-width: 768px) {
  @include font-size(1.2);

  .logo {
    transform: scale(1.2);
  }

  .h1 {
    margin-top: 6vh;
    margin-bottom: 2vh;
    line-height: 90px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  @include font-size(1.2);

  .logo {
    transform: scale(1.3);
  }

  .h1 {
    font-size: 130px;
    margin-top: 6vh;
    margin-bottom: 6vh;
    line-height: 100px;
  }

  .p1 {
    margin-bottom: 80px;
  }

  .circle {
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }
}

@media only screen and (min-width: 1025px) {
  @include font-size(1);

  .h1 {
    font-size: 140px;
    margin-top: 15vh;
    line-height: 100px;
  }

  .p1 {
    max-width: 65%;
    margin: 40px auto;
  }

  .circle {
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin: 2em auto;
  }

  .f-msg {
    width: 80%;

    .h2 {
      font-size: 100px;
    }
  }
}
</style>
