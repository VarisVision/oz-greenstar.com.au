interface headlineTextProps {
    subTitle: string;
    title: string;
    text: string;
}

export default function headlineText({subTitle, title, text}: headlineTextProps) {
    return (
        <section className="ozgs-headline-text">
            <div className="ozgs-headline-text__wrapper">
                <span>{subTitle}</span>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </section>
    )
}