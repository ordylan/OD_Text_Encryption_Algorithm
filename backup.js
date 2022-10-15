//万能密码abcdefghijklmnopqrstuvwxyz的bug已经修复!!!--2022年1月15日15:01:18
console.log("哪有看别人算法的???")

//代码bug多,以后再写

//数字加密biao
//由于出现问题,数字表暂停使用!!!
//密码模式也取消哦
var bigshuzu = new Array(
'0T1JEWUxBTg',//0
'1T1JBTkdF',//1
'2RFlMQU4',//2
'3SFNQ',//3
'4SEFQUFk',//4
'5U1RVRFk',//5
'6UExBWUdST1VORA',//6
'7R09PRExVQ0s',//7
'8R0VUQU5JQ0VTQ09SRQ',//8
'9SEFQUFlFVkVSWURBWQ',//9
);


//Base64加密带中文,不用btoa什么的
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}

//alert(Base64.encode("666"));//jiami
//alert(Base64.decode("NjY2"));//jiemi




//解密
function getcode() {console.log("----开始解密----");
//密文
var jiamidecode = document.getElementById('jiamidecode').value;console.log("密文:"+jiamidecode);
//密码
//var coddepw = document.getElementById('coddepw').value;
var coddepw = "abcdefghijklmnopqrstuvwxyz";//取消密码
//分割密码
var s=coddepw,reg=/.{1}/g;
rs=s.match(reg);
rs.push(s.substring(rs.join('').length));
//解析密码


//jiamidecode = "JUU3%SFNQ>JT`JDJT`JGJUU3%SFNQ>JT`JBJT`E0%T1%T1JBTkdF>JEWUxBTg>JUU2%RFlMQU4%SEFQUFk>>JT`JDJT`E5%U1RVRFk>JUU4%SEFQUFk>JUJGJT`I5%U1RVRFk>JUU0%T1%T1JBTkdF>JEWUxBTg>JUI5%U1RVRFk>JT`E4%SEFQUFk>JUU3%SFNQ>JUE1%T1JBTkdF>JT`JFJUU1%T1JBTkdF>JUE1%T1JBTkdF>JT`E3%SFNQ>JUU1%T1JBTkdF>JT`I`UJT`I3%SFNQ>";
//var jiamidecode3;
//for(i=0;i<11;i++){ 
//jiamidecode = jiamidecode.replace(new RegExp(bigshuzu[i],'g'),i);
//    jiamidecode2 = jiamidecode.split(bigshuzu[i]);
//    for(a=0;a<jiamidecode.length;a++){ 
//        jiamidecode3 = jiamidecode3+jiamidecode2[a];
//    }
//}
//console.log("解第2_2次加密:"+jiamidecode3);
//jiamidecode = jiamidecode3;

//jiamidecode = jiamidecode.replace(/\[*\]/g,'') 
//alert(jiamidecode);
for(var i=0;i<rs.length;i++){ 
//密码偏移
//这里我想了好久好久
//文本aba 密码a 密文yby
//密文yby 密码a 文本??? 
//也就是把c改成a
//错误代码   if(rs[i] == "a"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"c");}
//改正后代码 if(rs[i] == "a"){jiamidecode = jiamidecode.replace(new RegExp("c",'g'),rs[i]);}

//替换文本(3位加密,a--c,b--d ......)
if(rs[i] == "a")     {jiamidecode = jiamidecode.replace(new RegExp("`Y",'g'),rs[i]);}
else if(rs[i] == "b"){jiamidecode = jiamidecode.replace(new RegExp("`Z",'g'),rs[i]);}
else if(rs[i] == "c"){jiamidecode = jiamidecode.replace(new RegExp("`A",'g'),rs[i]);}
else if(rs[i] == "d"){jiamidecode = jiamidecode.replace(new RegExp("`B",'g'),rs[i]);}
else if(rs[i] == "e"){jiamidecode = jiamidecode.replace(new RegExp("`C",'g'),rs[i]);}
else if(rs[i] == "f"){jiamidecode = jiamidecode.replace(new RegExp("`D",'g'),rs[i]);}
else if(rs[i] == "g"){jiamidecode = jiamidecode.replace(new RegExp("`E",'g'),rs[i]);}
else if(rs[i] == "h"){jiamidecode = jiamidecode.replace(new RegExp("`F",'g'),rs[i]);}
else if(rs[i] == "i"){jiamidecode = jiamidecode.replace(new RegExp("`G",'g'),rs[i]);}
else if(rs[i] == "j"){jiamidecode = jiamidecode.replace(new RegExp("`H",'g'),rs[i]);}
else if(rs[i] == "k"){jiamidecode = jiamidecode.replace(new RegExp("`I",'g'),rs[i]);}
else if(rs[i] == "l"){jiamidecode = jiamidecode.replace(new RegExp("`J",'g'),rs[i]);}
else if(rs[i] == "m"){jiamidecode = jiamidecode.replace(new RegExp("`K",'g'),rs[i]);}
else if(rs[i] == "n"){jiamidecode = jiamidecode.replace(new RegExp("`L",'g'),rs[i]);}
else if(rs[i] == "o"){jiamidecode = jiamidecode.replace(new RegExp("`M",'g'),rs[i]);}
else if(rs[i] == "p"){jiamidecode = jiamidecode.replace(new RegExp("`N",'g'),rs[i]);}
else if(rs[i] == "q"){jiamidecode = jiamidecode.replace(new RegExp("`O",'g'),rs[i]);}
else if(rs[i] == "r"){jiamidecode = jiamidecode.replace(new RegExp("`P",'g'),rs[i]);}
else if(rs[i] == "s"){jiamidecode = jiamidecode.replace(new RegExp("`Q",'g'),rs[i]);}
else if(rs[i] == "t"){jiamidecode = jiamidecode.replace(new RegExp("`R",'g'),rs[i]);}
else if(rs[i] == "u"){jiamidecode = jiamidecode.replace(new RegExp("`S",'g'),rs[i]);}
else if(rs[i] == "v"){jiamidecode = jiamidecode.replace(new RegExp("`T",'g'),rs[i]);}
else if(rs[i] == "w"){jiamidecode = jiamidecode.replace(new RegExp("`U",'g'),rs[i]);}
else if(rs[i] == "x"){jiamidecode = jiamidecode.replace(new RegExp("`V",'g'),rs[i]);}
else if(rs[i] == "y"){jiamidecode = jiamidecode.replace(new RegExp("`W",'g'),rs[i]);}
else if(rs[i] == "z"){jiamidecode = jiamidecode.replace(new RegExp("`X",'g'),rs[i]);}}
console.log("解第2_1次加密:"+jiamidecode);
//jiamidecode = atob(jiamidecode);console.log(jiamidecode);
//jiamidecode = decodeURIComponent(jiamidecode);
jiamidecode = Base64.decode(jiamidecode);
console.log("解第1次加密:"+jiamidecode);

var ddiv=document.getElementById("out");ddiv.innerHTML=jiamidecode;
console.log("----完成解密----");
}




