import { useEffect, useRef, useState } from 'react';

let counter = 0;

function ButtonCounter() {
  const countRef = useRef(0);

  const [count, setCount] = useState(0);

  console.log('리렌더링');

  const handleClick = () => {
    // counter++;
    // console.log('counter: ', counter);

    countRef.current++;
    console.log(countRef);

    setCount(count + 1);
  };

  /**
   * 1. counter 전역 변수로 사용할 경우의 문제점
   *
   * 2개 이상 만들 경우 counter변수 값이 공유되어 증가된 값부터 시작된다.
   * 1번 버튼에서 5를 증가시키고 2번 버튼을 클릭할 경우 6부터 시작된다
   *
   */
  return <button onClick={handleClick}>Count</button>;
}

function Form() {
  const [form, setForm] = useState({
    title: '제목',
    author: '',
    content: '',
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('DOM: ', titleInputRef.current);
    console.log('DOM: ', authorInputRef.current);
    console.log('DOM: ', contentTextareaRef.current);
  };

  // 마운트 되고 난 후
  useEffect(() => {
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
  }, []);

  const [isChanged, setIsChanged] = useState(false);
  const prevForm = useRef(null);

  useEffect(() => {
    prevForm.current = { ...form };
  }, []);

  useEffect(() => {
    const hasChanged =
      prevForm.current.title !== form.title ||
      prevForm.current.content !== form.content ||
      prevForm.current.author !== form.author;
    setIsChanged(hasChanged);
  }, [form]);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>글쓰기</legend>
        <input
          ref={titleInputRef}
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={handleForm}
        />
        <hr />
        <input
          ref={authorInputRef}
          name="author"
          placeholder="작성자"
          value={form.author}
          onChange={handleForm}
        />
        <hr />
        <textarea
          ref={contentTextareaRef}
          name="content"
          placeholder="내용"
          value={form.content}
          onChange={handleForm}
        />
        <hr />
        <button disabled={!isChanged}>전송</button>
      </fieldset>
    </form>
  );
}

export default function AppRef() {
  //   const countRef = useRef(0); // 초기값 할당 가능
  //   // 리렌더링이 일어나도 값을 가지고 있음.

  //   const [count, setCount] = useState(0);

  //   console.log('리렌더링'); // 리렌더링이 일어나지않음
  //   // => UI에 관련되지 않은 값은 useRef 가 가지고 있으면 되겠다

  // //   let counter = 0; // 전역변수로 한다면? => 리렌더링이 일어날때 값이 초기화됨

  //   const handleClick = () => {
  //     // countRef.current++;
  //     // console.log(countRef);
  //     counter++;
  //     console.log('counter: ', counter);
  //     setCount(count + 1);
  //   };

  return (
    <>
      <h2>Count</h2>
      {/* <button onClick={handleClick}>Count</button> */}
      <ButtonCounter />
      <ButtonCounter />
      <h2>Form</h2>
      <Form />
    </>
  );
}
