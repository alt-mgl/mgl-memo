function init(info) {
    const { no, maxNo, memoBtn, GN } = info;
    fetch(`data/book${no}.csv`).then((res) => {
        const reader = res.body.getReader();
        reader.read().then((ret) => {
            const { value } = ret;
            const infoStr = new TextDecoder('utf-8').decode(value);
            const lines = infoStr.split(/[\r\n]/).filter((lItem) => {
                if (maxNo > 0) {
                    if (lItem !== '') {
                        const lNo = parseInt(lItem.split(',').slice(-1)[0]);

                        if (lNo <= maxNo) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return true
                }
            });
            
            const words = [];
            for (let i = 0; i < GN; i += 1) {
                const idx = Math.floor(Math.random() * lines.length);
                const line = lines[idx];
                if (words.indexOf(line) < 0) {
                    words.push(line);
                }
            }

            randMemo(words, wrappers);
            memoBtn.onclick = function() {
                randMemo(words, wrappers);
            };
        })
    });
}

function randMemo(lines, wrappers) {
    const randIdx = Math.floor(Math.random() * lines.length);
    const randLine = lines[randIdx];
    const items = randLine.split(',');

    let tmp = items[0];
    if (/\(.+\s.+\)/.test(tmp)) {
        const spRet = tmp.split('(');
        tmp = `${spRet[0]}<br>(${spRet[1]}`;
    }

    const word = tmp;
    const explain = items[1];
    const mp3 = items[2];
    const lessonNo = items[3]

    const { wordWrapper, explainWrapper, lessonNoWrapper } = wrappers;
    wordWrapper.innerHTML = word;
    explainWrapper.innerHTML = explain;
    lessonNoWrapper.innerHTML = lessonNo;
    player.setAttribute('src', 'data/mp3/'+mp3);
}