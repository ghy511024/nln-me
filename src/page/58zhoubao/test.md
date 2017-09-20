#项目
1： 室厅卫 bug 修复排查
http://iwork3.58corp.com/issue/detail/fdd-273?selectiongroup=xuqiuxiangqing

出现bug 原因（比较隐秘）：

~~~js
     var array=[];
     for (var i = 0; i < editdata.length; i++) {
            switch (editdata[i].paraname) {                
                   case "huxingshi"://室
                         arr.push (editdata[i].value + '室');           
                          break;
                   case "huxingting"://厅                                   
                          arr.push (editdata[i].value + '厅');          
                          break;
                    case "huxingwei"://卫
                          arr.push (editdata[i].value + '卫');           
                           break;
            }
        }
       var strArr = arr.join ("");
       $ (".item-text-huxing").html(strArr)// 赋值
~~~
bug 原因：室厅卫 的顺序，依赖editdata 数组中这三个对象的顺序，新赠和草稿，这个顺序不会有问题，因为是按照input 标签顺序来获取，和存草稿，
但是编辑帖子的时候，这个数据是后端输出到页面中的一个数组变量中，这个数组变量中的顺序，是室，卫，厅的顺序。所以编辑帖子，必现标题变为室卫厅。

进度：已经修复，提测中

2: 磐石房号关联
- http://iwork3.58corp.com/issue/detail/fdd-235?selectiongroup=xuqiuxiangqing

- 进度：前端提测中。（后端数据，还在调整，只有部分地方能测。先测前端交互部分）

- 功能：关联房号功能，现在是一个可以跨项目使用的组件，可以通过require 的形式引入组件，调用方式与 h5 通过协议调用原生组件一样。主要解决传统开发模式（非vue,react）弹窗类的通用组件复用问题（如何将css,html，js 打包为一个js）

#下周任务

1： app 端上传图片加水印，native 改了组件，配合native 测试

2： 磐石房号关联，等功能上线

3：jenkins 测试机器搭建

#学习

1：gitlab ci 集成化部署方案调研

结果方案行不通，gitlab 需要版本号8.0以上才支持gitlab runner,目前58 gitlab 版本是7.1.3 




