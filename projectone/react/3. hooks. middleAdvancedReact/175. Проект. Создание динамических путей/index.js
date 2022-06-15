
// при переходе на не существующие страницы - нет совпадений в Router 
// грузится ничего не будет

// отображение 404

// v6
<Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/comics" element={<ComicsPage />} />
    <Route path="/comics/:comicId" element={<SingleComicPage />} />
    <Route path="*" element={<NoMatchPage />} />
</Routes>


// объект match - объект с данными о том как именно path совпал с текущим адресом 
// отвечает за url адрес path - хук useParams
import { useParams } from "react-router-dom";

// объект history - объект API для организации перехода между страницами - хук useHistory

// объект location - объект c состоянием и положением рутера  - хук useLocation


