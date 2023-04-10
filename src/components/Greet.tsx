type GreetProps = {
    name: string
    numCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {props.isLoggedIn
                    // eslint-disable-next-line no-template-curly-in-string
                    ? `Welcome ${props.name}! You have ${props.numCount} unread messages`
                    : 'Welcome Guest'}
            </h2>
        </div>
    )
}