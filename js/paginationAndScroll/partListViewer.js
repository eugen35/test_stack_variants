export default class PartListViewer {
  constructor({ remoteSource, hashedRecords, currentPageRecords, currentPageRecordsCount, sort, filter }) {
    this.remoteSource = remoteSource
    this.hashedRecords = hashedRecords
    this.currentPageRecords = currentPageRecords
    this.currentPageRecordsCount = currentPageRecordsCount
    this.sort = sort
    this.filter = filter
  }
}