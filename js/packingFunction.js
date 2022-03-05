//鼠标经过时显示、离开时隐藏
function overOut(obj1, obj2) {
    obj1.addEventListener('mouseover', function() {
        obj2.style.display = 'block';
    })
    obj1.addEventListener('mouseout', function() {
        obj2.style.display = 'none';
    })
}
//鼠标经过时显示、离开时隐藏
//输入框获得鼠标焦点时显示、失去焦点时隐藏
function focuSblur(obj1, obj2) {
    obj1.addEventListener('focus', function() {
        obj2.style.display = 'block';
    })
    obj1.addEventListener('blur', function() {
        obj2.style.display = 'none';
    })
}
//输入框获得鼠标焦点时显示、失去焦点时隐藏
//缓动动画函数
function animate(obj, target, callback) {
    clearInterval(obj.timer); //先清除定时器，防止叠加
    obj.timer = setInterval(function() {
        let x = (target - obj.offsetLeft) / 5; //步长
        x = x > 0 ? Math.ceil(x) : Math.floor(x);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer); //当移动等于目标值时停止
            if (callback) { //回调函数
                callback();
            }
        } else {
            obj.style.left = (obj.offsetLeft + x) + 'px';
        }
    }, 10)
}
//缓动动画函数