import React, {use, useEffect,useState}  from "react";
import axios from "axios";

function App() {
  const [loans, setLoans] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/loan")
      .then(response => setLoans(response.data)) // Fixed parentheses
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Personalized Loan Assistant</h1>
      <h2>Available Loans</h2>
      <ul>
        {loans.map(loan => (
          <li key={loan.id}>
            {loan.name} - {loan.interestRate}% interest
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;

