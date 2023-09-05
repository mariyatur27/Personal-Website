import React from 'react'

export default function ArticlePage(props) {
    const articleName = props.articleName;
    const articleDate = props.articleDate;
    const articleLength = props.articleLength;
    const articleContent = props.articleContent;

    return (
    <section id='blogPage' className='center-sec-seciton'>
        <h2 className='section-title'>{articleName}</h2>
        <div className='general-info'>
            <h5>{articleDate}</h5>
            <h5>{articleLength}</h5>
        </div>
        <div className='article-body'>
            {articleContent.map((data, key) => {
                return(
                    <div className='sub-section' key={key}>
                        <h2>{data.name}</h2>
                        <p>{data.section}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
