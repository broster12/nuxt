<template>
  <div>
    <h1 class="text-center">US Raper Map</h1>
    <div class="container">
      <img src="/usmap.jpg" alt="US Map" class="img-fluid" />
      <div class="row">
        <div class="col-md-8">
          <!-- 現在表示されている画像だけを表示 -->
          <div v-for="(item, index) in displayedImages" :key="index">
            <img :src="item.image" alt="Juice" class="juice-img1" />
            <img :src="item.image" alt="Juice" class="juice-img2" />
            <img :src="item.image" alt="Juice" class="juice-img3" />
          </div>
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
    <div class="button-container">
      <!-- 画像を進むボタンと戻るボタン -->
      <button @click="goBackImage" class="btn btn-secondary" :disabled="currentIndex === 0">戻る</button>
      <button @click="addImage" class="btn btn-primary" :disabled="currentIndex >= data.length">次の画像を追加</button>
      <div>
        <a :href="currentLink" target="_blank" class="btn btn-primary">詳細リンク</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, // 現在のインデックス
      data: [
        { image: '/juice1.jpg', link: 'https://example.com/1' },
        { image: '/juice2.jpg', link: 'https://example.com/2' },
        { image: '/juice3.jpg', link: 'https://example.com/3' },
        { image: '/juice4.jpg', link: 'https://example.com/4' },
        { image: '/juice5.jpg', link: 'https://example.com/5' },
        { image: '/juice6.jpg', link: 'https://example.com/6' },
      ],
      displayedImages: [] // 表示された画像を格納する配列
    };
  },
  computed: {
    currentLink() {
      // 表示された画像の最後のリンクを返す
      if (this.displayedImages.length > 0) {
        return this.displayedImages[this.displayedImages.length - 1].link;
      }
      return '#'; // 何も表示されていない場合のデフォルトリンク
    }
  },
  methods: {
    addImage() {
      if (this.currentIndex < this.data.length) {
        // データがまだ残っている場合、次の画像を追加
        this.displayedImages.push(this.data[this.currentIndex]);
        this.currentIndex++;
      }
    },
    goBackImage() {
      if (this.currentIndex > 0) {
        // 戻る場合、最後の画像を削除し、インデックスを戻す
        this.displayedImages.pop();
        this.currentIndex--;
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 140%;
  height: 200%;
  max-width: 150%;
}

.container {
  width: 900px;
  height: 700px;
  overflow: hidden;
  position: relative;
  border: 1px solid #000;
  overflow: auto;
  cursor: move;
}

.img-fluid {
  width: 2000px;
  height: 1000px;
  background-image: url('map-image.jpg');
  background-size: cover;
  position: absolute;
  cursor: grab;
}

.container:hover .map {
  cursor: grabbing;
}

.juice-img {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid blue;
}

.juice-img1 {
  position: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid blue;
}
.juice-img2 {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid blue;
}
.juice-img3 {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid blue;
}
.button-container {
  margin-top: 20px;
  text-align: center;
}

button {
  margin: 0 10px;
}
</style>
