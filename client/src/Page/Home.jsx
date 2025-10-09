
// import React from "react"
// import "./Home.css"

// function Home() {
//   return (
//     <div className="card">
//       <img
//         src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDA%3D"
//         alt=""
//         className="card-image"
//       />
//       <div className="card-content">
//         <h2 className="card-title">Delicious Pizza</h2>
//         <p className="card-description">
//           Freshly baked pizza with cheese, tomato, and toppings.
//         </p>
//         <p className="card-price">₹499</p>
//         <button className="card-button">Order Now</button>
//       </div>
//     </div>
//   )
// }

// export default Home


import React from "react"
import "./Home.css"

function Home() {
  
  const foodItems = [
    {
      id: 1,
      name: "Delicious Pizza",
      description: "Freshly baked pizza with cheese, tomato, and toppings.",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Cheese Burger",
      description: "Juicy burger with cheese, lettuce, and tomato.",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Pasta Delight",
      description: "Creamy pasta with fresh vegetables and sauce.",
      price: 399,
      image:
        " https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3RhfGVufDB8fDB8fHww ",
    },
    {
      id: 4,
      name: "Veg Sandwich",
      description: "Healthy sandwich with fresh veggies and cheese.",
      price: 199,
      image:
        " https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Chocolate Cake",
      description: "Delicious chocolate cake with creamy frosting.",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D",
    },
  ]

  return (
    <div className="card-container">
      {foodItems.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{item.name}</h2>
            <p className="card-description">{item.description}</p>
            <p className="card-price">₹{item.price}</p>
            <button className="card-button">Order Now</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
