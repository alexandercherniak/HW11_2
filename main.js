let obj = {
  name: 'Alex',
  surname: 'Cherniak',
  age: 34,
  m1() {
    console.log(this.name);
    return this;
  },
  m2() {
    console.log(this.surname);
    return this;
  },
  m3() {
    console.log(this.age);
    return this;
  },
};

console.log(obj);
console.log('--------------------');

obj.m1().m2().m3();
console.log('--------------------');

obj.m2().m1().m3();
console.log('--------------------');

obj.m2().m1().m3().m1().m1();
