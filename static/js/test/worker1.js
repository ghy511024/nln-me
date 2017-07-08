onmessage = function (oEvent) {
    postMessage(oEvent.data.ghy);
};

var anphysics = (function () {
    var _physicsInterval = null;
    var _lastTick = null;
    var _physics = null
    var _timeout = 20;
    var that = {
        init: function () {

        },
        timeout: function () {

        },
        go: function () {
            if (_physicsInterval !== null)
                return
            postMessage('starting');
            _lastTick = null;
            _physicsInterval = setInterval(that.tick, _timeout)
        },
        stop: function () {
            if (_physicsInterval === null)
                return
            clearInterval(_physicsInterval);
            _physicsInterval = null;
            postMessage('stopping')
        },
        tick: function () {
            _physics.tick(); //计算一次
        },
        modifyNode: function () {

        },
        modifyPhysics: function () {

        }
    }
    return that;
})()
