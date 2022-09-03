const tasks = {
    items: [],
    task: {
        id: 1,
        isDeleted: false,
        desc: "desc",
        subDesc: 'subdesc',
        weight: 1,
    },
    childTask: {
        desc: '',
    },
    element: document.getElementById("js-show-task"),
    get: function (desc, weight, childTask) {
        this.task = {
            id: this.items.length,
            isDeleted: false,
            desc: desc,
            weight: weight,
            subDesc: childTask,
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
        this.element.innerHTML = "";
        let f_index = 1;
        let l_index = this.items.length;
        this.items.forEach((item) => {
            f_index = this.items.indexOf(item)
            const li = document.createElement("li");
            const p = document.createElement("p");
            const btn_delete = document.createElement("button");
            btn_delete.textContent = "Delete";
            const div = document.createElement("div");
            const up = document.createElement("button");
            up.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
            const down = document.createElement("button");
            down.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
            p.innerText = item.desc;

            const btn_sub_desc = document.createElement("button");
            btn_sub_desc.innerText = 'Add';

            btn_sub_desc.onclick = () => {
                btn_sub_desc.style.display = 'none'
                this.subDesc(item, p);
            }
            btn_delete.onclick = () => {
                this.delete(p, item);
            };
            up.onclick = () => {
                this.moveUp(item.id);
            };
            down.onclick = () => {
                this.moveDown(item.id);
            };

            if (item.subDesc != undefined) {
                const sub_desc = document.createElement("p");
                sub_desc.innerText = item.subDesc.desc;
                p.append(sub_desc)
            }
            if (item.isDeleted) {
                p.style.textDecoration = "line-through";
            }


            if (f_index == 0) {
                up.style.visibility = 'hidden';
            }
            if (l_index - 1 == f_index) {
                down.style.visibility = 'hidden';
            }

            div.append(btn_sub_desc, up, down, btn_delete)
            li.append(p, div);
            this.element.appendChild(li);
        })
    },
    subDesc: function (item, p) {
        const sub_desc = document.createElement('textarea')
        const btn_save = document.createElement('button')

        btn_save.textContent = 'Save'
        sub_desc.style.display = 'block'
        p.append(sub_desc, btn_save)

        btn_save.onclick = () => {
            this.childTask.desc = sub_desc.value
            this.items[item.id].subDesc = this.childTask
            this.render()
        }
    },
    delete: function (item, task) {
        task.isDeleted = true;
        item.style.textDecoration = "line-through";
    },
    ascSort: function () {
        const items = this.items;
        for (let i = 0; i < this.items.length - 1; i++) {
            if (items[i].weight > items[i + 1].weight) {
                let temp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = temp;
                i = -1;
            }
        }
        this.render(items);
    },
    descSort: function () {
        const items = this.items;
        for (let i = 0; i < items.length - 1; i++) {
            if (items[i].weight < items[i + 1].weight) {
                let temp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = temp;
                i = -1;
            }
        }
        this.render(items);
    },

    moveDown: function (current_id) {
        for (let i = 0; i < this.items.length - 1; i++) {
            if (current_id == this.items[i].id) {
                [this.items[i], this.items[i + 1]] = [this.items[i + 1], this.items[i]]
                break;
            }
        }
        this.render([])
    },
    moveUp: function (current_id) {
        for (let i = 1; i < this.items.length; i++) {
            if (current_id == this.items[i].id) {
                [this.items[i], this.items[i - 1]] = [this.items[i - 1], this.items[i]]
                break;
            }
        }
        this.render([])
    },
};

tasks.get("ravi", 1);
tasks.get("ravi ranjan", 2);
tasks.get("ravi pal", 1);
tasks.get("ravi kamal", 3);
