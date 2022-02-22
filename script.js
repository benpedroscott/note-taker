
// let textModal = noteText.innerHTML;

// let modalDiv = document.createElement("div");
//
// let modalText = document.createElement("p");
//
// let xModal = document.createElement("button");
//
// let modalDivParent = document.querySelector(".modalParentDiv");
//
// let modal = document.querySelector(".modalParentDiv");



function myFunction(){

  let textarea = document.getElementById("textarea").value;
  let randomNumber = "noteButton" + Math.random();

  if(textarea != ""){
    let noteTitle = document.createElement("h2");
    noteTitle.innerHTML = ("Note");

    let noteArea = document.createElement("div");
    noteArea.setAttribute("class", "gridItem");

    let noteText = document.createElement("p");
    noteText.setAttribute("class", "gridText");
    noteText.innerHTML = (textarea);

    noteArea.appendChild(noteTitle);
    noteArea.appendChild(noteText);

    noteButton = document.createElement("button");
    noteButton.setAttribute("class", "noteButton");
    noteButton.setAttribute("id", randomNumber);
    noteButton.setAttribute("onclick", "modalShow(this)");

    noteButton.innerHTML = ("Read the note");
    noteArea.appendChild(noteButton);


    let noteDivContainer = document.getElementById("gridContainer");
    noteDivContainer.appendChild(noteArea);

    // let textModal = textarea;
    //
    // modalDiv.setAttribute("class", "modalDiv");
    //
    // modalText.setAttribute("class", "modalText");
    // modalText.innerHTML = (textModal);
    //
    // xModal;
    // xModal.setAttribute("class", "xModal");
    // xModal.setAttribute("id", "myBtn");
    //
    // modalDiv.appendChild(modalText);
    // modalDiv.appendChild(xModal);
    //
    // modalDivParent;
    // modalDivParent.appendChild(modalDiv);
    //
    // modalDiv.style.display = "none";
    // modalDivParent.style.display = "none";


    document.getElementById("textarea").value = "";
  }

}


function deleteRow(elem){
  elem.parentNode.remove()
}



function modalShow(elem){
  let textModal = elem.previousSibling.innerHTML;

  let modalDiv = document.createElement("div");
  modalDiv.setAttribute("class", "modalDiv")

  let xModal = document.createElement("button");
  xModal.setAttribute("class", "xModal");
  xModal.setAttribute("id", "myBtn");
  xModal.innerHTML = "&times;"

  let modalText = document.createElement("p");
  modalText.setAttribute("class", "modalText");
  modalText.innerHTML = (textModal);

  modalDiv.appendChild(xModal);
  modalDiv.appendChild(modalText);


  let modalDivParent = document.querySelector(".modalParentDiv");
  modalDivParent.appendChild(modalDiv);

  let modal = document.querySelector(".modalParentDiv");

  modalDivParent.style.display = "block";
    xModal.parentNode.style.display = "block";
    console.log("working");

  xModal.onclick = function() {
    modal.style.display = "none";
    xModal.parentNode.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      xModal.parentNode.style.display = "none";
    }

 }
}
