<template>
    <div>
        <login v-model:visible="loginVisible"></login>
        <n-page-header
            subtitle="Twitter, but for people with attention spans"
        >
            <template #title>
                <a
                    href="https://anyway.fm/"
                    style="text-decoration: none; color: inherit"
                >
                    Squawk
                </a>
            </template>
            <template #avatar>
                <n-avatar
                    src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
                />
            </template>
            <template #extra>
                <n-space>
                    <n-button @click="loginVisible = !loginVisible">Login</n-button>
                    <n-dropdown :options="options" placement="bottom-start">
                        <n-button :bordered="false" style="padding: 0 4px">
                            ···
                        </n-button>
                    </n-dropdown>
                </n-space>
            </template>
        </n-page-header>
        <router-view />
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { decodeCredential } from 'vue3-google-login';
import { defineComponent } from 'vue';
import Login from '././components/Login.vue';
import {NSpace, NButton, NPageHeader, NDropdown, NAvatar} from 'naive-ui';

export default defineComponent({
    name: 'App',
    components: {
        Login,
        NSpace,
        NButton, 
        NAvatar,
        NPageHeader,
        NDropdown,
    },
    data: () => ({
        loginVisible: false,
        options: [
            {
                label: 'Logout',
                key: 'logout',
            },
        ],
    }),
    methods: {
        handleBack: (obj: any) => {
            console.log(obj);
        },
        callback: async (obj: any) => {
            console.log(decodeCredential(obj.credential));
            console.log(obj);
        },
    },
    props: {
        msg: {
            type: String,
            required: false,
        },
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
