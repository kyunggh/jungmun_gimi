// 공통변수
let font; // 폰트 로드

let state = "warning"; // 스테이지 설정

// 토크박스 위치와 크기_가운데 정렬 완료
let talkX = 70;
let talkY = 420;
let talkW = 850;
let talkH = 240;
let textBoxImg;

//토크박스 내 텍스트 위치와 크기_중앙 정렬 완료
let textX = talkX + 60;
let textY = talkY + 100;
let textS = 20;

// 타이핑 관련 변수
let currentSentenceIndex = 0; // 현재 문장의 인덱스
let currentText = ""; // 현재 타이핑된 텍스트
let textIndex = 0; // 현재 문장에서 타이핑 중인 위치
let typingSpeed = 80; // 타이핑 속도 (밀리초 단위)
let lastTypedTime = 0; // 마지막으로 타이핑된 시간 기록
let maxWidth = 700; // 텍스트가 넘어설 최대 너비
let progress = 0; // 진행 상황 변수

// stage 1 변수
let warningImage, openingImage;
let startButton;
let startTime;
let buttonX, buttonY, buttonWidth, buttonHeight; // start버튼 위치 및 크기

let kimkoo;
let mission1;
let typewriter;
let inputBox;
let stage1correctAnswer = "보성사";
let showAnswerMessage = false; // 정답 메시지 표시 여부
let answerMessageStartTime; // 정답 메시지 표시 시작 시간

let answerFalse = false;
let showHint = false;
let showTime = 3000;

// stage 2 변수
let check = false; //작동 체크용

let bosungStartMent = true; //시작 멘트

let bosung; //보성 이미지
// let mouseAfter; // 마우스 인터랙션 이미지
// let mouseBefore; // 기본 마우스 이미지
let box; // 상자
let boxGo; // 상자 객체 전역 변수로 선언
let invento; // 인벤토리
let inven; // 인벤토리 객체 전역 변수로 선언
let haedok; //해독표
let haedokGo; //해독표 객체 전역 변수로 선언
let haedokImg; //해독표 확대
let free; //독립선언문
let freeGo; //독립선언문 객체 전역 변수로 선언
let freeImg; //독립선언 확대
let imho; //암호표
let imhoGo; //암호표 객체 전역 변수로 선언
let imhoImg; //암호표 확대
let imhoGlasses; //암호표 돋보기로

let calendar; //달력
let cX, cY, cW, cH;
let calendarClicked = false;
let calendarImg; // 달력 확대
let cXI, cYI, cWI, cHI; //객체 나오는 이미지의 크기

let boxClick = false; // 상자 클릭 여부
let boxSolve = false; //자물쇠 해제 여부
let boxError = false; //자물쇠 오답 여부

let freeClick = false; // 독립 선언 클릭 여부
let imhoClick = false; // 암호표 클릭 여부
let glassesClick = false; //돋보기 클릭 여부
let haedokClick = false; // 해독표 클릭 여부

let imhoError = false; //암호 오답 여부

let mouseOver = false; // 마우스가 객체 위에 있는지 확인
let mouseIf = false; // 마우스 오브젝트 위에 있는지
let mouseAble = true; //마우스 모양이 이대로 괜찮은지

let n = 7; // 오브젝트 갯수(변경 가능)
let objArr = []; // 객체 배열 형성

let imhoTextBox, boxTextBox; // 정답 입력 텍스트 박스 class를 위함

let invenGap = 5; // 인벤토리 오브젝트 정렬 시 간격
let invenW = 70;
let invenH = 500;
let invenX = 30;
let invenY = 133;
let invenArr = []; // 인벤 내 배열

// stage 3 변수
let independence;
let maskLayer;
let answer;
let customCursor;
let maskOn

let stage3correctAnswer = "대한독립만세";
let stage3Hint = false;

let mic;

let speechRec; // 음성인식 코드
let continuous = false;
let interim = false;

let speech = "";
let speechReady = false;

let manse;

//stage 4 변수
let cam;
let supbase64Imagee;
let qrcode;
let captureTime;
let qrCodeLoded = false;
let imageName = ""
let currentFrameImage;
//여기까지 12.17수정

let hitSound; //기절을 위한 총소리

let camSound; //사진 촬영시 재생되는 소리
let card; //수형카드 배경

let heungmuso; //형무소 이미지

let tageakTongbo; //타격통보 픽셀 이미지
let tageakTongboImg; //타격통보 확대 이미지
let tageakTongboClicked = false; //타격통보 클릭여부
let tageakSound; //타격통보 관련 소리
let doorLock; //자물쇠 이미지
let doorLockClicked = false;
let doorLockCheck = "945",
  doorLockInput = "",
  doorLockSolve = false,
  doorLockError = false;
let doorOpenSound;
let firstMessage = "엇 이게 무슨 소리지? 소리가 자꾸 반복되는 것 같아";
let secondMessage = "어떤 단서가 있을까?",
  displayText = "",
  errorMessageTime = 0;
let tX = 250,
  tY = 150,
  tW = 50,
  tH = 50; //타격통보 크기
let lX = 570,
  lY = 270,
  lW = 35,
  lH = 35; // 자물쇠 크기
let hitSoundPlayed = false; //총 소리 재생 여부 추적 플래그

//  ending 변수
let bgImg, kimkooImg, newspaper, page1, page2, page3, nextButton;

let historyImages = [];
let endingLetter, letterIcon;
let newspaperObj,
  next,
  next2,
  next3,
  letterButton,
  finalNext,
  historyNext,
  resetButton;
let historyNextButtons = [];
let transition, textDisplay;
let currentPage = 1,
  currentHistoryIndex = 0;
let kimkooAlpha = 0,
  kimTextAlpha = 0,
  letterDisplayStartTime = 0;
let kim1 = "눈길을 걸어갈 때 어지럽게 걷지 말기를.";
let kim2 = "오늘 내가 걸어간 길이 훗날 다른 사람의 이정표가 되리니.";
let kim3 = "- 백범 김구 -";
let letterFont;
let endingCreditBoldFont;
let endingCreditFont;
let history1,
  history2,
  history3,
  history4,
  history5,
  history6,
  history7,
  endingCredit;
let slides = [];
let currentSlide;
let endingBGM;
let gameover;

function preload() {
  // 공통
  font = loadFont("assets/DungGeunMo.ttf"); //폰트
  textBoxImg = loadImage("assets/textBox.png");

  // stage 1 로드
  warningImage = loadImage("/assets/BGwarning.jpg");
  openingImage = loadImage("/assets/BGopening.jpg");
  startButton = loadImage("/assets/startButton.png");

  kimkoo = loadImage("/assets/kimkoo.png");
  textBoxImg = loadImage("/assets/textBox.png");
  mission1 = loadImage("/assets/mission 1.png");
  typewriter = loadSound("assets/TypeWriter.mp3");

  // stage 2 로드
  bosung = loadImage("assets/bosung.png"); // 배경
  // mouseBefore = loadImage("assets/prePo.png"); // 기본 마우스
  // mouseAfter = loadImage("assets/afPo.png"); // 마우스 인터랙션
  box = loadImage("assets/box.png"); // 자물쇠 상자
  invento = loadImage("assets/inven.png"); // 인벤토리
  haedok = loadImage("assets/haedok.png"); //해독표
  haedokImg = loadImage("assets/haedokImg.png"); //해독표 확대
  calendar = loadImage("assets/calendar.png"); //달력
  calendarImg = loadImage("assets/calendarImg.png"); //달력 확대
  free = loadImage("assets/free.png"); //독립선언서
  freeImg = loadImage("assets/freeImg.png"); //독립선언 확대
  imho = loadImage("assets/imho.png"); //암호표
  imhoImg = loadImage("assets/imhoImg.png"); //암호표 확대
  imhoGlasses = loadImage("assets/imhoGlasses.png"); //암호표 돋보기로

  // stage 3 로드
  topgoal = loadImage("assets/topgoal.jpg");

  independence = loadImage("/assets/independence.jpg"); // 이미지 로드
  answer = loadImage("/assets/answer.jpg");
  customCursor = loadImage("assets/glasses.png");

  mic = loadImage("assets/mic.png");

  soundFormats("mp3");
  manse = loadSound("/assets/mansesound");

  // stage 4 로그
  font = loadFont("assets/DungGeunMo.ttf");
  card = loadImage("assets/card.jpg");
  camSound = loadSound("assets/camSound.mp3");
  heungmuso = loadImage("assets/heungmuso.jpg");
  tageakTongbo = loadImage("assets/tageakTongbo.png");
  tageakTongboImg = loadImage("assets/tageakTongboImg.png");
  doorLock = loadImage("assets/doorlock.png");
  doorOpenSound = loadSound("assets/doorOpenSound.mp3"); //자물쇠 해제 시 재생되는 문열림 소리
  tageakSound = loadSound("assets/tageakSound.mp3");
  hitSound = loadSound("assets/hitSound.mp3");

  // ending 로드
  bgImg = loadImage("assets/prison_sample1.jpg");
  kimkooImg = loadImage("assets/kimkooImg.jpg");
  newspaper = loadImage("assets/newspaper.png");
  page1 = loadImage("assets/page1.png");
  page2 = loadImage("assets/page2.png");
  page3 = loadImage("assets/page3.png");
  nextButton = loadImage("assets/nextButton.png");
  endingLetter = loadImage("assets/endingletter.png");
  letterIcon = loadImage("assets/letterIcon.png");
  letterFont = loadFont("assets/LEE_TAE_JOON.ttf");
  endingCreditFont = loadFont("assets/GeneralKimJwajin_Regular.ttf");
  endingCreditBoldFont = loadFont("assets/GeneralKimJwajin_Bold.ttf");
  history1 = loadImage("assets/1.b.png");
  history2 = loadImage("assets/2.c.png");
  history3 = loadImage("assets/3.t.png");
  history4 = loadImage("assets/4.sc.png");
  history5 = loadImage("assets/5.sh.png");
  history6 = loadImage("assets/6.m.png");
  history7 = loadImage("assets/7.k.png");
  endingCredit = loadImage("assets/endingcredit.png");
  endingBGM = loadSound("assets/endingBGM.mp3");
  gameover = loadImage("assets/gameover.png");
}

