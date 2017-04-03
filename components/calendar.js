define(function(require) {
    var request = require('request');

    // 拿到数据之后，需要处理的组件，可以根据数据渲染出需求想要的样式
    // 当然这里为了简化，就仅仅只是输出数据就行了，在实际中，拿到数据之后还要进行相应的处理

    request.getTypeInfo()
        .then(function(resp) {

            // 拿到数据，并执行处理操作
            console.log(resp);
        })

    // 这样，我们就把请求数据，与处理数据分离开来，维护起来就更加方便了，代码结构也足够清晰
})
8
