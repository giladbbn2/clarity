export const ToNonNegativeNumber : (val: string) => number = (val: string) => {
    if (typeof val === "undefined") {
        throw new Error("undefined");
    }
    
    var num = Number(val);

    if (isNaN(num) || 
        num < 0) {
        throw new Error("cannot cast into a non negative number");
    }

    return num;
};