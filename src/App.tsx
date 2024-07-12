import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);
  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrementAsync = useCounterStore((state) => state.decrementAsync);

  useEffect(() => {
    logCount();
    setCount();
  });

  return (
    <div>
      {count}
      <div>
        <button onClick={incrementAsync}>increment</button>
        <button onClick={decrementAsync}>decrement</button>
      </div>
    </div>
  );
};

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log(count);
};

const setCount = () => {
  useCounterStore.setState({ count: 100 });
};

export default App;
