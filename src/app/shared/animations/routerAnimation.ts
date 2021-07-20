import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const routerAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%' })
    ], {optional: true}),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
      ], {optional: true}),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ], {optional: true})
    ]),
  ]),
])
