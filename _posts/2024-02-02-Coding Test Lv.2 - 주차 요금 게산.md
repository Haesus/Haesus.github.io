---
layout: post
title: Coding Test - Lv.2 주차 요금 계산
date: 2024-02-02 17:45 +0900
author: Tag
tags: [Swift, Coding Test]
categories: Coding-Test
published: true
---
<h2> 프로그래머스 Lv.2 주차 요금 게산 </h2>

<blockquote>
&nbsp; 주차장의 요금표와 차량이 들어오고(입차) 나간(출차) 기록이 주어졌을 때, 차량별로 주차 요금을 계산하려고 합니다. 아래는 하나의 예시를 나타냅니다.

<ul> 
    <li> 요금표 </li>
<table>
    <thead>
        <tr>
            <th>기본 시간(분)</th>
            <th>기본 요금(원)</th>
            <th>단위 시간(분)</th>
            <th>단위 요금(원)</th>
        </tr>
    </thead>
    <tbody>
        <tr>    
            <td>180</td>
            <td>5000</td>
            <td>10</td>
            <td>600</td>
        </tr>
    </tbody>
</table>
    <li> 입/출차 기록 </li>
<table>
    <thead>
        <tr>
            <th>시각(시:분)</th>
            <th>차량 번호</th>
            <th>내역</th>
        </tr>
    </thead>
    <tbody>
        <tr>    
            <td>05:34</td>
            <td>5961</td>
            <td>입차</td>
        </tr>
        <tr>    
            <td>06:00</td>
            <td>0000</td>
            <td>입차</td>
        </tr>
        <tr>    
            <td>06:34</td>
            <td>0000</td>
            <td>출차</td>
        </tr>
        <tr>    
            <td>07:59</td>
            <td>5961</td>
            <td>출차</td>
        </tr>
        <tr>    
            <td>07:59</td>
            <td>0148</td>
            <td>입차</td>
        </tr>
        <tr>    
            <td>18:59</td>
            <td>0000</td>
            <td>입차</td>
        </tr>
        <tr>    
            <td>19:09</td>
            <td>0148</td>
            <td>출차</td>
        </tr>
        <tr>    
            <td>22:59</td>
            <td>5961</td>
            <td>입차</td>
        </tr>
        <tr>    
            <td>23:00</td>
            <td>5961</td>
            <td>출차</td>
        </tr>
    </tbody>
</table>
    <li> 자동차별 주차 요금 </li>
<table>
    <thead>
        <tr>
            <th>차량 번호</th>
            <th>누적 주차 시간(분)</th>
            <th>주차 요금(원)</th>
        </tr>
    </thead>
    <tbody>
        <tr>    
            <td>0000</td>
            <td>34 + 300 = 334</td>
            <td>5000 + ⌈(334 - 180) / 10⌉ x 600 = 14600</td>
        </tr>
        <tr>    
            <td>0148</td>
            <td>670</td>
            <td>5000 +⌈(670 - 180) / 10⌉x 600 = 34400</td>
        </tr>
        <tr>    
            <td>5961</td>
            <td>145 + 1 = 146</td>
            <td>5000</td>
        </tr>
    </tbody>
</table>
    <li> 어떤 차량이 입차된 후에 출차된 내역이 없다면, 23:59에 출차된 것으로 간주합니다. </li>
    <ul>
        <li> <code>0000</code>번 차량은 18:59에 입차된 이후, 출차된 내역이 없습니다. 따라서, 23:59에 출차된 것으로 간주합니다. </li>
    </ul>
    <li> 00:00부터 23:59까지의 입/출차 내역을 바탕으로 차량별 누적 주차 시간을 계산하여 요금을 일괄로 정산합니다. </li>
    <li> 누적 주차 시간이 <code>기본 시간</code>이하라면, <code>기본 요금</code>을 청구합니다. </li>
    <li> 누적 주차 시간이 <code>기본 시간</code>을 초과하면, <code>기본 요금</code>에 더해서, 초과한 시간에 대해서 <code>단위 시간</code> 마다 <code>단위 요금</code>을 청구합니다. </li>
    <ul>
        <li> 초과한 시간이 <code>단위 시간</code>으로 나누어 떨어지지 않으면, <code>올림</code>합니다. </li>
        <li> <code>⌈a⌉</code> : a보다 작지 않은 최소의 정수를 의미합니다. 즉, <code>올림</code>을 의미합니다. </li>
    </ul>
</ul>

&nbsp; 주차 요금을 나타내는 정수 배열 <code>fees</code>, 자동차의 입/출차 내역을 나타내는 문자열 배열 <code>records</code>가 매개변수로 주어집니다. 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
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
