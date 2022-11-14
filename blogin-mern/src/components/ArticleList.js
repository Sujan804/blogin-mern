import {Link} from 'react-router-dom';
const ArticleList = ({articles})=>{
    return(
        <>
            {articles.map(article=>(
                <Link to={`/articles/${article.name}`} className="article-list-item">
                     <div>
                    <h3>{article.name}</h3>
                    <p>{article.content.substring(0,150)}...</p>
                </div>
                </Link>
            ))}
        </>
       
    )
}
export default ArticleList;