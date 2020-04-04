const Additive = () => {

    const _additive = (num) => {
        let numStr = `${num}`;
        let arr = numStr.split("");
        if (numStr === "0" || numStr === "1") {
            return num;
        } else {
            while (arr.length > 1) {
                arr = String(arr.reduce((acc, cur) => {
                    return +(acc) + +(cur);
                }, 0)).split("");
            }
            return +arr.join("");
        }
    };
    return {

        additive: _additive
    }
}

module.exports = Additive();