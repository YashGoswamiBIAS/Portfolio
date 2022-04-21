class Screen {
	constructor(obj){
		this.visible = false ;
		obj.style.height = "100%" ;
		obj.style.width = "100%" ;
		console.log("Screen Created");
	this.off = function () {
		obj.style.opacity = 0 ;
		obj.style.zIndex = -1 ;
		obj.style.display = "none";
		this.visible = false ;
	}
	this.on = function () {
		obj.style.zIndex = 5 ;
		obj.style.opacity = 1 ;
		obj.height = "100%" ;
		obj.style.width = "100%" ;
		obj.style.display = "block" ;
		this.visible = true ;
	}
	}
}