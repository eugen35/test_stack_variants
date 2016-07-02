import PartListViewer from './PartListViewer'

export default class Paginator extends PartListViewer {
  constructor (params){
    super(params) //Вызываем конструктор родителя. До его вызова this не существует
    let { currentPageNumber, pagesCount, recordsCount } = params
    this.currentPageNumber = currentPageNumber
    this.recordsCount = recordsCount    
    if (undefined == pagesCount && undefined != recordsCount) {
      this.pagesCount = Math.ceil( recordsCount / this.currentPageRecordsCount )
    } else {
      this.pagesCount = pagesCount
    }
  }

  //@todo нужно наверное везде реализовать чэйнинг? Или не нужно этого для пагинатора?
  nextPage(){
    this.toPageNumber(this.currentPageNumber+1)
    return this
  }

  previsiousPage(){
    this.toPageNumber(this.currentPageNumber-1)
    return this
  }

  toPageNumber(pageNumber){    
    console.log('Меня вызвали')
    if (!this.isCorrectPageNumber(pageNumber)) return this
    console.log('И вышло')
    this.currentPageNumber = pageNumber
    if (this.pages.hasOwnProperty(this.currentPageNumber)) {
      this.currentPage = this.pages[this.currentPageNumber]
      return this
    } else {
      //this.pages = 
      //this.currentPage = this.pages[this.currentPageNumber]
      return this
    }
  }
  
  isCorrectPageNumber(pageNumber) {
    //(pageNumber ^ 0) === pageNumber - проверка на целое число. (pageNumber ^ 0) в скобках - это потому, что приоритет операции ^ очень низкий. Если не поставить скобку, то === сработает раньше.
    switch (true) {
      case (!Number.isInteger(pageNumber))                                          : return false //если не является целым числом
      case (1 > pageNumber)                                                 : return false //если 0 или меньше
      case (undefined != this.pagesCount && this.pagesCount < pageNumber)   : return false //если больше числа страниц (если оно задано)
      default                                                               : return true
    }
  }
  
}
