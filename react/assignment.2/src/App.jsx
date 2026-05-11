import "./App.css";
import Navbar from "./components/Navbar";
import CarCard from "./components/CarCard";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {

  const cars = [
    { id: 1, name: "Toyota", model: "Corolla", color: "White", price: "$20,000" },
    { id: 2, name: "Honda", model: "Civic", color: "Black", price: "$25,000" },
    { id: 3, name: "Suzuki", model: "Alto", color: "Silver", price: "$10,000" },
    { id: 4, name: "BMW", model: "X5", color: "Blue", price: "$60,000" },
    { id: 5, name: "Audi", model: "A6", color: "Gray", price: "$55,000" },
    { id: 6, name: "KIA", model: "Sportage", color: "Red", price: "$35,000" },
    { id: 7, name: "Hyundai", model: "Elantra", color: "White", price: "$28,000" },
    { id: 8, name: "Mercedes", model: "C-Class", color: "Black", price: "$70,000" },
    { id: 9, name: "Tesla", model: "Model 3", color: "Blue", price: "$50,000" },
    { id: 10, name: "Ford", model: "Mustang", color: "Yellow", price: "$45,000" },
  ];

  return (
    <>
      <Navbar />

      <section className="home">
        <h1>Car Collection</h1>

        <div className="card-container">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              name={car.name}
              model={car.model}
              color={car.color}
              price={car.price}
            />
          ))}
        </div>
      </section>

      <Profile />

      <Contact />

      <About />
    </>
  );
}

export default App;