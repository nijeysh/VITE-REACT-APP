import { Fragment } from 'react';
import Card from '../Card';
import CourseItem from './CourseItem';

const CourseListCard = ({ onFavorite, title, items }) => {
  const [course1, course2, course3] = items;
  // const course1 = {
  //   title: '입문자를 위한, HTML&CSS 웹 개발 입문',
  //   description: '웹 개발에 필요한 기본 지식을 배웁니다.',
  //   thumbnail: '/img/htmlcss.png',
  // };
  // const course2 = {
  //   title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
  //   description: '쉽고! 알찬! 내용을 준비했습니다.',
  //   thumbnail: '/img/js.png',
  // };
  // const course3 = {
  //   title: '포트폴리오 사이트 만들고 배포까지!',
  //   description: '포트폴리오 사이트를 만들고 배포해 보세요.',
  //   thumbnail: '/img/portfolio.png',
  // };

  const lastIndex = items.length - 1;

  return (
    <Card title={title}>
        <div className="courses">
          {items.map((item, index) => (
            <Fragment key={item.id} >
              <CourseItem {...item} onFavorite={onFavorite} />
              {index !== lastIndex && <hr className="divider" /> }
            </Fragment>
            ))}
          {/* <CourseItem {...course1} />
          <CourseItem {...course2} />
          <CourseItem {...course3} /> */}
        </div>
      </Card>


        // <>
      // {/* <div className="card" style={{backgroundColor: 'black', color: 'white'}}> */}
      //   {/* <div className="card__header">강의 목록</div> */}
      //   {/* <div className="card__body"> */}
      //     {/* <div className="courses"> */}
      //       {/* <CourseItem {...course1} /> */}
      //       {/* <CourseItem {...course2} /> */}
      //       {/* <CourseItem {...course3} /> */}
      //       {/* <CourseItem 
      //         title={course1.title}
      //         description={course1.description}
      //         thumbnail={course1.thumbnail}
      //       />
      //       <CourseItem
      //           title={course2.title}
      //           description={course2.description}
      //           thumbnail={course2.thumbnail}
      //       />
      //       <CourseItem 
      //           title={course3.title}
      //           description={course3.description}
      //           thumbnail={course3.thumbnail}
      //       /> */}
      //     {/* </div> */}
      //   {/* </div> */}
      // {/* </div> */}
    // </>
  );
};

export default CourseListCard;