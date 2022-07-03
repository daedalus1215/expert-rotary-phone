const tortoiseAndHare = head => {
    let tortoise = head;
    let hare = head;
    hare.next;
    while (true) {
        tortoise = tortoise.next;
        hare = hare.next
        if (hare === tortoise) break;
        if (hare === null) return false;
        if (hare.next !== null) {
            hare = hare.next;
            if (hare === tortoise) break;
        }
    }
    p1 = head;
    while (hare !== p1) {
        hare = hare.next;
        p = p.next;
        hare.next;
    }

    return p1;

}


describe.skip('Skipping this for now', () => {
    it('skipping', () => {});
});