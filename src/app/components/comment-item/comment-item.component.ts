import { Component, OnInit, Input } from '@angular/core';
import { CommentItem } from '../../models/comment-item.model'
@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() commentItem: CommentItem;
  constructor() {
  }

  ngOnInit() {
  }

}
