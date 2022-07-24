<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import { decodeCredential } from 'vue3-google-login';
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld,
    },
    methods: {
        callback: async (obj: any) => {

            // console.log(decodeCredential(obj.credential));
            // console.log(obj);
        },
    },
    props: {
        msg: {
            type: String,
            required: false,
        },
    },
});

/* @Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

} */
</script>
