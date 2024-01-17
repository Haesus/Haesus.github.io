---
layout: post
title: Swift - ObservedObject와 StateObject의 차이
date: 2023-12-05 23:54 +0900
author: Tag
tags: [Swift, SwiftUI]
toc:  true
categories: IOS
published: true
---
&nbsp; SwiftUI에서 프로퍼티로 `@ObservedObject`와 `@StateObject`라는 것이 존재한다. 각각의 설명을 공식문서로 살펴보면 다음과 같다.

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21346&authkey=%21AP2uFkd3C3XM5OU&width=897&height=296" width="max" height="max" style="margin-right: 10px;">
</div>

<br>

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21348&authkey=%21AFGY95iKaI__g1I&width=899&height=272" width="max" height="max" style="margin-right: 10px;">
</div>

<br>

&nbsp; 설명이 조금 다르지만 결국 두 프로퍼티 래퍼는 특정 객체를 관찰하여 값이 변경될 때 `View`에 해당 변경 사실을 알려주어 뷰를 다시 로드할 수 있도록 하는 기능을 한다.

&nbsp; 이를 실제로 코드에서 어떻게 동작이 다른지 확인해보면

```swift
class ObjectViewModel: ObservableObject {
    @Published var number = 0

    func upNumber() {
        number += 1
    }
}
```

&nbsp; 기본적으로 `class`에 `ObservableObject` 프로토콜을 채택시키고 `Published`를 통해 `number`가 변화할 경우 해당 값을 참조하는 `View`들에게 알려줄 수 있다.

```swift
struct ContentView: View {
    @State var randomNumber = (0..<1000).randomElement()!
    
    var body: some View {
        VStack {
            Spacer()
            Text("랜덤 숫자 : \(randomNumber)")
            Button("Randomize number") {
                randomNumber = (0..<1000).randomElement()!
            }
        }
        TabView {
            ObservedObjectView()
                .tabItem {
                    Text("ObservedObject View")
                }
            StateObjectView()
                .tabItem {
                    Text("StateObject View")
                }
        }
    }
}

struct ObservedObjectView: View {
    @ObservedObject var observedObjectViewModel = ObjectViewModel()
    
    var body: some View {
        VStack {
            Text("ObservedObject")
            Text("ObjectViewModel의 숫자 값 : \(observedObjectViewModel.number)")
            Button("ObjectViewModel Number값 증가") {
                observedObjectViewModel.upNumber()
            }
        }
    }
}

struct StateObjectView: View {
    @StateObject var stateObjectViewModel = ObjectViewModel()
    
    var body: some View {
        VStack {
            Text("StateObject")
            Text("ObjectViewModel의 숫자 값 : \(stateObjectViewModel.number)")
            Button("ObjectViewModel Number값 증가") {
                stateObjectViewModel.upNumber()
            }
        }
    }
}
```

&nbsp; `ObservedObject`와 `StateObject`의 차이를 확인하기 위해 부모뷰로 `ContentView`를 만들어주고 해당 뷰 안에 `ObservedObjectView`와 `StateObjectView`를 넣어 줬다.
&nbsp; 기본적으로 두 뷰 모두 `ObservedObject`와 `StateObject`로 관찰하고 있는 `number`의 값이 변할 경우 뷰를 다시 그리면서 뷰를 로드한다.
&nbsp; 그러나 부모뷰에서 값이 변하면서 뷰가 다시 그려질 경우 `ObservedObject`의 경우 기존의 값을 읽지 못하고 `StateObject`의 경우만 기존의 값을 그대로 읽어 뷰를 그리는 모습을 볼 수 있다. 이는 부모뷰가 새로 그려지면서 `ObservedObject`의 경우는 하위뷰도 새로 그려지면서 뷰모델을 새로 읽어오는 것이기 때문이다.

<div style="display: flex; justify-content: center; align-items: center;">
<figure>
<img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21351&authkey=%21AIIfosZOjHCV1Hk&width=498&height=1080" width="200" height="400" style="margin-right: 10px;">
<figcaption><font size="2em" color="gray"> ObservedObject </font></figcaption>
</figure>

<figure>
<img src="https://onedrive.live.com/embed?resid=1C2ED43779C10D71%21352&authkey=%21AAnCtV67KXXboXw&width=498&height=1080" width="200" height="400" style="margin-right: 10px;">
<figcaption><font size="2em" color="gray"> StateObject </font></figcaption>
</figure>
</div>

[참고]

[https://developer.apple.com/documentation/swiftui/stateobject](https://developer.apple.com/documentation/swiftui/stateobject)
[https://developer.apple.com/documentation/swiftui/observedobject](https://developer.apple.com/documentation/swiftui/observedobject)

-----