function setup() {
  createCanvas(1000, 600);
  // noCursor();

  textFont(font); //폰트 적용
  startTime = millis(); // 프로그램 시작 시간 기록

  // stage 1
  buttonX = width / 2;
  buttonY = height / 2 + 235;
  buttonWidth = 90;
  buttonHeight = 33;

  // 입력 창 생성
  inputBox = createInput("");
  inputBox.position(width / 2 - 100, height / 2 + 250);
  inputBox.size(200, 30);
  inputBox.hide(); // 초기에는 숨김 처리

  // stage 2
  boxGo = new object(box, 700, 150, 100, 100); // 박스 객체 선언
  inven = new object(invento, 15, 25, 100, 100); // 인벤 객체 선언
  //glassesGo = new object(glasses,300,300,200,200);//돋보기 객체 선언
  haedokGo = new object(haedok, 360, 480, 100, 100); //해독표
  freeGo = new object(free, 650, 150, 80, 80); //독립선언 객체(자물쇠 해제 이후 위치)
  imhoGo = new object(imho, 770, 150, 80, 80); //암호 객체(자물쇠 해제 이후 위치치)

  imhoTextBox = new textBox(textX, textY + textS - 7, 200, 25);
  boxTextBox = new textBox(textX, textY + textS - 7, 200, 25); //정답 입력 텍스트 class 선언

  freeGo.showOn = false;
  imhoGo.showOn = false; //처음에는 그리지 않음
  haedokGo.showOn = false;

  cXI = textX + 20;
  cYI = 10;
  cWI = talkW - textX;
  cHI = 480; //객체 클릭시 이미지의 크기와 위치

  // stage 3
  /*
  freeGo = new object(freeImg,650,150,80,80);
  invenArr[1] = freeGo;
  freeGo.showOn = false;

  inven = new object(invento, 15, 25, 100, 100); // 인벤 객체 선언
  */

  // 마스크 레이어 생성
  maskLayer = createGraphics(1000, 600);
  maskLayer.image(independence, 0, 0, 1000, 600); // 원본 이미지 복사

  // 입력 창 생성
  inputBox = createInput("");
  inputBox.position(width / 2 - 100, height / 2 + 250);
  inputBox.size(200, 30);
  inputBox.hide(); // 초기에는 숨김 처리

  // 음성인식 초기화
  let lang = "ko-KR";
  speechRec = new p5.SpeechRec(lang, gotSpeech);

  function gotSpeech() {
    if (speechRec.resultValue) {
      speechReady = false;
      speech = speechRec.resultString; // 음성 결과 저장
      console.log(speech);
    }
  }

  // stage 4   -> 12.17수정
  cam = createCapture(VIDEO);
  cam.hide();
  supabase = createClient(
    'https://ilursrdorhcyvfmhdamf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsdXJzcmRvcmhjeXZmbWhkYW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMjU3MTUsImV4cCI6MjA0OTkwMTcxNX0.RagN3XICUj1iu6pI8gCStVPEifUfZ4th3pr6OVLW2Ew'
  );
  tageakSound.playMode("sustain");

  // ending
  transition = new ScreenTransition(bgImg);
  newspaperObj = new InteractiveObject(
    newspaper,
    width / 2 - 60,
    400,
    100,
    100
  );
  next = new InteractiveObject(nextButton, width - 85, height - 120, 40, 40);
  next2 = new InteractiveObject(nextButton, width - 85, height - 120, 40, 40);
  next3 = new InteractiveObject(nextButton, width - 85, height - 120, 40, 40);
  letterButton = new InteractiveObject(
    letterIcon,
    width - 120,
    height - 120,
    100,
    100
  );
  currentSlide = -1;
  slides.push(
    new HistoryTransition(
      history1,
      "보성사",
      "1910년 서울에 설립되었던 인쇄소로 1919년\n3·1운동 때 발포된 독립선언서를 인쇄하였다.\n총 2만 1000매의 선언서를 성공적으로 인쇄한 후\n사장 이종일의 집에 가져다 놓았다.\n\n그리고 이 선언서를 28일 각지에 보냄으로써\n3월 1일 독립선언식을 거행할 수 있었던 것이다.\n완료된 선언서를 옮기던 중 일본 경찰의 검문을\n받았으나 족보라고 속여 무사히 옮길 수 있었고,\n예정대로 3.1 운동을 진행할 수 있었다.\n\n (스페이스로 이동)",
      (disableTransition = false)
    ),
    new HistoryTransition(
      history2,
      "조선독립신문",
      "1919년에 보성사에서 천도교의 지도자들이\n창간한 신문이다. 민족항일기에 서울에서 발간된\n지하신문의 하나로 초기 천도교 계열의 신문\n발행 관계자들이 모두 체포되자 9호부터는 이름\n모를 후계자들이 발행을 이어갔다.\n\n기사의 내용은 민족대표 33인의 태화관에서의\n<독립선언서>를 발표, 민족대표들의 순국결사의 뜻,\n독립운동의 확대 전망 등이 있다. 이 신문이 몇 호까지\n발행되었는지, 언제 중단되었는지는 정확히 알 수\n없으나 1920년 새로운 민간지의 발간이 허용되었던\n시기 전까지 계속되었으리라고 생각된다.\n\n (스페이스로 이동)",
      (disableTransition = false)
    ),
    new HistoryTransition(
      history3,
      "탑골공원",
      "1919년 3월 1일 민족대표 33인의 이름으로\n독립선언서가 낭독되고 독립만세운동이 일어난\n3.1 운동의 출발지이다.\n\n이곳에서 선언된 기미독립선언서는 조국의 독립을\n선언하는 내용과 인도주의에 입각한 비폭력적이고\n평화적인 방법으로 민족자결에 의한 자주 독립의\n전개 방법을 제시하고 있어, 오늘날 전해오는\n국내외 각국의 독립선언과 비교해보아도 손색이\n없는 명문으로 평가되고 있다.\n\n (스페이스로 이동)",
      (disableTransition = false)
    ),
    new HistoryTransition(
      history4,
      "독립운동가들의 암호",
      "일제강점기 당시 독립운동가들은 일제로부터\n정보를 숨기기 위해 그들 간의 체계적인 암호를\n만들어 사용하였다. 초기에는 단순한 방식이었지만,\n점차 진화해 독립운동을 이어나갔다.\n\n대표적인 예시로는 서대문형무소의 벽을 때려서\n의사를 전달하는 타벽통보법이 있다. 안창호와\n김정련은 실제 타벽통보법을 통해 소통하였다.\n이외에도 한글암호, 수기암호, 은어암호, 화학물질\n암호 등이 있다.\n\n (스페이스로 이동)",
      (disableTransition = false)
    ),
    new HistoryTransition(
      history5,
      "서대문형무소",
      "대한제국기에 조선통감부가 설치한 감옥으로,\n의병 등 반일세력을 탄압·수용할 목적에 따라\n만들어졌다. 일제가 대한제국기∼일제강점기에\n활동한 항일독립운동가들을 체계적으로 탄압하기\n위해 만든 곳으로, 항일독립운동사의 수난을\n압축적으로 보여주는 공간이다.\n\n1919년에는 3·1운동으로 인해 수감자가\n폭발적으로 증가하였으며, 시위관련자 1,600여 명을\n포함해 3,000여 명이 수용되었다. 유관순,\n한용운, 안창호, 여운형 등 수많은 독립운동가들이\n이곳에 수감되어 온갖 취조와 고문을 받았다.\n\n (스페이스로 이동)",
      (disableTransition = false)
    ),
    new HistoryTransition(
      history6,
      "3.1운동의 확산",
      "1919년 3월 1일에는 서울을 비롯해\n평양·진남포·안주·의주·선천·원산 등의\n주요 도시에서 독립선언서가 배포되어 운동이\n시작되었다. 이 시기에는 비폭력 투쟁을 특징으로\n했으며, 학생들이 주도적인 역할을 하였다.\n\n3월10일을 전후로 만세운동이 전국의 주요\n도시들로 확산되었고 상인과 노동자들도\n철시와 파업으로 적극적으로 참여했다.\n\n (스페이스로 이동)",
      (disableTransition = false)
    ),
    new HistoryTransition(
      history6,
      "3.1운동의 확산",
      "3월 중순 이후에는 도시뿐만 아니라 농촌에서도\n시위가 일상화되었다. 농민 등이 적극적으로\n참여하면서 시위의 규모도 커졌으며 시위의\n양상도 몽둥이와 죽창 등으로 무장하는\n폭력투쟁으로 발전하였다.\n\n전국 곳곳에서 지식인, 학생, 노동자, 농민, 상인 등\n다양한 계층이 참여하여 이후 대한민국 임시정부\n수립에 영향을 주었다. 또한, 이를 계기로 일제의\n무단통치 또한 문화통치로 바뀌었다.\n\n (스페이스로 이동)",
      (disableTransition = true)
    ),
    new HistoryTransition(
      history7,
      "김구",
      "민족의 지도자인 김구 선생은 자주독립을 위해\n일생을 바친 독립운동가이다.\n\n1919년 3·1운동 직후 상해로 망명하여 대한민국\n임시정부의 국무위원으로 역임했고, 1931년\n한인애국단을 조직하여 이봉창과 윤봉길의 의거를\n주도하고 항일무력투쟁을 전개했다.\n\n이후 1944년, 임시정부 주석으로 재임하다 환국한\n후 민족통일정부 수립에 전심하다가 1949년 육군\n소위 안두희에게 암살당했다.\n\n (스페이스로 이동)",
      (disableTransition = false)
    )
  );
}


