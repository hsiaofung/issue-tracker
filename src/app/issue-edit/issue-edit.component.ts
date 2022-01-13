import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css'],
})
export class IssueEditComponent implements OnInit {
  @Input() issueNo: number | null = null;
  @Output() closeForm = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
