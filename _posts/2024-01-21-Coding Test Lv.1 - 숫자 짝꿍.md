---
layout: post
title: Coding Test - Lv.1 숫자 짝꿍
date: 2024-01-21 22:12 +0900
author: Tag
tags: [Swift, Coding Test]
categories: Coding-Test
published: true
---
<h2> 프로그래머스 Lv.1 숫자 짝꿍 </h2>

<blockquote>
&nbsp; 두 정수 <code>X</code>,<code>Y</code>의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). <code>X</code>,<code>Y</code>의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. <code>X</code>,<code>Y</code>의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다. <br>
&nbsp; 예를 들어, <code>X</code> = 3403이고 <code>Y</code> = 13203이라면, <code>X</code>와 Y의 짝꿍은 <code>X</code>와 <code>Y</code>에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 <code>X</code> = 5525이고 <code>Y</code> = 1255이면 <code>X</code>와 <code>Y</code>의 짝꿍은 <code>X</code>와 <code>Y</code>에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(<code>X</code>에는 5가 3개, <code>Y</code>에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
두 정수 <code>X</code>,<code>Y</code>가 주어졌을 때, <code>X</code>,<code>Y</code>의 짝꿍을 return하는 solution 함수를 완성해주세요. </br>
</blockquote>

<h4> 제한사항 </h4>

<blockquote>
<ul>
    <li> 3 ≤ <code>X</code>,<code>Y</code>의 길이(자릿수) ≤ 3,000,000입니다. </li>
    <li> <code>X</code>,<code>Y</code>는 0으로 시작하지 않습니다. </li>
    <li> <code>X</code>,<code>Y</code>의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다. </li>
</ul>
</blockquote>

&nbsp; 해당 문제는 입력 받는 `X`와 `Y`의 값을 필터링하여 각 자리숫자의 값을 가지고 중복된 값들을 추출해내는 문제이다.

```swift
func solution(_ X:String, _ Y:String) -> String {
    var list: [String] = []
    var lists: [String] = []
    
    for i in 0..<10 {
        let x = X.filter{String($0) == String(i)}.count
        let y = Y.filter{String($0) == String(i)}.count
        list.append(String(min(x,y)))
    }
    
    for i in 0..<list.count {
        if list[i] != "0" {
            for _ in 0..<Int(list[i])! {
                lists.append(String(i))
            }
        }
    }
    
    return lists.sorted(by: >).joined()
}
```

&nbsp; 위 코드처럼 `X`와 `Y`에 `filter()` 클로저를 사용하여 0부터 9까지를 분류하고 `X`와 `Y`의 값중 최솟값을 `list`에 저장하여 각 숫자별로 중복된 값을 확인하는 코드를 작성하였다. 이후 `list`의 크기 만큼 반복하면서 원소의 값이 `"0"`이 아닌 값들을 분류하여 `lists`에 저장하고 이를 내림차순으로 정렬하여 가장 큰 정수를 만들어 반환해주는 코드를 작성했다.

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21357&authkey=%21AKUI8LzQBhExvCQ&width=1646&height=1042" style="margin-right: 10px;">
</div>

&nbsp; 위 코드로 동작을 시켜보면 몇개의 테스트에서 실패를 하는데 다른 숫자가 중복된 것이 없고 0만 존재할 경우 짝궁의 수는 0인 조건과 중복된 숫자가 아예 없을 경우 `-1`로 출력하는 조건을 설정하지 않아 발생한 것으로 확인했다.
&nbsp; 따라서 위 조건을 만족시켜 코드를 수정해주면 

```swift
func solution(_ X:String, _ Y:String) -> String {
    var list: [String] = []
    var lists: [String] = []
    
    for i in 0..<10 {
        let x = X.filter{String($0) == String(i)}.count
        let y = Y.filter{String($0) == String(i)}.count
        list.append(String(min(x,y)))
    }
    
    for i in 0..<list.count {
        if list[i] != "0" {
            for _ in 0..<Int(list[i])! {
                lists.append(String(i))
            }
        }
    }
    
    return lists.isEmpty ? "-1" : lists.filter{Int($0) == 0}.count == lists.count ? "0" : lists.sorted(by: >).joined()
}
```

&nbsp; 위와 같은 코드로 짤 수 있고 마지막 반환할 때 삼항 조건 연산자를 통해 `lists`의 배열이 비어 있을 경우와 `lists의 크기 값`과 `0의 갯수 값`이 같을 경우 즉 `lists에 0만 존재할 경우` 0을 출력하는 조건을 넣어 반환하는 코드로 작성하였고

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21356&authkey=%21ANDhFXeboLi9ZsU&width=1642&height=1036" style="margin-right: 10px;">
</div>

&nbsp; 위와 같이 정상적으로 테스트 코드를 성공하는 것을 확인할 수 있다.

[참고]
[https://school.programmers.co.kr/learn/courses/30/lessons/131128](https://school.programmers.co.kr/learn/courses/30/lessons/131128)

-----
