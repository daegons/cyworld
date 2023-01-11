//     로직

// 1. 단어를 입력하고 버튼을 누르면
//     onclick
// 2. input태그의 값을 읽는다.
//     document.getElementById("word").value
// 3. 제시어의 끝 글자와 입력값의 첫 글자를 비교
//     제시어의 끝 글자를 변수에 할당
//     입력값의 첫 글자를 변수에 할당
//     비교/ 조건문을 사용
// 4. 제시어의 끝 글자와 입력값의 첫 글자가 같으면 결과란에
//    "정답입니다!"를 표시하고, 제시어를 입력값으로 변경한다.
// 5. 제시어의 끝 글자와 입력값의 첫 글자가 다르면 결과란에 "땡!"을 표시하고,
//    제시어는 변경하지 않는다. 
//-----------------------------------------------------------------------------------------

const startWord = () => {
    let myWord = document.getElementById("myword").value
    //input 창에 있는 값(value)을 가져와서 변수에 할당//
    let word = document.getElementById("word").innerText
    //제시어에 있는 span태그 정보(아파트=innerText)를 가져와서 변수에 할당//

    let lastWord = word[word.length - 1]
    //제시어 막 글자 가져오는 방법.index이용하고 변수에 담기//
    let firstWord = myWord[0]
    //input 창에 있는 0번째 값

    if (firstWord === lastWord) {
    //정답일때
        document.getElementById("result").innerText = "Success"
        //result 창에다가 success를 재할당//
        document.getElementById("word").innerText = myWord
        //그리고 제시어(word)를 myword:입력값을 제시어로 바꿔줌//
        document.getElementById("myword").value = ""
        //input창에 값을 빈 문자열로 바꿔줌//
    } else {
    //오답일때
        document.getElementById("result").innerText = "낄낄낄 틀렸네"
        document.getElementById("myword").value = ""
        //input창에 값을 빈 문자열로 바꿔줌//    
    }
}
