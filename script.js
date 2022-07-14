const img = document.createElement("img")
let info = (id) => {
    // let img = document.createElement("img")
    // img.id="img"+id
    switch(id){
        case "p1": {
            img.src = "./assets/Player6.png"
            break
        }
        case "p2": {
            img.src = "./assets/Player5.png"
            break
        }
        case "p3": {
            img.src = "./assets/Player4.png"
            break
        }
        case "p4": {
            img.src = "./assets/Player3.png"
            break
        }
        case "p5": {
            img.src = "./assets/Player2.png"
            break
        }
        case "p6": {
            img.src = "./assets/Player1.png"
            break
        }
        case "p7": {
            img.src = "./assets/Player1-1.jpg"
            img.style.bottom="40px"
            img.style.right="110px"
            break
        }
        case "p8": {
            img.src = "./assets/Player1-2.jpg"
            img.style.bottom="40px"
            img.style.right="50px"
            break
        }
        case "p9": {
            img.src = "./assets/Player1-3.jpg"
            img.style.bottom="40px"
            img.style.left="550px"
            break
        }
        case "p10": {
            img.src = "./assets/Player1-4.jpg"
            img.style.bottom="40px"
            img.style.left="600px"
            break
        }
        case "p11": {
            img.src = "./assets/Player1-5.jpg"
            img.style.bottom="40px"
            img.style.left="650px"
            break
        }
    }
    
    img.style.position= "absolute"
    document.getElementById(id).appendChild(img)
    let i = 0
    let f = setInterval(() => {
        i++
        document.getElementById(id).removeChild(img)
        if(i>0)
        clearInterval(f)
    
   }, 1500)
}


// let vanish = (id) => {
//     img = document.createElement("img")
//     document.getElementById(id).removeChild()
//     // img = document.getElementById("img"+id)
//     // img.style.display="none"
    
//not needed
//     // let img1 = document.getElementById(prevID)
//     // console.log("Leave Prev")
//     // console.log(prevID)
//     // img1.style.display="none"
// }



// const isHover = e => e.parentElement.querySelector(':hover') === e;  

// let img = document.createElement("img")
// img.src = "./assets/Player6.png"
// img.style.position= "absolute"

// const myElement = document.getElementById('p1');

// document.addEventListener('mousemove', function checkHover() {
//   const hovered = isHover(myElement);
//   if (hovered !== checkHover.hovered) {
//     if(hovered){
//         document.getElementById('p1').appendChild(img)
//     }
//     else{
//         document.getElementById('p1').removeChild(img)
//     }

//     // console.log(hovered ? 'hovered' : 'not hovered');
//     checkHover.hovered = hovered;
//   }
// });