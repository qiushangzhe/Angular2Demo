import { Component, OnInit } from '@angular/core';
import { CommentItem } from '../../models/comment-item.model';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentList: Array<any> = [
    new CommentItem('邱上哲1号', '2016-10-20 12:32', '大家好，我是一个邱上哲，这里是我的第一条留言，请为我点赞。'),
    new CommentItem('邱上哲2号', '2013-05-31 19:10', '大家好，我是一个邱上哲，这里是我的第二条留言，请为我点赞。')
  ]
  constructor() { }

  ngOnInit() {
  }

  addComment(comment: String) {
    this.commentList.push(new CommentItem('邱上哲', new Date().toString(), comment));
  }

}
