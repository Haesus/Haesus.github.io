# Haesus.github.io

Astro 기반으로 구성한 개인 기술 블로그 및 일상 기록용 소스 저장소입니다.  
기존 Jekyll 블로그를 정리하고, 현재는 이 저장소에서 Astro 소스를 관리하며 GitHub Pages로 정적 배포합니다.

## 프로젝트 목적

- 기술 글과 일상 기록을 하나의 정적 블로그로 관리
- GitHub Pages를 통해 공개 블로그를 안정적으로 배포
- Markdown 중심의 작성 흐름은 유지하면서 Astro 기반으로 구조 현대화

## 현재 구성

- Astro 정적 사이트
- `src/content/blog` 기반 콘텐츠 컬렉션
- GitHub Actions 기반 GitHub Pages 배포
- 카테고리 페이지
  - `iOS`
  - `Coding Test`
  - `Daily`
- 태그 아카이브
- RSS / sitemap 생성

## 주요 디렉터리

```text
├── public/              # 정적 파일
├── src/
│   ├── components/      # 공통 UI 컴포넌트
│   ├── content/blog/    # 블로그 포스트
│   ├── layouts/         # 레이아웃
│   ├── lib/             # 블로그 데이터 가공 유틸
│   ├── pages/           # 라우트 페이지
│   └── styles/          # 전역 스타일
├── astro.config.mjs
├── package.json
└── README.md
```

## 실행 명령어

프로젝트 루트에서 실행합니다.

| 명령어 | 설명 |
| :-- | :-- |
| `npm install` | 의존성 설치 |
| `npm run dev` | 로컬 개발 서버 실행 |
| `npm run build` | 정적 빌드 생성 |
| `npm run preview` | 빌드 결과 미리보기 |

## 로컬 개발

```sh
npm install
npm run dev
```

기본 개발 서버 주소:

```text
http://127.0.0.1:4321
```

## 배포

- 배포 플랫폼: GitHub Pages
- 배포 방식: GitHub Actions
- 워크플로 파일: `.github/workflows/deploy.yml`

`main` 브랜치에 변경을 push하면 GitHub Actions가 Astro 빌드를 수행하고, 생성된 정적 결과물을 GitHub Pages에 배포합니다.
