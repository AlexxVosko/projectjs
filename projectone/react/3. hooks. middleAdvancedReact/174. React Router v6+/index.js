//  Поэтапная миграция 
// с 4-ой версии на 5-ую,  c 5 -ой на 6-ую

// установка последней версии
// npm i react-router-dom --save

// установка 6ой версии
// npm i react-router-dom@6.3.0 --save

// Этапы
// 1) Изменить все Switch на Routes
// 2) Вместо вложенности Route использовать аттрибут elements
// 3) Убрать prop exact (переименован на end)
// 4) activeStyle и activeClassName - не поддерживаются
// 5) Логика формирование путей url - path / <Link to="" />
// https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#upgrade-to-react-router-v6

// компонент <Outlet /> - плэйсхолдер для помещания каких либо компонентов
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/basic?file=src/App.tsx

// хук useNavigate()
// браузер запоминает последовательность посещения страниц

// компонент <Prompt /> - удален
// всплывашки когда пользователь уходит с сайта