/* 思路：此题真的秀，谁能想到还可以用替身攻击，还可以把下一个的复制到当前节点，然后把下一个节点的删掉，真的秀呀，
出这道题的人也是有点东西，以后删除的 时候也应该要记住了，换个思路删除替身！*/
class Solution {
public:
	void deleteNode(ListNode* node) {
		node->val = node->next->val;
		node->next = node->next->next;
	}
};