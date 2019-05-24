<template>
    <div id="Universe">
        <h1> Universe </h1>

        <SuperProfile />

        <p>this.prop</p>
    </div>
</template>

<script>
import SuperProfile from './SuperProfile.vue'

export default {
  name: 'Universe',
  props: ['title'],
  components: {
    SuperProfile
  }
}
</script>