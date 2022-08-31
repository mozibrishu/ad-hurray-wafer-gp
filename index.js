let container = document.getElementById('container');
let slider = document.getElementById('wowslider-container1');
let gpVideo = document.getElementById('gp-video');
let originalVideo = document.getElementById('myVideo');
let videoHtml = `<video src="resources/gp.mp4" muted="false" autoplay="autoplay" controls controlslist="nofullscreen " id="gp-video"
class="gp-video" onended="endOpearation()"></video>`

startOperation();

// vidElem.addEventListener("ended", function () {
//     vidElem.currentTime = 2.5;
//     vidElem.play();
// }, false);
// setTimeout(() => {
//     alert("ekhon");
//         document.getElementById('check').innerHTML=`<video src="resources/gp.mp4" autoplay="autoplay" controls controlslist="nofullscreen " id="gp-video"
//     class="gp-video"></video>`;

//     }, 3500);

async function endOpearation() {
    // let gpVideo = document.getElementById('gp-video');
    // gpVideo.currentTime = 0;
    // gpVideo.play();
    originalVideo.style.opacity = 0;
    originalVideo.innerHTML = '';
    slider.style.display = 'block';
    startOperation();
}


async function startOperation() {
    await setTimeout(() => {
        originalVideo.innerHTML = videoHtml;
        originalVideo.style.opacity = 1;
        slider.style.display = 'none';
    }, 8000);
}