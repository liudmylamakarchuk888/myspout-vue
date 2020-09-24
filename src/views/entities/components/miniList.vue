<template>
  <div class="list-container">
    <div v-if="_loading">
      loading...
    </div>
    <div v-else>
      <div
        v-for="(item, index) in properties"
        :key="index"
      >
        <el-button
          @click="handleClick(item)"
        >
          <i
            style="padding-right: 10px"
            class="el-icon-set-up"
          />{{ item.displayName }}
        </el-button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Prop, Vue, Watch } from 'vue-property-decorator'
import { _riskProperties } from '../data.js'

export default class extends Vue {
  @Prop({ default: () => '' }) private listItems!: any;
  @Prop({ default: () => true }) private loading!: boolean;

  private items = _riskProperties // this.listItem

  handleClick(item: any) {
    console.log(item)
  }

  @Watch('listItems')
  private changeListItem() {
    console.log('hey')
  }

  get properties() {
    if (this.items) { return this.items.properties } else return { properties: { displayName: 'no data' } }
  }

  created() {
    console.log('hey')
  }
}
</script>

<style lang='scss' scoped>
.list-container {
  button {
    width: 100%;
    text-align: left;
    border: none;
    padding-left: 50px;
    &:active,
    &:focus,
    &:hover {
      color: #1f2d3d;
    }
  }
}
</style>
