import React from 'react'
import { PageTemplate, HBox, Flex1 } from '@ui/atoms'
import { styled } from '@ui/theme'
import {
  Header,
  ButtonAccent,
  CheckboxWithText,
  TextField,
  TextareaField,
} from '@ui/molecules'
import { RadioSelect } from '@ui/organisms'
import { Formik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  firstName: '',
  lastName: '',
  telephone: '',
  mail: '',
  comment: '',
  gender: '',
  subtract: false,
}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required('firstName is required field')
    .min(3, 'min 3 characters')
    .max(20, 'max 20 characters'),
  lastName: Yup.string()
    .required('lastName is required field')
    .min(3, 'min 3 characters')
    .max(20, 'max 20 characters'),
  telephone: Yup.string()
    .min(10, 'must contains 10 characters')
    .min(10, 'must contains 10 characters')
    .matches(/^(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/, {
      excludeEmptyString: true,
      message: 'must contains 10 numbers',
    })
    .required('telephone is required field'),
  mail: Yup.string().required(),
  comment: Yup.string().max(200, 'max 200 characters'),
  // gender: Yup.string().required(),
  subtract: Yup.bool()
    .oneOf([true], 'Must Accept Terms and Conditions')
    .required('subtract is required field'),
})

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export function VacuumForm(props) {
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      validateOnBlur={false}
      validateOnChange={true}
      onSubmit={values => console.log('values', values)}
      render={props => (
        <form>
          <PageTemplate>
            <Header title="Ввод номера телефона" icon="back" />
            <Flex1>
              <Wrapper>
                <TextField
                  label="Ваше имя"
                  value={props.values.firstName}
                  onChange={value => props.setFieldValue('firstName', value)}
                  placeholder="Иван"
                  name="firstName"
                />
                <HBox />
                <TextField
                  label="Ваша фамилия"
                  value={props.values.lastName}
                  onChange={value => props.setFieldValue('lastName', value)}
                  placeholder="Иванов"
                  name="lastName"
                />
                <HBox />
                <TextField
                  label="Номер телефона"
                  value={props.values.telephone}
                  startAdornment="+7"
                  placeholder="XXXXXXXXXX"
                  onChange={value => props.setFieldValue('telephone', value)}
                  name="telephone"
                />
                <HBox />
                <TextField
                  label="Email"
                  value={props.values.mail}
                  onChange={value => props.setFieldValue('mail', value)}
                  placeholder="simple@mail.com"
                  name="mail"
                />
                <HBox />
                {/* <RadioSelect
                  firstName="Муж"
                  secondName="Жен"
                  label="Пол"
                  value={props.values.gender}
                  onPress={value => props.setFieldValue('gender', value)}
                /> */}
                <HBox />
                <TextareaField
                  value={props.values.comment}
                  label="Комментарий"
                  placeholder="Например, прошу представляться при звонке"
                  name="comment"
                  onChange={value => props.setFieldValue('comment', value)}
                />
                <HBox />
                <CheckboxWithText
                  value={props.values.subtract}
                  name="subtract"
                  onClick={value => props.setFieldValue('subtract', !value)}
                >
                  Со всеми условиями согласен, возможно вторая строка
                </CheckboxWithText>
              </Wrapper>
            </Flex1>
            <Wrapper>
              <ButtonAccent
                disabled={!props.isValid}
                onPress={() => {
                  console.log(props.values)
                }}
              >
                Отправить
              </ButtonAccent>
            </Wrapper>
          </PageTemplate>
        </form>
      )}
    />
  )
}
