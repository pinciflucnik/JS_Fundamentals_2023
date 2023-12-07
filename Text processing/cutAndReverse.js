function cutAndReverse(text){
    let result = text.split('');
    result.reverse();
    console.log(result.slice((result.length / 2)).join(''));
    console.log(result.slice(0,result.length / 2).join(''));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('---DIVIDER---');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')