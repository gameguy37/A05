// digitalroot

function digitalRoot(n) {
    while (n > 10) {
        n = digitalRootStep(n);
    }
    return n;
}

function digitalRootStep(num) {
    let root = 0;

    while (num > 0) {
        root += num % 10;
        num = Math.floor(num/10);
    }

    return root;
}

// fibs

function fibsRec(n) {
    if (n < 3) {
        return [0, 1].slice(0, n);
    }

    let fibs = fibsRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

    return fibs;
}

// sumNPrimes



// deepDup

function deepDup(arr) {
    return arr.map((el) => el.constructor.name === 'Array' ? deepDup(el) : el);
}

// exponent

function exp(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    if (exponent > 0) {
        return (base * exp(base, exponent - 1));
    } else {
        return (1/base * exp(base, exponent + 1));
    }
}

// factorialsRec

function factorialsRec(num) {
    if (num === 1) return [1];

    const facs = factorialsRec(num - 1);
    facs.push(facs[facs.length - 1] * (num - 1));
    return facs;
}

// flatten?

Array.prototype.flatten = function () {
    let flattened = [];

    this.forEach((el) => {
        if (el instanceof Array) {
            flattened = flattened.concat(el.flatten());
        } else {
            flattened.push(el);
        }
    });

    return flattened;
}