function draw() {
  // console.log(state);
  if (state === "warning") {
    displayWarning(); // 경고 화면 표시
  } else if (state === "start") {
    displayStart(); // 시작 화면 표시
  } else if (state === "opening") {
    displayOpening(); // 오프닝 화면 표시
  } else if (state === "loading") {
    displayLoadingScreen(); // 로딩 화면 표시
  } else if (state === "stage1") {
    displayStage1(); // 1단계 화면 표시
  } else if (state === "loadBosung") {
    displayLoadBosung(); // 2단계 로딩 화면 표시
  } else if (state === "stage2") {
    displayStage2();
  } else if (state === "loadTopgoal") {
    displayLoadTopgoal(); // 탑골공원 로딩
  } else if (state === "stage3") {
    displayStage3(); // 3단계 표시
    haedokGo.showOn = false;
    imhoGo.showOn = false;
  } else if (state === "mission3") {
    displayMission3(); // 미션 3 화면 표시
  } else if (state === "readMission") {
    Stage3readMission();
  } else if (state === "loadheungmu") {
    displayLoadheungmu();
  } else if (state === "cardcam") {
    displayCardcam();
  } else if (state === "qrcode") {
    displayQRCode();
  } else if (state === "heungmu") {
    displayHeungmu();
  } else if (state === "intro") {
    drawIntro();
    newspaperObj.mousePlace();
  } else if (state === "newspaper") {
    image(bgImg, 0, 0, width, height);
    drawNewspaper();
    next.mousePlace();
    next.showText();
    next2.mousePlace();
    next2.showText();
    next3.mousePlace();
    next3.showText();
  } else if (state === "kimkoo") {
    drawKimkoo();
    letterButton.mousePlace();
  } else if (state === "letter") {
    drawLetter();
  } else if (state === "theend") {
    drawTheEnd();
  } else if (state === "history") {
    drawHistory();
  } else if (state === "endingcredit") {
    drawEndingCredit();
  }
}

function displayWarning() {
  console.log(state);

  image(warningImage, 0, 0, width, height); // 경고 이미지
  if (millis() - startTime > 5000) {
    // 5초 후 오프닝 화면으로 전환
    state = "start";
  }
}

function displayStart() {
  console.log(state);

  image(openingImage, 0, 0, width, height);
  drawStartButton();
}

function drawStartButton() {
  console.log(state);

  push();
  imageMode(CENTER);
  image(startButton, buttonX, buttonY, buttonWidth, buttonHeight); // 버튼 아이콘

  // 마우스가 버튼 위에 있을 떄 크기 증가
  if (
    mouseX >= buttonX - buttonWidth / 2 && mouseX <= buttonX + buttonWidth / 2 &&
    mouseY >= buttonY - buttonHeight / 2 && mouseY <= buttonY + buttonHeight / 2
  ) {
    image(startButton, buttonX, buttonY, buttonWidth + 10, buttonHeight + 10);
  }
  pop();
}

function mouseClicked() {

  if (state === "readMission" && speech !== "") {
    speech = ""; // 메시지 초기화
    speechReady = false; // 음성 준비 상태 초기화
  }

  if (
    state === "start" &&
    mouseX > buttonX - buttonWidth / 2 && mouseX < buttonX + buttonWidth / 2 &&
    mouseY > buttonY - buttonHeight / 2 && mouseY < buttonY + buttonHeight
  ) {
    state = "opening"; // 버튼 클릭 시 게임 시작
    typewriter.play();
  }

  if (state === "stage2") {
    for (let i = 0; i < objArr.length; i++) {
      objArr[i].getObject(); //class에서 get값 가져옴
    }

    if (bosungStartMent && state === "stage2") {
      bosungStartMent = false;
    }

    //달력 클릭하면 이미지 생성. 수치는 달력의 위치
    if (
      mouseX >= cX &&
      mouseX <= cX + cW &&
      mouseY >= cY &&
      mouseY <= cY + cH
    ) {
      //마우스가 위에 있으면
      calendarClicked = true;
      return;
    }

    //다시 클릭하면 확대된 이미지 닫기(달력,암호,독립선언, 해독표)
    if (
      mouseX >= cXI && mouseX <= cXI + cWI &&
      mouseY >= cYI && mouseY <= cYI + cHI &&
      calendarClicked
    ) {
      calendarClicked = false;
      return;
    }
    if (
      mouseX >= cXI && mouseX <= cXI + cWI &&
      mouseY >= cYI && mouseY <= cYI + cHI &&
      imhoClick
    ) {
      imhoClick = false;
      return;
    }
    if (
      mouseX >= cXI && mouseX <= cXI + cWI &&
      mouseY >= cYI && mouseY <= cYI + cHI &&
      freeClick
    ) {
      freeClick = false;
      return;
    }
    if (
      mouseX >= cXI && mouseX <= cXI + cWI &&
      mouseY >= cYI && mouseY <= cYI + cHI &&
      haedokClick
    ) {
      haedokClick = false;
      return;
    }

    //상자 클릭 경우(1번 배열)
    let invenObjX1 = invenX;
    let invenObjY1 = invenY + 1 * (invenH / n + invenGap);
    let invenObjW1 = invenW;
    let invenObjH1 = invenH / n - invenGap;
    if (
      mouseX >= invenObjX1 && mouseX <= invenObjX1 + invenObjW1 &&
      mouseY >= invenObjY1 && mouseY <= invenObjY1 + invenObjH1 &&
      invenArr[1] == boxGo
    ) {
      boxClick = !boxClick;
      return;
    }

    //독립선언 클릭 경우(1번 배열)
    let invenObjX2 = invenX;
    let invenObjY2 = invenY + 1 * (invenH / n + invenGap);
    let invenObjW2 = invenW;
    let invenObjH2 = invenH / n - invenGap;
    if (
      mouseX >= invenObjX2 && mouseX <= invenObjX2 + invenObjW2 &&
      mouseY >= invenObjY2 && mouseY <= invenObjY2 + invenObjH2 &&
      invenArr[1] == freeGo
    ) {
      freeClick = !freeClick;
      if (freeClick) {
        resetClick();
        freeClick = true;
      }
      return;
    }

    //암호표 클릭 경우(2번 배열)
    let invenObjX3 = invenX;
    let invenObjY3 = invenY + 2 * (invenH / n + invenGap);
    let invenObjW3 = invenW;
    let invenObjH3 = invenH / n - invenGap;
    if (
      mouseX >= invenObjX3 && mouseX <= invenObjX3 + invenObjW3 &&
      mouseY >= invenObjY3 && mouseY <= invenObjY3 + invenObjH3 &&
      invenArr[2] == imhoGo
    ) {
      imhoClick = !imhoClick;
      if (imhoClick) {
        resetClick();
        imhoClick = true;
      }
      return;
    }

    // 해독표 클릭 경우(3번 배열)
    let invenObjX5 = invenX;
    let invenObjY5 = invenY + 3 * (invenH / n + invenGap);
    let invenObjW5 = invenW;
    let invenObjH5 = invenH / n - invenGap;
    if (
      mouseX >= invenObjX5 && mouseX <= invenObjX5 + invenObjW5 &&
      mouseY >= invenObjY5 && mouseY <= invenObjY5 + invenObjH5 &&
      invenArr[3] == haedokGo
    ) {
      haedokClick = !haedokClick;
      if (haedokClick) {
        resetClick();
        haedokClick = true;
      }
      return;
    }
  }

  // Stage3에서 인벤토리 아이템 클릭 처리
  if (state === "stage3") {
    let invenObjX2 = invenX;
    let invenObjY2 = invenY + 1 * (invenH / n + invenGap);
    let invenObjW2 = invenW;
    let invenObjH2 = invenH / n - invenGap;

    if (
      mouseX >= invenObjX2 && mouseX <= invenObjX2 + invenObjW2 &&
      mouseY >= invenObjY2 && mouseY <= invenObjY2 + invenObjH2 &&
      invenArr[1] === freeGo
    ) {
      freeClick = !freeClick;
      state = "mission3";
      return;
    }

    for (let i = 0; i < objArr.length; i++) {
      objArr[i].getObject(); // 다른 오브젝트의 클릭 처리
    }
  }

  // 음성 인식 시작 처리
  if (state === "readMission" && !speechReady &&
    mouseX >= width / 2 - 300 / 2 && mouseX <= width / 2 + 300 / 2 &&
    mouseY >= height / 2 - 130 / 2 && mouseY <= height / 2 + 130 / 2) {
    speech = ""; // 음성 결과 초기화
    speechReady = true; // 음성 인식 준비 상태 활성화
    speechRec.start(continuous, interim); // 음성 인식 시작
  }

  // 음성인식 틀렸을 때 마우스 클릭(수정 때 추가)
  if (state === "readMission" && speech !== "") {
    speech = ""; // 메시지 초기화
    speechReady = false; // 음성 준비 상태 초기화
  }

  // stage 4
  if (
    state === "heungmu" &&
    mouseX >= tX &&
    mouseX <= tX + tW &&
    mouseY >= tY &&
    mouseY <= tY + tH
  ) {
    tageakTongboClicked = !tageakTongboClicked;
  } else if (tageakTongboClicked) {
    tageakTongboClicked = false;
  }

  if (
    state === "heungmu" &&
    mouseX >= lX &&
    mouseX <= lX + lW &&
    mouseY >= lY &&
    mouseY <= lY + lH
  ) {
    doorLockClicked = true;
    doorLockInput = "";
  } else if (doorLockClicked) {
    const inputBoxX = width / 2 - 150; // 숫자 입력창의 x 좌표 (rect의 중심에서 절반만큼 왼쪽)
    const inputBoxY = height / 2 - 100; // 숫자 입력창의 y 좌표 (rect의 중심에서 절반만큼 위)
    const inputBoxW = 300; // 입력창 너비
    const inputBoxH = 200; // 입력창 높이

    // 마우스 클릭이 입력창 내부가 아니라면
    if (
      !(
        mouseX >= inputBoxX &&
        mouseX <= inputBoxX + inputBoxW &&
        mouseY >= inputBoxY &&
        mouseY <= inputBoxY + inputBoxH
      )
    ) {
      doorLockClicked = false; // 숫자 입력창 닫기
    }
  }

  if (state === "intro" && transition.isFinished()) {
    if (newspaperObj.handleClick()) {
      for (let slide of slides) {
        slide.init()
      }
      state = "newspaper";
    }
  } else if (state === "newspaper") {
    if (currentPage === 1 && next.handleClick()) {
      currentPage = 2;
    } else if (currentPage === 2 && next2.handleClick()) {
      currentPage = 3;
    } else if (currentPage === 3 && next3.handleClick()) {
      state = "kimkoo";
    }
  } else if (state === "kimkoo") {
    if (letterButton.handleClick()) {
      state = "letter";
      letterDisplayStartTime = millis();
    }
  }

  if (
    state === "endingcredit" &&
    mouseX > 200 - 65 &&
    mouseX < 200 + 65 &&
    mouseY > 550 - buttonHeight / 2 &&
    mouseY < 550 + buttonHeight
  ) {
    reset();
  }
}

