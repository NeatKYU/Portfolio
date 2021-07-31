import React from 'react';
import styled from 'styled-components';
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dataserviceImage1 from '../images/dataservice1.png';
import dataserviceImage2 from '../images/dataservice2.png';
import dataserviceImage3 from '../images/dataservice3.png';
import dataserviceImage4 from '../images/dataservice4.png';
import dataserviceImage5 from '../images/dataservice5.png';
import dataserviceImage6 from '../images/dataservice6.png';
import dataserviceImage7 from '../images/dataservice7.png';
import portfolioImage1 from '../images/portfolio1.png';
import portfolioImage2 from '../images/portfolio2.png';
import portfolioImage3 from '../images/portfolio3.png';
import comicStack1 from '../images/comicstack.PNG';
import comicStack2 from '../images/comicstack2.PNG';
import comicStack3 from '../images/comicstack3.PNG';
import { Line } from './line';

const ProjectZone = styled.div`
	width: 100%;
	height: auto;
	min-height: 100px;
	background-color: whitesmoke;
	.projects-title{
		width: 100%;
		height: 6.25rem;
		text-align: center;
		font-size: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'SEBANG_Gothic_Bold';
	}
	.slider-zone {
		width: 100%;
		height: auto;
		min-height: 400px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		.slider-main {
			width: 250px;
			display: inline-block;
		}
		img {
			width: 250px;
			height: 350px;
		}
	}
	.project-info{
		min-width: 35rem;
		height: auto;
		display: inline-block;
		.project-name {
			text-align: center;
			font-size: 30px;
			margin-left: 5rem;
			margin-right: 5rem;
			font-family: "SEBANG_Gothic_Bold";
		}
		.project-coment {
			width: 450px;
			height: auto;
			margin: 10px auto;
			/* font-family: 'S-CoreDream-3Light'; */
			font-family: 'SEBANG_Gothic_Regular';
			text-align: left;
			span {
				color: #a99afa;
			}
		}
		.project-detail {
			/* max-width: 450px; */
			font-size: 15px;
			text-align: left;
			margin-left: 3rem;
			line-height: 1.5;
			svg {
				font-size: 13px;
			}
		}
	}
`;

