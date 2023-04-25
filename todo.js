
//create new div of Card
function createCardDiv(){
  const input = document.getElementById("todo-input");
  const targetDiv = document.querySelector(".swim-lane-card"); 
  const value = input.value;
  
  var errorLabelElement = document.getElementById('task-empty-info');
  if (value==null || value=="") {
    errorLabelElement.style.display = 'block';
    return false;
  } else {
    errorLabelElement.style.display = 'none';
  }

  // Create a new div element with the class "card"
  const card = document.createElement("div");
    card.classList.add("card", "mb-3", "bg-light", "task");
    card.setAttribute("draggable", "true");
    
    const cardDiv = document.createElement("div");
      cardDiv.classList.add("card-body", "p-3");

      const newSpan = document.createElement("span");
        newSpan.classList.add("badge", "badge-danger");
        newSpan.textContent="New";
      cardDiv.appendChild(newSpan);

      // Create a new paragraph element with the id "card-data" and add text content
      const paragraph = document.createElement("p");
        paragraph.id = "card-data";
        paragraph.classList.add("card-data");
        paragraph.innerText = value;
      cardDiv.appendChild(paragraph);

      // Create a new div element with the class "float-right mt-n1" for the image
      const imageDiv = document.createElement("div");
        imageDiv.classList.add("float-right", "mt-n1");

        // Create a new image element with the src, width, and height attributes
        const image = document.createElement("img");
          image.src = "https://bootdey.com/img/Content/avatar/avatar1.png";
          image.width = 32;
          image.height = 32;
          image.classList.add("rounded-circle");
          image.alt = "Avatar";
        imageDiv.appendChild(image);
      cardDiv.appendChild(imageDiv);

      // Create a new button element with the class "btn btn-outline-primary btn-sm" for viewing the task
      const button = document.createElement("button");
        button.type = "button";
        button.classList.add("btn", "btn-outline-primary", "btn-sm","view-details");
        button.textContent = "View Task";
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#viewModal");
      cardDiv.appendChild(button);

      const iconDiv = document.createElement("div");
        iconDiv.classList.add("d-flex", "align-items-center","mt-2");

        const favSpan = document.createElement("span");
          favSpan.classList.add("m-1");
          const iconFav = document.createElement("i");
            iconFav.classList.add("fa", "fa-star", "favourite-card");
          favSpan.appendChild(iconFav);
        iconDiv.appendChild(favSpan);

        const removeSpan = document.createElement("span");
          removeSpan.classList.add("m-1");
          const iconRemove = document.createElement("i");
            iconRemove.classList.add("fa", "fa-trash", "remove-card");
          removeSpan.appendChild(iconRemove);
        iconDiv.appendChild(removeSpan);
      cardDiv.appendChild(iconDiv);  

  card.appendChild(cardDiv);

  card.addEventListener("dragstart", () => {
    card.classList.add("is-dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("is-dragging");
  });

  targetDiv.insertAdjacentElement("afterbegin", card);
  input.value = "";
  
}

//onclik create new div card
$(document).on('click','.addBtn', function() {
  createCardDiv(); 
});

//view div card
function viewCardData() {
  const cardData = $(this).siblings(".card-data").text();
  $(".view-card-data").text(cardData);
}

// Call the viewCardData() function when the button is clicked
$(document).on('click','.view-details', function() {
  viewCardData.call(this); 
});

//remove card div
$(document).on('click','.remove-card', function() {
  $(this).parents('.task').remove();
});

//make card favourite
$(document).on('click','.favourite-card', function() {
    $(this).parents('.task').toggleClass('note-favourite');
});
