import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik';
import environment from '../enviroments'


import {
  CenterContainer,
  RowContainer,
  ColumnContainer,
  FormsContainer,
  StyledText,
  Button,
  Label,
  Input,
  StyledSpanText
} from './styles/styles'




const MainPage = () => {
  const [results, setResults] = useState(false)
  const [requestedData, setRequestedData] = useState('')
  /* const [triggerState, setTriggerState] = useState(false) */
  const [warning, setWarning] = useState(false)
  const [graphWarning, setGraphWarning] = useState(false)
  const [graphContainer, setGraphContainer] = useState(false)
  const [imgUrl, setImgUrl] = useState('')



  /* useEffect(() => {

  },// eslint-disable-next-line react-hooks/exhaustive-deps
    [triggerState]) */


  const getConstantsValues = useFormik({
    initialValues: {
      n_values: '',
      k_value: '',
      initial_value: '',
      max_iterations: '',
      tolerance: ''
    },
    onSubmit: values => {
      setWarning(true)
      setGraphContainer(false)

      setTimeout(setResults, 500, true)

      let requestObject = { ...values, n_values: JSON.parse("[" + values.n_values + "]") }
      sendZeroRequest(requestObject)

      setTimeout(setWarning, 1000, false)

    }
  });


  const sendZeroRequest = (data) => {

    axios.post(`${environment.production}/request`,
      { ...data })
      .then((res) => {
        console.log(res)
        setRequestedData(res.data.Eq_zero)
      })
      .catch((res) => {
        setRequestedData('Zero Not Found')
      })
  }

  const handleGraphics = () => {

    setGraphWarning(true)
    axios.post(`${environment.production}/graphic`)
      .then((res) => {
        console.log(res.data.img)
        setImgUrl(res.data.img)

      })
      .catch((res) => { })

  }

  const showGraphics = () => {

    setGraphWarning(false)
    setGraphContainer(true)

    setTimeout(handleGraphics, 4000)
  }



  return (
    <CenterContainer>

      <RowContainer height={40} align_items={'center'}>
        <StyledText font_size={25}>Polynomial Calculator(v1.0)</StyledText>
      </RowContainer>


      <RowContainer width={350} height={30} align_items={'center'}>
        <StyledText text_align={'left'} width={75}>Function:</StyledText>
        <StyledText > f(x) = p(x) + k * cos(x) </StyledText>
      </RowContainer>
      <StyledText height={50} padding={10} font_size={10} text_align={'left'}>
        Note: The power of the polynomial is quantity of items in the n values minus 1.
        For example, the input is 4,3,2,1 have four items, so the power of polynomial is three.
        Also, we have a k constant for cos. Putting k value: 3,
        this example will generate this polynomial:4x^3 + 3x^2 + 2x^1 + 1x^0 + 3*cos(x). </StyledText>

      <RowContainer >
        <RowContainer width={300} height={210}>
          <FormsContainer height={200} onSubmit={getConstantsValues.handleSubmit}>
            <RowContainer>
              <Label width={100} htmlFor="n_values">N values:</Label>
              <Input
                width={150}
                id="n_values"
                name="n_values"
                type="n_values"
                onChange={getConstantsValues.handleChange}
                value={getConstantsValues.values.n_values}
              />
            </RowContainer>
            <RowContainer>
              <Label width={100} htmlFor="k_value">K value:</Label>
              <Input
                width={150}
                id="k_value"
                name="k_value"
                type="k_value"
                onChange={getConstantsValues.handleChange}
                value={getConstantsValues.values.k_value}
              />
            </RowContainer>
            <RowContainer>
              <Label width={100} htmlFor="initial_value">Initial Value:</Label>
              <Input
                width={150}
                id="initial_value"
                name="initial_value"
                type="initial_value"
                onChange={getConstantsValues.handleChange}
                value={getConstantsValues.values.initial_value}
              />
            </RowContainer>
            <RowContainer>
              <Label width={100} htmlFor="max_iterations">Max Iterations:</Label>
              <Input
                width={150}
                id="max_iterations"
                name="max_iterations"
                type="max_iterations"
                onChange={getConstantsValues.handleChange}
                value={getConstantsValues.values.max_iterations}
              />
            </RowContainer>
            <RowContainer>
              <Label width={100} htmlFor="tolerance">Tolerance:</Label>
              <Input
                width={150}
                id="tolerance"
                name="tolerance"
                type="tolerance"
                onChange={getConstantsValues.handleChange}
                value={getConstantsValues.values.tolerance}
              />
            </RowContainer>
            <RowContainer align_items={'center'}>
              <Button type="submit">Send!</Button>
            </RowContainer>
          </FormsContainer>
        </RowContainer>
      </RowContainer>

      {results && <ColumnContainer height={110} width={300}>
        <StyledText font_size={20} text_align={'left'}> Results:{warning && <StyledSpanText color={"#DD0000"} font_size={12}>...loading</StyledSpanText>}</StyledText>
        <StyledText font_size={14} text_align={'left'}> Zero of equation: {requestedData ? requestedData : <span>Zero not Found!</span>}</StyledText>
        <StyledText font_size={14} text_align={'left'}>Absolute Error: </StyledText>
        <Button onClick={showGraphics} >See Graphics</Button>
      </ColumnContainer>}


      {graphContainer && <ColumnContainer height={150} width={300}>
        {graphWarning ? <img style={{ cursor: 'pointer', height: '150px' }} alt={''} src={`${environment.production}/${imgUrl}`} /> : <StyledText color={"#DD0000"} > ...Loading</StyledText>}
      </ColumnContainer>}


    </CenterContainer >

  )
}


export default MainPage


