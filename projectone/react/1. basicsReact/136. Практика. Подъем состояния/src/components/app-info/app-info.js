import "./app-info.css";

const AppInfo = ({employees, increasedItem}) => {

      return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Vosko</h1>
            <h2> Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increasedItem}</h2>
        </div>
      );
}

export default AppInfo;