<template>
  <div class="pagination">
    <button :class="{'no-pointer' : pageNo === 1}" @click="changePage(pageNo - 1)">上一页</button>
    <button v-show="startNumAndEndNum.start>1" @click="changePage(1)">1</button>
    <button v-show="startNumAndEndNum.start>2" @click="changePage(2)">···</button>
    <button v-for="(page,index) in startNumAndEndNum.end"
            :key="index" v-if="page>=startNumAndEndNum.start"
            :class="{'currentPage' : isCurrentPage(page)}"
            @click="changePage(page)">{{ page }}
    </button>
    <button v-show="startNumAndEndNum.end<totalPage"
            @click="changePage(startNumAndEndNum.end+1)">···
    </button>
    <button v-show="startNumAndEndNum.end<totalPage"
            @click="changePage(totalPage)">{{ totalPage }}
    </button>
    <button :class="{'no-pointer' : pageNo === totalPage}" @click="changePage(pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ totalPage }} 页</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    startNumAndEndNum() {
      let start = 0, end = this.totalPage
      if (this.totalPage >= this.continues) {
        start = this.pageNo - Math.floor(this.continues / 2)
        end = this.pageNo + Math.floor(this.continues / 2)
        if (start < 1) {
          end = this.continues
          start = 1
        }
        if (end > this.totalPage) {
          end = this.totalPage
          start = end - this.continues + 1
        }
      }
      return {start, end}
    }
  },
  methods: {
    isCurrentPage(page) {
      return page === this.pageNo
    },
    changePage(page) {
      this.$emit('changePage', page);
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }

  .currentPage {
    background-color: #e1251b;
    color: white;
  }

  .no-pointer {
    pointer-events: none;
  }
}
</style>