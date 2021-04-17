/*
 * @Description: this is my code,dont change it
 * @version:
 * @Author: CoCa-Cola
 * @Date: 2021-04-05 19:19:30
 * @LastEditors: CoCa-Cola
 * @LastEditTime: 2021-04-17 02:29:11
 */

/**
 * TIPS:
 * 1 如果当前想查找控件未找到,状态是什么都没有的,这会导致下面的逻辑不执行
 */

/* ----------------------------------------------  利用随机数去执行相应任务    -- success  */
const AppsNumbers = 8;
const deviceHeight = device.height;  // 设备高度
const deviceWidth = device.width;   // 设备宽度
const swipeTime = 600;   // 滑动时间
const watchTime = 60 * 60 * 1000; //
const articleNumber = 20; // 文章数
const perNewsReadTime = 30; //文章阅读时长s


randomMath(2);
function randomMath(Number) {
  // var mathRan = Math.ceil(Math.random() * Number);
  switch (Number) {
    case 0:
      break;
    case 1:
      runKuaiShou("快手极速版", watchTime);
      break;
    case 2:
      runShuaBao("刷宝短视频", watchTime);
      break;
    case 3:
      runQuTouTiao("趣头条", watchTime);
      break;
    case 4:
      runDouYin("抖音极速版", watchTime);
      break;
    case 5:
      runTouDiao("今日头条极速版", watchTime);
      break;
    case 6:
      runFanQie("番茄免费小说", watchTime);
      break;
    case 7:
      runYueDu("QQ阅读", watchTime);
      break;
    case 8:
      runBaiDu("百度极速版", watchTime);
      break;
    default:
      break;
  }
}

/* ----------------------------------------------  运行快手极速版  --> 2个微信    -- success  */
function runKuaiShou(name, time) {
  launchApp(name);
  sleep(2000);
  var KsTime = new Date().getTime() + time;
  var KSrandom = 0;
  while(true){
      swipe(deviceWidth/2,deviceHeight-100,deviceWidth/2,deviceHeight-1600,swipeTime);
      sleep(7000);
      KSrandom = KSrandom + 1;
      if(KSrandom == 10){
          let liker = String(id('like_button').findOne().bounds());
          sleep(1600);
          KSrandom = 0;
      }
      if(new Date(new Date().getTime()) >= new Date(KsTime)){
        break;
      }
  }

  // 这种是以按照它的提取下标进行操作
  let rPcaket = String(id("circular_progress_bar").findOne().bounds());
  click(Number(rPcaket.slice(5, 8))+15, Number(rPcaket.slice(9, 13))+15);
  sleep(3000);
  
  for (var i = 1; i <= 10; i++) { // 查看广告获取收益
    sleep(1000);
    let KSAD_endIng =  className("android.widget.Button").text("明日再来").find();  // 代表广告全部播放完
    if(KSAD_endIng  != ''){
      toast('广告播放完毕');
      break;
    }
    let KSAD = className("android.widget.Button").text("福利").findOne();
    if (KSAD) {
      KSAD.click();
    }
    sleep(5000);
    let KSAD_close_icon = id("video_close_icon").findOne();
    if (KSAD_close_icon) { 
      KSAD_close_icon.click();
    }
  }

  for (var l = 1; l <= 10; l++) {// 查看直播获取收益
    sleep(1000);
    let live_end = className("android.widget.Button").text("已完成").find();
    if(live_end != ''){   // 当直播全部看完,直接跳出循环
      toast('直播播放完毕');
      break;
    }
    className("android.widget.Image").text("live_activity_download").findOne().click();
    sleep(95000); // 等待95秒
    let live_close = String(id("live_close_place_holder").findOne().bounds());
    click(Number(live_close.slice(5, 8))+35,Number(live_close.slice(9, 13))+35);
    sleep(1000);
  }
  home();
  randomMath(AppsNumbers);
}

