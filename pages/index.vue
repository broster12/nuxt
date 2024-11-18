<template>
  <div class="container">
    <h1 class="text-center">US Raper Map</h1>
    <img src="/usmap.jpg" alt="US Map" class="img-fluid" />
    <div class="row">
      <div class="col-md-8">
        <img src="/juice.jpg" alt="Juice" class="juice-img juice-img1" />
        <img src="/juice.jpg" alt="Juice" class="juice-img juice-img2" />
        <img src="/juice.jpg" alt="Juice" class="juice-img juice-img3" />
      </div>
      <div class="col-md-4">
      </div>
      <div class="col-md-4">
        <input type="range" min="0" max="data.length - 1" @input="updateLink" />
        <span>Age </span>
        <div>
          <a :href="currentLink" target="_blank" class="btn btn-primary">詳細リンク</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const timeIndex = ref(0);
const data = ref([]); // データの初期化
const currentLink = ref(''); // 現在のリンク

function updateLink() {
  // スライダーのインデックスに基づいてリンクを更新
  if (data.value[timeIndex.value]) {
    currentLink.value = `https://example.com/details${timeIndex.value + 1}`; // リンクを更新
  }
}
</script>

<style scoped>
img {
  width: 140%;
  height: 200%;
  max-width: 150%
}

.juice-img {
  position: absolute; /* 絶対位置で配置 */
  width: 20px; /* 小さくするためのサイズ調整 */
  height: 20px; /* 高さを同じにして丸くする */
  border-radius: 50%; /* 丸くするための設定 */
  object-fit: cover; /* 画像が枠にフィットするように調整 */
  border: 2px solid blue; /* 青い縁を追加 */
}

.juice-img1 {
  left: 50%; /* 左から10% */
  top: 50%; /* 上から10% */
  transform: translate(-10%, -10%); /* 中心に配置するために移動 */
}
.juice-img2 {
  left:55%; /* 左から15% */
  top: 55%; /* 上から15% */
  transform: translate(-10%, -10%); /* 中心に配置するために移動 */
}
.juice-img3 {
  left: 50%; /* 左から10% */
  top: 50%; /* 上から10% */
  transform: translate(-10%, -10%); /* 中心に配置するために移動 */
}

left: 50%; /* 左から10% */
  top: 50%; /* 上から10% */
  transform: translate(-10%, -10%); /* 中心に配置するために移動 */
</style>
