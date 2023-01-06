/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {
  // базовый случай
  if (!head || !head.next) {
    return head;
  }
  // находим середину
  // важно: внутри обрывается связь
  // head указывает на первую половину
  const mid = getMid(head);
  // рекурсивно сортируем половинки
  const left = sortList(head);
  const right = sortList(mid);
  // мержим половины между собой
  return merge(left, right);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function getMid(head) {
  let prev = null;
  let slow = head;
  let fast = head;

  // два указателя: быстрый и медленный
  // быстрый шагает через узел
  // медленный оказежтся на середине
  // т.к. дижется в два раза медленнее
  while (fast && fast.next) {
    prev = prev ? prev.next : head;
    slow = slow.next;
    fast = fast.next.next;
  }
  // обрываем связь
  prev.next = null;
  return slow;
}


/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
function merge(head1, head2) {
  const dummyHead = new ListNode();
  let curr = dummyHead;

  // движемся по спискам пока не упрёмся в конец одного из них
  while (head1 && head2) {
    // какой узел меньше того и пристегиваем в ответ
    // движемся по этому списку дальше
    if (head1.val < head2.val) {
      curr.next = head1;
      head1 = head1.next;
    } else {
      curr.next = head2;
      head2 = head2.next
    }
    curr = curr.next;
  }
  // в конце пристегиваем хвост, если остался один из них
  curr.next = head1 || head2;
  return dummyHead.next
}

console.log(sortList([4, 2, 1, 3]));
console.log(sortList([-1, 5, 3, 4, 0]));
