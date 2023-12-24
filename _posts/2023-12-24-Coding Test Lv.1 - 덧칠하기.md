---
layout: post
title: Coding Test - Lv.1 덧칠하기
date: 2023-12-24 20:55 +0900
author: Tag
tags: [Swift, Coding Test]
toc:  true
categories: Coding Test
published: true
---
### 프로그래머스 Lv.1 덧칠하기

> 어느 학교에 페인트가 칠해진 길이가 n미터인 벽이 있습니다. 벽에 동아리 · 학회 홍보나 회사 채용 공고 포스터 등을 게시하기 위해 테이프로 붙였다가 철거할 때 떼는 일이 많고 그 과정에서 페인트가 벗겨지곤 합니다. 페인트가 벗겨진 벽이 보기 흉해져 학교는 벽에 페인트를 덧칠하기로 했습니다.
 넓은 벽 전체에 페인트를 새로 칠하는 대신, 구역을 나누어 일부만 페인트를 새로 칠 함으로써 예산을 아끼려 합니다. 이를 위해 벽을 1미터 길이의 구역 n개로 나누고, 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호를 붙였습니다. 그리고 페인트를 다시 칠해야 할 구역들을 정했습니다.
 벽에 페인트를 칠하는 롤러의 길이는 m미터이고, 롤러로 벽에 페인트를 한 번 칠하는 규칙은 다음과 같습니다.
 >
 > - 롤러가 벽에서 벗어나면 안 됩니다.
 > - 구역의 일부분만 포함되도록 칠하면 안 됩니다.
>
> 즉, 롤러의 좌우측 끝을 구역의 경계선 혹은 벽의 좌우측 끝부분에 맞춘 후 롤러를 위아래로 움직이면서 벽을 칠합니다. 현재 페인트를 칠하는 구역들을 완전히 칠한 후 벽에서 롤러를 떼며, 이를 벽을 한 번 칠했다고 정의합니다.
 한 구역에 페인트를 여러 번 칠해도 되고 다시 칠해야 할 구역이 아닌 곳에 페인트를 칠해도 되지만 다시 칠하기로 정한 구역은 적어도 한 번 페인트칠을 해야 합니다. 예산을 아끼기 위해 다시 칠할 구역을 정했듯 마찬가지로 롤러로 페인트칠을 하는 횟수를 최소화하려고 합니다.
 정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요.

 #### 제한사항

 > 1 ≤ m ≤ n ≤ 100,000
1 ≤ section의 길이 ≤ n
1 ≤ section의 원소 ≤ n
section의 원소는 페인트를 다시 칠해야 하는 구역의 번호입니다.
section에서 같은 원소가 두 번 이상 나타나지 않습니다.
section의 원소는 오름차순으로 정렬되어 있습니다.

먼저 NavigationStack과 NavigationLink를 이용하여 뷰 전환을 하는 방법이다. 이름에서 알 수 있듯이 Navigation으로 이동되는 View들을 Stack의 형식으로 쌓아서 관리할 수 있게 해주는 구조체이다. 기본적인 사용 방법은 다음과 같다.

```swift
func solution(_ n:Int, _ m:Int, _ section:[Int]) -> Int {
    // 전체 벽 상태 배열로 생성
    var allWalls = Array(repeating: 1, count: n)
    var result = 0
    
    // 칠해야 할 벽은 0으로 변경
    for s in section {
        allWalls[s-1] = 0
    }
    
    // 배열을 순환하며 0일 때 m의 크기만큼 1로 변환
    for i in 0..<n {
        if allWalls[i] == 0 {
            for j in i...(i+m-1) {
                guard j < n else { break }
                allWalls[j] = 1
            }
            result += 1
        }
    }
    
    return result
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
