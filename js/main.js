// First Example

// gsap.to(".logog",{duration : 2 , x : 300,backgroundColor:"#2596be",borderRadius:"20%", border:"5px solid #fff",ease:"back"});

// Second Example

// gsap.set(".logog, .new",{transformOrigin:"50% 50%"})
// gsap.to(".logog, .new",{duration:20, rotation:360})

// var myObject = {rotation: 0};

// gsap.to(myObject, {duration:20, rotation:360, onUpdate: function() {
//     console.log(myObject.rotation)
// }})

// Third Example

gsap.from(".logog, .new",{duration:5, opacity:0, scale: 0.3, ease:'back'})

// creating random animation circle method one
// gsap.from(".circle",{duration:1, opacity:0, y:()=>Math.random()*400-200, stagger:0.125})
// creating random animation circle method two
gsap.from(".circle",{duration:1, opacity:0, y:()=>Math.random()*400-200, stagger:0.125})