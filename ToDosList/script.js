const tasks = {
  items: [],
  task: {
    id: 1,
    isDeleted: false,
    desc: "desc",
    subDesc: [],
    weight: 1,
    parent: false,
  },
  element: document.getElementById("js-show-task"),
  select: document.getElementById("parent"),
  get: function (desc, weight) {
    this.task = {
      id: this.items.length,
      isDeleted: false,
      desc: desc,
      weight: weight,
      subDesc: [],
      parent: false,
    };
    this.add();
  },
  add: function () {
    if (this.task.desc == "") {
      alert("Please enter your task!");
      return;
    }
    let selectedValue = document.getElementById("parent").value;

    if (selectedValue == 1) {
      const select_option = document.createElement("option");
      let option_text = this.task.desc;
      select_option.textContent = option_text;
      this.select.appendChild(select_option);
      this.task.parent = true;
      this.items.push(this.task);
      this.render();
      return;
    }

    let index = this.items.findIndex((x) => x.desc === selectedValue);
    this.items[index].subDesc.push(this.task);
    this.render();
  },
  selectValue: function () {
    var x = document.getElementById("parent").value;
    return x;
  },
  render: function () {
    this.element.innerHTML = "";
    this.element.append(this.extractValue(this.items));
  },
  extractValue: function (items) {
    const ul = document.createElement("ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      const p = document.createElement("span");
      const div = document.createElement("div");
      const wrap = document.createElement("div");
      const up = document.createElement("button");
      const down = document.createElement("button");
      const btn_delete = document.createElement("button");

      p.innerText = item.desc;
      if (item.parent == true) {
        up.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
        down.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
        div.append(up, down, btn_delete);
      }
      div.append(btn_delete);
      btn_delete.textContent = "Delete";
      wrap.className = "wrap-content";

      if (item.isDeleted) {
        p.style.textDecoration = "line-through";
      }

      if (items.indexOf(item) == 0) {
        up.style.visibility = "hidden";
      }

      if (items.length - 1 == items.indexOf(item)) {
        down.style.visibility = "hidden";
      }
      btn_delete.onclick = () => this.delete(p, item);
      up.onclick = () => this.moveUp(item.id, items);
      down.onclick = () => this.moveDown(item.id, items);

      
      wrap.append(p, div);
      li.append(wrap);
      ul.appendChild(li);

      if (Array.isArray(item.subDesc) && item.parent == true) {
        let childList = this.extractValue(item.subDesc);
        li.appendChild(childList);
      }
    });
    return ul;
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
  moveUp: function (current_id, items) {
    for (let i = 1; i < items.length; i++) {
      if (current_id == items[i].id) {
        [items[i], items[i - 1]] = [items[i - 1], items[i]];
        break;
      }
    }

    this.render(items);
  },
  moveDown: function (current_id, items) {
    for (let i = 0; i < this.items.length - 1; i++) {
      if (current_id == this.items[i].id) {
        [this.items[i], this.items[i + 1]] = [this.items[i + 1], this.items[i]];
        break;
      }
    }
    this.render();
  },
};
