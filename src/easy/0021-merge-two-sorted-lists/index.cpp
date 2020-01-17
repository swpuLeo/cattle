/* 思路：此题就是归并排序的前一段归并过程，过程很简单，就只需要从头到尾比较两个链表，
哪个值小就把他插入新链表中节课。值得注意的是最后可能两个链表只有一个为空，
所以还需要把另一个不为空的链表元素插入。
*/
class Solution {
public:
	ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
		ListNode* head = new ListNode(0);
		ListNode* temp;
		head->next = NULL;
		temp = head;
		while (l1 != NULL && l2 != NULL)
		{
			if (l1->val > l2->val)
			{
				temp->next = l2;
				l2 = l2->next;
				temp = temp->next;
			}
			else
			{
				temp->next = l1;
				l1 = l1->next;
				temp = temp->next;
			}
		}
		if (l1)temp->next = l1;
		else  temp->next = l2;
		return head->next;
	}
};
