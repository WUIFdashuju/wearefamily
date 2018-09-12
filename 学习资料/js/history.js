window.onload=function () {
    console.log(1);
    let tabel=document.querySelector(".jzx_content tbody");
    console.log(tabel);
    //修改
    //事件委派
    tabel.onclick=function (e) {
        let element=e.target; //获取当前元素
        if(element.nodeName=="TD"&&element.className!="del"){
            let oldv=element.innerHTML;//保存当前值
            // element.innerHTML="";//清空
            let inputs=document.createElement("input");//创建input
            inputs.value=oldv;//value
            element.appendChild(inputs);//插入input
            inputs.onblur=function () {  //失去焦点
                let newv=this.value;
                element.removeChild(inputs);//移除input
                element.innerHTML=newv;//保存新的值
            }
        }else if(element.nodeName="D" && element.className=="jzx_del"){
            let trs=element.parentNode.parentNode;//寻找父元素tr
            tabel.removeChild(trs);//从tbody中删除一条tr内容
            // console.log(trs);
        }
    }

}