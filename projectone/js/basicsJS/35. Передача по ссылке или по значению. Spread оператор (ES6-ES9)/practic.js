/* Задачи на работу с объектами */
/*
<p>1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.</p>
<p><code>showExperience(personalPlanPeter)</code> =&gt; <em>'1 month'</em></p>
<p>P.S. желательно использовать деструктуризацию, но не обязательно</p>\

<p>2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.</p>
<p><code>showProgrammingLangs(personalPlanPeter)</code>&nbsp; =&gt; </p>
<p><em>"Язык js изучен на 20%
Язык php изучен на 10%"</em></p>
<p>Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.</p>
<p>P.S. Для переноса строки используется <strong>\n </strong>в конце строки.</p>

<p>3) Создайте <strong>метод</strong> <code>showAgeAndLangs</code> внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и <strong>возвращать</strong> строку в нужном виде. </p>
<p>=&gt; <em>'Мне 29 и я владею языками: RU ENG'</em></p>
<p>Заметьте, что возраст и языки подставляются <strong>автоматически</strong> из объекта, а языки всегда в <strong>верхнем регистре (большими буквами)</strong>. Если данные в объекте поменяются, то и сообщение тоже изменится.</p>
<p>P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)</p>
*/


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan){
        let str ='';
        const {age} = plan;
        const {languages} = plan.skills;
        str+=`Мне ${age} и я владею языками: `;
    
        for (let key in languages){
            str+=`${languages[key]} `.toUpperCase();
        }
        return str;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    let str='';
    const {languages,programmingLangs,exp} = plan.skills; //Деструктуризация
    str+=exp;
    return str;
}
console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    let str='';
    const {programmingLangs} = plan.skills;

    for (let key in programmingLangs){
        str+=`Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));


