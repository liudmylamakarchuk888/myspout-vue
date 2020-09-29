<template>
  <el-form v-model="value">
    <el-form-item>
      <el-select
        v-model="value"
        multiple
        multiple-limit="1"
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
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="Please input"
        @select="handleSelect"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { AppCacheModule } from '@/store/modules/appCache'
import { debug } from 'console'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'LookupDataType'
})
export default class extends Vue {
  // Lookup type.
  options= []
  value= []
  list= []
  loading= false
  states= ['Alabama', 'Alaska', 'Arizona',
    'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois',
    'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York',
    'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas',
    'Utah', 'Vermont', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin',
    'Wyoming']

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

 private async getEntititsMap() {
   return await this.getNodesList(AppCacheModule.Entities, 'children')
 }

 x_remoteMethod(query) {
   if (query !== '') {
     this.loading = true
     setTimeout(() => {
       this.loading = false
       this.options = this.list.filter(item => {
         return item.label.toLowerCase()
           .indexOf(query.toLowerCase()) > -1
       })
     }, 200)
   } else {
     this.options = []
   }
 }

 // Auto Complete.

  links= []
  state= ''
  timeout= null
  loadAll() {
    return [
      { value: 'vue', link: 'https://github.com/vuejs/vue' },
      { value: 'element', link: 'https://github.com/ElemeFE/element' },
      { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
      { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
      { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
      { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
      { value: 'babel', link: 'https://github.com/babel/babel' }
    ]
  }

  querySearchAsync(queryString, cb) {
    var links = this.links
    var results = queryString ? links.filter(this.createFilter(queryString)) : links

    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      cb(results)
    }, 1000 * Math.random())
  }

  createFilter(queryString) {
    return (link) => {
      return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
    }
  }

  handleSelect(item) {
    console.log(item)
  }

  mounted() {
    this.links = this.loadAll()
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` }
    })

    this.getEntititsMap()
  }
}
</script>
