/**
 * Created by admin on 2019/10/20.
 */
function goPage(pno,psize){
    var list=document.getElementsByClassName("list")[0];
    var num1=list.childNodes.length;
    var listSon=new Array();
    for(var i=0;i<num1;i++){
        if(list.childNodes[i].nodeType==1){
            listSon.push(list.childNodes[i]);
        }
    }
    var num=listSon.length;//表格所有行数(所有记录数)
    var pageSize=psize;//每页显示行数
    var totalPage=0;//总页数
    //总共分几页
    if(num/pageSize>parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
    }else{
        totalPage=parseInt(num/pageSize);
    }
    var currentPage=pno;//当前页数
    var startRow=(currentPage-1)*pageSize+1;//开始显示的行,比如31行
    var endRow=currentPage*pageSize;//结束显示的行,比如40
    endRow=(endRow>num)?num:endRow;
    for(var j=0;j<num;j++){
        var jrow=listSon[j];//当前行
        document.getElementsByClassName("style")[j].innerHTML=j;
        if(j>=startRow && j<=endRow){
            jrow.style.display="block";
        }else{
            jrow.style.display="none";
        }
    }
    var tempStr="共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页";
    if(currentPage>1){
        tempStr+="<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">首页</a>";
        tempStr+="<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><上一页</a>";
    }else{
        tempStr+="首页";
        tempStr+="<上一页";
    }
    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">下一页></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">尾页</a>";
    }else{
        tempStr += "下一页>";
        tempStr += "尾页";
    }
    document.getElementById("barcon").innerHTML=tempStr;
}

