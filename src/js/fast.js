var sj = {}
$.ajax({
    type: "GET",
    url: "src/data/emoji.json",
    success: function (data) {
        sj = data
    },
    dataType: "json",
    cache: true
});

const emojiRegex = require('emoji-regex');
const {
    Segment,
    useDefault
} = require('segmentit');

if (window.location.href.indexOf("gitee") != -1) {
    $("body").addClass("mdui-theme-primary-teal mdui-theme-accent-teal")
    $("#domestic").hide()
} else {
    $("body").addClass("mdui-theme-primary-purple mdui-theme-accent-purple")
    $("#global").hide()
}

const regex = emojiRegex();

function isEmojiChar(text) {
    if (regex.exec(text) == null) {
        if (regex.exec(text) == null) {
            return false
        } else {
            if (text.search(/[\u{4e00}-\u{9fa5}_a-zA-Z0-9]/ug) == -1) {
                return true
            } else {
                return false
            }

        }
    }
    if (text.search(/[\u{4e00}-\u{9fa5}_a-zA-Z0-9]/ug) == -1) {
        return true
    } else {
        return false
    }
}

const segmentit = useDefault(new Segment());
var inst = new mdui.Tab('#tab'), index = 0;
document.getElementById('tab').addEventListener('change.mdui.tab', function (event) {
    index = event._detail.index
    if (index == 2) {
        $("#up").text("给👴论证")
    } else {
        $("#up").text("给👴转")
    }
});

const getTextFeature = (text, color) => {
    try {
        const canvas = document.createElement('canvas');
        /*
          因为进行scale以后的图案区域实际上不能确定，
          理论上应该只在(0,0,1,1)，但有的也会在它周围的像素里，
          综合效率的考虑，给一个2*2的范围是比较合适的;
        */
        canvas.width = 2;
        canvas.height = 2;

        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '100px sans-serif';
        ctx.fillStyle = color;
        ctx.scale(0.01, 0.01);
        ctx.fillText(text, 0, 0);

        const imageData = ctx.getImageData(0, 0, 2, 2).data;
        // 在一些系统里Uint8ClampedArray不支持常规的数组方法，需要转换一下
        const imageDataArr = [];
        for (let i = 0; i < imageData.length; i++) {
            imageDataArr[i] = imageData[i];
        }

        return imageDataArr.reduce((a, b) => (a + b), 0) > 0 ?
            imageDataArr.toString() : false;
    } catch (e) {
        return false;
    }
};

const distribute = (text, mode) => {
    const feature = getTextFeature(text, '#000');
    return mode ? (feature && feature === getTextFeature(text, '#FFF'))
        : feature;
};

const ifEmoji = (text) => {
    const mode = distribute('😁');
    return distribute(text, mode);
}
var bfl = Object.assign({}, sj), bfsy = {}, sy = {}
Object.keys(sj).forEach(function (key) {
    sy[pinyinUtil.getPinyin(key, '', false, true) + ""] = key
    if (!ifEmoji(sj[key]) && isEmojiChar(sj[key])) {
        eval("delete bfl." + key)
    } else {
        bfsy[pinyinUtil.getPinyin(key, '', false, true) + ""] = key
    }
});


