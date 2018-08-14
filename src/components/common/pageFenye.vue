<template>
    <section style="width:1260px;">
        <div class="pageFen">
               <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="90"
                    >
                </el-pagination>
                <span class="pageSpan">共9页</span>
           </div>
    </section>
</template>

<script>
export default {
   data(){
       return{

       }
   }
}
</script>

<style scoped>
   .pageFen{
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 30px;
 }
 .pageSpan{
     font-size: 12px;
     display: inline-block;
     padding-left: 10px;
 }
</style>
