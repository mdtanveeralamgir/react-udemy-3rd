import Question from "./components/Questions/Questions.jsx";

import QuestionContextProvider from "./components/store/QuestionContext.jsx";
import ProgressBar from "./components/progressBar/ProgressBar.jsx";

function App() {
    return <QuestionContextProvider>
        {/*<ProgressBar/>*/}
        <Question/>
    </QuestionContextProvider>
}

export default App;
