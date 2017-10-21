import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Expense } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';

@Injectable()
export class ExpenseService {

  constructor(private http: HttpClient) {}
  
  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${ environment.api }/expenses`);
  }

  deleteExpense(expense: Expense): Observable<Object> {
    return this.http.delete(`${ environment.api }/expense/${ expense.id }`);
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${ environment.api }/expense`, expense);
  }
  
  updateExpense(expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(`${ environment.api }/expense/${ expense.id }`, expense);
  }
}
