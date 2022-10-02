import styled from "styled-components";

const DotsStyled = styled.div`
	display: flex;
	gap: 10px;
	height: 75px;
	--delay: 0.15s;
	span {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		animation: balls 1.5s ease-in-out infinite;
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
			box-shadow: 0 40px 0 0px #fff;
		}
		40% {
			box-shadow: 0 40px 0 -20px #fff;
		}
	}
`;

export default function Dots() {
	return (
		<DotsStyled>
			<span></span>
			<span></span>
			<span></span>
		</DotsStyled>
	);
}
