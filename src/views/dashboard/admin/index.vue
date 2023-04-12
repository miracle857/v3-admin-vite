<script>
import { ref, nextTick } from "vue"
import hljs from "highlight.js"
import { VAceEditor } from "vue3-ace-editor";

export default {
  setup() {
    const inputEl = ref(null)
    const content = ref(null)


    return {
      inputEl,
      content,
      components: {
        VAceEditor
      }
    }
  }
}
</script>

<template>
  <div>
    <v-ace-editor
      v-model:value="content"
      @init="editorInit"
      lang="html"
      theme="chrome"
      style="height: 300px" />

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
.center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
