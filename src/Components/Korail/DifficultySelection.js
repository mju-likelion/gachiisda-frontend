import React from "react";
import "./DifficultySelection.css";

function DifficultySelection() {
  return (
    <div>
      <div className="Diffi_Ment">
        <h1>난이도를 선택해주세요</h1>
      </div>
      <div className="Diffi_Beiginner">
        <button type="submit" className="Diffi_Beiginner_Btn">
          초급
        </button>
        <div className="Diffi_Beiginner_ment">
          안내에 따라 사용법을 배웁니다
        </div>
      </div>
      <div className="Diffi_Advanced">
        <button type="submit" className="Diffi_Advanced_Btn">
          고급
        </button>
        <div className="Diffi_Advanced_ment">
          도움 없이 혼자서 사용법을 익힙니다
        </div>
      </div>
    </div>
  );
}

export default DifficultySelection;
