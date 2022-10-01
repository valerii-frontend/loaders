import styled from "styled-components";

const Circle = styled.div`
	--size: ${(props) => props.size ?? 50}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1100)}ms;
	--color: ${(props) => props.color};
	height: var(--size);
	width: var(--size);
	border-top: 3px solid var(--color, white);
	border-radius: 100%;
	animation: spin var(--speed) linear infinite;
`;
export default Circle;
