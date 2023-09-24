type TableCategory = [string, string];

interface ITableConstant {
  [key: string]: {
    CATEGORY: TableCategory[];
    WIDTH_RATIO: number[];
  };
}

export const TABLE_CONSTANT: ITableConstant = {
  STUDY: {
    CATEGORY: [
      ["랭킹", "ranking"],
      ["스터디", "name"],
      ["소개", "about"],
      ["인원", "capacity"],
      ["경험치", "xp"],
    ],
    WIDTH_RATIO: [1, 1, 2, 1, 1],
  },
  INVITE: {
    CATEGORY: [
      ["스터디", "name"],
      ["소개", "about"],
      ["인원", "capacity"],
      ["응답", "user_invite"],
    ],
    WIDTH_RATIO: [1, 2, 1, 1],
  },
  MEMBER: {
    CATEGORY: [
      ["랭킹", "ranking"],
      ["백준", "baekJoonName"],
      ["닉네임", "nickname"],
      ["소개", "about"],
    ],
    WIDTH_RATIO: [1, 1, 1, 1],
  },
  MISSION: {
    CATEGORY: [
      ["규칙", "name"],
      ["소개", "about"],
      ["시작일", "startDate"],
      ["종료일", "deadline"],
      ["상태", "mission"],
    ],
    WIDTH_RATIO: [1, 2, 1, 1, 1],
  },
  MISSION_PROBLEM: {
    CATEGORY: [
      ["난이도", "xp"],
      ["문제 번호", "problemNumber"],
      ["문제 이름", "problemName"],
      ["삭제", "remove"],
    ],
    WIDTH_RATIO: [1, 1, 1, 1],
  },
  REQUEST: {
    CATEGORY: [
      ["랭킹", "id"],
      ["닉네임", "nickname"],
      ["소개", "about"],
      ["응답", "request"],
    ],
    WIDTH_RATIO: [1, 1, 2, 1],
  },
};
