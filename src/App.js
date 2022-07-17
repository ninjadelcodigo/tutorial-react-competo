import './App.css';    

function App() {

  let encabezado = "Bienvenidos al nuevo blog de 'Ninjas del Código'";
  var likes = 50;
  const persona = { nombre:'yoshi', edad: 30};
  const link  = "http://www.google.com";

  return (
    <div className="App">
      <div className='content'>
        <h1>{ encabezado }</h1>
        <p>Likes: { likes }</p>
        {/* <p>Persona: {persona}</p>  */}
        <p>{ 10 }</p>
        <p>{"hola ninjas"}</p> 
        <p>{ Math.random() * 10}</p>
        <p>Persona: {persona.nombre}</p> 
        <p>Edad: {persona.edad}</p>
        <a href={ link }>Google link</a>
      </div>
    </div>
  );
}

export default App;
