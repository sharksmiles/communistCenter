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
          longitude: 113.324520,
        },
        markers: [{
          // markers的信息
          iconPath: "/static/location.png ",
          id: 0,
          latitude: 23.099994,
          longitude: 113.324520,
          width: 30,
          height: 30,
          // callout信息
          callout: {
            content: "武汉市汉正街品牌广场 \n 地址：XXXXXXXXXX",
            color: "#ffffff",
            fontSize: 10,
            borderRadius: 5,
            bgColor: "#ff0000",
            display: "ALWAYS",
            padding: 8,
            textAlign: "left"
          }
        }]
      };
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
