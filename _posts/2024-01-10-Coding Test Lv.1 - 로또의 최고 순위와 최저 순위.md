---
layout: post
title: Coding Test - Lv.1 로또의 최고 순위와 최저 순위
date: 2024-01-10 18:28 +0900
author: Tag
tags: [Swift, Coding Test]
# toc:  true
categories: Coding-Test
published: true
---
<h2> 프로그래머스 Lv.1 로또의 최고 순위와 최저 순위 </h2>

<blockquote>
&nbsp; <code>로또 6/45</code>(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다. </br>

<table>
    <thead>
        <tr>
            <th>순위</th>
            <th>당첨 내용</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>6개 번호가 모두 일치</td>
        </tr>
        <tr>
            <td>2</td>
            <td>5개 번호가 일치</td>
        </tr>
        <tr>
            <td>3</td>
            <td>4개 번호가 일치</td>
        </tr>
        <tr>
            <td>4</td>
            <td>3개 번호가 일치</td>
        </tr>
        <tr>
            <td>5</td>
            <td>2개 번호가 일치</td>
        </tr>
        <tr>
            <td>6(낙첨)</td>
            <td>그 외</td>
        </tr>
    </tbody>
</table>

&nbsp; 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
&nbsp; 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 `44, 1, 0, 0, 31 25`라고 가정해보겠습니다. 당첨 번호 6개가 `31, 10, 45, 1, 6, 19`라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.

<table>
    <thead>
        <tr>
            <th>순위</th>
            <th>31</th>
            <th>10</th>
            <th>45</th>
            <th>1</th>
            <th>6</th>
            <th>19</th>
            <th>결과</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>최고 순위 번호</td>
            <td>31</td>
            <td>0 -> 10</td>
            <td>44</td>
            <td>1</td>
            <td>0 -> 6</td>
            <td>25</td>
            <td>4개 번호 일치, 3등</td>
        </tr>
        <tr>
            <td>최저 순위 번호</td>
            <td>31</td>
            <td>0 -> 11</td>
            <td>44</td>
            <td>1</td>
            <td>0 -> 7</td>
            <td>25</td>
            <td>2개 번호 일치, 5등</td>
        </tr>
    </tbody>
</table>

<ul>
    <li> 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다. </li>
    <li> 알아볼 수 없는 두 개의 번호를 각각 10, 6이라고 가정하면 3등에 당첨될 수 있습니다. </li>
    <ul>
        <li> 3등을 만드는 다른 방법들도 존재합니다. 하지만, 2등 이상으로 만드는 것은 불가능합니다. </li>
    </ul>
    <li> 알아볼 수 없는 두 개의 번호를 각각 11, 7이라고 가정하면 5등에 당첨될 수 있습니다. </li>
    <ul>
        <li> 5등을 만드는 다른 방법들도 존재합니다. 하지만, 6등(낙첨)으로 만드는 것은 불가능합니다. </li>
    </ul>
</ul>
&nbsp; 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
</blockquote>

<h4> 제한사항 </h4>

<blockquote>
<ul>
    <li> lottos는 길이 6인 정수 배열입니다. </li>
    <li> lottos의 모든 원소는 0 이상 45 이하인 정수입니다. </li>
    <ul>
        <li> 0은 알아볼 수 없는 숫자를 의미합니다. </li>
        <li> 0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다. </li>
        <li> lottos의 원소들은 정렬되어 있지 않을 수도 있습니다. </li>
    </ul>
    <li> win_nums은 길이 6인 정수 배열입니다. </li>
    <li> win_nums의 모든 원소는 1 이상 45 이하인 정수입니다. </li>
    <ul>
        <li> win_nums에는 같은 숫자가 2개 이상 담겨있지 않습니다. </li>
        <li> win_nums의 원소들은 정렬되어 있지 않을 수도 있습니다. </li>
    </ul>
</ul>
</blockquote>

&nbsp; 해당 문제는 각 등수를 `case`로 분류해두고 `lottos`를 for문을 돌면서 0이 존재하는 수와 `win_nums`와 중복되는 수의 갯수를 확인하여 해당 수들을 가지고 몇 순위인지 확인하면 되는 간단한 문제이다.

```swift
func solution(_ lottos:[Int], _ win_nums:[Int]) -> [Int] {
    var result = 0
    var zeroNum = 0
    
    func numRanking(_ input: Int) -> Int {
        switch input {
        case 6:
            return 1
        case 5:
            return 2
        case 4:
            return 3
        case 3:
            return 4
        case 2:
            return 5
        default:
            return 6
        }
    }
    
    for i in lottos {
        if win_nums.contains(i) {
            result += 1
        } else if i == 0 {
            zeroNum += 1
        }
    }
    
    return [numRanking(result+zeroNum), numRanking(result)]
}
```

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://drive.google.com/uc?export=view&id=1-BAdsq3ApQQqtX4DdxBSava4tub_rYnW" style="margin-right: 10px;">
</div>

[참고]

[https://school.programmers.co.kr/learn/courses/30/lessons/77484](https://school.programmers.co.kr/learn/courses/30/lessons/77484)

-----
