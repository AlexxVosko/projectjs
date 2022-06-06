
// Композиция (Специализация) - совмещение компонентов и передача новых свойств/ функциональности / вид на базе 
// уже существующих компонентов 

// Чем композиция лучше чем наследование в Реакте? Что используется чаще

// всегда используется композиция/ в Реакте есть все втроенные возможности для использования композиций







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


const HelloGreating = () =>{
    return (
        <div style={{'width': '600px', 'margin': '0 auto'}}>
            <DynamicGreating color={'primary'}>
                <h2>This weel was hard</h2>
            </DynamicGreating>
        </div>
    )
}


function App() {
    return (
      <Wrapper>
          <HelloGreating/>
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