function initAllWordStat(all) {
    const awd = localStorage.getItem('allWords');
    if (awd === null || _.flatten(Object.values(JSON.parse(awd))).length !== _.flatten(Object.values(all)).length) {
        localStorage.setItem('allWords', JSON.stringify(all));

        let count = 0;
        Object.values(all).forEach((arr) => {
            count += arr.length;
        });
        localStorage.setItem('allCount', count);
        localStorage.setItem('allMemoed', 0);
    }

    if (localStorage.getItem('memoedWords') === null) {
        localStorage.setItem('memoedWords', JSON.stringify([]));
    }
}
function initLessonWordStat(lessonNo) {
    const allWordData = localStorage.getItem('allWords');
    if (allWordData !== null) {
        // 第一次运行时执行，或切换课程时执行
        const lNo = localStorage.getItem('lessonNo');
        if (localStorage.getItem('lessonCount') === null 
            || (lNo !== null && lNo !== lessonNo)) {

            all = JSON.parse(allWordData);
            localStorage.setItem('lessonCount', all[lessonNo].length);
            localStorage.setItem('lessonMemoed', 0);
        }
    } else {
        alert('初始化本课词数出错');
    }
}
function initLearntWordStat(lessonNo) {
    const allWordData = localStorage.getItem('allWords');
    if (allWordData !== null) {
        // 第一次运行时执行，或切换课程时执行
        const lNo = localStorage.getItem('lessonNo');
        if (localStorage.getItem('learntCount') === null 
            || (lNo !== null && lNo !== lessonNo)) {
        

            all = JSON.parse(allWordData);
    
            let learntCount = 0;
            for (let i = 0; i < parseInt(lessonNo); i += 1) {
                learntCount += all[i+1].length;
            }
    
            localStorage.setItem('learntCount', learntCount);
            localStorage.setItem('learntMemoed', 0);
        }
    } else {
        alert('初始化复习词数出错');
    }
}
function initGroupWordsStat(group) {
    localStorage.setItem('groupWords', JSON.stringify(group));
    localStorage.setItem('groupCount', group.length);
    localStorage.setItem('groupMemoed', 0);
}
function getStatInfo() {
    return {
        allCount: localStorage.getItem('allCount'),
        allMemoed: localStorage.getItem('allMemoed'),
        lessonCount: localStorage.getItem('lessonCount'),
        lessonMemoed: localStorage.getItem('lessonMemoed'),
        learntCount: localStorage.getItem('learntCount'),
        learntMemoed: localStorage.getItem('learntMemoed'),
        groupCount: localStorage.getItem('groupCount'),
        groupMemoed: localStorage.getItem('groupMemoed'),
    }
}

function updateWordStat(wid) {
    const memoedWords = JSON.parse(localStorage.getItem('memoedWords'));
    if (memoedWords.indexOf(wid) === -1) {
        memoedWords.push(wid);
        localStorage.setItem('memoedWords', JSON.stringify(memoedWords));
    }

    const gw = localStorage.getItem('groupWords');
    let groupMemoed = localStorage.getItem('groupMemoed') ? localStorage.getItem('groupMemoed') : 0;
    if (gw !== null) {
        const groupWords = JSON.parse(gw);
        groupMemoed = _.intersection(groupWords, memoedWords).length;
    } else {
        alert('获取本组数据失败');
    }
    localStorage.setItem('groupMemoed', groupMemoed);

    const allWordData = localStorage.getItem('allWords');
    let all = {};
    if (allWordData !== null) {
        all = JSON.parse(allWordData);
    } else {
        alert('获取全部数据失败');
    }

    const lessonNo = localStorage.getItem('lessonNo') ? localStorage.getItem('lessonNo') : 1;
    let lessonMemoed = localStorage.getItem('lessonMemoed') ? localStorage.getItem('lessonMemoed') : 0;
    if (lessonNo in all) {
        const lessonWords = all[lessonNo];
        lessonMemoed = _.intersection(lessonWords, memoedWords).length;
    } else {
        alert('获取本课数据失败');
    }
    localStorage.setItem('lessonMemoed', lessonMemoed);

    let learntMemoed = 0;
    for (let i = 0; i < parseInt(lessonNo); i += 1) {
        learntMemoed += _.intersection(all[i+1], memoedWords).length;
    }
    localStorage.setItem('learntMemoed', learntMemoed);

    let allMemoed = localStorage.getItem('allMemoed') ? localStorage.getItem('allMemoed') : 0;
    allMemoed = _.intersection(_.flatten(Object.values(all)), memoedWords).length;
    localStorage.setItem('allMemoed', allMemoed);
}