function keyPressed() {
  console.log("Key Pressed:", keyCode); // 키 입력 확인

  if (state === "stage1" && keyCode === ENTER) {
    // Enter 키를 눌렀을 때만 실행
    inputBox.elt.blur(); // 입력 창 포커스 해제
    let userInput = inputBox.value();
    userInput = userInput.trim(); // 값을 다듬습니다.
    console.log("User Input:", userInput); // 입력값 로그
    if (userInput === stage1correctAnswer) {
      console.log("Correct Answer Entered"); // 상태 전환 확인 로그
      progress = 0;
      inputBox.hide(); // 입력 창 숨기기
      inputBox.value(""); // 입력 창 값 초기화
      state = "loadBosung";
      userInput = "";
    } else if (userInput === '사성보') {
      answerFalse = true;
      startTime = millis();
    } else {
      showHint = true;
      startTime = millis();
    }
  }
  if (state === "stage2" && keyCode === ENTER) {
    if (imhoClick) {
      let imhoValue = imhoTextBox.getValue();
      if (imhoValue === "탑골공원" || imhoValue === "탑골 공원") {
        imhoTextBox.hide();
        state = "loadTopgoal"; //스테이지 종료
      } else {
        imhoError = true;
      }
      imhoTextBox.resetValue(); // 입력값 초기화
    }

    if (boxClick && !boxSolve) {
      let boxValue = boxTextBox.getValue();
      if (boxValue === "227") {
        boxSolve = true;
      } else {
        boxError = true;
      }
      boxTextBox.resetValue(); // 입력값 초기화
    }
  }
  if (state === "mission3" && keyCode === ENTER) {
    // Enter 키 입력과 현재 state 확인
    let userInput = inputBox.value().trim(); // 입력값 확인
    console.log("User Input:", userInput); // 디버깅용 로그
    
    // 12.17 수정
    if (userInput === stage3correctAnswer || userInput === "대한 독립 만세") {
      inputBox.hide(); // 입력 창 숨기기
      state = "readMission"; // 다음 단계로 넘어가기
    } else if (userInput !== stage3correctAnswer ||userInput !== "대한 독립 만세"){
      stage3Hint = true;
      startTime = millis();
    }
  }

  // 12.17 수정 음성인식 테스트용
  if (state === "readMission" && key === "1") {
    state = "loadheungmu";
  }

  // stage 4  //12.17수정정
  if (state === "cardcam" && keyCode === 32) {
    console.log("cardcam_keypressed");
    camSound.play(); // 카메라 사운드 재생
    currentFrameImage = get();
    let base64Image = currentFrameImage.canvas.toDataURL();
    uploadImageToSupabase(base64Image);

    captureTime = millis();
  } else if (state === "qrcode" && keyCode === 32) {
    console.log("qrcode_keypressed");
    qrcode.hide();
    state = "heungmu";
  } else if (state === "heungmu" && doorLockClicked) {
    // 자물쇠 상태 관련 로직은 기존 코드 유지
    if (key >= "0" && key <= "9" && doorLockInput.length < 3) {
      doorLockInput += key;
    } else if (keyCode === BACKSPACE) {
      doorLockInput = doorLockInput.slice(0, -1);
    } else if (keyCode === ENTER) {
      if (doorLockInput === doorLockCheck) {
        transition.init();
        doorLockSolve = true;
        doorLockClicked = false;
        tageakSound.stop();
        doorOpenSound.play();
      } else {
        doorLockError = true;
        errorMessageTime = millis();
        doorLockInput = ""; // 입력 초기화
      }
    }
  }
  if (key === " ") {
    if (state === "theend") {
      endingBGM.play();
      state = "history";
    }
    if (state === "history") {
      currentSlide++;
      // 마지막 슬라이드 이후 엔딩 크레딧으로 전환
      if (currentSlide >= slides.length) {
        state = "endingcredit";
        currentSlide = slides.length - 1; // 마지막 슬라이드로 유지
      }
    }
  }
}


function displayOpening() {
  console.log(state);

  background(0);

  // 오프닝 문구
  let openingText = [
    "1919년 2월, 천도교, 불교 등 각 종교 지도자들은 경성을 중심으로 독립선언을 준비하였다.",
    "그들은 독립선언서를 제작하여 3월 1일부터 학생들과 함께 전국 각지에서 만세시위를 일으킬 계획이다.",
    "모든 미션을 완수하여 성공적으로 독립운동을 진행하여라.",
    "그럼, 행운을 빈다.",
  ];


  textFont(font); // 로드한 폰트 사용
  textAlign(CENTER, TOP); // 텍스트 정렬 설정
  fill(255); // 흰색 텍스트 색상
  textSize(20);

  // 현재 문장의 모든 글자가 타이핑되었는지 확인
  if (textIndex < openingText[currentSentenceIndex].length) {
    if (millis() - lastTypedTime > typingSpeed) {
      // 일정 시간 간격으로 글자를 추가
      currentText += openingText[currentSentenceIndex].charAt(textIndex);
      textIndex++;
      lastTypedTime = millis(); // 마지막 타이핑된 시간 기록
    }
  } else {
    // 현재 문장이 끝났으면 다음 문장으로 넘어감
    if (
      currentSentenceIndex < openingText.length - 1 &&
      millis() - lastTypedTime > typingSpeed * 10
    ) {
      currentSentenceIndex++; // 다음 문장으로 넘어감
      currentText = ""; // 현재 문장 초기화
      textIndex = 0; // 텍스트 인덱스 초기화
      lastTypedTime = millis(); // 다음 문장 타이핑 시작 시간 기록
    } else if (
      currentSentenceIndex === openingText.length - 1 &&
      millis() - lastTypedTime > 3000
    ) {
      currentSentenceIndex = 0; // 초기화
      currentText = ""; // 초기화
      textIndex = 0; // 초기화
      state = "loading"; // 마지막 문장 출력 후 로딩 화면으로 전환
    }
  }

  // 단어 단위로 텍스트 줄 바꿈 (한글 잘림 허용 x)
  let words = currentText.split(" "); // 공백 기준으로 단어 분리
  let line = ""; // 한 줄에 작성할 텍스트
  let y = (height - openingText.length * 20) / 2; // 첫 번째 줄의 y좌표

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + " "; // 현재 줄에 단어를 추가
    let testWidth = textWidth(testLine); // 텍스트 너비 계산

    // 현재 줄 너비 초과시 줄 바꿈
    if (testWidth > maxWidth) {
      // 줄이 최대 너비를 초과하면
      text(line, width / 2, y); // 이전 줄 출력
      line = words[i] + " "; // 다음 줄에 현재 단어로 시작
      y += 40; // 줄 바꿈 간격
    } else {
      line = testLine; // 줄이 넘치지 않으면 단어를 이어서 추가
    }
  }
  // 마지막 줄 출력
  text(line, width / 2, y);
}

function displayLoadingScreen() {
  console.log(state);

  background(0);
  fill(255);
  textAlign(CENTER, TOP);
  textSize(20);
  textFont(font);
  noStroke();

  let loadingText =
    "“네 소원이 무엇이냐 하고 하느님이 내게 물으시면,\n나는 서슴지 않고 ‘내 소원은 대한 독립이오.’하고 대답할 것이오.”";
  let x = width / 2; // 텍스트 시작 X 좌표
  let y = height / 2 - 100; // 텍스트 시작 Y 좌표
  let lineSpacing = 40; // 줄 간격

  let words = loadingText.split(" ");
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    let testLine = currentLine + words[i] + " ";
    let testWidth = textWidth(testLine);

    if (testWidth > maxWidth) {
      text(currentLine, x, y);
      currentLine = words[i] + " ";
      y += lineSpacing;
    } else {
      currentLine = testLine;
    }
  }

  text(currentLine, x, y);

  // 상태바
  let barWidth = width * 0.7;
  let barHeight = 20;
  let barX = (width - barWidth) / 2 - 20;
  let barY = height - 100;

  // 내부 파란색 박스(수정된 부분 시작)
  noStroke();
  fill(0, 0, 255);
  let numSections = 50; // 블록 개수
  let sectionWidth = barWidth / numSections; // 블록 너비
  for (let i = 0; i < Math.floor((progress / 100) * numSections); i++) {
    rect(barX + i * sectionWidth, barY, sectionWidth - 2, barHeight);
  }

  // 진행 퍼센트 표시
  fill(255);
  textAlign(RIGHT, CENTER);
  textSize(18);
  text(`${progress.toFixed(0)}%`, barX + barWidth + 40, barY + barHeight / 2);

  // 외곽선(수정된 부분 끝)
  stroke(255);
  strokeWeight(2);
  noFill();
  rect(barX, barY, barWidth, barHeight);

  if (progress < 100) {
    progress += 0.5; // 로딩 속도 조절
  } else {
    state = "stage1"; // 로딩 완료 시 게임 화면으로 전환
    noStroke();
    progress = 0;
  }
}

