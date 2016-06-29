import PartListViewer from './PartListViewer'

export default class Paginator extends PartListViewer {
  constructor (params){
    super(params) //Вызываем конструктор родителя. До его вызова this не существует
    let { currentPageNumber, pagesCount, recordsCount } = params
    this.currentPageNumber = currentPageNumber
    this.recordsCount = recordsCount    
    if (undefined == pagesCount && undefined != recordsCount) {
      this.pagesCount = Math.ceil( recordsCount / this.currentPageRecords )
    } else {
      this.pagesCount = pagesCount
    }
  }
}
