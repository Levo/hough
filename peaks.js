function findPeaks(){

	var N = 0; 
	var E = 0; 
	var W = 0; 
	var S = 0; 
	var C = 0;

	var peaks = [];
	var peakCount = 0;


	/*
		Use FA array
	*/
	for(var y = 1; y < ((maxRho*2)+1)-1; y++){
		for(var x = 1; x < totalDegrees-1; x++){

			C = FA[y][x];
			if(C >= 300){
				N = FA[y-1][x];
				E = FA[y][x+1];
				W = FA[y][x-1];
				S = FA[y+1][x];

				if(W <= C && N <= C && E <= C && S <= C){
					var rt = {rho: 0, theta: 0};
					rt.rho = y - maxRho;
					rt.theta = x;
					peaks[peakCount] = rt;
					peakCount++;
				}
			}


		}
	}


	for(var i = 0; i < peaks.length; i++){
		var peak = peaks[i];
		var t = peak.theta * Math.PI/180;
		var r = peak.rho;
		context.beginPath();
		context.strokeStyle = "red";
		context.moveTo(0,-r/Math.sin(t));
		context.lineTo(imageWidth,  (-imageWidth*Math.cos(t)/Math.sin(t))	- (r/Math.sin(t)));
		context.stroke();
		context.closePath();
	}


	console.log(peaks);


	return peaks;
	
} 
