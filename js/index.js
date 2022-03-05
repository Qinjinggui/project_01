window.addEventListener('load', function() {
    // 头部固定导航栏
    let headwrapper = document.querySelector(".head-wrapper");
    let searchwrap = document.querySelector('.search-wrap');
    // 头部固定导航栏的背景色变化
    window.addEventListener('scroll', function() {
            if (window.pageYOffset > 656) {
                headwrapper.style.backgroundColor = '#000';
            } else {
                headwrapper.style.backgroundColor = '';
            }
        })
        // 头部固定导航栏的背景色变化
        //点击输入框显示下拉菜单
    let searchinput = searchwrap.querySelector('input');
    let inputdropdown = document.querySelector('.input-dropdown');
    focuSblur(searchinput, inputdropdown);
    //点击输入框显示下拉菜单
    //鼠标经过显示会员下拉菜单
    let viptip = document.querySelector('.vip-tip');
    let vipdropdown = document.querySelector('.vip-dropdown');
    overOut(viptip, vipdropdown);
    //鼠标经过显示会员下拉菜单
    //鼠标经过显示个人登录信息下拉菜单
    let logintip = document.querySelector('.login-tip');
    let logindropdown = logintip.querySelector('.login-dropdown');
    overOut(logintip, logindropdown);
    //鼠标经过显示个人登录信息下拉菜单
    // 头部固定导航栏

    //轮播图
    let swiperContainer = document.querySelector('.swiper-container');
    let arrowLeft = document.querySelector('.arrow-left'); //左箭头
    let arrowRight = document.querySelector('.arrow-right'); //右箭头
    let swiperDot = document.querySelector('.swiper-dot'); //圆点盒子
    let imgsdiv = swiperContainer.querySelectorAll('.swiper-container>div')
    let imgs = swiperContainer.querySelectorAll('img'); //轮播图
    //动态生成圆点
    for (let i = 0; i < imgs.length; i++) {
        let span = document.createElement('span');
        swiperDot.appendChild(span);
    }
    let dots = swiperDot.querySelectorAll('span'); //圆点
    let targetX = imgs[0].offsetWidth; //每个轮播图盒子宽度    
    let index = 1;
    // 点击圆点切换图片
    dots[0].className = 'dot-current';
    for (let i = 0; i < dots.length; i++) {
        dots[i].setAttribute('index', i); //自定义属性（索引）
        dots[i].addEventListener('click', function() {
            index = this.getAttribute('index');
            circle = index;
            index++;
            arrowclick = index;
            console.log(arrowclick);
            console.log(circle);
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = '';
            }
            dots[i].className = 'dot-current';
            animate(swiperContainer, -(i + 1) * targetX);
        })
    }
    let firstimgdiv = imgsdiv[imgsdiv.length - 1].cloneNode(true); //克隆最后一张轮播图放到最前面
    let lastimgdiv = imgsdiv[0].cloneNode(true); //克隆第一张轮播图放到最后面
    swiperContainer.appendChild(lastimgdiv);
    swiperContainer.insertBefore(firstimgdiv, imgsdiv[0]);

    //左右箭头点击切换图片
    let arrowclick = 1; //初始化为第二张图片
    let flag = true; //节流阀
    let circle = 0; //记录圆点索引随按钮变化，获得当前圆点索引
    //左侧箭头按钮
    arrowRight.addEventListener('click', function() {
            if (flag) {
                flag = false;
                /*当图片走到最后一张时再点击按钮，此时马上跳回第二张(即相同的那张)，
                初始化 arrowclick = 1，再 arrowclick++ ， 调用动画函数切换到下一张(即第二张)
                */

                if (arrowclick > imgs.length) {
                    swiperContainer.style.left = -targetX + 'px';
                    arrowclick = 1;
                }
                arrowclick++;
                animate(swiperContainer, -arrowclick * targetX, function() {
                    flag = true;
                });
                //圆点随按钮变化
                circle++;
                if (circle == dots.length) { //当圆点索引等于它的最后一个++时，初始化为0
                    circle = 0;
                }
                for (let i = 0; i < imgs.length; i++) {
                    dots[i].className = '';
                }
                dots[circle].className = 'dot-current';
            }
        })
        //右侧箭头按钮
    arrowLeft.addEventListener('click', function() {
        if (flag) {
            flag = false;
            /*当图片走到第一张时再点击按钮，此时马上跳回倒数第二张(即相同的那张)，
            初始化 arrowclick = imgs.length，再 arrowclick--，调用动画函数
            切换到上一张(即倒数第三张)*/
            if (arrowclick == 0) {
                swiperContainer.style.left = -imgs.length * targetX + 'px';
                arrowclick = imgs.length;
            }
            arrowclick--;
            animate(swiperContainer, -arrowclick * targetX, function() {
                flag = true;
            });
            circle--;
            if (circle == -1) {
                circle = imgs.length - 1;
            }
            for (let i = 0; i < imgs.length; i++) {
                dots[i].className = '';
            }
            dots[circle].className = 'dot-current';
        }
    })

    // 自动播放   
    //即 设置一个定时器 自动调用右侧箭头按钮: HTMLElememt.click()
    let timer = setInterval(function() {
        arrowRight.click();
    }, 5000);
    //轮播图


    //下载模块

    let downloadLinks = document.querySelector('.download-links'); //下载链接
    let downloadLinks_lis = downloadLinks.querySelectorAll('li');
    let downloadPicks = document.querySelector('.download-picks'); //下载选项
    let downloadPicks_lis = downloadPicks.querySelectorAll('li');
    //添加点击事件
    for (let i = 0; i < downloadPicks_lis.length; i++) {
        downloadPicks_lis[i].addEventListener('click', function() {
            for (let i = 0; i < downloadPicks_lis.length; i++) {
                downloadPicks_lis[i].className = '';
                downloadLinks_lis[i].style.display = 'none';
            }
            this.className = 'download-picks-current';
            downloadLinks_lis[i].style.display = 'block';
        })

    }
    //下载模块
})