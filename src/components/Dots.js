import styled from "styled-components";

const DotsStyled = styled.div`
	--size: ${({ size }) => (size === "sm" ? 15 : size === "md" ? 30 : size === "lg" ? 45 : 30)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1500)}ms;
	--color: ${({ color }) => color};
	display: flex;
	align-items: center;
	gap: calc(var(--size) / 3);
	height: 100px;
	--delay: 0.15s;
	span {
		height: var(--size);
		width: var(--size);
		margin-bottom: calc(var(--size) * 2.33);
		border-radius: 50%;
		animation: balls var(--speed) ease-in-out infinite;
		&:nth-child(1) {
			animation-delay: var(--delay);
		}
		&:nth-child(2) {
			animation-delay: calc(var(--delay) * 2);
		}
		&:nth-child(3) {
			animation-delay: calc(var(--delay) * 3);
		}
		&:nth-child(4) {
			animation-delay: calc(var(--delay) * 4);
		}
		&:nth-child(5) {
			animation-delay: calc(var(--delay) * 5);
		}
	}
	@keyframes balls {
		0%,
		80%,
		100% {
			box-shadow: 0 calc(var(--size) * 1.33) 0 0px var(--color, white);
		}
		40% {
			box-shadow: 0 calc(var(--size) * 1.33) 0 calc(var(--size) * -0.67) var(--color, white);
		}
	}
`;

export default function Dots({ size, speed, color, count }) {
	let childs = [..."s".repeat(count >= 3 && count <= 5 ? count : 3)];
	return (
		<DotsStyled size={size} speed={speed} color={color}>
			{childs.map((s, i) => (
				<span key={i}></span>
			))}
		</DotsStyled>
	);
}
