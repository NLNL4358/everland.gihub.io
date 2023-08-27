$(document).ready(function(e){
  /* 변수 */
  let calenderButton = document.querySelectorAll(".calender_button");
  let ticketGraph = document.querySelectorAll(".ticket_graph.multi");

  
  /* 이벤트 */
  for(let i = 0 ; i < calenderButton.length ; i++){
    calenderButton[i].addEventListener("click", function(e){
      ticketButtonSelectFunc(i);
    })
  }

  /* 함수 */
  function ticketButtonSelectFunc(index){
    for(let i = 0 ; i < calenderButton.length ; i++){
      calenderButton[i].classList.remove("selected");
      ticketGraph[i].classList.remove("selected");
    }

    calenderButton[index].classList.add("selected");
    ticketGraph[index].classList.add("selected");
  }

  /* 초기화 */
})