import styled from "styled-components";

const Scale = styled.div`
	--size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 75 : size === "lg" ? 100 : 50)}px;
	--speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1200)}ms;
	--color: ${({ color }) => color};
	--color2: ${({ color2 }) => color2};
	width: var(--size);
	height: var(--size);
	animation: rotate2 var(--speed) linear infinite;
	&::after,
	&::before {
		content: "";
		display: block;
		width: 60%;
		height: 60%;
		background-color: var(--color, white);
		border-radius: 100%;
		animation: scale2 var(--speed) ease-in-out infinite;
	}
	&::before {
		animation-delay: -1s;
		background-color: var(--color2, var(--color));
	}

	@keyframes rotate2 {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes scale2 {
		0%,
		100% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
	}
`;
export default Scale;
