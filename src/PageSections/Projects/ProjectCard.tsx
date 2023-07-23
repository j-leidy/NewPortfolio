import { useEffect, useRef, useState } from "react";
import {
    ProjectCardContainer,
    ProjectCardImage,
    ProjectCardSkillIcon,
    ProjectCardSkills,
    ProjectCardTitle,
    ProjectCardWithtitle,
} from "./ProjectCardStyle";

interface ProjectCardProps {
    title: string;
    image: string;
    skills: string[];
    linkToProject: string;
}

export const ProjectCard = ({
    title,
    image,
    skills,
    linkToProject,
}: ProjectCardProps) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const [cardIsInView, setCardIsInView] = useState<boolean>(false);
    const [titleIsInView, setTitleIsInView] = useState<boolean>(false);
    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (titleRef.current && cardRef.current) {
                        titleRef.current.className === entry.target.className &&
                            setTitleIsInView(entry.isIntersecting);
                        cardRef.current.className === entry.target.className &&
                            setCardIsInView(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.05 }
        );
        if (cardRef.current && titleRef.current) {
            const refs = [cardRef.current, titleRef.current];
            refs.forEach((ref) => observer.observe(ref));
        }
        return () => observer.disconnect();
    }, [cardRef, titleRef]);
    return (
        <ProjectCardWithtitle>
            <ProjectCardTitle $inView={titleIsInView} ref={titleRef}>
                {title}
                <ProjectCardSkills>
                    {skills.map((skill, idx) => {
                        return (
                            <ProjectCardSkillIcon
                                $inView={titleIsInView}
                                $index={idx}
                                src={skill}
                            />
                        );
                    })}
                </ProjectCardSkills>
            </ProjectCardTitle>
            <ProjectCardContainer
                href={linkToProject}
                target="_blank"
                $inView={cardIsInView}
                ref={cardRef}
            >
                <ProjectCardImage src={image} />
            </ProjectCardContainer>
        </ProjectCardWithtitle>
    );
};
