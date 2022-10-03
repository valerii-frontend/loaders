import styled from "styled-components";

const RingStyled = styled.div`
	--size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
	--border-width: ${({ _width }) => (_width >= 2 && _width <= 20 ? _width : 7)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1500)}ms;
	--color: ${({ color }) => color};
	width: var(--size);
	height: var(--size);
	border: var(--border-width) dashed var(--color, white);
	border-radius: 50%;
	@keyframes ring {
		0 {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	animation: ring var(--speed) 300ms cubic-bezier(0.15, 1.2, 0.45, 0.65) infinite;
`;

export default function Ring({ size, _width, color, speed }) {
	return <RingStyled size={size} _width={_width} color={color} speed={speed}></RingStyled>;
}
