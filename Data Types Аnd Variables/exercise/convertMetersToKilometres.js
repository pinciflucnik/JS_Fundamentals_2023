function convert(meters){
    meters = Math.round(meters/10);
    let kilometers = meters/100;
    console.log(kilometers.toFixed(2));
}
convert(1852)