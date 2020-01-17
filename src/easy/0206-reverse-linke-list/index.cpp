/* 思路：此题可以采取头插法，首先创建一个无意义头结点，然后把整个链表采用头查法的方式来重新插入整个链表，因为每次插入都是插在头部，
就慢慢的把前面插入的数往后面挤了。*/
class Solution {
public:
	ListNode* reverseList(ListNode* head) {
		ListNode* p = new ListNode(-1);
		p->next = NULL;
		ListNode* t = head;
		ListNode* s;
		while (t != NULL)
		{
			s = t;
			t = t->next;
			s->next = p->next;
			p->next = s;
		}
		return p->next;
	}
};