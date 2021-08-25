function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    arr.forEach(line => {
        let [name, age] = line.split(' ');

        console.log(new Cat(name, Number(age)).meow());
    });
}

cats(['Mellow 2', 'Tom 5']);


/*
function cats(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentCat = arr[i].split(' ');
        let [catName, age] = currentCat;

        class cat {
            constructor(catName, age) {
                this.catName = catName;
                this.age = age;
            }

            Meow() {
                console.log(`${this.catName}, age ${this.age} says Meow`);
            }
        }

        let catInfo = new cat(catName, age);
        catInfo.Meow();
    }
}

cats(['Mellow 2', 'Tom 5']);*/