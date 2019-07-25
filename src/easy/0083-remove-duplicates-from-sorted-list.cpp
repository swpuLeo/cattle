/* 思路：此题只需要两个指针，一前一后，判断两个指针里面的值是否相等，
如果不等则可以把前面的node指向后面指针的node这样就相当于组成了新的链表，
如果相等，则后面指针向后面移动即可，同时，需要注意如果最后几位都相同（1，3，3）
这样的情况会导致最后相同的值没有被删除掉，所以需要避免，我采用一个bool值来避免，
每次都给他赋值为false, 如果他们不相等执行操作时，就赋值为true，这样就导致了相同为False,
不同为true, 这样就可以判断最后是否有相同的。*/
class Solution {
public:
	ListNode* deleteDuplicates(ListNode* head) {
		if (head == NULL || head->next == NULL) return head;
		ListNode* H = head;
		ListNode* temp = H->next;
		bool mark = false;
		while (temp != NULL)
		{
			mark = false;
			if (temp->val != H->val)
			{
				mark = true;
				H->next = temp;
				H = H->next;
			}
			temp = temp->next;
		}
		if (!mark)H->next = NULL;
		return head;
	}
};
