
// При формировании компонента мы не всегда можем точно знать куда он будет вставлен в верстке
// особенно если компонент нахордится на другой странице / сайдбарах / модальных окнах
// то есть то что мы не можем знать что будет внутри

// как указать в компоненте чтобы он рендерил ту структуру которую мы можем передать при вызове
// использовать св-во props.children

const DynamicGreating = (props) => {
  return (
      <div className={'mb-3 p-3 border border-' + props.color}>
              {props.children}
      </div>
  )
}

function App() {
  return (
    <Wrapper>
       <DynamicGreating color={'primary'}>
            <h2>This weel was hard</h2>
            <h2>Hello world!</h2>
        </DynamicGreating>
        <WhoAmI name='John' surname="Smith" link="facebook.com"/>
        <WhoAmI name='Alex' surname="Shepard" link="vk.com"/>
    </Wrapper>
  );
}

// React.children - передается как массив 
// можно более гибко натсроить используя методы массива

//cloneElement() - функция которая позволяет клонировать и возвращать новый Реакт элемент
// 3 аргумента
// 1 - сам элемент
// 2 - конфиг/ новые пропсы которые будут добавляться в клонированный элемент
// 3 - дети/ которые будут передиваться во внутрь компонента


// Вызывает функцию для каждого непосредственного потомка, содержащегося в children передавая их по очереди в thisArg. 
// Если children — это массив, он будет пройден, и функция будет вызвана для каждого потомка в массиве. 
// Если children равен null или undefined, этот метод вернёт null или undefined, а не массив.

// Если компонент классовый то передается this.props.children

import React, {Component} from 'react';
const DynamicGreating2 = (props) => {
  return (
      <div className={'mb-3 p-3 border border-' + props.color}>
              {
                React.Children.map(props.children, child => {
                  return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
                })
              }
      </div>
  )
}


// Можно передать компоненты в виде пропсов
// подробнее а файле App.js и BootstrapTest.js
// все это нужно для оптимизации процесса 

const DynamicGreating3 = (props) => {
  return (
      <div className={'mb-3 p-3 border border-' + props.color}>
          {
              React.Children.map(props.children, child => {
                  return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
              })
          }
      </div>
  )
}

function App() {
return (
  <Wrapper>
      <BootstrapTest
          left = {
              <DynamicGreating3 color={'primary'}>
                  <h2>This weel was hard</h2>
                  <h2>Hello world!</h2>
              </DynamicGreating3>
          }
          right = {
              <DynamicGreating3 color={'primary'}>
                  <h2>RIGHT!</h2>
              </DynamicGreating3>
          }
      />

      <WhoAmI name='John' surname="Smith" link="facebook.com"/>
      <WhoAmI name='Alex' surname="Shepard" link="vk.com"/>
  </Wrapper>
);
}



import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Button} from './App';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

ReactDOM.render(
  <StrictMode>
      <App/>
      <BigButton as="a">Отправить отчет</BigButton>
  </StrictMode>,
  document.getElementById('root')
);
