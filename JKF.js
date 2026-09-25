const counters = document.querySelectorAll(".div2bi span");
const countainer = document.querySelector(".div2bi");
let activated = false;

window.addEventListener("mouseover", ()=>{
    if (activated === false) {
        counters.forEach(counter => {
            counter.innerText = 0;

            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if (count < target){
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);

                } else{
                    counter.innerText = target;

                }
            }
            updateCount()
            activated = true
        })
    }
})

const images = ["images/w66.jpg", "images/w89.jpg", "images/work 2.jpg", "images/w87.jpg", "images/w69.jpg", "images/w81.jpg", "images/w71.jpg", "images/w13.jpg", "images/work 4.jpg", "images/w65.jpg" ];
let currentIndex = 0;

function changeImage(){
    currentIndex = (currentIndex +1)%
    images.length;

    document.getElementById("img1").src = images[currentIndex];
    document.getElementById("img4").src = images[currentIndex];

}
setInterval(changeImage, 3000)

const animated = document.querySelectorAll(".animate");

animated.forEach(animate => {
    let activated = false;
    const animation = animate.classList[1];
    animate.classList.remove(animation);
    window.addEventListener("scroll", () =>{
        if(pageYOffset >  animate.offsetTop - window.innerHeight /1.5
            && activated ===false){
                animate.classList.add(animation);
                activated = true;
            }
            else if(pageYOffset <  animate.offsetTop - window.innerHeight /1.5
                && activated === true){
                    animate.classList.remove(animation);
                activated = false;
                }
    })

})
const year = new Date().getFullYear();

document.getElementById("div6h").textContent = `© ${year} Jay Klassic Furniture. All Rights Reserved.`;








/*  const signIn = document.querySelector(".si");
        const submit =  document.querySelector(".submit");
        
        function toggleClass(){
            this.classList.toggle('active');
        }
        
        function addClass(){
            this.classList.add('finished');
        }
        
        signIn.addEventListener('click', toggleClass);
        signIn.addEventListener('transitionend', toggleClass);
        signIn.addEventListener('transitionend', addClass);*/
  


















/*const suscribe = document.getElementById("button11");
suscribe.onclick = doSomething;

function doSomething (){
    alert("You have successfully suscribed our weekly Emails");
}





const get = document.getElementById("button1");
get.addEventListener("mouseover", changeColor);
get.addEventListener("mouseleave", dontChangeColor);

function changeColor(){
    company.style.backgroundColor = "yellow";
    company.style.borderRadius = "10px";
}
function dontChangeColor (){
    company.style.backgroundColor = "black";
}















/*const company = document.getElementsByClassName(".middleNav")
//company.onmouseover = changeColor;
//company.onmouseout = dontChangeColor;
company.addEventListener("mouseenter", changeColor);
company.addEventListener("mouseleave", dontChangeColor);

company.onclick = openWebsite;

function openWebsite(){
   company.window = open("https://google.com")
}

 
 
 
 const submit = document.getElementById("button1");
submit.onclick = doSomething;

const suscribe = document.getElementById("button2");
suscribe.onclick = doSomething;

function doSomething (){
    alert("You have successfully suscribed our weekly Emails");
}

function changeColor(){
    company.style.backgroundColor = "yellow";
    company.style.borderRadius = "10px";
}
function dontChangeColor (){
    company.style.backgroundColor = "black";
}





/*submit.innerHTML = 'red';
submit.style.backgroundColor = 'green';
submit.style.color = 'blue';*/

