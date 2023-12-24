---
layout: post
title: Coding Test - Lv.1 덧칠하기
date: 2023-12-24 20:55 +0900
author: Tag
tags: [Swift, Coding Test]
# toc:  true
categories: Coding Test
published: true
---
<h2> 프로그래머스 Lv.1 덧칠하기 </h2>

<blockquote>
어느 학교에 페인트가 칠해진 길이가 n미터인 벽이 있습니다. 벽에 동아리 · 학회 홍보나 회사 채용 공고 포스터 등을 게시하기 위해 테이프로 붙였다가 철거할 때 떼는 일이 많고 그 과정에서 페인트가 벗겨지곤 합니다. 페인트가 벗겨진 벽이 보기 흉해져 학교는 벽에 페인트를 덧칠하기로 했습니다. <br>
넓은 벽 전체에 페인트를 새로 칠하는 대신, 구역을 나누어 일부만 페인트를 새로 칠 함으로써 예산을 아끼려 합니다. 이를 위해 벽을 1미터 길이의 구역 n개로 나누고, 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호를 붙였습니다. 그리고 페인트를 다시 칠해야 할 구역들을 정했습니다. <br>
벽에 페인트를 칠하는 롤러의 길이는 m미터이고, 롤러로 벽에 페인트를 한 번 칠하는 규칙은 다음과 같습니다. <br>
<br>
<ul>
    <li>롤러가 벽에서 벗어나면 안 됩니다. </li>
    <li>구역의 일부분만 포함되도록 칠하면 안 됩니다. </li>
</ul>
즉, 롤러의 좌우측 끝을 구역의 경계선 혹은 벽의 좌우측 끝부분에 맞춘 후 롤러를 위아래로 움직이면서 벽을 칠합니다. 현재 페인트를 칠하는 구역들을 완전히 칠한 후 벽에서 롤러를 떼며, 이를 벽을 한 번 칠했다고 정의합니다. <br>
한 구역에 페인트를 여러 번 칠해도 되고 다시 칠해야 할 구역이 아닌 곳에 페인트를 칠해도 되지만 다시 칠하기로 정한 구역은 적어도 한 번 페인트칠을 해야 합니다. 예산을 아끼기 위해 다시 칠할 구역을 정했듯 마찬가지로 롤러로 페인트칠을 하는 횟수를 최소화하려고 합니다. <br>
정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요. <br>
</blockquote>

 <h3> 제한사항</h3>

<blockquote>
1 ≤ m ≤ n ≤ 100,000 <br>
1 ≤ section의 길이 ≤ n <br>
1 ≤ section의 원소 ≤ n <br>
section의 원소는 페인트를 다시 칠해야 하는 구역의 번호입니다. <br>
section에서 같은 원소가 두 번 이상 나타나지 않습니다. <br>
section의 원소는 오름차순으로 정렬되어 있습니다. <br>
</blockquote>


문제에서 주어진 룰러의 크기 m을 활용하여 코드를 짤 수 있다. <br>
n개의 1이 들어있는 배열을 만든 뒤 칠해야하는 인덱스에서는 0으로 변경해두고 0이 나올 경우 색을 칠해야하기 때문에 룰러의 크기인 m의 크기 만큼의 배열에 1을 넣어주면서 반복해주면 전체 배열이 1로 가득 찰 경우가 벽에 페인트를 다 칠할 경우가 될 것이다.

```swift
func solution(_ n:Int, _ m:Int, _ section:[Int]) -> Int {
    // 전체 벽 상태 배열로 생성
    var allWalls = Array(repeating: 1, count: n)
    var result = 0
    
    // 칠해야 할 벽은 0으로 변경
    for s in section {
        allWalls[s-1] = 0
    }
    
    // 배열을 순환하며 0일 때 m의 크기만큼 1로 변환
    for i in 0..<n {
        if allWalls[i] == 0 {
            for j in i...(i+m-1) {
                guard j < n else { break }
                allWalls[j] = 1
            }
            result += 1
        }
    }
    
    return result
}
```

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/assets/PostImage/CodingTest-Lv.1.jpg" style="margin-right: 10px;">
</div>

위와 같이 시간 복잡도가 조금 느린 실행 결과를 얻을 수 있다.

[참고]

[https://school.programmers.co.kr/learn/courses/30/lessons/161989#](https://school.programmers.co.kr/learn/courses/30/lessons/161989#)

-----
