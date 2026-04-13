document.addEventListener("DOMContentLoaded", () => {
    const terminalOutput = document.getElementById('output');
    const bgm = document.getElementById('bgm');
    const startBtn = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const terminal = document.getElementById('terminal');
    
    const terminalWindow = document.getElementById('terminal-window'); 

    const globalOffset = 7000; 

    const sequence = [
        { time: 0, dur: 500, text: "Starting...", type: "system" },
        { time: 500, dur: 1000, text: "Logged on as user#1637!", type: "system" },
        { time: 1500, dur: 2500, text: "Synced Credits, Sound and Lyrics", type: "system" },
        { time: 34000, dur: 2000, text: "창문을 열면", type: "lyric" },
        { time: 37000, dur: 1200, text: "Ah Bright light", type: "lyric" },
        { time: 38500, dur: 1670, text: "따스한 햇살을", type: "lyric" },
        { time: 40500, dur: 1600, text: "잔뜩 쐬고서", type: "lyric" },
        { time: 43000, dur: 2000, text: "근사한 예감은", type: "lyric" },
        { time: 45500, dur: 1250, text: "그래 Day by Day", type: "lyric" },
        { time: 47500, dur: 500, text: "서서히", type: "lyric" },
        { time: 48500, dur: 2500, text: "가슴에 흘러넘쳐가", type: "lyric" },
        { time: 51500, dur: 3500, text: "변하지 않는 나날의 문을 열어", type: "lyric" },
        { time: 55800, dur: 2500, text: "빛이 보이는 저 편까지", type: "lyric" },
        { time: 59200, dur: 800, text: "Right now", type: "lyric" },
        { time: 60000, dur: 2000, text: "시작의 첫 걸음", type: "lyric" },
        { time: 66500, dur: 1000, text: "SHINY DAYS", type: "lyric" },
        { time: 68200, dur: 1000, text: "새로운 바람", type: "lyric" },
        { time: 70700, dur: 3500, text: "튀어 오를 듯한 스텝을 밟으며 Go my way", type: "lyric" },
        { time: 75000, dur: 1000, text: "Can you feel?", type: "lyric" },
        { time: 76800, dur: 2000, text: "투명한 하늘", type: "lyric" },
        { time: 79000, dur: 3200, text: "가슴의 두근거림이 이끌고 가는 Brand-new world", type: "lyric" },
        { time: 84200, dur: 1800, text: "Listen to the melody", type: "lyric" },
        { time: 86300, dur: 1700, text: "저 멀리 휘파람을", type: "lyric" },
        { time: 88500, dur: 1500, text: "울려 퍼뜨렸으면", type: "lyric" },
        { time: 91000, dur: 1800, text: "뛰어나가자 미래로", type: "lyric" },
        
        { time: 100500, dur: 700, text: "user#1637 /clear", type: "system" },
        { time: 101500, action: "clear" }, 

        { time: 104000, dur: 1500, text: "봐, 올려다보면", type: "lyric" },
        { time: 106300, dur: 1500, text: "Cloudless sky", type: "lyric" },
        { time: 107880, dur: 1200, text: "So happy", type: "lyric" },
        { time: 109550, dur: 3000, text: "공기를 가득 들이마시고", type: "lyric" },
        { time: 112950, dur: 2500, text: "당연한 작은 기적을", type: "lyric" },
        { time: 117000, dur: 1000, text: "One by one", type: "lyric" },
        { time: 118500, dur: 800, text: "똑바로", type: "lyric" },
        { time: 119500, dur: 1000, text: "이를 악물고", type: "lyric" },
        { time: 121500, dur: 3000, text: "조금의 용기가 계기로", type: "lyric" },
        { time: 125500, dur: 2300, text: "움직이기 시작하는 세계", type: "lyric" },
        { time: 129000, dur: 2500, text: "All right 어디로든지 갈 수 있어", type: "lyric" },
        { time: 136500, dur: 1000, text: "SHINY DAYS", type: "lyric" },
        { time: 138200, dur: 1000, text: "어디까지나 앞으로", type: "lyric" },
        { time: 140700, dur: 3500, text: "기분 좋게 좋아하는 노래를 흥얼거리면서", type: "lyric" },
        { time: 145000, dur: 1000, text: "Can you see?", type: "lyric" },
        { time: 146800, dur: 2000, text: "반짝 거리는 Heaven", type: "lyric" },
        { time: 149000, dur: 3200, text: "정면의 바람이 싣고 가는 Brand-new mind", type: "lyric" },
        { time: 154200, dur: 1800, text: "Please save your memories", type: "lyric" },
        { time: 156300, dur: 1700, text: "쌓아가는", type: "lyric" },
        { time: 158500, dur: 1500, text: "꿈과 함께", type: "lyric" },
        { time: 161000, dur: 1800, text: "전진하자 미래로", type: "lyric" },
        
        { time: 170500, dur: 700, text: "user#1637 /clear", type: "system" },
        { time: 171500, action: "clear" }, 

        { time: 173800, dur: 2000, text: "태양처럼 웃는 얼굴로", type: "lyric" },
        { time: 177500, dur: 2000, text: "Take it easy", type: "lyric" },
        { time: 179900, dur: 2000, text: "어깨 힘을 빼고", type: "lyric" },
        { time: 182230, dur: 2000, text: "매일을 보내자", type: "lyric" },
        { time: 186320, dur: 2000, text: "오늘도 내일도", type: "lyric" },
        { time: 188780, dur: 2000, text: "그래 It will be fine", type: "lyric" },
        { time: 195800, dur: 1000, text: "Sing a song", type: "lyric" },
        { time: 197500, dur: 1000, text: "같이 노래를 부르자", type: "lyric" },
        { time: 200000, dur: 3500, text: "활짝 개이고 있는 하늘 저 편까지", type: "lyric" },
        { time: 204300, dur: 1000, text: "Can you see?", type: "lyric" },
        { time: 205600, dur: 2000, text: "반짝 거리는 Heaven", type: "lyric" },
        { time: 208300, dur: 3200, text: "어디까지나 바람이 데리고 갈 거야", type: "lyric" },
        { time: 214800, dur: 1000, text: "SHINY DAYS", type: "lyric" },
        { time: 216500, dur: 1000, text: "새로운 바람", type: "lyric" },
        { time: 219000, dur: 3500, text: "튀어 오를 듯한 스텝을 밟으며 Go my way", type: "lyric" },
        { time: 223300, dur: 1000, text: "Can you feel?", type: "lyric" },
        { time: 225100, dur: 2000, text: "투명한 하늘", type: "lyric" },
        { time: 227300, dur: 3200, text: "가슴의 두근거림이 이끌고 가는 Brand-new world", type: "lyric" },
        { time: 232500, dur: 1800, text: "Listen to the melody", type: "lyric" },
        { time: 234600, dur: 1700, text: "저 멀리 휘파람을", type: "lyric" },
        { time: 236800, dur: 1500, text: "울려 퍼뜨렸으면", type: "lyric" },
        { time: 239300, dur: 1800, text: "뛰어나가자 미래로", type: "lyric" },
        
        { time: 241800, dur: 1000, text: "All Operations Completed. (4m21s)", type: "system" },
        { time: 242800, dur: 1000, text: "Thank You for Using Our Bots.", type: "system" },
        { time: 243800, dur: 1500, text: "user#1637 /shutdown", type: "system" },
        
        { time: 245300, action: "clear" }, 

        { time: 246000, dur: 2500, text: "Shiny Days from Laid-Back Camp", type: "credit" },
        { time: 248500, dur: 5000, text: "Animated by Rung2ne", type: "credit" },
        { time: 253500, dur: 5000, text: "Most of the Script from Weirdhost Easteregg", type: "credit" },
        { time: 258500, dur: 0, text: "user#1637:_", type: "system" } 
    ];

    let currentIndex = 0;

    startBtn.addEventListener('click', () => {
        startScreen.style.display = 'none';
        
        terminalWindow.style.display = 'flex'; 
        
        bgm.play();
        requestAnimationFrame(checkSync);
    });

    function checkSync() {
        if (currentIndex >= sequence.length) return; 

        const currentTimeMs = (bgm.currentTime * 1000) + globalOffset;
        const nextItem = sequence[currentIndex];

        if (currentTimeMs >= nextItem.time) {
            if (nextItem.action === "clear") {
                terminalOutput.innerHTML = "";
            } else {
                typeText(nextItem.text, nextItem.type, nextItem.dur);
            }
            currentIndex++;
        }

        requestAnimationFrame(checkSync);
    }

    function typeText(text, type, dur) {
        if (!text) return;

        const line = document.createElement('div');
        line.className = `line ${type}`;
        terminalOutput.appendChild(line);

        const speed = (dur && dur > 0) ? Math.floor(dur / text.length) : 50;
        let charIndex = 0;

        line.textContent += text[charIndex];
        charIndex++;
        terminal.scrollTop = terminal.scrollHeight;

        if (charIndex >= text.length) return;

        const typingInterval = setInterval(() => {
            line.textContent += text[charIndex];
            charIndex++;
            
            terminal.scrollTop = terminal.scrollHeight;

            if (charIndex >= text.length) {
                clearInterval(typingInterval);
            }
        }, speed);
    }
});
