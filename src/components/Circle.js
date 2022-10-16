import styled from "styled-components";

const Circle = styled.div`
	--size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1100)}ms;
	--color: ${({ color }) => color};
	height: var(--size);
	width: var(--size);
	border-top: 3px solid var(--color, white);
	border-radius: 100%;
	animation: spin var(--speed) linear infinite;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
export default Circle;
