import { useState } from "react";
function app() {
  const [count, setCount] = useState(0);
//  percentage
  const [obtMarks, setObtMarks] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage , setPercentage] = useState(0);

  let age = 45;
  function increaseage() {
    age = age + 1;
    console.log(age);
  }
  // percentage
  function calculatepercentage(e){
    e.preventDefault();
    const percentage = (obtMarks/totalMarks) * 100;
    setPercentage(percentage);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Age:{age}</h2>
      <h2>Count:{count}</h2>
      <br />
      <button onClick={increaseage}> Increase Age</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      {/* form */}
      <form onSubmit={calculatepercentage}>
        <input
          type="number"
          name="obtMarks"
          id="obtMarks"
          onChange={(e) => {
            setObtMarks(e.target.value);
          }}
          placeholder="Enter obt marks"
        />
        <input
          type="number"
          name="totalMarks"
          id="totalMark"
          onChange={(e) => {
            setTotalMarks(e.target.value);
          }}
        placeholder="Enter total marks"
        />
        <button type="submit">submit</button>
      </form>
      <h2>percentage: {percentage.toFixed(2)}%</h2>
    </div>  
  );
}
export default app;
