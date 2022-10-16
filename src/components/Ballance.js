import React from "react";
import styled from "styled-components";

const BallanceStyled = styled.div`
	--size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 75 : size === "lg" ? 100 : 50)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1200)}ms;
	--color: ${({ color }) => color};
	width: var(--size);
	height: var(--size);
	&::after {
		content: "";
		height: 0;
		width: 0;
		margin: 0;
		display: block;
		border-width: calc(var(--size) / 2);
		border-style: solid;
		border-radius: 50%;
		border-color: var(--color, white) transparent;
		animation: load var(--speed) ease-in-out infinite;
	}
	@keyframes load {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(-180deg);
		}
	}
`;

export default function Ballance({ color, size, speed }) {
	return <BallanceStyled color={color} size={size} speed={speed} />;
}
