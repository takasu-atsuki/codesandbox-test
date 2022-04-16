import "./styles.css";

class Todo {
  constructor() {
    this.todos = [
      {
        id: 1,
        task: "勉強",
        finishe: false
      },
      {
        id: 2,
        task: "片付け",
        finishe: false
      },
      {
        id: 3,
        task: "読書",
        finishe: true
      }
    ];
    this.createbutton = document.getElementById("todo_create_button");
    this.update_tag_list = document.getElementById("todo_update_tag");
    this.complete_task_list = document.getElementById("complete-task-list");
    this._init();
    this._addEvent();
  }
  _init() {
    this.todos.forEach((object) => {
      if (!object.finishe) {
        const update_tag = `<li class="list"><div class="list-row"><p>${object.task}</p><button>完了</button><button>削除</button></div></li>`;
        this.update_tag_list.innerHTML += update_tag;
      } else {
        const update_tag = `<li class="list"><div class="list-row"><p>${object.task}</p><button>戻す</button></div></list>`;
        this.complete_task_list.innerHTML += update_tag;
      }
    });
  }
  _addEvent() {
    this.createbutton.addEventListener("click", this.createTodo.bind(this));
  }
  createTodo() {
    const create_todo = document.getElementById("todo").value;
    this.todos.push({
      id: this.todos.length - 1,
      task: create_todo,
      finishe: false
    });
    console.log(this.todos);
    this._init();
  }
}

new Todo();
