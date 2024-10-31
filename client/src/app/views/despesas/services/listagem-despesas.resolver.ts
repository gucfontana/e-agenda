import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ListarDespesaViewModel } from '../models/despesa.models';
import { DespesaService } from './despesa.service';

export const listagemDespesasResolver: ResolveFn<
  ListarDespesaViewModel[]
> = () => {
  return inject(DespesaService).selecionarTodos();
};
