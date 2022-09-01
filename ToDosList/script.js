const tasks = {
    items: [],
    task: {
        id: 1,
        isDeleted: false,
        desc: "desc",
        weight: 1,
    },
    element: document.getElementById("js-show-task"),
    get: function (desc, weight) {
        this.task = {
            id: this.items.length,
            isDeleted: false,
            desc: desc,
            weight: weight,
        };
        this.add();
    },
    add: function () {
        if (this.task.desc == "") {
            alert("Please enter your task!");
            return;
        }

        this.items.push(this.task);
        this.render(this.task);
    },
    render: function (task) {
        if (!Array.isArray(task)) {
            const li = document.createElement("li");
            const p = document.createElement("p");
            const btn_delete = document.createElement("button");
            btn_delete.textContent = "Delete";
            p.innerText = task.desc;
            li.appendChild(p);
            li.appendChild(btn_delete);
            this.element.appendChild(li);
            btn_delete.onclick = () => {
                this.delete(p, task);
            };
            return;
        }
        this.element.innerHTML = "";
        this.items.forEach((task1) => {
            this.render(task1);
        });
    },
    delete: function (item, task) {
        task.isDeleted = true;
        item.style.textDecoration = "line-through";
    },
    ascSort: function () {
        for (let i = 0; i < this.items.length - 1; i++) {
            if (this.items[i].weight > this.items[i + 1].weight) {
                let temp = this.items[i];
                this.items[i] = this.items[i + 1];
                this.items[i + 1] = temp;
                i = -1;
            }
        }
        this.render(this.items);
    },
    descSort: function () {
        for (let i = 0; i < this.items.length - 1; i++) {
            if (this.items[i].weight < this.items[i + 1].weight) {
                let temp = this.items[i];
                this.items[i] = this.items[i + 1];
                this.items[i + 1] = temp;
                i = -1;
            }
        }
        this.render(this.items);
    },
};
