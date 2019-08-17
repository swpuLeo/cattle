class MyStack {
public:
	/** Initialize your data structure here. */
	int queue[1000];
	int rear;
	int front;

	MyStack() {
		rear = front = -1;
	}

	/** Push element x onto stack. */
	void push(int x) {
		queue[++rear] = x;
	}

	/** Removes the element on top of the stack and returns that element. */
	int pop() {
		return queue[rear--];
	}

	/** Get the top element. */
	int top() {
		return queue[rear];
	}

	/** Returns whether the stack is empty. */
	bool empty() {
		return (rear == front);
	}
};