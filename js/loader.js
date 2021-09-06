var current_frame, total_frames, path, length, handle, circuitry;
			circuitry = document.getElementById('circuitry').cloneNode(true);
			var init = function() {
			  current_frame = 0;
			  total_frames = 120;
			  path = new Array();
			  length = new Array();
			  for(var i=0; i<101;i++){
				path[i] = document.getElementById('i'+i);
			    l = path[i].getTotalLength();
			    length[i] = l;
			    path[i].style.strokeDasharray = l + ' ' + l;
			    path[i].style.strokeDashoffset = l;
			    path[i].style.strokeWidth="3";
				path[i].style.stroke="#00ABED";
				path[i].style.fill="none";
				path[i].style.strokeLinecap="round";
				path[i].style.strokeLinejoin="round";
				path[i].style.strokeMiterlimit="10";
			  }
			  handle = 0;
			}

			var draw = function() {
				var progress = current_frame/total_frames;
				if (progress > 1) {
					window.cancelAnimationFrame(handle);
				} else {
					current_frame++;
					for(var j=0; j<path.length;j++){
						path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
					}
					handle = window.requestAnimationFrame(draw);
				}
			};
			init();
			draw();

			var rerun = function() {
			  var old = document.getElementsByTagName('div')[0];
			  old.parentNode.removeChild(old);
			  document.getElementsByTagName('body')[0].appendChild(circuitry);
			  init();
			  draw();
			};