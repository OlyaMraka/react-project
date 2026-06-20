export type CourseTitleCardType = {
    title: string;
}

export type CourseAndDurationCardType = {
    title: string;
    monthDuration: number;
}

export type Simpson = {
    name: string;
    surname: string;
    age: number;
    info: string;
    photo: string;
}

export type CharacterCard = {
    children: Simpson;
}

export type FamilyType = {
    simpsons: Simpson[];
}

export type CourseType = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[],
}

export type CourseContainer = {
    courses: CourseType[];
}
