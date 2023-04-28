const menu = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pancake Sliced Strawberry",
    category: "breakfast",
    price: "$5.99",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloremque rem velit beatae atque sint accusantium nulla harum vitae sit",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2067405/pexels-photo-2067405.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    title: "Chicken Butter Masala",
    category: "breakfast",
    price: "$8.99",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloremque rem velit beatae atque sint accusantium nulla harum vitae sit",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg",
    title: "Baked Bread",
    category: "dinner~",
    price: "$2.99",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloremque rem velit beatae atque sint accusantium nulla harum vitae sit",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/2732666/pexels-photo-2732666.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    title: "Paneer Butter Masala",
    category: "lunch",
    price: "$55.99",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloremque rem velit beatae atque sint accusantium nulla harum vitae sit",
  },
];

const menuItem = document.querySelector(".menu-items");
const grid = document.querySelector(".grid");

window.addEventListener("DOMContentLoaded", () => {
 let mappedItems = menu.map((item) => {
  // console.log(item);
  return `<article class="item">
    <div class="image">
     <img src="${item.img}" alt="${item.title}">
    </div>
    <div class="item-details">
     <div class="title">
      <h4>${item.title}</h4>
      <div class="price">
       <h5>${item.price}</h5>
      </div>
     </div>
     <div class="item-underline"></div>
     <div class="item-description">
      <p>${item.desc}</p>
     </div>
    </div>
   </article>`;
 });
 mappedItems = mappedItems.join("")
 grid.innerHTML = mappedItems;
 console.log(mappedItems)
})