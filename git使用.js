// git 版本管理软件
/*
* 下载 github 网站上的代码
* 使用代码 git clone （网址）
*
* 使用 git status
*
* 使用 git branch -a 查看所有分支
    # 默认有了dev和master分支，所以会看到如下三个分支
    # master[本地主分支] origin/master[远程主分支] origin/dev[远程开发分支]
    # 新克隆下来的代码默认master和origin/master是关联的，也就是他们的代码保持同步
    # 但是origin/dev分支在本地没有任何的关联，所以我们无法在那里开发
*
* 创建本地关联origin/dev的分支
* git checkout dev origin/dev
*
* 创建本地分支dev，并且和远程origin/dev分支关联，
* 本地dev分支的初始代码和远程的dev分支代码一样
*
* 切换到dev分支进行开发
* git checkout dev
* # 这个是切换到dev分支，然后就是常规的开发
*
* 使用 git branch 查看本地分支
* 使用 git branch -r 查看远端分支
* 使用 git checkout ×× 来切换到另一个分支
*
* 从远端同步代码
* git pull origin master
*
* dir 查看文件
*
* vi ×× 来进行查看 ××文件
*
* 在工作之前需要看下有哪些文件被修改了使用
* git status
*
* 具体的修改使用
* git diff
*
* 确定修改之后使用
* git add ××
* 或者修改的文件太多了 使用
* git add -A
*
* 使用 git status 再来查看
*
* 这个时候 使用
* git commit -m '这里是注释'
* 或者直接使用
* git commit  进去在里面详细的注释带上名字时间啥的方便别人查看
* 使用 :wq 退出
*
* 确定修改之后
* 使用 git push origin master 将进行同步到远端
*
* */