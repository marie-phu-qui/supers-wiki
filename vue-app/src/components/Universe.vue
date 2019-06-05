<template>
    <div id="$route.params.universe">
        <h1> {{$route.params.universe}} </h1>

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