function deleteRow() {
    var checkBoxArr = []; 
    $("input:checkbox[name='checkdelete']:checked").each(function() {
    checkBoxArr.push($(this).val());     // 체크된 것만 값을 뽑아서 배열에 push
    console.log(checkBoxArr);
})
}