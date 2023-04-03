<template>
    <section>
        <top-header />

        <b-container>
            <b-row>
                <b-col>
                    <h1>OUR STORY</h1>
                </b-col>
            </b-row>
        </b-container>

        <bottom-footer />
    </section>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'

export default {
    components: {
        TopHeader,
        BottomFooter
    }
}
</script>