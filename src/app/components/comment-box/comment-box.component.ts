import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitComment(comment) {
    this.submit.emit(comment.value);
    comment.value = '';
  }

}
