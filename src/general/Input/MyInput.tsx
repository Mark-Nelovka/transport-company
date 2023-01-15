import { useField } from "formik";
import * as S from "../../components/Hero/Form/Form.styled";

interface IText {
  name: string;
  type: string;
  placeholder: string;
  id: string;
  src: string;
  alt: string;
}

export const MyTextInput = ({
  name,
  type,
  placeholder,
  id,
  src,
  alt,
}: IText) => {
  const [field, meta] = useField({ name, type, placeholder });
  return (
    <S.InputContainer>
      <S.InputLabel htmlFor={id}>
        <S.InputIconContainer>
          <img src={src} alt={alt} />
        </S.InputIconContainer>

        <S.InputForm
          {...field}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </S.InputLabel>
      {meta.touched && meta.error ? (
        <S.ErrorMessage>{meta.error}</S.ErrorMessage>
      ) : null}
    </S.InputContainer>
  );
};
