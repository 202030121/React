# 202030121 이승엽

## 3월 20일 (3주차)
### React Project 구조 및 역할
* node_modules  
  - 초기 node module 및 새로 설치하는 패키지가 저장됨  
  - git으로 관리하지 않기 때문에 디렉토리 이름이 흐릿하게 나옴  

* public  
  - 정적(static) 파일을 저장하는 디렉토리  
  - build 후 배포할 html, css, js 등이 보관되는 곳  

* src/  
  - React 프로젝트의 주요 코드가 위치하는 디렉토리  
  - 개발하면서 대부분의 작업이 이루어지는 곳  

* src/App.js  
  - 메인 component  
  - 출력을 위해 index.js로 전달됨  

* src/App.css  
  - App.js에 적용되는 스타일을 정의하는 스타일 파일  

* src/index.js  
  - React 앱의 진입 점으로 최종 렌더링이 되는 곳  
  - ReactDOM.createRoot를 사용하여 App.js를 렌더링  

* src/index.css  
  - 전역 스타일을 정의하는 스타일 파일  

### 의존성 관리와 package.json  
* packge.json  
  - 패키지의 의존성을 관리하는 파일  
  - 의존성이란, 하나의 소프트웨어가 다른 소프트웨어(라이브러리, 패키지, 모듈 등)에 의존하여 동작하는 관계  
  - 각종 패키지 등의 버전을 동일하게 유지하기 위한 것  

* 의존성 관리  
  - 협업을 할 때는 팀원들 각자의 컴퓨터에 같은 패키지들을 설치하여 동일한 개발환경 구축  
  - node 패키지는 각 팀원들이 설치  
  - 의존성을 무시할 시 개발 프로젝트 오류 등이 발생  

* package.json의 의존성 내용 종류  
  - dependencies : 실제 코드에서 사용하는 라이브러리  
  - devDependencies : 개발할 때만 필요한 라이브러리들  
  - peerDependencies : 필요한 라이브러리만, 직접 설치하지 않고 사용자에게 설치를 맡기는 경우  
  - optionalDpendencies : 선택적 의존성

* package.json과 package-lock.json의 차이  
![](./img/2.PNG)  
  - package-lock.json에는 정확한 버전이 기록되어 있고, npm install을 실행해도 같은 버전이 설치됨  
  - 따라서, 팀 프로젝트에서는 package-lock.json을 유지하는 것이 중요  
  
* package.json을 유지해야하는 이유  
  - 프로젝트의 의존성 정보 제공  
    - 프로젝트에서 어떤 패키지를 사용하는지 정의하는 역할  
    - 어떤 패키지를 설치해야 하는지 알 수 있는 기준이 됨  
  - 버전 범위 설정 가능  
    - 최신 패치 버전을 허용할 수도 있고, 정확한 버전만 고정 가능  
    - 개발자가 원하는 방식으로 유연하게 관리  
  - 스크립트와 메타데이터 저장  
    - "scripts" 속성을 이용해 빌드, 테스트, 실행 등의 명령어 저장  
    - 프로젝트 실행을 위해서는 필수  
  - 새로운 패키지 설치 및 관리  
    - 패키지를 설치하면 package.json에 추가, package-lock.json에 정확한 버전이 기록  

### node module의 재설치  
* node module을 다시 설치해야 하는 경우
  - 팀 작업을 하면서 깃허브로부터 프로젝트 파일을 clone 했을 경우  
  - 개인이 자신의 프로젝트를 다른 PC 등에서 clone을 받아 계속 개발해야 하는 경우  
  - 프로젝트에 문제가 생겨서 node module을 다시 설치해야하는 경우  

* clone을 받은 프로젝트의 경우  
  - 다음 명령을 실행하면 패키지를 다시 설치  
     ```
    npm install
    ```  
  - node_modules 디렉토리는 자동 생성  
  - 설치가 끝나면 프로젝트 동작 확인  

* 프로젝트에 오류나 의존성 등의 문제가 생겼을 경우  
  - node_modules 폴더와 package-lock.json 파일 삭제  
    ```
    rm -rf node_modules package-lock.json
    ```  
  - npm 패키지의 임시 저장소인 cache를 초기화  
    ```
    npm cache clean --force
    ```  
    - force 옵션 강제 삭제  
  - 패키지 재설치  
    ```
    npm install
    ```  

* package-lock.json을 삭제하는 이유  
  - package-lock.json이 손상 혹은 잘못된 의존성이 있을 때  
    - package-lock.json을 삭제 후 새로 생성하면 해결될 수 있음  
  - 최신 버전의 패키지를 다시 받고 싶을 때  
    - 재설치 권장  
  - 팀 프로젝트에서 다른 팀원이 이상한 상태로 package-lock.json 업데이트 시  
    - 재설치 권장  


## 3월 13일 (2주차)
### Node.js
* 장점
  - 비동기 논 블로킹 I/O로 높은 성능 제공
  - 풀스택 개발 가능으로 생산성 향상
  - NPM의 방대한 생태계 활용 가능
  - 경량 서버 개발에 적합
  - 실시간 데이터 처리가 강력함   
* 단점  
  - CPU 집약적인 작업에 부적합 : 싱글 스레드 기반
  - 보안에 취약함

### React Project 생성  
```
npx create-react-app 이름
cd 이름
npm start
```

### React Project 구조 및 역할
![](./img/RP1.PNG)

