import './App.css';

function App() {

  const styles_div = {color:'white', fontSize:'2rem' , backgroundColor: 'red'}

  return (
    <>
      <div id="wrapper">
        <p className='p1'>
          Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Magnam vero beatae vitae ratione, laudantium
          nam voluptatum nostrum labore porro vel veritatis
          laboriosam natus non sequi nihil minima fuga voluptate
          animi!
        </p>

        <p style={styles_div}>
          Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Magnam vero beatae vitae ratione, laudantium
          nam voluptatum nostrum labore porro vel veritatis
          laboriosam natus non sequi nihil minima fuga voluptate
          animi!
        </p>
      </div>
    </>
  )
}

export default App
