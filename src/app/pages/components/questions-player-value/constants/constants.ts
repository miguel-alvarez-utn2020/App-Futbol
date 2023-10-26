export type AnswersQuestions = {
  questionTitle: string;
  questionDescription: string;
  answersKey: string;
  indexAnswersHistory: number[];
  speed?: Answer[];
  def?: Answer[];
  drible?: Answer[];
  shot?: Answer[];
  teamPlay?: Answer[];
};

export type Answer = {
  id: number;
  active: boolean;
  answer: string;
  answersValue: number;
  fcName: string;
};

export const ANSWERS_QUESTIONS: AnswersQuestions[] = [
  {
    questionTitle: 'Speed',
    questionDescription: 'Description',
    answersKey: 'speed',
    indexAnswersHistory: [],
    speed: [
      {
        id: 1,
        active: false,
        answer: 'speed 1',
        answersValue: 10,
        fcName: 'speed',
      },
      {
        id: 2,
        active: false,
        answer: 'speed 2',
        answersValue: 20,
        fcName: 'speed',
      },
      {
        id: 3,
        active: false,
        answer: 'speed 3',
        answersValue: 30,
        fcName: 'speed',
      },
      {
        id: 4,
        active: false,
        answer: 'speed 4',
        answersValue: 40,
        fcName: 'speed',
      },
      {
        id: 5,
        active: false,
        answer: 'speed 5',
        answersValue: 50,
        fcName: 'speed',
      },
    ],
  },
  {
    questionTitle: 'Def',
    questionDescription: 'Description',
    answersKey: 'def',
    indexAnswersHistory: [],
    def: [
      {
        id: 6,
        active: false,
        answer: 'def 1',
        answersValue: 10,
        fcName: 'def',
      },
      {
        id: 7,
        active: false,
        answer: 'def 2',
        answersValue: 20,
        fcName: 'def',
      },
      {
        id: 8,
        active: false,
        answer: 'def 3',
        answersValue: 30,
        fcName: 'def',
      },
      {
        id: 9,
        active: false,
        answer: 'def 4',
        answersValue: 40,
        fcName: 'def',
      },
      {
        id: 10,
        active: false,
        answer: 'def 5',
        answersValue: 50,
        fcName: 'def',
      },
    ],
  },
  {
    questionTitle: 'Drible',
    questionDescription: 'Description',
    answersKey: 'drible',
    indexAnswersHistory: [],
    drible: [
      {
        id: 11,
        active: false,
        answer: 'drible 1',
        answersValue: 10,
        fcName: 'drible',
      },
      {
        id: 12,
        active: false,
        answer: 'drible 2',
        answersValue: 20,
        fcName: 'drible',
      },
      {
        id: 13,
        active: false,
        answer: 'drible 3',
        answersValue: 30,
        fcName: 'drible',
      },
      {
        id: 14,
        active: false,
        answer: 'drible 4',
        answersValue: 40,
        fcName: 'drible',
      },
      {
        id: 15,
        active: false,
        answer: 'drible 5',
        answersValue: 50,
        fcName: 'drible',
      },
    ],
  },
  {
    questionTitle: 'SHOT',
    questionDescription: 'Description',
    answersKey: 'shot',
    indexAnswersHistory: [],
    shot: [
      {
        id: 16,
        active: false,
        answer: 'shot 1',
        answersValue: 10,
        fcName: 'shot',
      },
      {
        id: 17,
        active: false,
        answer: 'shot 2',
        answersValue: 20,
        fcName: 'shot',
      },
      {
        id: 18,
        active: false,
        answer: 'shot 3',
        answersValue: 30,
        fcName: 'shot',
      },
      {
        id: 19,
        active: false,
        answer: 'shot 4',
        answersValue: 40,
        fcName: 'shot',
      },
      {
        id: 20,
        active: false,
        answer: 'shot 5',
        answersValue: 50,
        fcName: 'shot',
      },
    ],
  },
  {
    questionTitle: 'TEAM PLAY',
    questionDescription: 'Description',
    answersKey: 'teamPlay',
    indexAnswersHistory: [],
    teamPlay: [
      {
        id: 21,
        active: false,
        answer: 'teamPlay 1',
        answersValue: 10,
        fcName: 'teamPlay',
      },
      {
        id: 22,
        active: false,
        answer: 'teamPlay 2',
        answersValue: 20,
        fcName: 'teamPlay',
      },
      {
        id: 23,
        active: false,
        answer: 'teamPlay 3',
        answersValue: 30,
        fcName: 'teamPlay',
      },
      {
        id: 25,
        active: false,
        answer: 'teamPlay 4',
        answersValue: 40,
        fcName: 'teamPlay',
      },
      {
        id: 25,
        active: false,
        answer: 'teamPlay 5',
        answersValue: 50,
        fcName: 'teamPlay',
      },
    ],
  },
];


