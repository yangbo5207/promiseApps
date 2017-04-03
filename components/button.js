define(function(require) {
    var Dialog = require('dialog');

    $('button.aspect').on('click', function() {
        Dialog({
            title: '友情提示',
            content: '外面空气不太好，你确定你要出门逛逛吗？'
        }).show().then(function() {
            console.log('你点击了确认按钮.');
        }).catch(function() {
            console.log('你点击了取消按钮.');
        })
    })
})
