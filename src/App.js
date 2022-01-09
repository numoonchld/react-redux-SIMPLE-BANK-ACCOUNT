import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./actions";

export default function App() {
  // READ STATE
  const account = useSelector((state) => state.account); // REACT-REDUX HOOK

  // UPDATE STATE
  const dispatch = useDispatch(); // REACT-REDUX HOOK
  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch);

  // USE STATE
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => deposit(1000)}>Deposit 1000</button>
      <button onClick={() => withdraw(500)}>Withdraw 500</button>
    </div>
  );
}
