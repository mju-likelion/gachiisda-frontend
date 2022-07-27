import React from "react";
import "./DifficultySelection.css";

function DifficultySelection() {
  return (
    <div>
      <h1>난이도를 선택해주세요</h1>
      <div>
        <button type="submit">초급</button>
        <div>안내에 따라 사용법을 배웁니다</div>
      </div>
      <div>
        <button type="submit">고급</button>
        <div>도움 없이 혼자서 사용법을 익힙니다</div>
      </div>
    </div>
  );
}

export default DifficultySelection;
