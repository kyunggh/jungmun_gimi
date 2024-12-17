// 화면 전환 관리 클래스
class ScreenTransition { // = *그냥 이 부분을 클래스가 아닌 stage0에서의 기능으로 수정*
    constructor(image) {
      this.blackAlpha = 0; // 검정 화면 투명도
      this.imgAlpha = 0; // 이미지 투명도
      this.increasing = true; // 밝기 증가 여부
      this.image = image; // 로드된 이미지
      this.finished = false; // 화면 전환 완료 여부
    }
    
    init(){
      if (!this.disableTransition) {
        this.imageOpacity = 0; // 투명도 초기화
        this.titleOpacity = 0; // 제목 투명도 초기화
        this.contentOpacity = 0; // 본문 투명도 초기화
      } else {
        this.imageOpacity = 1; // 항상 보이도록 설정
        this.titleOpacity = 1; // 항상 보이도록 설정
      }
    }
    
  
    update() {
      if (this.increasing) {
        // 검정 화면의 투명도 증가
        fill(255, this.blackAlpha);
        rectMode(CENTER);
        rect(width/2, height/2, width, height);
        this.blackAlpha += 5;
  
        if (this.blackAlpha >= 255) {
          this.increasing = false; // 이미지 표시 단계로 전환\
        }
      } else {
        // 이미지 투명도 증가
        this.imgAlpha += 5;
        if (this.imgAlpha >= 255) {
          this.imgAlpha = 255;
          this.finished = true; // 화면 전환 완료
        }
      }
    }
  
    display() {
      // 항상 배경 이미지를 표시
      tint(255, this.imgAlpha);
      image(this.image, 0, 0, width, height);
    }
  
    isFinished() {
      return this.finished; 
    }
  }
  