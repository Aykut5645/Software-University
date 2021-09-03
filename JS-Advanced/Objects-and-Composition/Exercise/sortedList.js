function foo() {
    return {
        size: 0,
        list: [],
        add: function (el) {
            this.list.push(el)
            this.size++
            this.list.sort((a, b) => a - b)
        },
        remove: function (i) {
            if (i >= 0 && i < this.list.length) {
                this.list.splice(i, 1)
                this.size--
                return this.list
            }
        },
        get: function (i) {
            if (i >= 0 && i < this.list.length) {
                return this.list[i]
            }

        }
    }
}

let list = foo();

list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));