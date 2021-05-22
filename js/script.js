function validateForm(){
    // document.getElementById("form").style.transform="rotateX(360deg)";

    console.log(document.querySelectorAll("#form>*"));
    document.querySelectorAll("#form>*").forEach((each)=>{
        each.style.opacity="0";
    })

    setTimeout(()=>{
        document.querySelector("#form>h4").innerHTML = "The request has been sent."
        document.querySelector("#form>h4").style.opacity="1";
    },500)



}

function godown(){
    console.log("heya")
    document.querySelector("#godown>img").style.transform="translateY(100%)";
    document.querySelector("#godown>img").style.opacity="0";

    setTimeout(()=>{
        document.getElementById("secondSection").scrollIntoView({block: "center"})
    },300)

    setTimeout(()=>{
        document.querySelector("#godown>img").style.transform="translateY(0%)";
        document.querySelector("#godown>img").style.opacity="1";
    },600)
}

enterView({
    selector: '#secondSection',
    enter: function(el) {
        el.classList.add('enteredInView');
    }
});

enterView({
    selector: '.tick',
    enter: function(el) {
        el.classList.add('enteredInView');
    }
});

enterView({
    selector: '#fourthSection',
    enter: function(el) {
        el.classList.add('enteredInView');
    }
});

enterView({
    selector: '#fifthSection',
    enter: function(el) {
        el.classList.add('enteredInView');
    }
});