<template>
  <div class="footerItem">
    <h3 class="h3">LET'S HAVE A CHAT</h3>
    <section>
      <a
        v-for="social in socials"
        :href="social.url"
        target="_blank"
        :key="social.index"
        :id="social.id"
      >
        <img
          :src="social.img_orange"
          :alt="social.name"
          v-if="linksColor === 'orange'"
          class="img"
        />
        <img
          :src="social.img_blue"
          :alt="social.name"
          v-if="linksColor === 'blue'"
          class="img"
        />
      </a>
    </section>
  </div>
  <div class="cont2_hidden"></div>
</template>

<script>
export default {
  name: "FooterItem",
  data() {
    return {
      socials: [
        {
          img_orange: require("@/assets/media/e-mail_orange.svg"),
          img_blue: require("@/assets/media/e-mail_blue.svg"),
          name: "e-mail",
          id: "e-mail-footer",
        },
        {
          img_orange: require("@/assets/media/linkedin_orange.svg"),
          img_blue: require("@/assets/media/linkedin_blue.svg"),
          name: "linkedin",
          url: "https://it.linkedin.com/in/iliass-kouhhiz",
        },
        {
          img_orange: require("@/assets/media/github_orange.svg"),
          img_blue: require("@/assets/media/github_blue.svg"),
          name: "github",
          url: "https://github.com/IliassKouhhiz",
        },
        {
          img_orange: require("@/assets/media/behance_orange.svg"),
          img_blue: require("@/assets/media/behance_blue.svg"),
          name: "behance",
          url: "https://www.behance.net/iliasskouhdd8b/moodboards",
        },
      ],
      email: "iliass.kouhhiz@gmail.com",
    };
  },
  props: ["linksColor", "backColor"],
  methods: {
    changecolor() {
      let back = document.querySelector(".footerItem");
      if (this.backColor === "yellow") {
        back.style.backgroundColor = "#f2b950";
      }
    },
    notification() {
      let cont = document.querySelector(".cont2_hidden");
      let text = document.createElement("p");

      text.textContent = "Email address copied to clipboard";
      cont.appendChild(text);
      console.log("notification");

      cont.classList.replace("cont2_hidden", "cont2_visible");
      text.style.cssText = `
        text-align: center;
        font: 20px "Gilroy light";
        color: #eeeeea;
      `;

      setTimeout(() => {
        cont.removeChild(text);
        cont.classList.replace("cont2_visible", "cont2_hidden");
      }, 3000);
    },
    copyEmail() {
      let icon2 = document.querySelector("#e-mail-footer");
      icon2.style.cursor = "pointer";
      icon2.addEventListener("click", () => {
        var inputc = document.body.appendChild(document.createElement("input"));
        inputc.style.cssText = `
          width: 0px;
          height: 0px;
          position: absolute;
          top: 1000%;
          left: 0px;
        `;
        inputc.value = this.email;
        inputc.focus();
        inputc.select();
        document.execCommand("copy");
        inputc.parentNode.removeChild(inputc);
        this.notification();
      });
    },
  },
  mounted() {
    this.changecolor();
    this.copyEmail();
  },
};
</script>

<style scoped lang="scss">
$p-grey: #eeeeea;
$p-orange: #f27649;
$p-blue: #0e3b50;
$p-yellow: #f2b950;
$t-bold: "Gilroy Extra Bold";
$t-regular: "Gilroy light";

.footerItem {
  height: 250px;
  display: flex;
  align-items: center;
  background-color: $p-orange;
  flex-wrap: wrap;
  justify-content: center;

  .h3 {
    color: $p-blue;
    text-align: center;
    width: 70%;
  }

  section {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: -60px auto 0px;

    .img {
      width: 5vh;
      min-width: 35px;
      height: 5vh;
      min-height: 35px;
    }

    .img:hover {
      margin-top: -10px;
      transition: ease-in-out all 0.3s;
    }
  }
}
@keyframes email_notification {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    transition: ease-in-out all 0.5s;
  }
}

.cont2_hidden {
  visibility: hidden;
  width: 0px;
  height: 0px;
}

/*  MEDIA QUERIES  */
@media only screen and (min-width: 768px) {
  .footerItem {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    .h3 {
      color: $p-blue;
      text-align: center;
      width: 315px;
      margin-top: -10px;
    }

    section {
      display: flex;
      justify-content: space-around;
      width: 40%;
      margin: 30px auto 0px;

      .img {
        width: 5vh;
        min-width: 35px;
        height: 5vh;
        min-height: 35px;
      }
    }
  }
  .cont2_visible {
    visibility: visible;
    position: fixed;
    display: flex;
    align-items: center;
    top: 75vh;
    right: 5%;
    width: 140px;
    height: 140px;
    border-radius: 70px;
    background-color: #0e3b50;
    animation-name: email_notification;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
  }
}
@media only screen and (max-width: 767px) {
  .cont2_visible {
    visibility: visible;
    position: fixed;
    display: flex;
    align-items: center;
    top: 60vh;
    left: calc(50vw - 80px);
    width: 160px;
    height: 160px;
    border-radius: 80px;
    background-color: #0e3b50;
    animation-name: email_notification;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    box-shadow: 1px 1px 20px #636161;
  }
}
</style>
