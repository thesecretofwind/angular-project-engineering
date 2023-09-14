import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component'
import { SharedModule } from 'app/shared/shared.module'

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [CommonModule, SharedModule],
})
export class ThemeModule {}
// interface a {
//   name: string;
//   age: number;
// }

// interface b {
//   sex: boolean;
// }

// type c = a & b;

// const aa:a = {
//   name:'jack',
//   age:3
// }
// const bb = {
//   sex: false
// }

// const c22 = Object.assign(aa, bb);
// const cc: c = c22

type A = { name: string }
type B = { age: number }
type C = A & B
const aa: C[] = [
  {
    name: 'jack',
    age: 3,
  },
]
console.log(aa)

const COLORS = {
  red: 'red',
  blue: 'blue',
}
type Colors = keyof typeof COLORS
let color: Colors
color = 'red'
color = 'blue'
// color = 'yellow'
console.log(typeof COLORS, color)

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => o[n])
}

interface Person {
  name: string
  age: number
}

const person: Person = {
  name: 'jack',
  age: 25,
}
// type a = keyof Person[]
// const cc:a = 'name'

const strings: string[] = pluck(person, ['name', 'name', 'name'])
console.log(strings)

function props<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const name = props(person, 'name')
console.log(name)
