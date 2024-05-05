import { createContext } from "react";
import { useReducer } from "react";

const ArticleContext = createContext({
    durationId:'',
    changeDuration:(id)=>{}
});

const articleReducer = (state, action) =>{
    if(action.type === 'GET_DURATION'){
        return {
            ...state,
            durationId: action.id
        }
    }
    return state;
}

export const ArticleContextProvider = ({children}) => {
    const [article, dispatchArticleAction] = useReducer(articleReducer, {durationId:'1'});

    const articleContext ={
        durationId: article.durationId,
        changeDuration,
    }

    function changeDuration (id){
        console.log('ids',id)
        dispatchArticleAction({type:'GET_DURATION', id});
    }
    return(
        <ArticleContext.Provider value={articleContext}>
            {children}
        </ArticleContext.Provider>
    )
}

export default ArticleContext;