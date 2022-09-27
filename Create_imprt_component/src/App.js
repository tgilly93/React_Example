// In this example, remove function and import heading component. this is more code
function Heading() { 
  return ( 
    <h1>This is an h1 heading.</h1> 
  ) 
} 

function App() {
  return (
    <div className="App">
      This is the starting code for "Your first component" ungraded lab 
      <Heading /> 
    </div>
  );
}

export default App;
