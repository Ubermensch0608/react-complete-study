# 연습 프로젝트 - 현재까지 배운 개념 복습

## User 컴포넌트 추가

### 유저 생성 컴포넌트

**아이디어**

- form 안에 label, input 묶음과 submit을 type으로 한 button를 둔다.
- 사용자가 input에 입력한 내용을 onChange와 value의 조합 혹은 ref 값을 통해 얻는다.
- form 태그의 특성을 이용하여 버튼 클릭 또는 enter 입력시 submit이 일어나도록 한다.
- submit 발생에 특정 함수를 호출하여 저장된 input 값을 유저 정보를 렌더링 하는 컴포넌트에 전달한다.

**key point**

일반적으로 form을 이용할 때 아래의 묶음으로 구성한다.

```
<form onSubmit={sumitHandler}>
    <label></label>
    <input />
    <button type='submit'></button>
</form>
```

### 재사용 가능한 Card 컴포넌트 만들기 - UI

웹 페이지의 스타일을 향상시키는 방법에는 여러 가지가 있겠지만, 대표적으로 **통일감**을 지키는 것이다.

통일감을 지키기 위해서 동일한 스타일이 적용된 Wrapper 컴포넌트를 생성할 것이다.

이는 통일감 뿐 아니라, **재사용 가능**한 UI 컴포넌트라는 점에서 효율적이고, 생산적이다.

UI 컴포넌트는 재사용 가능성을 위해 너무 많은 스타일을 강제시키지 않는 것이 좋다.

최소한의 공통되는 스타일을 적용 시킨 뒤 각 컴포넌트에서 스타일을 추가하여 커스텀 UI로 사용하는 방법이 가장 효율적일 것이다.

## 재사용 가능한 Button 컴포넌트 만들기 - UI

Card UI 컴포넌트와 동일하게 Button 컴포넌트도 재사용가능하게 하여 생산성과 효율성을 높이자.

**key point**

- cursor: pointer; 속성으로 버튼이라는 것을 알림 → UI 향상
- active 혹은 hover 시 배경 색상이 밝아지도록 하여 **누를 수 있다는 것** 알림 → UI 향상

```
export const Button = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background-color: #4f005f;
  color: #fff;
  padding: 0.25rem 1rem;
  cursor: pointer;

  :active,
  :hover {
    background-color: #741188;
    border-color: #741188;
  }

  :focus {
    outline: none;
  }
`;
```
