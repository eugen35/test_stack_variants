//@todo Нужно ещё показать sinon в действии


import pow from './application'
import Paginator from './paginationAndScroll/Paginator'

let paginator = new Paginator({
  currentPageNumber: 1, 
  pagesCount: 2, 
  recordsCount: 100,
  currentPageRecordsCount: 50  
})

describe("ES6", function() {
    let { title } = {
        title: "Меню",
        width: 100,
        height: 200
    };

    it("Деструктуризация работает", function() {
        assert.equal( title, "Меню" );
    });

    it("Пагинатор работает", function() {
      assert.equal( paginator.pagesCount, 2 );
    });

  it("Пагинатор имеет и родительские свойства", function() {
    assert.equal( paginator.currentPageRecordsCount, 50 );
  });
  
})

describe("pow", function() {

    describe("возводит x в степень n", function() {

        function makeTest(x) {
            var expected = x * x * x;
            it("при возведении " + x + " в степень 3 результат: " + expected, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    it("при возведении в отрицательную степень результат NaN", function() {
        assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    });

    it("при возведении в дробную степень результат NaN", function() {
        assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) не NaN");
    });

    describe("любое число, кроме нуля, в степени 0 равно 1", function() {

        function makeTest(x) {
            it("при возведении " + x + " в степень 0 результат: 1", function() {
                assert.equal(pow(x, 0), 1);
            });
        }

        for (var x = -5; x <= 5; x += 2) {
            makeTest(x);
        }

    });

    it("ноль в нулевой степени даёт NaN", function() {
        assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
    });

});