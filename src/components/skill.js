import React from 'react';
import styled from 'styled-components';
import { AiFillPushpin } from 'react-icons/ai';
import { FaReact, FaSass, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub } from 'react-icons/fa'

const SkillZone = styled.div`
	width: 100%;
	min-height: 18.75rem;
	height: auto;
	background-color: darkgoldenrod;
	.skill-title{
		width: 100%;
		height: 6.25rem;
		text-align: center;
		font-size: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.skill-subTitle{
		width: 100%;
		height: 30px;
		font-size: 20px;
	}
	.image-contents {
		width: 100%;
		height: 10rem;
		font-size: 100px;
		svg {
			margin-right: 10px;
		}
	}
`;

export const Skill = () => {

	return (
		<>
			<SkillZone>
				<div className={"skill-title"}>
					<AiFillPushpin/> Skills
				</div>
				<div className={"skill-subTitle"}>
					<div>Front-end</div>
				</div>
				<div className={"image-contents"}>
					<FaHtml5/><FaCss3Alt/><FaJsSquare/><FaReact/><FaSass/>
				</div>
				<div className={"skill-subTitle"}>
					<div>Version-Tool</div>
				</div>
				<div className={"image-contents"}>
					<FaGitAlt/><FaGithub/>
				</div>
			</SkillZone>
		</>
	)
}