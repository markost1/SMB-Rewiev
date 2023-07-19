let rewievs = [{
    name:'Super Mario',
    profesion:'Plumber',
    img:'images/img5.png',
    about:'Created by legendary game designer Shigeru Miyamoto, the character was designed as the protagonist for the 1981 arcade game Donkey Kong. It was a success, and Jumpman quickly became a popular video game character.',

},{
    name:'Luigi',
    profesion:'Carpetner',
    img:'images/img7.png',
    about:'Luigi is a video game character made by Nintendo. The famous game designer, Shigeru Miyamoto, made him. Luigi is the little bit younger but taller fraternal twin brother of the Nintendo mascot, Mario. He is in many games all over the Mario series, almost always as an assistant to his brother Mario.',

},{
    name:'Hammer Bro',
    profesion:'Bad Guy',
    img:'images/img1.png',
    about:'It is a type of Koopa Troopa that walks on two feet and attacks by throwing hammers at the player character. There are different types of Hammer Bro. that are named after the attack that they use, such as the Boomerang Bro, the Fire Bro And The Ice Bro.'
},{
    name:'Bowser',
    profesion:'King of Dark World',
    img:'images/img2.png',
    about:'Bowser is a character in the Super Mario video games. He is the evil Koopa that takes over the Mushroom Kingdom and kidnaps Princess Peach. He is the main enemy to Mario. He has spikes on his back, breathes fire, and is bigger than normal koopas. He was ranked #1 in the Top 50 Video Game Villains of all-time list by the Guinness World Records Gamer Edition 2013'
}]

let i = 0
//solution 1

window.addEventListener("DOMContentLoaded", () => {
    
    document.getElementsByClassName('btns-container')[0].addEventListener('click',(e)=>{
        if(e.target.innerText == ">"){
            i++
            if(i == rewievs.length){
                i=0   
               }
        }else if(e.target.innerText == "<"){
            i--
             if(i < 0){
                i=rewievs.length-1   
    }
        }
     
    document.getElementsByTagName('img')[0].src = rewievs[i].img;
    document.getElementsByClassName('char-name')[0].innerHTML = rewievs[i].name;
    document.getElementsByClassName('prof')[0].innerHTML = rewievs[i].profesion.toUpperCase();
    document.getElementsByClassName('abouts')[0].innerHTML = rewievs[i].about;
    });

  });

  //solution 2

// let next = document.getElementsByClassName('next');
// let prev = document.getElementsByClassName('prev');
// let i = 0
// next[0].addEventListener('click',()=>{
// i++
// if(i == rewievs.length){
//  i=0   
// }

// document.getElementsByTagName('img')[0].src = rewievs[i].img;
// document.getElementsByClassName('char-name')[0].innerHTML = rewievs[i].name;
// document.getElementsByClassName('prof')[0].innerHTML = rewievs[i].profesion.toUpperCase();
// document.getElementsByClassName('abouts')[0].innerHTML = rewievs[i].about;


// })

// prev[0].addEventListener('click',()=>{
//     i--
//     if(i < 0){
//      i=rewievs.length-1   
//     }
//    // console.log(i);
//     document.getElementsByTagName('img')[0].src = rewievs[i].img;
//     document.getElementsByClassName('char-name')[0].innerHTML = rewievs[i].name;
//     document.getElementsByClassName('prof')[0].innerHTML = rewievs[i].profesion.toUpperCase();
//     document.getElementsByClassName('abouts')[0].innerHTML = rewievs[i].about;
//     //console.log(rewievs[i].about);
    
//     })