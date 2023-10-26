import { AfterViewInit, Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import {
  ANSWERS_QUESTIONS,
  Answer,
  AnswersQuestions,
} from './constants/constants';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IonSlides, ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { valorizePlayer } from '@app/state/actions';

@Component({
  selector: 'app-questions-player-value',
  templateUrl: './questions-player-value.component.html',
  styleUrls: ['./questions-player-value.component.scss'],
})
export class QuestionsPlayerValueComponent implements OnInit, AfterViewInit{

 
  @ViewChild('slides') slides: IonSlides;
  @Input() props : {groupId: string, playerId: string};
  
  private fb = inject(FormBuilder);
  private modalController = inject(ModalController);
  private store = inject(Store<AppState>)
  questionForm: FormGroup;
  answersQustions: AnswersQuestions[] = [...ANSWERS_QUESTIONS];
  historyActiveIndex: any[] = [];
  validSteps: boolean[] = [];
  indexStep: number = 0;
  indexSlide: number = 0;
  
  slideOptions = {
    initialSlide: 0,
    speed: 600,
    autoplay: 200,
  };

  ngOnInit(): void {
    this.initValidSteps();
    this.initquestionForm();
  }

  ngAfterViewInit(): void {
    this.slides.lockSwipeToNext(true);
    this.slides.lockSwipeToPrev(true);
  }

  selectAnswer(event: {index: number, answer: Answer}) {
    const questionsFilter = this.filterAnswers(event);
    const answers = questionsFilter[questionsFilter.answersKey];
    let indexAnswersHistory = questionsFilter.indexAnswersHistory;

    if (!indexAnswersHistory.length) {
      indexAnswersHistory.push(event.index);
      answers[event.index].active = true;
      this.validSteps[this.indexStep] = true;
    } else {
      indexAnswersHistory.push(event.index);
      if (indexAnswersHistory.length >= 3) {
        indexAnswersHistory = indexAnswersHistory.slice(
          indexAnswersHistory.length - 2
        );
      }
      const [oldIndex, newIndex] = indexAnswersHistory;
      answers[oldIndex].active = false;
      answers[newIndex].active = true;
      this.validSteps[this.indexStep] = true;
    }
  }

  filterAnswers(event) {
    const filter = this.answersQustions.filter((answers) => {
      return answers[event.answer.fcName] !== undefined;
    });
    
    return filter[0];
  }

  slideNext() {
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext();
  }

  slidePrev() {
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev();
  }

  async ionSlideNextStart(event) {
    const swiperIndex = await event.target.getSwiper();
    this.indexSlide = swiperIndex.realIndex;
    this.indexStep = this.indexSlide;
  }

  async ionSlidePrevStart(event) {
    const swiperIndex = await event.target.getSwiper();
    this.indexSlide = swiperIndex.realIndex;
    this.indexStep = this.indexSlide;
  }

  ionSlidePrevEnd(event){
    this.slides.lockSwipeToPrev(true);
  }

  ionSlideNextEnd(event){
    this.slides.lockSwipeToNext(true);
  }

  savePlayer(){
    const { groupId, playerId } = this.props;
    const valorization = this.questionForm.value;
      if(this.questionForm.valid){
        this.store.dispatch(valorizePlayer({groupId, playerId, valorization}));
      }
  }

  close = () =>{
    this.modalController.dismiss();
  }

  initValidSteps() {
    this.validSteps = this.answersQustions.map(() => false);
  }

  initquestionForm() {
    this.questionForm = this.fb.group({
      speed: [''],
      def: [''],
      drible: [''],
      shot: [''],
      teamPlay: [''],
    });
  }
}
