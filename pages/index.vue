<template>
  <section>

    <div class="header-img">
      <img src="~/static/sunflower.png" alt="sunflower header image" class="header-sunflower-img"/>
    </div>
    <TopHeader />
    <div>
      <h1 class="over-text fade-in">Clarissa & Carlos</h1>
      <p class="home-details">June 24, 2023 SALT LAKE CITY, UT</p>
      <P class="home-details">{{ daysToGo }} DAYS TO GO!</P>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <img v-show="loaded" src="~/static/clarissa_carlits.jpeg" class="icon backgroundImg" @load="onLoaded" />
        </b-col>
      </b-row>
    </b-container>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

          <div class="wrapper">
            <transition name="fade">

            </transition>
          </div>
        </div>
      </div>
    </div>
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
      src: '/public/images/clarissa_carlits.jpeg',
      loaded: false,
      daysToGo: '',
    }
  },
  created() {
    const wD = new Date('2023-06-24');
    const d = new Date();
    const dayDiff = Math.abs(wD - d);

    this.daysToGo = Math.ceil(dayDiff / (1000 * 60 * 60 * 24));
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
  height: 100%;
  opacity: .75;
  padding-bottom: 25px;
}

.over-text {
  text-align: center;
  font-size: 100px;
  font-family: 'Allura, Helvetica, sans-serif';
  letter-spacing: 15px;
}

.home-details {
  text-align: center;
  font-size: 35px;
  font-family: 'serif';
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

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;
}

@media only screen and (max-width:500px) {
  img.header-sunflower-img {
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
