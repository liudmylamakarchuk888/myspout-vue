<template>
  <el-form v-model="value">
    <el-form-item>
      <el-select
        v-model="entityId"

        filterable
        remote
        reserve-keyword
        placeholder="Search Entity"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.key"
          :value="item.value"
        />
      </el-select>

      <el-autocomplete
        v-model="lookupvalue"
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
  @Prop({ required: true }) public entityid:string
  @Prop({ required: true }) public lookupvalue:string
  // Lookup type.
  options= []
value =''
  loading= false
  remoteMethod(query) {
    if (query !== '') {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.options = this.entitiesMap.filter(item => {
          return item.key.toLowerCase()
            .indexOf(query.toLowerCase()) > -1
        })
      }, 200)
    } else {
      this.options = []
    }
  }

 entitiesMap =[];
 getNodesList(node, childrenKey) {
   if (!node) { return this.entitiesMap }

   if (node.branch === false) { this.entitiesMap.push({ key: node.name, value: node.id }) }

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
selectedLookupValue=[]
private async getEntititsMap() {
  return await this.getNodesList(AppCacheModule.Entities, 'children')
}

querySearchAsync(queryString, cb) {
  debugger
  if (!this.entityId) { return }

  const selectedEntity = this.entityId
  clearTimeout(this.timeout)
  this.timeout = setTimeout(async() => {
    const entityid = selectedEntity
    debugger
    const results = await AppCacheModule.getEntityByQueryString(entityid, '', 50)
    cb(results)
  }, 1000 * Math.random())
}

// Auto Complete.

  state= ''
  timeout= null

  createFilter(queryString) {
    return (link) => {
      return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
    }
  }

  handleSelect(item) {
    console.log(item)
  }

  mounted() {
    this.getEntititsMap()
  }
}
</script>
