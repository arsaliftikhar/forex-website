var article= document.getElementById('article');
var h3 = "<h3>****write value here...****</h3>";
var linkNew = "<a href='****http://yourlink.com****'>****write display link text****</a>";
var line="<br>";
var imageInsert='<div class="mx-auto"><img src="********" class="w-100" alt="Image Source"></div>';
var fontItalic ="<i>****Your Text****</i>";
var fontBold="<b>****Your Text****</b>";
var fontUnderline="<u>****Your Text****</u>";
var unOrderList="<ul>\n" +
    "<li>****Item 1****</li>\n" +
    "<li>****Item 2****</li>\n" +
    "</ul>";
var orderList="<ol>\n" +
    "<li>****Item 1****</li>\n" +
    "<li>****Item 2****</li>\n" +
    "</ol>";
function heading()
{
   var articleValue = article.value+h3;
   article.value=articleValue+"\n\n";
}
function link()
{
    var articleValue = article.value+linkNew;
    article.value=articleValue+"\n\n";
}
function lineBreak()
{
    var articleValue = article.value+line;
    article.value=articleValue+"\n\n";
}
function image()
{
    var articleValue = article.value+imageInsert;
    article.value=articleValue+"\n\n";
}
function italic()
{
    var articleValue = article.value+fontItalic;
    article.value=articleValue+"\n\n";
}
function boldFont()
{
    var articleValue = article.value+fontBold;
    article.value=articleValue+"\n\n";
}
function underline()
{
    var articleValue = article.value+fontUnderline;
    article.value=articleValue+"\n\n";
}
function unorderlist()
{
    var articleValue = article.value+unOrderList;
    article.value=articleValue+"\n\n";
}
function orderlist()
{
    var articleValue = article.value+orderList;
    article.value=articleValue+"\n\n";
}


