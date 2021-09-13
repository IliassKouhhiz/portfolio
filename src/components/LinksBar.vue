<template>
  <div class="linksBar">
    <section>
      <a
        v-for="social in socials"
        :href="social.url"
        target="_blank"
        :key="social.index"
        :id="social.name"
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
  <div class="cont_hidden"></div>
</template>

<script>
export default {
  name: "LinksBar",
  data() {
    return {
      socials: [
        {
          img_orange: require("@/assets/media/e-mail_orange.svg"),
          img_blue: require("@/assets/media/e-mail_blue.svg"),
          name: "e-mail",
          id: "e-mail",
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
      screen_width: window.innerWidth,
    };
  },
  props: ["linksColor"],
  methods: {
    notification() {
      let cont = document.querySelector(".cont_hidden");
      let text = document.createElement("p");

      text.textContent = "Email address copied to clipboard";
      cont.appendChild(text);
      console.log("notification");

      cont.classList.replace("cont_hidden", "cont_visible");
      text.style.cssText = `
        text-align: center;
        font: 20px "Gilroy light";
        color: #0e3b50;
      `;

      setTimeout(() => {
        cont.removeChild(text);
        cont.classList.replace("cont_visible", "cont_hidden");
      }, 3000);
    },
    copyEmail() {
      let icon = document.querySelector("#e-mail");
      icon.style.cursor = "pointer";
      icon.addEventListener("click", () => {
        const inputc = document.body.appendChild(
          document.createElement("input")
        );
        inputc.style.cssText = `
          width: 0px;
          height: 0px;
          position: absolute;
          top: 0px;
          left: 0px;
        `;
        inputc.value = this.email;
        inputc.focus();
        inputc.select();
        document.execCommand("copy");
        inputc.parentNode.removeChild(inputc);
        this.notification();
        this.openNotification(null, null, `<i class='bx bxs-time'></i>`);
      });
    },
    showEmail() {
      let email = this.email;
      let parent = document.querySelector(".linksBar");
      let icon = document.querySelector("#e-mail");
      icon.style.cursor = "pointer";

      function emailMobile() {
        const notification = document.createElement("div");
        parent.before(notification);
        const notification_txt = notification.appendChild(
          document.createElement("p")
        );
        notification_txt.textContent = `${email}`;
        notification.style.cssText = `
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 30px auto;
          background-color: #f27649;
          box-shadow: inset 0px 10px 20px #494646;
        `;
        notification_txt.style.color = "#0e3b50";
        setTimeout(() => {
          notification.remove();
        }, 4000);
      }

      icon.addEventListener("click", emailMobile);
    },
    device() {
      if (this.screen_width > 1024) {
        this.copyEmail();
      } else {
        this.showEmail();
      }
    },
  },
  mounted() {
    this.device();
  },
};
</script>

<style scoped lang="scss">
.linksBar {
  width: 75%;
  height: 75px;
  min-width: 250px;
  min-height: 65px;
  max-width: 270px;
  box-shadow: 1px 1px 20px #636161;
  box-shadow: 1px 1px 20px #494646;
  background-color: #eeeeea;
  border-radius: 35px;
  display: flex;
  align-items: center;
  margin: 5vh auto;

  section {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;

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

.cont_hidden {
  visibility: hidden;
  width: 0px;
  height: 0px;
}

/*  MEDIA QUERIES  */
@media only screen and (max-width: 767px) {
  .cont_visible {
    visibility: visible;
    position: fixed;
    display: flex;
    align-items: center;
    top: 60vh;
    left: calc(50vw - 80px);
    width: 160px;
    height: 160px;
    border-radius: 80px;
    background-color: #f27649;
    animation-name: email_notification;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    box-shadow: 1px 1px 20px #636161;
  }
}
@media only screen and (min-width: 768px) {
  .cont_visible {
    visibility: visible;
    position: fixed;
    display: flex;
    align-items: center;
    top: 75vh;
    right: 5%;
    width: 140px;
    height: 140px;
    border-radius: 70px;
    background-color: #f27649;
    animation-name: email_notification;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
  }
}
</style>
