<template>
  <liquor-tree
    ref="tree"
    :data="items"
    :options="options"
    class="entities-tree"
    @node:selected="onNodeSelected"
  >
    <label
      slot-scope="{node}"
      class="tree-text entities-label"
    >
      <template v-if="!node.hasChildren()">
        <!-- <i class="icon-doc"></i> -->
        <svg-icon
          name="documentation"
          class="disabled"
        />
        {{ node.text }}
      </template>

      <template v-else>
        <b>{{ node.text }}</b>
      </template>
    </label>
  </liquor-tree>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LiquorTree from 'liquor-tree'
import svgIcons from '@/views/icons/svg-icons'

@Component({
  name: 'TreeView',
  components: {
    LiquorTree
  }
})
export default class extends Vue {
  @Prop({ required: true }) private items!: string[]

  private options = {
    checkbox: false
  };

  onNodeSelected(node:Object) {
    console.log(node)
    // console.log(node.text, node)
  }
}
</script>
<style lang="scss">
  .entities-label {
    flex-grow: 1;
    cursor: pointer;
  }

  .entities-tree .tree-anchor.selected {
    background-color: #fff
  }

  .tree-text {
    font-weight: 400;
  }
</style>
