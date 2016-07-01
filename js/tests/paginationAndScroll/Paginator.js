import Paginator from '../../paginationAndScroll/Paginator'



describe("1: Создание объекта", function() {

  it("1.1: Пагинатор может рассчитать pagesCount, если известен recordsCount", function() {
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

describe("2: Основные методы", function() {

  it("2.1: При нажати", function() {
    
  })

})