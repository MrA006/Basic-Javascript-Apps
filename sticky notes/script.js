
let create = document.querySelector(".create-note");
let textArea = document.querySelector("#text");
let main = document.querySelector("main");

//let startprogram = (head) => {
    
    //let heads = document.querySelectorAll(".sticky-note .head");
    

    //heads.forEach(
    let handleTaskbarMovement = (head) => {

        let initialX, initialY;

        let changePositionNote = (e) => {
                let mouseX = e.clientX;
                let mouseY = e.clientY;
                let note = head.parentNode;

                let offsetX = mouseX - initialX;
                let offsetY = mouseY - initialY;
                
                note.style.left = (note.offsetLeft + offsetX) + 'px';
                note.style.top = (note.offsetTop + offsetY) + 'px';

                initialX = mouseX;
                initialY = mouseY;
                
        }

        let moveNote = (e) => {
            initialX = e.clientX ;
            initialY = e.clientY ;

            document.addEventListener("mousemove", changePositionNote);
        }

        let stopMovingNote = () => {
            document.removeEventListener("mousemove", changePositionNote);

        }


        head.addEventListener("mousedown", moveNote);

        document.addEventListener("mouseup", stopMovingNote);

    }
    //);


//}


create.addEventListener("click", () => {
    textArea.style.display = "block";
});



let createStickyNote = (text) => {
    
    var stickyNote = document.createElement("div");
    stickyNote.className = "sticky-note";
    
    var head = document.createElement("div");
    head.className = "head";
    
    var removeButton = document.createElement("button");
    removeButton.className = "remove-note";
    removeButton.textContent = "X";
    
    var content = document.createElement("div");
    content.className = "content";
    content.textContent = text;
    
    head.appendChild(removeButton);
    stickyNote.appendChild(head);
    stickyNote.appendChild(content);
    
    //console.log(stickyNote);
    main.appendChild(stickyNote);
    
    removeButton.addEventListener("click", () => {
        stickyNote.remove();
    });
    
    handleTaskbarMovement(head);

}

textArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && textArea.style.display === "block") {
        e.preventDefault();
        createStickyNote(textArea.value);
        textArea.style.display = "none";
        textArea.value = "";
    }
})
