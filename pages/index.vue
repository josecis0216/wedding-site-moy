<template>
  <section>

    <div class="header-img">
      <img src="~/static/sunflower.png" alt="sunflower header image" class="header-sunflower-img" />
    </div>
    <TopHeader />

    <b-container>
      <b-row>
        <b-col>
          <img v-show="loaded" src="~/static/wedding.jpg" class="icon backgroundImg" @load="onLoaded" />
          <h2 class="home-details">Contribute To Our Honeymoon Fund</h2>
          <a href="https://account.venmo.com/">
            <img src="~/static/venmo.png" class="venmo-img" alt="venmo screenshot sample" />
          </a>
        </b-col>
      </b-row>
    </b-container>

    <BottomFooter />
  </section>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    TopHeader,
    BottomFooter,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      src: '/public/images/wedding.jpg',
      loaded: false,
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style scoped>
.header-img {
  text-align: center;
}

img.backgroundImg {
  width: 100%;
  opacity: .75;
  padding-bottom: 25px;
}

.home-details {
  text-align: center;
  font-size: 35px;
  font-family: 'Allura, Helvetica, sans-serif';
}

.venmo-img {
  text-align: center;
}

.fade-enter-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

@media only screen and (max-width:500px) {
  img.header-sunflower-img {
    width: 100%;
  }

  .venmo-img {
    width: 100%;
  }
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

<!--<b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
              img-width="824" img-height="280" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd">
               Text slides with image -->
<!--<b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

              <!-Slides with custom text -->
<!--<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-Slides with image only -->
<!--<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

              <!-Slides with img slot -->
<!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
<!--<b-carousel-slide>
                <template #img>
                  <img class="d-block img-fluid w-100" width="1024" height="480"
                    src="https://picsum.photos/1024/480/?image=55" alt="image slot">
                </template>
              </b-carousel-slide>
            </b-carousel>-->
