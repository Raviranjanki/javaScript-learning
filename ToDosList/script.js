const tasks = {
  items: [],
  task: {
    id: 1,
    isDeleted: false,
    desc: "desc",
    subDesc: "subdesc",
    weight: 1,
  },
  childTask: {
    desc: "",
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
    this.render();
  },
  render: function () {
    this.element.innerHTML = "";
    this.items.forEach((item) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      const div = document.createElement("div");
      const up = document.createElement("button");
      const down = document.createElement("button");
      const btn_delete = document.createElement("button");
      const btn_sub_desc = document.createElement("button");

      p.innerText = item.desc;
      up.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
      down.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
      btn_delete.textContent = "Delete";
      btn_sub_desc.innerText = "Add";

      btn_sub_desc.onclick = () => {
        this.subDesc(item, p);
        btn_sub_desc.style.display = "none";
      };
      btn_delete.onclick = () => this.delete(p, item);
      up.onclick = () => this.moveUp(item.id);
      down.onclick = () => this.moveDown(item.id);

      if (item.subDesc != undefined) {
        const sub_desc = document.createElement("p");
        sub_desc.innerText = item.subDesc.desc;
        p.append(sub_desc);
      }
      if (item.isDeleted) {
        p.style.textDecoration = "line-through";
      }

      if (this.items.indexOf(item) == 0) {
        up.style.visibility = "hidden";
      }
      if (this.items.length - 1 == this.items.indexOf(item)) {
        down.style.visibility = "hidden";
      }

      div.append(btn_sub_desc, up, down, btn_delete);
      li.append(p, div);
      this.element.appendChild(li);
    });
  },
  subDesc: function (item, p) {
    const sub_desc = document.createElement("textarea");
    const btn_save = document.createElement("button");
    let index = this.items.indexOf(item);

    btn_save.textContent = "Save";
    sub_desc.style.display = "block";
    p.append(sub_desc, btn_save);

    btn_save.onclick = () => {
      this.childTask = { desc: sub_desc.value };
      this.items[index].subDesc = this.childTask;
      this.render();
    };
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
    this.render();
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
    this.render();
  },
  moveUp: function (current_id) {
    for (let i = 1; i < this.items.length; i++) {
      if (current_id == this.items[i].id) {
        [this.items[i], this.items[i - 1]] = [this.items[i - 1], this.items[i]];
        break;
      }
    }
    this.render();
  },
  moveDown: function (current_id) {
    for (let i = 0; i < this.items.length - 1; i++) {
      if (current_id == this.items[i].id) {
        [this.items[i], this.items[i + 1]] = [this.items[i + 1], this.items[i]];
        break;
      }
    }
    this.render();
  },
};

tasks.get("ravi", 1);
tasks.get("ravi ranjan", 2);
tasks.get("ravi pal", 1);
tasks.get("ravi kamal", 3);
