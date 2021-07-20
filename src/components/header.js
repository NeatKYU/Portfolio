import React from 'react';
import styled from 'styled-components';
// import HeadImage from '../images/codeing.jpeg';

const ImageZone = styled.div`
	width: 100%;
	position: absolute;
	opacity: 0.6;
	
`;

const NavZone = styled.div`
	width: 100%;
	height: 80px;
	background-color: transparent;
	/* position: fixed; */
	top: 0;
	left: 0;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	.header-title{
		font-size: 30px;
		line-height: 80px;
		width: 30%;
		height: 100%;
	}
	.header-nav {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		>span {
			line-height: 80px;
			font-size: 25px;
			cursor: pointer;
			color: #aaaaaa;
		}
	}
`;

export const Header = () => {

	return (
		<>
			<NavZone>
				<div className={"header-title"}>
					Kyu Portfolio
				</div>
				<div className={"header-nav"}>
					<span>Introduce</span>
					<span>Skill</span>
					<span>Project</span>
				</div>
			</NavZone>
		</>
	)
}