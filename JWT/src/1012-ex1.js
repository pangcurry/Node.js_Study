//nodejs 에서 Authorization 헤더를 통해 토큰을 전달할 때,
//토큰 앞에 'bearer ' 가 붙어서 온다. (이유는 잘 모르겠다.)
//그러므로 문자열을 잘라야한다.
//문자열 자르기 위해서 함수를 사용한다.
// string.split(" "); ---> 공백을 기준으로 나누어서 배열로 만든다.
// string.substr(7,143); ---> 문자열중 (처음 0번부터 시작한다) 7번째문자부터 143길이까지 문자열을 가져온다.

//split();
const bearer = await bearerHeader.split(" ");
const token = bearer[1];// token

//substr();
const bearer = await bearerHeader.substr(7,143);

// 만약 error중에서 split is not defined 와 같은 기본 함수 오류가 뜬다면
// 해당 문자열이 비어있어 error가 뜰 가능성이 있다.

// 1014 추가
// 토큰을 받을 때 substr()로 길이를 구하고 자르기 보단,
// split()으로 배열에 담은 다음 인덱스 1번을 뽑아 토큰으로
// 만드는 것이 좋다.

