function method(){
    let num1 = document.getElementById('num1').value
    let nopunctuation = num1.replace(/[.,\/@#!$%\^&\*;:{}=\-_`~()1234567890]/g,"");//去除標點符號及數字
    let sentences  = String(nopunctuation).toLowerCase();//全部小寫
    let arr = []
    for(let i=0;i<sentences.length;i++){
        arr.push(sentences[i])
    }
    let obj = {};
    for(let s of arr){
        if(!obj[s]){
            obj[s] = 1
        }else {
            obj[s] = obj[s]+1;
        }
    }
    document.getElementById('result').textContent=JSON.stringify(obj)

    for(let j=0;j<Object.keys(obj).length;j++){
        let result = document.createElement('div')
        result.textContent = Object.keys(obj)[j]+':'+Object.values(obj)[j]
        document.querySelector('body').appendChild(result);
    }
    console.log(nopunctuation)
    console.log(Object.keys(obj))
    console.log(Object.keys(obj).length)
}