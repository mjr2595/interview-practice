function getMinMax(input) {
    return {
        min: input
            .sort((a, b) => {
                return (a + b) - (b + a);
            })
            .reduce((string, value) => {
                return string + value;
            }),
        max: input
            .reverse()
            .reduce((string, value) => {
                return string + value;
            })
    }
}

const result = getMinMax([
    "79", "82", "34", "83", "69"
])

result;
console.log(result.min === "3469798283");
console.log(result.max === "8382796934");

function getMinMaxJoin(input) {
    return {
        min: input
            .sort((a, b) => {
                if (parseInt(a + b) < parseInt(b + a)) {
                    return -1;
                } else if (parseInt(a + b) > parseInt(b + a)) {
                    return 1;
                } else return 0;
            })
            .join(''),
        max: input
            .reverse()
            .join('')
    }
}

const resultJoin = getMinMaxJoin([
    "79", "82", "34", "83", "69"
])

result;
console.log(resultJoin.min === "3469798283");
console.log(resultJoin.max === "8382796934");