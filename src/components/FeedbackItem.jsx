import Card from "./shared/Card"

const FeedbackItem = ({ item }) => {
    return (
        <Card reverser={true}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem