function addRow(grade) {
    
    let i = 0;
    let sum = 0;
    let list = {};
  
    
    list.esu = prompt("[전공/교양]만 입력해주세요");
    while(true)
    if(list.esu == "전공" || list.esu =="교양"){
      break;
    } else{
      list.esu = prompt("[전공/교양]만 입력해주세요");
    }
    
    list.pilsu = prompt("[필수/선택]만 입력해주세요");
    while(true)
    if(list.pilsu == "필수" || list.pilsu =="선택"){
      break;
    } else{
      list.pilsu = prompt("[필수/선택]만 입력해주세요");
    }
    
    list.subject = prompt("과목명");

    list.hak = prompt("학점(1,2,3만 입력해주세요)");
    while(true)
    if(list.hak == "1" || list.hak =="2" || list.hak =="3"){
      break;
    } else{
      list.hak = prompt("학점(1,2,3만 입력해주세요)");
    }
    
    list.attend = prompt("출석점수(숫자만 입력해주세요)");
    while(true)
    if(isNaN(list.attend)){
      list.attend = prompt("출석점수(숫자만 입력해주세요)");
    } else{
      break;
    }

    list.homework = prompt("과제점수(숫자만 입력해주세요");
    while(true)
    if(isNaN(list.homework)){
      list.homework = prompt("과제점수(숫자만 입력해주세요)");
    } else{
      break;
    }

    list.mid = prompt("중간고사(숫자만 입력해주세요)");
    while(true)
    if(isNaN(list.mid)){
      list.mid = prompt("중간고사(숫자만 입력해주세요)");
    } else{
      break;
    }

    list.final = prompt("기말고사 ");
    while(true)
    if(isNaN(list.final)){
      list.final = prompt("출석점수(숫자만 입력해주세요)");
    } else{
      break;
    }

    sum_grade = document.getElementById(`sum${grade}`);
    sum_grade.remove();
    const table_body = document.getElementById(`grade${grade}`);
    const newRow = table_body.insertRow();
    const newCell = [];
    for (i = 0; i < 12; i++) {
      newCell[i] = newRow.insertCell();
    }
    for (i = 0; i < Object.values(list).length; i++) {
      newCell[i].appendChild(document.createTextNode(Object.values(list)[i]));
      if (i >= 4) sum += Number(Object.values(list)[i]);  //학점부터 계산
    }
    if (sum != 0) {
      newCell[8].appendChild(document.createTextNode(sum));
      if (sum >= 95) {
        newCell[10].appendChild(document.createTextNode("A+"));
      } else if (sum >= 90) {
        newCell[10].appendChild(document.createTextNode("A0"));
      } else if (sum >= 85) {
        newCell[10].appendChild(document.createTextNode("B+"));
      } else if (sum >= 80) {
        newCell[10].appendChild(document.createTextNode("B0"));
      } else if (sum >= 75) {
        newCell[10].appendChild(document.createTextNode("C+"));
      } else if (sum >= 70) {
        newCell[10].appendChild(document.createTextNode("C0"));
      } else if (sum >= 65) {
        newCell[10].appendChild(document.createTextNode("D+"));
      } else if (sum >= 60) {
        newCell[10].appendChild(document.createTextNode("D0"));
      } else {
        newCell[10].appendChild(document.createTextNode("F"));
        newCell[10].style.color = "red";
      }
    } else {
      newCell[10].appendChild(document.createTextNode("P"));
    }
    const sumRow = table_body.insertRow();  //합계
    sumRow.id = `sum${grade}`;
    const sumCell = [];
    for (i = 0; i < 10; i++) {
      sumCell[i] = sumRow.insertCell();
      if (i == 0) {
        sumCell[i].colSpan = 3;
        sumCell[i].appendChild(document.createTextNode("합계"));
      }
    }
  }