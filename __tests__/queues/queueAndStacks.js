

/**
 * Using only stacks to simulate a queue
 */
class QueueAndStacks {
    stacks = [];
    stacks2 = [];
    dequeue = () => {

    };

    queue = () => {

        if (this.stacks2.length > 0) {
            return this.stacks2.pop();
        } else {
            while(this.stacks.length > 0) {
                this.stacks2.push(this.stacks.pop());
            }
            return this.stacks2.pop();
        }
    };

    /**
     * 
     * @param {number} item to push onto a stack
     */
    add = (item) => {
        this.stacks.push(item)
    };
}


describe('queueAndStacks', () => {
    it('should queue numbers up in a stack, but return them in a queue fashion', () => {
        const target = new QueueAndStacks();

        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);

        expect(target.queue()).toEqual(1);
        expect(target.queue()).toEqual(2);
        expect(target.queue()).toEqual(3);
        expect(target.queue()).toEqual(4);
        expect(target.queue()).toEqual(5);
        expect(target.queue()).toEqual(6);
    });
    it('should queue numbers up in a stack, but return them in a queue fashion, even when we add more to the stack in the middle of printing.', () => {
        const target = new QueueAndStacks();

        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);

        expect(target.queue()).toEqual(1);
        expect(target.queue()).toEqual(2);
        expect(target.queue()).toEqual(3);
        target.add(7)
        expect(target.queue()).toEqual(4);
        expect(target.queue()).toEqual(5);
        expect(target.queue()).toEqual(6);
        expect(target.queue()).toEqual(7);
    });
});