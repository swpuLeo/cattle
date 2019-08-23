/* 思路：此题基本思路就是讲链表分为两段，并且把前面一段进行倒置，然后再比较前后两段是否相同即可，最简单的方法就是先计算链表的长度，
然后将前面一半用头插法的办法进行倒置，最后再比较，但是由于需要的是一半这个特殊的位置，所以我们可以考虑快慢指针，何谓快慢指针，其实就是两个指针，
一根指针一次移动一个位置，另一个指针一次移动两个位置，就好比两个人走路一个速度为v, 一个速度为2v, 当速度快的人走到底了设长度为x, 
这个速度快的人所话的时间就为x / (2v)而对于相同的时间而言对于那个走得慢的就走到的距离为d.d = v * t, 而t为x / (2v), 
代入就为d = x / 2所以当一个人走到底了另一个人正好走到了一半。所以快慢指针适合用于有中点相关的场景，同时为了更加简便，
我们可以采用一边移动一边将其倒置，这个倒置的顺序只需要在图上画一画就凑出来了，同时需要注意链表个数为奇数和为偶数对于后一半的头结点位置有所不同。
所以此题最关键就是可以在找到中点的同时就进行倒置了，也要记住有中点或倍数的时候可以考虑快慢指针来解决问题。*/
class Solution {
public:
	bool isPalindrome(ListNode* head) {
		if (!head || !head->next) return true;
		ListNode*pre = NULL;
		ListNode*slow = head;
		ListNode*fast = head;
		ListNode*s = NULL;
		while (fast != NULL && fast->next != NULL)
		{
			pre = slow;
			slow = slow->next;
			fast = fast->next->next;
			pre->next = s;
			s = pre;
		}
		ListNode*temp = slow;
		if (fast != NULL) temp = temp->next;
		slow = pre;
		while (temp != NULL)
			if (temp->val != slow->val) return false;
			else { temp = temp->next; slow = slow->next; }
		return true;

	}
};