//加密
function jiamicode() {console.log("----开始加密----");
//原文
var jiamidecode = document.getElementById('jiamidecode').value;console.log("原文:"+jiamidecode);
//jiemidecode = "真的有这么神奇吗";

//jiamidecode = btoa(encodeURIComponent(jiamidecode));console.log(jiamidecode);
jiamidecode = Base64.encode(jiamidecode);console.log("第一次加密:"+jiamidecode);

//密码
//var coddepw = document.getElementById('coddepw').value;
var coddepw = "abcdefghijklmnopqrstuvwxyz";//取消密码
//分割密码
var s=coddepw,reg=/.{1}/g;
rs=s.match(reg);
rs.push(s.substring(rs.join('').length));
//解析密码
for(var i=0;i<rs.length;i++){ 
//替换文本(3位加密,c--a,d--b ......)
if(rs[i] == "a"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`Y");}
else if(rs[i] == "b"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`Z");}
else if(rs[i] == "c"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`A");}
else if(rs[i] == "d"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`B");}
else if(rs[i] == "e"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`C");}
else if(rs[i] == "f"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`D");}
else if(rs[i] == "g"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`E");}
else if(rs[i] == "h"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`F");}
else if(rs[i] == "i"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`G");}
else if(rs[i] == "j"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`H");}
else if(rs[i] == "k"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`I");}
else if(rs[i] == "l"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`J");}
else if(rs[i] == "m"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`K");}
else if(rs[i] == "n"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`L");}
else if(rs[i] == "o"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`M");}
else if(rs[i] == "p"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`N");}
else if(rs[i] == "q"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`O");}
else if(rs[i] == "r"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`P");}
else if(rs[i] == "s"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`Q");}
else if(rs[i] == "t"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`R");}
else if(rs[i] == "u"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`S");}
else if(rs[i] == "v"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`T");}
else if(rs[i] == "w"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`U");}
else if(rs[i] == "x"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`V");}
else if(rs[i] == "y"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`W");}
else if(rs[i] == "z"){jiamidecode = jiamidecode.replace(new RegExp(rs[i],'g'),"`X");}
}
console.log("第2次加密_1:"+jiamidecode);
//jiamidecode = jiamidecode.replace(new RegExp("0",'g'),bigshuzu[0]);
//jiamidecode = jiamidecode.replace(new RegExp("1",'g'),bigshuzu[1]);
//jiamidecode = jiamidecode.replace(new RegExp("2",'g'),bigshuzu[2]);
//jiamidecode = jiamidecode.replace(new RegExp("3",'g'),bigshuzu[3]);
//jiamidecode = jiamidecode.replace(new RegExp("4",'g'),bigshuzu[4]);
//jiamidecode = jiamidecode.replace(new RegExp("5",'g'),bigshuzu[5]);
//jiamidecode = jiamidecode.replace(new RegExp("6",'g'),bigshuzu[6]);
//jiamidecode = jiamidecode.replace(new RegExp("7",'g'),bigshuzu[7]);
//jiamidecode = jiamidecode.replace(new RegExp("8",'g'),bigshuzu[8]);
//jiamidecode = jiamidecode.replace(new RegExp("9",'g'),bigshuzu[9]);
//console.log("第2次加密_2:"+jiamidecode);
var ddiv=document.getElementById("out");ddiv.innerHTML=jiamidecode;
console.log("----完成加密----");
}