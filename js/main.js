// =================================
//Add Media Element Player
// =================================
$('video, audio').mediaelementplayer({
    features: ['playpause', 'current', 'tracks', 'progress', 'skipback', 'volume', 'fullscreen'],
    startLanguage: 'en',
    skipBackInterval: 4
  });

// =================================
// Adding Responsive Transcript 
// =================================

//Get Element
const video = document.getElementsByTagName('video')[0];
const span = document.querySelectorAll('span');


//Highlighting text
video.ontimeupdate = () => {
	const vidTrack = video.currentTime;

	for (let i = 0;i < span.length; i += 1){
		if(vidTrack > span[i].getAttribute("data-start") &&
		vidTrack < span[i].getAttribute("data-end")){
			span[i].style.color = 'rgb(207, 78, 100)';
		}
		else{
			span[i].style.color = '';
		}
	}
};


//Script event listener
for (i = 0; i < span.length; i += 1){
	span[i].addEventListener('click', (e) => {
		video.currentTime = e.target.getAttribute('data-start');
		video.play();
	});
}