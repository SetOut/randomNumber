/*
 * @Description: this is my code,dont change it
 * @version:
 * @Author: CoCa-Cola
 * @Date: 2021-04-05 19:19:30
 * @LastEditors: CoCa-Cola
 * @LastEditTime: 2021-04-16 03:48:48
 */

/* ----------------------------------------------  利用随机数去执行相应任务    -- success  */
const AppsNumbers = 8;
const deviceHeight = device.height;
const deviceWidth = device.width;
const watchTime = 60 * 60 * 1000; //
const articleNumber = 20; // 文章数
const perNewsReadTime = 30; //文章阅读时长s

// randomMath(AppsNumbers);
randomMath(1);
function randomMath(Number) {
  var mathRan = Math.ceil(Math.random() * Number);
  switch (mathRan) {
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
  sleep(3000);
  var KsTime = new Date().getTime() + time;
  var KSrandom = 0;
  while (true) {
    KSrandom = KSrandom + 1;
    swipe(400, 1850, 400, 300, 600);
    sleep(8000);
    if (KSrandom == 3) {
      if (id("living_label").findOne()) {
        // 点赞数等于直播
        sleep(600);
        swipe(400, 1850, 400, 300, 600);
        KSrandom = 0;
      }
      sleep(600);
    //   click(950, 1700); // 点赞
      log(id('like_icon').findOne());
      sleep(1000);
      KSrandom = 0;
    }

    if (new Date(new Date().getTime()) >= new Date(KsTime)) {
      // console.log('开始时间',new Date(new Date().getTime()));
      // console.log('结束时间',new Date(KsTime));
      break;
    }
  }
  click(970, 450); // 开始做任务
  sleep(3000);
  for (var i = 1; i <= 10; i++) {
    // 查看广告获取收益
    sleep(1000);
    click(930, 1670);
    sleep(25000);
    // untilFind().waitFor()   等待控件出现
    if (id("video_countdown_end_icon").findOne()) {
      // 米读
      id("video_countdown_end_icon").findOne().click();
    } else if (id("video_close_icon").findOne()) {
      // 其他
      id("video_close_icon").findOne().click();
    }
  }
  sleep(600);
  swipe(400, 1800, 400, 200, 600);
  sleep(600);
  for (var l = 1; l <= 10; l++) {
    // 查看直播获取收益
    // if(l % 5 == 0){  // 5 10 点关注
    //     click(420,200);
    // }
    click(950, 1420);
    sleep(95000);
    click(1000, 180);
    sleep(1000);
    click(525, 1420);
  }
  home();
  randomMath(AppsNumbers);
}
// runKuaiShou('快手极速版',60 * 60 * 1000);

/* ----------------------------------------------  运行刷宝        --> 2个微信   -- success  */
function runShuaBao(name, time) {
  launchApp(name);
  sleep(3000);
  console.show(new Date(new Date().getTime() + time));
  var ShuNmber = 0;
  var jici = 0;
  while (true) {
    ShuNmber = ShuNmber + 1;
    swipe(400, 1750, 400, 300, 600);
    sleep(8000);
    // 滑动第十次并点赞
    if (ShuNmber == 10) {
      click(970, 1300);
      ShuNmber = 0;
    }
    if (id("layImg").untilFind().waitFor()) {
      // 答题广告出现
      id("imgClose").findOne().click();
    }
    // if(id('ll_content').findOne()){}
    id("iv_close").findOne().click(); // 直播控件关闭

    if (id("content").findOne().parent().waitFor()) {
      // 直播礼物控件
      // 发现广告观看
      id("ivClose").findOne().click();
      swipe(400, 1750, 400, 300, 600);
    }
    id("list")
      .findOne()
      .children()
      .forEach((child) => {
        // var target = child.findOne(id("textAd"));
        if (child.findOne(id("textAd"))) {
          sleep(15000);
          swipe(400, 1550, 400, 300, 600);
        }
      });
    jici = jici + 1;
    // toast('计次'+jici);
    if (jici == 500) {
      break;
    }
  }
  home();
  randomMath(AppsNumbers);
  // click();  // 点击任务 做其他多金币任务
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
