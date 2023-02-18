import CareerComponent from "../components/Career.js";
import StackComponent from "../components/Stack.js";
import EducationComponent from "../components/Education.js";
export default function AboutComponent() {
  // 이름
  const nameKo = "이혜주";
  const nameEn = "Lee Hye Joo";
  // 경력
  const careers = [
    {
      name: "뉴딜일자리 서울대공원 교육기획",
      site: "서울대공원",
      period: "2016.04 ~ 2016.12",
      doList: [
        "교육 프로그램 기획 및 프로그램 교육 자료 제작",
        "프로그램 진행 교육자, 보조 교육자로 활동",
        "서울대공원 청소년 봉사자 인솔, 관리 및 봉사 프로그램 기획",
        "교육 프로그램 교재 기획 및 제작",
        "서울대공원 청소년 봉사단 2016년 활동집 기획 및 제작",
      ],
    },
    {
      name: "웹 퍼블리셔",
      site: "(주)예스콜닷컴",
      period: "2018.01 ~ 2019.07",
      doList: [
        "웹 디자인",
        "웹 페이지 구현",
        "사내 자체 빌더나 하드코딩(HTML, CSS)를 통한 웹 페이지 구현",
        "Javascript, JQuery를 통한 기능 구현",
      ],
    },
    {
      name: "취업지원제도 일경험(인턴형)",
      site: "(주)테미스원",
      period: "2022.10 ~ 2023.01",
      doList: [
        "외부 교육을 통한 Spring framework, Vue.JS 교육",
        "경력자 멘토링으로 직무의 프로세스 교육",
      ],
    },
  ];
  // 기술
  const stacks = [
    {
      name: "HTML & CSS",
      icon: "",
      level: 4,
      description:
        "디자인 결과물을 하드 코딩하거나 회사의 자사 빌더를 이용해 부분 코딩 작업을 했습니다.<br />또한 반응형 웹사이트 의뢰를 받아 다양한 환경의 웹사이트를 만들었으며 회사에서 리뉴얼 작업을 담당 받아 기존의 플래시 사이트를 HTML로 다시 구상하여 재구축했습니다.",
    },
    {
      name: "JavaScript & JQuery",
      icon: "",
      level: 3,
      description:
        "웹 퍼블리셔 업무 중 디자인과 기능 구현을 위해 JQuery를 사용했으며, 산업기사 교육 과정을 6개월 진행하면서 프론트 교육을 받는 과정을 밟았습니다.<br />또한 교육 과정의 미니 프로젝트에서 Spring을 통해 Rest API를 구현한 뒤, JQuery의 Ajax로 CRUD를 연동했습니다.",
    },
    {
      name: "JAVA",
      icon: "",
      level: 2,
      description:
        "산업기사 교육 과정을 통해 기본적인 이론과 프로젝트 제작 프로세스를 교육 받았습니다.<br />다양한 예제 문제들과 포트폴리오를 위한 프로젝트 제작을 하였으며 알고리즘 문제를 풀며 JAVA의 다양한 함수와 인터페이스, 추상화를 활용했습니다.",
    },
    {
      name: "MySQL, Oracle",
      icon: "",
      level: 2,
      description:
        "MySQL, Oracle 서버의 구축 및 데이터 모델링을 교육 받았으며 , RDBMS를 활용 할 수 있습니다. 교육 과정 중 간단한 CRUD를 위한 Query와 Join을 위한 Subquery를 작성하는 실습을 시행하였습니다.",
    },
    {
      name: "JSP",
      icon: "",
      level: 2,
      description:
        "JSP 웹 프로그래밍 작성에 필요한 JDK나 톰캣(TOMCAT) 이클립스 환경설정을 구축하고 디버깅하는 교육을 이수했습니다. 또한 교육 과정 중 MVC2 모델 기반의 회원 관리, 게시판, 파일 업로드 홈페이지 구축 및 유지보수를 학습했습니다.",
    },
    {
      name: "Spring & JSTL & JPA",
      icon: "",
      level: 2,
      description:
        "Annotation을 통한 Mapping 후 DB 연동, Ajax와의 연동으로 페이지 이동 없이 다양한 정보 갱신하는 API 구현이 가능합니다.",
    },
    {
      name: "Photoshop & illustrator",
      icon: "",
      level: 4,
      description:
        "Photoshop으로 사진 편집 및 레이아웃 디자인 가능하며 illustrator를 통해 아이콘 자체 제작 가능합니다.",
    },
  ];
  // 교육
  const educations = [
    {
      name: "모바일앱&웹디자인콘텐츠개발",
      site: "통합심사과정훈련 [NCS: 스마트문화앱콘텐츠제작(08030209)]",
      period: "2017.09.05 ~ 2018.01.16",
    },
    {
      name: "[과정평가형] 정보처리산업기사 취득과정(자바 JAVA, 스프링 웹개발) A(22)",
      site: "통합심사과정훈련 [NCS: 응용SW엔지니어링(20010202)]",
      period: "2022.02.21 ~ 2022.08.12",
    },
  ];

  return `
  <h1>About</h1>
  <h2>${nameEn}</h2>
  <div>
    웹 개발자를 꿈꾸는 신입 개발자 ${nameKo} 입니다.<br />
    6개월간 산업기사 교육을 받으며 백엔드개발자의 업무능력을 교육 받았습니다. <br />
    또한 웹 디자이너로 웹 에이전시에서 1년 반 일하며 얻은 지식과 경험으로 디자인과 웹 코딩을 할 수 있습니다.
  </div>
  <div>
    <h3>연락처 정보</h3>
    <ul>
      <li><a href="mailto:joo95102@naver.com">📧 joo95102@naver.com</a></li>
      <li><a href="https://jinjoo64.tistory.com/">🔗 T-STORY</a></li>
      <li><a href="https://nojamye.github.io/">👩‍💻 GITPAGE</a></li>
      <li><a href="https://github.com/nojamye">🔱 GITHUB</a></li>
    </ul>
  </div>
  <div>
    <h3>경력</h3>
    ${CareerComponent(careers)}
  </div>
  <div>
    <h3>기술</h3>
    ${StackComponent(stacks)}
  </div>
  <div>
    <h3>교육</h3>
    ${EducationComponent(educations)}
  </div>
  <div>
    <h3>포트폴리오</h3>
    <ul>
      <li>
        <a href="http://leim.site/" target="_blank">
          <h4>LEIM</h4>
        </a>
      </li>
    </ul>
    <a href="./src/resources/etc/leim_발표용_최종.zip" download>leim.pdf</a>
    <a href="./src/resources/etc/포트폴리오_이혜주_220913.pdf" download>portfolio.pdf</a>
  </div>
  `;
}