function displayStage1() {
  console.log(state);

  background(0);

  if (currentSentenceIndex < 4) {
    // 김구 이미지 표시
    imageMode(CENTER);
    image(kimkoo, width / 2, height / 2, 440, 560);

    imageMode(CORNER);
    let adjustedTalkX = (width - talkW) / 2; // 중앙 정렬
    image(textBoxImg, adjustedTalkX, talkY, talkW, talkH);

    let kimkooText = [
      "1919년 2월 최남선이 기초한 독립선언서가 신문관에서 조판된 뒤 인쇄소로 넘겨졌소.",
      "자네가 인쇄소에 가서 인쇄된 독립선언서를 찾아 무사히 독립운동이 진행될 수 있도록 전달하게.",
      "인쇄소의 위치는 다음 신문에 나와있소.",
      "그럼, 잘 부탁하네.",
    ];

    textFont(font);
    textAlign(LEFT, TOP);
    fill(0);
    textSize(textS);

    // 타이핑 효과
    if (textIndex < kimkooText[currentSentenceIndex].length) {
      if (millis() - lastTypedTime > typingSpeed) {
        currentText += kimkooText[currentSentenceIndex].charAt(textIndex);
        textIndex++;
        lastTypedTime = millis();
      }
    } else {
      // 한 문장이 끝나면 다음 문장으로
      if (
        currentSentenceIndex < kimkooText.length - 1 &&
        millis() - lastTypedTime > 1000
      ) {
        currentSentenceIndex++;
        currentText = "";
        textIndex = 0;
        lastTypedTime = millis();
      } else if (
        currentSentenceIndex === kimkooText.length - 1 &&
        millis() - lastTypedTime > 3000
      ) {
        // 모든 문장 출력 후 미션 화면으로 전환
        currentSentenceIndex++; // 다음 단계로 진행
        inputBox.show(); // 입력 창 표시
      }
    }

    // 텍스트 줄 바꿈 처리
    let words = currentText.split(" ");
    let line = "";
    let y = textY - 5;

    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + " ";
      let testWidth = textWidth(testLine);

      if (testWidth > talkW - 120) {
        // 토크박스 너비 제한
        text(line, textX, y);
        line = words[i] + " ";
        y += textS + 10;
      } else {
        line = testLine;
      }
    }

    text(line, textX, y); // 마지막 줄 출력
  } else {
    // 미션 화면
    background(0);

    textFont(font);
    textSize(24);
    fill(255);
    textAlign(CENTER, TOP);
    text(
      "미션 1 : 다음 신문에서 독립선언서가 인쇄되어 있는 장소를 찾아 올바르게 입력하시오.",
      width / 2,
      50
    );

    imageMode(CENTER);
    image(mission1, width / 2, height / 2, 200, 420);

    if (answerFalse && millis() - startTime < showTime) {
      textAlign(CENTER, CENTER); // 텍스트 중앙 정렬
      textSize(20);

      fill(255, 255, 255, 150); // 흰색, 150의 투명도
      noStroke();
      rectMode(CENTER);
      rect(width / 2, height / 2 + 30, 500, 200, 20); // 모서리가 둥근 박스
      fill(255, 0, 0);
      noStroke();
      text("당시에는 글을 오른쪽에서 왼쪽으로 작성하였다.", width / 2, height / 2 + 30 / 2, 600 - 20, 300 - 20);
    } else if (millis() - startTime >= showTime) {
      // 3초 경과 후 텍스트 박스 숨기기
      answerFalse = false;
    }

    if (showHint && millis() - startTime < showTime) {
      textAlign(CENTER, CENTER); // 텍스트 중앙 정렬
      textSize(20);

      fill(255, 255, 255, 150); // 흰색, 150의 투명도
      noStroke();
      rectMode(CENTER);
      rect(width / 2, height / 2 + 30, 500, 200, 20); // 모서리가 둥근 박스
      fill(255, 0, 0);
      noStroke();
      text("신문의 상단을 읽어보세요.", width / 2, height / 2 + 30 / 2, 600 - 20, 300 - 20);
    } else if (millis() - startTime >= showTime) {
      // 3초 경과 후 텍스트 박스 숨기기
      showHint = false;
    }
  }
}

function displayLoadBosung() {
  console.log(state);

  background(0);
  fill(255);
  textAlign(CENTER, TOP);
  textSize(20);
  textFont(font);
  noStroke();

  let loadingText =
    "보성사는 1919년 2월 27일에 <기미독립선언서>를 인쇄했던 곳이다.";
  let x = width / 2; // 텍스트 시작 X 좌표
  let y = height / 2 - 100; // 텍스트 시작 Y 좌표
  let lineSpacing = 40; // 줄 간격

  let words = loadingText.split(" ");
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    let testLine = currentLine + words[i] + " ";
    let testWidth = textWidth(testLine);

    if (testWidth > maxWidth) {
      text(currentLine, x, y);
      currentLine = words[i] + " ";
      y += lineSpacing;
    } else {
      currentLine = testLine;
    }
  }

  text(currentLine, x, y);

  // 상태바
  let barWidth = width * 0.7;
  let barHeight = 20;
  let barX = (width - barWidth) / 2 - 20;
  let barY = height - 100;
  rectMode(CORNER);

  // 내부 파란색 박스(수정된 부분 시작)
  noStroke();
  fill(0, 0, 255);
  let numSections = 50; // 블록 개수
  let sectionWidth = barWidth / numSections; // 블록 너비
  for (let i = 0; i < Math.floor((progress / 100) * numSections); i++) {
    rect(barX + i * sectionWidth, barY, sectionWidth - 2, barHeight);
  }

  // 진행 퍼센트 표시
  fill(255);
  textAlign(RIGHT, CENTER);
  textSize(18);
  text(`${progress.toFixed(0)}%`, barX + barWidth + 40, barY + barHeight / 2);

  // 외곽선(수정된 부분 끝)
  stroke(255);
  strokeWeight(2);
  noFill();
  rect(barX, barY, barWidth, barHeight);

  if (progress < 100) {
    progress += 0.5; // 로딩 속도 조절
  } else {
    state = "stage2"; // 로딩 완료 시 게임 화면으로 전환
    noStroke();
  }
}

