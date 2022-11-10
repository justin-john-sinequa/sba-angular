import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { SearchService } from "@sinequa/components/search";
import { AbstractFacet } from '@sinequa/components/facet';
import { AppService } from "@sinequa/core/app-utils";
import { NotificationsService } from "@sinequa/core/notification";
import { Answer, AuditEvent, AuditWebService, Results, Record } from "@sinequa/core/web-services";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'sq-answer-card',
  templateUrl: 'answer-card.component.html',
  styles: [`
.card-body {
  cursor: pointer;
}
  `]
})
export class AnswerCardComponent extends AbstractFacet implements OnChanges {
  @Input() results: Results;
  @Input() collapsed: boolean;
  @Input() showLikeButtons: boolean;
  @Output() previewOpened = new EventEmitter<Answer>();
  @Output() titleClicked = new EventEmitter<{ item: Answer, isLink: boolean }>();
  selectedAnswer: number;

  answer$ = new BehaviorSubject<Answer | undefined>(undefined);

  get answers(): Answer[] {
    return this.results?.answers?.answers || [];
  }

  constructor(
    public searchService: SearchService,
    public appService: AppService,
    public auditService: AuditWebService,
    public notificationsService: NotificationsService
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedAnswer = 0;
    this.setAnswer();
  }

  openPreview(answer: Answer) {
    this.previewOpened.next(answer);
  }

  onTitleClicked(isLink: boolean, answer: Answer) {
    this.titleClicked.next({ item: answer, isLink });
  }

  previous() {
    this.selectedAnswer = (this.selectedAnswer+this.answers.length-1) % this.answers.length;
    this.setAnswer();
  }

  next() {
    this.selectedAnswer = (this.selectedAnswer+1) % this.answers.length;
    this.setAnswer();
  }

  setAnswer() {
    const answer = this.answers[this.selectedAnswer];
    if (!!answer.$record) {
      this.answer$.next(answer);
    } else {
      // Get the missing record
      this.searchService.getRecords([answer.recordId])
      .subscribe((records) => {
        if (records) {
          answer.$record = (records as Record[])[0];
        }
        this.answer$.next(answer);
      });
    }
  }

  likeAnswer(answer: Answer) {
    this.setLiked(answer, true);
  }

  dislikeAnswer(answer: Answer) {
    this.setLiked(answer, false);
  }

  setLiked(answer: Answer, liked: boolean) {
    const type = liked? "Answer_Liked" : "Answer_Disliked";
    if(answer.$liked === liked) {
      answer.$liked = undefined;
      this.auditService.notify(this.makeAuditEvent(type+"_Cancelled", answer))
        .subscribe();
    }
    else {
      answer.$liked = liked;
      this.auditService.notify(this.makeAuditEvent(type, answer))
        .subscribe(() => this.notificationsService.success("Thank you for your feedback!"));
    }
    this.answer$.next(answer);
  }

  protected makeAuditEvent(type: string, answer: Answer): AuditEvent {
    return {
      type,
      detail: {
          text: this.searchService.query.text,
          message: answer.text,
          detail: answer.passage.highlightedText,
          resultcount: this.answers.length,
          rank: this.selectedAnswer
      }
    }
  }
}
