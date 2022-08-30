let container = document.getElementById('container');
let slider = document.getElementById('wowslider-container1');
let gpVideo = document.getElementById('gp-video');
let videoHtml = `<video src="resources/gp.mp4" muted="false" autoplay="autoplay" controls controlslist="nofullscreen " id="gp-video"
class="gp-video" onended="endOpearation()"></video>`

let slideHtml = `<div id="wowslider-container1">
<div class="ws_images">
    <ul>
        <li><a href="http://wowslider.net"><img src="data1/images/1_1.jpg" alt="slider jquery" title=""
                    id="wows1_0" /></a></li>
        <li><img src="data1/images/2.jpg" alt="" title="" id="wows1_1" /></li>
    </ul>
</div>
</div>
<script type="text/javascript" src="engine1/wowslider.js"></script>
    <script type="text/javascript" src="engine1/script.js"></script>`
setTimeout(() => {
    container.innerHTML = videoHtml;

}, 6500);

// vidElem.addEventListener("ended", function () {
//     vidElem.currentTime = 2.5;
//     vidElem.play();
// }, false);
// setTimeout(() => {
//     alert("ekhon");
//         document.getElementById('check').innerHTML=`<video src="resources/gp.mp4" autoplay="autoplay" controls controlslist="nofullscreen " id="gp-video"
//     class="gp-video"></video>`;
    
//     }, 3500);

function endOpearation(){
    // let gpVideo = document.getElementById('gp-video');
    // gpVideo.currentTime = 2.5;
    // gpVideo.play();
    container.innerHTML = slideHtml;

}