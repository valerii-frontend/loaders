import styled from "styled-components";

const BarsStyled = styled.div`
	--size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
	--width: ${({ _width }) => (_width >= 5 && _width <= 15 ? _width : 5)}px;
	--color: ${({ color }) => color || "white"};
	--speed: ${({ speed }) => (speed >= 500 && speed <= 2000 ? speed : 1000)}ms;
	display: flex;
	flex-direction: row;
	height: var(--size);
	min-width: var(--size);
	justify-content: center;
	align-items: center;
	@keyframes bars {
		0%,
		80%,
		100% {
			height: calc(var(--size) / 3);
		}
		40% {
			height: calc(var(--size) * 1.2);
		}
	}
	& span {
		width: var(--width);
		background-color: var(--color);
		margin-right: var(--width);
		animation: bars var(--speed) ease-in-out infinite;
		--delay: 0.15s;
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
		&:nth-child(6) {
			animation-delay: calc(var(--delay) * 6);
		}
		&:nth-child(7) {
			animation-delay: calc(var(--delay) * 7);
		}
	}
`;

export default function Bars({ color, _width, size, count, speed }) {
	let childs = [..."s".repeat(count >= 3 && count <= 7 ? count : 3)];
	return (
		<BarsStyled color={color} _width={_width} size={size} speed={speed}>
			{childs.map((s, i) => (
				<span key={i}></span>
			))}
		</BarsStyled>
	);
}
