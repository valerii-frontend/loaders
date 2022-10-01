import styled from "styled-components";

const SpinnerStyled = styled.div`
	--size: ${({ size }) => (size >= 50 && size <= 200 ? size : 100)}px;
	--border-width: ${({ borderWidth }) => (borderWidth >= 1 && borderWidth <= 50 ? borderWidth : 5)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1200)}ms;
	height: var(--size);
	width: var(--size);
	position: relative;
	& span {
		display: block;
		position: absolute;
		height: 100%;
		width: 100%;
		border-width: var(--border-width);
		border-style: solid;
		border-radius: 100%;
		border-color: ${({ color }) => color || "white"} transparent transparent transparent;
		animation: spin var(--speed) cubic-bezier(0.5, 0, 0.5, 1) infinite;
	}
	& span:nth-child(1) {
		animation-delay: calc(-1 * var(--speed) / 3 + 50);
	}
	& span:nth-child(2) {
		animation-delay: calc(-1 * var(--speed) / 4);
	}
	& span:nth-child(3) {
		animation-delay: calc(-1 * var(--speed) / 8);
	}
`;

export function Spinner({ color, borderWidth, size, speed }) {
	return (
		<SpinnerStyled color={color} borderWidth={borderWidth} size={size} speed={speed}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</SpinnerStyled>
	);
}
