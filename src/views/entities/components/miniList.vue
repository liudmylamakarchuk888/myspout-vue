<template>
  <div class="list-container">
    <div
      v-if="loading"
      class="text-center"
    >
      loading...
    </div>
    <div v-else>
      <div v-if="Object.keys(items).length">
        <div
          v-for="(item, index) in items.properties"
          :key="index"
        >
          <el-button @click="handleClick(item)">
            <i
              style="padding-right: 10px"
              class="el-icon-set-up"
            />{{
              item.displayName
            }}
          </el-button>
        </div>
      </div>
      <div
        v-else
        class="text-center"
      >
        No data
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import axios from 'axios'

@Component({
  name: 'MiniTree',
  components: {}
})
export default class extends Vue {
  @Prop({ default: () => '' }) private entityId!: {};

  private items = {}; // this.listItem
  private loading = false;

  @Watch('entityId')
  private handleChange(val: string) {
    // this.items = []
    this.fetchListItem()
  }

  async fetchListItem() {
    this.loading = true
    const apiUrl =
      'http://52.152.148.181:3000/api/getEntity/com.msp.dao.entities.Risk'
    try {
      const res = await axios.get(apiUrl)
      if (this.entityId.id === 'com.msp.dao.entities.Risk') {
        this.items = res.data
      } else {
        this.items = {}
      }
      this.loading = false
    } catch (e) {
      console.log(e)
      this.loading = false
    }
  }

  handleClick(item: any) {
    console.log(item)
  }

  mounted() {
    console.log(this.$store)
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
  .text-center {
    padding: 20px;
    text-align: center;
  }
}
</style>
