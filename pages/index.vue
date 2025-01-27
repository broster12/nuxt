<template>
  <div>
<<<<<<< HEAD
    <h1 class="いぶき">test</h1>
=======
    <h1 class="text">ブロスタ</h1>
>>>>>>> 63fe5fc3f690b6b0273834081efb4996f46b3829
  
    <div class="container">

    <router-link to="/wa" class="wa">Wa</router-link>
    <router-link to="/or" class="or">OR</router-link>
    <router-link to="/ca" class="ca">CA</router-link>
    <!-- 他の州も同様に追加るいるい -->
    
<router-link to="/nv" class="nv">NV</router-link>
<router-link to="/ut" class="ut">UT</router-link>
<router-link to="/az" class="az">AZ</router-link>
<router-link to="/id" class="id">ID</router-link>
<router-link to="/mt" class="mt">MT</router-link>
<router-link to="/wy" class="wy">WY</router-link>
<router-link to="/co" class="co">CO</router-link>
<router-link to="/nm" class="nm">NM</router-link>
<router-link to="/nd" class="ND">ND</router-link>
<router-link to="/sd" class="SD">SD</router-link>
<router-link to="/ne" class="KE">NE</router-link>
<router-link to="/ks" class="KS">KS</router-link>
<router-link to="/ok" class="OK">OK</router-link>
<router-link to="/tx" class="TX">TX</router-link>
<router-link to="/mn" class="MN">MN</router-link>
<router-link to="/mo" class="MO">MO</router-link>
<router-link to="/la" class="LA">LA</router-link>
<router-link to="/ar" class="AR">AR</router-link>
<router-link to="/wi" class="WI">WI</router-link>
<router-link to="/il" class="IL">IL</router-link>
<router-link to="/ms" class="MS">MS</router-link>
<router-link to="/al" class="AL">AL</router-link>
<router-link to="/tn" class="TN">TN</router-link>
<router-link to="/ky" class="KY">KY</router-link>
<router-link to="/va" class="VA">VA</router-link>
<router-link to="/ga" class="GA">GA</router-link>
<router-link to="/ia" class="IA">IA</router-link>
<router-link to="/in" class="IN">IN</router-link>
<router-link to="/sc" class="SC">SC</router-link>
<router-link to="/nc" class="NC">NC</router-link>
<router-link to="/mi" class="MI">MI</router-link>
<router-link to="/oh" class="OH">OH</router-link>
<router-link to="/wv" class="WV">WV</router-link>
<router-link to="/fl" class="FL">FL</router-link>
<router-link to="/pa" class="PA">PA</router-link>
<router-link to="/de" class="DE">DE</router-link>
<router-link to="/md" class="MD">MD</router-link>
<router-link to="/nj" class="NJ">NJ</router-link>
<router-link to="/ny" class="NY">NY</router-link>
<router-link to="/ct" class="CT">CT</router-link>
<router-link to="/ri" class="RI">RI</router-link>
<router-link to="/ma" class="MA">MA</router-link>
<router-link to="/nh" class="NH">NH</router-link>
<router-link to="/vt" class="VT">VT</router-link>
<router-link to="/ak" class="AK">AK</router-link>

      <img 
        src="/usa.png" 
        alt="US Map" 
        class="img-fluid"
        ref="mapImage"
        @mousedown="startDrag"
        :style="mapStyle"
      />
     
      <div class="row">
        <div class="col-md-8">
          <!-- 現在のインデックスに基づいて表示する画像 -->
          <div v-for="(item, index) in displayedImages" :key="index">
            <img :src="item.image" alt="Juice" class="juice-img" :style="getImagePosition(index)" />
          </div>
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      data: [
   
      ],
      displayedImages: [], // 表示された画像を格納する配列
      dragging: false, // ドラッグ状態を追跡
      offsetX: 0, // ドラッグ開始時のX座標
      offsetY: 0, // ドラッグ開始時のY座標
      mapPosition: { top: 0, left: 0 } // 地図の位置
    };
  },
  computed: {
 
    mapStyle() {
      // 地図の位置スタイルを返す
      return {
        top: `${this.mapPosition.top}px`,
        left: `${this.mapPosition.left}px`,
      };
    }
  },
 

 
};
</script>

