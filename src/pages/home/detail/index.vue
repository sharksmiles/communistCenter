<template>
  <div class="quanju">
    <div class="biaoti">中华人民共和国预算法</div>
    <div class="caigou">
      <span class="bt">
        江汉区政府采购
      </span>
      <span class="shi">
        7月10号
      </span>
    </div>
    <div class="wenz">
      <p>
        菲律宾总统杜特尔特计划派遣一艘菲律宾海军舰艇前往利比亚，援救在利比亚遭恐怖分子绑架的三名菲律宾工程师。这一“模仿”中国海外撤侨的举动本来引得菲律宾人的好评，但菲律宾国营人民电视台在报道这条新闻时，居然盗用了一张中国海军054A型岳阳号导弹护卫舰的照片。菲律宾总统杜特尔特计划派遣一艘菲律宾海军舰艇前往利比亚，援救在利比亚遭恐怖分子绑架的三名菲律宾工程师。这一“模仿”中国海外撤侨的举动本来引得菲律宾人的好评，但菲律宾国营人民电视台在报道这条新闻时，居然盗用了一张中国海军054A型岳阳号导弹护卫舰的照片。菲律宾总统杜特尔特计划派遣一艘菲律宾海军舰艇前往利比亚，援救在利比亚遭恐怖分子绑架的三名菲律宾工程师。这一“模仿”中国海外撤侨的举动本来引得菲律宾人的好评，但菲律宾国营人民电视台在报道这条新闻时，居然盗用了一张中国海军054A型岳阳号导弹护卫舰的照片。
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
    created() {
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Weixinyuan/details",
        method: "get",
        data: {
          id: 1
        },
        header: {
          "content-type": "application/x-www-form-urlencoded" // 默认值
        },
        success: function(res) {
          console.log(res);
        }
      });
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
    margin-left: 18px;
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
