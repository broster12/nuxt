<script setup lang="ts">
definePageMeta({
  title: 'ワシントン州を探求',
  description: 'ワシントン州の美しい自然と魅力的な都市を発見しよう。'
})
</script>

<template>
  <!-- ヒーローバナー -->
  <Background video-src="/pexels/movie/3209211-uhd_3840_2160_25fps.mp4" :overlay="true" overlay-color="rgba(0, 0, 0, 0.5)" class="relative">
    <div class="absolute inset-0 flex items-center justify-center text-center">
      <div>
        <h1 class="text-5xl font-extrabold text-white mb-4 leading-tight">ワシントン州を探求しよう</h1>
        <p class="text-xl text-white max-w-2xl mx-auto mb-6">自然の美しさと都市の活気が融合した、ワシントン州の魅力を体験しよう。</p>
      </div>
    </div>
  </Background>

  <!-- ハイライトセクション -->
  <section class="py-16 bg-white text-gray-800">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-semibold mb-8">ワシントン州のハイライト</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- スペースニードル -->
        <div class="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all">
          <div class="relative w-full h-80">
            <img src="../public/usa-places/dylan-mullins-tSqj4gt0xo8-unsplash.jpg" alt="スペースニードル" class="object-cover w-full h-full rounded-t-lg"/>
          </div>
          <div class="p-6">
            <i class="fas fa-landmark text-4xl text-cyan-500"></i>
            <h3 class="text-2xl font-semibold mt-4">スペースニードル</h3>
            <p class="text-gray-600 mt-2">シアトルの象徴的なタワーから360度の絶景を楽しめます。</p>
          </div>
        </div>

        <!-- オリンピック国立公園 -->
        <div class="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all">
          <div class="relative w-full h-80">
            <img src="../public/usa-places/john-thomas-wf9PjVcbIlE-unsplash.jpg" alt="オリンピック国立公園" class="object-cover w-full h-full rounded-t-lg"/>
          </div>
          <div class="p-6">
            <i class="fas fa-tree text-4xl text-cyan-500"></i>
            <h3 class="text-2xl font-semibold mt-4">オリンピック国立公園</h3>
            <p class="text-gray-600 mt-2">古代の雨林、アルプスの草地、そして険しい海岸線を探索できます。</p>
          </div>
        </div>

        <!-- テクノロジー業界 -->
        <div class="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all">
          <div class="relative w-full h-80">
            <img src="../public/usa-places/christopher-gower-m_HRfLhgABo-unsplash.jpg" alt="テクノロジー業界" class="object-cover w-full h-full rounded-t-lg"/>
          </div>
          <div class="p-6">
            <i class="fas fa-laptop-code text-4xl text-cyan-500"></i>
            <h3 class="text-2xl font-semibold mt-4">テクノロジー業界</h3>
            <p class="text-gray-600 mt-2">マイクロソフトやアマゾンなど、革新的なテクノロジー企業が集まる場所です。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- アクションを促すセクション -->
  <section class="bg-gray-800 text-white py-16 text-center">
    <div class="container mx-auto">
      <h2 class="text-4xl font-semibold mb-4">ワシントン州を探索する準備はできましたか？</h2>
      <p class="text-xl mb-8">あなたのワシントン州の冒険を今すぐ始めましょう！</p>
      <button class="bg-cyan-500 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-cyan-400 transition-all">計画を始める</button>
    </div>
  </section>

  <!-- インタラクティブマップセクション -->
  <section class="py-16 bg-white">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-semibold mb-8">アメリカ合衆国のマップ</h2>
      <div class="flex justify-center items-center">
        <img src="" alt="アメリカ合衆国のマップ" class="max-w-full h-auto"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 基本のスタイル調整 */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

/* ヒーローバナーの文字 */
h1 {
  font-size: 4rem;  /* 文字サイズ */
  letter-spacing: 1px; /* 文字間隔 */
  line-height: 1.3;  /* 行間 */
  text-align: center;
  color: white;
}

/* セクションタイトルのスタイル */
h2, h3 {
  font-size: 2rem;
  letter-spacing: 0.5px;
  line-height: 1.4;
  text-align: center;
  color: #333;
}

p {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
  text-align: center;
}

button {
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #00B8D9;
}

/* カードのホバー効果 */
.card:hover {
  transform: scale(1.05);
}

/* グリッドレイアウトの調整 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.relative {
  position: relative;
  width: 100%;
}

.object-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* 画像のアスペクト比を保つ */
h1, h2, h3, p {
  writing-mode: horizontal-tb;  /* 横書きに戻す */
}

/* パララックス背景 */
.parallax {
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
