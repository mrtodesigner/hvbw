      //<![CDATA[
      imgr = new Array();
      imgr[0] = "https://centralland.com.vn/wp-content/uploads/2019/06/faceseo-banner-1.jpg";
      showRandomImg = true;
      aBold = true;
      summaryPost = 140;
      summaryPost1= 80; 
      summaryTitle = 35; 
      numposts = 1; 
      numposts1 =6; 
      numposts2 =5; 
      numposts3 = 8; 
      numposts5 = 5; 
      numposts6 = 4; 
      numposts7 = 10; 
      numposts4= 4;
      function removeHtmlTag(strx,chop){
        var s = strx.split("<");
        for(var i=0;i<s.length;i++){
          if(s[i].indexOf(">")!=-1){
            s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
          }
        }
        s =  s.join("");
        s = s.substring(0,chop-1);
        return s;
      }
      function showrecentposts(json) {
        j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img  = new Array();
        if (numposts5 <= json.feed.entry.length) {
          maxpost = numposts1;
        }
        else
        {
          maxpost=json.feed.entry.length;
        } 
        for (var i = 0; i < maxpost; i++) {
          var entry = json.feed.entry[i];
          var posttitle = entry.title.$t;
          var pcm;
          var posturl;
          if (i == json.feed.entry.length) break;
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break;
            }
          }  
          if ("content" in entry) {
            var postcontent = entry.content.$t;}
          else
            if ("summary" in entry) {
              var postcontent = entry.summary.$t;}
            else var postcontent = "";
          postdate = entry.published.$t;
          if(j>imgr.length-1) j=0;
          img[i] = imgr[j];
          s = postcontent ; 
          tintuc = -1 != s.indexOf("[tintuc]") ? s.substring(s.indexOf("[tintuc]") + 8, s.indexOf("[/tintuc]")) : "";
          a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
          //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
          var month = [1,2,3,4,5,6,7,8,9,10,11,12];
          var month2 = ["1","2","3","4","5","6","7","8","9","10","11","12"];
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          for(var u2=0;u2<month.length;u2++){
            if(parseInt(m)==month[u2]) {
              m = month2[u2] ; break;
            }
          }
          var daystr = day+ '/' + m + '/' + y ;
          if (i==0) {
            var trtd = '<div class="first_post col-sm-8"><div class="image_post_feature"><a class="link_image " href="'+posturl+'"><img width="479" height="301" src="'+img[i]+'" class="attachment-479-301 size-479-301 wp-post-image" alt="'+posttitle+'"></a></div><p class="title_feature"><a href="'+posturl+'">'+posttitle+'</a></p><p class="excerpt_feature">'+removeHtmlTag(s,150)+'.</p></div><div class="order_post col-sm-4">';      
            document.write(trtd);
          }
          if (i==1) {
            var trtd = '<div class="second "><div class="image_second_feature"><a class="link_image " href="'+posturl+'"><img width="479" height="301" src="'+img[i]+'" class="attachment-479-301 size-479-301 wp-post-image" alt="'+posttitle+'"></a></div><p class="title_feature_order"><a href="'+posturl+'">'+posttitle+'</a></p></div>';      
            document.write(trtd);
          }
          if ((i>1)&&(i<maxpost)) {
            var trtd = '<div class="order_post_item "><p class="title_feature_order"><a href="'+posturl+'">'+posttitle+'</a></p></div>';  
            document.write(trtd);
          }    
          j++;
        }
        document.write('</div>');
      }
function showrecentposts1(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
img  = new Array();
for (var i = 0; i < 5; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var pcm;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
} 
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
pcm = entry.link[k].title.split(" ")[0];
break;
}
}  
if ("content" in entry) {
var postcontent = entry.content.$t;}
else
if ("summary" in entry) {
var postcontent = entry.summary.$t;}
else var postcontent = "";

postdate = entry.published.$t;

if(j>imgr.length-1) j=0;
img[i] = imgr[j];

s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var month2 = ["1","2","3","4","5","6","7","8","9","10","11","12"];

var day = postdate.split("-")[2].substring(0,2);
var m = postdate.split("-")[1];
var y = postdate.split("-")[0];

for(var u2=0;u2<month.length;u2++){
if(parseInt(m)==month[u2]) {
m = month2[u2] ; break;
}
}
var daystr = day+ '/' + m + '/' + y ;


