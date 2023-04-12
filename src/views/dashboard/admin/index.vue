<script setup lang="ts">
import "../../../config/ace.config"
import {ref} from "vue"
import {VAceEditor} from "vue3-ace-editor"
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'

const content = ref("public static void main(String[] args){\n\n}")
const lang = ref("java")
const options = ref([
  {value: "java", label: "Java"},
  {value: "golang", label: "golang"}
])
const size = ref([1])
function addTabs() {
  size.value.push(size.value.length + 1)
  console.log(size.value)
}
</script>

<template>

  <el-row v-for="it in size" :id="it">
    <el-col :span="12">
      <el-row>
        <el-col :span="18">
          <el-select v-model="lang" class="m-2 lang-select" placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-button type="info" plain style="float: right">
            运行<el-icon><CaretRight /></el-icon>
          </el-button>
        </el-col>

      </el-row>


      <v-ace-editor
        class="input"
        v-model:value="content"
        v-model:lang="lang"
        theme="github"
        style=""
        :options="{
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        fontSize: 14,
        tabSize: 4,
        showPrintMargin: false,
        highlightActiveLine: true
      }"
      />

    </el-col>
    <el-col :span="12">
      <el-button type="info" plain :icon="Delete">
        清空
      </el-button>
      <el-button type="warning" plain style="float: right" @click="addTabs">
        <el-icon><Close /></el-icon>
      </el-button>
      <div class="output">

      </div>

    </el-col>

  </el-row>
  <div>

  </div>
</template>

<style lang="scss" scoped>
.start {
  background-color: #67c23a;
  border-radius: 12px;
}
.output {
  font-size: 20px;
  width: 100%;
  height: 300px;
  overflow-y: auto;
  background-color: #031e47;
  display: inline-block;
}

.input {
  display: inline-block;
  font-size: 20px;
  width: 100%;
  height: 300px;
}

.lang-select {
  left: 40px;
  padding: 0;
  border-radius: 0;
  margin: 0;
}

.center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
