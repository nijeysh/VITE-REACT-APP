// function HeartIconBtn({isFavorite = false}) {
//   if (isFavorite) {
//     return (
//       <button className="btn">
//         <img className="icon-heart" src="/img/heart-fill-icon.png" alt="" />
//       </button>
//     )
//   } else {
//     // 아무것도 안보이게하고싶을 경우
//     return null;
//   }
// }

function HeartIconBtn({ onHeaertClick, isFavorite=false }) { // 부모로부터 함수를 받을 수도 있음
  // function handleFavorite() {
  //   alert(isFavorite ? '좋아요' : '모르겠어요')
  // }

  return (
    // 실행하면 안됨, 함수를 호출해야함 onClick={handleFavorite}, () => alert(..) 이렇게 직접 작성해도됨 혹은 (function handleFunc() {..})
    // <button className="btn" onClick={onHeaertClick}>
    <button className="btn" onClick={(e) => onHeaertClick(e)}>
      <img className="btn__img" src={isFavorite ? '/img/heart-fill-icon.png' : '/img/heart-icon.png'} alt="" />
    </button>
  )
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.png" alt="" />
    </a>
  )
}

export default function CourseItem({ onFavorite, id, title, description, thumbnail, isFavorite, link }) {

  // const course = {
  //   title: '입문자를 위한, HTML&CSS 웹 개발 입문',
  //   description: '웹 개발에 필요한 기본 지식을 배웁니다.',
  //   image: './img/htmlcss.png',
  //   alt: '강의 이미지',
  // }
  // // const title = '입문자를 위한, HTML&CSS 웹 개발 입문';
  // // const description = '웹 개발에 필요한 기본 지식을 배웁니다.';
  // // const image = './img/htmlcss.png';
  // // const alt = '강의 이미지';
  // const isEmpty = false;
  
  // if (isEmpty) {
  //   return (
  //     <p>강의가 없습니다.</p>
  //   )
  // }

  function handleFavorite(e) {
    e.stopPropagation();
    // alert(isFavorite ? '좋아요' : '모르겠어요')
    onFavorite(id, !isFavorite)
  }

  function handleItemClick(e) {
    e.stopPropagation();  // 캡쳐모드에서 handleFavorite을 실행하지 않기 위함 - 자식 이벤트 X, 잘 사용하지 않음
    // alert('item click~!');
    window.open(link, '_blank');
  }

  return (
    <div>
        {/* 캡쳐모드 - 부모이벤트가 먼저 시작됨 onClick 뒤에 Capture를 붙이면 된다. */}
        {/* <article className="course" onClickCapture={handleItemClick}> */}
        <article className="course" onClick={handleItemClick}>
        <img className="course__img" src={thumbnail} alt="강의 이미지" />
        <div className="course__body">
          <div className="course__title">{title}</div>
          <div className="course__description">{description}</div>
        </div>
        <div className="course__icons">
          <HeartIconBtn onHeaertClick={handleFavorite} isFavorite={isFavorite} />
          {/* <HeartIconBtn isFavorite={isFavorite} /> */}
          {/* <img className="btn__img" src={isFavorite ? '/img/heart-fill-icon.png' : '/img/heart-icon.png'} alt="" /> */}

          {/* 논리연산자 참고 */}
          {/* result = "" && "foo"; // result 에 ""(빈 문자열)이 할당됩니다
          result = 2 && 0; // result 에 0 이 할당됩니다
          result = "foo" && 4; // result 에 4 가 할당됩니다. */}
          {link && (
            <LinkIconBtn link={link} />
            // <a className="btn" href={link} target="_blank" rel="noreferrer">
            //   <img className="btn__img" src="/img/link-icon.png" alt="" />
            // </a>
          )}
        </div>
      </article>
    </div>
  );
};

// export default CourseItem;