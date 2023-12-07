function extractFile(path){
    let tokens = path.split("\\")
    let file = tokens.slice(tokens.length - 1)
    file = file[0].split('.');
    let extension = file.splice(file.length - 1);
    file = file.join('.');   
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`); 
}
extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx')