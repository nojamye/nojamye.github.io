const quotes = [
    {
        "qutoe": "오늘 밤에도 별이 바람에 스치운다.",
        "author": "윤동주-서시 中"
    },
    {
        "qutoe": "죽는 날까지 하늘을 우러러 <br />한 점 부끄럼이 없기를.",
        "author": "윤동주-서시 中"
    },
    {
        "qutoe": "별을 노래하는 마음으로 <br />모든 죽어가는 것을 사랑해야지",
        "author": "윤동주-서시 中"
    },
    {
        "qutoe": "잎새에 이는 바람에도 <br />나는 괴로워했다.",
        "author": "윤동주-서시 中"
    },
    {
        "qutoe": "나는 나에게 작은 손을 내밀어 <br />눈물과 위안으로 잡는 최초의 악수. ",
        "author": "윤동주-쉽게 씌여진 시 中"
    },
    {
        "qutoe": "시인이란 슬픈 천명인줄 알면서도 <br />한줄 시를 적어 볼가,",
        "author": "윤동주-쉽게 씌여진 시 中"
    },
    {
        "qutoe": "그리고 한 사나이가 있습니다. <br />어쩐지 그 사나이가 미워져 돌아갑니다. ",
        "author": "윤동주-자화상 中"
    },
    {
        "qutoe": "다시 그 사나이가 미워져 돌아갑니다. <br />돌아가다 생각하니 그 사나이가 그리워집니다. ",
        "author": "윤동주-자화상 中"
    },
    {
        "qutoe": "이제, 사상이 능금처럼 저절로 익어 가옵니다.",
        "author": "윤동주-돌아와 보는 밤 中"
    },
    {
        "qutoe": "지조 높은 개는 <br />밤을 새워 어둠을 짖는다.",
        "author": "윤동주-또 다른 고향 中"
    },
    {
        "qutoe": "나는 아무 걱정도 없이 <br />가을 속의 별들을 다 헤일 듯합니다.",
        "author": "윤동주-별 헤는 밤 中"
    },
    {
        "qutoe": "별 하나에 시와 <br />별 하나에 어머니, 어머니,",
        "author": "윤동주-별 헤는 밤 中"
    },
    {
        "qutoe": "아름다운 또 다른 고향에 가자",
        "author": "윤동주-또 다른 고향 中"
    }
]

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.qutoe;
author.innerText = todayQuote.author;