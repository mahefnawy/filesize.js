/**
 * filesize
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright Jason Mulligan 2012
 * @license BSD-3 <http://opensource.org/licenses/BSD-3-Clause>
 * @link https://github.com/avoidwork/filesize.js
 * @module filesize
 * @version 1.7.1
 */
(function(e){"use strict";var t=function(e){var t=10,n,r,i,s,o,u,a,f,l,c;typeof arguments[2]!="undefined"?(n=arguments[1],r=arguments[2]):typeof arguments[1]=="boolean"?r=arguments[1]:n=arguments[1];if(isNaN(e)||typeof n!="undefined"&&isNaN(n))throw Error("Invalid arguments");r=r===!0,n=r?1:typeof n=="undefined"?2:parseInt(n,t),i=Number(e),s=[["B",0],["Kb",128],["KB",1024],["Mb",131072],["MB","1.049e+6"],["Gb","1.342e+8"],["GB","1.074e+9"],["Tb","1.374e+11"],["TB","1.1e+12"],["Pb","1.407e+14"],["PB","1.126e+15"]],l=s.length,u="",a=/\.(.*)/;while(l--){o=s[l][1],f=s[l][0],l>3&&(o=Number(o));if(i>=o){u=(f==="B"?i:i/o).toFixed(n),r&&(/b$/.test(f)&&(f=f.toLowerCase()),f=f.slice(0,1),c=a.exec(u),c!==null&&typeof c[1]!="undefined"&&c[1]==="0"&&(u=parseInt(u,t))),u+=f;break}}return u};switch(!0){case typeof exports!="undefined":module.exports=t;break;case typeof define=="function":define(function(){return t});break;default:e.filesize=t}})(this);