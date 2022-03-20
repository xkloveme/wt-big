<template lang="pug">
.editor-content.pos-a#editor-content(:style="style")
	iframe.div(:src="manager.screen.currentScreen.url",style="width:100%;height:100%",:style="{'pointerEvents':manager.temporary.editorContentDrag?'none':'auto'}" width="100%",height="100%", frameborder="0" scrolling="auto" )
	.line(:style="{...style1, border:'none','pointerEvents':manager.temporary.editorContentDrag?'none':'auto'}" v-if="manager.screen.currentScreen.showRed")
		.item.border-red-900.border-3.border-solid(v-for="item in style1.count" :style="{border:style1.border}")
</template>
<script lang="ts">
import Manager from "@dorring/sdk/core/Manager";
import { onMounted, reactive, toRefs, watch, defineComponent, computed } from "vue";
import widgetEdit from "@dorring/sdk/vue3/components/widget/edit.vue";
import resetZoom from "./resetZoom";
import resetStyle from "./resetStyle";

export default defineComponent({
  name: "editor-content",
  components: {
    widgetEdit,
  },
  setup() {
    const manager: Manager = Manager.Instance();
    const state = reactive({ manager });

    onMounted(() => {
      resetZoom();
    });

    watch(
      () => [
        state.manager.screen.currentScreen.width,
        state.manager.screen.currentScreen.height,
        state.manager.screen.currentScreen.url,
      ],
      () => {
        resetZoom();
      }
    );

    watch(
      () => [
        state.manager.temporary.zoom,
        state.manager.temporary.offsetY,
        state.manager.temporary.offsetX,
      ],
      () => {
        resetStyle();
      }
    );

    const style = computed(() => {
      let backgroundColor = state.manager.screen.currentScreen.backgroundColor;
      let resultColor = "";
      if (backgroundColor.length > 1) {
        resultColor = `linear-gradient(${
          state.manager.screen.currentScreen.gradientDirection
        }deg, ${backgroundColor.toString()})`;
      } else {
        resultColor = state.manager.screen.currentScreen.backgroundColor[0];
      }
      return {
        [backgroundColor.length > 1
          ? "background-image"
          : "background-color"]: resultColor,
        width: state.manager.screen.currentScreen.width + "px",
        height: state.manager.screen.currentScreen.height + "px",
      };
    });

    const style1 = computed(() => {
      return {
        count:
          state.manager.screen.currentScreen.zong *
          state.manager.screen.currentScreen.heng,
        gridTemplateColumns: `repeat(${state.manager.screen.currentScreen.zong}, 1fr)`,
        gridTemplateRows: `repeat(${state.manager.screen.currentScreen.heng}, 1fr)`,
        border: `1px solid ${state.manager.screen.currentScreen.color}`,
      };
    });

    return {
      ...toRefs(state),
      style,
      style1,
    };
  },
});
</script>
<style lang="scss" scoped>
.editor-content {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transform-origin: 0 0 0;
}
.line {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events:'none';
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  .item {
    border: 1px solid red;
  }
}
</style>
