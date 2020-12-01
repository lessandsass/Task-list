let bus = new Vue()

let Task = {
    props: ['task'],
    template: `
        <div class="task" :class="{ 'task--done': task.done }">

            {{ task.body }}

            <a href="#" @click.prevent="toggleDone(task.id)">Mark as {{ task.done ? 'not done' : 'done' }}</a>

        </div>
    `,
    methods: {
        toggleDone (taskId) {
            bus.$emit('task:toggleDone', taskId)
        }
    }
}

let Tasks = {
    components: {
        'task': Task
    },
    data () {
        return {
            tasks: [

                { id: 1, body: 'Task one', done: true },
                { id: 2, body: 'Task two', done: false }

            ]
        }
    },
    template: `
        <div>
            
            <div class="tasks">
                <template v-if="tasks.length">
                    <task v-for="task in tasks" :key="task.id" :task="task"></task>
                </template>
                <span v-else>No tasks</span>
            </div>

        </div>
    `,
    methods: {
        toggleDone (taskId) {

            let tasks = this.tasks.find((task) => {
                return task.id === taskId
            })

            console.log(task);
        }
    },
    mounted () {
        bus.$on('task:toggleDone', (taskId) => {
            this.toggleDone(taskId)
        })
    }
}

let app = new Vue({
    el: '#app',
    components: {
        'tasks': Tasks
    }
}); 