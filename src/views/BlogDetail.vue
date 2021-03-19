<template>
  <div>
    <Header></Header>
    <div class="mblog">
      <h2>{{ blog.title }}</h2>
      <el-link icon="el-icon-edit">
        <router-link :to="{name:'BlogEdit',params:{blogId:blog.id}}">
          编辑
        </router-link>
      </el-link>
      <el-divider></el-divider>
      <div v-html="blog.content" class="markdown-body">

      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import "github-markdown-css/github-markdown.css"

export default {
  name: "BlogDetail.vue",
  components: {Header},
  data(){
    return{
      blog:{
        id:'',
        content:'',
        description:'',
        title:''
      },
      ownblog:false,
    }
  },
  created() {
    const blogId = this.$route.params.blogId
    console.log(blogId)
    const _this = this
    this.$axios.get('/blog/' + blogId).then(res => {
      const blog = res.data.data
      console.log(blog)
      _this.blog.id = blog.id

      _this.blog.title = blog.title
      ////////调用markdown
      var MarkdownIt = require('markdown-it')
      var md = new MarkdownIt()
      var result = md.render(blog.content)
      ////////调用markdown
      _this.blog.content = result
      _this.ownblog=(blog.UserId === _this.$store.getters.getUer.id)
    })
  }
}
</script>

<style scoped>
.mblog {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 700px;
  padding: 20px 15px;
}
</style>