export interface answerType {
  id: number;
  a: string;
  atype: "DATE" | "GENDER" | "LOCATION" | "TEXT" | "SEL";
}

export interface groupType {
  id: number;
  name: string;
  seq: number;
}

export interface questionType {
  answer: answerType[];
  group: groupType;
  id: number;
  q: string;
  qtype: "PERSON" | "LOCATION" | "SYMTM" | "VACCINE";
}

export default interface surveyType {
  finish: string;
  id: number;
  name: string;
  question: questionType[];
  seq: number;
  start: string;
}
