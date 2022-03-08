import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase} from '@angular/fire/compat/database';
import {Observable, take} from 'rxjs';
import validate = WebAssembly.validate;

export interface Inhalt11Data {
  id: number;
  keyValuePairs: KeyValue<any, any>[];
}

export interface KeyValue<a, k> {
  key: a;
  value: k;
}

@Component({
  selector: 'app-inhalt11',
  templateUrl: './inhalt11.component.html',
  styleUrls: ['./inhalt11.component.scss']
})
export class Inhalt11Component implements OnInit {
  displayedColumns: string[] = ['key', 'value'];
  inhalt: Observable<any> = this.db.object('/inhalt/inhalt11').valueChanges();
  dataSource: KeyValue<any, any>[] = [];
  currenSelection = 'create';
  inputValue = '{key}:{value}';
  message: any;

  constructor(public db: AngularFireDatabase){}

  ngOnInit(): void {
    this.inhalt.subscribe(val => {
      const data: Inhalt11Data = val;
      this.dataSource = Object.entries(data.keyValuePairs).map(value => value[1]);
      console.log(this.dataSource);
    });
  }

  public setInputHints(evt: any): void {
    switch (evt.value) {
      case 'create' : this.inputValue = '{key}:{value}'; break;
      case 'read' : this.inputValue = '{key}'; break;
      case 'update' : this.inputValue = '{key}:{value}'; break;
      case 'delete' : this.inputValue = '{key}'; break;
      default: break;
    }
  }

  public createFirebaseRequest(): void {
    switch (this.currenSelection) {
      case 'create' : this.firebaseCreate(this.inputValue.split(':')[0], this.inputValue.split(':')[1]); break;
      case 'read' : this.firebaseRead(this.inputValue); break;
      case 'update' : this.firebaseUpdate(this.inputValue.split(':')[0], this.inputValue.split(':')[1]); break;
      case 'delete' : this.firebaseDelete(this.inputValue); break;
      default: break;
    }
  }

  private firebaseCreate(keyValue: string, nodeValue: string): void {
    if (!keyValue || !nodeValue || this.dataSource.find(val => val.key.toString() === keyValue)) {
      this.message = 'Fehlerhafte Eingabe oder Schlüssel bereits vorhanden!';
      return;
    }
    this.db.object('/inhalt/inhalt11/keyValuePairs/' + keyValue)
      .set({ key: keyValue, value: nodeValue });
    this.message = 'Erfolgreich Create ausgeführt.';
  }

  private firebaseRead(keyValue: string = null): void {
    if (!keyValue) {
      this.message = 'Fehlerhafte Eingabe!';
      return;
    }
    this.db.object('/inhalt/inhalt11/keyValuePairs/' + keyValue)
      .valueChanges().pipe(take(1)).subscribe(result => this.message = 'Ergebnis: ' + JSON.stringify(result));

  }

  private firebaseUpdate(keyValue: string = null, nodeValue: string = null): void {
    if (!keyValue || !nodeValue || !this.dataSource.find(val => val.key.toString() === keyValue)) {
      this.message = 'Fehlerhafte Eingabe oder Datensatz nicht vorhanden!';
      return;
    }
    this.db.object('/inhalt/inhalt11/keyValuePairs/' + keyValue)
      .update({ key: keyValue, value: nodeValue });
    this.message = 'Erfolgreich Update ausgeführt.';
  }

  private firebaseDelete(keyValue: string = null): void {
    if (!keyValue || !this.dataSource.find(val => val.key.toString() === keyValue)) {
      this.message = 'Fehlerhafte Eingabe oder Datensatz nicht vorhanden!';
      return;
    }
    this.db.object('/inhalt/inhalt11/keyValuePairs/' + keyValue).remove();
    this.message = 'Erfolgreich Delete ausgeführt.';
  }
}
