import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: no-output-rename
  @Output('search') searchEmiter = new EventEmitter<string>();

  search = new FormControl('');


  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(300)
    )
    .subscribe(value => this.searchEmiter.emit(value));
  }



}
