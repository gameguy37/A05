// bubblesort

Array.prototype.bubbleSort = function (func) {
    let sorted = false;

    if (!func) {
        func = (x, y) => {
            if (x <= y) return -1;
            return 1;
        }
    }

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length; i++) {
            if (i + 1 === this.length) continue;

            if (func(this[i], this[i + 1]) === 1) {
                sorted = false;
                let current = this[i], next = this[i + 1];
                this[i] = next, this[i + 1] = current;
            }
        }
    }

    return this;
}

// jumblesort

function jumbleSort(str, alphabet = null) {
    alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
    str = str.split('');

    let sorted = false;
    while (!sorted) {
        sorted = true
        for (let i = 0; i < str.length; i++) {
            if (i === str.length - 1) break
            let current = str[i], next = str[i + 1];
            if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
                str[i] = next, str[i + 1] = current;
                sorted = false;
            }
        }
    }

    return str.join('');
}

// quicksort

Array.prototype.quickSort = function (func) {
    if (this.length < 2) return this;

    if (!func) {
        func = (x, y) => {
            if (x < y) return - 1;
            return 1;
        }
    }

    const pivot = this[0];
    let left = this.slice(1).filter((el) => func(el, pivot) === -1);
    let right = this.slice(1).filter((el) => func(el, pivot) != -1);
    left = left.quicksort(func);
    right = right.quicksort(func);

    return left.concat([pivot]).concat(right);
}

// mergesort

Array.prototype.mergeSort = function (func) {
    if (this.length <= 1) return this;

    if (!func) func = (left, right) => {
        return left < right ? -1 : left > right ? 1 : 0;
    }

    const midpoint = Math.floor(this.length / 2);
    const sortedLeft = this.slice(0, midpoint).mergeSort(func);
    const sortedRight = this.slice(midpoint).mergeSort(func);

    return sortedLeft.merge(sortedRight, func);
}

Array.prototype.merge = function (arr, func) {
    let merged = [];

    while (this.length && arr.length) {
        switch (func(this[0], arr[0])) {
            case -1:
                merged.push(this.shift());
                break
            case 0:
                merged.push(this.shift());
                break
            case 1:
                merged.push(arr.shift());
                break
        }
    }

    merged = merged.concat(this);
    merged = merged.concat(arr);

    return merged;
}

function merge(left, right) {
    const merged = [];

    while (left.length > 0 && right.length > 0) {
        let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
        merged.push(nextItem);
    }

    return merged.concat(left, right);
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const middle = Math.floor(array.length / 2);

        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle));

        return merge(left, right);
    }
}

// bsearch

Array.prototype.myBsearch = function (target) {
    if (this.length === 0) return null;
    const mid = Math.floor(this.length / 2);

    if (this[mid] === target) {
        return mid;
    } else if (this[mid] > target) {
        return this.slice(0, mid).myBsearch(target);
    } else {
        const result = this.slice(mid + 1, this.length).myBsearch(target);
        return result === null ? result : mid + 1 + result
    }
}

function bsearch(numbers, target) {
    if (numbers.length === 0) {
        return -1;
    }

    const probeIdx = Math.floor(numbers.length / 2);
    const probe = numbers[probeIdx];

    if (target === probe) {
        return probeIdx;
    } else if (target < probe) {
        const left = numbers.slice(0, probeIdx);
        return bsearch(left, target);
    } else {
        const right = numbers.slice(probeIdx + 1);
        const subProblem = bsearch(right, target);

        return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
    }
}