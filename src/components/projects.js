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
			font-size: 20px;
			text-align: left;
			margin-left: 3rem;
			line-height: 1.5;
			display: inline-flex;
			.div-title{
				display: inline-block;
			}
			.text-right {
				float: right;
			}
			svg {
				font-size: 18px;
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
					웹 개발의 초보였던 저는 이 프로젝트를 진행하면서 많은 라이브러리를 적용하는 방법을 배웠고 
					디자이너와의 협업도 경험할 수 있던 즐거운 시간이였습니다
				</div>
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
			<ProjectZone>
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
						<div className={"project-coment"}>{projectComent()}</div>
						<Line/>
						<div className={"project-detail"}>
							<div>
								<div className={"div-title"}><AiOutlinePushpin/> 도메인</div>
								<div className={"div-title text-right"}>https://dataservice.ftk.kr</div>
							</div>
							<div><AiOutlinePushpin/> github : https://github.com/NeatKYU/DI-WEB</div>
							<div><AiOutlinePushpin/> front-end : React, typescript, sass</div>
							<div><AiOutlinePushpin/> back-end : Java, spring</div>
						</div>
					</div>
				</div>
				<Line/>
			</ProjectZone>
		</>
	)
}