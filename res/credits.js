// still-alive-web: the script
// https://github.com/SDSkyKlouD/still-alive-web

const CREDIT_DATA = [       // refer to dev_data/credits.txt
    ">SHOW DATABASES;",
    "",
    "",
    "+----------------------+",
    "| Database             |",
    "+----------------------+",
    "| Who made this? |",
    "| Rung2ne |",      // 크레딧 만든 사람 크레딧
    "+----------------------+",
    "| Credit Ideas from... |",     // 위어드호스트 이스터에그에서 영감을 받은 크레딧임
    "| Portal - Still Alive |",
    "| Weirdhost Easteregg |",
    "+----------------------+",
    "5 rows in set (0.00 sec)",
    "",
    ">Yoguter12 Devs;",
    ">SHOW TABLES;",
    "------------------------",
    "",
    "Index",
    "",
    "",         // 그냥 남겨둡시당 이라고 해놓고 정작 바꿔둔 이라고 하지만 몇개는 그대로임
    "Botstory",
    "Specialthx2",
    "Poweredby",
    "Devs",
    "RIP Bots",
    "Working Bots",
    "For Testing",
    "",
    "------------------------",
    "",
    ">SELECT * FROM Homepage WHERE id = 7987:",         // 실제로 자주 썼던 포트
    "",
    "------------------------",
    "",
    "2024년 9월 14일에 작동을 시작한",
    "첫 번째 자작 봇인 페퍼봇은",
    "5일이라는 개발기간을 가지고",
    "2024년 9월 19일 오후 10시 48분에",
    "interactions.py를 사용해",
    "첫 명령어를",
    "실행하는데 성공하고,",
    "2024년 9월 21일 오후 6시 12분에",
    "부산광역시 버스 정보 시스템 API를 이용해",
    "Discord 내에서",
    "특정 정류장의",
    "버스 도착 정보를 ",
    "받을 수 있게 되었습니다.",
    "",
    "거기서 멈추지 않고",
    "계속 노력한 결과,",
    "다른 봇들의 상당 수 기능을",
    "구현하였습니다.",
    "",
    "이 봇들은",
    "타 서버에도 초대되어",
    "여러 서버에서 작동하는 중입니다.",
    "",
    "",
    "localhost로 시작해 로컬 환경에서 봇을 구동하다가",
    "Repl.it을 거쳐",
    "Weirdhost 등 여러 서비스를 이용하다가",
    "위어드 호스트 서버의 포화로 인해",
    "정상적인 봇 구동이 어려워져,",
    "Google Cloud Platform으로 호스팅 중에 있습니다.",
    "",
    "위어드호스트 덕분에",
    "봇 개발을 포기하지 않고",
    "계속 이어나갈 수 있었으며",
    "현재는 위어드 호스트의 서버 포화로 인해",
    "Google Cloud Platform을 사용 중에 있지만,",
    "봇 개발 초창기에 마음껏 호스팅 할 수 있게 도와줬던",
    "위어드호스트에 감사를 표합니다.",
    "",
    "",
    "",
    "------------------------",
    "",
    ">SELECT * FROM Credits WHERE id = 7987:",
    "",
    "------------------------",
    "",
    "SPECIAL THANKS TO",
    "------------------------",
    "nemo_ms_53777, 흰둠미",
    "cyeojun, tomato",
    "elzhdla, 소금이",
    "",
    "Weirdhost",
    "",
    "GitHub",
    "",
    "Chat GPT 4.o",
    "Qwen2.5-Coder",
    "",
    "",
    "",
    "------------------------",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Powered By",
    "------------------------",
    "Yoguter12 Devs",
    "",
    "Google Cloud Platform",
    "",
    "",
    "",
    "------------------------",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Server",
    "------------------------",
    "구글 클라우드 플랫폼",
    "",
    "리전 | us-west1 (오리건)",
    "영역 | us-west1-a",
    "",
    "머신 유형 | e2-micro",
    "vCPU | 2개",
    "코어 | 1개",
    "메모리 | 1GB",
    "CPU 플랫폼 | Intel Broadwell",
    "",
    "운영 체제 | Ubuntu",
    "버전 | 20.04.6 LTS",
    "",
    "",
    "",
    "------------------------",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Developers",
    "------------------------",
    "Yoguter12 Devs",
    "ㄴRung2ne (Rung2ne #9706)",
    "ㄴpymood1 (텍사스 #6360)",
    "",
    "",
    "",
    "------------------------",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "R.I.P Bots",
    "------------------------",
    "키따앙 #????",
    "interactions.py",
    "명령어 동기화 불가",
    "24.09.19 ~ 24.10.22",
    "",
    "봇치 #????",
    "interactions.py",
    "명령어 동기화 불가",
    "24.09.20 ~ 24.10.24",
    "",
    "고토 히토리 #6066",
    "discord.py",
    "봇 리뉴얼",
    "24.10.24 ~ 25.03.12",
    "",
    "키타 이쿠요 #9761",
    "discord.py",
    "봇 리뉴얼",
    "24.10.22 ~ 25.03.12",
    "",
    "",
    "",
    "------------------------",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Working Bots",
    "------------------------",
    "카와라기 모모카 #1743",
    "discord.py",
    "24.09.20 ~",
    "",
    "야마다 료 #3811",
    "discord.py",
    "24.10.21 ~",
    "",
    "쿄야마 카즈사 #9761",
    "discord.py",
    "25.03.12 ~",
    "",
    "하야세 유우카 #6066",
    "discord.py",
    "25.03.12 ~",
    "",
    "",
    "",
    "------------------------",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "For testing",
    "------------------------",
    "이지치 니지카 #8101",
    "24.10.27 ~",
    "",
    "이지치 세이카 #2508",
    "24.11.01 ~",
    "",
    "오야마 마히로 #7544",
    "24.11.16 ~",
    "",
    "",
    "",
    "------------------------",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ">EXIT;",
    "Bye",
];
const CREDIT_CHARACTER_VELOCITY_MS = 100; // 68.623562ms according to Portal's game data..?
let creditCurrentPosition = 0;

