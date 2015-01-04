/**
 * Thingdom API JavaScript Wrapper
 *
 * @author     Andrew Welters <andrew.welters@mts.com>
 * @author     F. Stephen Kirschbaum <stephen.kirschbaum@mts.com>
 * @copyright  2014-2015 MTS Systems
 * @license    http://www.opensource.org/licenses/mit-license.html MIT License
 * @version    1.1
 * @link       https://github.com/thingdomio/thingdom-js
 * @website    https://thingdom.io
 */
(function(){"use strict";var e=this,t=e.Thingdom;!function(e){var t=function(){var e=this,t=0,r=null,i=[],o=[],s=function(n,i){return function(o){return 0===t&&(r=o,t=n,i.forEach(function(e){e()})),e}};return e.state=function(){var e=["pending","fulfilled","rejected"];return function(){return e[t]}}(),e.resolve=s(1,i),e.reject=s(2,o),e.then=function(e,s){var a=n(),u=function(e,t){return"function"!=typeof e&&(e=t),function(){setTimeout(function(){try{a.resolve(e(r))}catch(t){a.reject(t)}})}};return e=u(e,function(e){return e}),s=u(s,function(e){throw e}),0===t?(i.push(e),o.push(s)):1===t?e():2===t&&s(),a.restrict()},e.restrict=function(){return{state:e.state,then:e.then}},e},n=function(){return new t};"function"==typeof e.define?e.define("deferred",[],function(){return n}):e.deferred=n}(e),function(t){var n=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("MSXML2.XMLHTTP.3.0")},function(){return new ActiveXObject("MSXML2.XMLHTTP")}],r=null,i=Object.prototype.hasOwnProperty,o=Array.prototype.forEach,s=function(e,t,n){if(null!==e)if(o&&e.forEach===o)e.forEach(t,n);else if(e.length===+e.length){for(var r=0,s=e.length;s>r;r++)if(r in e&&t.call(n,e[r],r,e)===breaker)return}else for(var a in e)if(i.call(e,a)&&t.call(n,e[a],a,e)===breaker)return},a=function(e){return s(Array.prototype.slice.call(arguments,1),function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])}),e};t.xhr=function(){if(null!==r)return r();for(var e=0,t=n.length;t>e;e++)try{var i=n[e],o=i();if(null!==o)return r=i,o}catch(s){continue}return function(){}},t._xhrResp=function(e){switch(e.getResponseHeader("Content-Type").split(";")[0]){case"text/xml":return e.responseXML;case"text/json":case"application/json":case"text/javascript":case"application/javascript":case"application/x-javascript":return JSON.parse(e.responseText);default:return e.responseText}},t._formData=function(e){var t=[],n=/%20/g;for(var r in e)t.push(encodeURIComponent(r).replace(n,"+")+"="+encodeURIComponent(e[r].toString()).replace(n,"+"));return t.join("&")},t.ajax=function(n){var r=t.xhr(),i,o=0,s=e.deferred();n=a({userAgent:"XMLHttpRequest",lang:"en",type:"GET",data:null,dataType:"application/x-www-form-urlencoded"},n),n.timeout&&(i=setTimeout(function(){r.abort(),n.timeoutFn&&n.timeoutFn(n.url)},n.timeout));var u=function(e){return n.success(e)},c=function(e){return n.error(e)};s.then(u,c),r.onreadystatechange=function(){4==r.readyState?(i&&clearTimeout(i),r.status<300?(n.dataType.indexOf("json")>=0&&(r.responseJSON=JSON.parse(r.responseText)),n.success&&("pending"===s.state()?s.resolve(t._xhrResp(r)):n.success(t._xhrResp(r),"success",r))):n.error&&("pending"===s.state()?s.reject(r.statusText):n.error(r,r.status,r.statusText)),n.complete&&n.complete(r,r.statusText)):n.progress&&n.progress(++o)};var p=n.url,d=null,f="POST"==n.type||"PUT"==n.type;if(!f&&n.data&&(p+="?"+t._formData(n.data)),r.open(n.type,p),f){var h=n.dataType.indexOf("json")>=0;d=h?JSON.stringify(n.data):t._formData(n.data),r.setRequestHeader("Content-Type",h?"application/json":"application/x-www-form-urlencoded")}r.send(d)}}(e);var n=e.Thingdom=function(){var n=this,r="https://api.thingdom.io/1.1/";n.responses=[],n.errors=[];var i=function(e){n.errors.push(e),console.error(n.errors[n.errors.length-1])},o=function(t,i,o){e.ajax({url:r+t,withCredentials:!0,type:"POST",dataType:"json",data:i,success:function(e){o(e)},error:function(e){o(e)},complete:function(e){n.responses.push(e.responseJSON)}})},s=function(){var e=document.getElementsByTagName("script"),t,n,r=null,i=function(e){for(var t=i.options,n=t.parser[t.strictMode?"strict":"loose"].exec(e),r={},o=14;o--;)r[t.key[o]]=n[o]||"";return r[t.q.name]={},r[t.key[12]].replace(t.q.parser,function(e,n,i){n&&(r[t.q.name][n]=i)}),r};i.options={strictMode:!0,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};for(var o=0;o<e.length;++o)if(n=e[0].getAttribute("src"),r=i(n),"thingdom.js"===r.file||"thingdom.min.js"===r.file){try{t=r.queryKey.api_secret}catch(s){}break}return t},a=function(){var e={};"undefined"==typeof n.apiSecret&&(n.apiSecret=s()),e="undefined"!=typeof n.device_secret?{api_secret:n.apiSecret,device_secret:n.device_secret}:{api_secret:n.apiSecret};var t=function(e){if("success"===e.response)for(var t in e)n[t]=e[t];else if("error"===e.response)return void i("Initializion of Thingdom failed. Server responded: "+e.msg)};o("token",e,t)};a();var u=function(t,n,r){var i=e.Thingdom,s=o;this.thing_id=t,this.application_token=n,this.thing_code=r,this.responses=[],this.errors=[],this.feed_categories=[],this.status_keys=[];var a=function(e,t,n,r){var i=["create","update","delete"],o="settings/feed_category",a={};if("undefined"!=typeof e&&-1===i.indexOf(e))return void this.errors.push("Cannot perform operation '"+e+"' as its not valid.");if("delete"===e&&(o+="/"+e),"undefined"==typeof t||"undefined"==typeof n){var u=JSON.stringify({name:typeof t,product_name:typeof product_name},null,4);this.errors.push("Cannot '"+e+"' feed_category. You must define both name and product_name. Saw: "+u)}a.token=this.application_token,a.name=t,a.display_name=n,a.product_type="undefined"!=typeof r?r:"";var c=function(e){console.log(e),"success"===e.response?(this.responses.push(e),this.feed_categories.push({name:a.name,display_name:a.display_name,product_type:a.product_type})):this.errors.push("Error in feed_category. Server responded: "+e.msg)};s(o,a,c)},u=function(e,t){var n={token:this.application_token,thing_id:this.thing_id,message:t,feed_category:e},r=function(e){console.log(e),"success"===e.msg?this.responses.push(e):this.errors.push("Error in feed. Server responded: "+e.msg)};s("feed",n,r)},c=function(e,t,n,r,i){var o=["create","update","delete"],a="settings/status_key",u={};if("undefined"!=typeof e&&-1===o.indexOf(e))return void this.errors.push("Cannot perform settings/status_key with operation '"+e+"' as its not valid.");if("delete"===e&&(a+="/"+e),"undefined"==typeof t||"undefined"==typeof n){var c=JSON.stringify({name:typeof t,product_name:typeof product_name},null,4);this.errors.push("Cannot '"+e+"' feed_category. You must define both name and product_name. Saw: "+c)}u.token=this.application_token,u.name=t,u.display_name=n,u.product_type="undefined"!=typeof r?r:"",u.is_digital="undefined"!=typeof i?i:!1;var p=function(e){console.log(e),"success"===e.response?(this.responses.push(e),this.status_keys.push({name:u.name,display_name:u.display_name,product_type:u.product_type,is_digital:i})):this.errors.push("Error in status_key. Server responded: "+e.msg)};s(a,u,p)},p=function(e,t,n){var r={token:this.application_token,thing_id:this.thing_id,status_array:{name:e,value:t,unit:n}},i=function(e){console.log(e),"success"===e.msg?this.responses.push(e):this.errors.push("Error in feed. Server responded: "+e.msg)};s("status",r,i)},d=function(e){var t={token:this.application_token,thing_id:this.thing_id,status_array:e},n=function(e){console.log(e)};s("status",t,n)};return this.feed_category=a,this.feed=u,this.status_key=c,this.status=p,this.statusArray=d,this},c=[];n.things="undefined"==typeof n.things?c:n.things;var p=function(e,t){var r=new deferred;if("undefined"==typeof n.device_secret||"undefined"==typeof n.apiSecret||"undefined"==typeof n.application_token){var s=JSON.stringify({api_secret:n.apiSecret,application_token:n.application_token,device_secret:n.device_secret},null,4);return void i("Unable to get Thing, Thingdom requires an API Secret, an Application Token, and a Device Secret. Currently Thingdom has initialized with: "+s)}var a={};if("undefined"==typeof e)return void i("getThing Error: You must define the name for your Thing");a.name=e,a.product_type="undefined"!=typeof t?t:"",a.token=n.application_token;var c=function(e){var t=n.things.push(new u(e._xhr.thing_id,e.$parent.application_token,e._xhr.code));return n.things[t-1]},p=function(e){i("getThing Error: Unable to create Thing. Server responded: "+e.msg)};r.then(c,p);var d=function(e){var t={_xhr:e,$parent:n};"success"===t._xhr.response?r.resolve(t):r.reject(t._xhr.msg)};o("thing",a,d)};n.getThing=p,n.noConflict=function(){return e.previous_thingdom=t,n}};!function(){var e=new n;return e}(e),Thingdom.ThingdomClass=Thingdom,e.Thingdom=Thingdom}).call(this);
//# sourceMappingURL=./thingdom-min.js.map