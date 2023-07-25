
// "mission" : INACTIVE, ACTIVE, DONE
// "status" : FAIL, SUCCESS
export const mock_data = [
  {
    id: 1,
    name: "이름",
    about: "소개",
    createDate: null,
    modifyDate: null,
    ruleId: 1,
    mission: "ACTIVE",
    status: "FAIL",
    startDate: "2023-07-20",
    deadline: "2023-07-23",
    problems: [
      {
        problemName: "A+B",
        problemNumber: 1000
      },
      {
        problemName: "A+B",
        problemNumber: 1001
      }
    ]
  },
  {
    id: 2,
    name: "이름",
    about: "소개",
    createDate: null,
    modifyDate: null,
    ruleId: 1,
    mission: "DONE",
    status: "SUCCESS",
    startDate: "2023-07-21",
    deadline: "2023-07-26",
    problems: [
      {
        problemName: "A+B",
        problemNumber: 1000
      },
      {
        problemName: "터렛",
        problemNumber: 1001
      },
      {
        problemName: "A+B",
        problemNumber: 1002
      },
      {
        problemName: "A+B",
        problemNumber: 1003
      }
    ]
  }
]
