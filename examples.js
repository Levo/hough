/*
	4 possible images to choose
	Each image has a hard coded threshold for the hough transform peak detection
	BorW is 0 or 255 because some edges are white and others are black. 
*/
var images = {
	"shape":{
		threshold: 25,
		BorW:255,
		fileName: "shape.gif"

	},
	"wiki":{
		threshold: 360,
		BorW:0,
		fileName: "wiki.png"

	},
	"pentagon": {
		threshold: 35,
		BorW:0,
		fileName: "Pentagon.png"

	},
	"cross": {
		threshold: 45,
		BorW:0,
		fileName: "cross.png"

	}

};