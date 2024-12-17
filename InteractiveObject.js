class InteractiveObject {
    constructor(img, x, y, w, h) {
      this.x = x; // x 좌표
      this.y = y; // y 좌표
      this.w = w; // 너비
      this.h = h; // 높이
      this.img = img; // 이미지
      this.clicked = false; // 클릭 여부
      this.mouseIf = false; // 마우스 오버 여부
    }
  
    // 객체 그리기
    display() {
      if (!this.clicked) {
        let s = (this.w + this.h) / 6; // 크기 증가 값
        let xCenter = s / 2;
        let yCenter = s / 2;
        
        if (this.mouseIf) {
          // 마우스가 객체 위에 있으면 크기 증가
          image(this.img, this.x - xCenter, this.y - yCenter, this.w + s, this.h + s);
        } else {
          // 기본 크기로 표시
          image(this.img, this.x, this.y, this.w, this.h);
        }
      }
    }
  
    // 마우스 위치 확인
    mousePlace() {
      if (
        mouseX >= this.x &&
        mouseX <= this.x + this.w &&
        mouseY >= this.y &&
        mouseY <= this.y + this.h
      ) { 
        this.mouseIf = true// 마우스가 객체 위에 있음
      }else{
        this.mouseIf = false;
      }
    }
  
    // 클릭 시 동작
    handleClick() {
      if (this.mouseIf) {
        this.clicked = !this.clicked; // 객체가 클릭됨
        return true;
      } 
      return false;
    }
      
    // 다음 텍스트
    showText(){
        fill(255);
        textFont(font);
        textAlign(CENTER, CENTER);
        textSize(25);
        text("다음", this.x+this.w/2, this.y+this.h+20);
    }
  }