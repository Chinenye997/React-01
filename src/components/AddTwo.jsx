function AddTwo(){
  const addTwoNumbers = (a, b) => a + b;
  return(
    <div>
      <h2>Adding Two Numbers</h2>

      <p>
        The result is {addTwoNumbers(75, 25)}
      </p>
    </div>
  )
}

export default AddTwo;