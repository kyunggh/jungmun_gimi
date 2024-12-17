class HistoryTransition {
  constructor(image, title, content, disableTransition = false) {
    this.image = image; // 이미지 객체
    this.title = title; // 제목
    this.content = content; // 본문 텍스트
    this.imageOpacity = disableTransition ? 1 : 0; // 투명도 초기화
    this.titleOpacity = disableTransition ? 1 : 0; // 제목 투명도 초기화
    this.contentOpacity = 0; // 본문 투명도 초기화
    this.disableTransition = disableTransition; // 투명도 변화 비활성화 여부
  }

  init(){
    this.imageOpacity = disableTransition ? 1 : 0; // 투명도 초기화
    this.titleOpacity = disableTransition ? 1 : 0; // 제목 투명도 초기화
    this.contentOpacity = 0; // 본문 투명도 초기화
  }

  display() {
    let imageX = 50;
    let imageY = 230;
    let imageW = 350;
    let imageH = 210;
    let titleX = width - 70;
    let titleY = 90;
    let contentX = 450;
    let contentY = height / 2 + 50;

    background(0);

    // 이미지 표시
    if (!this.disableTransition) {
      this.imageOpacity += 0.02; // 투명도가 증가하도록 설정
      if (this.imageOpacity > 1) this.imageOpacity = 1; // 최대 투명도
    }
    tint(255, this.imageOpacity * 255); // 이미지의 투명도 적용
    image(this.image, imageX, imageY, imageW, imageH);

    // 제목 표시
    if (!this.disableTransition) {
      this.titleOpacity += 0.02; // 투명도가 증가하도록 설정
      if (this.titleOpacity > 1) this.titleOpacity = 1; // 최대 투명도
    }
    fill(255, this.titleOpacity * 255); // 제목 투명도 적용
    textFont(endingCreditBoldFont);
    textAlign(RIGHT);
    textSize(60);
    text(this.title, titleX, titleY);

    // 본문 표시
    this.contentOpacity += 0.02; // 본문 투명도는 항상 증가
    if (this.contentOpacity > 1) this.contentOpacity = 1; // 최대 투명도
    fill(255, this.contentOpacity * 255); // 본문 투명도 적용
    textFont(endingCreditFont);
    textAlign(LEFT);
    textSize(25);
    text(this.content, contentX, contentY);
  }
}
