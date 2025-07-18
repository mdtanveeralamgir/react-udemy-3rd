export default function Input({val, onInputChange, labelText, wrapper = 'p'}) {
    const Wrapper = wrapper;

    return <Wrapper>
        <label>{labelText}</label>
        <input value={val} onInput={(e) => onInputChange(e)} type="number"/>
    </Wrapper>;
}