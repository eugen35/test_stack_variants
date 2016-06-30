import Paginator from '../../paginationAndScroll/Paginator'



describe("1: Число страниц, число записей на странице", function() {

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

  it.skip("1.3: Пагинатор бросает ошибку, если recordsCount, делённый на currentPageRecordsCount, не будет равен значению pagesCount, заданному при инициализации", function() {
    
  })
  
})
