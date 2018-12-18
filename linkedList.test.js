const linkedList = require('./linkedList');

let list;

describe('linkedList append', function() {
  beforeEach(function() {
    list = new linkedList();
  });
  test("it should add one node to the linkedList", function() {
    list.append('first');
    expect(list.head).toEqual({data: 'first', next: null});
  });
  test("is should add two to the linkedList", function() {
    list.append('first');
    list.append('second');
    expect(list.head.next.data).toEqual('second');
    expect(list.tail.data).toEqual('second');
  });
});

describe('linkedList getAt', function() {
  beforeEach(function() {
    list = new linkedList();
  });
  test("it should get when there is one node", function() {
    list.append('first');
    expect(list.getAt(0)).toEqual({data: 'first', next: null});
  });
  test("it should get when there is more than one node", function() {
    list.append('first');
    list.append('second');
    expect(list.getAt(0)).toEqual({data: 'first', next: {data: 'second', next: null}});
    expect(list.getAt(3)).toEqual(null);
  });
});

describe('linkedList unshift', function() {
  beforeEach(function() {
    list = new linkedList();
    list.append('first');
    list.append('second');
  });
  test("it should unshift ", function() {
    list.unshift('okay');
    expect(list.head.data).toEqual('okay');
    expect(list.head.next.next.data).toEqual('second');
    expect(list.head.next.data).toEqual('first');
  });
});

describe('linkedList shift', function() {
  beforeEach(function() {
    list = new linkedList();
    list.append('first');
    list.append('second');
  });
  test("it should shift ", function() {
    list.unshift('okay');
    expect(list.head.data).toEqual('okay');
    expect(list.head.next.next.data).toEqual('second');
    expect(list.head.next.data).toEqual('first');
  });
});

describe('linkedList pop', function() {
  beforeEach(function() {
    list = new linkedList();
  });
  test("it should pop ", function() {
    list.append('first');
    list.append('second');
    list.append('third');
    list.append('fourth');
    list.append('fifth');
    expect(list.pop().data).toEqual('fifth');
    expect(list.tail.data).toEqual('fourth');
    expect(list.pop().data).toEqual('fourth');
    expect(list.tail.data).toEqual('third');
    expect(list.pop().data).toEqual('third');
    expect(list.pop().data).toEqual('second');
    expect(list.tail.data).toEqual('first');
  });
  test("it should pop the last node off", function() {
    list.append('first');
    expect(list.pop().data).toEqual('first');
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.pop()).toEqual(undefined);
  });
});

describe('linkedList insertAt', function() {
  beforeEach(function() {
    list = new linkedList();
  });
  test("it should insertAt to middle of list", function() {
    list.append('first');
    list.append('third');
    list.append('fourth');
    list.append('fifth');
    list.insertAt(1, 'second')
    expect(list.getAt(1).data).toEqual('second');
    expect(list.getAt(0).data).toEqual('first');
    expect(list.getAt(2).data).toEqual('third');
  });
  test("it should insertAt to end", function() {
    list.append('first');
    list.append('third');
    list.append('fourth');
    list.append('fifth');
    list.insertAt(5, 'second')
    expect(list.tail.data).toEqual('second');
  });
  test("it should insertAt to begining", function() {
    list.append('first');
    list.append('third');
    list.append('fourth');
    list.append('fifth');
    list.insertAt(0, 'second')
    expect(list.head.data).toEqual('second');
  });
  test("it just append if list is empty", function() {
    list.insertAt(6, 'second')
    expect(list.head.data).toEqual('second');
    expect(list.tail.data).toEqual('second');
  });
});