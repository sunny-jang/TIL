// 서비스용으로 사용가능한 모듈이 아닙니다. 실습용으로만 사용하세요!
// 레거시 JS 기준으로 작성 되었습니다. 나중에 ES6으로 리팩토링 해봐요 ^_^
var SimplePin = (function() {
    var render = function(event, selector) {
        var parent, pin, anchor, box, img, title, textMain, sub1, textSub1, sub2, textSub2;

        box             = document.createElement('div');
        box.className   = 'pin layer';
        box.id          = 'pin' + event.index;
        
        anchor          = document.createElement('a');
        anchor.href     = event.lnkdUrl;
        anchor.appendChild(box);
        pin             = anchor;

        parent          = document.querySelectorAll(selector);
        parent[0].appendChild(pin);

        img             = document.createElement('img');
        img.className   = 'pin banner';
        img.src         = event.expsrImgUrl;
        box.appendChild(img);

        title           = document.createElement('p');
        title.className = 'title titleMain'
        textMain        = document.createTextNode(event.evntNm);
        title.appendChild(textMain);
        box.appendChild(title);

        sub1            = document.createElement('p');
        sub1.className  = 'title titleSub'
        textSub1        = document.createTextNode(event.subtitlNm1);
        sub1.appendChild(textSub1);
        box.appendChild(sub1);

        sub2            = document.createElement('p');
        sub2.className  = 'title titleSub'
        textSub2        = document.createTextNode(event.subtitlNm2);
        sub2.appendChild(textSub2);
        box.appendChild(sub2);
    }

    return {
        "render" : render
    }
}());