

function addTodo() {
    const todoText = document.getElementById('todo-input').value;   //입력받은 값을 '할 일 목록' 변수로 지정함
    if (todoText === '') return alert('Please enter a to-do');      //빈 체크리스트가 생기지 않도록 함

    const li = document.createElement('li');                        //체크 리스트에 추가할 항목 변수
    const checkbox = document.createElement('input');               //입력받은 값을 할 일 항목 요소로 해당 변수에 지정
    checkbox.type = 'checkbox';                                     //입력 요소를 체크박스로 설정
    
    const label = document.createElement('label');                  //체크박스와 텍스트를 연결할 라벨 요소 생성 
    label.textContent = todoText;                                   //체크박스와 텍스트 연결

    const editbtn = document.createElement('button');               //수정 버튼 생성
    editbtn.textContent = 'Edit';                                   //버튼명
    editbtn.onclick = function() {                                  //버튼 클릭 함수 : 
        const newTodoText = prompt('Edit', label.textContent);      //할 일 목록 수정 창
        if (newTodoText !== null) {                                 //빈 항목이 아니면 수정 실행
            label.textContent = newTodoText;
        }
    };

    const deletebtn = document.createElement('button');             //삭제 버튼 생성
    deletebtn.textContent = 'Del';                                  //버튼명 지정
    deletebtn.onclick = function() {                                //버튼 클릭 함수
        const todolist = document.getElementById('todo-list');      //삭제할 항목
        todolist.removeChild(li);                                   //리스트에서 해당 항목 삭제
        alert('Deleted');                                           //삭제 알림
    };

    li.appendChild(checkbox);                               //리스트 항목으로 체크박스 추가
    li.appendChild(label);                                  //(입력 받은 값) 라벨
    li.appendChild(editbtn);                                //수정항목 업로드
    li.appendChild(deletebtn);                              //삭제한 항목 제거
    document.getElementById('todo-list').appendChild(li);   //변경된 리스트 업데이트



    document.getElementById('todo-input').value = '';               // 입력 창 초기화
}