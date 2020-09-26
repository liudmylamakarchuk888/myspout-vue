<template>
  <div>
    <el-form
      v-for="l in languages"
      :key="l.key"
      label-position="Top"
      :model="translation"
    >
      <span>{{ l.key }}</span>
      <el-divider />
      <el-form-item label="display Name">
        <el-input v-model="l.displayName" />
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="l.description" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import { AppDataModule } from '@/store/modules/appData'
import { LanguageTranslation } from '@/models/LanguageTranslation'
@Component({
  name: 'LangInput'
})
export default class extends Vue {
 translation:LanguageTranslation={};

 get languages() {
   return AppDataModule.FlexApplicationPreferences.languages
 }

 get language_x() {
   return AppModule.language
 }

 private handleSetLanguage(lang: string) {
   this.$i18n.locale = lang
   AppModule.SetLanguage(lang)
   this.$message({
     message: 'Switch Language Success',
     type: 'success'
   })
 }
}
</script>
