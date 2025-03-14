
var popoverly = document.querySelector(".overly")
var poptext = document.querySelector(".text")
var popbut = document.querySelector(".but")
var boxy = document.querySelector(".boxy")
var navbar = document.getElementById("navbar")
var bu = document.querySelector(".bu")

popbut.addEventListener("click",function(event){
    popoverly.style.display="block"
    poptext.style.display="block"
    updateOverlayHeight();
})

var butt = document.querySelector(".butt")
butt.addEventListener("click",function(event){
    event.preventDefault()
        bname.value = "";
    aname.value = "";
    dicp.value = "";
    popoverly.style.display="none"
    poptext.style.display="none"
})

var bname = document.querySelector(".bname")
var aname = document.querySelector(".aname")
var dicp = document.querySelector(".discription")
var butto = document.querySelector(".butto")
butto.addEventListener("click",function(event){
    event.preventDefault()
        if (!bname.value.trim() || !aname.value.trim() || !dicp.value.trim()) {
        alert("Please fill in all fields!");
        return;
    }
    var div = document.createElement("div")
    div.setAttribute("class","box")
    div.innerHTML=`<span class="close" onclick="del(event)">&times;</span>
        <br>
        <h2>${bname.value}</h2>
        <br>
        <h2>${aname.value}</h2>
        <br>
        <p>${dicp.value}</p>`
    boxy.append(div)
       setTimeout(() => {
        div.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    updateOverlayHeight();
    bname.value = "";
    aname.value = "";
    dicp.value = "";
})
function del(event)
{
    event.target.parentElement.remove()
}
boxy.setAttribute("contenteditable","true")
bu.addEventListener("click",function(event){
    event.preventDefault()
    bname.value = "";
    aname.value = "";
    dicp.value = "";
})
function updateOverlayHeight() {
    popoverly.style.height = `${document.body.scrollHeight}px`;
}
// var poptext = document.querySelector(".text");

// poptext.addEventListener("click", function (event) {
//     event.stopPropagation(); // Prevents bubbling up to parent divs
// });
// document.addEventListener("keydown", function (event) {
//     if (event.target.classList.contains("box") && event.key === "Enter") {
//         event.preventDefault(); // Stop new <div> creation
//     }
// });
// document.addEventListener("keydown", function (event) {
//     if (event.target.classList.contains("box") && event.key === "Enter") {
//         event.preventDefault();
//         document.execCommand("insertLineBreak"); // Inserts a line break instead of a new div
//     }
// });



