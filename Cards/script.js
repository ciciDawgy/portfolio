const book = document.querySelector("#book");
const fronts = document.querySelectorAll('.front');
const backs = document.querySelectorAll('.back');
const pages = document.querySelectorAll('.page');
const flipped = document.querySelector('.flipped');
const myVideo = document.getElementById('myVideo');
const automat = document.querySelector('.automat');
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

const page1 = document.querySelector("#p1");
const page2 = document.querySelector("#p2");
const page3 = document.querySelector("#p3");
const page4 = document.querySelector("#p4");
const page5 = document.querySelector("#p5");
const page6 = document.querySelector("#p6");
const page7 = document.querySelector("#p7");
const page8 = document.querySelector("#p8");
const page9 = document.querySelector("#p9");

// Event Listener
/*function vidPlay() {
   return myVideo.play();
}*/

window.addEventListener('load', (e) => {
    myVideo.play();
});

/*if (automat.clicked = true) {
    setTimeout(goNextPage, 500);
}
 else if (setTimeout(goNextPage, 3000)) {
    setTimeout(goNextPage, 3000);
} else if (
    setTimeout(goNextPage, 4500);
) else {
    console.log('failed');
}*/

fronts.forEach(front => {
    front.addEventListener('click', goNextPage)
})

backs.forEach(back => {
    back.addEventListener('click', goPrevPage)
})


prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


/*setTimeout(addFlipped, 18000);*/


/*function myVid() {
  myVideo.play();
}*/



// Business Logic
let currentLocation = 1;
let numOfPapers = 12;
let maxLocation = numOfPapers + 1;


/*function openBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translate(100%)"
    } else {
        book.style.transform = "translateX(0%)";
    }
}*/
   /* book.style.transform = "translateX(50%)";*/
    /*nextBtn.style.transform = "translateX(180px)";*/

    function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    } 
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                    page1.classList.add("flipped");
                    page1.style.zIndex = 1;
            case 2:
                if(myVideo.currentTime = 20) {
                    page2.classList.add("flipped"); 
                    page2.style.zIndex = 2;
                }
                break;
            case 3:
                if(myVideo.currentTime = 68) {
                page3.classList.add("flipped");
                page3.style.zIndex = 3;
                }
                break;
            case 4:
                if(myVideo.currentTime = 117) {
                page4.classList.add("flipped");
                page4.style.zIndex = 4;
                }
                break;
            case 5:
                if(myVideo.currentTime = 183) { 
                page5.classList.add("flipped");
                page5.style.zIndex = 5;
                }
                break;
            case 6:
                if(myVideo.currentTime = 233) {
                page6.classList.add("flipped");
                page6.style.zIndex = 6;
                }
                break;
            case 7:
                if (myVideo.currentTime = 273) {
                page7.classList.add("flipped");
                page7.style.zIndex = 7;
               }
               break;
            case 8:
                if (myVideo.currentTime = 428) {
                page8.classList.add("flipped");
                page8.style.zIndex = 8;
                }
                break;
            case 9:
                if (myVideo.currentTime = 463) {
                myVideo.currentTime = 0;
                page9.classList.add("flipped");
                page9.style.zIndex = 9;
                }
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}



function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                page1.classList.remove("flipped");
                page1.style.zIndex = 22;
                break;
            case 3:
                if(myVideo.currentTime = 0) {
                page2.classList.remove("flipped");
                page2.style.zIndex = 20; }
                break;
            case 4:
                if(myVideo.currentTime = 20) {
                page3.classList.remove("flipped");
                page3.style.zIndex = 19; }
                break;
            case 5:
                if(myVideo.currentTime = 68) {
                page4.classList.remove("flipped");
                page4.style.zIndex = 18; }
                break;
            case 6:
                if(myVideo.currentTime = 117) {
                page5.classList.remove("flipped");
                page5.style.zIndex = 17;
                }
                break;
            case 7:
                if(myVideo.currentTime = 183) {
                page6.classList.remove("flipped");
                page6.style.zIndex = 16;
                }
                break;
            case 8:
                if (myVideo.currentTime = 233) {
                page7.classList.remove("flipped");
                page7.style.zIndex = 15;
                }
                break;
            case 9:
                if (myVideo.currentTime = 273) {
                page8.classList.remove("flipped");
                page8.style.zIndex = 14; }
                break;
            case 10:
                openBook();
                if (myVideo.currentTime = 428) {
                page9.classList.remove("flipped");
                page9.style.zIndex = 13;
                }
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }

}


/*
function audioCont() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                paper1.fronts.myVideo.play();
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}
*/

/*document.querySelector('body').addEventListener('load');
setTimeout(goNextPage, 1800);*/

/*fronts.forEach(front => {
    front.addEventListener('click', () => {
        front.classList.add('flipped');
    })
    
});*/