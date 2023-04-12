<script setup lang="ts">
import "../../../config/ace.config"
import { ref } from "vue"
import { VAceEditor } from "vue3-ace-editor"

const content = ref("public static void main(String[] args){\n\n}")
const inputEl = ref(null)
const lang = ref("java")
const options = ref([
  { value: "java", label: "Java" },
  { value: "golang", label: "golang" }
])
</script>

<template>
  <el-select v-model="lang" class="m-2 lang-select" placeholder="Select">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
  <v-ace-editor v-model:value="content" v-model:lang="lang" theme="github" style="font-size: 20px; height: 300px" />

  <div>
    <highlightjs language="javascript" code="var x = 5;" />
    <el-input
      v-model="inputEl"
      ref="input"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 6}"
      placeholder="请输入内容"
    ></el-input>
    <pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>
    <pre v-highlightjs><code class="javascript">var a = 5;</code></pre>
    <pre v-highlightjs>Integer a = 20;</pre>
    <pre v-highlightjs><code class="java" contenteditable="true">{{inputEl}}</code></pre>

    <pre v-highlightjs><code class="javascript" contenteditable="true">
      <textarea  v-model="inputEl"></textarea>
    </code></pre>
    public class DubDeclareBillForNbAndShServiceImpl implements DubDeclareBillForNbAndShService {}
  </div>


</template>

<style lang="scss" scoped>
.lang-select{
  left: 40px;
  padding: 0;
  border-radius: 0px;
  margin: 0;
}
.center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