elementsP = { 'qing': '氢', 'hai': '氦', 'li': '锂', 'pi': '铍', 'peng': '硼', 'tan': '钽', 'dan': '氮', 'yang': '氧', 'fu': '氟', 'nai': '氖', 'na': '钠', 'mei': '镁', 'lv': '氯', 'gui': '硅', 'lin': '磷', 'liu': '硫', 'ya': '氩', 'jia': '镓', 'gai': '钙', 'kang': '钪', 'tai': '钛', 'fan': '钒', 'ge': '鿔', 'meng': '锰', 'tie': '铁', 'gu': '钴', 'nie': '镍', 'tong': '铜', 'xin': '锌', 'zhe': '锗', 'shen': '砷', 'xi': '锡', 'xiu': '溴', 'ke': '氪', 'ru': '铷', 'si': '锶', 'yi': '铱', 'gao': '锆', 'ni': '铌', 'mu': '钼', 'de': '锝', 'liao': '钌', 'lao': '铹', 'ba': '钯', 'yin': '铟', 'ti': '锑', 'di': '镝', 'dian': '碘', 'xian': '氙', 'se': '铯', 'bei': '钡', 'lan': '镧', 'shi': '铈', 'pu': '镤', 'nv': '钕', 'po': '钋', 'shan': '钐', 'you': '铀', 'ga': '钆', 'te': '铽', 'huo': '钬', 'er': '铒', 'diu': '铥', 'lu': '镥', 'ha': '铪', 'wu': '钨', 'lai': ' 铼', 'e': '锇', 'bo': '铂', 'jin': '金', 'gong': '汞', 'ta': '铊', 'qian': '铅', 'bi': '铋', 'ai': '锿', 'dong': '氡', 'fang': '钫', 'lei': '镭', 'a': '锕', 'tu': '钍', 'bu': '钚', 'ju': '锔', 'pei': '锫', 'kai': '锎', 'fei': '镄', 'men': '钔', 'nuo': '锘', 'lu': '𬬻', 'du': '𬭊', 'xi': '𬭳', 'hei': '𬭶', 'lun': '𬬭', 'mo': '镆', 'li': '𫟷' }
elements = { 'qīng': '氢', 'hài': '氦', 'lǐ': '锂', 'pī': '铍', 'péng': '硼', 'tàn': '碳', 'dàn': '氮', 'yǎng': '氧', 'fú': '氟', 'nǎi': '氖', 'nà': '钠', 'měi': '镁', 'lǚ': '铝', 'guī': '硅', 'lín': '磷', 'liú': '硫', 'lǜ': '氯', 'yà': '氩', 'jiǎ': '钾', 'gài': '钙', 'kàng': '钪', 'tài': '钛', 'fán': '钒', 'gè': '铬', 'měng': '锰', 'tiě': '铁', 'gǔ': '钴', 'niè': '镍', 'tóng': '铜', 'xīn': '锌', 'jiā': '镓', 'zhě': '锗', 'shēn': '砷', 'xī': '锡', 'xiù': '溴', 'kè': '氪', 'rú': '铷', 'sī': '锶', 'yǐ': '钇', 'gào': '锆', 'ní': '铌', 'mù': '钼', 'dé': '锝', 'liǎo': '钌', 'lǎo': '铑', 'bǎ': '钯', 'yín': '银', 'gé': '镉', 'yīn': '铟', 'tī': '锑', 'dì': '碲', 'diǎn': '碘', 'xiān': '氙', 'sè': '铯', 'bèi': '钡', 'lán': '镧', 'shì': '铈', 'pǔ': '镨', 'nǚ': '钕', 'pǒ': '钷', 'shān': '钐', 'yǒu': '铕', 'gá': '钆', 'tè': '铽', 'dī': '镝', 'huǒ': '钬', 'ěr': '铒', 'diū': '铥', 'yì': '镱', 'lǔ': '镥', 'hā': '铪', 'tǎn': '钽', 'wū': '钨', 'lái': '铼', 'é': '锇', 'yī': '铱', 'bó': '铂', 'jīn': '金', 'gǒng': '汞', 'tā': '铊', 'qiān': '铅', 'bì': '铋', 'pō': '钋', 'ài': '砹', 'dōng': '氡', 'fāng': '钫', 'léi': '镭', 'ā': '锕', 'tǔ': '钍', 'pú': '镤', 'yóu': '铀', 'ná': '镎', 'bù': '钚', 'méi': '镅', 'jū': '锔', 'péi': '锫', 'kāi': '锎', 'āi': '锿', 'fèi': '镄', 'mén': '钔', 'nuò': '锘', 'láo': '铹', 'lú': '𬬻', 'dù': '𬭊', 'xǐ': '𬭳', 'bō': '𬭛', 'hēi': '𬭶', 'mài': '鿏', 'dá': '𫟼', 'lún': '𬬭', 'fū': '𫓧', 'mò': '镆', 'lì': '𫟷' }
function chemicalChange(text) {
    raw = text.split("")
    h = pinyinUtil.getPinyin(text, '|', true, true).split("|")
    ht = pinyinUtil.getPinyin(text, '|', false, true).split("|")
    res = ''
    for (i = 0, len = h.length; i < len; i++) {
        if (typeof (elements[h[i]]) != "undefined") {
            res += elements[h[i]]
        } else {
            if (typeof (elementsP[ht[i]]) != "undefined") {
                res += elementsP[ht[i]]
            } else {
                res += raw[i]
            }
        }
    }
    return res
}

