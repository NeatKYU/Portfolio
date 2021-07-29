import React from 'react';
import styled from 'styled-components';
import { AiFillPushpin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa'
import {ReactComponent as Jira} from '../images/jira.svg';
import {ReactComponent as Zeplin} from '../images/zeplin.svg';
import {ReactComponent as Typescript} from '../images/typescript.svg';
import {ReactComponent as HtmlIcon} from '../images/html.svg';
import {ReactComponent as CssIcon} from '../images/css.svg';
import {ReactComponent as JavascriptIcon} from '../images/javascript.svg';
import {ReactComponent as ReactIcon} from '../images/react.svg';
import {ReactComponent as SassIcon} from '../images/sass.svg';
import {ReactComponent as GitIcon} from '../images/git.svg';
import {ReactComponent as PostgresqlIcon} from '../images/postgresql.svg';
import {ReactComponent as JavaIcon} from '../images/java.svg';
import {ReactComponent as SpringIcon} from '../images/spring.svg';
import {ReactComponent as NodejsIcon} from '../images/nodejs.svg';
import skillBack from '../images/skillBack.jpg';

const SkillZone = styled.div`
	width: 100%;
	min-height: 18.75rem;
	height: auto;
	background-image: url(${skillBack});
	/* background-color: darkgoldenrod; */
	.skill-title{
		width: 100%;
		height: 6.25rem;
		text-align: center;
		font-size: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'SEBANG_Gothic_Bold';
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
	.display-flex {
		display: flex;
		justify-content: space-evenly;
	}
`;

export const Skill = () => {

	return (
		<>
			<SkillZone id={"Skill"}>
				<div className={"skill-title"}>
					<AiFillPushpin/> Skills
				</div>
				<div className={"skill-subTitle"}>
					<div>Front-end</div>
				</div>
				<div className={"image-contents"}>
					<HtmlIcon/><CssIcon/><JavascriptIcon/><Typescript/><ReactIcon/><SassIcon/>
				</div>
				<div className={"skill-subTitle"}>
					<div>Back-end</div>
				</div>
				<div className={"image-contents"}>
					<NodejsIcon/><PostgresqlIcon/>
				</div>
				<div>
					<div className={"skill-subTitle display-flex"}>
						<div>Communication</div>
						<div>Version-Tool</div>
					</div>
					<div className={"image-contents display-flex"}>
						<div><Jira/><Zeplin/></div>
						<div><GitIcon/><FaGithub/></div>
					</div>
				</div>
			</SkillZone>
		</>
	)
}