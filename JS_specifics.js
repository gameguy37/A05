// bind

Function.prototype.myBind = function (ctx, ...bindArgs) {
    return (...callArgs) => {
        return this.apply(ctx, bindArgs.concat(callArgs));
    };
};

// inherits 2 ways

Function.prototype.inherits = function (Parent) {
    function Surrogate () {}
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

function inherits(Child, Parent) {
    function Surrogate() { }
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
};

// curry 2 ways

Function.prototype.myCurry = function (numArgs) {
    let args = [];
    let that = this;
    return function _myCurry (arg) {
        args.push(arg);
        if (numArgs > args.length) {
            return _myCurry;
        } else {
            return that(...args);
        }
    };
};

// function calculator() {
//     const args = [];
//     function _adder(num) {
//         args.push(num);
//         console.log(args.reduce((acc, el) => acc + el));  // return undefined;
//         return _adder;
//     }
//     return _adder;
// }

// call

Function.prototype.myCall = function (ctx, ...args) {
    return this.apply(ctx, args);
};

// apply

Function.prototype.myApply = function (ctx, args) {
    return this.call(ctx, ...args);
}