function generate() {
    var tmp = "1. " + $("#i_item").val() + "事男性，而野兽先辈毫无疑问也事男性。"
    if ($('#i_gender').val() == "女") { tmp = "1. 存在野兽先辈女子说，而" + $("#i_item").val() + "也事女子。"; }
    if ($('#i_gender').val() == "不确定") { tmp = "1. 野兽先辈既可以被论证为男子也可以被论证为女子，而" + $("#i_item").val() + "也没有确定的性别。"; }
    var tmp2 = "2. 野兽先辈在《真夏夜的银梦》中本色出演，事真实存在的人物；而" + $("#i_item").val() + "也在三次元中真实存在。"
    if ($('#i_illus').val() == "是") { tmp2 = "2. " + $("#i_item").val() + "事虚拟人物；而先辈也是《真夏夜的银梦》中的虚拟人物。"; }

    var length_check = $("#i_item").val().replace(/\s/g, "");
    var length = length_check.length
    var yajuu = {
        1: "1 + 1 + 4 - 5 * 1 ^ 4",
        2: "1 + 1 + 4 - 5 + 1 ^ 4",
        3: "1 + 1 - 4 + 5 * 1 ^ 4",
        4: "1 + 1 + 4 - 5 - 1 + 4",
        5: "1 + 1 + 4 - 5 + 1 * 4",
        6: "1 + 1 + 4 + 5 - 1 - 4",
        7: "1 + 1 + 4 + 5 - 1 * 4",
        8: "1 + 1 + 4 + 5 + 1 - 4",
        9: "1 + 1 * 4 + 5 - 1 ^ 4",
        10: "1 + 1 + 4 + 5 - 1 ^ 4",
        11: "1 + 1 + 4 + 5 * 1 ^ 4",
        12: "1 + 1 + 4 + 5 + 1 ^ 4",
        13: "1 + 1 * 4 + 5 - 1 + 4",
        14: "1 + 1 + 4 + 5 - 1 + 4",
        15: "1 + 1 + 4 + 5 + 1 * 4",
        16: "1 + 1 + 4 + 5 + 1 + 4",
        17: "1 + 1 + 4 * 5 - 1 - 4",
        18: "1 + 1 + 4 * 5 - 1 * 4",
        19: "1 + 1 + 4 * 5 + 1 - 4",
        20: "1 + 1 * 4 * 5 - 1 ^ 4",
        21: "1 + 1 + 4 * 5 - 1 ^ 4",
        22: "1 + 1 + 4 * 5 * 1 ^ 4",
        23: "1 + 1 + 4 * 5 + 1 ^ 4",
        24: "1 + 1 * 4 * 5 - 1 + 4",
        25: "1 + 1 + 4 * 5 - 1 + 4"
    };
    var template = "";
    template += "野兽先辈" + $("#i_item").val() + "说\n\n";
    template += tmp + "\n\n";
    template += tmp2 + "\n\n";
    template += "3. " + $("#i_item").val() + "比" + $("#i_whom").val() + "年长，事先辈；野兽先辈24岁事学生，也事先辈。\n\n"
    template += "4. 野兽先辈雷普后辈，事屑；" + $("#i_item").val() + "" + $("#i_what").val() + "，也事屑。\n\n";
    template += "5. " + $("#i_item").val() + "想要" + $("#i_dream").val() + "，事王道征途；野兽先辈也崇尚王道征途。 \n\n";
    template += "6. " + $("#i_item").val() + "虽然" + $("#i_what").val() + "，但也" + $("#i_good").val() + "，具备屑鉴二象性。野兽先辈虽然雷普后辈，却爆破了nico本社，也具备屑鉴二象性。\n\n"
    template += "7. " + $("#i_item").val() + "很无力，想" + $("#i_dream").val() + "，却连" + $("#i_no").val() + "都办不到；野兽先辈崇尚王道征途，却在雷普后辈时被一转攻势，也很无力。\n\n"
    template += "8. 在这篇屑论证中，" + $("#i_item").val() + "惨遭小鬼迫害；银梦已经dssq多年，先辈也惨遭十万甚至九万个小鬼迫害。\n\n"
    if (length < 26) { template += "数字论证：“" + $("#i_item").val() + "”事" + length + "个字。" + length + " = " + yajuu[length] + "\n\n"; }
    else { template += "数字论证：" + $("#i_item").val() + "的名字太长了，数字论证无力，你自裁罢\n\n"; }
    template += "最后，没有任何证据表明" + $("#i_item").val() + "一定不事野兽先辈。而基于以上论据，以及“如果一个东西长得像鸭子，游泳像鸭子，叫声像鸭子，那么它就是鸭子”的原理，我们可以完全确信，" + $("#i_item").val() + "就事野兽先辈。\n\n"
    template += "Q. E. D."
    return template
}

