<template>
  <div class="mcontaner">

    <Header></Header>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <el-pagination class="mpage"
                     background
                     layout="prev, pager, next"
                     :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Blogs.vue",
  components: {Header},
  data() {
    return {
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 5
    }
  },
  methods: {
    page(currentPage) {
      const _this = this
      _this.$axios().get("/blogs?currentPage=" + currentPage).then(res => {
        console.log(res)
        _this.blogs = res.data.data.records
        _this.currentPage=res.data.data.current
        _this.total=res.data.data.total
        _this.pagesize=res.data.data.size
      })
    }
  }
}

</script>

<style scoped>
.mpage {
  margin: 0 auto;
  text-align: center;
}
</style>