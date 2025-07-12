export default function Tabs({children, buttons, buttonContainer}) {
    //using buttonContainer for container doesn't work. the variable name has to start with upper case char
    //Or the argument name should start with upper case char
    const ButtonContainer = buttonContainer;
    return (<>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>);
}