let dropLink = document.querySelector("#dropLink");
let dropDownMenu = document.querySelector(".dropDownMenu");
// console.log(dropDownMenu);

dropLink.addEventListener("click", e => {
  let show = dropDownMenu.classList.toggle("active");
  console.log(show);
  if (show === true) {
    dropDownMenu.style.display = "block";
  } else {
    dropDownMenu.style.display = "none";
  }
});

// DropDown menu
function dropdown1() {
  var location = document.querySelector(".locationBlock");
  if (location.style.display == "none") {
    location.style.display = "block";
  } else {
    location.style.display = "none";
  }
}

// slider Block js
let tripData = [
  {
    image:
      "https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_q=highq&im_w=720",
    title: "Lonavla",
    Description: "66 kilometers away",
    color: "#BC1A6E",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240",
    title: "Alibag",
    description: "36 kilometers away",
    color: "#DE3151",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=240",
    title: "Calangute",
    description: "396 kilometers away",
    color: "#D93B30",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/85bff6ba-f4d0-4094-926e-a4fbc21bab4e.jpg?im_w=240",
    title: "Karjat",
    description: "53 kilometers away",
    color: "#CC2D4A",
  },
];

let tripContent = document.getElementById("tripBlock");

let output = [];
tripData.forEach((trip, index) => {
  output += `
   <div class="tripContainer" style="background-color:${trip.color}">
   <figure>
   <img src=${trip.image} alt=${trip.title} />
   </figure>
   <h2>${trip.title}</h2>
   <p>${trip.Description}</p>
   </div>`;
});

tripContent.innerHTML = output;

