---
layout: post
title: Swift - Navigation에 관하여
date: 2023-11-03 13:59 +0900
author: Tag
tags: [Swift, SwiftUI]
toc:  true
categories: IOS
published: true
---
테킷 앱스쿨 2기에서 파이널 프로젝트를 진행하면서 많은 경험을 하게 되었는데 그중 하나가 Navigation을 사용하는 것이였다.

파이널 프로젝트에서 IOS 최소 버전을 17로 잡고 진행을 하다 보니 기존의 사용하던 Navigation과 관련된 코드들이 Deprecated 된 코드들이 많았었고 이를 다른 코드로 대체하기 위해 다양한 공부를 하게되면서 Navigation에 대해 파고들어야 할 부분이 많다는 것을 알게되었고 정리한 내용을 작성해보려고 한다.

### NavigationStack & NavigationLink

먼저 NavigationStack과 NavigationLink를 이용하여 뷰 전환을 하는 방법이다. 이름에서 알 수 있듯이 Navigation으로 이동되는 View들을 Stack의 형식으로 쌓아서 관리할 수 있게 해주는 구조체이다. 기본적인 사용 방법은 다음과 같다.

```swift
struct NavigationLinkView: View {    
    var body: some View {
        NavigationStack {
            NavigationLink {
                NavigationLinkOneView()
            } label: {
                Text("첫번째 페이지로 이동합니다.")
            }
        }
    }
}
```

위 코드처럼 NavigationLink를 NavigationStack으로 감싸고 사용을 하며 NavigationLink는 Stack 안에 포함되어 있지 않을 경우 작동을 하지 않게 된다. <br>
하지만 이전 뷰에서 Stack이 선언되어 있다면 시뮬레이터에서는 정상적으로 동작하는 것을 볼 수 있다.

```swift
struct NavigationLinkOneView: View {
    var body: some View {
        NavigationLink {
            NavigationLinkTwoView()
        } label: {
            Text("두번째 페이지로 이동합니다.")
        }
    }
}
```

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/assets/PostImage/NavigationLinkImage1.jpg" width="200" height="400" style="margin-right: 10px;">
  <img src="/assets/PostImage/NavigationLinkImage2.jpg" width="200" height="400">
</div>

위 결과처럼 뷰에 NavigationLink만 있을 경우 정상적으로 동작하지 않지만 NavigationStack 안에 포함되어 있을 경우 정상적으로 동작한다.

### NavigationStack과 Path, NavigationDestination

다음으로는 NavigationStack과 Path를 사용하여 뷰 전환을 하는 방법이다. 앞서 말했듯이 NavigationStack은 Stack의 형식으로 뷰를 저장해두고 전환을 하는데 이때 Path를 사용하여 루트뷰로 이동하거나 원하는 뷰로 이동을 할 수 있다.

```swift
struct NavigationDestinationView: View {
    
    @State private var stack: [String] = []
    
    var body: some View {
        NavigationStack(path: $stack) {
            Button(action: {
                stack.append("1")
                print(stack)
            }, label: {
                Text("페이지 1로")
            })
            .navigationDestination(for: String.self) { stack in
                if stack == "1" {
                    NavigationDestinationViewOne(stack: $stack)
                } else if stack == "2" {
                    NavigationDestinationViewTwo(stack: $stack)
                }
            }
        }
    }
}

struct NavigationDestinationViewOne: View {
    
    @Binding var stack: [String]
        
    var body: some View {
        VStack {
            Text("이곳은 첫번째 네비게이션을 타고 온 곳입니다.")
            
            Button(action: {
                stack.append("2")
            }, label: {
                Text("다음 2페이지로")
            })
        }
    }
}

struct NavigationDestinationViewTwo: View {
    
    @Binding var stack: [String]
    
    var body: some View {
        VStack {
            Text("이곳은 두번째 네비게이션을 타고 온 곳입니다.")
            
            Button("이전으로") {
                print(stack)
                stack.removeLast()
                print(stack)
            }
            
            Button("처음으로") {
                print(stack)
                stack.removeAll()
                print(stack)
            }
        }
    }
}
```
NavigationStack에 path로 stack을 추적하고 navigationDestination을 통해 해당 stack이 변화할 때 뷰를 바꾸어주는 코드를 통해 뷰를 전환 할 수 있다. 위와 같이 path를 통해 뷰를 관리해 줄 경우 path의 값을 통해 뷰를 전환할 수 있으며 배열의 값을 모두 지워 루트뷰(RootView)로 돌아갈 수 있는 코드를 작성할 수 있다.

[참고]

[https://developer.apple.com/documentation/swiftui/navigationstack](https://developer.apple.com/documentation/swiftui/navigationstack)

-----