var trtd = '<div class="col-lg-2b col-md-3 col-sm-4 col-xs-6 post_hot_item"><div class="image_hot_post"><a href="'+posturl+'"><img width="188" height="115" src="'+img[i]+'" class="attachment-188-115 size-188-115 wp-post-image" alt="'+posttitle+'" /></a></div><h4><a href="'+posturl+'">'+posttitle+'</a></h4></div>';      
document.write(trtd);
j++;
}
}
      function showrecentposts2(json) {
        j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img  = new Array();
        if (numposts5 <= json.feed.entry.length) {
          maxpost = numposts3;
        }
        else
        {
          maxpost=json.feed.entry.length;
        } 
        for (var i = 0; i < maxpost; i++) {
          var entry = json.feed.entry[i];
          var posttitle = entry.title.$t;
          var pcm;
          var posturl;
          if (i == json.feed.entry.length) break;
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break;
            }
          }  
          if ("content" in entry) {
            var postcontent = entry.content.$t;}
          else
            if ("summary" in entry) {
              var postcontent = entry.summary.$t;}
            else var postcontent = "";
          postdate = entry.published.$t;
          if(j>imgr.length-1) j=0;
          img[i] = imgr[j];
          s = postcontent ; 
          tintuc = -1 != s.indexOf("[tintuc]") ? s.substring(s.indexOf("[tintuc]") + 8, s.indexOf("[/tintuc]")) : "";
          a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
          //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
          var month = [1,2,3,4,5,6,7,8,9,10,11,12];
          var month2 = ["1","2","3","4","5","6","7","8","9","10","11","12"];
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          for(var u2=0;u2<month.length;u2++){
            if(parseInt(m)==month[u2]) {
              m = month2[u2] ; break;
            }
          }
          var daystr = day+ '/' + m + '/' + y ;
          if (i==0) {
            var trtd = '<div class="first_post col-sm-5"><div class="image_post_one"><a class="link_image " href="'+posturl+'"><img width="479" height="301" src="'+img[i]+'" class="attachment-479-301 size-479-301 wp-post-image" alt="'+posttitle+'"></a></div><p class="title_layout one"><a href="'+posturl+'">'+posttitle+'</a></p><p class="excerpt_layout one">'+removeHtmlTag(s,150)+'.</p></div><div class="post_right col-sm-7"><ul class="row">';      
            document.write(trtd);
          }
          if (i==1) {
            var trtd = '<div class="second_post col-sm-5"><div class="image_post_second"><a class="link_image " href="'+posturl+'"><img width="479" height="301" src="'+img[i]+'" class="attachment-479-301 size-479-301 wp-post-image" alt="'+posttitle+'"></a></div><p class="title_layout one"><a href="'+posturl+'">'+posttitle+'</a></p><p class="excerpt_layout one">'+removeHtmlTag(s,150)+'.</p></div><div class="order_post col-sm-7"><ul>';      
            document.write(trtd);
          }
          if ((i>1)&&(i<maxpost)) {
            var trtd = '<div class="order_post_item "><p class="title_feature_order"><a href="'+posturl+'">'+posttitle+'</a></p></div>';  
            document.write(trtd);
          }     
          if (i==7) {
            var trtd = '</ul></div>';  
            document.write(trtd);
          }    

          j++;
        }
        document.write('</ul></div>');
      }
      function showrecentposts3(json) {
        j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img  = new Array();
        if (numposts5 <= json.feed.entry.length) {
          maxpost = numposts4;
        }
        else
        {
          maxpost=json.feed.entry.length;
        } 
        for (var i = 0; i < maxpost; i++) {
          var entry = json.feed.entry[i];
          var posttitle = entry.title.$t;
          var pcm;
          var posturl;
          if (i == json.feed.entry.length) break;
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break;
            }
          }  
          if ("content" in entry) {
            var postcontent = entry.content.$t;}
          else
            if ("summary" in entry) {
              var postcontent = entry.summary.$t;}
            else var postcontent = "";
          postdate = entry.published.$t;
          if(j>imgr.length-1) j=0;
          img[i] = imgr[j];
          s = postcontent ; 
          tintuc = -1 != s.indexOf("[tintuc]") ? s.substring(s.indexOf("[tintuc]") + 8, s.indexOf("[/tintuc]")) : "";
          a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
          //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
          var month = [1,2,3,4,5,6,7,8,9,10,11,12];
          var month2 = ["1","2","3","4","5","6","7","8","9","10","11","12"];
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          for(var u2=0;u2<month.length;u2++){
            if(parseInt(m)==month[u2]) {
              m = month2[u2] ; break;
            }
          }
          var daystr = day+ '/' + m + '/' + y ;
          if (i==0) {
            var trtd = '<div class="row first_post two"><div class="col-sm-6"><div class="first_image_post two"><a class="link_image " href="'+posturl+'"><img width="479" height="301" src="'+img[i]+'" class="attachment-479-301 size-479-301 wp-post-image" alt="'+posttitle+'"></a></div></div><div class="col-sm-6"><div class="desc_post"><p class="title_layout two"><a href="'+posturl+'">'+posttitle+'</a></p><p class="excerpt_layout two">'+removeHtmlTag(s,150)+'...</p></div></div></div><div class="row list_image two">';      
            document.write(trtd);
          }
          if ((i>0)&&(i<maxpost)) {
            var trtd = '<div class="col-sm-4"><div class="image_post two"><a class="link_image " href="'+posturl+'"><img width="479" height="301" src="'+img[i]+'" class="attachment-479-301 size-479-301 wp-post-image" alt="'+posttitle+'"></a></div><p class="title_layout two"><a href="'+posturl+'">'+posttitle+'</a></p></div>';  
            document.write(trtd);
          }    
          j++;
        }
        document.write('</div>');
      }

      function showrecentposts4(json) {
        j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img  = new Array();
        if (numposts5 <= json.feed.entry.length) {
          maxpost = numposts5;
        }
        else
        {
          maxpost=json.feed.entry.length;
        } 
        for (var i = 0; i < maxpost; i++) {
          var entry = json.feed.entry[i];
          var posttitle = entry.title.$t;
          var pcm;
          var posturl;
          if (i == json.feed.entry.length) break;
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break;
            }
          }  
          if ("content" in entry) {
            var postcontent = entry.content.$t;}
          else
            if ("summary" in entry) {
              var postcontent = entry.summary.$t;}
            else var postcontent = "";
          postdate = entry.published.$t;
          if(j>imgr.length-1) j=0;
          img[i] = imgr[j];
          s = postcontent ; 
          tintuc = -1 != s.indexOf("[tintuc]") ? s.substring(s.indexOf("[tintuc]") + 8, s.indexOf("[/tintuc]")) : "";
          a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
          //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
          var month = [1,2,3,4,5,6,7,8,9,10,11,12];
          var month2 = ["1","2","3","4","5","6","7","8","9","10","11","12"];
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          for(var u2=0;u2<month.length;u2++){
            if(parseInt(m)==month[u2]) {
              m = month2[u2] ; break;
            }
          }
          var daystr = day+ '/' + m + '/' + y ;
          if (i==0) {
            var trtd = '<div class="row first_post three"><div class="col-sm-6"><div class="first_image_post three"><a class="link_image " href="'+posturl+'"><img width="479" height="301" src="'+img[i]+'" class="attachment-479-301 size-479-301 wp-post-image" alt="'+posttitle+'"></a></div></div><div class="col-sm-6"><div class="desc_post"><p class="title_layout three"><a href="'+posturl+'">'+posttitle+'</a></p><p class="excerpt_layout two">'+removeHtmlTag(s,150)+'...</p></div></div></div><div class="row list_post three">';      
            document.write(trtd);
          }
          if ((i>0)&&(i<maxpost)) {
            var trtd = '<div class="col-sm-6"><p class="title_layout three "><a href="'+posturl+'">'+posttitle+'</a></p></div>';  
            document.write(trtd);
          }    
          j++;
        }
        document.write('</div>');
      }


      function showrecentposts5(json) {
        j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img  = new Array();
        if (numposts5 <= json.feed.entry.length) {
          maxpost = numposts6;
        }
        else
        {
          maxpost=json.feed.entry.length;
        } 
        for (var i = 0; i < maxpost; i++) {
          var entry = json.feed.entry[i];
          var posttitle = entry.title.$t;
          var pcm;
          var posturl;
          if (i == json.feed.entry.length) break;
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break;
            }
          }  
          if ("content" in entry) {
            var postcontent = entry.content.$t;}
          else
            if ("summary" in entry) {
              var postcontent = entry.summary.$t;}
            else var postcontent = "";
          postdate = entry.published.$t;
          if(j>imgr.length-1) j=0;
          img[i] = imgr[j];
          s = postcontent ; 
          tintuc = -1 != s.indexOf("[tintuc]") ? s.substring(s.indexOf("[tintuc]") + 8, s.indexOf("[/tintuc]")) : "";
          a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
          //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
          var month = [1,2,3,4,5,6,7,8,9,10,11,12];
          var month2 = ["1","2","3","4","5","6","7","8","9","10","11","12"];
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          for(var u2=0;u2<month.length;u2++){
            if(parseInt(m)==month[u2]) {
              m = month2[u2] ; break;
            }
          }
          var daystr = day+ '/' + m + '/' + y ;
          if (i==0) {
            var trtd = '<div class="first_post four"><div class="first_image_post four"><a class="link_image " href="'+posturl+'"><img width="479" height="301" src="'+img[i]+'" class="attachment-479-301 size-479-301 wp-post-image" alt="'+posttitle+'"></a></div><p class="title_layout four"><a href="'+posturl+'">'+posttitle+'</a></p></div><ul class="gray">';      
            document.write(trtd);
          }
          if ((i>0)&&(i<maxpost)) {
            var trtd = '<li class="title_layout four "><a href="'+posturl+'">'+posttitle+'</a></li>';  
            document.write(trtd);
          }    
          j++;
        }
        document.write('</ul>');
      }

      function showrecentposts6(json) {
        j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img  = new Array();
        if (numposts5 <= json.feed.entry.length) {
          maxpost = numposts6;
        }
        else
        {
          maxpost=json.feed.entry.length;
        } 
        for (var i = 0; i < maxpost; i++) {
          var entry = json.feed.entry[i];
          var posttitle = entry.title.$t;
          var pcm;
          var posturl;
          if (i == json.feed.entry.length) break;
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 
          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break;
            }
          }  
          if ("content" in entry) {
            var postcontent = entry.content.$t;}
          else
            if ("summary" in entry) {
              var postcontent = entry.summary.$t;}
            else var postcontent = "";
          postdate = entry.published.$t;
          if(j>imgr.length-1) j=0;
          img[i] = imgr[j];
          s = postcontent ; 
          tintuc = -1 != s.indexOf("[tintuc]") ? s.substring(s.indexOf("[tintuc]") + 8, s.indexOf("[/tintuc]")) : "";
          a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
          //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
          var month = [1,2,3,4,5,6,7,8,9,10,11,12];
          var month2 = ["1","2","3","4","5","6","7","8","9","10","11","12"];
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          for(var u2=0;u2<month.length;u2++){
            if(parseInt(m)==month[u2]) {
              m = month2[u2] ; break;
            }
          }
          var daystr = day+ '/' + m + '/' + y ;
          if (i==0) {
            var trtd = '<div class="first_post four"><div class="first_image_post four"><a class="link_image video" href="'+posturl+'"><img width="479" height="301" src="'+img[i]+'" class="attachment-479-301 size-479-301 wp-post-image" alt="'+posttitle+'"></a></div><p class="title_layout four"><a href="'+posturl+'">'+posttitle+'</a></p></div><ul class="organge">';      
            document.write(trtd);
          }
          if ((i>0)&&(i<maxpost)) {
            var trtd = '<li class="title_layout four video"><a href="'+posturl+'">'+posttitle+'</a></li>';  
            document.write(trtd);
          }    
          j++;
        }
        document.write('</ul>');
      }


