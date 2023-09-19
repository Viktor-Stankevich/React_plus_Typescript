import React from 'react';
import logo from './logo.svg';
import './App.css';

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


const App = () => <Title title="test" />

export default App;
