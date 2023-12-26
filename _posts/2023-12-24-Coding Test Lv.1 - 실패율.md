---
layout: post
title: Coding Test - Lv.1 실패율
date: 2023-12-25 20:41 +0900
author: Tag
tags: [Swift, Coding Test]
# toc:  true
categories: CodingTest
published: true
---
<h2> 프로그래머스 Lv.1 실패율 </h2>

<blockquote>
&nbsp; 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다. </br>
&nbsp; 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라. </br>
<ul>
<li> 실패율은 다음과 같이 정의한다. </li>
<ul>
<li> 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수 </li>
</ul>
</ul>
&nbsp; 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라. </br>
</blockquote>

 <h3> 제한사항</h3>

<blockquote>
스테이지의 개수 N은 1 이상 500 이하의 자연수이다. </br>
stages의 길이는 1 이상 200,000 이하이다. </br>
stages에는 1 이상 N + 1 이하의 자연수가 담겨있다. </br>
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다. </br>
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다. </br>
만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. </br>
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다. </br>
</blockquote>


&nbsp; 첫 풀이는 고차함수를 활용하여 작성을 해보았고 스테이지 별로 머무르고 있는 인원을 확인하여 해당 스테이지의 총원과 해당 스테이지 이후의 총원을 계산하여 for을 활용하여 풀어보았다.

```swift
func solution(_ N:Int, _ stages:[Int]) -> [Int] {
    var result: [Double] = []
    
    // 각 스테이지 별로 인원을 확인하고 해당 스테이지 이후의 총 인원을 확인하여 실패율 계산
    for i in 0...N-1 {
        result.append(Double(stages.filter{$0 == i+1}.count)/Double(stages.filter{$0 >= i+1}.count))
    }
    
    return result.indices.sorted { result[$0] > result[$1] }.map{$0 + 1}
}
```

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/assets/PostImage/1225-01-CodingTest-Lv.1.jpg" style="margin-right: 10px;">
</div>

&nbsp; 이렇게 진행할 경우 몇몇 테스트에서 시간 초과가 발생하였고 확인해보니 for 문 내부에서 고차함수를 사용할 경우 시간복잡도가 O(n^2)까지 증가할 수 있어 시간 초과가 발생하는 것이였다.
&nbsp; 이를 해결하기 위해서는 for 문 내부에서 고차함수를 사용하지 않고 코드를 다시 짜면 된다.
<br>

```swift
func solution(_ N:Int, _ stages:[Int]) -> [Int] {
    var result: [Double] = []
    var total = Double(stages.count)
    var stagePerson: [Double] = Array(repeating: 0, count: N+1)
    
    // 각 스테이지 별로 인원이 몇명 있는지 확인
    for i in stages {
        stagePerson[i-1] += 1
    }
    
    // total 값과 stagePerson의 값을 확인하여 실패율 계산
    for i in 0..<N {
        result.append(stagePerson[i]/total)
        total -= stagePerson[i]
    }
    
    return result.indices.sorted { result[$0] > result[$1] }.map{$0 + 1}
}
```

&nbsp; 최대한 내부에서의 고차함수 사용을 없애기 위해 코드를 수정하였고 테스트도 정상적으로 통과가 되었다.

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/assets/PostImage/1225-02-CodingTest-Lv.1.jpg" style="margin-right: 10px;">
</div>

[참고]

[https://school.programmers.co.kr/learn/courses/30/lessons/42889](https://school.programmers.co.kr/learn/courses/30/lessons/42889)

-----
