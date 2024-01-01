---
layout: post
title: Coding Test - Lv.1 옹알이 (2)
date: 2024-01-01 15:42 +0900
author: Tag
tags: [Swift, Coding Test]
# toc:  true
categories: Coding-Test
published: true
---
<h2> 프로그래머스 Lv.1 옹알이 (2) </h2>

<blockquote>
&nbsp; 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. </br>
&nbsp; 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요. </br>
</blockquote>

<h4> 제한사항 </h4>

<blockquote>
<ul>
<li> 1 ≤ babbling의 길이 ≤ 100 </li>
<li> 1 ≤ babbling[i]의 길이 ≤ 30 </li>
<li> 문자열은 알파벳 소문자로만 이루어져 있습니다. </li>
</ul>
</blockquote>

&nbsp; 해당 문제는 각 배열을 돌면서 조카가 말 할 수 있는 발음이 연속으로 나오지 않는 경우를 찾으면 되는 간단한 문제였던 것 같다.
&nbsp; 단어를 for 문을 통해 확인하면서 문자열을 하나씩 저장하면서 발음이 가능한 문자가 될 경우 lastword에 저장하면서 word를 초기화 해주었고 이렇게 배열 하나씩 확인을 하며 빈 문자가 나오게 되면 해당 배열을 모두 말 할 수 있는 것으로 확인하여 result 값을 증가시켜주면 된다.

```swift
func solution(_ babbling:[String]) -> Int {
    let words = ["aya", "ye", "woo", "ma"]
    var result = 0
    
    // 각 배열을 확인하면서 발음과 일치하는지 확인힌다.
    for i in babbling {
        var lastword = ""
        var word = ""
        // 각 배열에서 문자열을 하나씩 저장하면서 발음 가능한지 확인한다.
        for j in i {
            word += String(j)
            
            if words.contains(word) && lastword != word {
                lastword = word
                word = ""
            }
        }
        
        // 배열을 확인하고 나서 word가 비어 있다면 해당 배열은 모두 발음 가능한 문자로 이루어져 있다.
        if word == "" {
            result += 1
        }
    }
    
    return result
}
```

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://drive.google.com/uc?export=view&id=1MBr-qukEy6BX6CX6gqtdRh7VNnECgMAZ" style="margin-right: 10px;">
</div>


[참고]

[https://school.programmers.co.kr/learn/courses/30/lessons/42889](https://school.programmers.co.kr/learn/courses/30/lessons/42889)

-----
