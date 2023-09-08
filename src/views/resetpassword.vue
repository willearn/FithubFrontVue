<script setup>
import axios from "axios";
import router from "@/router"
import { ref, reactive , onMounted , watch} from "vue";
import { useRoute } from "vue-router";
const url = import.meta.env.VITE_API_JAVAURL

const email = ref("")

const submit = async () => {

}

const route = useRoute();

onMounted(()=>{
    console.log(route.params["token"])
})


</script>

<template>
    <section class="vh-100 pt-5" style="background-color: #E8E1D4;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-8">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="row g-0">
                            <div class=" col-md-6 col-lg-5 d-none d-md-block"
                                style="background-image: url('../src/assets/index/other/4.jpg');background-size: cover;">
                            </div>
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">
                                    <h2 class="pb-5" style="letter-spacing: 1px;">重設密碼</h2>
                                    <div class="mb-4">
                                        <label class="form-label">請輸入密碼</label>
                                        <input type="email" class="form-control form-control-lg" v-model="email"
                                            placeholder="abc123456@example.com" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label">再次輸入</label>
                                        <input type="email" class="form-control form-control-lg" v-model="email"
                                            placeholder="abc123456@example.com" />
                                    </div>
                                    <div class="pt-1 mb-4">
                                        <button class="btn btn-dark btn-lg btn-block" type="button"
                                            @click="submit()">確認</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
p {
    margin-top: 12px;
    word-break: break-all;
}
</style>
