import { styled, keyframes,css } from "styled-components";

export const ExperienceContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 5px;
    align-items: center;
`;
export const ExperienceName = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    @media screen and (max-width: ${props=>props.theme.breakpoint}px){
        text-align: center;
    }
`;
export const ExperienceTitle = styled.div`
    @media screen and (max-width: ${props=>props.theme.breakpoint}px){
        text-align: center;
    }
`;
export const ExperienceDate = styled.div`
    width: auto;
    white-space: nowrap;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        white-space: pre-wrap;
        font-size: 12px;
        width: auto;
        text-align: center;
    }
`;
export const ExperienceLogo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding-right: 5px;
`;
export const ExperienceTitleNameLogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: auto;
        flex-direction: column;
    }
`;
export const ExperienceNameAndTitle = styled.div``;

export const ExperienceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding-left: 5px;
    padding-right: 5px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100%;
        padding: 0;
        flex-direction: column;
    }
`;

const ExperienceBodyKeyframes = keyframes`
    0%{
        max-height: 0;
        opacity: 0;
    }
    100%{
        opacity:1;
        max-height: 300px;
    }
`;
interface ExperienceBodyProps {
    $showBody: boolean;
}
export const ExperienceBody = styled.div<ExperienceBodyProps>`
    width: 80%;
    padding: 0;
    overflow: hidden;
    min-height: 0;
    max-height: 0;
    opacity: 0;
    ${({ $showBody }) =>
        $showBody &&
        css`
            padding-top: 5%;
            animation: ${ExperienceBodyKeyframes} 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: 1;
        `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 90%;
        padding: 0;
    }
`;
export const ExperienceBodyItem = styled.div``;