import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState(null);
  const [busId, setBusId] = useState("");
  const [state, setSate] = useState("");
  useEffect(() => {
    fetch("https://api.getveva.co/api/v1/admin/bussiness/APPROVED?page=1")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        setList(result);
      });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    setSate("Loading");
    fetch(`https://api.getveva.co/api/v1/admin/bussiness/${busId}/approve`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        setSate("Approved");
        setTimeout(() => {
          setSate("");
        }, 3000);
      });
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <p>Select Business</p>
        <select
          onChange={(e) => {
            setBusId(e.target.value);
          }}
        >
          {list &&
            list.businesses.rows.map((item, i) => {
              return (
                <option value={item.id} key={i}>
                  {item.name}
                </option>
              );
            })}
        </select>
        <button>Approve</button>
        <p>{state}</p>
      </form>
    </div>
  );
}

export default App;
