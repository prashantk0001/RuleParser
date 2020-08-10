import { LightningElement, track } from 'lwc';
import { loadParserDependencies, formulaParser} from 'c/ruleParser'

export default class RuleParserExample extends LightningElement {

    @track out;
    @track userInput = `X != Y && U == 6 && (O == 9 || U != 9)`;
    constructor(){
        super();
        loadParserDependencies(this).then(()=>{
            this.out = JSON.stringify(formulaParser.parse(this.userInput));
        })

    }

    runRule(event){
        let input = event.target.value;
        this.out = JSON.stringify(formulaParser.parse(input));
    }

}