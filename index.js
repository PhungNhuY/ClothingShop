window.onload = function () {
    // texts in header
    let temp = 0;
    function runText() {
        let texts = document.getElementsByClassName('promotions_text_detail');
        for(let i=0; i<texts.length; i++){
            texts[i].style.display = "none";
        }
        texts[temp].style.display = "block";
        temp = (temp + 1) % 3;
        setTimeout(runText, 2000);
    }
    runText();

    
}
//
function showDes(id1, id2){
    document.getElementById(id1).style.display = "none";
    document.getElementById(id2).style.display = "block";
}


function hideDes(id1, id2){
    document.getElementById(id1).style.display = "block";
    document.getElementById(id2).style.display = "none";
}


let current_index = 0;
function moveToRight(){
    if(current_index<7){
        for(let i=0;i<12;i++){
            id = "slider_element_" + i;
            document.getElementById(id).style.display = 'none';
        }
        
        current_index++;
        for(let i=current_index;i<current_index+5;i++){
            id = "slider_element_" + i;
            console.log(i);
            document.getElementById(id).style.display = 'block';
        }
    }
}

function moveToLeft(){
    if(current_index>0){
        for(let i=0;i<12;i++){
            id = "slider_element_" + i;
            document.getElementById(id).style.display = 'none';
        }
        
        current_index--;
        for(let i=current_index;i<current_index+5;i++){
            id = "slider_element_" + i;
            console.log(i);
            document.getElementById(id).style.display = 'block';
        }
    }
}

$(document).ready(function(){
    $('.grid').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:null,
        nextArrow:null,
        draggable: true,
    });
});