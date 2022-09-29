import styled from "styled-components";

export const Circle = styled.div`
	--size: ${(props) => props.size ?? 50}px;
	height: var(--size);
	width: var(--size);
	border-top: 3px solid ${(props) => props.color ?? "white"};
	border-radius: 100%;
	animation: spin ${(props) => props.speed ?? 1000}ms ${(props) => props.animation ?? "linear"} infinite;
`;
