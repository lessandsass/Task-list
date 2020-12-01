let Task = {
    props: ['task'],
    template: `
        <div class="task">

            {{ task.body }}

        </div>
    `
}

let Tasks = {
    components: {
        'task': Task
    },
    data () {
        return {
            tasks: [

                { id: 1, body: 'Task one', done: false },
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
    `
}

let app = new Vue({
    el: '#app',
    components: {
        'tasks': Tasks
    }
}); 