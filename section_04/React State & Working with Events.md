# React State & Working with Events

## 이 섹션에서 배우는 것

- 이벤트 핸들링
- state
- interactive & reactive 앱

## 실습 프로젝트

`섹션 3에 있던 앱을 interactive & reactive 하게 만들기 `

## 목차

## 내용

### 이벤트 등록과 함수 생성

**기존 JavaScript의 방식**

JS에서 버튼을 클릭했을 때 색깔이 변경되고, form에서 submit이벤트가 발생했을 때 텍스트가 업데이트 되고 했던 것은 이벤트 리스너 함수를 등록했었기 때문에 가능했다.

이벤트 등록 방식은 여러 가지가 있지만 가장 대표적인 방식은 아래와 같다.

```
document.querySelector('button').addEventListner(이벤트 종류, function( ){
    --- 생략 ---
})
```

**React에서 이벤트 등록하는 방법**
기존 JS의 이벤트 등록 방식은 querySelector이나 getElementBy ~ 등을 이용하여 DOM API에서 특정 HTML를 지정해주는 것이 필요했고, 이러한 방식은 직관적이지 않을 뿐더러 불필요한 코드를 늘렸다.

React는 JSX문법을 활용하여 HTML태그에 내장되어 있는 attribute 요소를 사용하여 이벤트를 등록한다.

예를 들어, `<button></button>`태그의 경우 다음과 같이 수 많은 내장 이벤트를 지니고 있다.

![html의 내장 이벤트]('public/assets-md/html-event.png')

이러한 내장 이벤트를 사용하여 이벤트 등록을 하는 것이다. 아래의 예시는 inline 스타일로 버튼 태그에 익명 함수를 바로 대입하면서 **클릭**이 발생할 시, console 창에 결과를 도출하는 **이벤트**를 등록한 것이다.

```
<button
    onClick={() => {
        console.log("clicked!");
    }}
    >
    Change Title
</button>

```

**이벤트 등록 컨벤션**

```
  // inline 스타일 (선호되는 방식이 아님)
  <button
      onClick={() => {
          console.log("clicked!");
      }}
      >
      Change Title
  </button>

  // 함수 등록 방식 (선호되는 방식)

  const clickHandler = () => {
      console.log('clicked!')
  }

  return (
      <button
          onClick={clickHandler}
          >
          Change Title
      </button>
  )
```

- 일반적으로 inline-style보다 기명 함수를 생성하거나, 상수 선언으로 이벤트를 등록한다.
- 이벤트 함수명은 OOHanlder 혹은 hadleOO 과 같이 나타내는 것이 일반적인데 형식은 자유다.
- 단, 어떤 이벤트인지 예측할 수 있는 이름으로 정의하는 것이 좋다.
- 기존 HTML태그의 onchange는 이미 선점되었기 때문에 react에서는 onChange와 같이 camel-case로 속성 등록을 해주면 된다.
