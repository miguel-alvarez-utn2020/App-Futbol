import { Component, Input, OnInit } from '@angular/core';
import { MonthsValues } from './enums/calendar';
import { monthlyArray } from './example/emotional-month';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-match-calendar',
  templateUrl: './match-calendar.component.html',
  styleUrls: ['./match-calendar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(300)]),
    ]),
  ],
})
export class MatchCalendarComponent implements OnInit {
  @Input() currentEmotionalDay = { day: '20', isMatch: true };
  @Input() userId!: number;
  currentYear!: number;
  currentMonth!: number;
  daysInMonth!: any[];
  firstDayOfWeek!: number;
  calendar: any[] = [];
  indexCurrentMonth = MonthsValues.JANUARY;
  loading: boolean = false;
  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Deciembre',
  ];

  daysLabels = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  emotionalType = [
    {
      label: 'Optimismo | Confianza | Felicidad',
      icon: 'assets/Ellipse-tranquilo.svg',
    },
    {
      label: 'Enojo | Tristeza | Disgusto',
      icon: 'assets/Ellipse-enojado.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth();
    this.indexCurrentMonth = this.currentMonth;
    this.setCalendar();
    this.setEmotionalDay();
  }

  updateDaysInMonth(): void {
    this.daysInMonth = Array(
      this.getDaysInMonth(this.currentYear, this.currentMonth)
    )
      .fill(null)
      .map((_, index) => index + 1);
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  getFirstDayOfWeek(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
  }

  updateFirstDayOfWeek(): void {
    this.firstDayOfWeek = this.getFirstDayOfWeek(
      this.currentYear,
      this.currentMonth
    );
  }

  setCalendar() {
    this.loading = true;
    this.calendar = new Array(35).fill('');
    this.updateDaysInMonth();
    this.updateFirstDayOfWeek();

    const emotionalMapData = {
      year: this.currentYear,
      month: this.indexCurrentMonth + 1,
    };

    this.daysInMonth = monthlyArray[this.indexCurrentMonth];

    for (let i = 0; i < this.daysInMonth.length; i++) {
      this.calendar[this.firstDayOfWeek + i] = this.daysInMonth[i];
    }
    console.log(this.calendar);
    this.loading = false;
  }

  getCurrentMonthNumber(): number {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Los meses en JavaScript son 0-indexados
    return currentMonth;
  }

  slideNextMonth() {
    if (this.indexCurrentMonth < MonthsValues.DECEMBER && !this.loading) {
      this.indexCurrentMonth++;
      this.setCalendar();
    }
  }

  slidePrevMonth() {
    if (this.indexCurrentMonth > MonthsValues.JANUARY && !this.loading) {
      this.indexCurrentMonth--;
      this.setCalendar();
    }
  }

  setEmotionalDay() {
    this.calendar.forEach((day: any) => {
      if (day.day === this.currentEmotionalDay.day) {
        day.isMatch = this.currentEmotionalDay.isMatch;
      }
    });
  }

  get checkNextMonth() {
    if (!(this.indexCurrentMonth < MonthsValues.DECEMBER)) {
      return false;
    } else {
      return true;
    }
  }

  get checkPrevMonth() {
    if (!(this.indexCurrentMonth > MonthsValues.JANUARY)) {
      return false;
    } else {
      return true;
    }
  }
}

