
    console .log(1);
    let table = document.querySelector("tbody");
     console.log(table);
    table.onclick = function (e) {
    	let element=e.target;
        if (element.nodeName="TD" && element.className == "zy_del") {
            let trs = element.parentNode.parentNode;
            console.log(trs);
            table.removeChild(trs);
        }
    }


