import "./App.css";
import { Box } from "./components/Box";
import { Button } from "./components/Button";
import Change from "./components/Change";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import UseEffectCounter from "./components/UseEffectCounter";

function App() {
  const onClickButton1=() =>{
    console.log("리액트 어렵죠..?ㅠㅠ");
  };
   const onClickButton2=() =>{
    console.log("세션끝났다!");
  };

  return (
    <>
      <Change/>
      <Counter />
      <UseEffectCounter/>
      <Box label="빨강박스" color="red" />
      <Box label="파랑" color="blue" />
      <Button label ="리액트 어렵죠..? ㅠㅠ" color="purple" buttonhandler={onClickButton1}/>
      <Button label ="세션 끝내기!" color="green" buttonhandler={onClickButton2}/>
      <Timer/>
    </>
  );
}

export default App;