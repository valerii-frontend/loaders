import styled from "styled-components";

const TextStyled = styled.div`
	--size: ${({ size }) => (size === "sm" ? 20 : size === "md" ? 30 : size === "lg" ? 40 : 30)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1500)}ms;
	--color: ${({ color }) => color};
	--uppercase: ${({ uppercase }) => (uppercase ? "uppercase" : "normal")};
	text-transform: var(--uppercase);
	letter-spacing: 2px;
	line-height: 100%;
	position: relative;
	font-weight: 700;
	& span {
		font-family: monospace;
		font-size: var(--size);
		color: rgba(255, 255, 255, 0.2);
		animation: scale calc(var(--speed) / 2) linear infinite alternate;
		display: flex;
		text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
		&:after {
			content: "${({ text }) => text ?? "Loading"}";
			position: absolute;
			font: inherit;
			top: 0;
			left: 0;
			color: var(--color, green);
			text-shadow: 1px 0 0 black, 0 1px 0 black, -1px 0 0 black, 0 -1px 0 black;
			animation: text var(--speed) linear infinite;
			z-index: 1;
		}
	}
	@keyframes scale {
		from {
			transform: scale(1);
		}
		100% {
			transform: scale(1.1);
		}
	}
	@keyframes text {
		from {
			clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
		}
		80%,
		100% {
			clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
		}
	}
`;

export default function Text({ color, size, speed, text, uppercase }) {
	return (
		<TextStyled color={color} size={size} speed={speed} text={text} uppercase={uppercase}>
			<span>{text ?? "Loading"}</span>
		</TextStyled>
	);
}
