<template>
    <div>
        <n-modal
            v-model:show="m_visible"
            :mask-closable="true"
            @positive-click="onPositiveClick"
            @negative-click="onNegativeClick"
            title="Login"
            :bordered="true"
            size="small"
            preset="card"
            style="width: 450px"

        >
         <n-card
            style="width: 400px"
            :bordered="false"
            size="medium"
            role="dialog"
            aria-modal="true"
        >   
      
            <n-grid :x-gap="12" :y-gap="8" :cols="4">
                <n-grid-item :span="1">
                    <div style="text-align: right; padding-top:5px">
                        Email
                    </div>
                </n-grid-item>
                <n-grid-item :span="3">
                    <n-input v-model:value="email" placeholder="Email Address" />
                </n-grid-item>
                <n-grid-item>
                    <div style="text-align: right; padding-top:5px">
                        Password
                    </div>
                </n-grid-item>
                <n-grid-item :span="3">
                    <n-input type="password" v-model:value="password" placeholder="Password" />
                </n-grid-item>
            </n-grid>
            <hr>
            <center>
                <GoogleLogin :callback="callback" />
            </center>
              <template #footer>
                 <n-grid :x-gap="12" :y-gap="8" :cols="4">
                    <n-grid-item :span="2">
                    </n-grid-item>
                    <n-grid-item :span="1">
                        <n-button type="primary" @click="onPositiveClick">Login</n-button>
                    </n-grid-item>
                    <n-grid-item :span="1">
                        <n-button @click="onNegativeClick">Cancel</n-button>
                    </n-grid-item>
                </n-grid>  
            </template>
        </n-card>
        </n-modal>

    </div>
</template>

<script lang="ts">

import { decodeCredential } from 'vue3-google-login';
import { defineComponent, ref } from 'vue';
import { NModal, NCard,  NInput, NGrid, NGridItem, NButton} from 'naive-ui';

export default defineComponent({
    name: 'Login',
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },
    components: {
        NModal,
        NButton,
        NCard,
        NInput,
        NGrid,
        NGridItem
    },
    emits: ['update:visible'],
    computed: {
        m_visible: {
            get(): boolean {
                return this.visible;
            },
            set(value: boolean): void {
                this.$emit('update:visible', value);
            }
        },
    },
    methods: {
        onPositiveClick: function () {
            this.m_visible = false;
            console.log('positive');
        },
        onNegativeClick: function () {
            console.log('negative');
        },
        callback: async (obj: any) => {
            console.log(decodeCredential(obj.credential));
            console.log(obj);
        },
    },
});
</script>