export const Projects = () => {
	
	const projectComent = () => {
		return (
			<>
				<div>
					데이터 서비스 프로젝트는 배달어플에서 모이는 데이터를 
					좀 더 유용하게 사용하기 위해 매출들을 가공하고 분석하여 배달어플 및 POS를 
					사용하는 사장님들에게 보여주는 서비스입니다.
				</div>
				<br/>
				<div>
					<span>React기반의 웹 서비스</span>이며 현재는 모바일에 이식되어 웹뷰로 동작하고 있습니다.
					react를 이용한 저의 첫 프로젝트이며 많은 정성을 쏟았습니다.
				</div>
				<br/>
				<div>
					웹 개발의 초보였던 저는 이 프로젝트를 진행하면서 <span>chart js, datepicker 등</span> 많은 라이브러리를 적용하는 방법을 배웠고 
					디자이너와의 협업도 경험할 수 있던 즐거운 시간이였습니다
				</div>
			</>
		)
	}

	const projectComent2 = () => {
		return (
			<>
				<div>
					포트폴리오 사이트는 저의 취업에 도움이 되고 경력을 기록하며<br/> 기억하기위해 만들었습니다. 
				</div>
				<br/>
				<div>
					<span>React기반</span>이며 간단히 본인을 소개하는 introduce, 
					재가 사용하는 기술 스택을 보여주는 skills, 
					마지막으로 진행했던 프로젝트를 나열한 projects부분으로 나누어져 있습니다.
					디자인은 아직 많이 부족하여 차차 업데이트 하겠습니다.
					새로운 프로젝트를 참여하게되면 여기에 차곡차곡 기록할 예정입니다.
				</div>
				<br/>
			</>
		)
	}

	const projectComent3 = () => {
		return (
			<>
				<div>
					코딩을 필요한사람이라면 누구나 쉽게 배울 수 있도록 웹툰과 접목시켰습니다.
					코딩교육의 문제는 진입장벽이라는 생각을 가지고 웹툰으로 그 진입장벽을 낮추고
					매주 올라오는 웹툰을 즐겁게 보기만해도 교육이되게 하는게 목표입니다.
				</div>
				<br/>
				<div>
					<span>React와 golang기반</span>이며 RestfulAPI로 데이터 통신하고
					간단한 CRUD가 가능합니다.  
				</div>
				<br/>
			</>
		)
	}
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	};

	return (
		<>
			<ProjectZone id={"Projects"}>
				<div className={"projects-title"}>
					<AiFillPushpin/> Projects
				</div>
				<div className={"slider-zone"}>
					<div className={"slider-main"}>
						<Slider {...settings}>
							<div>
								<img src={dataserviceImage1} alt={""}/>
							</div>
							<div>
								<img src={dataserviceImage2} alt={""}/>
							</div>
							<div>
								<img src={dataserviceImage3} alt={""}/>
							</div>
							<div>
								<img src={dataserviceImage4} alt={""}/>
							</div>
							<div>
								<img src={dataserviceImage5} alt={""}/>
							</div>
							<div>
								<img src={dataserviceImage6} alt={""}/>
							</div>
							<div>
								<img src={dataserviceImage7} alt={""}/>
							</div>
						</Slider>
					</div>
					<div className={"project-info"}>
						<div className={"project-name"}>Data Service</div>
						<div className={"font-sebang-regular"} style={{lineHeight: "2"}}>2021.03 ~ 2021.06</div>
						<div className={"project-coment"}>{projectComent()}</div>
						<Line/>
						<div className={"project-detail"}>
							<div><AiOutlinePushpin/> 도메인 : https://dataservice.ftk.kr</div>
							<div><AiOutlinePushpin/> github : https://github.com/NeatKYU/DI-WEB</div>
							<div><AiOutlinePushpin/> front-end : React, typescript, sass</div>
							<div><AiOutlinePushpin/> back-end : Java, spring, mysql</div>
						</div>
					</div>
				</div>
				<Line/>
				<div className={"slider-zone"}>
					<div className={"slider-main"}>
						<Slider {...settings}>
							<div>
								<img src={portfolioImage1} alt={""}/>
							</div>
							<div>
								<img src={portfolioImage2} alt={""}/>
							</div>
							<div>
								<img src={portfolioImage3} alt={""}/>
							</div>
						</Slider>
					</div>
					<div className={"project-info"}>
						<div className={"project-name"}>portfolio site</div>
						<div className={"font-sebang-regular"} style={{lineHeight: "2"}}>2021.07</div>
						<div className={"project-coment"}>{projectComent2()}</div>
						<Line/>
						<div className={"project-detail"}>
							<div><AiOutlinePushpin/> 도메인 : https://neatkyu.github.io/Portfolio</div>
							<div><AiOutlinePushpin/> github : https://github.com/NeatKYU/portfolio</div>
							<div><AiOutlinePushpin/> front-end : React, sass</div>
							<div><AiOutlinePushpin/> back-end : x</div>
						</div>
					</div>
				</div>
				<Line/>
				<div className={"slider-zone"}>
					<div className={"slider-main"}>
						<Slider {...settings}>
							<div>
								<img src={comicStack1} alt={""}/>
							</div>
							<div>
								<img src={comicStack2} alt={""}/>
							</div>
							<div>
								<img src={comicStack3} alt={""}/>
							</div>
						</Slider>
					</div>
					<div className={"project-info"}>
						<div className={"project-name"}>comicStack</div>
						<div className={"font-sebang-regular"} style={{lineHeight: "2"}}>2021.07</div>
						<div className={"project-coment"}>{projectComent3()}</div>
						<Line/>
						<div className={"project-detail"}>
							<div><AiOutlinePushpin/> 도메인 : x</div>
							<div><AiOutlinePushpin/> github : https://github.com/NeatKYU/comicstack</div>
							<div><AiOutlinePushpin/> front-end : React, sass</div>
							<div><AiOutlinePushpin/> back-end : golang</div>
						</div>
					</div>
				</div>
			</ProjectZone>
		</>
	)
}