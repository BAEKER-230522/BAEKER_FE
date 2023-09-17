export const calculateDuration = (date1: string, date2: string): number => {
  // 문자열을 날짜 객체로 변환
  const startDate = new Date(date1);
  const endDate = new Date(date2);
  // 두 날짜 간의 차이를 밀리초 단위로 계산
  const differenceInMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
  // 밀리초를 일 단위로 변환 (1일 = 24*60*60*1000 밀리초)
  const differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);
  return Math.round(differenceInDays);
};

export const getTodayDateFormatted = () => {
  const today = new Date();
  const year = today.getFullYear();
  // getMonth는 0부터 시작하므로 1을 더해줍니다.
  let month = (today.getMonth() + 1).toString();
  // getDay는 1부터 시작하므로 변경하지 않습니다.
  let day = today.getDate().toString();
  // 월과 일이 한 자리일 경우 앞에 0을 붙여줍니다.
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};

export const isFuture = (targetDate: string) => {
  const today = new Date();
  const date = new Date(targetDate);
  // 오늘의 날짜만 가져옴 (시간, 분, 초는 무시)
  const simplifiedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // 인자로 받은 날짜의 연, 월, 일만 가져옴
  const simplifiedTargetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return simplifiedToday.getTime() >= simplifiedTargetDate.getTime();
};
