import "./App.css";
import { Cardlist } from "./COMPONENTS/Cardlist";
import { Input } from "./COMPONENTS/Input";
import { Title } from "./COMPONENTS/Title";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRobo } from "./REDUCERS/robo.actions";

function App() {
  const dispatch = useDispatch();
  const search = useSelector((state) => {
    return state.search;
  });
  const robo = useSelector((state) => {
    return state.robo;
  });
  useEffect(() => {
    dispatch(fetchRobo());
  }, []);
  const newarr = robo.filter((i) => {
    return i.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Title />
      <Input />
      <Cardlist newarr={newarr} />
    </>
  );
}

export default App;
