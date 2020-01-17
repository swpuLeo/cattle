class MyQueue {
public:
	/** Initialize your data structure here. */
	MyQueue() {

	}

	/** Push element x to the back of queue. */
	void push(int x) {
		s1.push(x);
	}

	/** Removes the element from in front of queue and returns that element. */
	int pop() {
		while (!s1.empty())
		{
			s2.push(s1.top());
			s1.pop();
		}
		int a = s2.top();
		s2.pop();
		while (!s2.empty())
		{
			s1.push(s2.top());
			s2.pop();
		}
		return a;
	}

	/** Get the front element. */
	int peek() {
		while (!s1.empty())
		{
			s2.push(s1.top());
			s1.pop();
		}
		int a = s2.top();
		while (!s2.empty())
		{
			s1.push(s2.top());
			s2.pop();
		}
		return a;
	}

	/** Returns whether the queue is empty. */
	bool empty() {
		if (s1.empty() && s2.empty())
			return true;
		return false;
	}

private:
	stack<int> s1;
	stack<int> s2;
};