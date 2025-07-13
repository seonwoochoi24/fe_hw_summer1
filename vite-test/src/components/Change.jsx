
import { useState } from "react";

function Change() {
  const [count, setCount] = useState(true);
  return (
    <div>
      <h1>{count ? <div>멋사 안녕</div> : <div>누구세요</div>}</h1>
      {/* count는 현재 상태 값인 count를 동적으로 표시 */}
      <button onClick={() => setCount(!count)}>상태 변경</button>
      {/* 버튼이 클릭될 때 setCount 함수를 호출하여 count 값을 반대로 */}
    </div>
  );
}

export default Change;
