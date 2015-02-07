var chai = require("chai"),
  Sorter = require("../lib/sort.js"),
  expect = chai.expect;

describe("Sorter", function () {
  var s = new Sorter(), a;
  beforeEach(function () {
     a = s.test.slice();
  });
  describe("insert sort", function () {
    it("should sort the array in ascending order", function () {
      expect(s.insertSort(a)).eql(s.testSorted);
    });
  });
  describe("mergeSort", function () {
    it("should sort the array in ascending order", function () {
      var result = s.mergeSort(a);
      expect(result).eql(s.testSorted);
    });
  });
});