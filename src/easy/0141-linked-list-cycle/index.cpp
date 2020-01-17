/* 思路：此题可以多重循环遍历慢慢计算，但是有个最简单的方法就是采取快慢指针的方式，
原理为，我们可以用两个指针，一个为fast，一个为slow, 每次循环的时候快指针，
fast每次向前移动两个位置，slow每次移动一个位置，如果链表中没有环的话，
那么链表末尾就会指向空，所以两个钟任意一个链表为空的时候就表示没有链表，
如果有环的话，会有神奇的现象，当fast = slow的时候就表示有环，因为对于一个有环的跑道，
一个人跑的更快，一定可以追上跑得慢的那个人。有人可能会问， 为什么每次移动两个位置呢，
是因为两个指针速度差值为1，而他们的距离为一个环的长度d，所以快指针想要追上慢指针，
就需要循环d / 1次，如果他们之间速度差距不为1就会导致有可能追上慢指针的时候与其擦肩而过（相当于跳过了慢指针的位置）*/
class Solution {
public:
	bool hasCycle(ListNode *head) {
		if (head == NULL) return false;
		ListNode *pre = head;
		ListNode *p = head;
		while (p->next != NULL)
		{
			p = p->next->next;
			pre = pre->next;
			if (p == pre) return true;
			if (p == NULL) return false;
		}
		return false;
	}
};