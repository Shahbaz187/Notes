const button = document.querySelector("#btn")
const container = document.querySelector("#container")
const saveNotes =() =>{
const notes = document.querySelectorAll(".note textarea");
console.log(notes);
const data  = [];
notes.forEach(
(note) => {
data.push(note.value)
}
)
//console.log(data)
localStorage.setItem("notes", JSON.stringify(data))
}

button.addEventListener("click",
function () {
    addnote()
}
)
const addnote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
   <div class="tool_box">
   <i class="save fa-solid fa-floppy-disk"></i>
   <i class="trash fa-sharp fa-solid fa-trash-can"></i>
</div>
<textarea placeholder="Enter You Text">${text}</textarea>
   `;
   note.querySelector(".trash").addEventListener("click",
   function () {
    note.remove()
    saveNotes( )
   } )
   note.querySelector(".save").addEventListener("click",
   function () {
    saveNotes( )
   } )
   container.appendChild(note);
   saveNotes( )
}

    (
    function () {
        const lsnote = JSON.parse(localStorage.getItem("notes"))
        lsnote.forEach(
            (lsnote) => {
            addnote(lsnote)
        });
        if (lsnote.length === 0) {
            localStorage.removeItem("notes")
        } else {
            // addnote()
        }
    }
    )()