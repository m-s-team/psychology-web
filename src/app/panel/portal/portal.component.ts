import { Component, OnInit } from '@angular/core';
import { EChartsOption, graphic } from "echarts";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  option: EChartsOption = {
    // backgroundColor: '#303030',
    title: {
      text: 'مشخصات شخصیتی',
      show: false
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      indicator: [
        { name: 'گشودگی و استقبال از تجربه', max: 100 },
        { name: 'سازگاری', max: 100 },
        { name: 'ثبات احساسی', max: 100 },
        { name: 'وظیفه‌شناسی', max: 100 },
        { name: 'برون‌گرایی', max: 100 }
      ],
      splitNumber: 4,
      axisName: {
        color: '#777',
        backgroundColor: '#eee',
        borderRadius: 3,
        padding: [3, 5]
      },
      splitArea: {
        areaStyle: {
          // color: ['#353535', '#404040', '#454545']
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.2)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.2)'
        }
      }
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 6
          }
        },
        data: [
          {
            value: [90, 77, 69, 97, 43],
            name: 'Me',
            areaStyle: {
              color: new graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: 'rgba(81,219,245,0.1)',
                  offset: 0
                },
                {
                  color: 'rgba(141,174,255,0.3)',
                  offset: 1
                }
              ])
            }
          }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