const TERMINAL_CURSOR_BLINK_INTERVAL = 300;
let terminalCursorElem = $("<span id='terminal_cursor'>_</span>");
let terminalCreditCursorElem = $("<span id='terminal_cursor_credit'>_</span>");

let gettingfaster = false;

positionTerminalCursor($(".container_lyrics_before_loading>span"));
startBlinkTerminalCursor();
setTimeout(function() {
    for(let i = 0, len = 16; i < len; i++) $(".container_credits").append("<span class='row row" + i + "' ></span>" + (i != len - 1 ? "<br class='force-display'>" : ""));
    terminalCreditCursorElem.appendTo($(".container_credits"));
    startBlinkCreditTerminalCursor();
}, TERMINAL_CURSOR_BLINK_INTERVAL);

$("#stillalive_bgm").on("canplaythrough", function() {
    $(".container_lyrics_before_loading").remove();

    $(".container_lyrics_before_mobile").css("display", "block");
    positionTerminalCursor($(".container_lyrics_before_mobile>span"));
});

$(".container_lyrics_before_mobile>a").click(function() {
    $(".container_lyrics_before_mobile").remove();

    startTypingCurrentLyrics();
    startChangeLyricsContainer();
    $("#stillalive_bgm")[0].play();
    $("#stillalive_bgm")[0].muted = true;

    setTimeout(function() {
        $("#stillalive_bgm")[0].muted = false;
        $("#stillalive_bgm")[0].currentTime = 0;
    }, 6750);
    setTimeout(function() { startTypingCredits(); }, 9000);
});

$("html").click(function(event) {
	let targetTagName = $(event.target)[0].tagName.toLowerCase();

    if(targetTagName !== "a" && targetTagName !== "img") toggleFullscreen();
});

function startTypingCurrentLyrics() {
    $(".container_lyrics.current").children().each(function() {
        if($(this).prop("tagName").toLowerCase() != "br") {
            if($(this).data("start") != undefined &&
                $(this).data("dur") != undefined &&
                $(this).data("text") != undefined) {
                    let that = this;

                    setTimeout(function() {
                        if($(that).data("asciiart") != undefined) changeAsciiArt($(that).data("asciiart"));
                        if($(that).hasClass("play-game")) gettingfaster = true;

                        typeOneByOne($(that),
                                    $(that).data("text"),
                                    parseInt($(that).data("dur")),
                                    $(that).data("append-br"));
                    }, parseInt($(this).data("start")));
            }
        } else if($(this).prop("tagName").toLowerCase() == "br") {
            if($(this).data("show-offset") != undefined) {
                let that = this;
                setTimeout(function() {
                    $(that).css("display", "block");
                    positionTerminalCursor($(that));
                }, parseInt($(this).data("show-offset")));
            }
        }
    });
}

function startTypingCredits() {
    if(creditCurrentPosition < CREDIT_DATA.length) {
        let curCredit = CREDIT_DATA[creditCurrentPosition];

        for(let i = 1, l = 16; i < l; i++) $(".container_credits>span.row" + (i - 1)).text($(".container_credits>span.row" + i).text());

        typeCreditOneByOne(curCredit, CREDIT_CHARACTER_VELOCITY_MS * (curCredit == "" ? 1 : curCredit.length));
        creditCurrentPosition++;
    }
}

function startChangeLyricsContainer() {
    $(".container_lyrics").each(function() {
        if($(this).data("start") != undefined) {
            let that = this;

            setTimeout(function() {
                $(".container_lyrics.current").remove();
                $(that).addClass("current");
                startTypingCurrentLyrics();

                if($(that).hasClass("celebrate_credit")) changeAsciiArtRandomly(5000);
            }, parseInt($(this).data("start")));
        }
    });
}

function typeOneByOne(targetElem, text, duration, shouldAppendBR) {
    let timeoutPerChar = duration / text.length;
    let chars = text.split("");
    let charIdx = 0;

    positionTerminalCursor($(targetElem));

    if(shouldAppendBR) timeoutPerChar = duration / (chars.length + 1);

    for(let i = 0, n = chars.length + (shouldAppendBR ? 1 : 0); i < n; i++) {
        if(chars[i] == " ") chars[i] = "&nbsp;";

        setTimeout(function() {
            if(shouldAppendBR && charIdx == chars.length) {
                let newBR = $("<br class='force-display'>");
                newBR.insertAfter($(targetElem));
                positionTerminalCursor(newBR);
            } else $(targetElem).append(chars[charIdx++]);
        }, timeoutPerChar * i);
    }
}

function typeCreditOneByOne(text, duration) {
    let targetElem = $(".container_credits>span.row15");
    $(targetElem).text("");

    if(text != "") {
        let timeoutPerChar = duration / text.length;
        let chars = text.split("");
        let charIdx = 0;

        positionCreditTerminalCursor($(targetElem));

        for(let i = 0, n = chars.length + 1; i < n; i++) {
            setTimeout(function() {
                $(targetElem).append(chars[charIdx++]);

                if(charIdx == chars.length + 1) startTypingCredits();
            }, timeoutPerChar * i);
        }
    } else setTimeout(startTypingCredits, duration);
}

function positionTerminalCursor(currentLineElem) {
    $("#terminal_cursor").remove();
    terminalCursorElem.insertAfter($(currentLineElem));
}

function positionCreditTerminalCursor(currentLineElem) {
    $("#terminal_cursor_credit").remove();
    terminalCreditCursorElem.insertAfter($(currentLineElem));
}

function startBlinkTerminalCursor() {
    return setInterval(function() {
        if(terminalCursorElem.css("display") == undefined ||
            terminalCursorElem.css("display") == "inline-block")
            terminalCursorElem.css("display", "none");
        else
            terminalCursorElem.css("display", "");
    }, TERMINAL_CURSOR_BLINK_INTERVAL);
}

function startBlinkCreditTerminalCursor() {
    return setInterval(function() {
        if(terminalCreditCursorElem.css("display") == undefined ||
            terminalCreditCursorElem.css("display") == "inline-block")
            terminalCreditCursorElem.css("display", "none");
        else
            terminalCreditCursorElem.css("display", "");
    }, TERMINAL_CURSOR_BLINK_INTERVAL);
}

function changeAsciiArt(aaname) {
    $(".container_asciiart>pre.display").removeClass("display");
    if(aaname != "clear") $(".container_asciiart>pre.asciiart_" + aaname).addClass("display");
}

function changeAsciiArtRandomly(loopdelay) {
    setTimeout(function() {
        let rand = parseInt(Math.random() * $(".container_asciiart>pre").length);
        $(".container_asciiart>pre.display").removeClass("display");
        $($(".container_asciiart>pre").get(rand)).addClass("display");

        if(loopdelay <= 800) $("html, body").addClass("gettingfasterandfaster");
        else if(loopdelay <= 2500) $("html, body").addClass("gettingfaster");

        changeAsciiArtRandomly((loopdelay <= 50 ? 50 : loopdelay - (gettingfaster ? 39 : 0)));
    }, loopdelay);
}

function toggleFullscreen() {
	let element = document.documentElement;
	let isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || false;
	element.requestFullscreen = element.requestFullscreen || element.webkitRequestFullscreen || element.mozRequestFullScreen || function() { return false; }
	document.exitFullscreen = document.exitFullscreen || document.cancelFullscreen || document.webkitExitFullscreen || document.webkitCancelFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || function() { return false; }
	
	isFullscreen ? document.exitFullscreen() : element.requestFullscreen();
}

