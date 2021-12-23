/* [ Helpers ] */

// Bind classname to an event listener to trigger a function
function bindClassToFunction(className, eventListener, functionName){
    var dots = document.getElementsByClassName(className);
    for(var i = 0; i < dots.length; i++) {
        (function(index) {
          dots[index].addEventListener(eventListener, functionName);
        })(i);
      }
  }


/* [ STORYVIEW SWITCH ] */
bindClassToFunction('sv__toggle', 'click', toggleSwitch);

function toggleSwitch(){
    var anim = this.parentNode.getElementsByClassName('sv__animation')[0];
    if(this.className.slice(-2) == 'av'){
        setSwitch(anim, 'av');
        svShow('article')
    }else{
        setSwitch(anim, 'sv');
        svShow('story');
    }
}

function svShow(type){
    var story = document.getElementsByClassName('storyview__container')[0];
    var article = document.getElementsByClassName('otherview__container')[0];

    if(type == 'story'){
        article.className += " nodisp";
        story.className = story.className.replace(' nodisp', '');
    }else{
        story.className += " nodisp";
        article.className = article.className.replace(' nodisp', '');
    }
}

function setSwitch(svs, to){
    svs.className = svs.className.replace(' sv__start-sv', '');
    svs.className = svs.className.replace(' sv__start-av', '');
    svs.className += ' sv__start-' + to;
}

/* [ STORYVIEW IMAGE SLIDER ] */

bindClassToFunction('sv__btn-next', 'click', slideNext);
bindClassToFunction('sv__btn-prev', 'click', slidePrev);
bindClassToFunction('sv__broad-click-next', 'click', slideNext);
bindClassToFunction('sv__broad-click-prev', 'click', slidePrev);

function slideNext(){
    slider(1, this.parentElement.id);
}

function slidePrev(){
    slider(-1, this.parentElement.id);
}

function slider(i, parentId){
    changeBgPicture(i, parentId);
}

function changeBgPicture(i, parentId){
    var p = document.getElementById(parentId);
    let c = p.getAttribute("sv-current-img");
    let currentRow = parseInt(parentId.replace("sv__item-",""));
    let imgs = imgMatrix[currentRow];
    let nextImg = parseInt(c) + i;
    console.log("Nextimg: " + nextImg);
    if(nextImg == imgs.length){
        // Go back to first
        nextImg = 0;
    }
    if(nextImg < 0){
        // Go to last
        nextImg = imgs.length - 1;
    }
    p.style.backgroundImage = "url('" + imgs[nextImg] + "')";
    p.setAttribute("sv-current-img", nextImg);
    var indicators = p.getElementsByClassName('storyview__indicator');
    for(var i = 0; i < indicators.length; i++) {
        (function(index) {
            if(index == nextImg){
                indicators[index].className += " sv__indicator-active";
            }else{
                indicators[index].className = indicators[index].className.replace(" sv__indicator-active", "");
            }
        })(i);
     }
}