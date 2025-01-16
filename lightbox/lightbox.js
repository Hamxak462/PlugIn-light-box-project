// let include the html code in js
function includehtmlcode(){
    let html = ' <div id="vis_popup"><span id="npop" onclick="closePopup()"><img  src="images/close.jpg" alt=""></span><img id="leftarrow" src="images/L_arrow.png" alt=""><img id="rightarrow" src="images/R-arrow.png" alt=""><img id="mainpopimage" src="images/mac1.jpg" alt=""></div>'

    let popdiv = document.createElement('div');
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild);
}

let img;
let current;

function imagePopupInit(target){
    // select all images with class target
    img = document.getElementsByClassName(target);


    for(i = 0; i < img.length; i++){
        img[i].style.cursor = "pointer"
        // let add eventListner on all images...........
        img[i].addEventListener('click', function(){
            document.getElementById('mainpopimage').src = this.src;
            document.getElementById("vis_popup").style.display = 'block';
            checkArrow();
        })
    }
    
    includehtmlcode();
    

    // add event listner for next button
    document.getElementById('rightarrow').addEventListener('click', function(){
        nextimg();
    })

    // add event listner for prev button
    document.getElementById('leftarrow').addEventListener('click', function(){
        previmg();
    })
    checkArrow()

}

function closePopup(){
    document.getElementById('mainpopimage').src = "";
    document.getElementById('vis_popup').style.display = "none";
}

// next image 
function nextimg(){
    getCurrentImage();
    current++;
    document.getElementById('mainpopimage').src = img[current].src;
    checkArrow()
    
}

// prev image
function previmg(){
    getCurrentImage();
    current--;
    document.getElementById('mainpopimage').src = img[current].src;
    checkArrow();
    
}


function getCurrentImage(){
    for(let i = 0; i < img.length; i++){
        if(img[i].src == document.getElementById('mainpopimage').src){
            current = i;
        }
    }
}


function checkArrow(){
    getCurrentImage();
    if(current == "0"){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block'

    }
    else if(current == img.length -1){
        document.getElementById('rightarrow').style.display = 'none'
        document.getElementById('leftarrow').style.display = 'block'

    }
    else{
        document.getElementById('rightarrow').style.display = 'block'
        document.getElementById('leftarrow').style.display = 'block'
    }
}