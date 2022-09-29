import styled from "styled-components";

export const SpinnerStyled = styled.div`
	--size: ${(props) => (props.size >= 50 && props.size <= 200 ? props.size : 100)}px;
	--border-width: ${({ borderWidth }) => (borderWidth >= 1 && borderWidth <= 50 ? borderWidth : 5)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 2500 ? speed : 1200)};
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
		animation: spin calc(var(--speed) * 1ms) cubic-bezier(0.5, 0, 0.5, 1) infinite;
	}
	& span:nth-child(1) {
		animation-delay: calc(-1 * var(--speed) / 3 + 50 * 1ms);
	}
	& span:nth-child(2) {
		animation-delay: calc(-1 * var(--speed) / 4 * 1ms);
	}
	& span:nth-child(3) {
		animation-delay: calc(-1 * var(--speed) / 8 * 1ms);
	}
`;

export function Spinner({ color, borderWidth, size }) {
	return (
		<SpinnerStyled color={color} borderWidth={borderWidth} size={size}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</SpinnerStyled>
	);
}
