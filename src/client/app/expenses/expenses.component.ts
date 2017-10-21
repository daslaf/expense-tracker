import { Component, OnInit } from '@angular/core';

import { ExpenseService } from '../core/services/expense.service';
import { Expense } from '../shared/shared.module';

@Component({
  selector: 'expenses',
  template: `
    <h1>Yo!</h1>
    <div *ngFor="let expense of expenses">
      <h2>{{ expense.id }} {{ expense.description }}</h2>
      <p>Date: {{ expense.date | date }}</p>
      <span *ngFor="let category of expense.categories">{{ category }}, </span>
    </div>
  `
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[];

  constructor( private expenseService: ExpenseService ) {}

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    this.expenseService.getExpenses().subscribe((expenses: Expense[]) => {
      this.expenses = expenses;
    });
  }
}