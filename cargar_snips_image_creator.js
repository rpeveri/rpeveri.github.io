//<![CDATA[
function snips_image_creator(image_url,post_title)
{
var image_size=400;
var show_default_thumbnail=true;
var default_thumbnail="http://4.bp.blogspot.com/-vtgiGl63BsY/UPSkA_2tpCI/AAAAAAAADrk/AOdTSXSrHDc/s000/default.png";
if(show_default_thumbnail == true && image_url == "") image_url= default_thumbnail;
image_tag='<img src="'+image_url.replace('/s72-c/','/w'+image_size+'/')+'" alt="'+post_title+'"/>';
if(image_url!="") return image_tag; else return "";
}
//]]>