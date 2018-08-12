<template>
  <div class="quanju">
    <div class="biaoti" v-html="postData.type==='a'?page.title:page.post_title"></div>
    <div class="caigou">
      <span class="shi" v-if="postData.type==='b'">
        {{page.post_date}}
      </span>
    </div>
    <div class="wenz">
      <p v-html="postData.type==='a'?page.content:page.post_content">

      </p>
    </div>
    <div class="foot">
      <p class="yd">阅读<span>4</span></p>
      <p class="zan"><span class="bj"></span><span class="zi">赞</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        postData: {
          type: "",
          id: ""
        },
        page: {}
      };
    },
    mounted() {
      let _this = this;
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Xq/index",
        method: "get",
        data: {
          id: _this.postData.id,
          type: _this.postData.type
        },
        header: {
          "content-type": "application/x-www-form-urlencoded" // 默认值
        },
        success: function(res) {
          _this.page = res.data.data;
          console.log(res);
          if (_this.postData.type === "b") {
            console.log(res)
            let date = new Date(_this.page.post_date);
            _this.page.post_content = decodeURI(_this.page.post_content);
            _this.page.post_title = decodeURI(_this.page.post_title);
            _this.page.post_date = `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
          }
        }
      });
    },
    onLoad: function(opts) {
      console.log(opts);
      this.postData.id = opts.id;
      this.postData.type = opts.type;
    }
  };
</script>

<style lang="scss" scoped>
  .quanju {
    background: #fff;
    padding: 15px 15px 60px 15px;
    color: #474747;
  }

  .biaoti {
    width: 100%;
    height: 20px;
    text-align: left;
    margin-top: 10px;
    letter-spacing: 3px;
    color: #000;
    font-size: 20px;
  }

  .caigou {
    width: 100%;
    height: 20px;
    margin-top: 18px;
    spna {
      line-height: 3;
    }
  }

  .bt {
    display: block;
    float: left;
    font-size: 14px;
    color: #53629d;
  }

  .shi {
    display: block;
    float: left;
    font-size: 14px;
    color: #b9b9b9;
  }

  .wenz p {
    letter-spacing: 2px;
    text-indent: 2em;
    line-height: 30px;
    color: #363636;
  }

  .foot {
    width: 100%;
    height: 20px;
    margin: 10px 0;
  }

  .yd {
    float: left;
    color: #c0c0c0;
  }

  .yd span {
    margin: 0 6px;
  }

  .zan {
    float: right;
    margin-right: 4px;
    color: #596d96;
  }

  .bj {
    display: block;
    float: left;
    width: 30px;
    height: 24px;
    margin-top: -4px;
    margin-right: 6px;
    /*background: url(image/zan.png) no-repeat;*/
  }

  .zi {
    display: block;
    float: right;
    margin-right: 4px;
  }
</style>
