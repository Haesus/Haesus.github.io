---
layout: post
title: Coding Test - Lv.1 문자열 나누기
date: 2024-01-30 20:52 +0900
author: Tag
tags: [Swift, Coding Test]
categories: Coding-Test
published: true
---
<h2> 프로그래머스 Lv.1 문자열 나누기 </h2>

<blockquote>
&nbsp; 문자열 <code>s</code>가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

<ul>
    <li> 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다. </li>
    <li> 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다. </li>
    <li> <code>s</code>에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다. </li>
    <li> 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다. </li>
</ul>

문자열 <code>s</code>가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.
</blockquote>

<h4> 제한사항 </h4>

<blockquote>
<ul>
    <li> 1 ≤ <code>s</code>의 길이 ≤ 10,000 </li>
    <li> <code>s</code>는 영어 소문자로만 이루어져 있습니다. </li>
</ul>
</blockquote>

&nbsp; 해당 문제는 문자열을 문자 단위로 확인하며 계산을 하는 문제이다. 처음에는 문제를 보고 filter나 다른 방법이 있을 것 같아 고민을 해보았는데 마땅히 방향이 떠오르지 않아서 무작정 코드를 작성해 보았다.

```swift
func solution(_ s:String) -> Int {
    var result = 0
    var sString = ""
    var oString = ""
    
    for i in s {
        if sString == "" || sString.contains(i) {
            sString += String(i)
        } else {
            oString += String(i)
        }
        if sString.count == oString.count {
            result += 1
            sString = ""
            oString = ""
        }
    }
    
    if !sString.isEmpty || !oString.isEmpty {
        result += 1
    }
    
    return result
}
```

&nbsp; 문자열을 for문을 통해 문자 하나씩 확인하면서 진행하고 `sString`과 `oString`의 count 값이 같아질 경우 `result`의 값을 증가시키고 `sString`과 `oString`의 값을 초기화 시켜 반복하여 `result`의 값을 찾아내는 방식으로 구성하였다.

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21380&authkey=%21ADvUyFwKCKRPAR8&width=1628&height=1208" style="margin-right: 10px;">
</div>

&nbsp; 해당 방식으로 충분히 만족스러운 테스트 결과가 나왔지만 다른 방식이 궁금하여 조금 찾아보았더니 `Dictionary`의 grouping을 활용하여 코드를 작성하는 방법이 있어서 신기해서 조금 학습해보았다.

```swift
func solution(_ s: String) -> Int {
    var array: [String] = []
    var acc = ""

    for c in s {
        if !acc.isEmpty && Dictionary(grouping: Array("\(acc)\(c)"), by: { $0 })[acc.first]?.count == "\(acc)\(c)".filter({ $0 != acc.first ?? c }).count {
            acc.removeAll()
            array.append("\(acc)\(c)")
        } else {
            acc += String(c)
        }
    }
    return array.count + (acc.isEmpty ? 0 : 1)
}
```

&nbsp; 해당 코드는 문자를 `acc`에 저장하면서 `Dictionary`의 grouping을 활용하여 첫 문자로 grouping한 문자의 수와 그 외 문자의 수가 같을 경우 `array`에 저장하며 그 값을 가지고 return 값을 확인하는 방법이였다.
&nbsp; 물론 해당 방식이 for문 내부에서 고차함수를 활용하여서 그런지 시간복잡도가 조금 더 높게 나오는 문제가 있는 것 같긴하였지만 충분히 흥미로운 코드라고 생각한다.

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21381&authkey=%21AB02iaWBMqbpVTs&width=1630&height=1210" style="margin-right: 10px;">
</div>

<br>

[참고]
[https://school.programmers.co.kr/learn/courses/30/lessons/140108](https://school.programmers.co.kr/learn/courses/30/lessons/140108)

-----