function displayStage2() {
  console.log(state);
  progress = 0;

  background(220);
  imageMode(CORNER);
  image(bosung, 0, 0, 1000, 600); // 배경

  if (check) {
    ellipse(100, 100, 1000, 1000);
  } //체크용

  if (bosungStartMent && state === "stage2") {
    image(textBoxImg, talkX, talkY, talkW, talkH); //시작 멘트 토크박스
    fill(0);
    textSize(textS);
    textAlign(CORNER);
    text("독립 선언서는 어딘가에 숨겨져 보관되어 있을 텐데..", textX, textY); //시작 멘트
    text("독립 운동 장소는 암호로 적어뒀다 하셨어.", textX, textY + textS * 2); //시작 멘트
  }

  // 객체 상태 업데이트 및 그리기. 시작 멘트 이후에
  if (!bosungStartMent) {
    for (let i = 0; i < objArr.length; i++) {
      if (state === "stage2") {
        objArr[i].mousePlace();
        objArr[i].display();
      }
    }

    inven.get = true; //멘트 끝나고 인벤 열기
  }

  // 인벤토리 열기
  if (!bosungStartMent && inven.get) {
    noStroke();
    fill(220, 90);
    rect(invenX, invenY, invenW, invenH);

    // 인벤토리 객체 정렬 + 마우스 오버 상태 확인
    for (let i = 0; i < n; i++) {
      if (invenArr[i]) {
        // 슬롯에 아이템이 있는 경우만 렌더링
        let invenObjX = invenX;
        let invenObjY = invenY + i * (invenH / n + invenGap);
        let invenObjW = invenW;
        let invenObjH = invenH / n - invenGap;

        // 마우스가 인벤토리 객체 위에 있으면 크기 증가
        if (
          mouseX >= invenObjX &&
          mouseX <= invenObjX + invenObjW &&
          mouseY >= invenObjY &&
          mouseY <= invenObjY + invenObjH
        ) {
          image(
            invenArr[i].img,
            invenObjX - 5,
            invenObjY - 5,
            invenObjW + 10,
            invenObjH + 10
          );

          // 마우스가 객체 위에 없을 때 기본 크기
        } else {
          image(invenArr[i].img, invenObjX, invenObjY, invenObjW, invenObjH);
        }
      }
    }
  }

  //달력 관련
  cX = 200;
  cY = 370;
  cW = 100;
  cH = 100; //달력 크기와 위치
  if (bosungStartMent === false) {
    if (
      mouseX >= cX &&
      mouseX <= cX + cW &&
      mouseY >= cY &&
      mouseY <= cY + cH
    ) {
      //마우스가 위에 있으면
      let cS = (200 + 200) / 6; //크기 증가 값(oject class 참고)
      let cSS = cS / 2; //중앙 맞춰주기기
      image(calendar, cX - cSS, cY - cSS, cW + cS, cH + cS); //크기 키우고
      // noCursor();
      mouseOver = true; //마우스 모양 관련
    } else {
      image(calendar, cX, cY, cW, cH); //원래 크기
      mouseOver = false; //마우스 모양 관련련
    }
    //클릭하면 달력 확대 이미지
    if (calendarClicked) {
      image(calendarImg, cXI, cYI, cWI, cHI);
      if (boxSolve) {
        image(textBoxImg, talkX, talkY, talkW, talkH);

        fill(0);
        textSize(textS);
        textAlign(CORNER);
        text("이제 달력은 안 봐도 되겠지..", textX, textY + textS); //달력 대사
      }
    }
  }

  //상자 자물쇠 관련
  if (boxClick && !boxSolve) {
    image(textBoxImg, talkX, talkY, talkW, talkH); //자물쇠 토크 박스

    fill(0);
    textSize(textS);
    textAlign(CORNER);
    text("비밀번호가..(3자리 숫자 자물쇠다)", textX, textY); //자물쇠 대사

    boxTextBox.show();
    if (boxError) {
      fill(0);
      text("이게 아닌가..", textX, textY + textS * 2 + 10);
    }
  } else {
    boxTextBox.hide();
  }

  //자물쇠 해제하면 독립 선언과 암호표 획득
  if (boxSolve) {
    invenArr[1] = null;
    invenArr[1] = freeGo;
    invenArr[2] = imhoGo;
    invenArr[3] = haedokGo;
    //freeGo.showOn = true;
    //imhoGo.showOn = true;
  }

  //클릭하면 독립선언, 암호표, 해독표 이미지
  if (freeClick) {
    drawImg(freeImg);
  } else if (imhoClick) {
    drawImg(imhoImg);
  } else if (haedokClick) {
    drawImg(haedokImg);
  }

  //암호표 자물쇠 관련
  if (imhoClick) {
    image(textBoxImg, talkX, talkY, talkW, talkH); //자물쇠 토크 박스

    fill(0);
    textSize(textS);
    textAlign(CORNER);
    text("독립 운동 장소가 암호로 적혀있다.", textX, textY); //자물쇠 대사

    imhoTextBox.show(); //텍스트 상자 가져오기

    if (imhoError) {
      fill(0);
      text("이게 아닌가..", textX, textY + textS * 2 + 10);
    }
  } else {
    imhoTextBox.hide();
  }

  if (haedokClick) {
    image(textBoxImg, talkX, talkY, talkW, talkH); //자물쇠 토크 박스

    fill(0);
    textSize(textS);
    textAlign(CORNER);
    text("해독표인 것 같다.", textX, textY);
    text("암호를 풀어보자.", textX, textY + textS); //자물쇠 대사
  }

  if (freeClick) {
    imhoTextBox.hide(); //텍스트 상자 숨기기
    image(textBoxImg, talkX, talkY, talkW, talkH); //토크 박스 가져오기;
    fill(0);
    textSize(textS);
    textAlign(CORNER);
    text("<독립선언서>", textX, textY);
    text("우리들은 지금 우리 조선이 독립한 나라이고", textX, textY + textS); //자물쇠 대사
    text(
      "조선 사람이 자주적인 국민이라는 것을 선언하노라. (중략)",
      textX,
      textY + textS * 2
    );
  }
  if (state !== "stage2") {
    background(220); //스테이지가 보성이 아닐 경우
    imhoTextBox.hide(); //텍스트 상자 숨기기
    progress = 0;
  }

  function drawImg(x) {
    image(x, cXI, cYI, cWI, cHI);
  } //클릭시 이미지

  //이미지 중복 방지

  /*
  // 마우스 포인터 변경(드로우 마지막에 위치해야 함)
  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i].mouseIf) {
      mouseOver = true;
      break;
    }
  } */

  /* if(mouseAble){//커서가 돋보기로 안 바뀔 때
    if (mouseOver) {
      image(mouseAfter, mouseX, mouseY, 50, 50);
    } else {
      image(mouseBefore, mouseX, mouseY, 50, 50);
    }
  } */
}

function resetClick() {
  freeClick = false;
  imhoClick = false;
  haedokClick = false;
}

function displayLoadTopgoal() {
  console.log(state);

  background(0);
  fill(255);
  textAlign(CENTER, TOP);
  textSize(20);
  textFont(font);
  noStroke();

  let loadingText =
    "탑골공원은 1919년 3월 1일에 독립선언문을 낭독하고 독립만세를 외친 \n 3.1 운동의 출발지이다.";
  let x = width / 2; // 텍스트 시작 X 좌표
  let y = height / 2 - 100; // 텍스트 시작 Y 좌표
  let lineSpacing = 40; // 줄 간격

  let words = loadingText.split(" ");
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    let testLine = currentLine + words[i] + " ";
    let testWidth = textWidth(testLine);

    if (testWidth > maxWidth) {
      text(currentLine, x, y);
      currentLine = words[i] + " ";
      y += lineSpacing;
    } else {
      currentLine = testLine;
    }
  }

  text(currentLine, x, y);

  // 상태바
  let barWidth = width * 0.7;
  let barHeight = 20;
  let barX = (width - barWidth) / 2 - 20;
  let barY = height - 100;

  // 내부 파란색 박스(수정된 부분 시작)
  noStroke();
  fill(0, 0, 255);
  let numSections = 50; // 블록 개수
  let sectionWidth = barWidth / numSections; // 블록 너비
  for (let i = 0; i < Math.floor((progress / 100) * numSections); i++) {
    rect(barX + i * sectionWidth, barY, sectionWidth - 2, barHeight);
  }

  // 진행 퍼센트 표시
  fill(255);
  textAlign(RIGHT, CENTER);
  textSize(18);
  text(`${progress.toFixed(0)}%`, barX + barWidth + 40, barY + barHeight / 2);

  // 외곽선(수정된 부분 끝)
  stroke(255);
  strokeWeight(2);
  noFill();
  rect(barX, barY, barWidth, barHeight);

  if (progress < 100) {
    progress += 0.5; // 로딩 속도 조절
  } else {
    state = "stage3"; // 로딩 완료 시 게임 화면으로 전환
    noStroke();
  }

  currentSentenceIndex = 0; // 초기화
  currentText = ""; // 초기화
  textIndex = 0; // 초기화
}

function displayStage3() {
  console.log(state);

  // 기본 배경과 대화 상자
  imageMode(CENTER);
  image(topgoal, width / 2, height / 2, width, height);

  imageMode(CORNER);
  let talkX = (width - talkW) / 2; // 중앙 정렬
  image(textBoxImg, talkX, talkY, talkW, talkH);

  let topgoalText = ["여기가 탑골공원이구나! 어서 독립선언서를 전달해야겠어."];
  console.log("topgoalText:", topgoalText);

  textFont(font);
  textAlign(LEFT, TOP);
  textSize(textS);
  fill(0);

  // 타이핑 효과 적용
  if (textIndex < topgoalText[currentSentenceIndex].length) {
    if (millis() - lastTypedTime > typingSpeed) {
      currentText += topgoalText[currentSentenceIndex].charAt(textIndex);
      textIndex++;
      lastTypedTime = millis();
    }
  }
  text(currentText, textX, textY + 10); // 텍스트 출력

  for (let i = 0; i < objArr.length; i++) {
    objArr[i].mousePlace();
    objArr[i].display();
  }

  if (inven.get) {
    noStroke();
    fill(220, 90);
    rect(invenX, invenY, invenW, invenH);

    // 인벤토리 객체 정렬 + 마우스 오버 상태 확인
    for (let i = 0; i < n; i++) {
      if (invenArr[i]) {
        // 슬롯에 아이템이 있는 경우만 렌더링
        let invenObjX = invenX;
        let invenObjY = invenY + i * (invenH / n + invenGap);
        let invenObjW = invenW;
        let invenObjH = invenH / n - invenGap;

        // 마우스가 인벤토리 객체 위에 있으면 크기 증가
        if (
          mouseX >= invenObjX &&
          mouseX <= invenObjX + invenObjW &&
          mouseY >= invenObjY &&
          mouseY <= invenObjY + invenObjH
        ) {
          image(
            invenArr[i].img,
            invenObjX - 5,
            invenObjY - 5,
            invenObjW + 10,
            invenObjH + 10
          );

          // 마우스가 객체 위에 없을 때 기본 크기
        } else {
          image(invenArr[i].img, invenObjX, invenObjY, invenObjW, invenObjH);
        }
      }
    }
  }
}

