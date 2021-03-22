import styled from 'styled-components'

export const CenterContainer = styled.div`
width: 400px;
height:600px;
display: flex;
flex-direction:column;
align-items: center;
border-radius: 10px;
border: 1px solid #CCC;
background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.05), #FFF);
`

export const RowContainer = styled.div`
width: ${(props) => `${props.width}px`};
height: ${(props) => `${props.height}px`};
display: flex;
flex-direction:row;
align-items: ${(props) => `${props.align_items}`};
`

export const ColumnContainer = styled.div`
width: ${(props) => `${props.width}px`};
height: ${(props) => `${props.height}px`};
display: flex;
flex-direction:column;
`

export const FormsContainer = styled.form`
height: ${(props) => `${props.height}px`};
display:flex;
flex-direction: row;
flex-wrap: wrap;
padding: 5px;
`



export const StyledText = styled.div`
width: ${(props) => `${props.width}px`};
padding: ${(props) => `${props.padding}px`};
font-size: ${(props) => `${props.font_size}px`};
color: ${(props) => `${props.color}`};
text-align: ${(props) => `${props.text_align}`};
position: relative;
top: ${(props) => `${(props.top)}px`};
`


export const Button = styled.button`
margin: 10px 5px;
width: 200px;
height: 30px;
border-radius: 2px;
font-size: 12px;
color: #DDDDDD;
background-color: #350060;
`

export const Label = styled.label`
width: ${(props) => `${props.width}px`};
display:flex;
font-size:14px;
flex-direction: column;
padding: 3px;
text-align: left;
`

export const Input = styled.input`
width: ${(props) => `${props.width}px`};
height: 15px;
border-radius: 4px;
`

export const StyledSpanText = styled.span`
position: relative;
left: 30px;
font-size: ${(props) => `${props.font_size}px`};
color: ${(props) => `${props.color}`};
`

export const StyledImg = styled.img`
height: '150px';
alt: '';
cursor: pointer;
`

