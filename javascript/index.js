function search() {
    var searchValue = document.getElementById("searchId");
    if(searchValue != null) {
        searchValue = searchValue.value;
    }
    if(searchValue == "") {
        alert("Không tìm thấy sản phẩm");
        return;
    }
        
    var count = 0;
    var possibleValue = document.getElementsByName("val");
    for(var i = 0; i < possibleValue.length; i++) {
        if(possibleValue[i].innerHTML.indexOf(searchValue) >= 0) {
            
            possibleValue[i].parentElement.scrollIntoView(false);
            possibleValue[i].parentElement.parentElement.style.border = "solid 2px red";
            count++;
        }
    }
    alert(`Tìm thấy ${count} sản phẩm`);
    setTimeout(function() {
        for(var i = 0; i < possibleValue.length; i++) {
            possibleValue[i].parentElement.parentElement.style.border = "none";
        }
    }, 5000);
}