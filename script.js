function abc(){
    var tml = gsap.timeline({
        scrollTrigger:{
            trigger:`#home`,
            start:`top top`,
            pin:true,
            scrub:0.15,
            end:`700% top`
        },
    })
    
    
    
    tml
    .from("#overlay-center",{
        left:`90%`
    })
    .to("#circle",{
        scale:0,
    },`a`)
    .to("#btm-1",{
        stagger:.15,
        rotate:`-180deg`,
        ease:Power1
    },`a`)
    .to("#btm-2",{
        delay:.034,
        rotate:`-180deg`,
        ease:Power1
    },`a`)
    .to("#btm-3",{
        delay:.07,
        rotate:`-180deg`,
        ease:Power1
    },`a`)
    .to("#small-circle",{
        scale:0.5,
    },`a`)
    .to("#overlay h1",{
        top:`150%`,
        delay:-.035
    },`a`)
    .from("#purple-circle",{
        top:`140%`,
        scale:0
    },`a`)
    .to("#overlay-center-img",{
        scale:0,
    },`a`)
    .to("#overlay-center h3",{
        opacity:0,
        delay:-.15
    },`a`)
    .to("#overlay>h2",{
        top:`85%`,
        rotate:`0deg`,
        delay:.10
    },`a`)
    .to("#purple-circle",{
        opacity:0,
        delay:-.15
    },`b`)
    .to("#small-circle",{
        scale:0
    },`b`)
    .from("#focus-img",{
        right:`-10%`,
        delay:-.15
     })
    .to("#purple-box",{
        top:0,
        delay:-.60
    })
    .to("#purple-box",{
        top:`-90%`,
        delay:.35
    })
    
    var second = gsap.timeline({
        scrollTrigger:{
            trigger:`#second`,
            start:`top top`,
            pin:true,
            scrub:0.15,
            // markers:true,
            end:`800% top`,
        },
    })
    
    second
    .to(".circle",{
        top:`50%`,
        scale:1,
        stagger:.15
    })
    .to(".circle",{
        left:`50%`,
        scale:1,
    })
    .to(".circle",{
        left:`50%`,
        scale:.5,
    })
    .to("#inner-sec-btm-box2",{
        left:`0%`,
        duration:2
    },`slide`)
    .to(".circle",{
        left:`50%`,
        scale:10,
        duration:2
    },`slide`)
    .to("#count-down1",{
        top:`-110%`,
        delay:-1.7
    },`count-down1`)
    .to("#count-down2",{
        top:`-145%`,
        delay:-1.7
    },`count-down1`)
    .to("#count-down3",{
        top:`-145%`,
        delay:-1.7
    },`count-down3`)
    .to("#second-top>h1",{
        left:`-500%`,
        delay:-.15,
        duration:8
    },`same`)
    .to("#box-gradient",{
        left:`-100%`,
        duration:5,
        delay:-1
    },`same`)
    .to("#inner-sec-btm-box3",{
        left:`0%`,
        duration:2,
        delay:1.2
    },`same`)
    .to("#count-down2",{
        top:`-245%`,
        delay:2
    },`count-down1`)
    .to("#center-text",{
        opacity:0,
        ease: Power1,
        delay:-3
    },`centertext`)
    .to("#center-text2",{
        opacity:1,
        delay:-2.5
    },`centertext`)
    .to("#count-down3",{
        top:`-270%`,
        delay:2
    },`count-down3`)
    .to(".stagger",{
        top:`0%`,
        stagger:.20,
        duration:2,
        delay:-.80
    },`stagger`)
    .to(".blocks",{
        top:`0%`,
        delay:-4
    },`stagger`)
    .to(".lower",{
        left:`-50%`,
    })
    .to(".block1",{
        left:`-75%`,
    },`block`)
    .to(".block2",{
        left:`-75%`,
    },`block`)
    .to(".block3",{
        left:`-75%`,
    },`block`)
    .to(".block4",{
        left:`-75%`,
    },`block`)
    .to(".block5",{
        left:`-75%`,
    },`block`)
    
    gsap.to("#nav3",{
        scrollTrigger:{
            trigger:`#nav3`,
            start:`top 3%`,
            pin:true,
            end:`5000% top`
        }
    })
    gsap.to("#footer3",{
        scrollTrigger:{
            trigger:`#footer3`,
            start:`140% bottom`,
            pin:true,
            end:`5000% top`
        }
    })
    gsap.to("#four-lens",{
        scrollTrigger:{
            trigger:`#four-lens`,
            start:`top bottom`,
            end:`800% top`,
            scrub:.15,
        },
        rotate:`360deg`,
        ease: Power1
    })
    
    
    document.querySelector("#dark-pink").addEventListener("mouseenter",function(){
        document.querySelector("#four").style.backgroundColor = `#794856`
        document.querySelector("#third").style.backgroundColor = `#794856`
        document.querySelector("#five").style.backgroundColor = `#794856`
        document.querySelector("#dark-pink-image>h4").style.backgroundColor = `transparent`
    })
    document.querySelector("#dark-pink").addEventListener("mouseleave",function(){
        document.querySelector("#four").style.backgroundColor = `#FFF7FF`
        document.querySelector("#third").style.backgroundColor = `#FFF7FF`
        document.querySelector("#five").style.backgroundColor = `#FFF7FF`
    
    })
    document.querySelector("#skyblue").addEventListener("mouseenter",function(){
        document.querySelector("#four").style.backgroundColor = `#DEF3FF`
        document.querySelector("#third").style.backgroundColor = `#DEF3FF`
        document.querySelector("#fifth").style.backgroundColor = `#DEF3FF`
        document.querySelector("#vibgyor-cover").style.backgroundColor = `#DEF3FF`
        document.querySelector("#dark-pink-image>h4").style.backgroundColor = `transparent`
    })
    document.querySelector("#skyblue").addEventListener("mouseleave",function(){
        document.querySelector("#four").style.backgroundColor = `#FFF7FF`
        document.querySelector("#third").style.backgroundColor = `#FFF7FF`
        document.querySelector("#fifth").style.backgroundColor = `#FFF7FF`
        document.querySelector("#vibgyor-cover").style.backgroundColor = `#FFF7FF`
    })
    
    gsap.to("#bottom-loop>h2",{
        scrollTrigger:{
        trigger:`#bottom-loop>h2`,
        start:`top bottom`,
        end:`2000% top`,
        scrub:1
        },
        left:`80%`,
        ease: Power1
    })
    gsap.to("#vibgyor-cover",{
        scrollTrigger:{
            trigger:`#vibgyor-cover`,
            start:`top bottom`,
            end:`300% top`,
            scrub:.15
        },
        left:`200%`,
    })
    
    gsap.to("#fifth>h1",{
        scrollTrigger:{
            trigger:`#fifth>h1`,
            start:`top bottom`,
            end:`300% top`,
            scrub:.15,
        },
        left:`50%`,
        ease: Power1
    })
    gsap.to("#fifth>h1>span",{
        scrollTrigger:{
            trigger:`#fifth>h1>span`,
            start:`top bottom`,
            end:`300% top`,
            scrub:.15,
        },
        left:`0%`,
        ease: Power1
    })
    
    
    document.querySelector("#skyblue1").addEventListener("mouseenter",function(){
        document.querySelector("#sixth").style.backgroundColor = `#706993`
        document.querySelector("#fifth").style.backgroundColor = `#706993`
    })
    document.querySelector("#skyblue1").addEventListener("mouseleave",function(){
        document.querySelector("#sixth").style.backgroundColor = `#FFF7FF`
        document.querySelector("#fifth").style.backgroundColor = `#FFF7FF`
    })
    
    gsap.to("#image1",{
        scrollTrigger:{
            trigger:`#image1`,
            start:`top bottom`,
            end:`bottom top`,
            scrub:1
        },
        top:`22%`,
        ease: Power1
    })
    gsap.to("#image3",{
        scrollTrigger:{
            trigger:`#image3`,
            start:`top bottom`,
            end:`bottom top`,
            scrub:1
        },
        top:`60%`,
        delay:-.20,
        ease: Power1
    })
    gsap.to("#center-loop-text>h1",{
        scrollTrigger:{
            trigger:`#center-loop-text>h1`,
            start:`top bottom`,
            end:`bottom top`,
            scrub:1,
        },
        left:`50%`,
        ease: Power1
    })
    gsap.to("#sixth-bottom",{
        scrollTrigger:{
            trigger:`#sixth-bottom`,
            start:`top bottom`,
            end:`200% top`,
            scrub:1,
        },
        scale:1.4,
    })
    
    
    
}
window.addEventListener("DOMContentLoaded",function(){
    abc()
})