$("#up").click(function () {
    var res = ''
    console.log(index, 1)
    if (index == 0) {
        var k = $("#t").val(),
            jieba = segmentit.doSegment(k),
            ck = sj,
            indexa = sy
        if ($("input[id='checklook']").is(':checked') == true) {
            ck = bfl, indexa = bfsy
        }
        console.log(jieba)
        if ($("input[name='group1']:checked").val() == "1") {
            for (i = 0, len = jieba.length; i < len; i++) {
                var word = jieba[i]['w'].trim()
                if (typeof (ck[word]) != "undefined") {
                    res += ck[word]
                } else {
                    if (word.length > 0) {
                        characters = word.split("")
                        for (j = 0, wlen = characters.length; j < wlen; j++) {
                            if (typeof (ck[characters[j]]) != "undefined") {
                                res += ck[characters[j]]
                            } else {
                                res += characters[j]
                            }
                        }
                    } else {
                        res += word
                    }
                }
            }
        } else {
            for (i = 0, len = jieba.length; i < len; i++) {
                var word = jieba[i]['w'].trim(),
                    r = ck[word]
                if (typeof (r) != "undefined") {
                    res += ck[word]
                } else if (typeof (r) == "undefined") {
                    var wordPy = pinyinUtil.getPinyin(word, '', false, true)
                    if (typeof (indexa[wordPy]) != "undefined") {
                        res += ck[indexa[wordPy]]
                    } else {
                        if (word.length > 0) {
                            characters = word.split("")
                            for (j = 0, wlen = characters.length; j < wlen; j++) {
                                var character = characters[j]
                                if (typeof (ck[character]) != "undefined") {
                                    res += ck[character]
                                } else {
                                    var characterPy = pinyinUtil.getPinyin(character, '', false, true)
                                    if (typeof (indexa[characterPy]) != "undefined") {
                                        res += ck[indexa[characterPy]]
                                    } else {
                                        res += character
                                    }
                                }
                            }
                        } else {
                            res += word.trim()
                        }
                    }
                }
            }
        }
        if ($("input[id='checkda']").is(':checked') == true) {
            res = res.replace(/大/g, "带")
        }
        if ($("input[id='checkai']").is(':checked') == true) {
            res = res.replace(/💓/g, "i")
        }
        if ($("input[id='checkye']").is(':checked') == true) {
            res = res.replace(/我/g, "👴")
        }
    } else if (index == 1) {
        if ($("input[id='zhadd']").is(':checked') != true) {
            res = (($("#t1").val()).split("")).join(" ")
        } else {
            res = ($("#t1").val()).replace(/([\u4e00-\u9fa5])/g, " $1 ").replace(/  /g, " ").trim()
        }
    } else if (index == 2) {
        res = generate()
    } else if (index == 3) {
        res = chemicalChange($("#t2").val())
    }
    $("#res").text(res)
    $('#copy').attr('data-clipboard-text', res)
});

var clipboard = new ClipboardJS('#copy');
clipboard.on('success', function (e) {
    mdui.snackbar({
        message: '复制成功'
    });
});

clipboard.on('error', function (e) {
    mdui.snackbar({
        message: '复制失败，用其他浏览器试试？'
    });
});