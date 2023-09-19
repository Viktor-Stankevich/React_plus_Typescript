import React, { useEffect, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribe } from 'diagnostics_channel';

// LESSON #1

// Для того чтобы определить функцию как React компонент
// нужно задать её тип "React.FunctionComponent" или "React.FC"

// const Title:React.FunctionComponent = () => <h1>Hello world!</h1>

// const Title: React.FC = () =>                            // <--- Error

// Функция дожна что-то возвращять
// const Title: React.FC = () => null                       // <--- Valid
// const Title: React.FC = () => <h1>Hello world!</h1>      // <--- Valid

// Описание пропсов
// Generic типы
// const Title: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>

// Оптимальней использовать "type" или "interface"
// type
// type TitleProps = {
//   title: string,
//   test?: string
// }

// В таком случае нет смыслы описывать функцию как "React.FC"
// const Title = ({ title, test = 'test' }: TitleProps) => <h1>{title}{test}</h1>

//________________________________________________________________________________________

// LESSON #2
// Типизация событий

// const App: React.FC = () => {

//   const [count, setCount] = useState(0);

//   const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
//     console.log(`${e.clientX}, ${e.clientY}`)
//     setCount((count) => count += 1)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>+1</button>
//       <a href="#" onClick={handleClick}>Linlk</a>
//     </>
//   )

// }


// const App = () => <Title title="test" />

//________________________________________________________________________________________

// LESSON #3
// Типизация хуков
const App: React.FC = () => {

  // -----------useState------------
  // Если ипользуется простое значение то типизация не трубуется
  // const [value, setValue] = useState(0);

  // Если значение комплексоное или может отсутствовать то типизация нужна

  // const [value, setValue] = useState<number | undefined>(undefined);
  // const [value, setValue] = useState<Array<number>>([]);

  // Или использовать "type" или "inteface"

  // interface IUser {
  //   name: string;
  //   age?: number
  // }

  // const [value, setValue] = useState<IUser>({ name: 'Viktor' })

  // ---------- useRef -----------
  // const ref1 = useRef<HTMLElement>(null!);
  // const ref2 = useRef<HTMLElement | null>(null)

  // ---------- useContext -----------
  // Это чистая функция и не требует типизации

  // ---------- useReducer ----------
  // interface State { count: number; }

  // type Action = { type: 'increment' | 'decrement' }

  // const counterReducer = ({ count }: State, { type }: Action) => {
  //   switch (type) {
  //     case 'increment': return { count: count + 1 };
  //     case 'decrement': return { count: count - 1 };
  //     default: return {};
  //   }
  // };

  // const [state, dispatch] = useReducer(counterReducer, { count: 0 });


  // dispatch({ type: 'increment' })
  // dispatch({ type: 'decrement' })

  // ---------- useCallback & useMemo ----------
  // Чистые функции. Явная типизация не трубуется

  // ---------- useEffect & useLayoutEffect ----------
  // Явная типизация не требуется

  // useEffect(() => {
  //   const subscriber = subscribe(options);
  //   return () => {
  //     unsubscribe();
  //   }
  // }, [options])

  return null

}

export default App;
