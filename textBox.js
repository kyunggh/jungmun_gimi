class textBox {
    constructor(x,y,width,height) {
      // 텍스트 입력 박스 생성
      this.input = createInput("");//input으로
      this.input.position(x,y); // 위치 설정
      this.input.size(width,height); // 크기 설정
      this.input.style("padding-left", "10px"); // 스타일 설정
      this.input.style('cursor','none')//커서 숨기기
      this.input.style('z-index','1')//마우스 커서보다 뒤로 가게
      this.input.style('background','transparent')//투명 배경
      this.input.style('font-size','20')///텍스트 사이즈
      this.hide(); // 안 보이는 게 기본값
    }
    //x,y,w,h 값은 앵간해서는 (textX,textY+ textS - 15,200,25) 로 고정
  
    show() {
      this.input.show(); // 텍스트 박스 보이기
    }
  
    hide() {
      this.input.hide(); // 텍스트 박스 숨기기
    }
  
    getValue() {
      return this.input.value().trim(); // 입력값 가져오기
    }
  
    resetValue() {
      this.input.value(""); // 입력값 초기화
    }
  }