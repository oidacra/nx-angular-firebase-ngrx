import { HttpClient } from '@angular/common/http';
import { Recompensas } from '@vaki-challenge/interfaces';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

import { EMPTY, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'vaki-challenge-detail-cart',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.scss'],
})
export class DetailCartComponent implements OnInit, OnDestroy {
  recompensasForm = this.formBuilder.group({
    recompensas: this.formBuilder.array([]),
  });

  @Input() set cartItems(recompensas: Recompensas[]) {
    this._recompensas = recompensas;

    this.createFormArray(recompensas);
    this.totalOrden = recompensas.reduce((acc, val) => {
      return acc + val.qty * parseFloat(val.precio);
    }, 0);
  }

  _recompensas: Recompensas[];
  totalOrden = 0;

  displayedColumns: string[] = ['titulo', 'qty', 'precio'];

  sub: Subscription;

  private __currentControlData;

  get recompensas(): FormArray {
    return this.recompensasForm.get('recompensas') as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit() {
    this.sub = this.recompensasForm.valueChanges.subscribe((result) => {
      this.totalOrden = result.recompensas.reduce((acc, val) => {
        return acc + val.qty * parseFloat(val.precio);
      }, 0);
    });
  }
  private createFormArray(items: Recompensas[]) {
    items.forEach((item: Recompensas) => {
      this.recompensas.push(this.setFormArrayItems(item));
    });
  }
  private setFormArrayItems(item: Recompensas) {
    return this.formBuilder.group({
      id: [item.id],
      titulo: [item.titulo],
      qty: [item.qty, [Validators.max(item.existencias)]],
      precio: [item.precio],
    });
  }
  checkoutPage() {
    alert('Por implementar');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
