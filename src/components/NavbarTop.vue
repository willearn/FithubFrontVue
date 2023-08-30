<template>
  <!-- navbar-->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container px-4 px-lg-5">
      <router-link class="navbar-brand" to="/">Fithub</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
        aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto my-2 my-lg-0">
          <li class="nav-item"><router-link class="nav-link" to="/">課程</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/rent">場地租借</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">最新消息</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">教練團隊</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">登入</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>