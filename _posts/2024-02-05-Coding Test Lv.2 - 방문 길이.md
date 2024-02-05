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
    <li> <code>fees</code>의 길이 = 4 </li>
    <ul>
        <li> fees[0] = <code>기본 시간(분)</code> </li>
        <li> 1 ≤ fees[0] ≤ 1,439 </li>
        <li> fees[1] = <code>기본 요금(원)</code> </li>
        <li> 0 ≤ fees[1] ≤ 100,000 </li>
        <li> fees[2] = <code>단위 시간(분)</code> </li>
        <li> 1 ≤ fees[2] ≤ 1,439 </li>
        <li> fees[3] = <code>단위 요금(원)</code> </li>
        <li> 1 ≤ fees[3] ≤ 10,000 </li>
    </ul>
    <li> 1 ≤ <code>records</code>의 길이 ≤ 1,000 </li>
    <ul>
    <li> <code>records</code>의 각 원소는 <code>"시각 차량번호 내역"</code> 형식의 문자열입니다. </li>
    <li> <code>시각</code>, <code>차량번호</code>, <code>내역</code>은 하나의 공백으로 구분되어 있습니다. </li>
    <li> <code>시각</code>은 차량이 입차되거나 출차된 시각을 나타내며, <code>HH:MM</code> 형식의 길이 5인 문자열입니다. </li>
    <ul>
        <li> <code>HH:MM</code>은 00:00부터 23:59까지 주어집니다. </li>
        <li> 잘못된 시각("25:22", "09:65" 등)은 입력으로 주어지지 않습니다. </li>
    </ul>
    <li> <code>차량번호</code>는 자동차를 구분하기 위한, `0'~'9'로 구성된 길이 4인 문자열입니다. </li>
    <li> <code>내역</code>은 길이 2 또는 3인 문자열로, <code>IN</code> 또는 <code>OUT</code>입니다. <code>IN</code>은 입차를, <code>OUT</code>은 출차를 의미합니다. </li>
    <li> <code>records</code>의 원소들은 시각을 기준으로 오름차순으로 정렬되어 주어집니다. </li>
    <li> <code>records</code>는 하루 동안의 입/출차된 기록만 담고 있으며, 입차된 차량이 다음날 출차되는 경우는 입력으로 주어지지 않습니다. </li>
    <li> 같은 시각에, 같은 차량번호의 내역이 2번 이상 나타내지 않습니다. </li>
    <li> 마지막 시각(23:59)에 입차되는 경우는 입력으로 주어지지 않습니다. </li>
    <li> 아래의 예를 포함하여, 잘못된 입력은 주어지지 않습니다. </li>
    <ul>
        <li> 주차장에 없는 차량이 출차되는 경우 </li>
        <li> 주차장에 이미 있는 차량(차량번호가 같은 차량)이 다시 입차되는 경우 </li>
    </ul>
    </ul>
</ul>
</blockquote>

&nbsp; 두개의 배열을 입력 받아 해당 배열의 데이터를 가공하여 처리하는 문제라고 생각했다.

```swift
func solution(_ fees:[Int], _ records:[String]) -> [Int] {
    var allCar: Set<String> = []
    var result: [Int] = []
    
    // records에서 차량번호만 추출하여 저장
    for i in records {
        allCar.insert(i.components(separatedBy: " ")[1])
    }
    
    for i in Array(allCar).sorted() {
        var lastInTime = ""
        var lastOutTime = ""
        var totalParkingTime = 0
        
        for j in records {
            if i == j.components(separatedBy: " ")[1] {
                if j.components(separatedBy: " ")[2] == "IN" {
                    lastInTime = j.components(separatedBy: " ")[0]
                } else {
                    lastOutTime = j.components(separatedBy: " ")[0]
                }
                
                if !lastInTime.isEmpty && !lastOutTime.isEmpty {
                    totalParkingTime += (Int(lastOutTime.prefix(2))! * 60 + Int(lastOutTime.suffix(2))!) - (Int(lastInTime.prefix(2))! * 60 + Int(lastInTime.suffix(2))!)
                    lastInTime = ""
                    lastOutTime = ""
                }
            }
        }
        if !lastInTime.isEmpty && lastOutTime.isEmpty {
            totalParkingTime += 1439 - (Int(lastInTime.prefix(2))! * 60 + Int(lastInTime.suffix(2))!)
        }
        if totalParkingTime <= fees[0] {
            result.append(fees[1])
        } else {
            if (totalParkingTime - fees[0])%fees[2] != 0 {
                result.append(fees[1] + ((totalParkingTime - fees[0]) / fees[2] + 1) * fees[3])
            } else {
                result.append(fees[1] + ((totalParkingTime - fees[0]) / fees[2]) * fees[3])
            }
        }
    }
    return result
}
```

&nbsp; 먼저 `fees`의 값들은 `records`의 처리가 끝나고 나서 사용할 값들이기에 후순위로 처리하고 `records`를 먼저 가공했다.
&nbsp; `records`에서 차량 번호를 골라 `Set`을 활용하여 중복을 없애고 저장하였고 이를 활용하여 `records`를 for문을 돌면서 일치하는 차량 번호들만 가지고 데이터를 처리하게 작업했다.
&nbsp; 만약 차량이 23:59 이전에 나간 기록이 없다면 23:59까지의 시간을 가지고 계산을 해야 했기 때문에 최종 현황이 입차인지 출차인지를 확인해보고 시간 계산을 진행해야 했다.

&nbsp; 또한 마지막으로 요금을 계산할 때 기본 요금과 시간을 확인하고 해당 시간 내에 출차하였는지 또한 확인해보고 계산을 할 수 있도록 코드를 작성하였다.

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21388&authkey=%21AEF__4n-OENO-E8&width=1626&height=886" style="margin-right: 10px;">
</div>

&nbsp; 이렇게 작성할 경우 다음과 같은 성능으로 테스트를 통과할 수 있었다. 이 중 몇몇은 시간 복잡도가 살짝 높기는 했다. ㅎㅎ
&nbsp; 다른 정답 코드를 확인하였는데 대부분이 딕셔너리를 활용하여 코드를 짠 것을 확인하였고 딕셔너리를 활용한 코드 또한 코드가 복잡하기는 하였다.

<br>

[참고]
[https://school.programmers.co.kr/learn/courses/30/lessons/92341](https://school.programmers.co.kr/learn/courses/30/lessons/92341)

-----
