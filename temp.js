

function foo(param) {
    param.foo = true;
}

function bar(param) {
    param.bar = true;
}


const req = {};

foo(req);
console.log(req); // { foo: true }
bar(req); 
console.log(req); // { foo: true, bar: true }
