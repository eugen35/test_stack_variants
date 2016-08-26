export default class PartListViewer {
  constructor({ remoteSource, hashedRecords, currentPage, pageRecordsCount, sort, filter, user }) {
    this.remoteSource = remoteSource
    this.hashedRecords = hashedRecords
    
    this.pages = {}
    this.currentPage = currentPage
    this.pageRecordsCount = pageRecordsCount
    
    this.sort = sort
    this.filter = filter
    this.user = user
  }
}