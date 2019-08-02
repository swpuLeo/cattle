/* 思路：此题可以想象成有两根长短不一的棍子，我们要找出两根棍子相同的部分（列子不准确的），
我们可以先将两根棍子竖立并排放在地上，由于相同部分在下面，
因此，长的那根棍子多出来的一定没有相同的点，所以我们可以直接把长的那根棍子锯得和短的那根一样长，
这样在从同一位置向下查找即可。*/
class Solution {
public:
	ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
		int lengthA = 0;
		int lengthB = 0;
		ListNode *A = headA;
		ListNode *B = headB;
		while (A != NULL) { A = A->next, lengthA++; }
		while (B != NULL) { B = B->next, lengthB++; }
		/*分出长短*/
		int longLength, shortLength;
		ListNode *longList, *shortList;
		if (lengthA > lengthB) { shortLength = lengthB; shortList = headB; longLength = lengthA; longList = headA; }
		else { shortLength = lengthA; shortList = headA; longLength = lengthB; longList = headB; }
		/*锯掉长的一截*/
		for (int i = 0; i < longLength - shortLength; i++, longList = longList->next);
		/*找出相同的部分*/
		while (longList != NULL && shortList != NULL)
		{
			if (longList == shortList) return longList;
			longList = longList->next;
			shortList = shortList->next;
		}
		return NULL;

	}
};