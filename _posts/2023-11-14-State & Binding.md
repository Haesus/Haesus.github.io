---
layout: post
title: Swift - State & Binding에 대하여
date: 2023-11-13 23:30 +0900
author: Tag
tags: [Swift, SwiftUI]
toc:  true
categories: IOS
published: true
---
### State
&nbsp; SwiftUI에서 뷰는 변경되는 데이터에 따라 처리코드를 따로 작성하지 않아도 상태를 정해주는 것만으로도 뷰를 자동으로 업데이트한다.
&nbsp; 이를 상태 프로퍼티(state property)라고 하며 대표적인 형태로 @State를 활용한 프로퍼티 래퍼를 사용하여 선언하는 방식이다.

```swift
struct StateView: View {
    @State private var isPlaying: Bool = false


    var body: some View {
        Button(isPlaying ? "Pause" : "Play") {
            isPlaying.toggle()
        }
    }
}
```

&nbsp; 간단한 예제를 살펴보면 해당 StateView 뷰 내에서 @State 프로퍼티 래퍼를 통해 isPlaying의 값을 선언하고 있다. 그리고 버튼의 토글을 통해 값이 변경될 때마다 뷰를 업데이트하여 변경된 값을 출력하는 것이다.
<div style="display: flex; justify-content: center; align-items: center;">
<img src="/assets/PostImage/StateProperty.gif" width="200" height="400" style="margin-right: 10px;">
</div>
&nbsp; 위처럼 토글을 통해 state의 값을 변경하고 해당 값이 변경될때마다 뷰를 업데이트하는 것이다.
</p>

### Binding
&nbsp; 또한 하위 뷰에서 상위 뷰의 상태 프로퍼티에 접근하여 뷰를 구성해야하는 경우가 있는데 이런 경우 @Binding을 활용하여 뷰끼리 상태 프로퍼티를 연결해주면 쉽게 해결된다.

```swift
struct StateView: View {
    @State private var isPlaying: Bool = false
    
    var body: some View {
        VStack {
            PlayButton(isPlaying: $isPlaying)
        }
    }
}

struct PlayButton: View {
    @Binding var isPlaying: Bool
    
    var body: some View {
        Button(isPlaying ? "Pause" : "Play") {
            isPlaying.toggle()
        }
    }
}
```

위 예제처럼 StateView에서 상태 프로퍼티로 가지고 있는 isPlaying을 PlayButton 뷰에서 동일한 상태 프로퍼티를 통해 뷰를 그리고 싶다면 Binding을 활용하여 상태 프로퍼티를 연결시켜두면 PlayButton 뷰에서 프로퍼티의 값이 변할 경우 StateView에서도 해당 변화를 인식하고 뷰를 업데이트하게 된다.

[참고]
[https://developer.apple.com/documentation/swiftui/state](https://developer.apple.com/documentation/swiftui/state)

-----
