<template>
  <div class="about">
    <backgroundParticles backColor="yellow"></backgroundParticles>
    <header class="header">
      <a href="/"
        ><img src="@\assets\media\logo_blue_S.svg" alt="Logo" class="logo"
      /></a>
      <nav-bar nav-color="yellow" :pageId="id"></nav-bar>
    </header>
    <div class="image">
      <img src="@\assets\media\foto_profilo.png" alt="image" class="img" loading="lazy" />
    </div>
    <h2 class="h2">My name is <strong>Iliass</strong></h2>
    <p class="copy-l">
      I am a <strong>junior front-end developer</strong> and
      <strong>web designer</strong> based in Milano.
    </p>
    <div class="arrow-cont">
      <img src="@\assets\media\arrow-down.svg" alt="arrow" class="arrow" />
    </div>
    <section class="sub">
      <h2 class="h2">About me</h2>
    </section>
    <section class="text">
      <p class="copy">
        I'm an architect turned into a web developer. Why? Too much bureaucracy!
        Actually I've always been a fanatic of all digital things, in particular
        everything that is related with websites.
        <br /><br /><br />
        In the last few years, i've tried to study and understand as much as
        possible, ranging from <strong>web design</strong> to
        <strong>front-end development</strong> up to
        <strong>digital marketing</strong>. <br /><br /><br />Studying
        architecture taught me a lot, but on a personal level i've learned how
        to be <strong>mentally flexible</strong>, to
        <strong>adapt to various situations</strong>, and what requires to
        develop a project, with the consequent criticalities, such as:
        responsibilities, mediation between various professional figures, to
        manage a budget and the personnel involved in the job. In addition to
        this it made me develop a keen sense of aesthetics.
        <br /><br /><br />But the most important skill that i've developed is
        the <strong>predisposition to continuous learning</strong>, the constant
        desire to expand one's cultural background, a characteristic that
        translates into a mindset, a lifestyle.
      </p>
    </section>
    <section class="status_s">
      <h2 class="status">Status:</h2>
      <div class="sub">
        <h2 class="h2">Available for work</h2>
      </div>
    </section>
    <section class="status_xl">
      <h2 class="status">Status:</h2>
      <div class="sub-cnt">
        <div class="sub">
          <h2 class="h2">Available for work</h2>
        </div>
        <img src="@\assets\media\available.gif" alt="available" />
      </div>
    </section>
    <div class="circle-s"></div>
    <h2 class="status">Want to know more?</h2>
    <h2 class="cta">Get in touch</h2>
    <div class="circle-xs"></div>
    <footer-item links-color="blue" back-color="yellow"></footer-item>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";
import BackgroundParticles from "@/components/BackgroundParticles.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    FooterItem,
    BackgroundParticles,
  },
  data() {
    return {
      id: "aboutpage",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
$p-grey: #eeeeea;
$p-orange: #f27649;
$p-blue: #0e3b50;
$p-yellow: #f2b950;
$t-bold: "Gilroy Extra Bold";
$t-regular: "Gilroy light";

body {
  background-color: $p-orange;
}

.image {
  width: 330px;
  height: 330px;
  display: flex;
  margin: 25px auto 0px;
  border-radius: 160px;
  border: 10px solid $p-blue;
  background-color: transparent;

  .img {
    margin-bottom: -3px;
    margin-left: -2px;
  }
}

.h2 {
  margin-top: 10px;
  text-align: center;
  font: 65px $t-bold;
  line-height: 70px;

  strong {
    color: $p-yellow;
  }
}

.copy-l {
  width: 80%;
  margin: 30px auto;
  text-align: center;
  font: 23px $t-regular;
  color: $p-blue;

  strong {
    color: $p-yellow;
    font: 25px $t-bold;
  }
}

.sub {
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: $p-yellow;
  margin: 50px auto 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
}

.copy {
  width: 70%;
  margin: 20px auto;
  text-align: justify;
  font: 23px $t-regular;
  color: $p-blue;

  strong {
    color: $p-yellow;
    font: 25px $t-bold;
  }
}

.status {
  text-align: center;
  font: 60px $t-bold;
  color: $p-grey;
  margin-top: 120px;
  margin-bottom: -20px;
  line-height: 50px;
}

.status_xl {
  width: 0px;
  height: 0px;
  visibility: hidden;

  img {
    width: 0px;
    height: 0px;
    visibility: hidden;
  }
}

.cta {
  width: 80%;
  text-align: center;
  font: 60px $t-bold;
  color: $p-blue;
  margin: 40px auto 100px;
  line-height: 50px;
  text-decoration-line: underline;
}

.circle-s {
  background-color: $p-yellow;
  margin-bottom: -60px;
}

.circle-xs {
  margin-top: -20px;
  margin-bottom: 10px;
  background-color: $p-yellow;
}

/*  MEDIA QUERIES  */
@media only screen and (min-width: 1024px) {
  .status_s {
    width: 0px;
    height: 0px;
    visibility: hidden;
  }

  .status_xl {
    width: initial;
    height: initial;
    visibility: visible;

    .sub-cnt {
      width: 50%;
      display: flex;
      margin: 100px auto;
      justify-content: space-between;
      align-items: center;

      img {
        width: 320px;
        height: 400px;
        visibility: visible;
      }

      .sub {
        margin: 0px;
      }
    }
  }

  .status {
    margin-top: 60px;
  }
}
</style>
