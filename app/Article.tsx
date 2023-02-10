type Props = {
  article: Articles;
};

function Article({ article }: Props) {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover-shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="">
        <div>
          <h2>{article.title}</h2>
          <section>
            <p>{article.description}</p>
          </section>
          <footer>
            <p>{article.sources}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
      </div>
    </article>
  );
}

export default Article;
