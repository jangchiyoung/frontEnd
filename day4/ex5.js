let text;
function strMethod() {
    text = prompt('문자열을 입력해주세용');
    document.getElementById('len').innerHTML=text.length;
    document.getElementById('last').innerHTML=text.lastIndexOf('am');
}
function startNo() {
    let number = prompt('숫자를 입력해주세용');
    document.getElementById('subs').innerHTML=text.substring(number);
}
function endNo() {
    let number1 = prompt('숫자를 입력해주세용');
    document.getElementById('subs1').innerHTML=text.slice(number1);
}
