const users = {
    users: [],
    list: document.querySelector('table tbody'),
    form: document.querySelector("#user_form"),
    get: function () {
        let formData = new FormData(form);
        console.log(form.getAll());
        let user = {
            sl: 1,
            name: formData.get('name'),
            username: formData.get('username'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            status: 'Inactive',
            isDeleted: false,
            created: new Date().toLocaleString(),
        }
        return user;
    },
    add: function () {
        if (localStorage.getItem('users') != undefined)
            this.users = [...JSON.parse(localStorage.getItem('users'))];

        this.sl = this.users.length

        let form = document.querySelector('form')

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const user = users.get()

            if (user.sl == '' || user.name == '' || user.username == '' || user.email == '' || user.phone == '') {
                alert("Please enter all fields")
                return;
            }

            users.users.push(user)
            localStorage.setItem('users', JSON.stringify(users.users))
            users.users.render()
        })
    },
    render: function (users) {
        if (localStorage.getItem('users') != undefined)
            this.users = [...JSON.parse(localStorage.getItem('users'))];

        this.list.innerHTML = ''
        this.users.forEach((user, index) => {
            if (user.isDeleted == false) {

                const row = this.list.insertRow(-1);
                const sl = row.insertCell(0)
                const name = row.insertCell(1)
                const username = row.insertCell(2)
                const email = row.insertCell(3)
                const phone = row.insertCell(4)
                const status = row.insertCell(5)
                const created = row.insertCell(6)
                const action = row.insertCell(7)

                const btn_view = document.createElement('button')
                const btn_edit = document.createElement('button')
                const btn_remove = document.createElement('button')
                const btn_disable = document.createElement('button')

                sl.innerText = index - localStorage.length
                name.innerText = user.name
                username.innerText = user.username
                email.innerText = user.email
                phone.innerText = user.phone
                status.innerText = user.status
                created.innerText = user.created
                action.append(btn_view, btn_edit, btn_remove, btn_disable)

                btn_view.innerText = 'View';
                btn_edit.innerText = 'Edit';
                btn_remove.innerText = 'Remove';
                btn_disable.innerText = 'Disable';

                if (user.status == 'Inactive') {
                    btn_disable.innerText = 'Able';
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
                        if (this.users[index].isDeleted == false) {
                            this.users[index].isDeleted = true
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
        filter = valueToSearch.value.toLowerCase();

        const tr = [...this.list.querySelectorAll('tr')]

        tr.forEach((item) => {
            search = item.querySelectorAll("td:not(:first-child):nth-child(-n+4)");
            if ((search[0].innerText.includes(filter)) ||
                (search[1].innerText.includes(filter)) ||
                (search[2].innerText.includes(filter))) {
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
        form.elements[0].value = cValue.name
        form.elements[1].value = cValue.username
        form.elements[2].value = cValue.email
        form.elements[3].value = cValue.phone

        save.addEventListener('click', () => {
            let updatedValue = this.get();
            this.users[currentUserIndex] = updatedValue
            add.style.display = ''
            save.style.display = 'none'
            localStorage.setItem('users', JSON.stringify(this.users))
            this.users = [...JSON.parse(localStorage.getItem('users'))];
            this.render()
            // this.form.reset()
        })
    },
}
users.add()
users.render()


