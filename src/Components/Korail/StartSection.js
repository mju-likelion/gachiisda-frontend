import React from "react";
import styled from 'styled-components';


function StartSection() {
	return (
		<div>
			<StartSectionWrapper>
				<div className="a" />
				<B>
					<div>편도</div>
					<div>왕복</div>
				</B>
				<C>
					<div>출발일</div>
					<div>2022년 n월 nn일 (화요일) 12시:12분</div>
				</C>

				<div className="ekffur">
					<div className="ekffurqjxms">달력에서 날짜 선택</div>
				</div>
				<div className="d">
					<div className="dydlf">
						<div>요일</div>
						<div className="skfWk">
							날짜 <span className="wkrdmsdydlf">월요일</span>
						</div>
					</div>
					<div className="dydlf">
						<div>요일</div>
						<div className="skfWk">
							날짜
							<span className="wkrdmsdydlf">화요일</span>
						</div>
					</div>
					<div className="dydlf">
						<div>요일</div>
						<div className="skfWk">
							날짜
							<span className="wkrdmsdydlf">수요일</span>
						</div>
					</div>
					<div className="dydlf">
						<div>요일</div>
						<div className="skfWk">
							날짜
							<span className="wkrdmsdydlf">목요일</span>
						</div>
					</div>
					<div className="dydlf">
						<div>요일</div>
						<div className="skfWk">
							날짜
							<span className="wkrdmsdydlf">금요일</span>
						</div>
					</div>
					<div className="dydlf">
						<div>요일</div>
						<div className="skfWk">
							날짜
							<span className="wkrdmsdydlf">토요일</span>
						</div>
					</div>
					<div className="dydlf">
						<div>요일</div>
						<div className="skfWk">
							날짜
							<span className="wkrdmsdydlf">일요일</span>
						</div>
					</div>
				</div>

				<div className="e">
					<div className="etntwk">
						숫자<span className="wkrtl">시</span>
					</div>
					<div className="etntwk">
						숫자<span className="wkrtl">시</span>
					</div>
					<div className="etntwk">
						숫자<span className="wkrtl">시</span>
					</div>
					<div className="etntwk">
						숫자<span className="wkrtl">시</span>
					</div>
					<div className="etntwk">
						숫자<span className="wkrtl">시</span>
					</div>
					<div className="etntwk">
						숫자<span className="wkrtl">시</span>
					</div>
				</div>
				<div className="line_2" />
				<div className="i">
					<div className="p">승객 연령 및 좌석수</div>
					<div className="u">어른 1명</div>
					<div>▽</div>
				</div>
				<div className="line" />
				<div className="x">
					<div className="p">상세 옵션</div>
					<div className="u">인접역 표출, SR연계 표출</div>
					<div>▽</div>
				</div>

				<div className="line" />
				<div className="f">열차 조회하기</div>
			</StartSectionWrapper>
		</div>
	);
}

const StartSectionWrapper = styled.div`
text-align: center;`;

const B = styled.div`
background-color: white;
justify-content: space-around;
display: flex;
height: 43px;
align-items: center;`;

const C = styled.div`
background-color: #E1E9F6;
height: 98px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;`;




export default StartSection;

