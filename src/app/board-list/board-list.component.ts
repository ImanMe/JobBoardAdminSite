import { BoardService } from './../services/board/board.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards;
  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getBoards()
      .subscribe(boards => this.boards = boards);
  }

}
