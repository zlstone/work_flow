// Generated by CoffeeScript 1.7.1
(function(){(function(e){return window.$&&window.jQuery?$.getScript("./dom.jsPlumb-1.6.2.js",function(){return e.init()}):alert("抱歉！无依赖jquery对象存在！")})({DATA:null,xmlDoc:null,selected:{length:0},config:{type:"ajax",url:"test.php",default_XML:'<?xml version="1.0" encoding="UTF-8"?><workflow name="engine_score_show_click" version="1"><node id="1" type="Start"></node><node id="2" type="End"/><variableHandler variable="params" class="VariableHandler"/></workflow>',default_ajax:{name:"new workflow",version:"1",nodes:{1:{id:"1",type:"Start",out:["3"]},2:{id:"2",type:"End"},3:{id:"3",type:"Action",string:"unknow",out:["4"]},4:{id:"4",type:"Action",string:"unknow",out:["5"]},5:{id:"5",type:"Action",string:"unknow",out:["2"]},length:5}},display:"workflow",debug:!1,submitUrl:"",submitBefore:function(){return!0},relationUrl:"",distance:120,radius:100,activityId:1,parent:"#jsPlumb_demo",listConfig:{},disabled:!1},storage:{container:"#jsPlumb_demo_ctn",list:null,isAdd:!1,isEdit:!1,id:3,target:null},util:{sin:function(){return parseInt(Math.sin(arguments[0]*Math.PI/180)*1e3)/1e3},cos:function(){return parseInt(Math.cos(arguments[0]*Math.PI/180)*1e3)/1e3},position:function(e){var t;if(e>90){t=180-e;return{x:Math.round(-this.radius*this.cos(t)),y:Math.round(this.radius*this.sin(t)),skew:90-t,angle:e,direction:-1}}return e===90?{x:0,y:this.radius,skew:0,angle:90,direction:0}:{x:Math.round(this.radius*this.cos(e)),y:Math.round(this.radius*this.sin(e)),skew:90-e,angle:e,direction:1}},positions:function(e){var t,n,r;n=180/(e+1);t=[];r=this.radius;this.radius=r+r*(1-1/e);for(var i=0;i<e;i++)t.push(this.position(n+n*i));this.radius=r;return t}},init:function(){window.jsPlumb_Z_config&&$.extend(this.config,window.jsPlumb_Z_config);this.config.debug&&(window.jsPlumb_Z=this);$("#jsPlumb_demo").html("");if(this.config.display==="workflow")return this.initWorkFlow();if(this.config.display==="rely")return this.initRelation()},initWorkFlow:function(){this.initDom().initCss().initEvent();this.config.disabled?$("#jsPlumb_disabled").trigger("click"):$("#jsPlumb_edit").trigger("click");if(this.config.type==="XML"){this.render(this.DATA=this.translate(this.getXMLDom()));return jsPlumb.ready(function(e){return function(){return e.configJsPlumb().initJsPlumb()}}(this))}if(this.config.type==="ajax")return this.getAjax(function(){this.render(this.DATA=arguments[0]);return jsPlumb.ready(function(e){return function(){return e.configJsPlumb().initJsPlumb()}}(this))})},initRelation:function(){var e;this.initRelationDom().initCss().util.radius=this.config.radius;e=this;$("#jsPlumb_demo_ctn")[0].oncontextmenu=function(){return!1};$("#jsPlumb_demo").on("click",function(){return e.storage.list.hide()});$("body").on("mouseup",".w",function(t){var n;if(t.button===2){e.storage.target=$(this);n={};$.extend(n,e.DATA.nodes[this.id].urls||{});return e.renderMenu(n,{type:this.dataset.type}).css({left:t.pageX,top:t.pageY}).show()}});return this.getAjax(function(){this.renderRelation(this.DATA=arguments[0]);return jsPlumb.ready(function(e){return function(){return e.initJsPlumbRely()}}(this))})},initDom:function(){var e;e=this;$('<div id="jsPlumb_demo_buttons" style="position:absolute;top: 0;left:0; z-index:100"><button class="jsPlumb_btn" id="jsPlumb_add"><span class="icon"><span class="icon-plus"></span></span>添加</button><button class="jsPlumb_btn" id="jsPlumb_line"><span class="icon"><span class="icon-minus"></span></span>连线</button><button class="jsPlumb_btn" id="jsPlumb_translate"><span class="icon"><span class="icon-upload"></span></span>提交数据</button></div><div id="jsPlumb_demo_ctn"></div>').appendTo("#jsPlumb_demo");this.storage.list=$('<ul id="jsPlumb_list" class="list-group"></ul>').appendTo("body").on("click","a",function(){return e.listEvent(this)});return this},initRelationDom:function(){$('<div id="jsPlumb_demo_ctn"></div>').appendTo("#jsPlumb_demo");this.storage.list=$('<ul id="jsPlumb_list" class="list-group"></ul>').appendTo("body");return this},initCss:function(){var e,t;e="#jsPlumb_demo * { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}#jsPlumb_demo { width:100%; -webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;outline:0; posi ; }#jsPlumb_demo_ctn{ position:relative; width:100%; outline:0;}.demo-move .w{cursor:move;}.w { cursor:default; border:3px solid #ccc; -moz-border-radius:1em;border-radius:1em;text-align:center;z-index:20; position:absolute;background-color:#eeeeef;color:black;font-family:helvetica;padding:0 10px;font-size:1em; line-height:3em;}.w.active { border-color:green;}.w > input{ width:80%; border:0; outline:0; background:none; -webkit-box-shadow:none!important;box-shadow:none!important;}.aLabel {-webkit-transition:background-color 0.25s ease-in;-moz-transition:background-color 0.25s ease-in;transition:background-color 0.25s ease-in;}.aLabel._jsPlumb_hover, ._jsPlumb_source_hover, ._jsPlumb_target_hover {background-color:#1e8151;color:white;}.aLabel {background-color:white; padding:1px 1em; font:12px sans-serif; color:#444;z-index:21;border:1px dotted gray;opacity:0.8;filter:alpha(opacity=80);cursor: pointer;}.statemachine-demo ._jsPlumb_endpoint {z-index:3;}.dragHover { border:2px solid orange; }.jsPlumb_btn{display: inline-block;margin-bottom: 0;font-weight: normal;text-align: center;vertical-align: middle;cursor: pointer;padding: 0 10px 0 10px;font-size: 14px;line-height: 30px;border: none;outline: none;background-color: #3498db;color: #fff;-webkit-transition: .25s;transition: .25s;}#jsPlumb_demo button.active,#jsPlumb_demo button.active:hover{background-color: #ccc;box-shadow: inset 1px 1px 5px #333;}#jsPlumb_demo button:hover{background-color: #2980b9;}path { cursor:pointer;}div[data-type=Start]{background:#3366FF; color:#fff;-moz-border-radius:50%;border-radius:50%;border:0}div[data-type=End]{ background:#FF3300;color:#fff;-moz-border-radius:50%;border-radius:50%; border:0}.jsPlumb_box{border:1px solid #ccc; position:absolute;}.list-group {position:absolute;padding-left: 0;margin-bottom: 20px;display:none;z-index : 101;}.list-group li {position: relative;display: block;margin-bottom: -1px;background-color: #fff;border: 1px solid #ddd; min-width:100px;}.list-group>li:first-child {border-top-left-radius: 4px;border-top-right-radius: 4px;}.list-group>li:last-child {margin-bottom: 0;border-bottom-right-radius: 4px;border-bottom-left-radius: 4px;}.list-group li a{display:block;padding: 5px 10px;font-size:12px;line-height:20px;text-decoration:none;color:#555;}.list-group li a:hover,.list-group li.active a{background:#3498db;color: #fff;}.list-group>li{ position:relative;}.list-group>li>b{float:right;line-height: 32px;margin-right: 5px;color: #555;}.list-group>li>ul{ display:none; position:absolute; min-width:100%; left:100%; top:0; z-index:101; padding:0; margin:0;}.list-group>li:hover>ul{ display:block;}.list-group>li>ul>li{ min-width:100px;}#jsPlumb_demo_buttons .jsPlumb_btn{padding: 0 10px 0 30px!important;}#jsPlumb_demo .icon {line-height: 100%;position: relative;display: block;float: left;margin-left:-18px;margin-top:6px;}.icon .icon-plus {top: 1px;left: 0;border-width: 0 4px 4px 0;}.icon .icon-plus,.icon .icon-plus:after {position: absolute;width: 9px;height: 9px;border-style: solid;border-color: #fff;box-sizing: border-box;}.icon .icon-plus:after {content: '';top: 5px;left: 5px;border-width: 4px 0 0 4px;}.icon .icon-minus {position: absolute;top: 6px;left: 0;width: 14px;height: 4px;background-color: #fff;}.icon-download, .icon-upload {position: absolute;left: 4px;top: 4px;width: 4px;height: 10px;background-color: #fff;}.icon-download:before, .icon-upload:before {content: '';position: absolute;left: -4px;width: 0;height: 0;border-width: 6px;border-style: solid;}.icon-upload:before {top: -9px;border-color: transparent transparent #fff transparent;}.icon-download:after, .icon-upload:after {content: '';position: absolute;left: -7px;width: 13px;height: 3px;border-width: 0 3px 2px 3px;border-style: solid;border-color: #fff;}.icon-upload:after {top: 9px;}";t=document.createElement("style");t.type="text/css";t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));document.getElementsByTagName("head")[0].appendChild(t);return this},initEvent:function(){var e;e=this;$("#jsPlumb_demo_ctn")[0].oncontextmenu=function(){return!1};$("#jsPlumb_add").on("click",function(){$("#jsPlumb_line").hasClass("active")&&$("#jsPlumb_line").trigger("click");if(e.storage.isAdd){e.storage.isAdd=!1;return $(this).removeClass("active")}e.storage.isAdd=!0;return $(this).addClass("active")});$("#jsPlumb_line").on("click",function(){$("#jsPlumb_add").hasClass("active")&&$("#jsPlumb_add").trigger("click");if($(this).hasClass("active")){$(this).removeClass("active");jsPlumb.draggable($("#jsPlumb_demo_ctn .w"));jsPlumb.unmakeEverySource($("#jsPlumb_demo_ctn .w"))}else{$(this).addClass("active");jsPlumb.destroyEveryDraggable($("#jsPlumb_demo_ctn .w"));jsPlumb.makeSource($("#jsPlumb_demo_ctn .w").not("#2"),{anchor:"Continuous",connector:["StateMachine"],isTarget:!0,maxConnections:5,uniqueEndpoint:!0})}return!1});$("#jsPlumb_translate").on("click",function(){var t;t={};(function(e){var n,r,i,s,o,u,a,f,l,c;o={id:e,type:$("#"+e).attr("data-type"),string:$("#"+e).html(),out:[]};f=jsPlumb.getConnections({source:e});for(i=0,u=f.length;i<u;i++){r=f[i];o.out.push(r.targetId)}t[o.id]=o;if(o.out){l=o.out;c=[];for(s=0,a=l.length;s<a;s++){n=l[s];c.push(arguments.callee(n))}return c}}).call(this,"1");t[1]&&delete t[1].string;if(t[2]){delete t[2].string;delete t[2].out}return e.ajax({name:$("#Workflow_workflow_name").val(),nodes:t})});$("#jsPlumb_demo_ctn").on("mousedown",function(t){if(e.storage.list.is(":visible")){e.storage.list.hide();return e.storage.target=this}e.selected={length:0};$("#jsPlumb_demo .w").removeClass("active");return e.mousedown(t)});$("#jsPlumb_demo_ctn").on("dblclick",".w",function(){if(!e.storage.isEdit){$("#jsPlumb_add").hasClass("active")&&$("#jsPlumb_add").trigger("click");$("#jsPlumb_line").hasClass("active")&&$("#jsPlumb_line").trigger("click");e.storage.isEdit=!0;e.storage.target=$(this);$(this).html('<input type="text" value="'+this.innerHTML+'">').children().focus()[0].selectionStart=99}return!1});$("#jsPlumb_demo_ctn").on("blur",".w input",function(){var t,n;e.storage.isEdit=!1;t=$(this).parent();n=this.value;t.html(n);return e.DATA.nodes[t[0].id].string=n});$("body").on("mouseup",".w",function(t){var n;if(t.button===2&&+this.id>2){e.storage.target=$(this);n={};$.extend(n,e.DATA.nodes[this.id].urls||{},e.config.listConfig);return e.renderMenu(n,{type:this.dataset.type||"Action"}).css({left:t.pageX,top:t.pageY}).show()}});$("#jsPlumb_demo").attr("tabindex",1).on("keydown",function(e){return function(t){var n,r;if(!e.storage.isEdit){r={76:function(){return $("#jsPlumb_line").trigger("click")},65:function(){return $("#jsPlumb_add").trigger("click")},27:function(){$("#jsPlumb_add").hasClass("active")&&$("#jsPlumb_add").trigger("click");$("#jsPlumb_line").hasClass("active")&&$("#jsPlumb_line").trigger("click");if(e.selected.length){e.selected={length:0};return $("#jsPlumb_demo .w").removeClass("active")}},8:function(){var t,r,i,s,o,u,a,f,l,c,h,p,d,v;if(e.selected.length){t=[];i=e.storage.id;h=e.selected;for(r in h){u=h[r];if(r!=="length"){u.id<i&&(i=u.id);t.push(u.innerHTML+"#"+u.id)}}if(confirm("确认删除"+t.join("，")+"么？")){e.storage.id=i;p=e.selected;for(r in p){u=p[r];if(r!=="length"){n=u.id;d=jsPlumb.getConnections({source:n});for(a=0,l=d.length;a<l;a++){s=d[a];jsPlumb.detach(s)}v=jsPlumb.getConnections({target:n});for(f=0,c=v.length;f<c;f++){o=v[f];jsPlumb.detach(o)}jsPlumb.removeElement(u);delete e.DATA.nodes[n]}}}}return!1},46:function(){return this[8]()}};return r[t.keyCode]&&r[t.keyCode]()}if(t.keyCode===13)return e.storage.target.find("input").blur();if(t.keyCode===27){n=e.storage.target[0].id;e.storage.target.html(e.DATA.nodes[n]?e.DATA.nodes[n].string:"");return e.storage.isEdit=!1}}}(this));return this},listEvent:function(e){e=$(e);if(e.parent().hasClass("jsPlumb_types")){this.DATA.nodes[this.storage.target[0].id].type=e.html();this.storage.target.attr("data-type",e.html());return this.storage.list.hide()}},newWork:function(e){var t;t=this.storage.id;while(document.getElementById(t))t++;if(e.outerWidth()<80)return e.remove();e.attr({"class":"w jsplumb-draggable jsplumb-droppable",id:t,"data-type":"Action"}).css("height",52);$("#jsPlumb_line").hasClass("active")&&$("#jsPlumb_line").trigger("click");jsPlumb.draggable(e);jsPlumb.makeTarget(e,{dropOptions:{hoverClass:"dragHover"},anchor:"Continuous"});return this.DATA.nodes[t]={id:t,string:"",type:"Action"}},mousedown:function(e){var t,n,r,i,s;i=$("#jsPlumb_demo_ctn").offset().left;s=$("#jsPlumb_demo_ctn").offset().top;t=e.pageX-i;n=e.pageY-s;r=$('<div class="jsPlumb_box" style="left: '+t+"px;top:"+n+'px;"></div>').appendTo("#jsPlumb_demo_ctn");$(document).on("mousemove",function(e){var o,u;o=e.pageX-i;u=e.pageY-s;o>t?r.css("width",o-t):r.css({width:t-o,left:o});return u>n?r.css("height",u-n):r.css({height:n-u,top:u})});return $(document).on("mouseup",function(e){return function(o){var u,a,f;u=o.pageX-i;a=o.pageY-s;$(document).off("mousemove").off("mouseup");if(e.storage.isAdd)return e.newWork(r);r.remove();if(Math.abs(t-u)>30&&Math.abs(n-a)>30){f=[];if(u>t){f[0]=t;f[2]=u}else{f[0]=u;f[2]=t}if(a>n){f[1]=n;f[3]=a}else{f[1]=a;f[3]=n}return e.filterSelected.apply(e,f)}}}(this))},filterSelected:function(e,t,n,r){var i;i=this;return $("#jsPlumb_demo .w").each(function(){var s,o,u,a,f;if((a=this.id)==="1"||a==="2")return!0;s=$(this).offset();o=s.top-$("#jsPlumb_demo_ctn").offset().top;f=o+$(this).outerHeight();s=s.left-$("#jsPlumb_demo_ctn").offset().left;u=s+$(this).outerWidth();if(f>t&&o<r&&u>e&&s<n){$(this).addClass("active");i.selected[this.id]=this;i.selected.length=i.selected.length+1}return!0})},getXMLDom:function(){var e;e=new window.XMLHttpRequest;e.open("GET","BMP.xml",!1);e.send(null);if(e.readyState===4)return this.xmlDoc=e.responseXML.documentElement},getAjax:function(e){return this.config.url?$.getJSON(this.config.url,null,function(t){return function(n){return e&&e.call(t,n)}}(this)):e.call(this,this.config.default_ajax)},ajax:function(e){var t;t=this;if(!this.config.submitUrl){console.log(e);console.log(JSON.stringify(e));return alert("未设置数据发送地址！请查看console校验数据！")}if(confirm("数据将提交给后台，确认继续，取消将中断该操作")&&t.config.submitBefore&&t.config.submitBefore(e))return $.post(this.config.submitUrl,{data:JSON.stringify(e)},function(n){if(+n){alert("数据提交成功！");return t.config.submitAfter&&t.config.submitAfter(e)}return alert(n)})},translate:function(e){var t,n;n={};n.name=$(e).attr("name");n.version=$(e).attr("version");n.nodes={};t=$(e).find("node").each(function(e){var t,r,i,s;s={id:this.id,type:$(this).attr("type")};(i=$(this).find("string")).length&&(s.string=i.text());if((t=$(this).find("outNode")).length){r=[];t.each(function(){return r.push(this.id)});s.out=r}n.nodes[s.id]=s;n.nodes.length=e+1;return!0});return n},renderMenu:function(e,t){var n,r,i,s,o,u;if(e){r="";for(n in e){i=e[n];if(toString.call(i)==="[object String]")r+='<li><a href="'+i+'">'+n+"</a></li>";else{r+='<li><b>&raquo;</b><a href="javascript:;">'+n+"</a>";r+="<ul>";for(s=0,o=i.length;s<o;s++){u=i[s];r+='<li class="jsPlumb_types'+(t.type===u?" active":"")+'"><a href="javascript:;">'+u+"</a></li>"}r+="</ul></li>"}}return this.storage.list.html(r)}return this.storage.list},render:function(){var e,t,n,r;t=this.config.distance;r={};n=0;e=arguments[0].nodes;(function(e,i,s){var o,u,a,f,l,c,h,p,d,v,m,g,y,b;c=e[i];if(i in r){r[i].indexOf(s.p)===-1&&r[i].push(s.p);b=$("#"+c.id);a=0;o=[];m=r[i];for(h=0,d=m.length;h<d;h++){l=m[h];y=$("#"+l).position().top;a=y>a?y:a}l=$("#"+r[i][0]);o=Math.round(l.position().left+l.width()/2+Math.floor(r[i].length/2)*t-$("#"+c.id).width()/2);a=Math.round(a+t)}else{r[i]=s?[s.p]:1;b=$('<div class="w jsplumb-draggable jsplumb-droppable" id="'+c.id+'" data-type="'+c.type+'">'+(c.string||c.type)+"</div>").appendTo("#jsPlumb_demo_ctn");a=s?Math.round(s.t):0;o=s?Math.round(s.l-b.width()/2):Math.round(($("#jsPlumb_demo").width()-b.width())/2)}b.css({top:a,left:o});a>n&&(n=a);if(c.out){f=c.out.length/2;s={l:o+b.width()/2-Math.floor(f)*t,t:a+t,p:c.id};if(c.out.length){g=c.out;for(p=0,v=g.length;p<v;p++){u=g[p];arguments.callee(e,u,{l:s.l+p*t+(c.out.length%2===0&&p>=f?t:0),t:s.t,p:s.p})}}else c.type==="Start"&&arguments.callee(e,2,s)}return!0}).call(this,e,1);$("#jsPlumb_demo_ctn").height($("#2").position().top+60);return this},filterRelationData:function(e){var t,n,r,i,s,o,u;e=JSON.parse(e);r="";for(t in e){i=e[t];r+='<div class="w jsplumb-draggable jsplumb-droppable" id="'+i.id+'" data-type="'+i.type+'">'+i.string+"</div>";if(i.out){u=i.out;for(s=0,o=u.length;s<o;s++){n=u[s];n=e[n];if(!n["in"]){n["in"]=[];n._in={}}n["in"].push(i.id);n._in[i.id]=1}}}$("#jsPlumb_demo_ctn").html(r);return e},renderRelation:function(e){var t,n,r,i,s,o;i=this.filterRelationData(JSON.stringify(e.nodes));o={};t=$("#jsPlumb_demo").width()/2;r=0;s=this.config.radius;n={x:0,y:0,z:0};o={};(function(e,t){var r,s,u,a,f,l,c,h,p,d,v;u=i[e];p=$("#"+u.id);if(!o[e]){if(t.direction){r=p.outerWidth();a={left:t.x-(t.direction>0?r:0),top:t.y-p.outerHeight()};t.x=a.left+r/2}else a={left:t.x-p.outerWidth()/2,top:t.y-p.outerHeight()};$.extend(a,u.style);u.type!=="Action"&&(a["border-radius"]=0);p.css(a);n.x>a.left&&(n.x=a.left);n.y>a.top&&(n.y=a.top);o[e]=1}if(u["in"]){if(u.out){d=u["in"];for(s=l=0,h=d.length;l<h;s=++l){c=d[s];c===u.out[0]&&u["in"].splice(s,1)}}f=this.util.positions(u["in"].length);s=0;v=[];while(c=u["in"].shift()){arguments.callee.call(this,c,{x:Math.round(t.x-f[s].x),y:Math.round(t.y-f[s].y),skew:f[s].skew,angle:f[s].angle,direction:f[s].direction});v.push(s++)}return v}}).call(this,this.config.activityId,{x:t,y:r,skew:0,direction:0});(function(e,t){var r,s,u,a,f,l,c,h,p,d,v;u=i[e];h=$("#"+u.id);if(!o[e]){if(t.direction){r=h.outerWidth();a={left:t.x-(t.direction<0?r:0),top:t.y};t.x=a.left+r/2}else a={left:t.x-h.outerWidth()/2,top:t.y};$.extend(a,u.style);u.type!=="Action"&&(a["border-radius"]=0);h.css(a);n.x>t.x&&(n.x=t.x);n.z<t.y&&(n.z=t.y);o[e]=1}if(u.out){if(u.type!=="Action"){d=u.out;for(s=l=0,c=d.length;l<c;s=++l){p=d[s];p in u._in&&u.out.splice(s,1)}}f=this.util.positions(u.out.length).reverse();s=0;v=[];while(p=u.out.shift()){arguments.callee.call(this,p,{x:t.x+f[s].x,y:t.y+f[s].y,skew:f[s].skew,angle:f[s].angle,direction:f[s].direction});v.push(s++)}return v}}).call(this,this.config.activityId,{x:t,y:r,skew:0,direction:0});return $("#jsPlumb_demo_ctn").css({top:Math.abs(n.y),left:Math.abs(n.x)}).parent().css({height:Math.abs(n.y)+n.z+60})},configJsPlumb:function(){jsPlumb.importDefaults({anchor:"Continuous",connector:["StateMachine"],PaintStyle:{strokeStyle:"#5c96bc",lineWidth:2,outlineColor:"transparent",outlineWidth:4},HoverPaintStyle:{strokeStyle:"#1e8151",lineWidth:2},ConnectionOverlays:[["Arrow",{location:1,id:"arrow",width:14,length:10,foldback:.8}],["Label",{label:"FOO",id:"label",cssClass:"aLabel"}]],Endpoint:["Dot",{radius:2}],Container:"jsPlumb_demo_ctn"});return this},initJsPlumb:function(){var e,t,n,r,i;jsPlumb.draggable($("#jsPlumb_demo_ctn .w"));jsPlumb.bind("connection",function(e){return e.connection.getOverlay("label").setLabel(e.target.id)});jsPlumb.bind("click",function(e,t){if(confirm("确认删除链接 从 "+e.sourceId+" 到 "+e.targetId+"?"))return jsPlumb.detach(e)});jsPlumb.bind("connectionDrag",function(e){var t,n,r,i,s;i=jsPlumb.getConnections({source:e.sourceId});s=[];for(n=0,r=i.length;n<r;n++){t=i[n];s.push(jsPlumb.unmakeTarget($("#"+t.targetId)))}return s});jsPlumb.bind("connectionDragStop",function(e){var t,n,r,i,s;i=jsPlumb.getConnections({source:e.sourceId});s=[];for(n=0,r=i.length;n<r;n++){t=i[n];s.push(jsPlumb.makeTarget($("#"+t.targetId)))}return s});jsPlumb.makeTarget($("#jsPlumb_demo_ctn .w").not("#1"),{dropOptions:{hoverClass:"dragHover"},anchor:"Continuous"});t=this.DATA.nodes;i=[];for(e in t){r=t[e];r.out?i.push(function(){var e,t,i,s;i=r.out;s=[];for(e=0,t=i.length;e<t;e++){n=i[e];s.push(jsPlumb.connect({source:r.id,target:n},{anchor:"Continuous",connector:["StateMachine"]}))}return s}()):i.push(void 0)}return i},initJsPlumbRely:function(){var e,t,n,r,i,s;e=jsPlumb.getInstance({anchor:"Continuous",connector:["StateMachine"],PaintStyle:{strokeStyle:"#5c96bc",lineWidth:2,outlineColor:"transparent",outlineWidth:4},HoverPaintStyle:{strokeStyle:"#1e8151",lineWidth:2},ConnectionOverlays:[["Arrow",{location:1,id:"arrow",width:14,length:10,foldback:.8}]],Endpoint:["Dot",{radius:2}],Container:"jsPlumb_demo_ctn"});e.draggable($("#jsPlumb_demo_ctn .w"));i=this.DATA.nodes;s=[];for(t in i){r=i[t];r.out?s.push(function(){var t,i,s,o;s=r.out;o=[];for(t=0,i=s.length;t<i;t++){n=s[t];o.push(e.connect({source:""+r.id,target:""+(n.id||n)},{anchor:"Continuous",connector:["StateMachine"]}))}return o}()):s.push(void 0)}return s}})}).call(this);