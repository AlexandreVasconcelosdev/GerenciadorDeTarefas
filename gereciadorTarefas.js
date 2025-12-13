class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
        this.status = false;
    }
}

class gerenciamentoTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(descricao) {
        const tarefa = new Tarefa(descricao);
        this.tarefas.push(tarefa);
    }

    tarefasConcluida(indice) {
        if (this.tarefas[indice]) {
            this.tarefas[indice].status = true;
        } else {
            console.log('Índice inválido');
        }
    }
    listarPendentes() {
        return this.tarefas.filter(tarefa => !tarefa.status);
    }

    listarConcluidas() {
        return this.tarefas.filter(tarefa => tarefa.status);
    }

    listarTodos() {
        return this.tarefas.map((tarefa, index) => {
            return ${index} - ${tarefa.descricao} [${tarefa.status ? 'feita' : 'Pendente'}];
        });
    }
}

const g = new gerenciamentoTarefas();

g.adicionarTarefa('Comprar pão');
g.adicionarTarefa('Correr na praia');

console.log(g.listarPendentes());

g.tarefasConcluidas(0);

console.log(g.listarConcluidas());
console.log(g.listarTodos());