function displayMission3() {
  console.log(state);
  imageMode(CORNER)
  background(answer);
  maskOn = true;

  // 마스크 레이어를 그리기
  if (maskOn) {
    imageMode(CENTER)
    image(maskLayer, width / 2, height / 2)
  }

  textFont(font);
  textSize(24);
  fill(255);
  textAlign(CENTER, TOP);
  text(
    "미션 3 : 다음 독립선언서에서 독립운동의 구호를 찾아 입력하시오.",
    width / 2,
    50
  );

  // 입력창 표시
  inputBox.show();

  if (mouseX > 380 && mouseX < 380 + 100 &&
    mouseY > 130 && mouseY < 130 + 30 ||
    mouseX > 280 && mouseX < 280 + 100 &&
    mouseY > 185 && mouseY < 185 + 30 ||
    mouseX > 250 && mouseX < 250 + 100 &&
    mouseY > 265 && mouseY < 265 + 30 ||
    mouseX > 250 && mouseX < 250 + 100 &&
    mouseY > 310 && mouseY < 310 + 30 ||
    mouseX > 620 && mouseX < 620 + 100 &&
    mouseY > 320 && mouseY < 320 + 30 ||
    mouseX > 460 && mouseX < 460 + 100 &&
    mouseY > 425 && mouseY < 425 + 30) {
    noCursor();
    imageMode(CENTER)
    image(customCursor, mouseX, mouseY, 70, 70);
  } else {
    cursor(ARROW);
  }

  // 마우스를 눌렀을 때 특정 영역을 지우기
  if (mouseIsPressed) {
    maskLayer.erase(); // 지우기 모드 활성화
    maskLayer.circle(mouseX, mouseY, 50); // 마우스 위치에서 원형으로 지우기
    maskLayer.noErase(); // 지우기 모드 비활성화
  }

  // 12.17 수정
  if (stage3Hint && millis() - startTime < showTime) {
    textAlign(CENTER, CENTER); // 텍스트 중앙 정렬
    textSize(20);

    fill(255, 255, 255, 150); // 흰색, 150의 투명도
    noStroke();
    rectMode(CENTER);
    rect(width / 2, height / 2 + 30, 500, 200, 20); // 모서리가 둥근 박스
    fill(255, 0, 0);
    noStroke();
    text("기미독립선언서를 마우스로 클릭해보세요.", width / 2, height / 2 + 30 / 2, 600 - 20, 300 - 20);
  } else if (millis() - startTime >= showTime) {
    // 3초 경과 후 텍스트 박스 숨기기
    stage3Hint = false;
  }
}

function Stage3readMission() {
  // console.log(state);

  background(0); // 전체 화면을 검은색으로 초기화

  textFont(font);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);

  if (!speechReady && speech === "") {
    // 음성 인식 대기 상태
    imageMode(CENTER);
    image(mic, width / 2, height / 2 - 40, 300, 140);
    text("태극기를 클릭하여 독립 운동에 참여해 보세요.", width / 2, height / 2 + 60);
  } else if (speechReady) {
    // 음성 인식 진행 중
    text("독립 운동의 구호를 크게 외쳐보세요.", width / 2, height / 2);
    text(speech, width / 2, height / 2 + 30);
  } else if (speech) {
    // 음성 인식 결과 처리
    if (
      speech === "대한 독립 만세" ||
      speech === "대한독립만세" ||
      speech === "대한독립 만세" ||
      speech === "대한 독립만세" ||
      speech === "대한 독립 만세." ||
      speech === "대한독립만세." ||
      speech === "대한독립 만세." ||
      speech === "대한 독립만세."
    ) {
      // 성공: 사운드 재생 및 성공 메시지
      if (!manse.isPlaying()) {
        manse.play();
      }
      text("대한독립만세!", width / 2, height / 2);

      // 사운드 종료 후 다음 단계로 이동
      manse.onended(() => {
        state = "loadheungmu";
        speech = ""; // 결과 초기화
        speechReady = false;
      });
    } else {
      // 실패 메시지 출력
      text(`${speech}`, width / 2, height / 2 - 30);
      text(
        "화면을 마우스로 클릭하여 다시 시도해보세요.",
        width / 2,
        height / 2
      );
      //speech = ""; // 결과 초기화
      //speechReady = false;
    }
  }
}

function displayLoadheungmu() {
  console.log(state);

  // 총소리 재생(처음 한 번만)
  if (!hitSoundPlayed) {
    hitSound.play();
    hitSoundPlayed = true; // 총 소리 재생여부 업데이트
  }
  // 텍스트 배열 및 타이밍 설정
  const textloadheungmu = [
    "이동 중이던 당신은 너무 가까이서 들려오는 총소리에 잠시 기절한다.",
    "잠시 기절해있던 후, 눈을 떠보니 어디엔가 갇혀있다..",
    "여긴 어디지? 설마 서대문 형무소..?",
    "정신을 차리려는 찰나에 일본인 순사가 대뜸 카메라를 들이댄다.",
    "(카메라가 실행되면, 스페이스 바를 눌러 촬영해주세요.)",
  ];

  // 변수들을 함수 외부에서 선언해야 합니다.
  if (typeof displayLoadheungmuState === "undefined") {
    // 상태 초기화
    window.displayLoadheungmuState = {
      textIndex: 0,
      startTime: millis(),
      showText: true,
    };
  }

  // 배경 및 텍스트 스타일 설정
  background(0);
  textFont(font);
  fill(255);
  textSize(textS);
  textAlign(CENTER, CENTER);

  // 현재 시간 계산
  const currentTime = millis();
  const elapsedTime = currentTime - displayLoadheungmuState.startTime;

  // 텍스트 표시 및 전환 로직
  if (displayLoadheungmuState.showText) {
    // 텍스트 표시 (3초)
    if (elapsedTime < 3000) {
      text(
        textloadheungmu[displayLoadheungmuState.textIndex],
        width / 2,
        height / 2
      );
    }
    // 검은 화면 (1초)
    else if (elapsedTime < 4000) {
      background(0);
    }
    // 다음 텍스트로 전환
    else {
      displayLoadheungmuState.textIndex++;
      displayLoadheungmuState.startTime = currentTime;

      // 모든 텍스트 표시 완료 시 상태 변경
      if (displayLoadheungmuState.textIndex >= textloadheungmu.length) {
        state = "cardcam";
        // 상태 초기화
        delete window.displayLoadheungmuState;
        return;
      }
    }
  }
}

function displayCardcam() {
  background(card);
  imageMode(CORNER);
  push();
  scale(-1, 1);
  image(cam, -700, 200, 350, 350);
  pop();
  filter(GRAY);
  qrcode = null;

  if (millis() - captureTime > 2000) {
    image(currentFrameImage, 350, 200, 500, 300);
    state = "qrcode";
  }
}

function displayQRCode() {
  background(220);
  image(currentFrameImage, 100, 42, 500, 300);
  fill(0);
  textSize(textS);
  textAlign(CENTER, CENTER);
  text("사진을 저장하고 스페이스 바를 눌러 다음단계를 진행해주세요.", 500, 500);
  if (!qrcode) {
    qrcode = createDiv();
    qrcode.id('qrcode');
    qrcode.position(650, 50);

    new QRCode(document.getElementById("qrcode"), `https://ilursrdorhcyvfmhdamf.supabase.co/storage/v1/object/public/image/public/${imageName}`);

  }

}

const dataURLtoFile = (dataurl, fileName) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
};

async function uploadImageToSupabase(imageData) {
  imageName = `img_${year()}${month()}${day()}_${hour()}${minute()}${second()}.jpg`
  const imageFile = dataURLtoFile(imageData, imageName)
  const { data, error } = await supabase.storage
    .from("image")
    .upload(`public/${imageName}`, imageFile, {
      contentType: "image/jpg",
      cacheControl: "3600",
      upsert: false,
    });
  if (error) {
    console.error("Error uploading image:", error);
  } else {
    console.log("Image uploaded successfully:", data);
  }
}


function displayHeungmu() {
  console.log(state);
  let messageStartTime = 0; // 메시지가 시작된 시간

  //형무소 배경 그리기
  background(220);
  image(heungmuso, 0, 0, 1000, 600);
  image(textBoxImg, talkX, talkY, talkW, talkH); //토크박스 그리기

  if (!tageakSound.isPlaying() && !doorLockSolve) {
    //타격통보 소리 재생
    tageakSound.loop();
  }

  //메시지 출력
  fill(0);
  textSize(textS);
  textAlign(LEFT);

  if (!doorLockSolve) {
    if (messageStartTime === 0) {
      // 메시지 시작 시간을 초기화
      messageStartTime = millis();
    }
    // 3초 이내에는 firstMessage만 표시
    if (millis() - messageStartTime < 3000) {
      text(firstMessage, talkX + 60, talkY + 100);
    }
    // 3초 이후에는 secondMessage 추가 표시
    else {
      text(firstMessage, talkX + 60, talkY + 100);
      text(secondMessage, talkX + 60, talkY + 130);
    }
  }

  //타격통보 인터랙션 관련
  if (mouseX >= tX && mouseX <= tX + tW && mouseY >= tY && mouseY <= tY + tH) {
    image(tageakTongbo, tX - 10, tY - 10, tW + 20, tH + 20);
    mouseOver = true;
  } else {
    image(tageakTongbo, tX, tY, tW, tH);
    mouseOver = false;
  }

  if (tageakTongboClicked) {
    //클릭시 확대 이미지 제시되도록
    imageMode(CENTER);
    image(tageakTongboImg, width / 2, height / 2, 600, 100);
    imageMode(CORNER);
  }

  // 자물쇠 관련 인터랙션
  if (!tageakTongboClicked) {
    if (
      mouseX >= lX &&
      mouseX <= lX + lW &&
      mouseY >= lY &&
      mouseY <= lY + lH
    ) {
      image(doorLock, lX - 5, lY - 5, lW + 10, lH + 10); // 확대된 doorLock 표시
      mouseOver = true;
    } else {
      image(doorLock, lX, lY, lW, lH); // 기본 크기 doorLock 표시
    }
  }

  //자물쇠 클릭 시 나타나는 숫자입력창 관련 함수
  if (doorLockClicked) {
    fill(255, 230);
    rectMode(CENTER);
    rect(width / 2, height / 2, 300, 200); //숫자 입력창

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(textS);
    text("숫자 세 자리를 입력하세요", width / 2, height / 2 - 50);

    let displayInput = doorLockInput.padEnd(3, "ㅡ");
    text(displayInput, width / 2, height / 2);
  }

  if (doorLockError) {
    //자물쇠 오류시 나타나는 메시지지
    fill(0);
    textSize(textS);
    textAlign(LEFT);
    text("아.. 이게 아닌가..", talkX + 60, talkY + 130);

    // 에러 메시지 3초 후 사라짐
    if (millis() - errorMessageTime > 3000) {
      doorLockError = false;
    }
  }

  if (doorLockSolve) {
    //자물쇠 해제시 나타나는 메시지
    tageakSound.stop(); //자물쇠 잠금해제시 타격 통보 소리 재생 멈춤
    doorLockClicked = false;
    fill(0);
    text("엇 열렸다..!", textX, textY + 20);
    state = "intro";
  }
}

