<script setup lang="ts">
definePageMeta({
  title: 'About use-bootstrap',
  description: 'Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.'
})
</script>

<template>

<Background image-src="/home/yusuke1816/nuxt1/public/img/north-east/pa.png" :overlay="true" overlay-color="gray-100">
  <b-h level="1" margin="5" display-headings="1" text-color="white">
    <b-p text-color="blue">usebootstrap is</b-p>
    <Typed class="text-primary fw-semibold" :strings="['powerful.', 'extensible.', 'feature-packed.']"
      :type-speed="60" :loop="true" :back-speed="25" :back-delay="1500" />
  </b-h>
</Background>

  <div>
    <h1>ペンシルべニア州</h1>

    <!-- 親要素に flex を適用して横並びに -->
    <div class="ul-container">
      <!-- 各 UL に見出しを追加 -->
      <div class="box-container">
        <h3>Step 1</h3>
        <ul class="box">
          <li>Install dependencies</li>
          <li>Setup the environment</li>
          <li>Start coding</li>
        </ul>
      </div>

      <div class="box-container">
        <h3>Step 2</h3>
        <ul class="box">
          <li>Install dependencies</li>
          <li>Setup the environment</li>
          <li>Start coding</li>
        </ul>
      </div>

      <div class="box-container">
        <h3>Step 3</h3>
        <ul class="box">
          <li>Install dependencies</li>
          <li>Setup the environment</li>
          <li>Start coding</li>
        </ul>
      </div>

      <div class="box-container">
        <h3>Step 4</h3>
        <ul class="box">
          <li>Install dependencies</li>
          <li>Setup the environment</li>
          <li>Start coding</li>
        </ul>
      </div>
    </div>
    <div class="ul-container">
      <!-- 各 UL に見出しを追加 -->
      <div class="box-container">
        <h3>Step 1</h3>
        <ul class="box">
          <li>Install dependencies</li>
          <li>Setup the environment</li>
          <li>Start coding</li>
        </ul>
      </div>

      <div class="box-container">
        <h3>Step 2</h3>
        <ul class="box">
          <li>Install dependencies</li>
          <li>Setup the environment</li>
          <li>Start coding</li>
        </ul>
      </div>

      <div class="box-container">
        <h3>Step 3</h3>
        <ul class="box">
          <li>Install dependencies</li>
          <li>Setup the environment</li>
          <li>Start coding</li>
        </ul>
      </div>

      <div class="box-container">
        <h3>Step 4</h3>
        <ul class="box">
          <li>Install dependencies</li>
          <li>Setup the environment</li>
          <li>Start coding</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 親要素に flexbox を使って横並びに */
.ul-container {
  display: flex;            /* flexbox を使う */
  gap: 20px;                /* ボックス間のスペース */
}

.box-container {
  text-align: center;       /* 見出しとリストの中央揃え */
}

h3 {
  margin-bottom: 10px;      /* 見出しとリストの間に少しスペースを追加 */
  font-size: 1.2em;         /* 見出しのフォントサイズを設定 */
  color: #333;              /* 見出しの色 */
}

.box {
  list-style: none;         /* デフォルトのリストの丸を非表示 */
  padding: 20px;            /* パディングを追加 */
  background-color: #f0f0f0; /* ボックスの背景色 */
  border-radius: 8px;       /* ボックスの角を丸くする */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* ボックスの影 */
  width: 200px;             /* ボックスの幅を指定 */
}
</style>


