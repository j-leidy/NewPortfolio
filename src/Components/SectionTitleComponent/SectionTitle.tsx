import { css, styled } from "styled-components";

const SectionTitleText = styled.div``;

interface SubTextProps {
    $fontSize: number;
}
const SectionTitleSubText = styled.div<SubTextProps>`
    font-size: ${(props) => props.$fontSize * 0.4}px;
    font-weight: normal;
`;
interface ContainerProps {
    $showBorder: boolean;
    $useThemeColors: boolean;
    $textColor: string;
    $borderColor: string;
    $fontSize: number;
    $borderThickness: number;
}
const SectionTitleContainer = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.$fontSize}px;
    transition: ${(props) => props.theme.animationTime.short}s all ease;
    width: 80%;
    padding-bottom: 20px;
    padding-top: 200px;
    text-transform: uppercase;
    font-weight: 600;
    ${({
        $useThemeColors,
        $borderThickness,
        $textColor,
        $borderColor,
        theme,
    }) =>
        $useThemeColors
            ? css`
                  color: ${theme.colors.text};
                  border-bottom: ${$borderThickness}px solid
                      ${theme.colors.accentMain};
              `
            : css`
                  color: ${$textColor};
                  border-bottom: ${$borderThickness}px solid ${$borderColor};
              `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 90%;
    }
`;

const defaultSectionTitleProps = {
    titleText: "Title",
    fontSize: 30,
    borderThickness: 1,
    giveBottomBorder: true,
    useThemeColors: true,
    textColor: "#ffffff",
    borderColor: "#ffffff",
    includeSubText: false,
    subText: "sub text",
};

interface SectionTitleProps {
    titleText?: string;
    fontSize?: number;
    borderThickness?: number;
    giveBottomBorder?: boolean;
    useThemeColors?: boolean;
    textColor?: string;
    borderColor?: string;
    includeSubText?: boolean;
    subText?: string;
}

export const SectionTitle = ({
    titleText = defaultSectionTitleProps.titleText,
    fontSize = defaultSectionTitleProps.fontSize,
    borderThickness = defaultSectionTitleProps.borderThickness,
    giveBottomBorder = defaultSectionTitleProps.giveBottomBorder,
    useThemeColors = defaultSectionTitleProps.useThemeColors,
    textColor = defaultSectionTitleProps.textColor,
    borderColor = defaultSectionTitleProps.borderColor,
    includeSubText = defaultSectionTitleProps.includeSubText,
    subText = defaultSectionTitleProps.subText,
}: SectionTitleProps) => {
    return (
        <SectionTitleContainer
            $showBorder={giveBottomBorder}
            $useThemeColors={useThemeColors}
            $textColor={textColor}
            $borderColor={borderColor}
            $borderThickness={borderThickness}
            $fontSize={fontSize}
        >
            <SectionTitleText>{titleText}</SectionTitleText>
            {includeSubText && (
                <SectionTitleSubText $fontSize={fontSize}>
                    {subText}
                </SectionTitleSubText>
            )}
        </SectionTitleContainer>
    );
};