// if (localStorage.getItem('users') != undefined)
//     this.users = [...JSON.parse(localStorage.getItem('users'))];

const users = {
    users: [],
    list: document.querySelector('table tbody'),
    form: document.querySelector("#user_form"),
    rowCount: document.getElementById('myTableID'),
    get: function (created) {
        let formData = new FormData(this.form);

        // name: this.form.name.value ?? 'name',
        // username: this.form.username.value ?? 'username',
        // email: this.form.email.value ?? 'email',
        // phone: this.form.number.value ?? 'phone number',


        let user = {
            sl: 1,
            name: formData.get('name') ?? 'name',
            // name: this.form.name.value,
            username: formData.get('username') ?? 'username',
            email: formData.get('email') ?? 'email',
            phone: formData.get('number') ?? 'phone number',
            status: 'Inactive',
            created: created ?? new Date().toLocaleString(),
            isDeleted: 0,
        }
        return user;
    },
    render: function (users) {
        if (localStorage.getItem('users') != undefined)
            this.users = [...JSON.parse(localStorage.getItem('users'))];

        this.list.innerHTML = ''
        let row, btn_view, btn_edit, btn_remove, btn_disable;

        this.users.forEach((user, index) => {

            user.sl = this.list.rows.length + 1;

            if (user.isDeleted == false) {
                btn_view = document.createElement('button')
                btn_edit = document.createElement('button')
                btn_remove = document.createElement('button')
                btn_disable = document.createElement('button')

                btn_view.innerText = 'View';
                btn_edit.innerText = 'Edit';
                btn_remove.innerText = 'Remove';
                btn_disable.innerText = 'Disable';

                row = this.list.insertRow(-1);

                Object.values(user).forEach((text, index) => {
                    if (Object.keys(user).length - 1 == index) {
                        row.insertCell(index).append(btn_view, btn_edit, btn_remove, btn_disable)
                    }
                    if (text != 0) {
                        row.insertCell(index).innerHTML = text;
                        console.log(index);
                    }
                })

                if (user.status == 'Active') {
                    btn_disable.innerText = 'Able';
                    btn_disable.style.backgroundColor = "grey"
                }

                btn_view.addEventListener('click', () => {
                    localStorage.setItem('user', JSON.stringify(user))
                    location.href = './showUser.html'
                })

                btn_disable.addEventListener('click', () => {
                    let index = this.users.indexOf(user)
                    if (this.users[index].status == 'Inactive') {
                        this.users[index].status = 'Active'
                    } else {
                        this.users[index].status = 'Inactive'
                    }
                    localStorage.setItem('users', JSON.stringify(this.users))
                    this.render()
                })

                btn_remove.addEventListener('click', () => {
                    if (confirm("Are you sure? you want to delete it!")) {
                        let index = this.users.indexOf(user)
                        if (this.users[index].isDeleted == 0) {
                            this.users[index].isDeleted = 1
                        }
                        localStorage.setItem('users', JSON.stringify(this.users))
                        this.render()
                    }
                })
                btn_edit.addEventListener('click', () => this.edit(this.users.indexOf(user)))
            }
        })
    },
    search: function () {
        const valueToSearch = document.querySelector('section:nth-child(2) input')
        let filter, search;
        filter = valueToSearch.value.toUpperCase();

        const tr = [...this.list.querySelectorAll('tr')]

        tr.forEach((item) => {
            search = item.querySelectorAll("td:not(:first-child):nth-child(-n+4)");
            if ((search[0].innerText.toUpperCase().includes(filter)) ||
                (search[1].innerText.toUpperCase().includes(filter)) ||
                (search[2].innerText.toUpperCase().includes(filter))) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    },
    edit: function (currentUserIndex) {
        cValue = this.users[currentUserIndex]
        const add = document.querySelector('input[type=submit]')
        const save = document.querySelector('input[type=button]')
        add.style.display = 'none'
        save.style.display = ''

        const form = document.querySelector("#user_form");

        form.name.value = cValue.name
        form.username.value = cValue.username
        form.email.value = cValue.email
        form.number.value = cValue.phone

        save.addEventListener('click', () => {
            let updatedValue = this.get(cValue.created);
            this.users[currentUserIndex] = updatedValue
            add.style.display = ''
            save.style.display = 'none'
            localStorage.setItem('users', JSON.stringify(this.users))
            this.users = [...JSON.parse(localStorage.getItem('users'))];
            this.render()
        })
    },
}
users.render()
users.form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = users.get()
    if (user.name == '' || user.username == '' || user.email == '' || user.phone == '') {
        alert("Please enter all fields")
        return;
    }

    users.users.push(user)
    localStorage.setItem('users', JSON.stringify(users.users))
    users.render()
});