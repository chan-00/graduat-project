
function BoardCommentListShow({posts}) {

    return (
        <div>
            {posts.map((post) => {
                return(
                    <div key={post[0]} id={post[0]} className="commentsContainer">
                        <span>{post[2]}</span>
                        <pre>{post[1]}</pre>
                        <span>{post[3]}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default BoardCommentListShow;