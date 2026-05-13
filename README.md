# Haesus.github.io

개인 기술 블로그와 일상 기록을 함께 운영하는 Astro 기반 정적 블로그 저장소입니다.  
현재 이 저장소에서 Astro 소스를 직접 관리하고, `main` 브랜치 기준으로 GitHub Pages에 자동 배포합니다.

공개 주소: <https://haesus.github.io>

## 개요

- 기존 Jekyll 블로그를 Astro로 마이그레이션한 저장소
- Markdown 기반 글 작성 흐름 유지
- 기술 글과 일상 글을 하나의 블로그 안에서 함께 관리
- GitHub Actions를 통한 정적 배포 자동화

## 기술 스택

- Astro 6
- MDX
- RSS 생성
- Sitemap 생성
- GitHub Pages
- GitHub Actions

## 현재 블로그 구조

- 메인 메뉴
  - `Home`
  - `All Posts`
  - `About`
- 주요 카테고리
  - `iOS`
  - `Coding Test`
  - `Daily`
- 기타 기능
  - 다크/라이트 모드 토글
  - 태그 기반 포스트 필터
  - RSS / sitemap
  - 모바일 사이드바 토글

현재 디자인 방향은 브랜딩 중심 랜딩 페이지보다, 글 읽기에 집중되는 단순한 콘텐츠 중심 블로그 구조를 목표로 두고 있습니다.

## 주요 디렉터리

```text
├── .github/workflows/   # GitHub Pages 배포 워크플로
├── public/              # favicon, 이미지, 정적 검증 파일
├── src/
│   ├── components/      # 공통 UI 컴포넌트
│   ├── content/blog/    # 블로그 포스트 콘텐츠
│   ├── layouts/         # 공통 레이아웃
│   ├── lib/             # 포스트 가공, 카테고리/태그 유틸
│   ├── pages/           # 라우트 페이지
│   └── styles/          # 전역 스타일
├── astro.config.mjs
├── package.json
└── README.md
```

## 로컬 실행

프로젝트 루트에서 실행합니다.

```sh
npm install
npm run dev
```

기본 개발 서버:

```text
http://127.0.0.1:4321
```

## 사용 가능한 명령어

| 명령어 | 설명 |
| :-- | :-- |
| `npm install` | 의존성 설치 |
| `npm run dev` | 로컬 개발 서버 실행 |
| `npm run build` | 정적 빌드 생성 |
| `npm run preview` | 빌드 결과 미리보기 |

## 글 작성 위치

블로그 포스트는 `src/content/blog` 아래에서 관리합니다.

- Markdown 또는 MDX 기반 작성
- frontmatter 기준으로 제목, 날짜, 태그, 카테고리, 공개 여부를 관리
- 현재 카테고리 값은 `IOS`, `Coding-Test`, `daily`를 사용

## 배포 방식

- 배포 대상: GitHub Pages
- 배포 트리거: `main` 브랜치 push
- 워크플로 파일: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

배포 흐름:

1. `main` 브랜치에 변경 push
2. GitHub Actions에서 `npm ci`
3. `npm run build`
4. `dist` 산출물 업로드
5. GitHub Pages에 정적 배포

현재 워크플로는 Node 24 기준으로 정리되어 있습니다.

## 개발 메모

- 로컬 개발은 Astro dev 서버 기준으로 확인
- 디자인은 콘텐츠 가독성을 우선하고, 과한 장식보다 단순한 구조를 지향
- 모바일에서는 사이드바 메뉴와 외부 링크를 토글로 접고 펼치는 구조를 사용
- `All Posts` 페이지에서는 태그 필터로 글을 좁혀볼 수 있음

## 향후 정리 후보

- 홈/포스트 상세의 타이포와 여백 추가 미세 조정
- 카테고리/태그 탐색 경험 보완
- SEO 메타데이터와 소개 문구 추가 정리
