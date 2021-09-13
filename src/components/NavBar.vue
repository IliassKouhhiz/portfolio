<template>
  <div class="navBar">
    <div class="small_screen">
      <button
        class="nav_button nav_button_orange"
        type="button"
        @click="changeState()"
      >
        <div class="hamburger">
          <div class="line" id="line1"></div>
          <div class="line mid"></div>
          <div class="line" id="line2"></div>
        </div>
      </button>
      <nav class="nav_s nav_s_orange" :data-active="nav_button_status">
        <ul class="nav_menu_s">
          <li class="nav_menu_s_item">
            <a @click="projects()" id="projects_s">{{ changeNav }}</a>
          </li>
          <li class="nav_menu_s_item"><a @click="about()">About</a></li>
          <li class="nav_menu_s_item">
            <p @click="featureErr('s')">Resume</p>
          </li>
        </ul>
      </nav>
    </div>
    <div class="large_screen">
      <ul class="nav_menu_l">
        <div class="circle_nav circle_home">
          <li class="nav_menu_l_item">
            <a @click="projects()" id="projects_l">{{ changeNav }}</a>
          </li>
        </div>
        <div class="circle_nav circle_home">
          <li class="nav_menu_l_item"><a href="#/about">About</a></li>
        </div>
        <div class="circle_nav circle_home">
          <li class="nav_menu_l_item">
            <p @click="featureErr('l')">Resume</p>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      nav_button_status: "false",
      resume: false,
      screen_width: window.innerWidth,
    };
  },
  props: ["navColor", "pageId"],
  computed: {
    changeNav: {
      get() {
        if (this.pageId === "homepage") {
          return "Projects";
        } else {
          return "Home";
        }
      },
    },
  },
  methods: {
    changeState() {
      let line1 = document.querySelector(".line:first-child");
      let line2 = document.querySelector(".line:last-child");

      if (this.nav_button_status === "false") {
        this.nav_button_status = "true";
        line1.style.visibility = "hidden";
        line1.style.transition = "all 0.5s ease-in-out";
        line2.style.visibility = "hidden";
        line2.style.transition = "all 0.5s ease-in-out";
      } else if (this.nav_button_status === "true") {
        this.nav_button_status = "false";
        line1.style.visibility = "visible";
        line2.style.visibility = "visible";
      }
    },
    changeColor() {
      let nav = document.querySelector(".nav_s");
      let button = document.querySelector(".nav_button");
      let circle1 = document.querySelector(".circle_nav:first-child");
      let circle2 = document.querySelector(".circle_nav:nth-child(2)");
      let circle3 = document.querySelector(".circle_nav:last-child");

      if (this.navColor === "yellow") {
        nav.classList.remove("nav_s_orange");
        nav.classList.add("nav_s_yellow");
        button.classList.remove("nav_button_orange");
        button.classList.add("nav_button_yellow");
        circle1.classList.replace("circle_home", "circle_about");
        circle2.classList.replace("circle_home", "circle_about");
        circle3.classList.replace("circle_home", "circle_about");
      }
    },
    featureErr(x) {
      function swt(i) {
        if (x === "s" && i === 1) {
          return ".nav_s";
        }
        if (x === "s" && i === 2) {
          return ".nav_menu_s";
        } else if (x === "l" && i === 1) {
          return ".large_screen";
        } else if (x === "l" && i === 2) {
          return ".nav_menu_l";
        }
      }

      let nav_cont = document.querySelector(swt(1));
      let nav = document.querySelector(swt(2));
      let err = document.createElement("div");
      let err_p = document.createElement("p");
      let color = this.navColor;

      function errStyle() {
        if (x === "s") {
          err.style.cssText = `
            width: 260px;
            height: 80px;
            position: absolute;
            top: 75%;
            left: calc(50% - 130px);
            background-color: #f2b950;
            border-radius: 0px 20px 20px 20px;
            display: flex;
            align-items: center;
            box-shadow: 1px 1px 20px #636161;
          `;

          if (color === "yellow") {
            err.style.backgroundColor = "#f27649";
          }
        } else if (x === "l") {
          err.style.cssText = `
            width: 260px;
            height: 80px;
            position: absolute;
            top: 135px;
            left: calc(50% + 221.4px);
            background-color: #f2b950;
            border-radius: 20px 0px 20px 20px;
            display: flex;
            align-items: center;
            box-shadow: 1px 1px 20px #636161;
          `;
        }
      }

      nav.after(err);
      err.appendChild(err_p);
      err_p.textContent = "This feature will be available soon";
      errStyle();
      err_p.style.cssText = ` 
        font: 25px "Gilroy light";
        color: #0e3b50;
        text-align: center; 
      `;

      setTimeout(() => {
        err.removeChild(err_p);
        nav_cont.removeChild(err);
      }, 2400);
    },
    projects() {
      let target_1 = document.getElementById("projects_s");
      let target_2 = document.getElementById("projects_l");
      let target = document.getElementById("projects");
      let line1 = document.getElementById("line1");
      let line2 = document.getElementById("line2");

      if (this.pageId === "homepage") {
        target.scrollIntoView();
        this.nav_button_status = "false";
        line1.style.visibility = "visible";
        line2.style.visibility = "visible";
      } else {
        target_1.setAttribute("href", "/portfolio");
        target_2.setAttribute("href", "/portfolio");
        this.nav_button_status = "false";
      }

      if (this.screen_width > 768) {
        line1.style.visibility = "hidden";
        line2.style.visibility = "hidden";
      }
    },
    about() {
      let line1 = document.getElementById("line1");
      let line2 = document.getElementById("line2");

      this.$router.push("/about");
      this.nav_button_status = "false";
      line1.style.visibility = "visible";
      line2.style.visibility = "visible";
    },
    closeNav() {
      let line1 = document.getElementById("line1");
      let line2 = document.getElementById("line2");

      this.nav_button_status = "false";
      line1.style.visibility = "visible";
      line2.style.visibility = "visible";

      if (this.screen_width > 768) {
        line1.style.visibility = "hidden";
        line2.style.visibility = "hidden";
      }
    },
  },
  mounted() {
    this.changeColor();
    window.addEventListener("resize", this.closeNav);
  },
  unmounted() {
    window.removeEventListener("resize", this.closeNav);
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

.navBar {
  width: 69px;
  height: 69px;
}

.nav_s {
  position: fixed;
  overflow: hidden;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  clip-path: circle(0px at calc(90% - 34.5px) calc((10vh + 64px) / 2));
  -webkit-clip-path: circle(0px at calc(90% - 34.5px) calc((10vh + 64px) / 2));
  transition: all 1s ease-in-out;
  visibility: hidden;
}

.nav_s[data-active="true"] {
  visibility: visible;
  clip-path: circle(1200px at 80% 10%);
  -webkit-clip-path: circle(1200px at 80% 10%);
}

.nav_s_orange {
  background-color: $p-orange;
}
.nav_s_yellow {
  background-color: $p-yellow;
}

.nav_button {
  z-index: 20;
  width: 69px;
  height: 69px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 1px 20px #636161;

  .hamburger {
    height: 19px;
    width: 20px;
    z-index: 20;

    .line {
      width: 20px;
      height: 3px;
      background-color: $p-blue;
      z-index: 2;
      border-radius: 5px;
    }
    .mid {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
}

.nav_button_orange {
  background-color: $p-orange;
}
.nav_button_yellow {
  background-color: $p-yellow;
}

.nav_menu_s {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 400px;
  width: 100vw;

  .nav_menu_s_item {
    list-style-type: none;

    a,
    p {
      text-decoration: none;
      font: 5em "Gilroy Extra Bold";
      color: $p-grey;
      margin-bottom: 0px;
    }

    p {
      cursor: pointer;
    }
  }

  .nav_menu_s_item:nth-of-type(2) {
    cursor: pointer;
  }
}

#projects_s,
#projects_l {
  cursor: pointer;
}

.err {
  width: 260px;
  height: 80px;
  position: absolute;
  top: 75%;
  left: calc(50% - 130px);
  background-color: $p-yellow;
  border-radius: 0px 20px 20px 20px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 20px #636161;

  p {
    font: 25px $t-regular;
    color: $p-blue;
    text-align: center;
  }
}

@keyframes nav_animation {
  0% {
    width: 0px;
    height: 0px;
    transition: all ease-in;
  }

  100% {
    width: 150px;
    height: 150px;
    transition: all ease-in;
  }
}

.large_screen {
  visibility: hidden;
  width: 0px;
  height: 0px;
}

/*  MEDIA QUERIES  */
@media only screen and (min-width: 767px) {
  .large_screen {
    visibility: visible;
  }

  .small_screen {
    visibility: hidden;
    width: 0px;
    height: 0px;
  }

  .navBar {
    width: 320px;
    height: 64px;
  }

  .nav_menu_l {
    width: 320px;
    height: 64px;
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;

    .circle_nav {
      width: 90px;
      height: 90px;
      border-radius: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;

      a,
      p {
        text-decoration: none;
        font: 20px $t-regular;
        color: $p-blue;
        margin-bottom: 0px;
      }

      p {
        cursor: pointer;
      }
    }

    .circle_nav:first-child:hover {
      transition: all ease-in 0.5s;

      a {
        font: 22px $t-bold;
      }
    }
    .circle_nav:nth-child(2):hover {
      transition: all ease-in 0.5s;

      a {
        font: 22px $t-bold;
      }
    }
    .circle_nav:last-child:hover {
      transition: all ease-in 0.5s;

      p {
        font: 22px $t-bold;
      }
    }

    .circle_home:first-child:hover {
      background-color: $p-orange;
    }
    .circle_home:nth-child(2):hover {
      background-color: $p-orange;
    }
    .circle_home:last-child:hover {
      background-color: $p-orange;
    }
    .circle_about:first-child:hover {
      background-color: $p-yellow;
    }
    .circle_about:nth-child(2):hover {
      background-color: $p-yellow;
    }
    .circle_about:last-child:hover {
      background-color: $p-yellow;
    }
  }
}
</style>