function showrecentposts7(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
img  = new Array();

for (var i = 0; i < 6; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var pcm;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
} 
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
pcm = entry.link[k].title.split(" ")[0];
break;
}
}  
if ("content" in entry) {
var postcontent = entry.content.$t;}
else
if ("summary" in entry) {
var postcontent = entry.summary.$t;}
else var postcontent = "";
var label1= ' <a class="label-link" href="/search/label/'+entry.category[0].term+'">'+entry.category[0].term+'</a> ';
postdate = entry.published.$t;

if(j>imgr.length-1) j=0;
img[i] = imgr[j];

s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var month2 = ["1","2","3","4","5","6","7","8","9","10","11","12"];

var day = postdate.split("-")[2].substring(0,2);
var m = postdate.split("-")[1];
var y = postdate.split("-")[0];

for(var u2=0;u2<month.length;u2++){
if(parseInt(m)==month[u2]) {
m = month2[u2] ; break;
}
}
var daystr = day+ '/' + m + '/' + y ;
var trtd = '<li><a href="'+posturl+'"><img alt="'+posttitle+'" class="attachment-fp770_375 wp-post-image" height="375" src="'+img[i]+'" width="770"/></a><div class="post-info"><div class="entry-meta">'+label1+'</div><div class="title"><h2><a href="'+posturl+'">'+posttitle+'</a></h2></div><div class="post-excerpt"><h5>'+removeHtmlTag(s,150)+'...</h5></div><div class="more"><h6><a href="'+posturl+'">Read more</a></h6></div></div></li>';      
document.write(trtd);
j++;
}

}