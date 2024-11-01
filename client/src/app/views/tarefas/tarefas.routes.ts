import {Routes} from '@angular/router';
import {ListagemTarefasComponent} from './listar/listagem-tarefas.component';
import {listagemTarefasResolver} from './services/listagem-tarefas.resolver';
import {CadastroTarefaComponent} from './cadastrar/cadastro-tarefa.component';
import {EdicaoTarefaComponent} from './editar/edicao-tarefa.component';
import {visualizarTarefaResolver} from './services/visualizar-tarefa.resolver';
import {ExclusaoTarefaComponent} from './excluir/exclusao-tarefa.component';

export const tarefasRoutes: Routes = [
  {path: '', redirectTo: 'listar', pathMatch: 'full'},
  {
    path: 'listar',
    component: ListagemTarefasComponent,
    resolve: {tarefas: listagemTarefasResolver},
  },
  {
    path: 'cadastrar',
    component: CadastroTarefaComponent,
  },
  {
    path: 'editar/:id',
    component: EdicaoTarefaComponent,
    resolve: {
      tarefa: visualizarTarefaResolver,
    },
  },
  {
    path: 'excluir/:id',
    component: ExclusaoTarefaComponent,
    resolve: {
      tarefa: visualizarTarefaResolver,
    },
  },
];
