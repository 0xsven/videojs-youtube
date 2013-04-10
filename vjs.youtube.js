var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};
goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c){if(!COMPILED){var d;a=a.replace(/\\/g,"/");for(var e=goog.dependencies_,g=0;d=b[g];g++)e.nameToPath[d]=a,a in e.pathToNames||(e.pathToNames[a]={}),e.pathToNames[a][d]=!0;for(d=0;b=c[d];d++)a in e.requires||(e.requires[a]={}),e.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=!0;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return"undefined"!=typeof a&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=
-1==d?c.length:d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=!0)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){var b=goog.global.document;if("complete"==b.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}b.write('<script type="text/javascript" src="'+
a+'">\x3c/script>');return!0}return!1},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)&&(d.visited[e]=!0,e in d.requires))for(var f in d.requires[e])if(!goog.isProvided_(f))if(f in d.nameToPath)a(d.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);e in c||(c[e]=!0,b.push(e))}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");
},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isDef=function(a){return void 0!==a};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){goog.bind=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval)if(null==goog.evalWorksForGlobals_&&(goog.global.eval("var _et_ = 1;"),"undefined"!=typeof goog.global._et_?(delete goog.global._et_,goog.evalWorksForGlobals_=!0):goog.evalWorksForGlobals_=!1),goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);
b.body.removeChild(c)}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};
!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var c=b||{},d;for(d in c){var e=(""+c[d]).replace(/\$/g,"$$$$");a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e)}return a};goog.getMsgWithFallback=function(a){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),g=!1,f=a.constructor;f;f=f.superClass_&&f.superClass_.constructor)if(f.prototype[b]===d)g=!0;else if(g)return f.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};videojs.Youtube=function(a,b,c){videojs.MediaTechController.call(this,a,b,c);this.player_=a;this.player_el_=document.getElementById(this.player_.id());if((a=b.source.src.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/))&&11==a[2].length)if(this.videoId=a[2],!this.player_.options().ytcontrols){this.player_.poster("http://img.youtube.com/vi/"+this.videoId+"/0.jpg");var d=this;setTimeout(function(){d.player_.posterImage.el().style.backgroundSize="cover"},50)}this.id_=this.player_.id()+
"_youtube_api";this.el_=videojs.Component.prototype.createEl("iframe",{id:this.id_,className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0,webkitAllowFullScreen:"",mozallowfullscreen:"",allowFullScreen:""});this.player_el_.insertBefore(this.el_,this.player_el_.firstChild);a={enablejsapi:1,iv_load_policy:3,playerapiid:this.id(),disablekb:1,controls:this.player_.options().ytcontrols?1:0,showinfo:0,modestbranding:1,rel:0,origin:window.location.origin,autoplay:this.player_.options().autoplay?
1:0,loop:this.player_.options().loop?1:0};this.el_.src="http://www.youtube.com/embed/"+this.videoId+"?"+videojs.Youtube.makeQueryString(a);this.player_.options().ytcontrols&&(d=this,setTimeout(function(){d.player_.bigPlayButton.hide()},50));videojs.Youtube.apiReady?this.loadYoutube():(videojs.Youtube.loadingQueue.push(this),videojs.Youtube.apiLoading||(a=document.createElement("script"),a.src="http://www.youtube.com/iframe_api",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,
b),videojs.Youtube.apiLoading=!0))};goog.inherits(videojs.Youtube,videojs.MediaTechController);videojs.Youtube.prototype.dispose=function(){videojs.Youtube.superClass_.dispose.call(this);this.ytplayer.destroy()};videojs.Youtube.prototype.play=function(){this.isReady_?this.ytplayer.playVideo():(this.playOnReady=!0,this.player_.options.ytcontrols||this.player_.bigPlayButton.show())};videojs.Youtube.prototype.pause=function(){this.ytplayer.pauseVideo()};
videojs.Youtube.prototype.paused=function(){return this.lastState!==YT.PlayerState.PLAYING&&this.lastState!==YT.PlayerState.BUFFERING};videojs.Youtube.prototype.currentTime=function(){return this.ytplayer.getCurrentTime()};videojs.Youtube.prototype.setCurrentTime=function(a){this.ytplayer.seekTo(a,!0);this.player_.trigger("timeupdate")};videojs.Youtube.prototype.duration=function(){return this.ytplayer.getDuration()};
videojs.Youtube.prototype.buffered=function(){var a=this.ytplayer.getVideoBytesLoaded(),b=this.ytplayer.getVideoBytesTotal();if(!a||!b)return 0;var c=this.ytplayer.getDuration(),a=a/b*c,b=this.ytplayer.getVideoStartBytes()/b*c;return videojs.createTimeRange(b,b+a)};videojs.Youtube.prototype.volume=function(){isNaN(this.volumeVal)&&(this.volumeVal=this.ytplayer.getVolume()/100);return this.volumeVal};
videojs.Youtube.prototype.setVolume=function(a){a&&a!=this.volumeVal&&(this.ytplayer.setVolume(100*a),this.volumeVal=a,this.player_.trigger("volumechange"))};videojs.Youtube.prototype.muted=function(){return this.ytplayer.isMuted()};videojs.Youtube.prototype.setMuted=function(a){a?this.ytplayer.mute():this.ytplayer.unMute();var b=this;setTimeout(function(){b.player_.trigger("volumechange")},50)};
videojs.Youtube.prototype.onReady=function(){this.isReady_=!0;this.player_.trigger("techready");this.player_.posterImage.hide();this.triggerReady();this.player_.trigger("durationchange");this.playOnReady&&(this.player_.bigPlayButton.hide(),this.ytplayer.playVideo());(!this.player_.options().controls||this.player_.options().ytcontrols)&&this.player_.controlBar.hide()};
videojs.Youtube.prototype.onStateChange=function(a){if(a!=this.lastState){switch(a){case -1:this.player_.trigger("durationchange");break;case YT.PlayerState.ENDED:this.player_.trigger("ended");this.player_.options().ytcontrols||this.player_.bigPlayButton.show();break;case YT.PlayerState.PLAYING:this.player_.trigger("timeupdate");this.player_.trigger("durationchange");this.player_.trigger("playing");this.player_.trigger("play");break;case YT.PlayerState.PAUSED:this.player_.trigger("pause");break;case YT.PlayerState.BUFFERING:this.player_.trigger("timeupdate"),
this.player_.trigger("waiting"),this.player_.loadingSpinner.hide()}this.lastState=a}};
videojs.Youtube.prototype.onPlaybackQualityChange=function(a){switch(a){case "medium":this.player_.videoWidth=480;this.player_.videoHeight=360;break;case "large":this.player_.videoWidth=640;this.player_.videoHeight=480;break;case "hd720":this.player_.videoWidth=960;this.player_.videoHeight=720;break;case "hd1080":this.player_.videoWidth=1440;this.player_.videoHeight=1080;break;case "highres":this.player_.videoWidth=1920;this.player_.videoHeight=1080;break;case "small":this.player_.videoWidth=320;
this.player_.videoHeight=240;break;default:this.player_.videoWidth=0,this.player_.videoHeight=0}this.player_.trigger("ratechange")};videojs.Youtube.prototype.onError=function(a){this.player_.error=a;this.player_.trigger("error")};videojs.Youtube.isSupported=function(){return!0};videojs.Youtube.canPlaySource=function(a){return"video/youtube"==a.type};videojs.Youtube.prototype.features={};videojs.Youtube.loadingQueue=[];
videojs.Youtube.prototype.loadYoutube=function(){this.ytplayer=new YT.Player(this.id_,{events:{onReady:function(a){a.target.vjsTech.onReady()},onStateChange:function(a){a.target.vjsTech.onStateChange(a.data)},onPlaybackQualityChange:function(a){a.target.vjsTech.onPlaybackQualityChange(a.data)},onError:function(a){a.target.vjsTech.onError(a.data)}}});this.ytplayer.vjsTech=this};
videojs.Youtube.makeQueryString=function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")};window.onYouTubeIframeAPIReady=function(){for(var a;a=videojs.Youtube.loadingQueue.shift();)a.loadYoutube();videojs.Youtube.loadingQueue=[];videojs.Youtube.apiReady=!0};goog.exportProperty(videojs,"Youtube",videojs.Youtube);goog.exportProperty(videojs.Youtube,"Events",videojs.Youtube.Events);
goog.exportProperty(videojs.Youtube,"isSupported",videojs.Youtube.isSupported);goog.exportProperty(videojs.Youtube,"canPlaySource",videojs.Youtube.canPlaySource);goog.exportProperty(videojs.Youtube.prototype,"setCurrentTime",videojs.Youtube.prototype.setCurrentTime);goog.exportProperty(videojs.Youtube.prototype,"setVolume",videojs.Youtube.prototype.setVolume);goog.exportProperty(videojs.Youtube.prototype,"setMuted",videojs.Youtube.prototype.setMuted);
goog.exportProperty(videojs.Youtube.prototype,"setPreload",videojs.Youtube.prototype.setPreload);goog.exportProperty(videojs.Youtube.prototype,"setAutoplay",videojs.Youtube.prototype.setAutoplay);goog.exportProperty(videojs.Youtube.prototype,"setLoop",videojs.Youtube.prototype.setLoop);