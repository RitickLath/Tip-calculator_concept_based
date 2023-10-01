import { useState } from "react";

function App() {
  const [totalAmount, SetTotalAmount] = useState("");
  const [selected1, SetSelected1] = useState(0);
  const [selected2, SetSelected2] = useState(0);

  const resetAll = () => {
    SetTotalAmount("");
    SetSelected1(0);
    SetSelected2(0);
  };

  const styling = {
    display: "flex",
    justifyContent: "space-around",
    width: "400px",
  };

  return (
    <>
      <div style={styling}>
        <Question question={`How Much was the bill?`} />
        <Total totalAmount={totalAmount} SetTotalAmount={SetTotalAmount} />
      </div>

      <div style={styling}>
        <Question question={`How did you like our service?`} />
        <ServiceRating selected={selected1} SetSelected={SetSelected1} />
      </div>

      <div style={styling}>
        <Question question={`How did your friend like our service?`} />
        <ServiceRating selected={selected2} SetSelected={SetSelected2} />
      </div>

      <TotalCost
        totalAmount={totalAmount}
        selected1={selected1}
        selected2={selected2}
      />
      <ResetButton resetAll={resetAll} />
    </>
  );
}

function Question(props) {
  return <h4>{props.question}</h4>;
}

function Total(props) {
  return (
    <>
      <input
        style={{ height: "25px", marginTop: "12px" }}
        type="number"
        placeholder="Bill Amount"
        value={props.totalAmount}
        onChange={(e) => {
          props.SetTotalAmount(e.target.value);
        }}
      ></input>
    </>
  );
}

function ServiceRating({ selected, SetSelected }) {
  return (
    <>
      <select
        style={{ height: "25px", marginTop: "12px" }}
        value={selected}
        onChange={(e) => {
          SetSelected(e.target.value);
        }}
      >
        <option value={0}>Not Good (0%)</option>
        <option value={10}>It was Good (10%)</option>
        <option value={20}>It was Awesome (20%)</option>
      </select>
    </>
  );
}

function TotalCost({ totalAmount, selected1, selected2 }) {
  return (
    <h2>
      You will pay{" $"}
      {Number(totalAmount) +
        Number(totalAmount * selected1) / 100 +
        Number(totalAmount * selected2) / 100}{" "}
      {` ($${totalAmount} + $${
        Number(totalAmount * selected1) / 100 +
        Number(totalAmount * selected2) / 100
      } tip)`}
    </h2>
  );
}

function ResetButton({ resetAll }) {
  return (
    <button onClick={resetAll} style={{ marginTop: "20px" }}>
      Reset All
    </button>
  );
}

export default App;
