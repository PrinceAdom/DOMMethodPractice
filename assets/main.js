/* button element */
var button = document.createElement("button")
button.append("click me!")
document.body.append(button)
button.style.marginBottom = "10px"
button.style.fontSize = "30px"

var isImgMoved = true
button.addEventListener("click", function(){
    //toggles image
    if(isImgMoved === true){
        img.remove()
        anchor.remove()
        isImgMoved = false
    }
    else {
        document.querySelector("main").appendChild(img)
        document.querySelector("main").appendChild(anchor)
        isImgMoved = true
    }
})

/* var cssSelectorInput = document.createElement("input")
cssSelectorInput.style.fontSize = "30px"
cssSelectorInput.style.marginLeft = "15px"
cssSelectorInput.style.marginRight = "15px"
cssSelectorInput.setAttribute("type", "text")
cssSelectorInput.setAttribute("placeholder", "valid CSS selector...")
document.body.appendChild(cssSelectorInput) */

/* add element buttont */
var addBtn = document.createElement("button")
addBtn.append("create element")
document.body.append(addBtn)
addBtn.style.marginLeft = "10px"
addBtn.style.fontSize = "30px"

/* create a DIV element and append it to the BODY, and should contain the text content provided by the user in the text box. */
addBtn.addEventListener("click", function(){
    var userTextInput = document.createElement("div")
    var userText = addElementInput.value
    userTextInput.append(userText)
    document.body.appendChild(userTextInput)
})

/* element input */
var addElementInput = document.createElement("input")
addElementInput.style.fontSize = "30px"
addElementInput.style.marginLeft = "15px"
addElementInput.setAttribute("type", "text")
addElementInput.setAttribute("placeholder", "type text to create")
document.body.appendChild(addElementInput)

/* main element */
var main = document.createElement("main")
document.body.appendChild(main)


/* img element */
var img = document.createElement("img")
img.setAttribute("class", "image")
img.setAttribute("src", "https://hypebeast.com/image/2020/01/hot-toys-avengers-endgame-iron-man-mark-lxxxc-life-size-collectible-0001.jpg")
img.setAttribute("width", "500px")
img.setAttribute("height", "800px")
document.querySelector("main").appendChild(img)

/* ancho element */
var anchor = document.createElement("a")
anchor.setAttribute("href", "https://en.wikipedia.org/wiki/Iron_Man")
anchor.append("Iron Man")
anchor.style.fontSize = "30px"
document.querySelector("main").appendChild(anchor)

/* script element */
var script_js = document.createElement("script")
script_js.src = ""
document.body.appendChild(script_js)
