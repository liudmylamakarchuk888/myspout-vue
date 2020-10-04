<template>
  <el-form v-model="lookupObject">
    <el-form-item>
      <el-select
        v-model="lookupObject.lookupEntityId"
        filterable
        remote
        reserve-keyword
        placeholder="Search Entity"
        :remote-method="searchEntities"
        :loading="loading"
        @change="onselectedEntitychanged"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.key"
          :value="item.value"
        />
      </el-select>

      <el-autocomplete
        v-model="lookupObject.lookupValueName"
        :fetch-suggestions="querySearchAsync"
        placeholder="Please input"
        :value-key="'key'"
        @select="handleSelect"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { AppCacheModule } from '@/store/modules/appCache'
import { debug } from 'console'
import { Component, Prop, Vue } from 'vue-property-decorator'

import { ApplicationPrefrence } from '@/models/ApplicationPreference'
@Component({
  name: 'LookupDataType'
})
export default class extends Vue {
  // @Prop({ required: true }) public entityid:string
  // @Prop({ required: true }) public lookupvalue:string
  // Lookup type.
  options = [];
  loading = false;
  searchEntities(query) {
    if (query !== '') {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.options = this.entitiesMap.filter((item) => {
          return item.key.toLowerCase().indexOf(query.toLowerCase()) > -1
        })
      }, 200)
    } else {
      this.options = []
    }
  }

  onselectedEntitychanged(value) {
    console.log('on select entity chagned ' + value)
    this.emitLookupChanged()
  }

  emitLookupChanged() {
    console.log('emit lookupchanged ' + JSON.stringify(this.lookupObject))
    this.$emit('lookupchanged', this.lookupObject)
  }

  entitiesMap = [];
  getNodesList(node, childrenKey) {
    if (!node) {
      return this.entitiesMap
    }

    if (node.branch === false) {
      this.entitiesMap.push({ key: node.name, value: node.id })
    }

    if (node[childrenKey].length > 0) {
      node[childrenKey].forEach((n) => {
        this.getNodesList(n, childrenKey)

        //  Object.entries(  rs).forEach((x) => {
        //      this.entitiesMap.push({ kye: x.name, value: x.id })
        //    })
      })
    }
  }

  // selectedEntity=[]
  selectedLookupValue = [];
  private async getEntititsMap() {
    return await this.getNodesList(AppCacheModule.Entities, 'children')
  }

  querySearchAsync(queryString, cb) {
    const selectedEntity = this.lookupObject.lookupEntityId
    if (!selectedEntity) {
      return
    }
    clearTimeout(this.timeout)
    this.timeout = setTimeout(async() => {
      const entityid = selectedEntity

      const results = await AppCacheModule.getEntityByQueryString(
        entityid,
        '',
        50
      )
      cb(results)
    }, 1000 * Math.random())
  }

  // Auto Complete.

  state = '';
  timeout = null;

  createFilter(queryString) {
    return (link) => {
      return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
  }

  lookupObject: {
    lookupEntityId?: string
    lookupValueName?: string
  } = {} as any;

  handleSelect(item) {
    console.log('selected value ' + item)
    this.emitLookupChanged()
  }

  mounted() {
    this.getEntititsMap()
  }
}
</script>
