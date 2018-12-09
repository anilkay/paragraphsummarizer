var splitter=require("get-sentences-from-article");
module.exports=function (paragraph){
    if(paragraph===undefined)return "";
    const sentences=splitter(paragraph);
    const nOfSentence=sentences.length;
    if(nOfSentence<=0)return "";
    if(nOfSentence==1)return sentences[0];
    return sentences[0]+" "+sentences[sentences.length-1];
}