/* ----------------------------------------------  运行刷宝        --> 2个微信   -- success     有BUG*/
function runShuaBao(name, time) {
  launchApp(name);
  sleep(3000);
  let SBAD = id("tt_splash_skip_btn").find();  // 首页跳过
  if(SBAD){
    SBAD.click(); 
  } 
  var SbTime = new Date().getTime() + time;
  var ShuNmber = 0;
  while (true) {
    ShuNmber = ShuNmber + 1;
    sleep(600);
    swipe(deviceWidth/2, deviceHeight-100, deviceWidth/2, deviceHeight-1700, swipeTime);
    sleep(8000);
    if (ShuNmber == 10) {// 滑动第十次点赞
      click(970, 1300);
      ShuNmber = 0;
    }
    // let liveb_btn =  id("btn_reward").text('立即打赏').findOne().click();
    toast('aaa');
    let layImg = id("layImg").find();  // 图文广告
    toast(111);
    let ll_content = id('ll_content').find();
    toast(222);
    let iv_close = id("iv_close").find();// 直播控件关闭
    toast(333);
    let content = id("content").find();// 直播礼物控件
    toast(444);
    if (layImg != '') { // 答题广告出现
      layImg.click();
    } else if(ll_content != ''){
      ll_content.click();
    } else if(iv_close != ''){
      iv_close.click();
    } else if (content != '') {  
      id("ivClose").findOne().click();
      swipe(400, 1750, 400, 300, 600);
    }
    toast("bbb");
    // id("list")
    //   .findOne()
    //   .children()
    //   .forEach((child) => {
    // var target = child.findOne(id("textAd"));
    //     if (child.findOne(id("textAd"))) {
    //       sleep(15000);
    //       swipe(400, 1550, 400, 300, 600);
    //     }
    //   });
    // toast("ccc");
    if(new Date(new Date().getTime()) >= new Date(SbTime)){
      break;
    }
  }
  toast(111);
  log(222);
  let SBRW = id("ll_tap").text("任务").findOne();
  let getBound = String(SBRW.bounds());   
  let BoundA =  getBound.split(',');   // BoundA --> RECT(x1, y1-x2, y2)
  let BoundB =  BoundA[1].split('-');  // 由于任务没有点击事件  故获取任务坐标
  click(Number(BoundB[1])+10,Number(BoundB[0])+10); // 点击任务 做其他多金币任务
  sleep(600);
  id("imgClose").findOne().click();  // 点击关闭出现的控件
  sleep(5000);
  
  RWAD();
  function RWAD(){
    let lq = className('android.widget.Button').text('领取').findOne();
    if(lq){
      toast('广告');
      lq.click();
      sleep(30000);
      let tvAdBound = String(id("tt_video_ad_close").findOne().bounds());
      // let tvBound = String(tvAdBound.bounds());
      let tvBoundA = tvAdBound.split(',');
      log(typeof(tvBoundA));
      let tvBoundB = tvBoundA.split('-');
      log(typeof(tvBoundB));
      let tvBoundC = String(tvBoundB);
      click(Number(tvBoundC[1])+10,Number(tvBoundC[0])+10);
      log(tvBoundB[1]);
      log(tvBoundB[0]);
    }
  }
  
  SBFL();  
  setInterval(SBFL(),1000*60*10);// 每隔10分钟执行一次
  function SBFL(){
    let YB = className('android.view.View').text('开箱领元宝').findOne();
    log('YB'+ YB);
    if(YB) { 
      toast('箱子');
      YB.click();
      sleep(600);
      id("tv_play_game").text('翻倍奖励').findOne().click();  // 点击翻倍
      sleep(30000); // 等候30秒
      id("tt_video_ad_close").findOne().click();  // 点击关闭
    }
  }
   
  
  // home();
  // randomMath(AppsNumbers);
}

