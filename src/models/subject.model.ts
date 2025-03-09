export interface Syllabus{
    name: string;
    url:string;
}

export interface Subject{
    name: string;
    syllabus: Array<Syllabus>;
    url:string;
}
