class Screen {
	constructor(obj){
		obj.setAttribute("style",`
	height:100%;
	width:100%;`);
		console.log("Screen Created");
	this.off = function () {
		obj.setAttribute("style","opacity:0;z-index:-1;");
	}
	this.on = function () {
		obj.setAttribute("style",`opacity:1;
		z-index:0;
		height:100%;
		width:100%;`);
	}
	}
}