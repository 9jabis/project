function create(grade) {
    const len = document
      .getElementById(`grade${grade}`)
      .getElementsByTagName("tr").length;
    var i = 0;
    var sum = 0;
    var list = {};
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
    const hTbody = document.getElementById(`grade${grade}`);
    const newRow = hTbody.insertRow();
    newRow.className = `grade${grade}_check${len}`;
    const newCell = [];
    for (i = 0; i < 12; i++) {
      newCell[i] = newRow.insertCell();
    }
    for (i = 0; i < Object.values(list).length; i++) {
      newCell[i].appendChild(document.createTextNode(Object.values(list)[i]));
      if (i >= 4) sum += Number(Object.values(list)[i]);
    }
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.id = `grade${grade}_check${len}`;
    newCell[11].appendChild(check);
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


    const sumRow = hTbody.insertRow(); //이부분은 save로
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
  
  function del(grade) {
    // sum_grade = document.getElementById(`sum${grade}`);
    // sum_grade.remove();
    var i = 0;
  
    var checkbox = document.getElementsByTagName("input");
    for (i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        console.log(checkbox[i].id);
        var del = document.getElementsByClassName(checkbox[i].id)[0];
        del.remove();
      }
    }
  }
  
  function save(grade) {
    sum_grade = document.getElementById(`sum${grade}`);
    sum_grade.remove();
  
    let [result, cnt, i, j, k, sum_hak, sum_attend, sum_homework, sum_mid, sum_final] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let sum_list = [sum_hak, sum_attend, sum_homework, sum_mid, sum_final];
  
    for (
      j = 0;
      j <
      document.getElementById(`grade${grade}`).getElementsByTagName("tr").length;
      j++
    ) {
      for (k = 3; k < 11; k++) {
        if (k < 8) {
          result = 0;
          result = Number(
            document
              .getElementById(`grade${grade}`)
              .getElementsByTagName("tr")
              [j].getElementsByTagName("td")[k].innerHTML
          );
          sum_list[k - 3] += result;
        } else if (k == 10) {
          result = document
            .getElementById(`grade${grade}`)
            .getElementsByTagName("tr")
            [j].getElementsByTagName("td")[k].innerHTML;
          // 비지 않으면 count인데  0점도 고려
          if (result != "P") cnt += 1;
          // cnt += 1; // 패논패가 아님에도 모든 점수가  0점일떄도 count하게 되지만 그런 입력은 없다고 가정
        }
      }
    }
  
    const table_body = document.getElementById(`grade${grade}`);
    const sumRow = table_body.insertRow(); //이부분은 save로
    sumRow.id = `sum${grade}`;
    const sumCell = [];
    for (i = 0; i < 10; i++) {
      sumCell[i] = sumRow.insertCell();
      if (i == 0) {
        sumCell[i].colSpan = 3;
        sumCell[i].appendChild(document.createTextNode("합계"));
      } else if (0 <= i && i < 6) {
        sumCell[i].appendChild(document.createTextNode(sum_list[i - 1]));
      } else if (i == 6) {
        //총점
        var sum_sum_list = sum_list;
        sum_sum_list.shift();
        sum_sum_list = sum_sum_list.reduce((add, currValue) => {
          return add + currValue;
        }, 0);
        sumCell[i].appendChild(document.createTextNode(sum_sum_list));
      } else if (i == 7) {
        //평균
        sumCell[i].appendChild(
          document.createTextNode(Math.round(sum_sum_list / cnt))
        );
      } else if (i == 8) {
        //성적
        if (Math.round(sum_sum_list / cnt) >= 95) {
          sumCell[i].appendChild(document.createTextNode("A+"));
        } else if (Math.round(sum_sum_list / cnt) >= 90) {
          sumCell[i].appendChild(document.createTextNode("A0"));
        } else if (Math.round(sum_sum_list / cnt) >= 85) {
          sumCell[i].appendChild(document.createTextNode("B+"));
        } else if (Math.round(sum_sum_list / cnt) >= 80) {
          sumCell[i].appendChild(document.createTextNode("B0"));
        } else if (Math.round(sum_sum_list / cnt) >= 75) {
          sumCell[i].appendChild(document.createTextNode("C+"));
        } else if (Math.round(sum_sum_list / cnt) >= 70) {
          sumCell[i].appendChild(document.createTextNode("C0"));
        } else if (Math.round(sum_sum_list / cnt) >= 65) {
          sumCell[i].appendChild(document.createTextNode("D+"));
        } else if (Math.round(sum_sum_list / cnt) >= 60) {
          sumCell[i].appendChild(document.createTextNode("D0"));
        } else {
          sumCell[i].appendChild(document.createTextNode("F"));
          sumCell[i].style.color = "red";
        }
      }
    }
  }