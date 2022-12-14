import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import { media } from 'utils/media';
import MailSentState from '../../components/MailSentState';

interface EmailPayload {
  name: string;
  email: string;
  description: string;
}

export default function FormSection() {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch('https://formcarry.com/s/WvAoYI6nx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject: '網站聯繫', ...payload }),
      });

      if (res.status !== 204) {
        setHasErrored(false);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }
  
  if (hasErrored) {
    return <MailSentState />;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputStack>
            {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
            <Input placeholder="你的名字" id="名字" disabled={isDisabled} {...register('name', { required: true })} />
          </InputStack>
          <InputStack>
            {errors.email && <ErrorMessage>Email is required</ErrorMessage>}
            <Input placeholder="你的電子郵件" id="電子郵件" disabled={isDisabled} {...register('email', { required: true })} />
          </InputStack>
        </InputGroup>
        <InputStack>
          {errors.description && <ErrorMessage>Description is required</ErrorMessage>}
          <Textarea
            as="textarea"
            placeholder="輸入您的聯絡內容..."
            id="內容"
            disabled={isDisabled}
            {...register('description', { required: true })}
          />
        </InputStack>
        <Button as="button" type="submit" disabled={isSubmitDisabled}>
          發送聯繫
        </Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 2;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    margin-right: 2rem;
  }
  & > * {
    flex: 1;
  }
  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
