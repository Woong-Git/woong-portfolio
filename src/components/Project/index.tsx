import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { ProjectProps, WorkExperienceProps } from "@/types";

type ProjectComponentProps = {
    project: ProjectProps[];
    workExperience: WorkExperienceProps[];
};

const Project = ({ project, workExperience }: ProjectComponentProps) => {
    // workExperience 배열을 역순으로 정렬
    const reversedExperienceList = (workExperience ?? []).slice().reverse();
    console.log("workExperience:", reversedExperienceList);

    return (
        <>
            {reversedExperienceList.map((item, index) => {
                const originalIndex = workExperience.length - 1 - index;
                return (
                    <div key={originalIndex}>
                        <SectionTitle>{item.name}</SectionTitle>
                        <div className="flex flex-col gap-24">
                            {[...project]
                                .reverse()
                                .filter((project) => project.experience === originalIndex)
                                .map((project) => (
                                    <ProjectItem key={project.id} {...project} />
                                ))}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Project;
