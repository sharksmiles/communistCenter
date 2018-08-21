<template>
  <div>
    <a v-for="(item,index) in wishList" :key="index" :href="'/pages/home/detail/main?id='+item.id+'&type=a'">
      <div class="wishcard">
        <h3>{{item.title}}</h3>
        <span>{{item.add_time}}</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "wishcard",
    props: ["wishList"],
    mounted() {
      let _this = this;
      setTimeout(function() {
        _this.wishList.map((value, index) => {
          _this.$set(_this.wishList[index], "add_time", _this.formatDate(value.add_time));
        });
      }, 500);
    },
    methods: {
      formatDate: function(time) {
        console.log(time)
        time=time*1000
        let date = new Date(parseInt(time));
        return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
      }
    }
  }
  ;
</script>

<style lang="scss" scoped>
  .wishcard {
    &:first-child {
      margin: 6px 12px;
    }
    margin: 20px 12px;
    padding: 9px;
    border-radius: 6px;
    box-shadow: 1px 2px 6px #ccc;
    span {
      font-size: 11px;
      color: #aaa;
    }
  }
</style>
