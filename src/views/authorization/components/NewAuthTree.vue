<template>
  <div>
    <Widget customHeader>
      <b-form>
      
          <b-row class="mb-2" cols="6" >
              <b-col cols="6">
            <b-form-input class=" font-weight-bold" ref="input" @click="selectAll" value="Type Display Name Here"  ></b-form-input>
              </b-col>
          </b-row>

          <b-row class="mb-4">
               <b-col cols="6">          
              <b-form-input class="no-border" placeholder="type description here"></b-form-input>
               </b-col>              
          </b-row>

          <b-row class="no-gutters ml-4 md-center mt-6">
              <b-col  md="auto" class="mt-2"><span>System Name</span></b-col>
                <b-col cols="3"  class="ml-4"><b-form-input></b-form-input></b-col>
          </b-row>

         
         
       
         
 <b-row class="no-gutters mt-4 ml-2" >
      <b-col cols="12" md="auto" v-if="!collapsed" v-on:click="onCollapse">
        <b-icon icon="caret-down-fill" id="caret-icon" aria-hidden="true" v-b-toggle.Settings></b-icon>
      </b-col>
      <b-col cols="12" md="auto" v-if="collapsed" v-on:click="onCollapse">
        <b-icon icon="caret-right-fill" id="caret-icon" aria-hidden="true" v-b-toggle.Settings></b-icon>
      </b-col>
      <b-col col lg="11" class="ml-1">
       <span style="font-size:12px"><b>Advanced Settings</b></span>
       <hr id="AdvancHR">
     </b-col>
    </b-row>
    <b-row  class="no-gutters md-center">
      <b-collapse id="Settings"  accordion="Set-accordion" role="tabpanel">
        <b-card-body class="ml-6">
           <b-row class="no-gutters ml-4 md-center">
              <b-col  md="auto" class="mt-2"><span>System Name</span></b-col>
                <b-col cols="6"  class="ml-4"><b-form-input></b-form-input></b-col>
          </b-row>
        </b-card-body>
      </b-collapse>
    </b-row>
    <div>
      <b-row>
        <b-col md="6" offset-md="3">
       <b-button variant="outline-primary">Add</b-button>
    <span class="ml-2"> or</span><span class="ml-2">    Cancel</span>
        </b-col>
      </b-row>
    </div>
         
      </b-form>
    </Widget>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
Data(){
  return{
    
  }
},

  methods:{
    selectAll() {
  this.$refs.input.select();}
  },
   validations: {
    inputText: {
      required
    }
   }
};
</script>