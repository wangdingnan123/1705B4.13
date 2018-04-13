<template>
  <div class="home">

    <el-table
            :data="tableData"
            style="width: 100%">
      <el-table-column
              prop="id"
              label="日期"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="课程"
              width="180">
      </el-table-column>
      <el-table-column
              prop="sex"
              label="时间">
      </el-table-column>
      <el-table-column prop="caozuo" label="操作">
        <template slot-scope="scope">
          <el-button @click.native.prevent="pF(scope.row)" type="text" size="small">修改信息</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>

export default {
    data() {
        return {
            tableData: [],
            dialogFormVisible:false,
//            form:{},
            formLabelWidth:'120px'
        }
    },
    methods:{
//        submit(){
//            this.dialogFormVisible = false;
//            this.$http.post('http://localhost:3000/add',this.form,{emulateJSON:true}).then(()=>{
//                this.Wdn(); //重新执行一下Ajax
//                this.form={}
//            })
//        },

        pF(e){
            this.$http.post('http://localhost:3000/update',{id:e.id,state:2},{emulateJSON:true}).then((e)=>{
                this.Wdn()
            })
        },




        Wdn(){
            this.$http.post('http://localhost:3000',{state:this.$route.params.state},{emulateJSON:true}).then(e=>this.tableData=e.body)
        }
    },
    watch:{
        '$route':function () {
            this.Wdn()
        }
    },
    created(){
        this.Wdn();
    }
}
</script>
