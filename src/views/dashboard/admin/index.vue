<script setup lang="ts">
import "../../../config/ace.config"
import { reactive, ref } from "vue"
import { VAceEditor } from "vue3-ace-editor"
import { Delete } from "@element-plus/icons-vue"
import { connectAndRun } from "@/utils/service"

interface Code {
  id: number
  code: string
  out?: string
}

// const templateCode = "public static void main(String[] args){\n\n}"
const templateCode = `import com.maoxinhuan.webtools.utils.LogUtils;

public class Test22 {
  public static void main(String[] args) throws Exception{
    LogUtils.out("1");
  }
}
`

const codeTabs = reactive<Code[]>([{ id: 1, code: templateCode }])

const lang = ref("java")
const options = ref([
  { value: "java", label: "Java" },
  { value: "golang", label: "golang" }
])
function addTabs() {
  codeTabs.push({ id: codeTabs.length + 1, code: templateCode })
}

function clear(obj: Code) {
  obj.out = ""
}

function runCode(obj: Code) {
  obj.out = ""
  const source = new EventSource("http://localhost:3434/sse2/connect/" + obj.id)

  source.onopen = function () {
    console.log("open....")
  }

  source.onmessage = function (e) {
    if (e.data == "exit") {
      source.close()
    } else {
      obj.out += e.data + "<br>"
    }
  }

  source.onerror = function (e) {
    console.log("error...." + e)
    source.close()
  }

  connectAndRun(obj.id, obj.code)
}
</script>

<template>
  <el-row v-for="it in codeTabs" :id="it.id">
    <el-col :span="12">
      <el-row>
        <el-col :span="18">
          <el-select v-model="lang" class="m-2 lang-select" placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-button type="info" plain style="float: right" @click="runCode(it)">
            运行<el-icon><CaretRight /></el-icon>
          </el-button>
        </el-col>
      </el-row>

      <v-ace-editor
        class="input"
        v-model:value="it.code"
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
      <el-button type="info" plain :icon="Delete" @click="clear(it)"> 清空 </el-button>
      <el-button type="warning" plain style="float: right" @click="addTabs">
        <el-icon><Close /></el-icon>
      </el-button>
      <div class="output">
        <span v-html="it.out" />
      </div>
    </el-col>
  </el-row>
  <div />
</template>

<style lang="scss" scoped>
.start {
  background-color: #67c23a;
  border-radius: 12px;
}
.output {
  margin-left: 1px;
  font-size: 20px;
  width: 100%;
  height: 300px;
  overflow-y: auto;
  border: #000000 solid 1px;
  background-color: #ffffff;
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
