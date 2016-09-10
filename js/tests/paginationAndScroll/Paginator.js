import Paginator from '../../paginationAndScroll/Paginator'


let paginator

describe("1: Создание объекта", function() {

  it.skip("1.1: Пагинатор может рассчитать pagesCount, если известен recordsCount", function() {
    let paginator = new Paginator({
      currentPageNumber: 1,      
      recordsCount: 100,
      currentPageRecordsCount: 50
    })
    expect(paginator.pagesCount).to.equal(2)
  })

  it("1.2: Пагинатор не рассчитывает pagesCount, если он и recordsCount не известны", function() {
    let paginator = new Paginator({
      currentPageNumber: 1,      
      currentPageRecordsCount: 50
    })
    expect(paginator.pagesCount).to.be.undefined
  })

  //@todo Переименовать currentPageRecordsCount в pageRecordsCount
  it.skip("1.3: Если не указано pageRecordsCount, то берётся значение по умолчанию - 40 записей", function() {
    
  })
  
  it.skip("1.4: Пагинатор бросает ошибку, если recordsCount, делённый на currentPageRecordsCount, не будет равен значению pagesCount, заданному при инициализации", function() {
    
  })
  
})

describe("2: Проверка корректности номера страницы - isCorrectPageNumber", function() {

  before(function(){
    paginator = new Paginator({
      currentPageNumber: 1,
      pagesCount: 5
    })
  })

  it("2.1: Некорректный номер меньше минимального числа страниц", function() {
    expect(paginator.isCorrectPageNumber(0)).not.to.be.true
  })

  it("2.2: Некорректный номер больше числа страниц", function() {
    expect(paginator.isCorrectPageNumber(6)).not.to.be.true
  })

  it("2.3: Некорректный номер отрицательный", function() {
    expect(paginator.isCorrectPageNumber(-3)).not.to.be.true
  })

  it("2.4: Некорректный номер undefined", function() {
    expect(paginator.isCorrectPageNumber(undefined)).not.to.be.true
  })

  it("2.5: Некорректный номер NaN", function() {
    expect(paginator.isCorrectPageNumber(NaN)).not.to.be.true
  })

  it("2.6: Некорректный номер - объект", function() {
    expect(paginator.isCorrectPageNumber({a:1})).not.to.be.true
  })

  it("2.7: Некорректный номер - не целое число", function() {
    expect(paginator.isCorrectPageNumber(1.3)).not.to.be.true
  })

  it("2.8: Корректный номер - на границе интервала", function() {
    expect(paginator.isCorrectPageNumber(5)).to.be.true
  })
  
})

describe.skip("3: Основные методы", function() {

  beforeEach(function(){
    paginator = new Paginator({
      currentPageNumber: 1,
      recordsCount: 100,
      pageRecordsCount: 50
    })
  })

  it("2.1: ", function() {
    expect(paginator.isCorrectPageNumber(0)).not.to.be.true
  })

  it("2.2: Перейти на следующую страницу", function() {
    paginator.pages[2] = ['Мария', 'Клава', 'Галя']
    paginator.toPageNumber(2)
    expect(paginator.currentPageNumber).to.equal(2)
  })



})