
 function sayHey(fn, In) {
   return `Welcome ${fn} ${In} to React class`;
 }

function Intro() {
  const firstName = "John";
  const lastName = "Don";
  const age = 29;

  return (
  <div className="text-4xl font-bold">
    <h2>Introduction</h2>

    <p>
      {firstName} {lastName}

      <span>{age}</span>
      
      <p> {sayHey(firstName, lastName)} </p>
    </p>
  </div>
)
}



export default Intro;

