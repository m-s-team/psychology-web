import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss']
})
export class AssessmentsComponent implements OnInit {

  public assessmentTypes: AssessmentType[] = [
    {
      title: "شخصیت",
      assessments: [
        {
          title: "MMPI",
          route: "",
          subtitle: "تست شخصیت شناسی چندوجهی مینه‌سوتا (فرم بلند)",
          time: 60,
          count: 556,
          age: 16,
          enabled: false
        },
        {
          title: "MMPI 2",
          route: "",
          subtitle: "تست شخصیت شناسی چندوجهی مینه‌سوتا (فرم کوتاه)",
          time: 60,
          count: 71,
          age: 16,
          enabled: false
        },
        {
          title: "NEO-PIR",
          route: "",
          subtitle: "بررسی 5 فاکتور بزرگ شخصیت شامل برون گرایی، عصبانیت، وظیفه شناسی، گشودگی و توافق پذیری",
          time: 40,
          count: 240,
          age: 12,
          enabled: false
        },
        {
          title: "NEO-FFI",
          route: "",
          subtitle: "بررسی 5 فاکتور بزرگ شخصیت شامل برون گرایی، عصبانیت، وظیفه شناسی، گشودگی و توافق پذیری",
          time: 15,
          count: 60,
          age: 12,
          enabled: false
        },
        {
          title: "MBTI",
          route: "",
          subtitle: "آزمون شخصیت‌شناسی مایرز-بریگز",
          time: 15,
          count: 60,
          age: 13,
          enabled: false
        }
      ]
    },
    {
      title: "هوش",
      assessments: [
        {
          title: "WAIS-IV",
          route: "waisiv",
          subtitle: "تست هوش وکسلر بزرگسالان نسخه چهارم",
          time: 80,
          count: 80,
          age: 16,
          enabled: true
        },{
          title: "WISC-V",
          route: "",
          subtitle: "تست هوش وکسلر کودکان نسخه پنجم",
          time: 80,
          count: 80,
          age: 6,
          enabled: false
        },{
          title: "WPPSI",
          route: "",
          subtitle: "تست هوش وکسلر پیش دبستانی",
          time: 80,
          count: 80,
          age: 3,
          enabled: false
        },
        {
          title: "Gardner",
          route: "",
          subtitle: "تست هوش چندگانه گاردنر",
          time: 20,
          count: 80,
          age: 16,
          enabled: false
        },
        {
          title: "James Barrett",
          route: "barrett",
          subtitle: "تست استعداد جیمز برت",
          time: 120,
          count: 105,
          age: 9,
          enabled: true
        },
      ]
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

interface Assessment {
  title: string;
  route: string;
  subtitle: string;
  time: number;
  count: number;
  age: number;
  enabled: boolean;
}

interface AssessmentType {
  title: string;
  assessments: Assessment[];
}
