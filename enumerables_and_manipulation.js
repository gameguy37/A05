// reduce w/ and w/o IV

Array.prototype.myReduce = (callback, initialValue) => {
    let array = this;

    if (typeof initialValue === 'undefined') {
        initialValue = this[0];
        array = array.slice(1);
    }

    let result = initialValue;
    array.forEach( (el) => {
        result = callback(result, el);
    });

    return result;
};

// forEach

Array.prototype.myEach = (callback) => {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

// map

Array.prototype.myMap = (callback) => {
    let mapped = [];
    for (let i = 0; i < this.length; i++) {
        mapped.push(callback(this[i]));
    }
    return mapped;
};

// slice

String.prototype.mySlice = (start, end) => {
    let slice = "";

    if (typeof end === 'undefined') {
        end = this.length;
    }

    for (i = start; i < end && i < this.length; i++) {
        slice += this[i];
    }

    return slice;

}

// reverse

Array.prototype.myReverse = function () {
    const dup = this.slice(0)
    for (let i = 0; i < this.length; i++) {
        this[i] = dup[(this.length - 1) - i];
    }

    return this;
}

// find

Array.prototype.myFind = (callback) => {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        };
    }
};

// some

Array.prototype.mySome = (callback) => {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        };
    }
    return false;
};

// join



// reject

Array.prototype.myReject = (callback) => {
    let valid = [];
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            valid.push(this[i]);
        }
    }
    return valid;
};

// pig_latinify



// transpose



// two_sum


