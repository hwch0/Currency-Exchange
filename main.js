//1. 박스 2개 만들기
//2. 드랍다운 리스트 만들기
//3. 환율정보 가져오기
//4. 드랍다운 리스테에서 아이템 선택하면 아이템이 바뀜.
//5. 금액을 입력하면 환전이 된다.
//6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨.
//7. 숫자를 한국어로 읽는 법
//8. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에서 환율이 적용된다.

// let 을 이용해서 변수를 선언
// 변수는 값을 담을 바구니다.
// currencyRation는 객체타입 변수 , 객체타입 변수는 담을 값이 여러개 일때 쓴다.

let currencyRatio ={
    USD:{
        KRW: 1184.36,
        USD: 1,
        VND: 22972.50,
        unit: "달러"
    },
    KRW:{
        KRW: 1,
        USD: 0.00084,
        VND: 19.40,
        unit: "원"
    },
    VND:{
        KRW: 0.052,
        USD: 0.000044,
        VND:1,
        unit: "동"
    }

};

// 위에서 정한 객체타입 변수 읽어오기

//console.log(currencyRatio.USD.unit);

//from-currency에 있는 a태그 요소를 가져온다.
//html에 있는 요소를 가져오는 함수 'document'

let fromCurrency = "USD"
let toCurrency = "USD"

//from-currency 변수 정의
document.querySelectorAll("#from-currency a").forEach((menu) =>
menu.addEventListener("click", function() {

    document.getElementById("from-bnt").textContent = this.textContent;

    //3. 선택된 currency 값을 변수에 저장해준다.
    fromCurrency = this.textContent;
    convertFrom();
    convertTo()
    console.log(currencyRatio[fromCurrency].unit)
    document.getElementById("from-text").textContent = currencyRatio[fromCurrency].unit;
    


}))

//to-currency 변수 정의

document.querySelectorAll("#to-currency a").forEach((menu) =>
menu.addEventListener("click", function() {
    document.getElementById("to-bnt").textContent = this.textContent;
    toCurrency = this.textContent;
    convertFrom();
    convertTo()
    //console.log(currencyRatio[toCurrency].unit)
    document.getElementById("to-text").textContent = currencyRatio[toCurrency].unit;
}))


function convertFrom(){
    //환전 프로세스
    //1. 환전할 돈 (html input값의 value를 가져온다.)
    //2. 환전할 돈 x 환율

    let fromAmount = document.getElementById("from-input").value;
    console.log(fromCurrency, toCurrency)
    let convertedAmount = fromAmount * currencyRatio[fromCurrency][toCurrency];
    console.log("환전 결과: ", convertedAmount);

    document.getElementById("to-input").value = convertedAmount

}

function convertTo() {
    let toAmount = document.getElementById("to-input").value;
    let convertedAmount_rev = toAmount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById("from-input").value = convertedAmount_rev
}