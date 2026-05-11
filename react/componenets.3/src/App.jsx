// export const App = () => {
//   return <h1>Hellow</h1>
// }

// export const App2 = () => {
//   return <p>gana</p>
// }
//   export const App3 = () => {
//     console.log('lolo');
//   }

// const App = () => {
//   const element = <h1>Hello Students</h1>;

//   return(
//     <>
//     <div>{element}</div>
//     </>
//   );
// };

// export default App;

import Nevbar from "./component/Nevbar"
import Card1 from "./component/Card1"
import people from "./assets/data/userData"



const App = () => {

  return (
    <div>
      <Nevbar />
      {people.map((data, index) {
        return (
          <Card1 name={data.name}
            age={data.age}
            experience={data, experience}
            city={data.city}
            profession={data.profession}
            imageURL={data.imageURL}
          />
        )
      })}
    </div>
  )
}


export default App;