const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");


function showNotes(){
	notesContainer.innerHTML = localStorage.getItem("notes");
}
// local storage (storing data in the browser)

function updateStorage(){
	localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", ()=>{
	let inputBox = document.createElement("p");
	let img = document.createElement("img");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable", "true");
	img.src = "images/circle.png";
	notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click", function(e){
	if(e.target.tagName === "IMG"){
		e.target.parentElement.remove();
		updateStorage();
	}
	else if(e.target.tagName == "p"{
		notesContainer = document.querySelectorAll(".inputBox");
		notes.forEach(nt => {
			nt.onkeyup = function(){
				updateStorage();
			}
		})
	})

})


