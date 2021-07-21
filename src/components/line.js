import styled from 'styled-components';

const LineZone = styled.div`
	width: 100%;
	height: 30px;
	background-color: transparent;
	.line {
		width: 60%;
		height: 2px;
		background-color: black;
		border-radius: 10px;
		margin: 20px auto;
	}
`;

export const Line = () => {

	return (
		<>
			<LineZone>
				<div className={"line"}>

				</div>
			</LineZone>
		</>
	)
}