function drawIntro() {
  if (!transition.isFinished()) {
    transition.update();
    transition.display();
    newspaperObj.display();
    return;
  }
  transition.display();
  newspaperObj.display();
  // 텍스트 박스 이미지 그리기
  image(textBoxImg, talkX, talkY, talkW, talkH); // 텍스트 박스 위치와 크기 지정

  // 텍스트 그리기
  fill(0); // 텍스트 색상 (흰색)
  textFont(font); // 폰트 설정
  textSize(textS); // 텍스트 크기 설정
  text("문이 열렸다! 그런데... 저건 뭐지?", textX, textY + 20); // 텍스트 위치

  push(); // 스타일 상태 저장
  rectMode(CENTER);
  stroke(247, 255, 128); // 테두리 색상
  strokeWeight(1); // 테두리 두께
  fill(0, 120); // 반투명 검정색
  rect(width / 2, 80, 600, 100, 20);
  pop(); // 이전 스타일 상태 복원

  textSize(20);
  fill(255);
  text("탈출에 성공하셨습니다.", 390, 60);
  text("3.1운동의 결과를 보고 싶으시다면 신문을 눌러주세요.", 245, 90);
}

function drawNewspaper() {
  image(
    currentPage === 1 ? page1 : currentPage === 2 ? page2 : page3,
    125,
    50,
    750,
    500
  );
  let nextObj = currentPage === 1 ? next : currentPage === 2 ? next2 : next3;
  nextObj.mousePlace();
  nextObj.display();
  nextObj.showText();
}

function drawKimkoo() {
  if (kimkooAlpha < 255) kimkooAlpha += 5;
  tint(255, kimkooAlpha);
  image(kimkooImg, 0, 0, width, height);
  fill(0, 150);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);

  fill(255, kimTextAlpha);
  if (kimTextAlpha < 255) kimTextAlpha += 5;
  textFont(endingCreditFont);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(kim1, width / 2, height / 2 - 80);
  text(kim2, width / 2, height / 2 - 40);
  text(kim3, width / 2, height / 2 + 60);

  letterButton.mousePlace();
  letterButton.display();
}

function drawLetter() {
  background(0);
  image(endingLetter, 25, 50, 950, 500);
  fill(0);
  textFont(letterFont);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(
    "그대여, 그대가 가진 소원은 과연 무엇입니까?\n2024년의 오늘, 그대가 걸어가는 길은 어떠한가요?\n부디 그대의 걸음 하나하나가 모여\n아름다운 우리나라를 우리의 힘으로\n지켜나갈 수 있길 진심으로 바라겠습니다.\n\n- 김구 -",
    width / 2,
    height / 2
  );

  if (millis() - letterDisplayStartTime > 5000) {
    state = "theend";
  }
}

function drawTheEnd() {
  background(0);
  fill(255);
  textFont(font);
  textSize(30);
  text(
    "THE END\n\n이 게임은 역사적 사실을 기반으로 제작되었습니다.\n\n레퍼런스\n: 역사방탈출-독립자금을 전달하라\n역사 방탈출-뫼와 들에 물이 오르는 달 하루\n\n\n",
    width / 2,
    height / 2
  );

  textSize(20);
  fill(170);
  text("(( 스페이스바를 눌러보세요 ))", width / 2, 500);
}

function drawHistory() {
  background(0);

  slides[currentSlide].display();
}

function drawEndingCredit() {
  image(endingCredit, 0, 0, width, height);
  // 몇 초 후 > 은재님 시작 파트로 넘어가는 코드 필요
  push();
  imageMode(CENTER);
  image(gameover, 200, 550, 130, buttonHeight); // 버튼 아이콘

  // 마우스가 버튼 위에 있을 떄 크기 증가
  if (
    mouseX >= 200 - 65 &&
    mouseX <= 200 + 65 &&
    mouseY >= 550 - buttonHeight / 2 &&
    mouseY <= 550 + buttonHeight / 2
  ) {
    image(gameover, 200, 550, 140, buttonHeight + 10);
  }
  pop();
}

function reset() {
  // 공통 상태 초기화
  state = "warning";

  // p5.js 상태 초기화
  clear();
  background(0);
  tint(255);
  fill(255);
  noStroke();

  // 위치 및 크기 초기화
  talkX = 70;
  talkY = 420;
  talkW = 850;
  talkH = 240;
  textX = talkX + 60;
  textY = talkY + 100;
  textS = 20;
  buttonX = width / 2;
  buttonY = height / 2 + 235;
  buttonWidth = 90;
  buttonHeight = 33;

  cX = 200;
  cY = 370;
  cW = 100;
  cH = 100;

  tX = 250;
  tY = 150;
  tW = 50;
  tH = 50;

  lX = 570;
  lY = 270;
  lW = 35;
  lH = 35;

  // 로딩바 초기화
  barWidth = width * 0.7;
  barHeight = 20;
  barX = (width - barWidth) / 2 - 20;
  barY = height - 100;
  progress = 0;
  rectMode(CORNER);

  // 타이핑 관련 변수 초기화
  currentSentenceIndex = 0;
  currentText = "";
  textIndex = 0;
  typingSpeed = 80;
  lastTypedTime = 0;
  maxWidth = 700;

  // Stage 1 변수 초기화
  startTime = millis();

  // Stage 2 변수 초기화
  check = false;
  bosungStartMent = true;
  calendarClicked = false;
  boxClick = false;
  boxSolve = false;
  boxError = false;
  freeClick = false;
  imhoClick = false;
  glassesClick = false;
  haedokClick = false;
  imhoError = false;
  mouseOver = false;
  invenGap = 5;
  invenW = 70;
  invenH = 500;
  invenX = 30;
  invenY = 133;
  invenArr = [];

  // Stage 3 변수 초기화
  speech = "";
  speechReady = false;
  maskOn = false;
  maskLayer.clear(); // 기존 내용을 모두 지움
  maskLayer.image(independence, 0, 0, 1000, 600);

  // Stage 4 변수 초기화
  captureTime = null;
  tageakTongboClicked = false;
  doorLockClicked = false;
  doorLockInput = ""; // 자물쇠 입력 초기화
  doorLockSolve = false;
  doorLockError = false;
  errorMessageTime = 0;
  hitSoundPlayed = false;
  qrCodeLoded = false;

  // Ending 변수 초기화
  kimkooAlpha = 0;
  kimTextAlpha = 0;
  letterDisplayStartTime = 0;
  currentPage = 1;
  currentHistoryIndex = 0;
  currentSlide = -1;
  newspaperObj.clicked = false;
  next.clicked = false;
  next2.clicked = false;
  next3.clicked = false;
  letterButton.clicked = false;

  // 오브젝트 초기화
  objArr = [];
  boxGo = new object(box, 700, 150, 100, 100);
  inven = new object(invento, 15, 25, 100, 100);
  haedokGo = new object(haedok, 360, 480, 100, 100);
  freeGo = new object(free, 650, 150, 80, 80);
  imhoGo = new object(imho, 770, 150, 80, 80);

  freeGo.showOn = false;
  imhoGo.showOn = false;
  haedokGo.showOn = false;

  // 답변 입력란 초기화
  if (inputBox) {
    inputBox.hide(); // 입력란 숨김
    inputBox.value(""); // 입력란 값 초기화
  }
  if (imhoTextBox) {
    imhoTextBox.hide(); // 암호 텍스트 박스 숨김
    imhoTextBox.resetValue(); // 암호 텍스트 박스 초기화
  }
  if (boxTextBox) {
    boxTextBox.hide(); // 상자 텍스트 박스 숨김
    boxTextBox.resetValue(); // 상자 텍스트 박스 초기화
  }

  // 사운드 초기화
  if (tageakSound && tageakSound.isPlaying()) {
    tageakSound.stop(); // 타격통보 사운드 멈춤
    tageakSound.setLoop(false); // 루프 비활성화
  }

  if (hitSound && hitSound.isPlaying()) {
    hitSound.stop(); // 총소리 멈춤
    hitSoundPlayed = false; // 총소리 재생 여부 초기화
  }

  if (manse && manse.isPlaying()) {
    manse.stop(); // 대한독립만세 소리 멈춤
    manse.onended(() => { }); // 이벤트 초기화
  }

  if (doorOpenSound && doorOpenSound.isPlaying()) {
    doorOpenSound.stop(); // 자물쇠 해제 소리 멈춤
  }

  if (camSound && camSound.isPlaying()) {
    camSound.stop(); // 카메라 촬영 소리 멈춤
  }


  tageakSound.playMode("restart");
  hitSound.playMode("restart");
  manse.playMode("restart");
  doorOpenSound.playMode("restart");
  camSound.playMode("restart");


  if (endingBGM && endingBGM.isPlaying()) {
    endingBGM.stop(); // 엔딩 BGM 멈춤
  }

  // QR 코드 관련 변수 초기화
  /*qrCodeLoded = false; // QR 코드 로딩 상태 초기화
  qrCodeUrl = ""; // QR 코드 URL 초기화
  capturedImage = null; // 캡처된 이미지 초기화
  captureTime = null; // 캡처 시간 초기화
  */

  // 캔버스 갱신
  loop();
}

