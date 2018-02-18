var REF_SYMBOL = "\\$";
var REF_MATCH = `${REF_SYMBOL}\\d+`
var re = (arg) => new RegExp(arg, 'g');
var parseRefs = (expr = '') =>
    ( expr.match(re(REF_MATCH)) || [] )
        .map($ref => +$ref.slice(1));
var hasIntersection = (listA = [], listB=[]) => listA.some(element => listB.includes(element))

var replaceRefs = (expr ='', refs = [], refExpansions = []) => {
    for(let index in refs) {
        let lineNumber = refs[index];
        let expandedExpression = refExpansions[index];
        expr = expr.replace(re(`${REF_SYMBOL}${lineNumber}`), expandedExpression)
    }
    return expr;
}

var expandHelper = linesMap => {
    let stack = [];
    let finishedExpansions = {};
    let cache = {};

    for(let key in linesMap) {
        finishedExpansions[key] = (expandExpr(linesMap[key], stack.concat(key), linesMap, cache))
    }

    return finishedExpansions;
}

var expandExpr = (expr, stack = [], lines = {}, cache = {}) => {
    let refs = parseRefs(expr);

    if(hasIntersection(stack, refs))
        throw `Circular Reference Found: ${stack.join(',')}`

    if(!refs.length) return expr;

    let expanded = refs.map(ref => {
        if(cache[ref])
            return cache[ref]
        else {
            let line = lines[ref];
            if(line === undefined)
                throw `Undefined Expression Found: Stack: [${stack.join(',')}] \nFor Ref to Line Number: ${ref}`
            cache[ref] = expandExpr(lines[ref], stack.concat(ref), lines, cache);
            return cache[ref];
        }
    })
    return replaceRefs(expr, refs, expanded);
}
