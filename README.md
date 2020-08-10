# RuleParser

Rule Parser for [Rule Engine](https://github.com/prashantk0001/RuleEngine), generates Rule JSON in format required by Rule Engine.

Example : 

Input for the parser: 
`X != Y && U == 6 && (O == 9 || U != 9)`

Output generated by Parser:
```
{
   "operator":"&&",
   "criteria":[
      {
         "operator":"!=",
         "param":"Y",
         "value":"X"
      },
      {
         "operator":"&&",
         "criteria":[
            {
               "operator":"==",
               "param":"6",
               "value":"U"
            },
            {
               "operator":"||",
               "criteria":[
                  {
                     "operator":"==",
                     "param":"9",
                     "value":"O"
                  },
                  {
                     "operator":"!=",
                     "param":"9",
                     "value":"U"
                  }
               ]
            }
         ]
      }
   ]
}
```

# Package Info:

This repo has 3 packages:
Node Package
Package for browsers
Package to implement with Salesoforce - Lightning Web Component framework (LWC)

# Get Started:

You'd find a working example for RuleParser in the example module with each package, here's the description. Refer main.js/RuleParser js modules which are at the core of this library.

### Import RuleParser and initialize:

for node
`const formulaParser = require("./index.js");`
for lwc:
`import { loadParserDependencies, formulaParser} from 'c/ruleParser'`

### Register pre-specified rules:

`ruleJSON = formulaParser.parse(userInput);`   //throws error if logic is incorrect

### Notes:

    -use parantheses for logic separation for '&&' and '||' operators 
    
     
