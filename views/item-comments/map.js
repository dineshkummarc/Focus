function(doc) {
  if (doc.comment) {
    emit(doc.created_at, doc);
  }
}