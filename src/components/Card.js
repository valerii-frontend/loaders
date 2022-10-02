import styled from "styled-components";

const CardStyled = styled.div`
	--size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 75 : size === "lg" ? 100 : 50)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1200)}ms;
	--color: ${({ color }) => color};
	--color2: ${({ color2 }) => color2};
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: calc(var(--size) + 25px);
	& span {
		width: var(--size);
		height: var(--size);
		background-color: var(--color, white);
		animation: rotate var(--speed) ease-in-out infinite;
	}
	@keyframes rotate {
		0% {
			transform: perspective(100px) rotateY(0deg);
		}
		50% {
			transform: perspective(100px) rotateX(-180deg) rotateY(0deg);
			background-color: var(--color2, var(--color));
		}
		100% {
			transform: perspective(100px) rotateX(-180deg) rotateY(-180deg);
		}
	}
`;

export default function Card({ size, speed, color, color2 }) {
	return (
		<CardStyled size={size} speed={speed} color={color} color2={color2}>
			<span></span>
		</CardStyled>
	);
}
