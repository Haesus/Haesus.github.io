---
layout: post
title: Swift - Closure
date: 2024-02-22 23:24 +0900
author: Tag
tags: [Swift]
toc:  true
categories: IOS
published: false
---
&nbsp; 안녕하세요. Tag입니다. 😀

&nbsp; 클로저 작성하기

&nbsp; 오랜만에 Swift의 문법을 정리해보려고 합니다. 복습의 개념도 있고 오래전에 봤었던 것 같아서 기억이 가물가물한 것도 다시 머리속에 넣어보기 위해서 정리해서 작성하려고 합니다.
&nbsp;  그러면 오늘은 함수(Function)과 클로저(Closure)에 대해 알아보겠습니다. 😆

### 함수 - Function

&nbsp; 먼저 함수(Function)에 대해 알아보겠습니다.

<div style="display: flex; justify-content: center; align-items: center;">
    <figure>
        <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21372&authkey=%21AAHSrlFSkzPSM3k&width=948&height=226" width="max" height="max" style="margin-right: 10px;">
        <figcaption style="text-align: center;"><font size="2em" color="gray"> 함수(Function)의 공식문서 </font></figcaption>
    </figure>        
</div>

&nbsp; 공식문서에서 정의한 함수(Function)에 대해 보면 `특정 작업을 수행하는 독립적인 코드 덩어리`라고 정의하고 있습니다. 또한 `함수에 해당하는 이름을 지정하고 필요할 때 작업을 수행하기 위해 함수를 호출하는데 사용한다.`라고 설명하고 있습니다.

```swift
func greet(person: String) -> String {
    let greeting = "Hello, " + person + "!"
    return greeting
}

print(greet(person: "Tag"))
// Hello, Tag!
```
&nbsp; 간단한 예제를 살펴보면 `{}`인 중괄호 전체로 둘러쌓인 부분이 하나의 코드 블럭이며 이는 `func greet`를 통해 선언되어 있고 해당 함수의 이름를 통해 함수의 호출이 이루어진다고 보면 된다.

### 클로저 - Closure

&nbsp; 클로저의 공식 문서를 먼저 살펴보자.

<div style="display: flex; justify-content: center; align-items: center;">
    <figure>
        <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21373&authkey=%21AGY-Pl4E47aTDTA&width=939&height=326" width="max" height="max" style="margin-right: 10px;">
        <figcaption style="text-align: center;"><font size="2em" color="gray"> 클로저(Closures)의 공식문서 </font></figcaption>
    </figure>        
</div>

&nbsp; 클로저의 정의를 보면 `코드에서 전달하고 사용할 수 있는 기능을 가진 블록`이라고 설명하고 있습니다. 이처럼 클로저는 결국 함수와 동일한 기능을 하고 있습니다. 사실은 함수(Function)가 크게는 클로저(Closure) 안에 포함되어 있는 것이다라고 보는 것이 편할 것 같습니다. 즉 이름이 있는 클로저가 함수(Function)라고 보시면 될 것 같습니다.
&nbsp; 그러면 이름이 없는 함수 즉, 클로저(Closure)는 어떤 형식으로 작성되는지 알아보겠습니다.

```swift
{ (<#parameters#>) -> <#return type#> in
   <#statements#>
}
```

&nbsp; 클로저의 기본적인 표현식이며 `()`안에는 `파라미터의 이름`과 `파라미터 타입`을 명시하고 `->` 이후 `반환 타입` `in` 이후 `클로저의 식`을 적어주는 형식으로 작성이 됩니다.

```swift
var stringPlus = { (s1: String, s2: String) -> String in
    return s1 + ", " + s2
}

print(stringPlus("Tag", "Hi"))
// Tag, Hi
```
&nbsp; 이러한 클로저의 표현식으로 클로저를 작성해보면 위와 같은 코드를 작성해볼 수 있다. `{}`안에 클로저의 파라미터와 반환타입, 클로저의 식을 적어 변수에 저장하여 해당 변수를 호출하면서 클로저를 동작시킬 수 있다.

&nbsp; 클로저는 함수의 매개변수로도 들어갈 수 있고 매개변수의 마지막에 들어갈 경우 매개변수의 자리에서 나와 소괄호 밖에서 구현할 수도 있다. 그리고 이러한 클로저를 후행 클로저라고 한다.

```swift
    func someFunction(someString: String, )
```


[참고]

[https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)
[https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures)

-----
