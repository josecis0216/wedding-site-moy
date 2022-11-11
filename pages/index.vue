<template>
  <section>
    <TopHeader />
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
          <div>
            <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
              img-width="824" img-height="280" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd">
              <!-- Text slides with image -->
              <b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template #img>
                  <img class="d-block img-fluid w-100" width="1024" height="480"
                    src="https://picsum.photos/1024/480/?image=55" alt="image slot">
                </template>
              </b-carousel-slide>
            </b-carousel>
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
    BottomFooter
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false 
    }
  }
}
</script>
