var chai = require("chai"),
  Sorter = require("../lib/sort.js"),
  expect = chai.expect;

describe("Sorter", function () {
  var s = new Sorter(), test, testSorted;
  beforeEach(function () {
    test = [ 6, 4, 2, 5, 3, 1 ];
    testSorted =[ 1, 2, 3, 4, 5, 6 ];
  });
  describe("insert sort", function () {
    it("should sort the array in ascending order", function () {
      expect(s.insertSort(test)).eql(testSorted);
    });
  });
  describe("mergeSort", function () {
    it("should sort the array in ascending order", function () {
      var result = s.mergeSort(test);
      expect(result).eql(testSorted);
    });
  });
});