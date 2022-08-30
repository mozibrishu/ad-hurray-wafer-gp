let container = document.getElementById('container');
let slider = document.getElementById('wowslider-container1');
let gpVideo = document.getElementById('gp-video');
let videoHtml = `<video src="resources/gp.mp4" muted="false" autoplay="autoplay" controls controlslist="nofullscreen " id="gp-video"
class="gp-video"></video>`
setTimeout(() => {
    container.innerHTML = videoHtml;

}, 3500);

// setTimeout(() => {
//     alert("ekhon");
//         document.getElementById('check').innerHTML=`<video src="resources/gp.mp4" autoplay="autoplay" controls controlslist="nofullscreen " id="gp-video"
//     class="gp-video"></video>`;
    
//     }, 3500);