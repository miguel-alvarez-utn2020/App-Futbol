import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RegisterGroupComponent } from './register-group/register-group.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JoinGroupComponent } from './join-group/join-group.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { RegisterMathComponent } from './register-math/register-math.component';
import { FieldComponent } from './field/field.component';
import { PlayerFabComponent } from './player-fab/player-fab.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ItemPlayerComponent } from './item-player/item-player.component';
import { QuestionsPlayerValueComponent } from './questions-player-value/questions-player-value.component';
import { BtnAnswerComponent } from './btn-answer/btn-answer.component';
import { QuestionHeaderComponent } from './questions-player-value/question-header/question-header.component';
import { QuestionCardComponent } from './questions-player-value/question-card/question-card.component';

const component = [
  RegisterGroupComponent,
  JoinGroupComponent,
  ItemGroupComponent,
  RegisterMathComponent,
  FieldComponent,
  PlayerFabComponent,
  UploadImageComponent,
  ItemPlayerComponent,
  QuestionsPlayerValueComponent,
  BtnAnswerComponent,
  QuestionHeaderComponent,
  QuestionCardComponent,
];

@NgModule({
  declarations: [...component],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...component],
})
export class ComponentsPageModule {}
