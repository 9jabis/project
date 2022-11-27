function addRow(grade) {
  
  var i = 0;
  var sum = 0;
  var list = {};  //리스트를 만들어 prompt의 입력을 넣는다.
  const len = document.getElementById(`grade${grade}`).getElementsByTagName("tr").length;

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
  newRow.className = `grade${grade}_checked${len}`;
  const newCell = [];

  for (i = 0; i < 12; i++) {
    newCell[i] = newRow.insertCell();
  }
  for (i = 0; i < Object.values(list).length; i++) {
    newCell[i].appendChild(document.createTextNode(Object.values(list)[i]));
    if (i >= 4) sum += Number(Object.values(list)[i]);
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

    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.id = `grade${grade}_checked${len}`;
    newCell[11].appendChild(check);

    const resultRow = table_body.insertRow();
    resultRow.id = `sum${grade}`;
    const resultCell = [];
    for (i = 0; i < 10; i++) {
      resultCell[i] = resultRow.insertCell();
      if (i == 0) {
      resultCell[i].colSpan = 3;
      resultCell[i].appendChild(document.createTextNode("합계"));
    }
  }
}

 function deleteRow(grade) {
var checkbox = document.getElementsByTagName("input");
for (let i = 0; i < checkbox.length; i++) {
  if (checkbox[i].checked == true) {
    checkbox[i].parentElement.parentElement.remove();
  }
}

}

function saveRow(grade) {
  sum_grade = document.getElementById(`sum${grade}`);
  sum_grade.remove();

  let [result, count, i, j, k, sum_hak, sum_attend, sum_homework, sum_mid, sum_final] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let sum_list = [sum_hak, sum_attend, sum_homework, sum_mid, sum_final];

  for (j = 0; j < document.getElementById(`grade${grade}`).getElementsByTagName("tr").length;  j++) {
    for (k = 3; k < 11; k++) {
      if (k < 8) {
        result = 0;
        result = Number(
          document.getElementById(`grade${grade}`).getElementsByTagName("tr")[j].getElementsByTagName("td")[k].innerHTML
        );
        sum_list[k - 3] += result;
      } else if (k == 10) {
        result = document.getElementById(`grade${grade}`).getElementsByTagName("tr")[j].getElementsByTagName("td")[k].innerHTML;
        if (result != "P") count += 1;
      }
    }
  }

  const table_body = document.getElementById(`grade${grade}`);
  const resultRow = table_body.insertRow();
  resultRow.id = `sum${grade}`;
  const resultCell = [];
  for (i = 0; i < 10; i++) {
    resultCell[i] = resultRow.insertCell();
    if (i == 0) {
      resultCell[i].colSpan = 3;
      resultCell[i].appendChild(document.createTextNode("합계"));
    } else if (0 <= i && i < 6) {
      resultCell[i].appendChild(document.createTextNode(sum_list[i - 1]));
    } else if (i == 6) {
      var final_sum = sum_list;
      final_sum.shift(); //맨 앞 값 제거
      final_sum = final_sum.reduce((plus, now_Value) => {  //누적값 계산
        return plus + now_Value;
      }, 0);
      resultCell[i].appendChild(document.createTextNode(final_sum));
    } else if (i == 7) {
      resultCell[i].appendChild(document.createTextNode(Math.round(final_sum / count)));
    } else if (i == 8) {
      if (Math.round(final_sum / count) >= 95) {
        resultCell[i].appendChild(document.createTextNode("A+"));
      } else if (Math.round(final_sum / count) >= 90) {
        resultCell[i].appendChild(document.createTextNode("A0"));
      } else if (Math.round(final_sum / count) >= 85) {
        resultCell[i].appendChild(document.createTextNode("B+"));
      } else if (Math.round(final_sum / count) >= 80) {
        resultCell[i].appendChild(document.createTextNode("B0"));
      } else if (Math.round(final_sum / count) >= 75) {
        resultCell[i].appendChild(document.createTextNode("C+"));
      } else if (Math.round(final_sum / count) >= 70) {
        resultCell[i].appendChild(document.createTextNode("C0"));
      } else if (Math.round(final_sum / count) >= 65) {
        resultCell[i].appendChild(document.createTextNode("D+"));
      } else if (Math.round(final_sum / count) >= 60) {
        resultCell[i].appendChild(document.createTextNode("D0"));
      } else {
        resultCell[i].appendChild(document.createTextNode("F"));
        resultCell[i].style.color = "red";
      }
    }
  }


}