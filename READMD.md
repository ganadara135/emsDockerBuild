# docker 이미지 만드는 절차
1. openems 에서 edge 와 UI 를 빌드함
2. edge 는 이클립스에서 export 시킴
3. ui 폴더에서 "npx ng build -c edge" 명령어 생성
4. target -> edge 폴더에 ui 빌드 파일 있음
5. edge 와 ui 빌드 파일을 본 폴더의 넣음
6. edge 빌드 파일은 emsEdge 폴더 밑에
7. ui 빌드 파일은 emsUI -> target 폴더 밑에
8. 마지막으로 docker-compose up --build 처리
9. http://{felix주소}:{설치포트}/system/console/configMgr
10. felix 에서  UI 와 교신할 수 있는 포트 열여줌  ex) 8085 포트
11. fellix 에서 influxdb 세팅 시에 ip address 부분에 도커 컨테이너 이름을 넣는다 <br>
    ex) https://blog.naver.com/PostList.nhn?blogId=kjamjalee&from=postList&categoryNo=55  <br>
12. 

# Production 환경에서 실행하는 절차
1. dockerhub 에서 이미지 push
