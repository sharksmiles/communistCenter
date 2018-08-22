<template>
  <div class="bgcolor">
    <div id="search">
      <view class="iconfont icon-search"></view>
      <input type="text" v-model="searchValue" @input="setSearchReasult" placeholder="请输入关键字">
    </div>
    <div id="searchValue" @click="resetLocation"> {{searchResult.title}}</div>
    <map id="map" :longitude="location.longitude" :latitude="location.latitude" :scale="17" :controls="controls"
         :bindcontroltap="controltap" :markers="markers" :bindmarkertap="markertap" :polyline="polyline"
         :bindregionchange="regionchange" show-location></map>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      data: "",
      location: {
        latitude: null,
        longitude: null
      },
      markers: [],
      searchValue: "",
      searchResult: {}
    };
  },
  created() {
    let _this = this;
    wx.getLocation({
      type: "gcj02",
      success: function(res) {
        _this.location.latitude = res.latitude;
        _this.location.longitude = res.longitude;
      }
    });
    this.mapCtx = wx.createMapContext("myMap");

    wx.request({
      url: "https://hanzhengjie.tenqent.com/index.php/Api/Map/index",
      success: function(res) {
        let markerObj = {
          iconPath: "/static/locationIcon.png",
          id: 0,
          latitude: null,
          longitude: null,
          width: 90,
          height: 90,
          callout: {
            content: "",
            color: "#ffffff",
            fontSize: 12,
            borderRadius: 5,
            bgColor: "#cc0e2e",
            display: "ALWAYS",
            padding: 8,
            textAlign: "left"
          }
        };
        for(let i of res.data.data){
          console.log(i)
        }

        res.data.data.forEach((item,index) => {
          markerObj.latitude = item.latitude;
          markerObj.longitude = item.longitude;
          markerObj.callout.content = `${item.title} \n ${item.location}`;
          _this.markers.push(markerObj);
        });
      }
    });
    },
  methods: {
    resetLocation() {
      this.location = this.searchResult;
    },
    getCenterLocation: function() {
      this.mapCtx.getCenterLocation({
        success: function(res) {}
      });
    },
    moveToLocation: function() {
      this.mapCtx.moveToLocation();
    },
    translateMarker: function() {
      this.mapCtx.translateMarker({
        markerId: 0,
        autoRotate: true,
        duration: 1000,
        destination: {
          latitude: 23.10229,
          longitude: 113.3345211
        },
        animationEnd() {
          console.log("animation end");
        }
      });
    },
    includePoints: function() {
      this.mapCtx.includePoints({
        padding: [10],
        points: [
          {
            latitude: 23.10229,
            longitude: 113.3345211
          },
          {
            latitude: 23.00229,
            longitude: 113.3345211
          }
        ]
      });
    },
    setSearchReasult() {
      let _this = this;
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Map/index",
        success: res => {
          for (let item of res.data.data) {
            let a = item.title.indexOf(_this.searchValue);
            if (a != -1) {
              _this.searchResult = item;
              console.log(a, _this.searchResult, item);
            }
            if (!_this.searchValue) {
              _this.searchResult = {};
            }
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/base";

.bgcolor {
  /*height: 100vh;*/
  overflow: hidden;
  map {
    width: 100%;
    height: 90vh;
  }
}

#container {
  width: 300px;
  height: 180px;
}

#search {
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  input {
    background-color: #fff;
    width: 80%;
    border-radius: 4px;
    padding: 3px 0;
    padding-left: 40px;
  }
  .iconfont {
    margin-right: -66rpx;
    color: #999999;
    font-size: 20px;
    z-index: 999;
  }
}

#searchValue {
  width: 100%;
  text-align: center;
  background: #ffffff;
  line-height: 2;
  color: red;
  font-weight: 800;
  /*filter:blur(10px);*/
}
</style>
