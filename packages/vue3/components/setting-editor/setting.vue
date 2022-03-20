<template lang="pug">
d-setting-container
	template(#title)
		d-titles(:list="[{ label: '尺寸' }]")
	template(#content)
		el-form-item(label-width="0px")
			d-select(:list="screenSize" v-model="size")
		el-form-item(label-width="0px")
			d-input(v-model="manager.screen.currentScreen.width", format="number", prepend="W" title="宽度")
			d-input.ml-10(
				v-model="manager.screen.currentScreen.height",
				format="number",
				prepend="H"
				title="高度")
d-setting-container
	template(#title)
		d-titles(:list="[{ label: '配置URL' }]")
	template(#content)
		d-input(v-model="manager.screen.currentScreen.url",style="width:100%", title="URL")
d-setting-container(style="margin:10px 0;")
	template(#title)
		d-titles(:list="[{ label: '缝线' }]")
	template(#content)
		el-form-item(label="是否开启缝线")
			el-switch(v-model="manager.screen.currentScreen.showRed")
		el-form-item(label="颜色" v-if="manager.screen.currentScreen.showRed")
			d-color(v-model="manager.screen.currentScreen.color")
		el-form-item(label-width="0px" v-if="manager.screen.currentScreen.showRed")
			d-input(v-model="manager.screen.currentScreen.zong", format="number", prepend="纵"
				title="纵向")
			d-input.ml-10(
				v-model="manager.screen.currentScreen.heng",
				format="number", prepend="横" title="横向")
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent, computed } from "vue";
import Manager from "@dorring/sdk/core/Manager";
import screenSize from "@dorring/sdk/config/screenSize";
import layoutMode from "@dorring/sdk/config/layoutMode";
import size from "./size";
import dTitles from "@dorring/sdk/vue3/components-style/d-titles/index.vue";
import dColor from "@dorring/sdk/vue3/components-style/d-color/index.vue";
import dInput from "@dorring/sdk/vue3/components-style/d-input/index.vue";
import dSettingContainer from "@dorring/sdk/vue3/components-style/d-setting-container/index.vue";
// import dColors from '@dorring/sdk/vue3/components-style/d-colors/index.vue'
import dSelect from "@dorring/sdk/vue3/components-style/d-select/index.vue";

export default defineComponent({
  name: "setting-editor-setting",
  components: {
    dSelect,
    dTitles,
    dColor,
    // dColors,
    dInput,
    dSettingContainer,
  },
  setup() {
    const manager: Manager = Manager.Instance();
    const state = reactive({ manager });

    const scenesList = computed(() => {
      return Object.values(manager.screen.currentScreen.scenes).map((item) => {
        let n = { label: "", value: "" };
        n.label = item.name;
        n.value = item.id;
        return n;
      });
    });
    return {
      ...toRefs(state),
      size,
      scenesList,
      layoutMode,
      screenSize,
    };
  },
});
</script>