/* ----------------------------------------------  运行趣头条      --> 2个微信     */
function runQuTouTiao(name, time) {
  launchApp(name);
  sleep(2000);
  click(900, 180);
  sleep(600);
  let qttTime = new Date(new Date().getTime() + time);
  click(320, 2235); // 看视频
  sleep(600);
  while (true) {
    sleep(600);
    swipe(400, 1800, 400, 300, 600);
    sleep(600);
    click(510, 350); // 播放第一个视频
    toast("111");
    sleep(6000);
    if (new Date().getTime() >= qttTime / 2) {
      break;
    }
  }

  className("android.widget.ImageView")
    .selected(true)
    .findOne()
    .parent()
    .parent()
    .click(); // 小视频
  while (true) {
    sleep(600);
    swipe(400, 1850, 400, 300, 600);
    toast(222);
    sleep(6000);
    if (new Date().getTime() >= qttTime / 2) {
      break;
    }
  }
  click(770, 2250); // 点击任务
  taskThread();
  function taskThread() {
    var list = id("bdu").findOne();
    for (var i = 0; i < list.childCount() - 1; i++) {
      let child1 = list.child(1);
      var list1 = [];
      for (var key in child1) {
        list1.push(key);
        // toast(typeof(list1));
      }
      // console.error('这是'+i,child1);
      log(list1);
      list1.push("index");
      list1.index = 1;
      console.log(list1.index);
      // toast(child.findOne());
      // className(child).findOne().click();
      // log(child.className());
    }
    //   for (let i = 0; i <=2; i++) {}
    // className('android.widget.RelativeLayout').findOne().children().forEach(child => { });
  }
  //   home();
  //   randomMath(AppsNumbers);
}
// runQuTouTiao('趣头条',60*60+1000);

/* ----------------------------------------------  运行抖音极速版  --> 1个微信    success  */
function runDouYin(name, time) {
  launchApp(name);
  sleep(3000);
  var DyTime = new Date().getTime() + time;
  while (true) {
    sleep(1000);
    swipe(400, 1700, 400, 300, 600);
    sleep(6000);
    if (new Date(new Date().getTime()) >= new Date(DyTime)) {
      break;
    }
  }

  click();
  watchFirshAD();
  //看广告
  function watchFirshAD() {
    click(590, 750);
    sleep(25000);
    click(); // 点击关闭
  }
  setInterval(watchFirshAD(), 1000 * 60 * 20);
  watchItem();
  // 逛商品
  function watchItem() {
    watchBook();
  }

  // 看小说
  function watchBook() {
    swipe(400, 1300, 400, 150, 600);
    click(); // 找到小说入口
    sleep(600);
    click(100, 655);
    sleep(600);
    for (var i = 0; i <= 150; i++) {
      sleep(1000);
      click(930, 1990);
      sleep(2000);
    }
    back(); // 退出
    sleep(600);
    home();
    randomMath(AppsNumbers);
  }
}

