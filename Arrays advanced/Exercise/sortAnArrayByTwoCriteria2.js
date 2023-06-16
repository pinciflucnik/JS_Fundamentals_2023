function sortAnarraybyTwoCriteria (arr){
    // let sorted = arr.sort((a,b) => {
    //     if (a.length !== b.length){
    //         return a.length - b.length
    //     } else {
    //         return a.localeCompare(b);
    //     }
    // });
    let sorted = arr.sort((a,b) =>{
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(sorted.join("\n"))
  }
sortAnarraybyTwoCriteria([`test`,
    `Deny`,
    `omen`,
    `Default`])