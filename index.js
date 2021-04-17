/*
 * @Description: this is my code,dont change it
 * @version: 
 * @Author: CoCa-Cola
 * @Date: 2021-04-05 19:05:40
 * @LastEditors: CoCa-Cola
 * @LastEditTime: 2021-04-09 18:18:15
 */

toast('运行成功');
sleep(1000);
swipe(400,1400,400,537,1000);
click(470,735);
// splitScreen();  分屏
sleep(1000);
setClip('我要复制内容');
toast("剪贴板内容为:" + getClip());
// home();   
// Power();
// sleep(500);
 // ok(); 
// launchApp('豆豆趣玩');