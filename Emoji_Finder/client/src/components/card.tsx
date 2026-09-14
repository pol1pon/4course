
export interface IEmoji{
    emoji: string
    title: string
    keywords: string
}




function Card({emoji, title, keywords}: IEmoji){
    return (
        <>
        <div className = 'card'>
            <p className='emoji'>{emoji}</p>
            <p className='title'>{title}</p>
            <p className='keywords'>{keywords}</p>
        </div>
        </>
    )
}
export default Card