# 清文 | Teksto

An almost pure text hexo theme.

![shortcut](https://kleist-blog.oss-cn-beijing.aliyuncs.com/BlogPic/shortcut-2020-08-23.png)

目前支持跟随系统切换暗黑模式，但由于 Windows 系统无法像 macOS 一样自动切换，所以如果需要在 Windows 实现随日出日落进行模式切换需要稍微做点手脚：

> 使用 Windows 自带的任务计划工具：
> 1. 打开任务计划工具(可以在控制面板中找到也可以搜索得到)
> 2. 右上角 - 创建基本任务 - 名称随意/描述随意 - 下一步
> 3. 触发器: 填上需要切换黑暗模式的时间,我填的是每天 18:00
> 4. 操作: 程序或脚本一栏填上 `reg.exe`,在参数一栏填上 `add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 0 /f`, 即每天 18:00 自动将 win 主题切换为深色模式
> 5. 同样的操作, 这次需要是在早上将 win 主题深色模式改回浅色模式, 只需要将触发器的时间改为早上任意时间(我填的 7:30)即可, 另外在操作中将参数改为 `add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 1 /f`