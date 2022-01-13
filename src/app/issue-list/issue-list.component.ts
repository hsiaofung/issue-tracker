import { Issue } from 'src/app/issue';
import { issues } from './../../assets/mock-issues';
import { IssuesService } from './../issues.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;
  selecetedIssue: Issue | null = null;
  editedIssue: Issue | null = null;

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selecetedIssue) {
      this.issueService.completeIssue(this.selecetedIssue);
      this.getIssues();
    }
  }
}
