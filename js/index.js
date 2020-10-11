//Adding evenlistener for page laoding
window.addEventListener("load", function(){
var width = window.innerWidth;
var height = window.innerHeight;
var top_header=document.getElementById("top-column");
if (width >575) {
  top_header.style.background = "url(images/bg-header-desktop.svg)";
}
else{
  top_header.style.background = "url(images/bg-header-mobile.svg)";
}
});

//Adding evenlistener for page resizing 
window.addEventListener("resize", function(){
var width = window.innerWidth;
var height = window.innerHeight;
var top_header=document.getElementById("top-column");
if (width >575) {
  top_header.style.background = "url(images/bg-header-desktop.svg)";
}
else{
  top_header.style.background = "url(images/bg-header-mobile.svg)";
}
});

function frontend(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("frontend_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-role")!='frontend'){
		list[i].style.display="none";
		}
	}
}
function backend(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("backend_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-role")!='backend'){
		list[i].style.display="none";
		}
	}
}
function fullstack(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("fullstack_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-role")!='fullstack'){
		list[i].style.display="none";
		}
	}
}
function junior(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("junior_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-level")!='junior'){
		list[i].style.display="none";
		}
	}
}
function midweight(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("midweight_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-level")!='midweight'){
		list[i].style.display="none";
		}
	}
}
function senior(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("senior_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-level")!='senior'){
		list[i].style.display="none";
		}
	}
}
function python(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("python_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	//alert(list[0].getAttribute("data-language").indexOf('python'));
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-language").indexOf('python')==-1){
		list[i].style.display="none";
		}
	}
}
function ruby(){
	var list=document.getElementsByClassName("custom-row");
	//alert(list[0].getAttribute("data-language"));
	document.getElementById("ruby_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-language").indexOf('ruby')==-1){
		list[i].style.display="none";
		}
	}
}
function javascript(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("javascript_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-language").indexOf('javascript')==-1){
		list[i].style.display="none";
		}
	}
}
function html(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("html_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-language").indexOf('html')==-1){
		list[i].style.display="none";
		}
	}
}
function css(){
	var list=document.getElementsByClassName("custom-row");
	document.getElementById("css_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-language").indexOf('css')==-1){
		list[i].style.display="none";
		}
	}
}
function react(){
	var list=document.querySelectorAll('[data-tools]');
	document.getElementById("react_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-tools").indexOf('react')==-1){
		list[i].style.display="none";
		}
	}
}
function sass(){
	var list=document.querySelectorAll('[data-tools]');
	document.getElementById("sass_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-tools").indexOf('sass')==-1){
		list[i].style.display="none";
		}
	}
}
function vue(){
	var list=document.querySelectorAll('[data-tools]');
	document.getElementById("vue_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-tools").indexOf('vue')==-1){
		list[i].style.display="none";
		}
	}
}
function django(){
	var list=document.querySelectorAll('[data-tools]');
	document.getElementById("django_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-tools").indexOf('django')==-1){
		list[i].style.display="none";
		}
	}
}
function ror(){
	var list=document.querySelectorAll('[data-tools]');
	document.getElementById("ror_f").style.display="block";
	document.getElementById("all_f").style.display="block";
	var i;
	for(i=0;i<list.length;i++){
		if(list[i].getAttribute("data-tools").indexOf('ror')==-1){
		list[i].style.display="none";
		}
	}
}

//Function for removing the filters start from here...

function all_filter(){
	var list=document.getElementsByClassName("custom-row");
	var list2=document.getElementsByClassName("filter-block");
	var i;
	for(i=0;i<list.length;i++){
		list[i].style.display="block";
	}
	for(i=0;i<list2.length;i++){
		list2[i].style.display="none";
	}
}
function check_all(list){
	//alert(list);
	var list2=document.getElementsByClassName("filter-block");
	var flag=0;
	for(var i=0;i<list.length;i++){
		list2[i].style.display=list[i];
		if(list[i]=='block'){
			var f=list2[i].id.split('_')[0];
			//alert(f);
			if(f!='all')
			window[f]();
			flag++;
		}
	}
	if(flag==1)
		all_filter();
}
function remove_frontend(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='frontend_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_backend(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='backend_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_fullstack(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='fullstack_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_junior(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='junior_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_midweight(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='midweight_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_senior(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='senior_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_python(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='python_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_ruby(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='ruby_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_javascript(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='javascript_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_html(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='html_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_css(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='css_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_react(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='react_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_sass(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='sass_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_vue(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='vue_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_django(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='django_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}
function remove_ror(){
	var arr=[];
	var list=document.getElementsByClassName("filter-block");
	for(var i=0;i<list.length;i++){
		if(list[i].id=='ror_f')
			arr[i]='none';
		else
			arr[i]=list[i].style.display;
	}
	all_filter();
	check_all(arr);
}