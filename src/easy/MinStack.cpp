class MinStack {
public:
	int tops;
	int min;
	int n;
	int stack[100000];
	MinStack() {
		tops = -1;
		min = -1;
		n = 0;
	}

	void push(int x) {
		stack[++tops] = x;
		n++;
		if (min == -1) min = tops;
		else if (stack[min] > x) min = tops;
	}

	void pop() {
		if (tops == -1) return;

		n--;
		if (tops == min)
		{

			if (n == 0)
			{
				min = -1;
				tops--;
				return;
			}
			min = 0;
			for (int i = 0; i < n; i++)
			{
				if (stack[i] < stack[min])
					min = i;
			}
		}
		tops--;

	}

	int top() {
		if (tops == -1) return -1;
		return stack[tops];
	}

	int getMin() {
		if (min != -1)
			return stack[min];
		return -1;
	}

};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */