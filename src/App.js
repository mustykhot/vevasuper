import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [busId, setBusId] = useState("");
  const [state, setSate] = useState("");
  console.log(list);
  useEffect(() => {
    fetch(
      "https://veva-dev.herokuapp.com/api/v1/admin/bussiness/APPROVED?page=1"
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setList(result);
      });
  }, []);
  const onSubmit = () => {
    setSate("Loading");
    fetch(
      `https://veva-dev.herokuapp.com/api/v1/admin/bussiness/${busId}/approve`
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setSate("Approved");
      });
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <select
          onChange={(e) => {
            setBusId(e.target.value);
          }}
        >
          {/* {list.map((item, i) => {
            return <option key={i}>{}</option>;
          })} */}
        </select>
        <button>Approve</button>
        <p>{state}</p>
      </form>
    </div>
  );
}

export default App;
