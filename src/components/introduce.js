import styled from 'styled-components';
import { BsFillPersonFill, BsPeopleCircle } from 'react-icons/bs';
import { AiFillPushpin, AiFillPhone, AiTwotoneHome} from 'react-icons/ai';

const IntroduceZone = styled.div`
	width: 100%;
	height: 31.25rem;
	background-color: darkcyan;
	.introduce-title {
		width: 100%;
		height: 20%;
		text-align: center;
		font-size: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.introduce-coments {
		width: 100%;
		height: 20%;
		text-align: center;
		padding: 20px 0px 10px 0px;
		font-size: 30px;
		line-height: 1.5;
	}
	.introduce-info {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 20px;
		/* background-color: darkgray; */
		.contents {
			width: 300px;
			min-height: 100px;
			height: 100%;
			display: inline-block;
			font-size: 29px;
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			border-radius: 10px;
			background-color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			svg{
				font-size: 25px;
				margin-right: 10px;
			}
		}
	}
`;

export const Introduce = () => {

	return (
		<>
			<IntroduceZone>
				<div className={"introduce-title"}>
					<div>
						<AiFillPushpin/> Introduce
					</div>
				</div>
				<div className={"introduce-coments"}>
					<div>안녕하세요</div>
					<div>항상 발전하고 있는 웹 개발자입니다.</div>
				</div>
				<div className={"introduce-info"}>
					<div className={"contents"}>
						<div>
							<BsPeopleCircle/> 
							<div className={"style-inline-block"}>이름</div>
						</div>
						<div>박승규</div>
					</div>
					<div className={"contents"}>
						<div>
							<AiFillPhone/>
							<div className={"style-inline-block"}>휴대폰</div>
						</div>
						<div>010-3384-2066</div>
					</div>
					<div className={"contents"}>
						<div>
							<AiTwotoneHome/> 
							<div className={"style-inline-block"}>주소지</div>
						</div>
						<div>서울 가마산로 442</div>
					</div>
				</div>
				<div className={"introduce-info"}>
					<div className={"contents"}>
						<div>
							<BsPeopleCircle/> 
							<div className={"style-inline-block"}>이름</div>
						</div>
						<div>박승규</div>
					</div>
					<div className={"contents"}>
						<div>
							<AiFillPhone/>
							<div className={"style-inline-block"}>휴대폰</div>
						</div>
						<div>010-3384-2066</div>
					</div>
					<div className={"contents"}>
						<div>
							<AiTwotoneHome/> 
							<div className={"style-inline-block"}>주소지</div>
						</div>
						<div>서울 가마산로 442</div>
					</div>
				</div>
			</IntroduceZone>
		</>
	)
}