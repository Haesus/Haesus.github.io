---
layout: post
title: Coding Test - Lv.2 방문 길이
date: 2024-02-05 21:59 +0900
author: Tag
tags: [Swift, Coding Test]
categories: Coding-Test
published: true
---
<h2> 프로그래머스 Lv.2 방문 길이 </h2>

<blockquote>
&nbsp; 게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.

<ul>
    <li> U: 위쪽으로 한 칸 가기 </li>
    <li> D: 아래쪽으로 한 칸 가기 </li>
    <li> R: 오른쪽으로 한 칸 가기 </li>
    <li> L: 왼쪽으로 한 칸 가기 </li>
</ul>

&nbsp; 캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/ace0e7bc-9092-4b95-9bfb-3a55a2aa780e/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B51_qpp9l3.png" style="margin-right: 10px;">
</div>
<br>

&nbsp; 예를 들어, "ULURRDLLU"로 명령했다면

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/668c7458-e184-472d-9d32-f5d2acca759a/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B52_lezmdo.png" style="margin-right: 10px;">
</div>
<br>

<ul>
<li> 1번 명령어부터 7번 명령어까지 다음과 같이 움직입니다. </li>

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/08558e36-d667-4160-bfec-b754c78a7d85/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B53_sootjd.png" style="margin-right: 10px;">
</div>
<br>

<li> 8번 명령어부터 9번 명령어까지 다음과 같이 움직입니다. </li>

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/a52af28e-5835-438b-9f40-5467ebf9bf03/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B54_hlpiej.png" style="margin-right: 10px;">
</div>
<br>

&nbsp; 이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다. 예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)

&nbsp; 단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.

&nbsp; 예를 들어, "LULLLLLLU"로 명령했다면

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f631f005-f8de-4392-a76c-a9ef64b6de08/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B55_nitjwj.png" style="margin-right: 10px;">
</div>
<br>

<li> 1번 명령어부터 6번 명령어대로 움직인 후, 7, 8번 명령어는 무시합니다. 다시 9번 명령어대로 움직입니다. </li>


<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/35e62f0a-43c6-4142-bec6-6d28fbc57216/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B56_nzhumd.png" style="margin-right: 10px;">
</div>
</ul>
<br>

&nbsp; 이때 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다.

&nbsp; 명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

</blockquote>

<h4> 제한사항 </h4>

<blockquote>
<ul>
    <li> dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다. </li>
    <li> dirs의 길이는 500 이하의 자연수입니다. </li>
</ul>
</blockquote>

&nbsp; 해당 문제는 캐릭터가 새롭게 걸어간 길이를 확인하여 출력하는 것이다. 따라서 한 지점에서 다른 지점으로 이동할 때 해당 이동 지점들을 배열로 저장해두면 될 것 이라고 생각했다. 물론 배열로 저장하여 확인할 경우 반대쪽에서 오는 것과 다른 것으로 인식할 경우도 있기 때문에 배열보다는 Set을 활용하여 작성하는것이 좋다고 생각하였다.

```swift
func solution(_ dirs:String) -> Int {
    var charPoint = [0, 0]
    var charMoveNew: Set<Set<[Int]>> = []
    
    for i in dirs {
        let lastPoint = charPoint
        if i == "U" && charPoint[1] != 5 {
            charPoint[1] += 1
            charMoveNew.insert([lastPoint, charPoint])
        } else if i == "D" && charPoint[1] != -5  {
            charPoint[1] -= 1
            charMoveNew.insert([lastPoint, charPoint])
        } else if i == "R" && charPoint[0] != 5  {
            charPoint[0] += 1
            charMoveNew.insert([lastPoint, charPoint])
        } else if i == "L" && charPoint[0] != -5 {
            charPoint[0] -= 1
            charMoveNew.insert([lastPoint, charPoint])
        }
    }
    
    return charMoveNew.count
}
```

&nbsp; `charPoint`를 통해서 현재 캐릭터의 위치를 추적하고 입력받을 `dirs`의 값을 확인하여 캐릭터의 위치를 변경 시키기로 했다.
&nbsp; `charMoveNew`는 이동하기 전의 캐릭터의 위치와 이동한 이후 캐릭터의 위치를 저장해두는 이중Set(?)으로 작성해보았다.
&nbsp; 추가로 (5, 5)의 범위를 벗어날 경우 계산할 수 없게 작성해두면 코드는 정상적으로 동작하는 것을 볼 수 있다.

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21396&authkey=%21ADbNi_k4F-R-CsU&width=1636&height=972" style="margin-right: 10px;">
</div>

<br>

[참고]
[https://school.programmers.co.kr/learn/courses/30/lessons/49994](https://school.programmers.co.kr/learn/courses/30/lessons/49994)

-----