/* ----------------------------------------------  运行头条极速版  --> 1个微信   -- success  */
function runTouDiao(name, time) {
  launchApp(name);
  sleep(3000);
  futrueTime = new Date().getTime() + time;
  click(319, 2255); // 点击视频功能
  while (true) {
    sleep(1000); // 停止一秒在滑动
    swipe(400, 950, 400, 400, 600);
    sleep(600);
    click(580, 430); // 选择第一个视频播放
    sleep(30000);
    if (new Date(new Date().getTime()) >= new Date(futrueTime)) {
      break;
    }
  }
  // 逛商品得金币
  sleep(1000);
  click(110, 190);
  sleep(2000);
  swipe(400, 2200, 400, 250, 1000);
  sleep(600);
  swipe(400, 2200, 400, 250, 1000);
  sleep(600);
  swipe(400, 800, 400, 250, 1000);
  sleep(600);
  // TTItem();  // 头条浏览商品
  TTXShuo(); // 头条看小说
}
// 不执行
function TTItem() {
  var round = 1;
  round++;
  click(); // 商品位置
  for (var i = 0; i <= 4; i++) {
    sleep(2500);
    swipe(400, 800, 400, 500, 600);
    sleep(2500);
  }
  back();
  TTItem();
  if (round == 3) {
    return true;
  }
}
function TTXShuo() {
  click(870, 1730);
  sleep(2000);
  click(200, 1160); // 选择第一篇小说
  for (var i = 0; i <= 300; i++) {
    sleep(1000);
    click(930, 1990);
    sleep(2000);
  }
  if (id("novel_coin_exciting_ad_btn").untilFind().waitFor()) {
    id("novel_coin_exciting_ad_btn").findOne().click();
    sleep(13000);
    className("android.view.View")
      .desc("关闭")
      .findOne()
      .scrollForward()
      .click();
  }
  back(); // 退出
  sleep(600);
  home();
  randomMath(AppsNumbers);
}
// runTouDiao('今日头条极速版',60*60+1000);
/* ----------------------------------------------  运行番茄小说    --> 1个微信     */
function runFanQie(name, time) {
  launchApp(name);
  sleep(3000);
  console.warn(new Date(new Date().getTime() + time));

  home();
  randomMath(AppsNumbers);
}

/* ----------------------------------------------  运行QQ阅读    -->  1QQ   -- success  */
function runYueDu(name, time) {
  launchApp(name);
  sleep(3000);
  click(920, 160); // 首页关闭等待页
  sleep(600);
  // // className('android.widget.TextView').text('跳过').findOne().click();
  var futrueTime = new Date().getTime() + time;
  click(150, 800); // 第一本书
  sleep(600);
  while (true) {
    sleep(1000);
    click(900, 2000);
    sleep(2000);
    if (new Date(new Date().getTime()) >= new Date(futrueTime)) {
      back();
      break;
    }
  }
  sleep(600);
  click(530, 2230); //  1 领取福利
  sleep(600);
  swipe(300, 300, 300, 230, 600);
  for (var i = 0; i <= 20; i++) {
    // 获取20个广告收入
    sleep(600);
    click(850, 1900);
    sleep(30000); // 查看广告
    if (id("tt_video_ad_close_layout").findOne()) {
      // 等待关闭控件出现
      id("tt_video_ad_close_layout").findOne().click();
    } else if (id("tt_video_ad_close").untilFind().waitFor()) {
      id("tt_video_ad_close").findOne().click();
    } else {
      id("tt_video_ad_close").untilFind().waitFor().click();
    }
    className("android.widget.ImageView").findOne().click(); // 关闭广告
    sleep(2000);
  }
  home();
  randomMath(AppsNumbers);
}
/* ----------------------------------------------  运行百度极速版    -->  1QQ   --   */
function runBaiDu(name, time) {
  launchApp(name);
  var biaduTime = new Date().getTime() + time;
  click(700, 2280); // 做任务
  sleep(600);
  while (true) {
    sleep(1000);
    click();
    sleep(2000);
    if (new Date().getTime() <= biaduTime) {
      break;
    }
  }
  home();
  randomMath(AppsNumbers);
}

// ----------------------------------------------
// function runVideo(){
//     sleep(600);
//     var isSwipe = swipe(400,1650,400,400,1000);
//     click(1,1);
//     sleep(10000);
//     var isShow = Number(isSwipe);
//     isShow = isShow + 1;
//     toast(isShow);
//     if(isShow == 10) {
//         click(970,1320);
//         isShow = 1;
//     }
// }
// var  isRun = 0;
// while(isRun ++){
//     // runVideo();
//     // setTimeout(runVideo(),10000);
//     if(isRun == 120){
//        break;
//     }
// }
// 可行

// function runText(){
// click(330,570);
// var i = 0;
// while(i++){
//     swipe(400,1300,400,350,600);
//     sleep(2000);
//     if(i <= 4){
//         back();
//         break;
//     }
// }
// swipe(400,1100,400,350,600);
// }
