var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';
var url1 = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-03-26/2017-06-10';
var url2 = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-04-26/2017-06-10';
// var result;
//
// var XHR = new XMLHttpRequest();
// XHR.open('GET', url, true);
// XHR.send();
//
// XHR.onreadystatechange = function() {
//     if (XHR.readyState == 4 && XHR.status == 200) {
//         result = XHR.response;
//         console.log(result);
//
//         // 伪代码
//         var url2 = 'http:xxx.yyy.com/zzz?ddd=' + result.someParams;
//         var XHR2 = new XMLHttpRequest();
//         XHR2.open('GET', url, true);
//         XHR2.send();
//         XHR2.onreadystatechange = function() {
//             ...
//         }
//     }
// }


function getJSON(url) {
    return new Promise(function(resolve, reject) {
        var XHR = new XMLHttpRequest();
        XHR.open('GET', url, true);
        XHR.send();

        XHR.onreadystatechange = function() {
            if (XHR.readyState == 4) {
                if (XHR.status == 200) {
                    try {
                        var response = JSON.parse(XHR.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(XHR.statusText));
                }
            }
        }
    })
}

// getJSON(url).then(resp => console.log(resp));

function renderAll() {
    return Promise.all([getJSON(url), getJSON(url1)]);
}

renderAll().then(function(value) {
    // 建议大家在浏览器中看看这里的value值
    console.log(value);
})


function renderRace() {
    return Promise.race([getJSON(url), getJSON(url1)]);
}

renderRace().then(function(value) {
    console.log(value);
})
