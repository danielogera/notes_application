const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes(){
	notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
	localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
	let inputBox = document.createElement("p");
	let img = document.createElement("img");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable", "true");
	img.src = "images/circle.png";
	notesContainer.appendChild(inputBox).appendChild(img);
	updateStorage();
});

notesContainer.addEventListener("click", function(e) {
	if (e.target.tagName === "IMG") {
		e.target.parentElement.remove();
		updateStorage();
	} else if (e.target.tagName === "P") { // Corrected the tag name comparison and fixed syntax
		let inputBox = e.target;
		inputBox.onkeyup = function() {
			updateStorage();
		};
	}
});

// Call showNotes() to display any existing notes when the page loads
showNotes();
document.addEventListener("keydown", event =>{
	if( event.key === "Enter"){
		document.execCommand("insertLineBreak");
		event.preventDefault();
	}

});