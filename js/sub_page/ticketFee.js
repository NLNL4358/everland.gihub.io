$(document).ready(function(e){
  /* 변수 */
  let calenderButton = document.querySelectorAll(".calender_button");
  let ticketGraph = document.querySelectorAll(".ticket_graph.multi");

  let modalPage = document.querySelectorAll(".modalPage");

  
  /* 이벤트 */
  for(let i = 0 ; i < calenderButton.length ; i++){
    calenderButton[i].addEventListener("click", function(e){
      ticketButtonSelectFunc(i);
    })
  }

  $(document).click(function(event){  /* 클릭이벤트 */

    console.log(event.target);
  
    /* 모달X버튼이나 외부를 클릭하면 끄기 호출 */
    if($(event.target).hasClass("modal_close") || $(event.target).hasClass("modal_wrap")){
      modalClose();
    }

    else if($(event.target).hasClass("calender_open_button")){
      /* ABCD 캘린더 오픈 */
      $(".ABCDCalender").addClass("opened");
    }

    else if($(event.target).hasClass("preferential_treatment Disabled")){
      /* 장애인 우대 내용 오픈 */
      $(".price_for_disabled").addClass("opened");
    }

    else if($(event.target).hasClass("preferential_treatment national_merit")){
      /* 국가유공자 우대가 내용 오픈 */
      $(".price_for_national_merit").addClass("opened");
    }

    else if($(event.target).hasClass("proof_documents")){
      /* 국가유공자 적용대상 / 증명서류 오픈 */
      $(".application_of_merit").addClass("opened");
    }

    else if($(event.target).hasClass("preferential_price multiple_children")){
      /* 다자녀 가정 우대가 내용 오픈 */
      $(".price_for_multiple_children").addClass("opened");
    }

    else if($(event.target).hasClass("preferential_price pregnant_woman")){
      /* 임산부 우대가 내용 오픈 */
      $(".price_for_pregnant_women").addClass("opened");
    }
  })


  /* 함수 */
  function ticketButtonSelectFunc(index){
    for(let i = 0 ; i < calenderButton.length ; i++){
      calenderButton[i].classList.remove("selected");
      ticketGraph[i].classList.remove("selected");
    }

    calenderButton[index].classList.add("selected");
    ticketGraph[index].classList.add("selected");
  }



  function modalClose(){ /* 모달창 끄기 */
    modalPage.forEach(element => {
      element.classList.remove("opened");
    });
  }

  /* 초기화 */
})