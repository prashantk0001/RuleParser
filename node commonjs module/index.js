let grammer  = `
    parantheses = whitespace? starts:"("? whitespace? exps:recursiveExp whitespace? ends:")"? {
        if(!starts && !ends){
            return exps;
        }
        return [exps];
    }
    recursiveExp = ex:expression moreex:moreExps* {
        if(!moreex){
            return ex;
        }else{
            var val = [ex];
            var first;
            moreex.forEach((elem)=>{
                first = elem[0]
                if(elem[1] instanceof Array && elem[1].length == 1 ){
                    val.push(elem[1][0]);
                }else{
                    val.push(elem[1]);
                }
            });
            if(!first){
                return ex;
            }
            if(first == "&&" || first == "||" ){
                var criteria = {operator:first, criteria : val}
                return criteria;
            }
        }
    }
    moreExps = operator? parantheses 
    expression = whitespace? p1:param whitespace? op:operator? whitespace? p2:param? whitespace? {
    var returnval = {}
    returnval.operator = op;
    if(p2 instanceof Array && p2.length ==1){
        returnval.param = p1[0];
    }else{
        returnval.param = p1;
    }
    if(p1 instanceof Array && p1.length ==1){
        returnval.value = p2[0];
    }else{
        returnval.param = p2;
    }
    return returnval;
    }
    operator = "&&"/"||"/"!="/"=="/">"/">="/"<"/"<="
    whitespace = " "* {return ""}
    param = p:[a-zA-Z0-9]+ {
        if(p.length>1){
            var newparam = p.join("");
            return newparam;
        }
        return p;
    }
`;

let peg = require("pegjs");
let formulaParser = peg.generate(grammer);

module.exports = formulaParser;