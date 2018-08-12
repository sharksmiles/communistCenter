<template>
  <div class="bgcolor">
    <map id="map" :longitude="location.longitude" :latitude="location.latitude" :scale="15" :controls="controls"
         :bindcontroltap="controltap" :markers="markers" :bindmarkertap="markertap" :polyline="polyline"
         :bindregionchange="regionchange" show-location></map>
    <div>{{data}}</div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        data: "",
        location: {
          latitude: 23.099994,
          longitude: 113.324520
        },
        markers: []
      };
    },
    mounted() {
      let _this = this;
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Map/index",
        success: function(res) {
          console.log(res);
          let obj = {
            iconPath: "/static/locationIcon.png",
            id: 0,
            latitude: null,
            longitude: null,
            width: 100,
            height: 100,
            callout: {
              content: "",
              color: "#ffffff",
              fontSize: 12,
              borderRadius: 5,
              bgColor: "#ff0000",
              display: "ALWAYS",
              padding: 8,
              textAlign: "left"
            }
          };
          for (let item of res.data.data) {
            obj.latitude = item.latitude;
            obj.longitude = item.longitude;
            obj.callout.content = `${item.title} \n ${item.location}`;
            console.log(obj);
            _this.markers.push(obj);
          }
        }
      });
    },
    methods: {
      regionchange(e) {
        console.log(e.type);
      },
      markertap(e) {
        console.log(e.markerId);
      },
      controltap(e) {
        console.log(e.controlId);
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
      height: 100vh;
    }
  }

  #container {
    width: 300px;
    height: 180px;
  }
</style>
