webpackJsonp([4],{"+QnZ":function(e,t){},FLN2:function(e,t){},bQNA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("mvHQ"),o=a.n(r),l=a("pFYg"),s=a.n(l),n=a("P9l9"),i=a("7t+N"),u=a.n(i),c={data:function(){return{request:[{value:"GET",label:"GET"},{value:"POST",label:"POST"},{value:"PUT",label:"PUT"},{value:"DELETE",label:"DELETE"}],Http:[{value:"http",label:"HTTP"},{value:"https",label:"HTTPS"}],ParameterTyep:!0,radio:"form-data",loadingSend:!1,header:[{value:"Accept",label:"Accept"},{value:"Accept-Charset",label:"Accept-Charset"},{value:"Accept-Encoding",label:"Accept-Encoding"},{value:"Accept-Language",label:"Accept-Language"},{value:"Accept-Ranges",label:"Accept-Ranges"},{value:"Authorization",label:"Authorization"},{value:"Cache-Control",label:"Cache-Control"},{value:"Connection",label:"Connection"},{value:"Cookie",label:"Cookie"},{value:"Content-Length",label:"Content-Length"},{value:"Content-Type",label:"Content-Type"},{value:"Content-MD5",label:"Content-MD5"},{value:"Date",label:"Date"},{value:"Expect",label:"Expect"},{value:"From",label:"From"},{value:"Host",label:"Host"},{value:"If-Match",label:"If-Match"},{value:"If-Modified-Since",label:"If-Modified-Since"},{value:"If-None-Match",label:"If-None-Match"},{value:"If-Range",label:"If-Range"},{value:"If-Unmodified-Since",label:"If-Unmodified-Since"},{value:"Max-Forwards",label:"Max-Forwards"},{value:"Origin",label:"Origin"},{value:"Pragma",label:"Pragma"},{value:"Proxy-Authorization",label:"Proxy-Authorization"},{value:"Range",label:"Range"},{value:"Referer",label:"Referer"},{value:"TE",label:"TE"},{value:"Upgrade",label:"Upgrade"},{value:"User-Agent",label:"User-Agent"},{value:"Via",label:"Via"},{value:"Warning",label:"Warning"}],header4:"",radioType:"",result:!0,activeNames:["1","2","3","4","5"],id:"",Host:[],request3:!0,form:{url:"",request4:"POST",Http4:"http",addr:"",head:[],parameterRaw:"",parameter:[],parameterType:"",statusCode:"",resultData:"",resultHead:""},formRules:{url:[{required:!0,message:"请选择测试环境",trigger:"blur"}],addr:[{required:!0,message:"请输入地址",trigger:"blur"}]},requestHistory:[],listLoading:!1,headers:"",parameters:"",resultShow:!0,format:!1}},methods:{checkRequest:function(){var e=this.form.request4;this.request3="GET"!==e&&"DELETE"!==e},isJsonString:function(e){try{if("object"===s()(JSON.parse(e)))return!0}catch(e){}return!1},getApiInfo:function(){var e=this,t={project_id:e.$route.params.project_id,api_id:e.$route.params.api_id};u.a.ajax({type:"get",url:n.z+"/api/api/api_info",async:!0,data:t,headers:{Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(t){if("999999"===t.code){if(e.form.request4=t.data.requestType,e.form.Http4=t.data.httpType.toLowerCase(),e.form.addr=t.data.apiAddress,t.data.headers.length)t.data.headers.forEach(function(t){e.form.head.push(t)});else[{name:"",value:""},{name:"",value:""}].forEach(function(t){e.form.head.push(t)});if(t.data.requestParameter.length)t.data.requestParameter.forEach(function(t){e.form.parameter.push(t)});else[{name:"",value:"",required:!0,restrict:"",description:""},{name:"",value:"",required:!0,restrict:"",description:""}].forEach(function(t){e.form.parameter.push(t)});try{e.form.parameterRaw=t.data.requestParameterRaw[0].data}catch(e){}e.form.parameterType=t.data.requestParameterType,e.radio=t.data.requestParameterType,e.toggleHeadSelection(e.form.head),e.toggleParameterSelection(e.form.parameter)}else e.$message.error({message:t.msg,center:!0})}})},getHistory:function(){var e=this;this.listLoading=!0,u.a.ajax({type:"get",url:n.z+"/api/api/history_list",async:!0,data:{project_id:this.$route.params.project_id,api_id:e.$route.params.api_id},headers:{Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(t){e.listLoading=!1,"999999"===t.code?e.requestHistory=t.data:e.$message.error({message:t.msg,center:!0})}})},AddHistroy:function(e){var t=this;this.listLoading=!0;var a=o()({project_id:Number(this.$route.params.project_id),api_id:Number(t.$route.params.api_id),requestType:t.form.request4,requestAddress:t.form.Http4+"://"+t.form.url+t.form.addr,httpCode:e});console.log(a),u.a.ajax({type:"POST",url:n.z+"/api/api/add_history",async:!0,data:a,headers:{"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(e){t.listLoading=!1,"999999"===e.code?t.getHistory():t.$message.error({message:e.msg,center:!0})}})},delHistory:function(e){var t=this,a=this,r=o()({project_id:Number(a.$route.params.project_id),api_id:Number(a.$route.params.api_id),id:Number(e.id)});u.a.ajax({type:"POST",url:n.z+"/api/api/del_history",async:!0,data:r,headers:{"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(e){"999999"===e.code?(t.getHistory(),a.$message.success({message:"删除成功！",center:!0})):a.$message.error({message:e.msg,center:!0})}})},getHost:function(){var e=this;u.a.ajax({type:"get",url:n.z+"/api/global/host_total",async:!0,data:{project_id:this.$route.params.project_id,page:this.page},headers:{Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(t){"999999"===t.code?t.data.data.forEach(function(t){t.status&&e.Host.push(t)}):e.$message.error({message:t.msg,center:!0})}})},toggleHeadSelection:function(e){var t=this;e.forEach(function(e){t.$refs.multipleHeadTable.toggleRowSelection(e,!0)})},toggleParameterSelection:function(e){var t=this;e.forEach(function(e){t.$refs.multipleParameterTable.toggleRowSelection(e,!0)})},selsChangeHead:function(e){this.headers=e},selsChangeParameter:function(e){this.parameters=e},Test:function(){var e=this,t=this.form.addr;0===t.indexOf("http://")&&(this.form.addr=t.slice(7)),0===t.indexOf("https://")&&(this.form.addr=t.slice(8)),this.$refs.form.validate(function(a){if(a){e.loadingSend=!0;var r=e,l=new Object,s=new Object;r.form.statusCode="",r.form.resultData="",r.form.resultHead="",console.log(r.form.head);for(var n=0;n<r.form.head.length;n++){(m=r.form.head[n].name)&&(s[m]=r.form.head[n].value)}console.log(s);var i=r.form.Http4+"://"+r.form.url+t,c=r.radio;if("form-data"===c)if(r.radioType){for(var d=0;d<r.parameters.length;d++){var m;(m=r.parameters[d].name)&&(l[m]=r.parameters[d].value)}l=o()(l)}else l=r.form.parameter;else l=r.form.parameterRaw;r.form.parameterRaw&&"raw"===c?r.isJsonString(r.form.parameterRaw)?u.a.ajax({type:r.form.request4,url:i,async:!0,data:l,headers:s,timeout:5e3,success:function(e,t,a){r.loadingSend=!1,r.form.statusCode=a.status,r.form.resultData=e,r.form.resultHead=a.getAllResponseHeaders(),r.AddHistroy(a.status)},error:function(e,t,a){r.loadingSend=!1,r.form.statusCode=e.status,r.form.resultData=e.responseJSON,r.form.resultHead=e.getAllResponseHeaders()}}):r.$message({message:"源数据格式错误",center:!0,type:"error"}):u.a.ajax({type:r.form.request4,url:i,async:!0,data:l,headers:s,timeout:5e3,success:function(e,t,a){r.loadingSend=!1,r.form.statusCode=a.status,r.form.resultData=e,r.form.resultHead=a.getAllResponseHeaders(),r.AddHistroy(a.status)},error:function(e,t,a){r.loadingSend=!1,r.form.statusCode=e.status,r.form.resultData=e.responseJSON,r.form.resultHead=e.getAllResponseHeaders()}})}})},neatenFormat:function(){var e=document.getElementsByTagName("pre")[0];console.log(e),hljs.highlightBlock(e),this.format=!this.format},addHead:function(){this.form.head.push({name:"",value:""});var e=[this.form.head[this.form.head.length-1]];this.toggleHeadSelection(e)},delHead:function(e){1!==this.form.head.length&&this.form.head.splice(e,1)},addParameter:function(){this.form.parameter.push({name:"",value:"",required:"True",restrict:"",description:""});var e=[this.form.parameter[this.form.parameter.length-1]];this.toggleParameterSelection(e)},delParameter:function(e){1!==this.form.parameter.length&&this.form.parameter.splice(e,1)},addResponse:function(){this.form.response.push({name:"",value:"",required:"True",restrict:"",description:""})},delResponse:function(e){1!==this.form.response.length&&this.form.response.splice(e,1)},changeParameterType:function(){"form-data"===this.radio?this.ParameterTyep=!0:this.ParameterTyep=!1},showBody:function(){this.resultShow=!0},showHeader:function(){this.resultShow=!1},handleChange:function(e){},onSubmit:function(){console.log("submit!")}},watch:{radio:function(){this.changeParameterType()}},mounted:function(){this.getApiInfo(),this.getHost(),this.getHistory()}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules}},[a("el-col",{staticClass:"HOST",attrs:{span:3}},[a("el-form-item",{attrs:{prop:"url"}},[a("el-select",{attrs:{placeholder:"测试环境"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}},e._l(e.Host,function(e,t){return a("el-option",{key:t+"",attrs:{label:e.name,value:e.host}})}),1)],1)],1),e._v(" "),a("div",{staticStyle:{border:"1px solid #e6e6e6","margin-bottom":"10px",padding:"15px","padding-bottom":"0px"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:3}},[a("el-form-item",[a("el-select",{attrs:{placeholder:"请求方式"},on:{change:e.checkRequest},model:{value:e.form.request4,callback:function(t){e.$set(e.form,"request4",t)},expression:"form.request4"}},e._l(e.request,function(e,t){return a("el-option",{key:t+"",attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-form-item",[a("el-select",{attrs:{placeholder:"HTTP协议"},model:{value:e.form.Http4,callback:function(t){e.$set(e.form,"Http4",t)},expression:"form.Http4"}},e._l(e.Http,function(e,t){return a("el-option",{key:t+"",attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{prop:"addr"}},[a("el-input",{attrs:{placeholder:"地址","auto-complete":""},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr","string"==typeof t?t.trim():t)},expression:"form.addr"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary",loading:e.loadingSend},on:{click:e.Test}},[e._v("发送")])],1)],1)],1),e._v(" "),a("el-row",{attrs:{span:24}},[a("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"请求头部",name:"1"}},[a("el-table",{ref:"multipleHeadTable",attrs:{data:e.form.head,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection","min-width":"5%",label:"头部"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"标签","min-width":"20%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"head标签",filterable:""},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name",a)},expression:"scope.row.name"}},e._l(e.header,function(e,t){return a("el-option",{key:t+"",attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-input",{staticClass:"selectInput",attrs:{value:t.row.name,placeholder:"请输入内容"},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name","string"==typeof a?a.trim():a)},expression:"scope.row.name"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"value",label:"内容","min-width":"40%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{value:t.row.value,placeholder:"请输入内容"},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value","string"==typeof a?a.trim():a)},expression:"scope.row.value"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"7%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-delete",staticStyle:{"font-size":"30px",cursor:"pointer"},on:{click:function(a){return e.delHead(t.$index)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index===e.form.head.length-1?a("el-button",{staticClass:"el-icon-plus",attrs:{size:"mini"},on:{click:e.addHead}}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"18%"}})],1)],1),e._v(" "),a("el-collapse-item",{attrs:{title:"请求参数",name:"2"}},[a("div",{staticStyle:{margin:"5px"}},[a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"form-data"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("表单(form-data)")])],1),e._v(" "),e.request3?a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"raw"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("源数据(raw)")])],1):e._e(),e._v(" "),e.request3?a("el-col",{attrs:{span:16}},[a("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.ParameterTyep,expression:"ParameterTyep"}],attrs:{label:"3"},model:{value:e.radioType,callback:function(t){e.radioType=t},expression:"radioType"}},[e._v("表单转源数据")])],1):e._e()],1)],1),e._v(" "),a("el-table",{ref:"multipleParameterTable",class:e.ParameterTyep?"parameter-a":"parameter-b",attrs:{data:e.form.parameter,"highlight-current-row":""},on:{"selection-change":e.selsChangeParameter}},[a("el-table-column",{attrs:{type:"selection","min-width":"5%",label:"头部"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"参数名","min-width":"20%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{value:t.row.name,placeholder:"请输入参数值"},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name","string"==typeof a?a.trim():a)},expression:"scope.row.name"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"value",label:"参数值","min-width":"40%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{value:t.row.value,placeholder:"请输入参数值"},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value","string"==typeof a?a.trim():a)},expression:"scope.row.value"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"7%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-delete",staticStyle:{"font-size":"30px",cursor:"pointer"},on:{click:function(a){return e.delParameter(t.$index)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index===e.form.parameter.length-1?a("el-button",{staticClass:"el-icon-plus",attrs:{size:"mini"},on:{click:e.addParameter}}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"","min-width":"18%"}})],1),e._v(" "),[a("el-input",{class:e.ParameterTyep?"parameter-b":"parameter-a",attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:e.form.parameterRaw,callback:function(t){e.$set(e.form,"parameterRaw","string"==typeof t?t.trim():t)},expression:"form.parameterRaw"}})]],2),e._v(" "),a("el-collapse-item",{attrs:{title:"响应结果",name:"4"}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{on:{click:e.showBody}},[e._v("Body")]),e._v(" "),a("el-button",{on:{click:e.showHeader}},[e._v("Head")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.neatenFormat}},[e._v("格式转换")])],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"},model:{value:e.form.statusCode,callback:function(t){e.$set(e.form,"statusCode",t)},expression:"form.statusCode"}},[e._v(e._s(e.form.statusCode))])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.format,expression:"!format"}],class:e.resultShow?"parameter-a":"parameter-b",model:{value:e.form.resultData,callback:function(t){e.$set(e.form,"resultData",t)},expression:"form.resultData"}},[a("div",{staticStyle:{"word-break":"break-all",overflow:"auto","overflow-x":"hidden"}},[e._v("\n                                "+e._s(e.form.resultData)+"\n                            ")])]),e._v(" "),a("div",{class:e.resultShow?"parameter-b":"parameter-a",model:{value:e.form.resultHead,callback:function(t){e.$set(e.form,"resultHead",t)},expression:"form.resultHead"}},[e._v(e._s(e.form.resultHead))]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.format,expression:"format"}],class:e.resultShow?"parameter-a":"parameter-b"},[a("pre",{staticStyle:{border:"1px solid #e6e6e6","word-break":"break-all",height:"300px",overflow:"auto","overflow-x":"hidden"}},[e._v("                            "+e._s(e.form.resultData)+"\n                        ")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.form.resultData&&!e.form.resultHead,expression:"!form.resultData&&!form.resultHead"}],staticClass:"raw"},[e._v("暂无数据")])])],1),e._v(" "),a("el-collapse-item",{attrs:{title:"请求历史",name:"5"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.requestHistory,stripe:""}},[a("el-table-column",{attrs:{prop:"requestTime",label:"操作时间","min-width":"20%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"requestType",label:"请求方式","min-width":"10%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"requestAddress",label:"请求地址","min-width":"49%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"httpCode",label:"HTTP状态","min-width":"11%"}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"10%",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-delete",staticStyle:{"font-size":"30px",cursor:"pointer"},on:{click:function(a){return e.delHistory(t.row)}}})]}}])})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(c,d,!1,function(e){a("+QnZ"),a("FLN2")},"data-v-c29e8f56",null);t.default=m.exports}});
//# sourceMappingURL=4.f97f41993d35c2c88f9e.js.map