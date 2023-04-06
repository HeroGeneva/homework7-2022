var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolume();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate -= 0.1;
	console.log("New speed is: " + video.playbackRate.toFixed(1));
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate += 0.1 * video.playbackRate;
	console.log("New speed is: " + video.playbackRate.toFixed(1));
});

// document.querySelector("#skip").addEventListener("click", function() {
//     console.log("Skip Ahead");

//     if (video.currentTime + 10 < video.duration) {
//       video.currentTime += 10;
//     } else {
//       video.currentTime = 0;
//     }

//     console.log("Current Time: ", video.currentTime);
// });

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");

    if (video.currentTime + 10 < video.duration) {
      video.currentTime += 10;
    } else {
      video.currentTime = 0;
    }
    video.play();

    console.log("Current Time: ", video.currentTime);
});

// document.querySelector("#mute").addEventListener("click", function() {
// 	if (video.muted == false) {
// 		video.muted = true;
// 		muteButton.innerHTML = "Unmute";
// 		console.log("Muted");
// 	} else {
// 		video.muted = false;
// 		muteButton.innerHTML = "Mute";
// 		console.log("Unmuted");
// 	}
// });

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		this.innerHTML = "Mute"; 
		console.log("Unmuted");
	}
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});


function updateVolume() {
    var volume = document.querySelector("#volume");
    var slider = document.querySelector("#slider");

    video.volume = slider.value / 100;
    volume.innerHTML = slider.value + "%";
 
    slider.value = video.volume * 100;
}

