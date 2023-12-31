---
layout: post
title: Coding Test - Lv.1 [1차] 다트 게임
date: 2023-12-31 21:58 +0900
author: Tag
tags: [Swift, Coding Test]
# toc:  true
categories: Coding-Test
published: true
---
<h2> 프로그래머스 Lv.1 [1차] 다트 게임 </h2>

<blockquote>
&nbsp; 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다. <br>
&nbsp; 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다. <br>

<ul>
<li> 다트 게임은 총 3번의 기회로 구성된다. </li>
<li>각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다. </li>
<li>점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다. </li>
<li>옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다. </li>
<li>스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고) </li>
<li>스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고) </li>
<li>스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고) </li>
<li>Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다. </li>
<li>스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다. </li>
</ul>

&nbsp; 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.
</blockquote>

<h3> 입력 형식 </h3>

<blockquote>
&nbsp; "점수|보너스|[옵션]"으로 이루어진 문자열 3세트. </br>
&nbsp; 예) 1S2D*3T </br>

<ul>
<li> 점수는 0에서 10 사이의 정수이다. </li>
<li> 보너스는 S, D, T 중 하나이다. </li>
<li> 옵선은 *이나 # 중 하나이며, 없을 수도 있다. </li>
</ul>
</blockquote>

 <h3> 출력 형식 </h3>

 <blockquote>
&nbsp; 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다. <br>
&nbsp; 예) 37 <br>
</blockquote>

&nbsp; 입력받은 문자열을 타입 형식에 따라 나누어 계산하는 방법으로 풀면 쉽게 풀리는 것 같았다.
&nbsp; 이때 사용한 것이 <b> split(whereSeparator: (Character) throws -> Bool) </b>로 whereSeparator 내부에는 조건문이 들어가여 해당되는 조건에 맞게 문자열을 쪼갤 수 있게 된다.

```swift
func solution(_ dartResult:String) -> Int {
    // 문자열을 점수와 보너스&옵션으로 나누어 확인한다.
    let scores = dartResult.split(whereSeparator: { !$0.isNumber }).map{Int($0)!}
    let option = dartResult.split(whereSeparator: { $0.isNumber })
    var scoresArray: [Int] = []
    
    // scores의 크기와 option의 크기가 같기때문에 for문은 1회만 사용
    for i in 0..<scores.count {
        // 보너스&옵션을 각각 contains로 확인하여 조건물을 돌린다.
        if option[i].contains("S") {
            scoresArray.append(scores[i])
        } else if option[i].contains("D") {
            scoresArray.append(scores[i]*scores[i])
        } else if option[i].contains("T") {
            scoresArray.append(scores[i]*scores[i]*scores[i])
        }
        
        if option[i].contains("*") {
            if i != 0 {
                scoresArray[i-1] = scoresArray[i-1] * 2
                scoresArray[i] = scoresArray[i] * 2
            } else {
                scoresArray[i] = scoresArray[i] * 2
            }
        } else if option[i].contains("#") {
            scoresArray[i] = -scoresArray[i]
        }
    }
    
    return scoresArray.reduce(0, +)
}
```

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/assets/PostImage/1231-01-CodingTest-LV.1.jpg" style="margin-right: 10px;">
</div>

&nbsp; 최종적으로 위 사진과 같이 오류 없이 테스트가 통과된다.

[참고]

[https://school.programmers.co.kr/learn/courses/30/lessons/17682](https://school.programmers.co.kr/learn/courses/30/lessons/17682)

-----
