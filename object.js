class object {
  constructor(img, x, y, w, h) {
    this.x = x; // x 좌표
    this.y = y; // y 좌표
    this.w = w; // 너비
    this.h = h; // 높이
    this.img = img; // 이미지
    this.get = false; // 획득 여부
    this.mouseIf = false; // 마우스 오버 여부
    this.showOn = true; // 처음부터 그릴지 여부
    objArr.push(this); // 객체 생성 시 배열에 추가
  }

  // 그리기
  display() {
    if(this.showOn){
    let s = (this.w + this.h) / 6; // 크기 증가 값
    let xCenter = s / 2;
    let yCenter = s / 2;

    if (this === inven) {
      // 인벤토리 전용 조건 처리
      if (this.get) {
        // 클릭된 상태 (큰 인벤만 표시)
        image(this.img, this.x - s / 2, this.y - s / 2, this.w + s, this.h + s);
      } else if (this.mouseIf) {
        // 마우스가 올려진 상태 (작은 인벤 크기 증가)
        image(this.img, this.x - xCenter, this.y - yCenter, this.w + s, this.h + s);
      } else {
        // 기본 상태 (작은 크기)
        image(this.img, this.x, this.y, this.w, this.h);
      }
    } else {
      // 다른 객체 처리 (inven이 아닌 경우)
      if (this.mouseIf) {
        // 마우스가 올려진 상태 (크기 증가)
        image(this.img, this.x - xCenter, this.y - yCenter, this.w + s, this.h + s);
      } else {
        // 기본 크기
        image(this.img, this.x, this.y, this.w, this.h);
      }
    }
  }
  }

  // 객체 위에 마우스 있으면 마우스 모양 변화
  mousePlace() {
    if(this.showOn){
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.w &&
      mouseY >= this.y &&
      mouseY <= this.y + this.h
    ) {
      this.mouseIf = true; // 마우스가 박스 위에 있음
    } else {
      this.mouseIf = false; // 마우스가 박스 밖에 있음
    }
  }
  }

  // 객체 클릭했는지 확인 및 인벤토리에 넣기
  getObject() {if(this.showOn){
    if (//마우스가 객체 위에 있으면
      mouseX >= this.x &&
      mouseX <= this.x + this.w &&
      mouseY >= this.y &&
      mouseY <= this.y + this.h
    ) {
      if (this === inven) {//그 객체가 인벤토리일 때
        // 인벤토리는 열고 닫기만 수행하기로
        this.get = !this.get;
      } else if (!this.get) {//그 객체가 인벤토리가 아니면
        // 그 객체를 인벤토리에 추가
        this.get = true;

        // 보험 : 이미 인벤에 있으면 중복 추가 방지(this가 있으면 함수 여기서 종료)
        // 이 뒤에 함수는 인벤에 그려주기 위한 배열을 제공함
        if (invenArr.includes(this)) return;

        // 돋보기와 상자를 특정 배열에 고정
        /*if (this === glassesGo) {
          if (!invenArr[4]) {
            invenArr[4] = this; // 돋보기는 항상 3번째 위치
          }
        }*/if (this === boxGo) {
          if (!invenArr[1]) {
            invenArr[1] = this; // 상자는 항상 2번째 위치
            boxGo.showOn = false;
          }
        } else if (this === haedokGo) {
          if(!invenArr[3]){
            invenArr[3] = this;
          }
        }

          /*이런 식으로 새로운 오브젝트는 순서 부여해서 배치
           양식 : else if (this === 객체 변수명) {
            if (!invenArr[획득 순서]) {
              invenArr[획득 순서] = this; // 객체는 항상 n번째 위치
            }*/

          else {// 나머지 객체는 빈 슬롯에 추가(추후에 삭제해도 될 코드)
          for (var i = 0; i < n; i++) {
            if (!invenArr[i]) { // 빈 슬롯 찾기
              invenArr[i] = this; //빈 슬롯에 넣어주기
              break;
            }
          }
        
        }

        // 배열의 undefined 제거 및 순서 유지
        let newArr = [];
        for (let i = 0; i < n; i++) {
          if (invenArr[i]) {
            newArr[i] = invenArr[i];//값이 있으면 그 값 저장
          } else {
            newArr[i] = null;//값이 없으면 null 값으로 저장
          }
        }
        invenArr = newArr;//값이 있으면 그대로, 없으면 null값으로 가져감.
      }
    }
  }
}
}