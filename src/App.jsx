import './App.css';
import elephant from "./images/elephant.jpeg";

function App(props) {
  // code here

  const imgg = props.imageData()

  return (
    <div>
      <h1>Kalvium Gallary</h1>
      <div className='pic'>
      {imgg.map((el)=>{
      return (<img src={el.img}/>)
    })}
    </div>
    </div>
  )

}

export default App;
