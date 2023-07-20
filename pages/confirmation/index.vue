<template>
    <div class="body-styles">
        <top-header />

        <div class="body-styles">
            <base-card>
                <h1 style="padding:50px;">Thanks for responding! We can't wait to celebrate with you!</h1>
            </base-card>
        </div>

        <bottom-footer />
    </div>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'
import BaseCard from '@/components/UI/BaseCard.vue'

export default {
    components: {
        BaseCard,
        TopHeader,
        BottomFooter
    }
}
</script>