function updateStatShow(wrappers) {
    const {
        allCount: allCountWrapper,
        allMemoed: allMemoedWrapper,
        lessonCount: lessonCountWrapper,
        lessonMemoed: lessonMemoedWrapper,
        learntCount: learntCountWrapper,
        learntMemoed: learntMemoedWrapper,
        groupCount: groupCountWrapper,
        groupMemoed: groupMemoedWrapper,
    } = wrappers;

    const {
        allCount,
        allMemoed,
        lessonCount,
        lessonMemoed,
        learntCount,
        learntMemoed,
        groupCount,
        groupMemoed,
    } = getStatInfo();
    allCountWrapper.innerHTML = allCount;
    allMemoedWrapper.innerHTML = allMemoed;
    lessonCountWrapper.innerHTML = lessonCount;
    lessonMemoedWrapper.innerHTML = lessonMemoed;
    learntCountWrapper.innerHTML = learntCount;
    learntMemoedWrapper.innerHTML = learntMemoed;
    groupCountWrapper.innerHTML = groupCount;
    groupMemoedWrapper.innerHTML = groupMemoed;
}

function init(info) {
    const { mode, bookNo, lessonNo, memoBtn, GN, wrappers } = info;
    fetch(`data/book${bookNo}.csv`).then((res) => {
        const reader = res.body.getReader();
        reader.read().then((ret) => {
            const { value } = ret;
            const infoStr = new TextDecoder('utf-8').decode(value);
            const lines = infoStr.split(/[\r\n]/).filter((lItem) => lItem !== '');
            const filtered = lines.filter((lItem) => {
                if (lessonNo > 0) {
                    const lNo = parseInt(lItem.split(',').slice(-1)[0]);
                    
                    if (mode === 'single') {
                        if (lNo === parseInt(lessonNo)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        if (lNo <= parseInt(lessonNo)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                } else {
                    return true
                }
            });
            
            // 初始化全部id数据
            const allWordData = {}
            lines.forEach((line) => {
                const items = line.split(',');
                const wid = items[0];
                const lNo = items.slice(-1)[0];
                
                if (lNo in allWordData) {
                    allWordData[lNo].push(wid);
                } else {
                    allWordData[lNo] = [wid];
                }
            });
            // 已下这3个函数只会在localStorage里没数据时才会执行
            initAllWordStat(allWordData);
            initLessonWordStat(lessonNo);
            initLearntWordStat(lessonNo);

            const words = [];
            for (let i = 0; i < GN; i += 1) {
                const idx = Math.floor(Math.random() * filtered.length);
                const line = filtered[idx];
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

    let tmp = items[1];
    if (/\(.+\s.+\)/.test(tmp)) {
        const spRet = tmp.split('(');
        tmp = `${spRet[0]}<br>(${spRet[1]}`;
    }

    // 初始化group数据
    const groupWordData = [];
    lines.forEach((line) => {
        const items = line.split(',');
        const wid = items[0];
        
        groupWordData.push(wid);
    });
    initGroupWordsStat(groupWordData);

    const wid = items[0]
    const word = tmp;
    const explain = items[2];
    const mp3 = items[3];
    const lessonNo = items[4]

    const {
        wordWrapper,
        explainWrapper,
        lessonNoWrapper,
        widWrapper,
    } = wrappers;
    wordWrapper.innerHTML = word;
    explainWrapper.innerHTML = explain;
    lessonNoWrapper.innerHTML = lessonNo;
    widWrapper.setAttribute('wid', wid);
    player.setAttribute('src', 'data/mp3/'+mp3);

    updateWordStat(wid);
    updateStatShow(wrappers);
}