<style scoped>
.text{
  margin-left: 25rem;
}

img {
  width: 140%;
  height: 200%;
  max-width: 150%;
  object-fit: contain;
}

.container {
  width: 130%;
  height: 670px;
  overflow: hidden;
  position: relative;
  border: 1px solid #000;
  overflow: auto;
  cursor: move;
}

.wa {
  color: rgb(230, 156, 9);
  position: absolute; /* 中央配置 */
  top: 27%;
  left: 33%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}
.or{
  color:  rgb(230, 156, 9);
  position: absolute; /* 中央配置 */
  top: 40%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}


.ca{
  color: rgb(230, 156, 9);
  position: absolute; /* 中央配置 */
  top: 60%;
  left: 13%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.nv{
  color: rgb(230, 156, 9);
  position: absolute; /* 中央配置 */
  top: 60%;
  left: 36%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.ut{
  color: rgb(230, 156, 9);
  position: absolute; /* 中央配置 */
  top: 63%;
  left: 48%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.d{
  color: aqua;
  position: absolute; /* 中央配置 */
  top: 58%;
  left: 36%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}
.e{
  color: aqua;
  position: absolute; /* 中央配置 */
  top: 63%;
  left: 48%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.az{
  color: rgb(186, 180, 16);
  position: absolute; /* 中央配置 */
  top: 81%;
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.id{
  color:rgb(230, 156, 9);
  position: absolute; /* 中央配置 */
  top: 44%;
  left: 44%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}


.mt {
  color:  rgb(230, 156, 9);
  position: absolute; /* 中央配置 */
  top: 33%;
  left: 56%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}


.wy{
  color:  rgb(230, 156, 9);
  position: absolute; /* 中央配置 */
  top: 50%;
  left: 59%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.co{
  color:  rgb(230, 156, 9);
  position: absolute; /* 中央配置 */
  top: 66%;
  left: 62%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.nm{
  color: rgb(186, 180, 16);
  position: absolute; /* 中央配置 */
  top: 84%;
  left: 59%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.ND{
  color: rgb(37, 139, 15);
  position: absolute; /* 中央配置 */
  top: 34%;
  left: 75%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}
.SD {
  color: rgb(37, 139, 15);
  position: absolute; /* 中央配置 */
  top: 46%;
  left: 75%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.NE{
  color: rgb(37, 139, 15);
  position: absolute; /* 中央配置 */
  top: 57%;
  left: 76%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.KS {
  color: rgb(37, 139, 15);
  position: absolute; /* 中央配置 */
  top: 70%;
  left: 79%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.OK{
  color: rgb(186, 180, 16);
  position: absolute; /* 中央配置 */
  top: 82%;
  left: 81%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}

.q {
  color: aqua;
  position: absolute; /* 中央配置 */
  top: 82%;
  left: 81%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}
.TX{
  color: rgb(186, 180, 16);
  position: absolute; /* 中央配置 */
  top: 98%;
  left: 77%;
  transform: translate(-50%, -50%);
  z-index: 10; /* 画像の上に配置 */
  font-size: 18px;
}



.MN {
  color: rgb(37, 139, 15);
  position: absolute;
  top: 40%;
  left: 88%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}


.t{
  color: aqua;
  position: absolute;
  top: 56%;
  left: 91%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}


.MO{
  color:rgb(37, 139, 15);
  position: absolute;
  top: 71%;
  left: 95%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}

.w{
  color: aqua;
  position: absolute;
  top: 84%;
  left: 94%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}

.LA{
  color:rgb(204, 66, 12);
  position: absolute;
  top: 100%;
  left: 94%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}
.y{
  color: aqua;
  position: absolute;
  top: 84%;
  left: 94%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}
.AR{
  color: rgb(204, 66, 12);
  position: absolute;
  top: 84%;
  left: 94%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}

.WI{
  color: rgb(37, 139, 15);
  position: absolute;
  top: 45%;
  left: 98%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}

.IL{
  color:rgb(37, 139, 15);
  position: absolute;
  top: 63%;
  left: 100%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}

.MS{
  color: rgb(204, 66, 12);
  position: absolute;
  top: 89%;
  left: 99%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}

.AL{
  color:rgb(204, 66, 12);
  position: absolute;
  top: 94%;
  left: 108%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;

}


.TN{
  color: rgb(204, 66, 12);
  position: absolute;
  top: 80%;
  left: 107%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}


.KY{
  color: rgb(204, 66, 12);
  position: absolute;
  top: 73%;
  left: 110%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;}
  .VA{
  color:  rgb(204, 66, 12);
  position: absolute;
  top: 71%;
  left: 127%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;}
.GA {
  color: rgb(204, 66, 12);
  position: absolute;
  top: 89%;
  left: 118%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}

.IA {
  color:rgb(37, 139, 15);
  position: absolute;
  top: 56%;
  left: 91%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}

.IN{
  color: rgb(37, 139, 15);
  position: absolute;
  top: 67%;
  left: 108%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;}
  
  .MI{
  color: rgb(37, 139, 15);
  position: absolute;
  top: 40%;
  left: 105%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}

.ak{
  color: rgb(230, 156, 9);
  position: absolute;
  top: 55%;
  left: 112%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;}
  .al{
    color: aqua;
  position: absolute;
  top: 50%;
  left: 105%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }
  

  .SC{
    color: rgb(204, 66, 12);
  position: absolute;
  top: 85%;
  left: 127%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }
  .NC{
    color: rgb(204, 66, 12);
  position: absolute;
  top: 78%;
  left: 127%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }

  .OH{
    color:rgb(37, 139, 15);
  position: absolute;
  top: 61%;
  left: 117%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }

  .WV{
    color: rgb(204, 66, 12);
  position: absolute;
  top: 66%;
  left: 122%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }
  .FL{
    color: rgb(204, 66, 12);
  position: absolute;
  top: 105%;
  left: 118%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }

  .PA{
    color: aqua;
  position: absolute;
  top: 56%;
  left: 127%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }

  .DE{
    color: aqua;
  position: absolute;
  top: 63%;
  left: 139%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }

  .MD{
    color: aqua;
  position: absolute;
  top: 67%;
  left: 138%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }

  .NJ{
    color: aqua;
  position: absolute;
  top: 59%;
  left: 139%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
  }

.NY{
  color: aqua;
  position: absolute;
  top: 49%;
  left: 129%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
}
.CT{
  color: aqua;
  position: absolute;
  top: 54%;
  left: 139%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center; 
}
.RI{
  color: aqua;
  position: absolute;
  top: 51%;
  left: 146%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center; 
}
.MA{
  color: aqua;
  position: absolute;
  top: 48%;
  left: 143%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center; 
}
.a{
  color: aqua;
  position: absolute;
  top: 44%;
  left: 145%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center; 
}

.VT{
  color: aqua;
  position: absolute;
  top: 41%;
  left: 132%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center; 
}

.NH{
  color: aqua;
  position: absolute;
  top: 37%;
  left: 143%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center; 
}
.AK{
  color: rgb(230, 156, 9);
  position: absolute;
  top: 105%;
  left: 26%;  /* 親要素の幅を超えて配置 */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  white-space: nowrap;
  text-align: center; 
}
.img-fluid {
  width: 2400px;
  height: 1000px;
  background-image: url('map-image.jpg');
  background-size: cover;
  position: absolute;
  cursor: grab;
  z-index: 1; /* リンクの下に配置 */
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
  transition: all 0.3s ease-in-out;
}

.button-container {
  margin-top: 20px;
  text-align: center;
}

button {
  margin: 0 10px;
}

.form-range {
  width: 100%;
  margin-top: 20px;
}
</style>
