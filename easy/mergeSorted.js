let mergeTwoLists = (l1, l2) => {
  var mergedHead = { val: -1, next: null },
    curr = mergedHead
  while (l1 && l2) {
    if (l1.val > l2.val) {
      curr.next = l2
      l2 = l2.next
    } else {
      curr.next = l1
      l1 = l1.next
    }
    curr = curr.next
  }
  curr.next = l1 || l2

  return mergedHead.next
}
