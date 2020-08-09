import styled from "styled-components";

export const StyledFieldWrapper = styled.div`
	overflow: hidden;
	& > div {
		height: 400px;
		width: 200px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		transform: translate(0, -60px);
	}
`;

export const StyledCell = styled.div`
	height: 20px;
	width: 20px;
	border: 1px solid black;
	background-color: ${(props) => `${props.painted ? "red" : "green"}`};
`;
