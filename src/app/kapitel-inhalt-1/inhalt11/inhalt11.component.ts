import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase} from '@angular/fire/compat/database';
import {Observable} from 'rxjs';

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
  dataSource: KeyValue<string, string>[];

  constructor(public db: AngularFireDatabase){}

  ngOnInit(): void {
    this.inhalt.subscribe(val => {
      const data: Inhalt11Data = val;
      this.dataSource = data.keyValuePairs;
    });
  }


}
