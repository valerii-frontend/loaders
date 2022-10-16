import styled from "styled-components";

const FrameStyled = styled.div`
	--size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
	--border-width: ${({ _width }) => (_width >= 1 && _width <= 50 ? _width : 5)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1200)}ms;
	--color: ${({ color }) => color};
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
		border-color: var(--color, white) transparent transparent transparent;
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
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default function Frame({ color, _width, size, speed }) {
	return (
		<FrameStyled color={color} _width={_width} size={size} speed={speed}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</FrameStyled>
	);
}
